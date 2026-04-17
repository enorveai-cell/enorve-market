import { motion } from "framer-motion"

// Brand palette — keep this file in lockstep with tailwind.config.js
const FOREST = "#1FA86F" // primary-soft
const CREAM = "#D4C08A" // warm accent

const pillars = [
    {
        number: "01",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: "AI with guardrails",
        description: "Confidence thresholds, policy enforcement, and escalation rules ensure AI acts only when it should — and stays silent when it shouldn't.",
        tone: "forest" as const,
    },
    {
        number: "02",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
        ),
        title: "Remembers every customer",
        description: "Your AI knows each customer across every conversation — their history, preferences, and open issues. It leads with empathy for at-risk customers, offers extras for loyal ones, and resolves routine issues without being asked.",
        tone: "cream" as const,
    },
    {
        number: "03",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
        title: "Human override built in",
        description: "Seamless handoff, collision prevention, and smart agent assignment keep humans in control when edge cases appear.",
        tone: "cream" as const,
    },
    {
        number: "04",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        ),
        title: "Full visibility",
        description: "See every AI decision, why it was made, and step in whenever you need to. Complete audit trail included.",
        tone: "forest" as const,
    },
]

const toneStyles = {
    forest: {
        color: FOREST,
        badgeBg: "rgba(31, 168, 111, 0.10)",
        badgeBorder: "rgba(31, 168, 111, 0.25)",
        numberColor: "rgba(31, 168, 111, 0.45)",
    },
    cream: {
        color: CREAM,
        badgeBg: "rgba(212, 192, 138, 0.10)",
        badgeBorder: "rgba(212, 192, 138, 0.25)",
        numberColor: "rgba(212, 192, 138, 0.45)",
    },
}

const beforeItems = [
    "5 tools, 5 tabs, constant switching",
    "Missed messages across channels",
    "Slow replies, inconsistent tone",
    "No visibility into what customers actually need",
]

const afterItems = [
    "One inbox for every channel",
    "AI answers instantly, 24/7",
    "Consistent, on-brand responses",
    "Full analytics and quality scoring",
    "AI gets smarter about each customer over time",
]

// Motion tokens — ui-ux-pro-max §7: 150-300ms micro, ease-out, 30-50ms stagger
const EASE_OUT: [number, number, number, number] = [0.2, 0.8, 0.2, 1]

const headerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
}

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: EASE_OUT } },
}

const pillarsContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
}

export function GovernedAutonomySection() {
    return (
        <section className="py-28 relative overflow-hidden" id="governed-autonomy">
            {/* Forest ink ambient wash — single, purposeful light source */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(31,168,111,0.08),transparent_70%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    variants={headerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                    className="max-w-3xl mb-16 md:mb-20"
                >
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 bg-forest-500/10 border border-forest-500/20 text-forest-300 text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-[0.14em]"
                    >
                        <span className="relative flex w-1.5 h-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-forest-500 opacity-60 animate-ping" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-forest-500" />
                        </span>
                        Why Enorve
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.05] mb-6"
                    >
                        AI support that{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-cream-300 via-forest-300 to-forest-500 bg-clip-text text-transparent">
                                stays on track
                            </span>
                            <svg
                                aria-hidden="true"
                                className="absolute -bottom-2 left-0 w-full"
                                height="8"
                                viewBox="0 0 300 8"
                                fill="none"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M2 5.5 C 60 2, 140 2, 298 5.5"
                                    stroke="url(#stays-underline)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                                <defs>
                                    <linearGradient id="stays-underline" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor={CREAM} stopOpacity="0" />
                                        <stop offset="50%" stopColor={FOREST} stopOpacity="0.8" />
                                        <stop offset="100%" stopColor={FOREST} stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="text-lg md:text-xl text-white/60 leading-relaxed"
                    >
                        Your AI assistant follows your rules, remembers your customers, and knows when to ask for help.{" "}
                        <span className="text-white/90 font-medium">
                            Fast, consistent answers — without losing control.
                        </span>
                    </motion.p>
                </motion.div>

                {/* Four Pillars Grid */}
                <motion.div
                    variants={pillarsContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20"
                >
                    {pillars.map((pillar) => {
                        const t = toneStyles[pillar.tone]
                        return (
                            <motion.div
                                key={pillar.title}
                                variants={fadeUp}
                                className="group relative rounded-2xl p-7 bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.035] transition-colors duration-300"
                            >
                                {/* Soft hover glow — tinted to the pillar's tone */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(ellipse 70% 60% at 20% 0%, ${t.color}0F, transparent 60%)`,
                                    }}
                                />

                                {/* Big faint numeral in top-right — visual anchor per ui-ux-pro-max */}
                                <span
                                    className="absolute top-6 right-7 text-[44px] font-medium leading-none tracking-tight select-none"
                                    style={{ color: t.numberColor, fontVariantNumeric: "tabular-nums" }}
                                    aria-hidden="true"
                                >
                                    {pillar.number}
                                </span>

                                <div className="relative z-10">
                                    <div
                                        className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-[1.04]"
                                        style={{
                                            backgroundColor: t.badgeBg,
                                            border: `1px solid ${t.badgeBorder}`,
                                            color: t.color,
                                        }}
                                    >
                                        {pillar.icon}
                                    </div>

                                    <h3 className="text-[17px] font-medium text-white mb-2 tracking-tight">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-[14px] text-white/55 leading-relaxed max-w-[42ch]">
                                        {pillar.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Before / After comparison */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE_OUT }}
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                    className="relative rounded-[28px] border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent p-6 sm:p-8 md:p-10 overflow-hidden"
                >
                    {/* Forest ambient — single source, cream hint on the "after" side */}
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-forest-500/[0.06] blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cream-400/[0.03] blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-5 md:gap-6">
                        {/* Before — muted, desaturated */}
                        <div className="relative p-6 md:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                            <div className="flex items-center gap-2 mb-5">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-400/80" />
                                <span className="text-[11px] font-medium text-white/45 uppercase tracking-[0.18em]">
                                    Before Enorve
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {beforeItems.map((text) => (
                                    <li key={text} className="flex items-start gap-3 text-[14px] text-white/55">
                                        <svg
                                            className="w-4 h-4 mt-0.5 shrink-0 text-red-400/70"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* After — brand-forward, the payoff */}
                        <div
                            className="relative p-6 md:p-7 rounded-2xl border"
                            style={{
                                background: `linear-gradient(180deg, rgba(31, 168, 111, 0.08) 0%, rgba(31, 168, 111, 0.02) 100%)`,
                                borderColor: "rgba(31, 168, 111, 0.22)",
                                boxShadow: "0 0 0 1px rgba(31, 168, 111, 0.04), 0 20px 60px -30px rgba(31, 168, 111, 0.35)",
                            }}
                        >
                            <div className="flex items-center gap-2 mb-5">
                                <span className="relative flex w-1.5 h-1.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-forest-500 opacity-60 animate-ping" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-forest-500" />
                                </span>
                                <span className="text-[11px] font-medium text-forest-300 uppercase tracking-[0.18em]">
                                    With Enorve
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {afterItems.map((text) => (
                                    <li key={text} className="flex items-start gap-3 text-[14px] text-white/80">
                                        <span
                                            className="w-4 h-4 mt-0.5 shrink-0 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: "rgba(31, 168, 111, 0.18)" }}
                                            aria-hidden="true"
                                        >
                                            <svg
                                                className="w-2.5 h-2.5"
                                                fill="none"
                                                stroke={FOREST}
                                                strokeWidth={3}
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
