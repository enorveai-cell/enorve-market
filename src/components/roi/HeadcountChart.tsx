import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts"
import type { LaborResults } from "../../hooks/useROICalculator"

interface Props {
    results: LaborResults
}

export function HeadcountChart({ results }: Props) {
    const data = [
        {
            name: "Current Team",
            agents: results.currentAnnualLaborCost / (results.currentAnnualLaborCost / (results.projectedHeadcount + results.headcountReduction)),
            color: "#EF4444",
        },
        {
            name: "With Enorve",
            agents: results.projectedHeadcount,
            color: "#10B981",
        },
    ]

    // Fix: use actual headcount values
    data[0].agents = results.projectedHeadcount + results.headcountReduction

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#0C0E12] border border-white/5"
        >
            <h3 className="text-lg font-medium text-white mb-1">Headcount Impact</h3>
            <p className="text-sm text-gray-400 mb-6">
                {results.headcountReduction > 0
                    ? `${results.headcountReduction} fewer agents needed — from ${results.projectedHeadcount + results.headcountReduction} to ${results.projectedHeadcount}`
                    : "Agents required for your conversation volume"
                }
            </p>

            <div className="h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ top: 0, right: 40, left: 0, bottom: 0 }}>
                        <XAxis type="number" hide />
                        <YAxis
                            type="category"
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#9CA3AF", fontSize: 13 }}
                            width={120}
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
                            formatter={((value: any) => [`${value ?? 0} agents`, "Required"]) as any}
                            cursor={{ fill: "rgba(255,255,255,0.03)" }}
                        />
                        <Bar dataKey="agents" radius={[0, 8, 8, 0]} barSize={40}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                            ))}
                            <LabelList
                                dataKey="agents"
                                position="right"
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                formatter={((value: any) => `${value}`) as any}
                                style={{ fill: "#fff", fontSize: "14px", fontWeight: 600 }}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {results.headcountReduction > 0 && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-sm text-emerald-400">
                        <span className="font-semibold">{results.headcountReduction} positions replaced by AI</span> — saving{" "}
                        <span className="font-semibold">
                            ${results.annualLaborSavings.toLocaleString()}
                        </span>{" "}
                        in annual labor costs
                    </p>
                </div>
            )}
        </motion.div>
    )
}
