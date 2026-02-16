import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import type { ROIInputs, ROIResults } from "../hooks/useROICalculator"

function formatCurrency(value: number): string {
    return `$${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`
}

function formatPercent(value: number): string {
    return `${Math.round(value * 100)}%`
}

export function generateROIPdf(inputs: ROIInputs, results: ROIResults) {
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })
    const pageWidth = doc.internal.pageSize.getWidth()
    let y = 20

    // Colors
    const primary = [99, 102, 241] as const  // indigo-500
    const dark = [15, 15, 25] as const
    const gray = [156, 163, 175] as const

    // ── Header ──
    doc.setFillColor(...dark)
    doc.rect(0, 0, pageWidth, 45, "F")

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(22)
    doc.setFont("helvetica", "bold")
    doc.text("Enorve ROI Analysis", 20, y + 8)

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(...gray)
    doc.text("Support Economics Engine — Executive Summary", 20, y + 16)

    const now = new Date()
    doc.text(`Generated: ${now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`, 20, y + 24)

    y = 55

    // ── Executive Summary Metrics ──
    doc.setTextColor(40, 40, 60)
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("Key Metrics", 20, y)
    y += 8

    const bestSavings = results.savingsVsCompetitors.reduce(
        (best, s) => (s.annualSavings > best.annualSavings ? s : best),
        results.savingsVsCompetitors[0]
    )

    autoTable(doc, {
        startY: y,
        head: [["Metric", "Value"]],
        body: [
            ["Annual Savings", formatCurrency(results.bestAnnualSavings)],
            ["3-Year NPV", formatCurrency(results.bestThreeYearNPV)],
            ["FTE Avoided", `${results.fteAvoided} agents`],
            [
                "Payback Period",
                results.bestPaybackMonths === null
                    ? "N/A"
                    : results.bestPaybackMonths === 0
                        ? "Immediate"
                        : `${results.bestPaybackMonths} months`,
            ],
            ["Best Savings vs.", bestSavings?.competitor ?? "N/A"],
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
            ["Number of Agents", `${inputs.numberOfAgents}`],
            ["Monthly Ticket Volume", `${inputs.monthlyTicketVolume.toLocaleString()}`],
            ["AI Deflection Rate", formatPercent(inputs.aiDeflectionRate)],
            ["Avg Handle Time", `${inputs.avgHandleTime} minutes`],
            ["Agent Utilization", formatPercent(inputs.agentUtilization)],
            ["Fully Loaded Salary", formatCurrency(inputs.fullyLoadedSalary)],
            ["Hiring + Onboarding Cost", formatCurrency(inputs.hiringOnboardingCost)],
            ["Migration Cost", formatCurrency(inputs.migrationCost)],
            ["Discount Rate", formatPercent(inputs.discountRate)],
        ],
        theme: "striped",
        headStyles: { fillColor: [...primary], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 10 },
        bodyStyles: { fontSize: 9.5 },
        alternateRowStyles: { fillColor: [245, 245, 250] },
        margin: { left: 20, right: 20 },
    })

    y = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 12

    // ── Cost Breakdown ──
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("Annual Cost Breakdown", 20, y)
    y += 8

    const costRows = [results.enorveResult, ...results.competitorResults].map(v => [
        v.name,
        formatCurrency(v.softwareCostAnnual),
        formatCurrency(v.aiAddonCostAnnual),
        formatCurrency(v.laborCostAnnual),
        formatCurrency(v.tsocAnnual),
        `$${v.costPerTicket.toFixed(2)}`,
    ])

    autoTable(doc, {
        startY: y,
        head: [["Vendor", "Software", "AI Add-ons", "Labor", "Total TSOC", "Cost/Ticket"]],
        body: costRows,
        theme: "grid",
        headStyles: { fillColor: [...primary], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 9 },
        bodyStyles: { fontSize: 9 },
        columnStyles: {
            0: { fontStyle: "bold" },
        },
        margin: { left: 20, right: 20 },
    })

    y = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 12

    // ── Headcount Comparison ──
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("Headcount Impact", 20, y)
    y += 8

    autoTable(doc, {
        startY: y,
        head: [["Scenario", "Required Agents"]],
        body: [
            ["Without AI", `${results.withoutAI.requiredAgents}`],
            ["With Enorve AI", `${results.enorveResult.requiredAgents}`],
            ["FTE Avoided", `${results.fteAvoided}`],
        ],
        theme: "grid",
        headStyles: { fillColor: [...primary], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 10 },
        bodyStyles: { fontSize: 10 },
        margin: { left: 20, right: 20 },
    })

    y = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 12

    // Check if we need a new page
    if (y > 240) {
        doc.addPage()
        y = 20
    }

    // ── 3-Year Savings ──
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("3-Year Savings by Competitor", 20, y)
    y += 8

    const savingsRows = results.savingsVsCompetitors.map(s => [
        `vs ${s.competitor}`,
        formatCurrency(s.annualSavings),
        formatCurrency(s.threeYearCumulative),
        formatCurrency(s.npv),
        s.paybackMonths === null ? "N/A" : s.paybackMonths === 0 ? "Immediate" : `${s.paybackMonths} mo`,
    ])

    autoTable(doc, {
        startY: y,
        head: [["Comparison", "Annual Savings", "3-Year Cumulative", "NPV", "Payback"]],
        body: savingsRows,
        theme: "grid",
        headStyles: { fillColor: [...primary], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 9 },
        bodyStyles: { fontSize: 9 },
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
        "Competitor pricing is based on publicly available list prices as of the last verified date shown in our records.",
        "Actual costs may vary based on negotiated contracts, usage volumes, and vendor-specific terms.",
        "Enorve makes no guarantees regarding the accuracy of third-party pricing data. A quarterly pricing review",
        "process is maintained to keep benchmarks current. All financial projections are estimates based on the",
        "input parameters provided and actual results may differ. Please consult your financial advisor for",
        "decisions involving significant capital allocation.",
    ]

    disclaimer.forEach(line => {
        doc.text(line, 20, y)
        y += 4
    })

    // ── Footer ──
    doc.setFontSize(7)
    doc.setTextColor(180, 180, 190)
    doc.text("© Enorve — Support Economics Engine", 20, doc.internal.pageSize.getHeight() - 10)
    doc.text(`Page 1 of ${doc.getNumberOfPages()}`, pageWidth - 40, doc.internal.pageSize.getHeight() - 10)

    // Save
    doc.save("Enorve-ROI-Analysis.pdf")
}
