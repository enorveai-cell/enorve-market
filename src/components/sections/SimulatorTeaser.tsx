import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Play, ShieldAlert, CheckCircle2 } from "lucide-react"

export function SimulatorTeaser() {
    return (
        <section className="relative py-20 sm:py-28 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[10px] font-semibold uppercase tracking-[3px] text-emerald-400 mb-4 block"
                >
                    Interactive Demo
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
                >
                    See it in action.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
                >
                    Watch the same angry refund request play out — with generic AI vs. AI that follows your rules.
                </motion.p>

                {/* Preview card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Link
                        to="/ai-simulator"
                        className="group block max-w-2xl mx-auto rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
                    >
                        {/* Split preview */}
                        <div className="flex divide-x divide-white/[0.06]">
                            {/* Left — Without */}
                            <div className="flex-1 p-5 sm:p-6">
                                <div className="flex items-center gap-1.5 mb-3">
                                    <ShieldAlert className="h-3.5 w-3.5 text-red-400" />
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-red-400">Without Enorve</span>
                                </div>
                                <div className="space-y-2 text-left">
                                    <div className="bg-white/[0.04] rounded-lg px-3 py-2 text-[11px] text-gray-400 leading-relaxed">
                                        "I want a refund. This product broke after 2 days."
                                    </div>
                                    <div className="bg-red-500/[0.08] border border-red-500/10 rounded-lg px-3 py-2 text-[11px] text-red-300/70 leading-relaxed">
                                        "Here's a 20% discount code: SAVE20"
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] text-red-400/60 font-medium">
                                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
                                        Policy violated
                                    </div>
                                </div>
                            </div>

                            {/* Right — With */}
                            <div className="flex-1 p-5 sm:p-6">
                                <div className="flex items-center gap-1.5 mb-3">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">With Enorve</span>
                                </div>
                                <div className="space-y-2 text-left">
                                    <div className="bg-white/[0.04] rounded-lg px-3 py-2 text-[11px] text-gray-400 leading-relaxed">
                                        "I want a refund. This product broke after 2 days."
                                    </div>
                                    <div className="bg-emerald-500/[0.08] border border-emerald-500/10 rounded-lg px-3 py-2 text-[11px] text-emerald-300/70 leading-relaxed">
                                        "Let me process your refund right away. Order number?"
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] text-emerald-400/60 font-medium">
                                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        Resolved — protocol followed
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Play CTA bar */}
                        <div className="flex items-center justify-center gap-2 py-3.5 border-t border-white/[0.06] bg-white/[0.02] group-hover:bg-emerald-500/[0.06] transition-colors">
                            <Play className="h-4 w-4 text-emerald-400" fill="currentColor" />
                            <span className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
                                Watch the demo
                            </span>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
