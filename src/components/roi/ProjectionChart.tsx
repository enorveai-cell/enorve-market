import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from "recharts"
import type { LaborResults } from "../../hooks/useROICalculator"

interface Props {
    results: LaborResults
}

function formatK(value: number): string {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
    if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`
    return `$${value.toFixed(0)}`
}

export function ProjectionChart({ results }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-2xl bg-[#0C0E12] border border-white/5"
        >
            <h3 className="text-lg font-medium text-white mb-1">3-Year Savings Projection</h3>
            <p className="text-sm text-gray-400 mb-6">
                Cumulative cost comparison — current labor vs Enorve-based operations
            </p>

            <div className="h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={results.projectionData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6B7280", fontSize: 12 }}
                            tickFormatter={(v: number) => v === 0 ? "0" : v === 12 ? "Y1" : v === 24 ? "Y2" : v === 36 ? "Y3" : ""}
                            interval={5}
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
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            labelFormatter={((label: any) => `Month ${label}`) as any}
                        />
                        <Legend
                            wrapperStyle={{ color: "#9CA3AF", fontSize: "12px", paddingTop: "8px" }}
                        />
                        <Area
                            type="monotone"
                            dataKey="currentCost"
                            name="Current Labor Cost"
                            stroke="#EF4444"
                            fill="#EF444420"
                            strokeWidth={2}
                        />
                        <Area
                            type="monotone"
                            dataKey="enorveBasedCost"
                            name="With Enorve"
                            stroke="#10B981"
                            fill="#10B98120"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* 3-year savings callout */}
            {results.threeYearCumulativeSavings > 0 && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-emerald-400 font-medium">3-Year Cumulative Savings</p>
                            <p className="text-xs text-gray-400 mt-0.5">
                                The gap between the two lines represents money saved
                            </p>
                        </div>
                        <p className="text-2xl font-bold text-emerald-400">{formatK(results.threeYearCumulativeSavings)}</p>
                    </div>
                </div>
            )}
        </motion.div>
    )
}
