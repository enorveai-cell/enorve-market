import { motion } from "framer-motion"

const pillars = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: "AI with Guardrails",
        description: "Confidence thresholds, policy enforcement, and escalation rules ensure AI acts only when it should — and stays silent when it shouldn't.",
        color: "#8B5CF6",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
        ),
        title: "Remembers Every Customer",
        description: "Your AI remembers past conversations, order history, and preferences — so customers never have to repeat themselves.",
        color: "#F59E0B",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
        title: "Human Override Built In",
        description: "Seamless handoff, collision prevention, and smart agent assignment keep humans in control when edge cases appear.",
        color: "#10B981",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        ),
        title: "Full Visibility",
        description: "See every AI decision, why it was made, and step in whenever you need to. Complete audit trail included.",
        color: "#3B82F6",
    },
]

export function GovernedAutonomySection() {
    return (
        <section className="py-28 relative overflow-hidden" id="governed-autonomy">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_60%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        Why Enorve
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-medium text-white tracking-tighter leading-[1.1] mb-6"
                    >
                        AI support that{" "}
                        <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                            stays on track
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-400 leading-relaxed"
                    >
                        Your AI assistant follows your rules, remembers your customers, and knows when to ask for help.{" "}
                        <span className="text-white font-medium">
                            So you get fast, consistent answers — without losing control.
                        </span>
                    </motion.p>
                </div>

                {/* Four Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#0C0E12] rounded-[24px] p-7 border border-white/5 hover:border-white/10 transition-all duration-300"
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: `radial-gradient(ellipse at 30% 30%, ${pillar.color}08, transparent 70%)`,
                                }}
                            />

                            <div className="relative z-10">
                                <div
                                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                                    style={{
                                        backgroundColor: `${pillar.color}15`,
                                        border: `1px solid ${pillar.color}30`,
                                        color: pillar.color,
                                    }}
                                >
                                    {pillar.icon}
                                </div>

                                <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Before / After comparison */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative rounded-[28px] border border-white/[0.06] bg-gradient-to-br from-[#0C0E12] to-[#0A0B0F] p-8 md:p-12 overflow-hidden"
                >
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/[0.04] blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/[0.04] blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-8">
                        {/* Before */}
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                            <div className="text-sm font-medium text-red-400 mb-4 uppercase tracking-wider">Before Enorve</div>
                            <div className="space-y-3 text-sm text-gray-400">
                                <div className="flex items-center gap-2"><span className="text-red-400">x</span> 5 tools, 5 tabs, constant switching</div>
                                <div className="flex items-center gap-2"><span className="text-red-400">x</span> Missed messages across channels</div>
                                <div className="flex items-center gap-2"><span className="text-red-400">x</span> Slow replies, inconsistent tone</div>
                                <div className="flex items-center gap-2"><span className="text-red-400">x</span> No visibility into what customers actually need</div>
                            </div>
                        </div>

                        {/* After */}
                        <div className="p-6 rounded-2xl bg-violet-500/[0.05] border border-violet-500/20">
                            <div className="text-sm font-medium text-violet-400 mb-4 uppercase tracking-wider">With Enorve</div>
                            <div className="space-y-3 text-sm text-gray-300">
                                <div className="flex items-center gap-2"><span className="text-green-400">✓</span> One inbox for every channel</div>
                                <div className="flex items-center gap-2"><span className="text-green-400">✓</span> AI answers instantly, 24/7</div>
                                <div className="flex items-center gap-2"><span className="text-green-400">✓</span> Consistent, on-brand responses</div>
                                <div className="flex items-center gap-2"><span className="text-green-400">✓</span> Full analytics and quality scoring</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
