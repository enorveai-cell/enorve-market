import { motion } from "framer-motion"
import { Shield, ArrowRightLeft, Accessibility, Palette, FileCheck, Database } from "lucide-react"
import { SecurityOpsCanvas } from "./SecurityOpsCanvas"

const capabilities = [
    {
        icon: ArrowRightLeft,
        title: "Vendor Migration",
        description: "Moving from Zendesk? We bring over your customers, tickets, and help articles. You don't start from zero.",
        color: "text-blue-400",
        bg: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-500/20",
    },
    {
        icon: Shield,
        title: "SOC 2 Type II (audit in progress)",
        description: "Audit targeted Q3 2026. Controls in place today: audit logs, tenant isolation, MFA, PII redaction.",
        color: "text-emerald-400",
        bg: "from-emerald-500/20 to-teal-500/20",
        border: "border-emerald-500/20",
    },
    {
        icon: Accessibility,
        title: "Accessible Widget",
        description: "Keyboard navigation, screen reader support, Escape to close. Your widget works for everyone, not just mouse users.",
        color: "text-violet-400",
        bg: "from-violet-500/20 to-purple-500/20",
        border: "border-violet-500/20",
    },
    {
        icon: Palette,
        title: "Your Brand, Not Ours",
        description: "Override colors, fonts, and radii from your own stylesheet. The widget looks like yours, not like a third-party embed.",
        color: "text-amber-400",
        bg: "from-amber-500/20 to-orange-500/20",
        border: "border-amber-500/20",
    },
    {
        icon: FileCheck,
        title: "Know Where Your Data Goes",
        description: "Published subprocessor list. GDPR deletion endpoint. 30-day notice before anything changes. No surprises.",
        color: "text-pink-400",
        bg: "from-pink-500/20 to-rose-500/20",
        border: "border-pink-500/20",
    },
    {
        icon: Database,
        title: "Bulk Import",
        description: "Upload your customer list. 1,000 at a time. Matches by email or phone so you don't get duplicates.",
        color: "text-cyan-400",
        bg: "from-cyan-500/20 to-sky-500/20",
        border: "border-cyan-500/20",
    },
]

export function EnterpriseReadySection() {
    return (
        <section className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(31, 168, 111,0.06),transparent_70%)]" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
                    >
                        <Shield className="w-4 h-4" />
                        Enterprise Ready
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-medium text-white tracking-tighter leading-[1.1] mb-6"
                    >
                        The stuff that{" "}
                        <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                            actually blocks the deal.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Security reviews, migration plans, accessibility audits.
                        The things your IT team asks about before they'll sign anything.
                    </motion.p>
                </div>

                {/* Security Operations console — live audit stream, residency map, compliance strip */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-between mb-4 px-1">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#1FA86F" }} />
                            <span className="text-[10px] uppercase tracking-[0.18em] text-white/50 font-medium">
                                Security Ops · live
                            </span>
                        </div>
                        <span className="hidden md:inline text-[10px] text-white/35 uppercase tracking-wider">
                            Every event · every region · every control
                        </span>
                    </div>
                    <SecurityOpsCanvas />
                    <p className="mt-5 text-sm text-white/45 text-center max-w-2xl mx-auto leading-relaxed">
                        Not a trust-badge wall. Your procurement team gets an actual live audit feed, region control, and exportable controls — in one link.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {capabilities.map((cap, index) => {
                        const Icon = cap.icon
                        return (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.bg} border ${cap.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-6 h-6 ${cap.color}`} />
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">{cap.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{cap.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
