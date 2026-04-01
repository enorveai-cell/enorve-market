import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, FileText, Shield, Brain, Clock, Check, Users, MessageSquare, Sparkles, Headphones } from "lucide-react"
import { usePageTitle } from "../hooks/usePageTitle"

const fade = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

type FormStatus = "idle" | "submitting" | "success" | "error"

const VOLUME_OPTIONS = ["Under 500", "500–2,000", "2,000–10,000", "10,000+"]

export function DesignPartners() {
    usePageTitle({
        title: "Design Partners — Shape the Future of AI Support",
        description: "We're accepting 5 design partners. Free setup, founder access, 90 days no cost. Apply in 2 minutes."
    })

    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")
    const [currentTool, setCurrentTool] = useState("")
    const [volume, setVolume] = useState("")
    const [pain, setPain] = useState("")
    const [status, setStatus] = useState<FormStatus>("idle")

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const canSubmit = company.trim() && email.trim() && isValidEmail && currentTool.trim() && volume && pain.trim().length >= 10

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!canSubmit) return

        setStatus("submitting")
        try {
            const res = await fetch("https://uggsfinugqzjfroxzpbo.supabase.co/functions/v1/design-partner-apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    company_name: company.trim(),
                    email: email.trim(),
                    current_tool: currentTool.trim(),
                    monthly_ticket_volume: volume,
                    biggest_pain: pain.trim(),
                }),
            })

            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                throw new Error(data.error || "Submission failed")
            }

            // Track in GA
            if (window.gtag) {
                window.gtag('event', 'design_partner_applied', {
                    event_category: 'conversion',
                    event_label: company.trim(),
                    volume,
                })
            }

            setStatus("success")
        } catch {
            setStatus("error")
        }
    }

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-3xl mx-auto px-6">

                {/* ── Hero ─────────────────────────────────────────────────── */}
                <motion.section className="mb-20 text-center" {...fade}>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                        </span>
                        <span className="text-xs text-emerald-400 font-medium">5 spots available</span>
                    </span>

                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
                        We're accepting 5 design partners.
                    </h1>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed mb-8">
                        Not a waitlist. Not a beta signup. A working relationship with the team that built Enorve — while there's still room to shape what it becomes.
                    </p>
                    <a
                        href="#apply"
                        className="inline-flex items-center gap-2 bg-white text-black font-medium text-sm h-11 px-7 rounded-full hover:bg-gray-200 transition-all"
                    >
                        Apply now — 2 minutes
                        <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </motion.section>

                {/* ── What this is ─────────────────────────────────────────── */}
                <motion.section className="mb-16" {...fade} transition={{ delay: 0.05 }}>
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">What "design partner" actually means</h2>
                    <p className="text-base text-gray-300 leading-relaxed">
                        You run Enorve on your real support volume. We set everything up for you. You tell us what's broken, what's missing, and what's working. If the results are good, we ask if we can write about it.
                    </p>
                    <p className="text-base text-gray-500 mt-3">
                        That's the whole arrangement.
                    </p>
                </motion.section>

                {/* ── What you get ─────────────────────────────────────────── */}
                <motion.section className="mb-16" {...fade} transition={{ delay: 0.1 }}>
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">What you get</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                icon: Sparkles,
                                title: "Free setup and onboarding",
                                desc: "We configure your Protocol Engine, connect your channels, and migrate your knowledge base. You don't touch a config file."
                            },
                            {
                                icon: Users,
                                title: "Direct founder access",
                                desc: "Not a support ticket queue. A shared Slack channel with the people who built the product. Questions get answered the same day."
                            },
                            {
                                icon: MessageSquare,
                                title: "Influence the roadmap",
                                desc: "The features built in the next 90 days will be shaped by what design partners ask for. You're not a user — you're a co-author."
                            },
                            {
                                icon: Clock,
                                title: "No cost for 90 days",
                                desc: "Full access to every feature, every channel, every integration. No credit card. No contract. No obligation beyond honest feedback."
                            },
                        ].map(item => (
                            <div key={item.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                                <item.icon className="w-4 h-4 text-emerald-400 mb-3" />
                                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* ── What we ask ──────────────────────────────────────────── */}
                <motion.section className="mb-16" {...fade} transition={{ delay: 0.15 }}>
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">What we ask in return</h2>
                    <div className="space-y-3">
                        {[
                            "Run Enorve on real support volume for at least 30 days",
                            "Give us honest feedback, including when things break",
                            "If the results are good, let us document them in a case study",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 text-base text-gray-300">
                                <span className="text-gray-600 mt-1">—</span>
                                {item}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        That's it. No NDA. No exclusivity. No obligation to continue after 90 days.
                    </p>
                </motion.section>

                {/* ── Who this is for ──────────────────────────────────────── */}
                <motion.section className="mb-16" {...fade} transition={{ delay: 0.2 }}>
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">This is built for you if</h2>
                    <div className="space-y-3">
                        {[
                            "You're on Zendesk, Intercom, Gorgias, or Tidio and the bill is growing faster than your team",
                            "Your AI support tool has gone off-script and made a promise you couldn't keep",
                            "You're running a support stack that's held together with Zapier and hope",
                            "You want AI that follows your rules — not its own",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 text-base text-gray-300">
                                <span className="text-gray-600 mt-1">—</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* ── Trust signals ────────────────────────────────────────── */}
                <motion.section className="mb-16" {...fade} transition={{ delay: 0.25 }}>
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">Before you apply</h2>
                    <p className="text-sm text-gray-400 mb-5">
                        Everything is documented. No claims without evidence.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { label: "API Documentation", desc: "Evaluate the platform before signing up", href: "https://app.enorve.com/docs", icon: FileText },
                            { label: "AI Transparency", desc: "Exactly what the AI can and cannot do", href: "/ai-transparency", icon: Brain },
                            { label: "Security", desc: "SOC 2 in progress, GDPR/CCPA active", href: "/security", icon: Shield },
                            { label: "Help Center", desc: "Full product documentation, public", href: "https://app.enorve.com/help-center", icon: Headphones },
                        ].map(item => (
                            item.href.startsWith("http") ? (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-4"
                                >
                                    <item.icon className="w-4 h-4 text-gray-600 shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-white">{item.label}</p>
                                        <p className="text-xs text-gray-500 truncate">{item.desc}</p>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition-colors shrink-0" />
                                </a>
                            ) : (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-4"
                                >
                                    <item.icon className="w-4 h-4 text-gray-600 shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-white">{item.label}</p>
                                        <p className="text-xs text-gray-500 truncate">{item.desc}</p>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition-colors shrink-0" />
                                </Link>
                            )
                        ))}
                    </div>
                    <p className="mt-4 text-xs text-gray-600 font-mono">
                        "These constraints are enforced at the protocol engine layer, not by prompt engineering. They cannot be bypassed by prompt injection or adversarial input."
                    </p>
                </motion.section>

                {/* ── Application form ─────────────────────────────────────── */}
                <motion.section id="apply" className="scroll-mt-24" {...fade} transition={{ delay: 0.3 }}>
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">Apply for a design partner slot</h2>
                    <p className="text-sm text-gray-400 mb-6">
                        2 minutes. 4 questions. We respond within 24 hours.
                    </p>

                    {status === "success" ? (
                        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] p-8 text-center">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-4">
                                <Check className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Application received.</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                We review every application personally and respond within 24 hours. Check your inbox — or spam, just in case.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">Company name</label>
                                <input
                                    id="company"
                                    type="text"
                                    value={company}
                                    onChange={e => setCompany(e.target.value)}
                                    placeholder="Acme Inc."
                                    className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-white/20 transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Work email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="you@company.com"
                                    className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-white/20 transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="tool" className="block text-sm font-medium text-white mb-2">Current support tool</label>
                                <input
                                    id="tool"
                                    type="text"
                                    value={currentTool}
                                    onChange={e => setCurrentTool(e.target.value)}
                                    placeholder="Zendesk / Intercom / Gorgias / Tidio / Other"
                                    className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-white/20 transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="volume" className="block text-sm font-medium text-white mb-2">Monthly support ticket volume (approx.)</label>
                                <select
                                    id="volume"
                                    value={volume}
                                    onChange={e => setVolume(e.target.value)}
                                    className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-white/20 transition-colors appearance-none"
                                >
                                    <option value="" className="bg-[#0a0a0f]">Select volume range</option>
                                    {VOLUME_OPTIONS.map(opt => (
                                        <option key={opt} value={opt} className="bg-[#0a0a0f]">{opt}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="pain" className="block text-sm font-medium text-white mb-2">Biggest support pain right now</label>
                                <textarea
                                    id="pain"
                                    value={pain}
                                    onChange={e => setPain(e.target.value)}
                                    placeholder="2–3 sentences about what's not working with your current setup"
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-white/20 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={!canSubmit || status === "submitting"}
                                className="w-full h-11 rounded-lg bg-white text-black text-sm font-medium transition-all hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? "Submitting..." : "Submit application"}
                            </button>

                            {status === "error" && (
                                <p className="text-xs text-red-400 text-center">Something went wrong. Please try again or email sales@enorve.com directly.</p>
                            )}
                        </form>
                    )}

                    <p className="text-xs text-gray-600 text-center mt-6 leading-relaxed">
                        No sales calls. No demo before we talk. You apply, we review, we schedule one 30-minute conversation to confirm it's a good fit. If it is, you're onboarded the same week.
                    </p>
                </motion.section>

            </div>
        </div>
    )
}
