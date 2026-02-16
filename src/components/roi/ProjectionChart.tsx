import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from "recharts"
import type { ROIResults } from "../../hooks/useROICalculator"

interface Props {
    results: ROIResults
}

function formatK(value: number): string {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
    if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`
    return `$${value.toFixed(0)}`
}

const VENDOR_COLORS: Record<string, string> = {
    Enorve: "#10B981",
    Zendesk: "#EF4444",
    Intercom: "#F59E0B",
    Freshdesk: "#3B82F6",
}

export function ProjectionChart({ results }: Props) {
    const vendorNames = ["Enorve", ...results.competitorResults.map(c => c.name)]

    // Find break-even month (where Enorve becomes cheaper than most expensive competitor)
    let breakEvenMonth: number | null = null
    const mostExpensiveComp = results.competitorResults.reduce(
        (max, c) => (c.tsocAnnual > max.tsocAnnual ? c : max),
        results.competitorResults[0]
    )

    if (mostExpensiveComp) {
        for (const point of results.projectionData) {
            const enorveVal = point["Enorve"] as number
            const compVal = point[mostExpensiveComp.name] as number
            if (enorveVal > 0 && compVal > 0 && enorveVal < compVal && breakEvenMonth === null) {
                breakEvenMonth = point.month
            }
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-2xl bg-[#0C0E12] border border-white/5"
        >
            <h3 className="text-lg font-medium text-white mb-1">3-Year Cost Projection</h3>
            <p className="text-sm text-gray-400 mb-6">
                Cumulative total support operating cost over 36 months
                {breakEvenMonth !== null && breakEvenMonth > 0 && (
                    <span className="text-emerald-400 ml-1">
                        — break-even at month {breakEvenMonth}
                    </span>
                )}
            </p>

            <div className="h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={results.projectionData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
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
                        {breakEvenMonth !== null && breakEvenMonth > 0 && (
                            <ReferenceLine
                                x={breakEvenMonth}
                                stroke="#10B981"
                                strokeDasharray="4 4"
                                strokeOpacity={0.6}
                                label={{
                                    value: "Break-even",
                                    fill: "#10B981",
                                    fontSize: 11,
                                    position: "top",
                                }}
                            />
                        )}
                        {vendorNames.map(name => (
                            <Line
                                key={name}
                                type="monotone"
                                dataKey={name}
                                stroke={VENDOR_COLORS[name] || "#6B7280"}
                                strokeWidth={name === "Enorve" ? 3 : 2}
                                dot={false}
                                strokeOpacity={name === "Enorve" ? 1 : 0.7}
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}
