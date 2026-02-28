import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"
import type { LaborResults } from "../../hooks/useROICalculator"

interface Props {
    results: LaborResults
}

function formatK(value: number): string {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
    if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`
    return `$${value.toFixed(0)}`
}

export function CostBreakdownChart({ results }: Props) {
    const data = [
        {
            name: "Current",
            Labor: results.currentAnnualLaborCost,
            "Enorve Platform": 0,
        },
        {
            name: "With Enorve",
            Labor: results.reducedLaborCost,
            "Enorve Platform": results.enorveAnnualCost,
        },
    ]

    const COLORS = {
        Labor: "#6366F1",
        "Enorve Platform": "#10B981",
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-[#0C0E12] border border-white/5"
        >
            <h3 className="text-lg font-medium text-white mb-1">Annual Cost Comparison</h3>
            <p className="text-sm text-gray-400 mb-6">
                Current labor cost vs reduced labor + Enorve platform
            </p>

            <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#9CA3AF", fontSize: 13 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6B7280", fontSize: 12 }}
                            tickFormatter={formatK}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1a1a2e",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                color: "#fff",
                                fontSize: "13px",
                            }}
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            formatter={((value: any, name: any) => [formatK(value ?? 0), name ?? ""]) as any}
                            cursor={{ fill: "rgba(255,255,255,0.03)" }}
                        />
                        <Legend
                            wrapperStyle={{ color: "#9CA3AF", fontSize: "12px", paddingTop: "8px" }}
                        />
                        <Bar dataKey="Labor" stackId="a" fill={COLORS.Labor} radius={[0, 0, 0, 0]} />
                        <Bar dataKey="Enorve Platform" stackId="a" fill={COLORS["Enorve Platform"]} radius={[4, 4, 0, 0]} barSize={60} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Summary row */}
            <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/20 text-center">
                    <p className="text-xs text-gray-400 mb-1">Current Cost</p>
                    <p className="text-lg font-semibold text-red-400">{formatK(results.currentAnnualLaborCost)}</p>
                    <p className="text-[10px] text-gray-500">per year</p>
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-center">
                    <p className="text-xs text-gray-400 mb-1">With Enorve</p>
                    <p className="text-lg font-semibold text-emerald-400">{formatK(results.reducedLaborCost + results.enorveAnnualCost)}</p>
                    <p className="text-[10px] text-gray-500">per year</p>
                </div>
                <div className="p-3 rounded-xl bg-violet-500/5 border border-violet-500/20 text-center">
                    <p className="text-xs text-gray-400 mb-1">Net Savings</p>
                    <p className={`text-lg font-semibold ${results.netAnnualSavings >= 0 ? "text-violet-400" : "text-red-400"}`}>{formatK(results.netAnnualSavings)}</p>
                    <p className="text-[10px] text-gray-500">per year</p>
                </div>
            </div>
        </motion.div>
    )
}
