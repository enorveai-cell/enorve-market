import { motion } from "framer-motion"
import { TrendingUp, Users, Clock, DollarSign, AlertTriangle } from "lucide-react"
import type { ROIResults } from "../../hooks/useROICalculator"

interface Props {
    results: ROIResults
}

function formatCurrency(value: number): string {
    if (Math.abs(value) >= 1_000_000) {
        return `$${(value / 1_000_000).toFixed(1)}M`
    }
    if (Math.abs(value) >= 1_000) {
        return `$${(value / 1_000).toFixed(0)}K`
    }
    return `$${value.toFixed(0)}`
}

const metrics = [
    {
        key: "annualSavings" as const,
        label: "Annual Savings",
        icon: DollarSign,
        color: "#10B981",
        format: (r: ROIResults) => formatCurrency(r.bestAnnualSavings),
        sub: (r: ROIResults) => `vs ${r.savingsVsCompetitors.find(s => s.annualSavings === r.bestAnnualSavings)?.competitor ?? "competitors"}`,
    },
    {
        key: "fteAvoided" as const,
        label: "FTE Avoided",
        icon: Users,
        color: "#8B5CF6",
        format: (r: ROIResults) => `${r.fteAvoided}`,
        sub: () => "agents no longer needed",
    },
    {
        key: "payback" as const,
        label: "Payback Period",
        icon: Clock,
        color: "#F59E0B",
        format: (r: ROIResults) =>
            r.bestPaybackMonths === null
                ? "—"
                : r.bestPaybackMonths === 0
                    ? "Immediate"
                    : `${r.bestPaybackMonths} mo`,
        sub: () => "time to recoup migration",
    },
    {
        key: "npv" as const,
        label: "3-Year NPV",
        icon: TrendingUp,
        color: "#3B82F6",
        format: (r: ROIResults) => formatCurrency(r.bestThreeYearNPV),
        sub: (r: ROIResults) => `at ${(r.savingsVsCompetitors.length > 0 ? 8 : 8)}% discount rate`,
    },
]

export function ExecutiveSummary({ results }: Props) {
    const isNegative = results.bestAnnualSavings < 0

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-medium text-white tracking-tight">Executive Summary</h2>

            {/* Warning for negative ROI */}
            {isNegative && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30"
                >
                    <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-medium text-amber-300">Optimization Recommended</p>
                        <p className="text-sm text-amber-400/80 mt-1">
                            Current inputs show higher costs with Enorve. Try increasing the AI deflection rate or reviewing team size for better ROI.
                        </p>
                    </div>
                </motion.div>
            )}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric, i) => {
                    const Icon = metric.icon
                    return (
                        <motion.div
                            key={metric.key}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative p-5 rounded-2xl bg-[#0C0E12] border border-white/5 overflow-hidden group hover:border-white/10 transition-colors"
                        >
                            {/* Glow */}
                            <div
                                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                                style={{ background: metric.color }}
                            />

                            <div className="relative z-10">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                                    style={{ backgroundColor: `${metric.color}20`, border: `1px solid ${metric.color}30` }}
                                >
                                    <Icon className="w-4 h-4" style={{ color: metric.color }} />
                                </div>
                                <p className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                                    {metric.format(results)}
                                </p>
                                <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wider">
                                    {metric.label}
                                </p>
                                <p className="text-[11px] text-gray-500 mt-0.5">
                                    {metric.sub(results)}
                                </p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
