import { motion } from "framer-motion"
import { Zap, MessageSquare, TrendingUp, Sparkles } from "lucide-react"

const capabilities = [
    {
        icon: MessageSquare,
        title: "Smart Suggestions",
        description: "AI analyzes context and suggests the best response instantly.",
    },
    {
        icon: TrendingUp,
        title: "Sentiment Analysis",
        description: "Detects customer mood and adjusts tone recommendations.",
    },
    {
        icon: Zap,
        title: "Auto-Escalation",
        description: "Routes complex issues to human agents automatically.",
    },
]

export function CopilotSection() {
    return (
        <section id="copilot" className="py-32 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-radial from-purple-500/10 to-transparent blur-3xl -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Illustration - left side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 rounded-3xl blur-3xl opacity-40" />
                        <img
                            src="/copilot-illustration.png"
                            alt="AI Copilot suggesting responses"
                            className="relative w-full h-auto rounded-2xl"
                        />
                    </motion.div>

                    {/* Content - right side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium uppercase tracking-wider text-purple-400 bg-purple-500/10 rounded-full mb-6">
                            <Sparkles className="w-3.5 h-3.5" />
                            AI-Powered
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            <span className="text-gradient">Your agents,</span>
                            <br />
                            <span className="text-gradient-primary">supercharged.</span>
                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                            The AI Copilot sits alongside your agents, providing real-time suggestions,
                            sentiment analysis, and smart actions. Resolve tickets 2x faster while
                            maintaining your brand voice.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mb-10">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-400 mb-1">92%</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Accuracy</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-400 mb-1">2x</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Faster</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-400 mb-1">60%</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Auto-Resolved</div>
                            </div>
                        </div>

                        {/* Capabilities */}
                        <div className="space-y-4">
                            {capabilities.map((cap, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                                        <cap.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{cap.title}</h4>
                                        <p className="text-sm text-gray-400">{cap.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

