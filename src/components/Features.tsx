import { motion } from "framer-motion"
import { MessageSquare, Bot, BarChart3, Zap } from "lucide-react"

const features = [
    {
        title: "Unified Inbox",
        description: "Connect WhatsApp, Email, Slack, and more in one feed.",
        icon: MessageSquare,
        className: "md:col-span-2",
    },
    {
        title: "AI Copilot",
        description: "Real-time context and actions for the moments humans step in.",
        icon: Bot,
        className: "md:col-span-1",
    },
    {
        title: "Global Analytics",
        description: "Real-time metrics on team performance and CSAT scores.",
        icon: BarChart3,
        className: "md:col-span-1",
    },
    {
        title: "Auto-Resolution",
        description: "AI resolves autonomously. Humans intervene by exception.",
        icon: Zap,
        className: "md:col-span-2",
    },
]

export function Features() {
    return (
        <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                    Support that runs itself.<br />With everything you need to stay in control.
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    AI resolves. Humans govern. Every tool built for that.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`group relative overflow-hidden rounded-3xl p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors ${feature.className}`}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                            <feature.icon className="w-24 h-24" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full justify-end">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
