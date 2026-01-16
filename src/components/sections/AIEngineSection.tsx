import { motion } from "framer-motion"

export function AIEngineSection() {
    return (
        <section className="py-24 relative bg-black/50" id="ai-engine">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-medium text-white tracking-tighter leading-[1.1]"
                    >
                        A complete support platform— with deterministic AI at its core
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-400 leading-relaxed max-w-lg"
                    >
                        Unlike probabilistic models, Enorve enforces policy constraints before any response reaches production. Human oversight is built into the architecture, not bolted on.
                    </motion.div>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1: Policy Enforcement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#0C0E12] rounded-[32px] p-8 md:p-10 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between h-[520px] overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-medium text-white tracking-tight mb-3">Policy-Layer Enforcement</h3>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-sm">
                                Define constraints in declarative YAML. Every AI response is validated against governance rules before delivery.
                            </p>
                        </div>

                        {/* Code Visual */}
                        <div className="mt-8 relative w-full h-64 bg-[#08090B] border border-white/5 rounded-xl shadow-2xl overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                                </div>
                                <div className="text-[10px] font-mono text-gray-600">policy.yaml</div>
                            </div>
                            <div className="p-5 font-mono text-xs leading-6">
                                <div className="text-purple-400">rules:</div>
                                <div className="pl-4">
                                    <span className="text-gray-500">-</span> <span className="text-blue-400">name:</span> <span className="text-green-300">"refund_cap"</span>
                                </div>
                                <div className="pl-6">
                                    <span className="text-blue-400">condition:</span> <span className="text-orange-300">"amount &gt; 500"</span>
                                </div>
                                <div className="pl-6">
                                    <span className="text-blue-400">action:</span> <span className="text-red-400">reject</span>
                                </div>
                                <div className="pl-4 mt-2">
                                    <span className="text-gray-500">-</span> <span className="text-blue-400">name:</span> <span className="text-green-300">"pii_filter"</span>
                                </div>
                                <div className="pl-6">
                                    <span className="text-blue-400">strict:</span> <span className="text-purple-400">true</span>
                                </div>
                                <div className="pl-6">
                                    <span className="text-blue-400">mask:</span> <span className="text-gray-400">[email, phone]</span>
                                </div>
                            </div>

                            {/* Badge */}
                            <div className="absolute bottom-6 right-6 bg-[#0C0E12] border border-white/10 px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-white font-medium">Policy Active</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Audit Logs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#0C0E12] rounded-[32px] p-8 md:p-10 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between h-[520px] overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Immutable Audit Logs</h3>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-sm">
                                Cryptographically signed logs of every decision. Replay any interaction to understand what the model saw.
                            </p>
                        </div>

                        {/* Logs Visual */}
                        <div className="mt-8 relative w-full h-64 bg-[#08090B] border border-white/5 rounded-xl shadow-2xl overflow-hidden flex flex-col justify-end">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] to-transparent z-10" />
                            <div className="relative z-20 p-6 space-y-3">
                                <div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.03] backdrop-blur-sm">
                                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <span className="text-xs text-white font-medium">Response Generated</span>
                                            <span className="text-[10px] text-gray-600 font-mono">0x8f...2a</span>
                                        </div>
                                        <div className="text-[10px] text-gray-500 truncate font-mono">latency: 42ms | tokens: 128</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.03] backdrop-blur-sm opacity-60">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <span className="text-xs text-white font-medium">Policy Check</span>
                                            <span className="text-[10px] text-gray-600 font-mono">0x3b...9c</span>
                                        </div>
                                        <div className="text-[10px] text-gray-500 truncate font-mono">rules: refund_cap (pass)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Human Escalation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#0C0E12] rounded-[32px] p-8 md:p-10 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between h-[520px] overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Human-in-the-Loop Escalation</h3>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-sm">
                                Configurable thresholds automatically route high-risk interactions to human agents. No model operates unsupervised.
                            </p>
                        </div>

                        {/* Escalation Visual */}
                        <div className="mt-8 relative w-full h-64 bg-[#08090B] border border-white/5 rounded-xl shadow-2xl overflow-hidden flex items-center justify-center">
                            <div className="w-[90%] bg-[#0F1115] border border-white/10 rounded-lg p-4 shadow-2xl relative">
                                <div className="absolute -top-3 left-4 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wide font-medium">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="8" x2="12" y2="12" />
                                        <line x1="12" y1="16" x2="12.01" y2="16" />
                                    </svg>
                                    Escalation Required
                                </div>

                                <div className="flex items-start gap-3 mb-4 mt-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-700" />
                                    <div className="flex-1 bg-white/5 rounded-lg rounded-tl-none p-3 text-sm text-gray-300">
                                        I am not happy with the service. I want to speak to a manager immediately.
                                    </div>
                                </div>

                                <div className="border-t border-white/5 pt-3 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Sentiment</span>
                                        <div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-[20%] bg-red-500" />
                                        </div>
                                    </div>
                                    <button className="bg-white text-black text-xs font-medium px-3 py-1.5 rounded hover:bg-gray-200 transition-colors">
                                        Take Over
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: Zero Hallucination */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#0C0E12] rounded-[32px] p-8 md:p-10 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between h-[520px] overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Zero-Hallucination Architecture</h3>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-sm">
                                Responses are constrained to verified information sources. Models cannot generate unsupported claims or fabricate data.
                            </p>
                        </div>

                        {/* Knowledge Visual */}
                        <div className="mt-8 relative w-full h-64 bg-[#08090B] border border-white/5 rounded-xl shadow-2xl overflow-hidden flex flex-col items-center justify-center px-8">
                            <div className="w-full space-y-3">
                                <div className="w-full h-10 bg-black border border-white/10 rounded-lg flex items-center px-3 gap-2 shadow-lg">
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span className="text-sm text-gray-400">shipping to Alaska</span>
                                </div>

                                <div className="h-4 w-px bg-white/10 mx-auto" />

                                <div className="w-full bg-[#0F1115] border border-white/10 rounded-lg overflow-hidden">
                                    <div className="p-2 border-b border-white/5 flex items-center gap-2 bg-green-500/5">
                                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <ellipse cx="12" cy="5" rx="9" ry="3" />
                                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                                        </svg>
                                        <span className="text-[10px] text-green-400 font-medium">Knowledge Base Match</span>
                                    </div>
                                    <div className="p-3 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <span className="text-xs text-gray-300">shipping_policy_us.pdf</span>
                                            <span className="text-[10px] text-gray-600 ml-auto">98% sim</span>
                                        </div>
                                        <div className="flex items-center gap-2 opacity-50">
                                            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M2 12h20" />
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                            </svg>
                                            <span className="text-xs text-gray-300">Public Website</span>
                                            <span className="text-[10px] text-gray-600 ml-auto">Ignored</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
