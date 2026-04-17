import { motion } from "framer-motion"
import { TrendingUp, Users, Clock, DollarSign, AlertTriangle } from "lucide-react"
import type { LaborResults } from "../../hooks/useROICalculator"

interface Props {
    results: LaborResults
}

function formatCurrency(value: number): string {
    if (Math.abs(value) >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
    if (Math.abs(value) >= 1_000) return `$${(value / 1_000).toFixed(0)}K`
    return `$${value.toFixed(0)}`
}

const metrics = [
    {
        key: "netSavings" as const,
        label: "Net Annual Savings",
        icon: DollarSign,
        color: "#10B981",
        format: (r: LaborResults) => formatCurrency(r.netAnnualSavings),
        sub: () => "after Enorve platform cost",
    },
    {
        key: "headcountReduction" as const,
        label: "Headcount Reduction",
        icon: Users,
        color: "#1FA86F",
        format: (r: LaborResults) => `${r.headcountReduction}`,
        sub: (r: LaborResults) => `${r.projectedHeadcount} agents remaining`,
    },
    {
        key: "roiMonths" as const,
        label: "ROI Timeline",
        icon: Clock,
        color: "#D4C08A",
        format: (r: LaborResults) =>
            r.roiMonths === null
                ? "—"
                : r.roiMonths <= 1
                    ? "< 1 month"
                    : `${r.roiMonths} months`,
        sub: () => "to break even on Enorve cost",
    },
    {
        key: "threeYear" as const,
        label: "3-Year Savings",
        icon: TrendingUp,
        color: "#3B82F6",
        format: (r: LaborResults) => formatCurrency(r.threeYearCumulativeSavings),
        sub: () => "cumulative net savings",
    },
]

export function ExecutiveSummary({ results }: Props) {
    const isNegative = results.netAnnualSavings < 0

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-medium text-white tracking-tight">Labor Replacement Summary</h2>

            {isNegative && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30"
                >
                    <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-medium text-amber-300">Increase Automation</p>
                        <p className="text-sm text-amber-400/80 mt-1">
                            Current inputs show Enorve platform cost exceeds labor savings. Try increasing the automation rate or team size.
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
