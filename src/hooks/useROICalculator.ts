import { useState, useMemo } from "react"
import { competitors, enorve, type CompetitorPricing } from "../data/competitorPricing"

/* ───────── Types ───────── */

export interface ROIInputs {
    // Operational
    numberOfAgents: number
    monthlyTicketVolume: number
    aiDeflectionRate: number   // 0–0.80
    avgHandleTime: number      // minutes
    agentUtilization: number   // 0–1

    // Financial
    fullyLoadedSalary: number  // $/year
    hiringOnboardingCost: number
    migrationCost: number
    discountRate: number       // 0–1 (e.g. 0.08 for 8%)
}

export interface VendorResult {
    name: string
    softwareCostAnnual: number
    aiAddonCostAnnual: number
    laborCostAnnual: number
    tsocAnnual: number
    costPerTicket: number
    requiredAgents: number
}

export interface ROIResults {
    // Per-vendor
    enorveResult: VendorResult
    competitorResults: VendorResult[]
    withoutAI: {
        requiredAgents: number
        laborCostAnnual: number
    }

    // Savings vs each competitor
    savingsVsCompetitors: Array<{
        competitor: string
        annualSavings: number
        threeYearCumulative: number
        npv: number
        paybackMonths: number | null
    }>

    // Best-case summary (vs most expensive competitor)
    bestAnnualSavings: number
    bestThreeYearNPV: number
    fteAvoided: number
    bestPaybackMonths: number | null
    ticketsPerAgentCapacity: number

    // 3-year projection data (for charts)
    projectionData: Array<{
        month: number
        [vendorName: string]: number
    }>

    // Edge-case warnings
    warnings: string[]
}

/* ───────── Constants ───────── */

const WORK_HOURS_PER_MONTH = 160
const MONTHS_PER_YEAR = 12

/* ───────── Hook ───────── */

export function useROICalculator() {
    const [inputs, setInputs] = useState<ROIInputs>({
        numberOfAgents: 50,
        monthlyTicketVolume: 50 * 150,
        aiDeflectionRate: 0.40,
        avgHandleTime: 8,
        agentUtilization: 0.80,
        fullyLoadedSalary: 55000,
        hiringOnboardingCost: 6000,
        migrationCost: 0,
        discountRate: 0.08,
    })

    function setInput<K extends keyof ROIInputs>(key: K, value: ROIInputs[K]) {
        setInputs(prev => ({ ...prev, [key]: value }))
    }

    const results = useMemo<ROIResults>(() => {
        const warnings: string[] = []

        /* ── Agent Capacity ── */
        const effectiveMinutes = WORK_HOURS_PER_MONTH * 60 * inputs.agentUtilization
        const ticketsPerAgentCapacity = Math.floor(effectiveMinutes / inputs.avgHandleTime)

        /* ── Without AI (baseline) ── */
        const totalMonthlyTickets = inputs.monthlyTicketVolume
        const totalAnnualTickets = totalMonthlyTickets * MONTHS_PER_YEAR
        const agentsWithoutAI = Math.ceil(totalMonthlyTickets / ticketsPerAgentCapacity)
        const laborCostWithoutAI = agentsWithoutAI * inputs.fullyLoadedSalary

        /* ── With AI (Enorve) ── */
        const humanTicketsMonthly = totalMonthlyTickets * (1 - inputs.aiDeflectionRate)
        const agentsWithAI = Math.ceil(humanTicketsMonthly / ticketsPerAgentCapacity)
        const fteAvoided = Math.max(0, agentsWithoutAI - agentsWithAI)
        const laborCostWithAI = agentsWithAI * inputs.fullyLoadedSalary

        /* ── Edge Cases ── */
        if (inputs.aiDeflectionRate === 0) {
            warnings.push("With 0% AI deflection, this is a pure software cost comparison. Enable AI to see labor savings.")
        }
        if (inputs.aiDeflectionRate >= 0.70) {
            warnings.push("Deflection rates above 70% show diminishing returns. Consider investing savings into proactive support.")
        }

        /* ── Vendor Cost Calculations ── */
        function calcVendor(
            comp: CompetitorPricing | typeof enorve,
            useAI: boolean
        ): VendorResult {
            const agents = useAI ? agentsWithAI : agentsWithoutAI
            const labor = useAI ? laborCostWithAI : laborCostWithoutAI

            // Software cost
            let softwareCostMonthly: number
            if ("basePlanCost" in comp) {
                // Enorve — flat $499 for up to 100, then per-agent beyond
                if (agents <= comp.maxAgentsInBase) {
                    softwareCostMonthly = comp.basePlanCost
                } else {
                    softwareCostMonthly = comp.basePlanCost + (agents - comp.maxAgentsInBase) * comp.perAgentCost
                }
            } else {
                softwareCostMonthly = agents * comp.perAgentCost
            }

            // AI add-on cost
            let aiAddonMonthly = agents * comp.aiAddonCost
            if (comp.perResolutionCost && comp.perResolutionCost > 0) {
                // Resolution-based pricing (Intercom)
                const deflectedTicketsMonthly = totalMonthlyTickets * inputs.aiDeflectionRate
                aiAddonMonthly += deflectedTicketsMonthly * comp.perResolutionCost
            }

            const softwareCostAnnual = softwareCostMonthly * MONTHS_PER_YEAR
            const aiAddonCostAnnual = aiAddonMonthly * MONTHS_PER_YEAR
            const tsocAnnual = softwareCostAnnual + aiAddonCostAnnual + labor
            const costPerTicket = totalAnnualTickets > 0 ? tsocAnnual / totalAnnualTickets : 0

            return {
                name: comp.name,
                softwareCostAnnual,
                aiAddonCostAnnual,
                laborCostAnnual: labor,
                tsocAnnual,
                costPerTicket,
                requiredAgents: agents,
            }
        }

        // Enorve always uses AI
        const enorveResult = calcVendor(enorve, true)

        // Competitors — calculate with their AI add-ons but without labor savings from deflection
        // (they have AI features too, but Enorve's deflection rate is what we model)
        const competitorResults = competitors.map(comp => {
            // Competitors: full agent headcount (no deflection benefit), plus their AI costs
            const agents = agentsWithoutAI
            const labor = laborCostWithoutAI

            let softwareCostMonthly = agents * comp.perAgentCost
            let aiAddonMonthly = agents * comp.aiAddonCost
            if (comp.perResolutionCost && comp.perResolutionCost > 0) {
                // Estimate resolution cost based on modest 15% deflection for competitors
                const compDeflectedTickets = totalMonthlyTickets * 0.15
                aiAddonMonthly += compDeflectedTickets * comp.perResolutionCost
            }

            const softwareCostAnnual = softwareCostMonthly * MONTHS_PER_YEAR
            const aiAddonCostAnnual = aiAddonMonthly * MONTHS_PER_YEAR
            const tsocAnnual = softwareCostAnnual + aiAddonCostAnnual + labor
            const costPerTicket = totalAnnualTickets > 0 ? tsocAnnual / totalAnnualTickets : 0

            return {
                name: comp.name,
                softwareCostAnnual,
                aiAddonCostAnnual,
                laborCostAnnual: labor,
                tsocAnnual,
                costPerTicket,
                requiredAgents: agents,
            }
        })

        /* ── Savings & NPV per competitor ── */
        const savingsVsCompetitors = competitorResults.map(cr => {
            const annualSavings = cr.tsocAnnual - enorveResult.tsocAnnual
            const threeYearCumulative = annualSavings * 3

            // NPV over 3 years (migration cost in Year 0)
            let npv = -inputs.migrationCost
            for (let year = 1; year <= 3; year++) {
                npv += annualSavings / Math.pow(1 + inputs.discountRate, year)
            }

            // Payback period
            const monthlySavings = annualSavings / MONTHS_PER_YEAR
            let paybackMonths: number | null = null
            if (monthlySavings > 0 && inputs.migrationCost > 0) {
                paybackMonths = Math.ceil(inputs.migrationCost / monthlySavings)
            } else if (monthlySavings > 0 && inputs.migrationCost === 0) {
                paybackMonths = 0 // Immediate savings
            }

            return {
                competitor: cr.name,
                annualSavings,
                threeYearCumulative,
                npv,
                paybackMonths,
            }
        })

        // Best case = highest savings
        const bestSavings = savingsVsCompetitors.reduce((best, s) =>
            s.annualSavings > best.annualSavings ? s : best
            , savingsVsCompetitors[0])

        // Check negative ROI
        if (bestSavings.annualSavings < 0) {
            warnings.push("Current inputs show Enorve costs more than competitors. Consider increasing AI deflection rate or adjusting team size for better ROI.")
        }

        /* ── 3-Year Monthly Projection ── */
        const projectionData: ROIResults["projectionData"] = []
        for (let month = 0; month <= 36; month++) {
            const entry: Record<string, number> = { month }

            // Enorve cumulative cost
            const enorveMonthly = enorveResult.tsocAnnual / MONTHS_PER_YEAR
            entry["Enorve"] = month === 0
                ? inputs.migrationCost
                : inputs.migrationCost + enorveMonthly * month

            // Competitor cumulative costs
            for (const cr of competitorResults) {
                const crMonthly = cr.tsocAnnual / MONTHS_PER_YEAR
                entry[cr.name] = crMonthly * month
            }

            projectionData.push(entry as typeof projectionData[0])
        }

        return {
            enorveResult,
            competitorResults,
            withoutAI: {
                requiredAgents: agentsWithoutAI,
                laborCostAnnual: laborCostWithoutAI,
            },
            savingsVsCompetitors,
            bestAnnualSavings: bestSavings.annualSavings,
            bestThreeYearNPV: bestSavings.npv,
            fteAvoided,
            bestPaybackMonths: bestSavings.paybackMonths,
            ticketsPerAgentCapacity,
            projectionData,
            warnings,
        }
    }, [inputs])

    return { inputs, setInput, results }
}
