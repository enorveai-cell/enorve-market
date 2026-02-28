import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import type { LaborInputs, LaborResults } from "../hooks/useROICalculator"

function formatCurrency(value: number): string {
    return `$${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`
}

function formatPercent(value: number): string {
    return `${Math.round(value * 100)}%`
}

export function generateROIPdf(inputs: LaborInputs, results: LaborResults) {
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })
    const pageWidth = doc.internal.pageSize.getWidth()
    let y = 20

    // Colors
    const primary = [16, 185, 129] as const  // emerald-500
    const dark = [15, 15, 25] as const
    const gray = [156, 163, 175] as const

    // ── Header ──
    doc.setFillColor(...dark)
    doc.rect(0, 0, pageWidth, 45, "F")

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(22)
    doc.setFont("helvetica", "bold")
    doc.text("Labor Replacement Analysis", 20, y + 8)

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(...gray)
    doc.text("Enorve — Governed Autonomous AI Operations", 20, y + 16)

    const now = new Date()
    doc.text(`Generated: ${now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`, 20, y + 24)

    y = 55

    // ── Executive Summary ──
    doc.setTextColor(40, 40, 60)
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("Labor Replacement Summary", 20, y)
    y += 8

    autoTable(doc, {
        startY: y,
        head: [["Metric", "Value"]],
        body: [
            ["Net Annual Savings", formatCurrency(results.netAnnualSavings)],
            ["Headcount Reduction", `${results.headcountReduction} agents (${results.projectedHeadcount + results.headcountReduction} → ${results.projectedHeadcount})`],
            ["Annual Labor Savings", formatCurrency(results.annualLaborSavings)],
            ["Enorve Platform Cost", `${formatCurrency(results.enorveAnnualCost)}/yr (${results.enorveMonthlyPlan} plan)`],
            ["3-Year Cumulative Savings", formatCurrency(results.threeYearCumulativeSavings)],
            [
                "ROI Timeline",
                results.roiMonths === null
                    ? "N/A"
                    : results.roiMonths <= 1
                        ? "< 1 month"
                        : `${results.roiMonths} months`,
            ],
        ],
        theme: "grid",
        headStyles: { fillColor: [...primary], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 10 },
        bodyStyles: { fontSize: 10 },
        margin: { left: 20, right: 20 },
    })

    y = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 12

    // ── Inputs Used ──
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(40, 40, 60)
    doc.text("Inputs & Assumptions", 20, y)
    y += 8

    autoTable(doc, {
        startY: y,
        head: [["Parameter", "Value"]],
        body: [
            ["Current Support Headcount", `${inputs.currentHeadcount}`],
            ["Avg Agent Cost (fully loaded)", formatCurrency(inputs.avgAgentCost)],
            ["Monthly Conversations", `${inputs.monthlyConversations.toLocaleString()}`],
            ["Expected Automation Rate", formatPercent(inputs.automationRate)],
        ],
        theme: "striped",
        headStyles: { fillColor: [...primary], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 10 },
        bodyStyles: { fontSize: 9.5 },
        alternateRowStyles: { fillColor: [245, 245, 250] },
        margin: { left: 20, right: 20 },
    })

    y = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 12

    // ── Cost Comparison ──
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("Annual Cost Comparison", 20, y)
    y += 8

    autoTable(doc, {
        startY: y,
        head: [["Scenario", "Labor Cost", "Platform Cost", "Total"]],
        body: [
            ["Current (no AI)", formatCurrency(results.currentAnnualLaborCost), "$0", formatCurrency(results.currentAnnualLaborCost)],
            ["With Enorve", formatCurrency(results.reducedLaborCost), formatCurrency(results.enorveAnnualCost), formatCurrency(results.reducedLaborCost + results.enorveAnnualCost)],
        ],
        theme: "grid",
        headStyles: { fillColor: [...primary], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 9 },
        bodyStyles: { fontSize: 9 },
        columnStyles: {
            0: { fontStyle: "bold" },
        },
        margin: { left: 20, right: 20 },
    })

    y = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 12

    // ── Conversation Breakdown ──
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("Conversation Breakdown", 20, y)
    y += 8

    autoTable(doc, {
        startY: y,
        head: [["Metric", "Value"]],
        body: [
            ["Monthly Conversations", `${inputs.monthlyConversations.toLocaleString()}`],
            ["Autonomous (AI-resolved)", `${results.autonomousConversationsPerMonth.toLocaleString()} (${formatPercent(inputs.automationRate)})`],
            ["Human-handled", `${results.humanConversationsPerMonth.toLocaleString()} (${formatPercent(1 - inputs.automationRate)})`],
            ["Conversations per Agent", `${results.conversationsPerAgent}`],
        ],
        theme: "grid",
        headStyles: { fillColor: [...primary], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 10 },
        bodyStyles: { fontSize: 10 },
        margin: { left: 20, right: 20 },
    })

    y = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 20

    // ── Disclaimer ──
    if (y > 250) {
        doc.addPage()
        y = 20
    }

    doc.setDrawColor(200, 200, 210)
    doc.line(20, y, pageWidth - 20, y)
    y += 8

    doc.setFontSize(8)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(130, 130, 150)

    const disclaimer = [
        "DISCLAIMER: This analysis is provided for informational purposes only and does not constitute financial advice.",
        "Actual costs and savings may vary based on conversation complexity, AI training quality, and operational factors.",
        "Enorve pricing is based on current list prices and may change. All projections are estimates based on the",
        "input parameters provided. Please consult your financial advisor for decisions involving capital allocation.",
    ]

    disclaimer.forEach(line => {
        doc.text(line, 20, y)
        y += 4
    })

    // ── Footer ──
    doc.setFontSize(7)
    doc.setTextColor(180, 180, 190)
    doc.text("© Enorve — Governed Autonomous AI Operations", 20, doc.internal.pageSize.getHeight() - 10)
    doc.text(`Page 1 of ${doc.getNumberOfPages()}`, pageWidth - 40, doc.internal.pageSize.getHeight() - 10)

    // Save
    doc.save("Enorve-Labor-Replacement-Analysis.pdf")
}
