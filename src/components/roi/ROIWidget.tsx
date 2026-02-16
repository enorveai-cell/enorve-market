import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    DollarSign, Users, Clock, TrendingUp, Download,
    ArrowRight, Bot, AlertTriangle, ChevronRight
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { Button } from "../ui/Button"
import { useROICalculator } from "../../hooks/useROICalculator"
import { generateROIPdf } from "../../utils/roiPdfExport"

function formatCurrency(value: number): string {
    if (Math.abs(value) >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
    if (Math.abs(value) >= 1_000) return `$${(value / 1_000).toFixed(0)}K`
    return `$${value.toFixed(0)}`
}

export function ROIWidget() {
    const { inputs, setInput, results } = useROICalculator()
    const [showAdvanced, setShowAdvanced] = useState(false)
    const isNegative = results.bestAnnualSavings < 0

    const headcountData = [
        { name: "Without AI", agents: results.withoutAI.requiredAgents, color: "#EF4444" },
        { name: "With Enorve", agents: results.enorveResult.requiredAgents, color: "#10B981" },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-[24px] bg-[#0C0E12] border border-white/5 overflow-hidden"
        >
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(16,185,129,0.12),transparent)] pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 p-6 pb-0 md:p-8 md:pb-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs text-emerald-400 font-medium">Support Economics Engine</span>
                        </div>
                        <h3 className="text-2xl font-medium text-white tracking-tight">
                            How much will you save?
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Total support operating cost — not just subscription price
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => generateROIPdf(inputs, results)}
                            icon={<Download className="w-3.5 h-3.5" />}
                            iconPosition="left"
                        >
                            PDF Report
                        </Button>
                        <Link to="/roi-calculator">
                            <Button variant="ghost" size="sm">
                                Full Analysis <ChevronRight className="w-3.5 h-3.5 ml-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="relative z-10 px-6 pb-6 md:px-8 md:pb-8">
                {/* Inputs Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {/* Number of Agents */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="flex items-center gap-2 mb-2">
                            <Users className="w-3.5 h-3.5 text-violet-400" />
                            <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Agents</label>
                        </div>
                        <input
                            type="number"
                            min={1}
                            max={10000}
                            value={inputs.numberOfAgents}
                            onChange={e => {
                                const val = parseInt(e.target.value) || 1
                                setInput("numberOfAgents", val)
                                setInput("monthlyTicketVolume", val * 150)
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-lg font-semibold
                focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20
                transition-colors"
                        />
                        <p className="text-[10px] text-gray-500 mt-1">{inputs.monthlyTicketVolume.toLocaleString()} tickets/mo</p>
                    </div>

                    {/* AI Deflection Rate */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <Bot className="w-3.5 h-3.5 text-emerald-400" />
                                <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">AI Deflection</label>
                            </div>
                            <span className="text-sm font-semibold text-emerald-400 tabular-nums">
                                {Math.round(inputs.aiDeflectionRate * 100)}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={0.80}
                            step={0.01}
                            value={inputs.aiDeflectionRate}
                            onChange={e => setInput("aiDeflectionRate", parseFloat(e.target.value))}
                            className="w-full h-1.5 rounded-full appearance-none bg-white/10 cursor-pointer mt-2
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-emerald-500
                [&::-webkit-slider-thumb]:border-2
                [&::-webkit-slider-thumb]:border-emerald-300
                [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(16,185,129,0.5)]
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-4
                [&::-moz-range-thumb]:h-4
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-emerald-500
                [&::-moz-range-thumb]:border-2
                [&::-moz-range-thumb]:border-emerald-300
                [&::-moz-range-thumb]:cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                            <span>0%</span>
                            <span>80%</span>
                        </div>
                    </div>

                    {/* Salary */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="flex items-center gap-2 mb-2">
                            <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                            <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Agent Salary (yr)</label>
                        </div>
                        <input
                            type="number"
                            min={0}
                            step={1000}
                            value={inputs.fullyLoadedSalary}
                            onChange={e => setInput("fullyLoadedSalary", parseInt(e.target.value) || 0)}
                            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-lg font-semibold
                focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20
                transition-colors"
                        />
                        <p className="text-[10px] text-gray-500 mt-1">Fully loaded cost per agent</p>
                    </div>
                </div>

                {/* Advanced toggle */}
                <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="text-xs text-gray-500 hover:text-gray-300 transition-colors mb-4 flex items-center gap-1 cursor-pointer"
                >
                    <ChevronRight className={`w-3 h-3 transition-transform ${showAdvanced ? "rotate-90" : ""}`} />
                    Advanced: handle time, utilization, discount rate, migration cost
                </button>

                {showAdvanced && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
                    >
                        {[
                            { key: "avgHandleTime" as const, label: "Handle Time (min)", min: 2, max: 30, step: 1, display: `${inputs.avgHandleTime} min` },
                            { key: "agentUtilization" as const, label: "Utilization", min: 0.4, max: 1, step: 0.05, display: `${Math.round(inputs.agentUtilization * 100)}%` },
                            { key: "discountRate" as const, label: "Discount Rate", min: 0, max: 0.2, step: 0.01, display: `${Math.round(inputs.discountRate * 100)}%` },
                            { key: "migrationCost" as const, label: "Migration Cost", min: 0, max: 100000, step: 1000, display: `$${inputs.migrationCost.toLocaleString()}` },
                        ].map(field => (
                            <div key={field.key} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="flex items-center justify-between mb-1.5">
                                    <label className="text-[10px] text-gray-500 uppercase tracking-wider">{field.label}</label>
                                    <span className="text-xs font-medium text-white tabular-nums">{field.display}</span>
                                </div>
                                <input
                                    type="range"
                                    min={field.min}
                                    max={field.max}
                                    step={field.step}
                                    value={inputs[field.key]}
                                    onChange={e => setInput(field.key, parseFloat(e.target.value))}
                                    className="w-full h-1 rounded-full appearance-none bg-white/10 cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-3
                    [&::-webkit-slider-thumb]:h-3
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-violet-500
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-moz-range-thumb]:w-3
                    [&::-moz-range-thumb]:h-3
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-violet-500
                    [&::-moz-range-thumb]:cursor-pointer"
                                />
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* Warnings */}
                {results.warnings.length > 0 && (
                    <div className="mb-5 space-y-2">
                        {results.warnings.map((w, i) => (
                            <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-amber-500/5 border border-amber-500/15">
                                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-amber-400/80">{w}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Results Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Left: Key Metrics */}
                    <div className="space-y-4">
                        {/* Hero savings */}
                        <div className={`p-5 rounded-2xl border ${isNegative ? "bg-red-500/5 border-red-500/20" : "bg-emerald-500/5 border-emerald-500/20"}`}>
                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Annual Savings (best case)</p>
                            <p className={`text-3xl font-bold tracking-tight ${isNegative ? "text-red-400" : "text-emerald-400"}`}>
                                {isNegative ? "-" : ""}{formatCurrency(Math.abs(results.bestAnnualSavings))}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                vs {results.savingsVsCompetitors.reduce((best, s) => s.annualSavings > best.annualSavings ? s : best, results.savingsVsCompetitors[0])?.competitor}
                            </p>
                        </div>

                        {/* Metric tiles */}
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                {
                                    label: "FTE Avoided",
                                    value: `${results.fteAvoided}`,
                                    icon: Users,
                                    color: "#8B5CF6",
                                },
                                {
                                    label: "3-Year NPV",
                                    value: formatCurrency(results.bestThreeYearNPV),
                                    icon: TrendingUp,
                                    color: "#3B82F6",
                                },
                                {
                                    label: "Payback",
                                    value: results.bestPaybackMonths === null ? "—" : results.bestPaybackMonths === 0 ? "Now" : `${results.bestPaybackMonths} mo`,
                                    icon: Clock,
                                    color: "#F59E0B",
                                },
                            ].map(m => {
                                const Icon = m.icon
                                return (
                                    <div key={m.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                                        <Icon className="w-4 h-4 mx-auto mb-1.5" style={{ color: m.color }} />
                                        <p className="text-base font-bold text-white tabular-nums">{m.value}</p>
                                        <p className="text-[10px] text-gray-500 mt-0.5">{m.label}</p>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Cost per ticket */}
                        <div className="grid grid-cols-2 gap-3">
                            {[results.enorveResult, ...results.competitorResults].slice(0, 4).map(v => (
                                <div key={v.name} className={`p-3 rounded-xl text-center ${v.name === "Enorve"
                                        ? "bg-emerald-500/8 border border-emerald-500/20"
                                        : "bg-white/[0.02] border border-white/5"
                                    }`}>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{v.name}</p>
                                    <p className={`text-sm font-semibold ${v.name === "Enorve" ? "text-emerald-400" : "text-white"}`}>
                                        ${v.costPerTicket.toFixed(2)}<span className="text-[10px] text-gray-500">/ticket</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Headcount Chart */}
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                        <h4 className="text-sm font-medium text-white mb-1">Headcount Impact</h4>
                        <p className="text-xs text-gray-500 mb-4">
                            {results.fteAvoided > 0
                                ? `${results.fteAvoided} fewer agents needed with Enorve AI`
                                : "Agents required for your ticket volume"}
                        </p>
                        <div className="h-[140px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={headcountData} layout="vertical" margin={{ top: 0, right: 40, left: 0, bottom: 0 }}>
                                    <XAxis type="number" hide />
                                    <YAxis
                                        type="category"
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: "#9CA3AF", fontSize: 11 }}
                                        width={90}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#1a1a2e",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "12px",
                                            color: "#fff",
                                            fontSize: "12px",
                                        }}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        formatter={((value: any) => [`${value ?? 0} agents`, "Required"]) as any}
                                        cursor={{ fill: "rgba(255,255,255,0.03)" }}
                                    />
                                    <Bar dataKey="agents" radius={[0, 8, 8, 0]} barSize={32}>
                                        {headcountData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* TSOC comparison mini table */}
                        <div className="mt-4 space-y-1.5">
                            {[results.enorveResult, ...results.competitorResults].map(v => (
                                <div key={v.name} className="flex items-center justify-between text-xs">
                                    <span className={v.name === "Enorve" ? "text-emerald-400 font-medium" : "text-gray-400"}>{v.name}</span>
                                    <span className={v.name === "Enorve" ? "text-emerald-400 font-semibold tabular-nums" : "text-gray-300 tabular-nums"}>
                                        {formatCurrency(v.tsocAnnual)}<span className="text-gray-500">/yr</span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer with CTA */}
                <div className="mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-gray-500 max-w-md">
                        Based on Enorve Business plan ($499/mo). Competitor pricing from public list prices as of Jan 2026.
                        <Link to="/roi-calculator" className="text-emerald-400/70 hover:text-emerald-400 ml-1 transition-colors">
                            View full analysis →
                        </Link>
                    </p>
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={() => generateROIPdf(inputs, results)}
                        icon={<Download className="w-3.5 h-3.5" />}
                        iconPosition="left"
                    >
                        Download Executive Report
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
