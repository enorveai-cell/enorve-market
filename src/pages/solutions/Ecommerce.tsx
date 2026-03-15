import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    ShoppingCart, ArrowRight, Package, DollarSign, TrendingUp, Users,
    CheckCircle, Zap, Brain, Inbox, Clock,
    Crown, Sparkles, RefreshCw, Truck, TrendingDown,
    Calculator, BarChart3, Bot, Shield
} from "lucide-react"
import { Button } from "../../components/ui/Button"
import { usePageTitle } from "../../hooks/usePageTitle"

const laborCosts = [
    {
        icon: Users,
        title: "Headcount that scales linearly",
        description: "Every 150 new conversations/month = 1 new FTE. At $45K/agent, your support cost grows 1:1 with revenue.",
        color: "#EF4444"
    },
    {
        icon: TrendingUp,
        title: "Peak season hiring spikes",
        description: "Sale events 3-5x your ticket volume overnight. You can't hire, train, and fire agents on a seasonal cycle.",
        color: "#F59E0B"
    },
    {
        icon: RefreshCw,
        title: "70% of tickets are repetitive",
        description: '"Where is my order?" "How do I return this?" "When will my refund arrive?" — the same 5 questions, thousands of times.',
        color: "#8B5CF6"
    },
    {
        icon: Clock,
        title: "Growing headcount costs",
        description: "Global e-commerce runs around the clock. Covering all timezones doubles or triples your team size.",
        color: "#3B82F6"
    }
]

const replacements = [
    {
        number: "01",
        title: "WISMO and order status — automatically resolved",
        capability: "Shopify Order Intelligence",
        color: "#10B981",
        icon: Package,
        what: "AI pulls real-time order data from Shopify — tracking, ETA, carrier info — and resolves the conversation end-to-end.",
        laborSaved: "Eliminates ~30% of all support FTEs",
        capabilities: [
            "Real-time order status lookup from Shopify",
            "Carrier tracking and estimated delivery dates",
            "Proactive updates before the customer asks"
        ]
    },
    {
        number: "02",
        title: "Returns and refunds — automatically processed",
        capability: "Policy-Governed Resolution",
        color: "#8B5CF6",
        icon: RefreshCw,
        what: "AI applies your return policy consistently — checks eligibility, initiates the return, confirms the refund. No human needed.",
        laborSaved: "Eliminates ~20% of all support FTEs",
        capabilities: [
            "Return eligibility checks against your policy rules",
            "Automated return label generation",
            "Refund status communication through resolution"
        ]
    },
    {
        number: "03",
        title: "Product questions — automatically answered",
        capability: "Knowledge Base + AI Resolution",
        color: "#F59E0B",
        icon: Brain,
        what: "AI draws from your product catalog, size guides, FAQs, and Shopify product data to answer pre-sale and post-sale questions.",
        laborSaved: "Eliminates ~15% of all support FTEs",
        capabilities: [
            "Product specs, sizing, compatibility answers",
            "Stock availability and variant information",
            "Shipping policies, payment methods, store policies"
        ]
    },
    {
        number: "04",
        title: "All channels — one autonomous operations layer",
        capability: "Omnichannel Autonomous Inbox",
        color: "#3B82F6",
        icon: Inbox,
        what: "WhatsApp, Instagram, Email, Live Chat — AI resolves conversations across every channel. Humans see only what needs judgment.",
        laborSaved: "Eliminates channel-switching overhead",
        capabilities: [
            "Unified resolution across WhatsApp, Instagram, Email, Chat",
            "Consistent autonomous responses regardless of channel",
            "Escalation only when human judgment is required"
        ]
    }
]

const economicsData = {
    before: {
        label: "Traditional Support Team",
        agents: 8,
        costPerAgent: "$45-50K",
        totalCost: "$360-400K",
        model: "Linear scaling — every revenue milestone adds headcount"
    },
    after: {
        label: "With Enorve",
        agents: "2-4",
        automationRate: "60-80%",
        totalCost: "$160-240K",
        model: "AI resolves the majority. Humans handle exceptions only."
    }
}

const outcomes = [
    { icon: TrendingDown, title: "Headcount reduction", value: "60-80%", desc: "of conversations resolved without humans", color: "#10B981" },
    { icon: DollarSign, title: "Annual savings", value: "$160K+", desc: "in labor costs per year", color: "#8B5CF6" },
    { icon: Clock, title: "Resolution time", value: "<30s", desc: "avg autonomous resolution", color: "#3B82F6" },
    { icon: Shield, title: "Governed AI", value: "100%", desc: "of AI decisions are auditable", color: "#F59E0B" }
]

export function Ecommerce() {
    usePageTitle({
        title: "E-commerce — Replace Support Labor with Autonomous AI",
        description: "Your Shopify store doesn't have a software problem. It has a labor scaling problem. Enorve automatically resolves 60-80% of support conversations — replacing FTEs, not augmenting them."
    })
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                            <ShoppingCart className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-400">Governed Autonomous AI Operations for E-commerce</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Your Shopify store doesn't have a software problem.
                            <br />
                            <span className="text-emerald-400/80">It has a labor scaling problem.</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl">
                            Every time revenue grows, support headcount grows with it. Enorve breaks that link.
                            AI automatically resolves 60-80% of your conversations — replacing FTEs, not augmenting them.
                        </p>

                        {/* Economics callout */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="inline-flex items-center gap-6 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-10"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-red-400 line-through opacity-70">$400K</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">8-agent team/yr</div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-500" />
                            <div className="text-center">
                                <div className="text-2xl font-bold text-emerald-400">$160-240K</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">with Enorve</div>
                            </div>
                            <div className="h-10 w-px bg-white/10" />
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">60%</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">labor reduction</div>
                            </div>
                        </motion.div>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/labor-replacement-calculator">
                                <Button variant="primary" size="lg">
                                    Calculate Your Labor Savings
                                    <Calculator className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link to="/contact-sales">
                                <Button variant="secondary" size="lg">
                                    Talk to sales
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Cost of Scaling Support */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                            <TrendingUp className="w-3 h-3 text-red-400" />
                            <span className="text-xs text-red-400 font-medium">The Problem</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-4">
                            Support labor doesn't scale.
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            As your store grows, your support cost grows linearly. Every new revenue milestone brings a new hiring cycle.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {laborCosts.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-[24px] bg-[#0C0E12] border border-white/5"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}40` }}
                                >
                                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                                </div>
                                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How Enorve Replaces Labor */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                            <Bot className="w-3 h-3 text-emerald-400" />
                            <span className="text-xs text-emerald-400 font-medium">Autonomous Resolution</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">
                            AI replaces the work. Not the worker.
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Each category of support work maps to FTEs you no longer need to hire. Enorve resolves automatically — with Shopify-native intelligence.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {replacements.map((item, index) => (
                            <motion.div
                                key={item.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-[32px] bg-[#0C0E12] border border-white/5 hover:border-emerald-500/30 transition-all duration-500"
                            >
                                <div className="grid lg:grid-cols-[1fr,2fr,1fr] gap-8 items-start">
                                    {/* Number & Title */}
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="text-4xl font-bold opacity-30"
                                            style={{ color: item.color }}
                                        >
                                            {item.number}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-medium text-white mb-2 leading-tight">{item.title}</h3>
                                            <div
                                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                                                style={{ backgroundColor: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}
                                            >
                                                <item.icon className="w-3 h-3" />
                                                {item.capability}
                                            </div>
                                        </div>
                                    </div>

                                    {/* What + Capabilities */}
                                    <div>
                                        <p className="text-gray-400 text-sm mb-4">{item.what}</p>
                                        <div className="space-y-2">
                                            {item.capabilities.map((cap) => (
                                                <div key={cap} className="flex items-start gap-3">
                                                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                                                    <span className="text-gray-400 text-sm">{cap}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Labor Impact */}
                                    <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border border-emerald-500/20">
                                        <div className="text-[10px] text-emerald-400 uppercase tracking-wider mb-1">Labor Impact</div>
                                        <p className="text-white font-medium text-sm">{item.laborSaved}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Economics */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
                            <BarChart3 className="w-3 h-3 text-violet-400" />
                            <span className="text-xs text-violet-400 font-medium">The Economics</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">
                            The math is simple.
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Replace linear labor scaling with autonomous resolution. Same quality. Fraction of the cost.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Before */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[32px] bg-[#0C0E12] border border-red-500/20"
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <span className="text-sm font-medium text-red-400">{economicsData.before.label}</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                    <span className="text-sm text-gray-400">Support agents</span>
                                    <span className="text-white font-medium">{economicsData.before.agents}</span>
                                </div>
                                <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                    <span className="text-sm text-gray-400">Cost per agent</span>
                                    <span className="text-white font-medium">{economicsData.before.costPerAgent}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                                    <span className="text-sm text-red-400 font-medium">Annual cost</span>
                                    <span className="text-2xl text-red-400 font-bold">{economicsData.before.totalCost}</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-4">{economicsData.before.model}</p>
                        </motion.div>

                        {/* After */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[32px] bg-[#0C0E12] border border-emerald-500/20"
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                <span className="text-sm font-medium text-emerald-400">{economicsData.after.label}</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                    <span className="text-sm text-gray-400">Support agents needed</span>
                                    <span className="text-white font-medium">{economicsData.after.agents}</span>
                                </div>
                                <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                    <span className="text-sm text-gray-400">Autonomous resolution</span>
                                    <span className="text-emerald-400 font-medium">{economicsData.after.automationRate}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                                    <span className="text-sm text-emerald-400 font-medium">Annual cost</span>
                                    <span className="text-2xl text-emerald-400 font-bold">{economicsData.after.totalCost}</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-4">{economicsData.after.model}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Shopify-Native Intelligence */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#95BF47]/10 border border-[#95BF47]/20 mb-4">
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#95BF47">
                                    <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zm-1.514-18.889l-.749 2.338s-.835-.378-1.836-.314c-1.471.094-1.483 1.018-1.47 1.252.075 1.261 3.399 1.536 3.584 4.489.145 2.327-1.233 3.918-3.22 4.042-2.386.149-3.699-1.259-3.699-1.259l.507-2.145s1.325.998 2.386.931c.693-.044.942-.607.916-1.007-.098-1.646-2.808-1.549-2.981-4.254-.146-2.275 1.35-4.584 4.648-4.794 1.273-.081 1.914.243 1.914.243v.478z" />
                                </svg>
                                <span className="text-xs text-[#95BF47] font-medium">Shopify-Native</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                                AI acts on order data.
                                <br />
                                <span className="text-gray-400">Not as a lookup tool.</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                Enorve doesn't just fetch order status for human agents. It pulls order data, applies your business rules, resolves the conversation, and closes the ticket — automatically.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { title: "Order Resolution, Not Lookup", desc: "AI resolves 'Where is my order?' end-to-end — no human handoff required" },
                                    { title: "Policy Enforcement", desc: "Return eligibility, refund windows, exchange rules — applied consistently" },
                                    { title: "Revenue-Aware Prioritization", desc: "High-LTV customers get intelligent escalation. The rest are resolved automatically." }
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Autonomous Resolution Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-[32px] bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white font-medium">Autonomous Resolution</h3>
                                <span className="text-xs text-emerald-400">Shopify Connected</span>
                            </div>

                            {/* Conversation Flow */}
                            <div className="space-y-4 mb-6">
                                {/* Customer */}
                                <div className="flex items-start gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-[10px] font-bold text-white">SP</div>
                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex-1">
                                        <p className="text-xs text-gray-300">Where is my order #EN-45821? It's been 3 days.</p>
                                    </div>
                                </div>

                                {/* AI Action */}
                                <div className="ml-10 flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-500/5 border border-violet-500/20">
                                    <Zap className="w-3 h-3 text-violet-400" />
                                    <span className="text-[10px] text-violet-400">AI fetched order from Shopify → In Transit → ETA: Tomorrow 6 PM</span>
                                </div>

                                {/* AI Response */}
                                <div className="flex items-start gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                            <p className="text-xs text-gray-300">Hi Sneha! Your order #EN-45821 shipped yesterday and is in transit. Expected delivery: Tomorrow by 6 PM. Here's your tracking link: [track.enorve.com/45821]</p>
                                        </div>
                                        <div className="flex items-center gap-3 mt-2">
                                            <div className="flex items-center gap-1">
                                                <CheckCircle className="w-3 h-3 text-emerald-400" />
                                                <span className="text-[9px] text-emerald-400">Auto-resolved</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3 text-gray-500" />
                                                <span className="text-[9px] text-gray-500">12s resolution</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-3 h-3 text-gray-500" />
                                                <span className="text-[9px] text-gray-500">0 humans involved</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Bar */}
                            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="text-center">
                                    <div className="text-lg font-bold text-emerald-400">AI</div>
                                    <div className="text-[10px] text-gray-400">Auto-resolved today</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-white">18s</div>
                                    <div className="text-[10px] text-gray-400">Avg resolution</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-violet-400">0</div>
                                    <div className="text-[10px] text-gray-400">Agents needed</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">
                            The outcome is fewer people doing more.
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Not "better tools for agents." Fewer agents needed, period.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {outcomes.map((outcome, index) => (
                            <motion.div
                                key={outcome.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-[24px] bg-[#0C0E12] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 text-center"
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500"
                                    style={{ backgroundColor: `${outcome.color}15`, border: `1px solid ${outcome.color}30` }}
                                >
                                    <outcome.icon className="w-8 h-8" style={{ color: outcome.color }} />
                                </div>
                                <div className="text-4xl font-bold text-white mb-1">{outcome.value}</div>
                                <div className="text-xs text-gray-400 mb-3">{outcome.desc}</div>
                                <h3 className="text-sm font-medium text-white">{outcome.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative p-12 rounded-[32px] bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-center overflow-hidden"
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_70%)]" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
                            Stop hiring. Start automating.
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            See exactly how many FTEs Enorve can replace for your Shopify store — and what it saves you in year one.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/labor-replacement-calculator">
                                <Button variant="primary" size="lg">
                                    Calculate Your Labor Savings
                                    <Calculator className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link to="/contact-sales">
                                <Button variant="secondary" size="lg">
                                    Talk to sales
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
