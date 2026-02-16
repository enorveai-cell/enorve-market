import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"
import type { ROIResults } from "../../hooks/useROICalculator"

interface Props {
    results: ROIResults
}

function formatK(value: number): string {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
    if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`
    return `$${value.toFixed(0)}`
}

export function CostBreakdownChart({ results }: Props) {
    const data = [
        {
            name: "Enorve",
            Software: results.enorveResult.softwareCostAnnual,
            "AI Add-ons": results.enorveResult.aiAddonCostAnnual,
            Labor: results.enorveResult.laborCostAnnual,
        },
        ...results.competitorResults.map(cr => ({
            name: cr.name,
            Software: cr.softwareCostAnnual,
            "AI Add-ons": cr.aiAddonCostAnnual,
            Labor: cr.laborCostAnnual,
        })),
    ]

    const COLORS = {
        Software: "#8B5CF6",
        "AI Add-ons": "#F59E0B",
        Labor: "#6366F1",
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-[#0C0E12] border border-white/5"
        >
            <h3 className="text-lg font-medium text-white mb-1">Annual Cost Breakdown</h3>
            <p className="text-sm text-gray-400 mb-6">
                Total Support Operating Cost by vendor — software + AI add-ons + labor
            </p>

            <div className="h-[320px]">
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
                        <Bar dataKey="Software" stackId="a" fill={COLORS.Software} radius={[0, 0, 0, 0]} />
                        <Bar dataKey="AI Add-ons" stackId="a" fill={COLORS["AI Add-ons"]} radius={[0, 0, 0, 0]} />
                        <Bar dataKey="Labor" stackId="a" fill={COLORS.Labor} radius={[4, 4, 0, 0]} barSize={50} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Cost per ticket comparison */}
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[results.enorveResult, ...results.competitorResults].map(v => (
                    <div
                        key={v.name}
                        className={`p-3 rounded-xl text-center ${v.name === "Enorve"
                            ? "bg-emerald-500/10 border border-emerald-500/20"
                            : "bg-white/[0.02] border border-white/5"
                            }`}
                    >
                        <p className="text-xs text-gray-400 mb-1">{v.name}</p>
                        <p className={`text-lg font-semibold ${v.name === "Enorve" ? "text-emerald-400" : "text-white"}`}>
                            ${v.costPerTicket.toFixed(2)}
                        </p>
                        <p className="text-[10px] text-gray-500">per ticket</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
