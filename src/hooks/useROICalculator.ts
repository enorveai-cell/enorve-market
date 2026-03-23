import { useState, useMemo } from "react"

/* ───────── Types ───────── */

export interface LaborInputs {
    currentHeadcount: number
    avgAgentCost: number        // $/year fully loaded
    monthlyConversations: number
    automationRate: number      // 0–0.80
}

export interface LaborResults {
    // Current state
    currentAnnualLaborCost: number

    // Projected state with Enorve
    projectedHeadcount: number
    headcountReduction: number
    reducedLaborCost: number

    // Enorve platform cost (based on conversation volume tier)
    enorveAnnualCost: number
    enorveMonthlyPlan: string
    enorveMonthlyPlanCost: number

    // Savings
    annualLaborSavings: number
    netAnnualSavings: number   // after Enorve cost
    threeYearCumulativeSavings: number

    // ROI
    roiPercent: number
    roiMonths: number | null   // months to break even (null if no savings)

    // Efficiency metrics
    conversationsPerAgent: number
    autonomousConversationsPerMonth: number
    humanConversationsPerMonth: number

    // 3-year projection data (for charts)
    projectionData: Array<{
        month: number
        currentCost: number      // cumulative without Enorve
        enorveBasedCost: number  // cumulative with Enorve
        savings: number          // cumulative savings
    }>

    // Warnings
    warnings: string[]
}

/* ───────── Constants ───────── */

const CONVERSATIONS_PER_AGENT_PER_MONTH = 150

// Enorve pricing tiers (based on monthly conversation volume)
function getEnorvePlan(monthlyConversations: number): { name: string; monthlyCost: number } {
    if (monthlyConversations <= 1000) return { name: "Starter", monthlyCost: 39 }
    if (monthlyConversations <= 10000) return { name: "Professional", monthlyCost: 199 }
    if (monthlyConversations <= 50000) return { name: "Business", monthlyCost: 499 }
    // Enterprise — estimate based on volume
    return { name: "Enterprise", monthlyCost: Math.ceil(monthlyConversations / 10000) * 499 }
}

/* ───────── Hook ───────── */

export function useROICalculator() {
    // Read URL params for shareable links
    const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null
    const [inputs, setInputs] = useState<LaborInputs>(() => ({
        currentHeadcount: Number(searchParams?.get("agents")) || 15,
        avgAgentCost: Number(searchParams?.get("salary")) || 55000,
        monthlyConversations: Number(searchParams?.get("conversations")) || 5000,
        automationRate: Number(searchParams?.get("automation")) || 0.60,
    }))

    function setInput<K extends keyof LaborInputs>(key: K, value: LaborInputs[K]) {
        setInputs(prev => {
            const next = { ...prev, [key]: value }
            // Encode in URL for shareable links
            const params = new URLSearchParams({
                agents: String(next.currentHeadcount),
                salary: String(next.avgAgentCost),
                conversations: String(next.monthlyConversations),
                automation: String(next.automationRate),
            })
            window.history.replaceState({}, "", `?${params.toString()}`)
            return next
        })
    }

    const results = useMemo<LaborResults>(() => {
        const warnings: string[] = []

        /* ── Current State ── */
        const currentAnnualLaborCost = inputs.currentHeadcount * inputs.avgAgentCost

        /* ── With Enorve ── */
        const humanConversationsPerMonth = inputs.monthlyConversations * (1 - inputs.automationRate)
        const autonomousConversationsPerMonth = inputs.monthlyConversations * inputs.automationRate
        const projectedHeadcount = Math.max(1, Math.ceil(humanConversationsPerMonth / CONVERSATIONS_PER_AGENT_PER_MONTH))
        const headcountReduction = Math.max(0, inputs.currentHeadcount - projectedHeadcount)
        const reducedLaborCost = projectedHeadcount * inputs.avgAgentCost

        /* ── Enorve Platform Cost ── */
        const plan = getEnorvePlan(inputs.monthlyConversations)
        const enorveAnnualCost = plan.monthlyCost * 12

        /* ── Savings ── */
        const annualLaborSavings = currentAnnualLaborCost - reducedLaborCost
        const netAnnualSavings = annualLaborSavings - enorveAnnualCost
        const threeYearCumulativeSavings = netAnnualSavings * 3

        /* ── ROI ── */
        const roiPercent = enorveAnnualCost > 0
            ? (netAnnualSavings / enorveAnnualCost) * 100
            : 0
        const monthlyNetSavings = netAnnualSavings / 12
        const roiMonths = monthlyNetSavings > 0
            ? Math.max(1, Math.ceil(enorveAnnualCost / (netAnnualSavings / 1))) // months in first year
            : null

        // Simpler ROI: how many months of Enorve cost before annual savings cover it
        const actualRoiMonths = netAnnualSavings > 0
            ? Math.max(1, Math.ceil(enorveAnnualCost / monthlyNetSavings))
            : null

        /* ── Edge Cases ── */
        if (inputs.automationRate === 0) {
            warnings.push("With 0% automation, there are no labor savings. Increase the automation rate to see the impact.")
        }
        if (netAnnualSavings < 0) {
            warnings.push("Current inputs show Enorve costs more than labor savings. Try increasing headcount, agent cost, or automation rate.")
        }
        if (inputs.currentHeadcount <= 2 && inputs.automationRate < 0.5) {
            warnings.push("Very small teams may not see significant headcount reduction at low automation rates.")
        }

        /* ── Efficiency ── */
        const conversationsPerAgent = projectedHeadcount > 0
            ? Math.round(humanConversationsPerMonth / projectedHeadcount)
            : 0

        /* ── 3-Year Projection ── */
        const projectionData: LaborResults["projectionData"] = []
        const currentMonthlyCost = currentAnnualLaborCost / 12
        const enorveBasedMonthlyCost = (reducedLaborCost + enorveAnnualCost) / 12

        for (let month = 0; month <= 36; month++) {
            projectionData.push({
                month,
                currentCost: currentMonthlyCost * month,
                enorveBasedCost: enorveBasedMonthlyCost * month,
                savings: (currentMonthlyCost - enorveBasedMonthlyCost) * month,
            })
        }

        return {
            currentAnnualLaborCost,
            projectedHeadcount,
            headcountReduction,
            reducedLaborCost,
            enorveAnnualCost,
            enorveMonthlyPlan: plan.name,
            enorveMonthlyPlanCost: plan.monthlyCost,
            annualLaborSavings,
            netAnnualSavings,
            threeYearCumulativeSavings,
            roiPercent,
            roiMonths: actualRoiMonths,
            conversationsPerAgent,
            autonomousConversationsPerMonth,
            humanConversationsPerMonth,
            projectionData,
            warnings,
        }
    }, [inputs])

    return { inputs, setInput, results }
}

// Re-export types with old names for backward compatibility
export type ROIInputs = LaborInputs
export type ROIResults = LaborResults
