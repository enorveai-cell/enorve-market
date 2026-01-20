import { motion } from "framer-motion"
import { BarChart3, Users, Clock, Target, Activity } from "lucide-react"

const metrics = [
    { icon: Clock, label: "Avg. Response Time", value: "1m 45s", change: "-32%", positive: true },
    { icon: Target, label: "CSAT Score", value: "4.8/5", change: "+12%", positive: true },
    { icon: Activity, label: "AI Automation Rate", value: "65%", change: "+8%", positive: true },
    { icon: Users, label: "Active Agents", value: "24", change: "", positive: true },
]

export function AnalyticsSection() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/10 to-transparent blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-400 bg-cyan-500/10 rounded-full mb-6">
                        <BarChart3 className="w-3.5 h-3.5" />
                        Analytics
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        <span className="text-gradient">Data-driven</span>
                        <br />
                        <span className="text-white">decisions.</span>
                    </h2>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Get real-time insights into your support operations. Track response times,
                        CSAT scores, AI performance, and team productivity—all in one dashboard.
                    </p>
                </motion.div>

                {/* Metrics Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
                >
                    {metrics.map((metric, i) => (
                        <div
                            key={i}
                            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                    <metric.icon className="w-5 h-5 text-white" />
                                </div>
                                {metric.change && (
                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${metric.positive ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                                        }`}>
                                        {metric.change}
                                    </span>
                                )}
                            </div>
                            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                            <div className="text-sm text-gray-400">{metric.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Dashboard Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-blue-500/20 rounded-3xl blur-3xl opacity-40" />
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/analytics-illustration.png"
                            alt="Analytics Dashboard"
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

