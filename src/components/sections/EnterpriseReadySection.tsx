import { motion } from "framer-motion"
import { Shield, ArrowRightLeft, Accessibility, Palette, FileCheck, Database } from "lucide-react"

const capabilities = [
    {
        icon: ArrowRightLeft,
        title: "Vendor Migration",
        description: "Rip-and-replace Zendesk or Intercom in one session. Customers, tickets, conversations, and knowledge base — migrated with zero data loss.",
        color: "text-blue-400",
        bg: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-500/20",
    },
    {
        icon: Shield,
        title: "SOC 2 Ready",
        description: "HSTS, CSP headers, PII redaction, immutable audit logs, account lockout, MFA, and tenant isolation. Architecture validated for Type I.",
        color: "text-emerald-400",
        bg: "from-emerald-500/20 to-teal-500/20",
        border: "border-emerald-500/20",
    },
    {
        icon: Accessibility,
        title: "WCAG Accessible",
        description: "Chat widget with full keyboard navigation, ARIA labels, screen reader support, and Escape-to-close. Enterprise and government compliant.",
        color: "text-violet-400",
        bg: "from-violet-500/20 to-purple-500/20",
        border: "border-violet-500/20",
    },
    {
        icon: Palette,
        title: "White-Label Theming",
        description: "CSS custom properties let enterprise clients override colors, fonts, and border radii from their own stylesheet. No dashboard needed.",
        color: "text-amber-400",
        bg: "from-amber-500/20 to-orange-500/20",
        border: "border-amber-500/20",
    },
    {
        icon: FileCheck,
        title: "Subprocessor Transparency",
        description: "Published subprocessor list, GDPR data deletion API, data export endpoint, and 30-day notice policy for new subprocessors.",
        color: "text-pink-400",
        bg: "from-pink-500/20 to-rose-500/20",
        border: "border-pink-500/20",
    },
    {
        icon: Database,
        title: "Bulk Import API",
        description: "REST endpoint for importing up to 1,000 customers per batch. Upsert by email or phone. Ready for CSV-driven onboarding.",
        color: "text-cyan-400",
        bg: "from-cyan-500/20 to-sky-500/20",
        border: "border-cyan-500/20",
    },
]

export function EnterpriseReadySection() {
    return (
        <section className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_70%)]" />

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
                        Built for procurement teams{" "}
                        <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                            that say no to everything.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Migration tooling, accessibility compliance, security controls, and data sovereignty —
                        the checklist items that kill deals when they're missing.
                    </motion.p>
                </div>

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
