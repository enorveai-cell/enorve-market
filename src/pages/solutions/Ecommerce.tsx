import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    ShoppingCart, ArrowRight, Package, DollarSign, TrendingUp, Users,
    MessageSquare, CheckCircle, Zap, Brain, Tag, Inbox, Clock,
    Crown, Heart, Sparkles, RefreshCw, Truck, CreditCard, Star
} from "lucide-react"
import { Button } from "../../components/ui/Button"
import { usePageTitle } from "../../hooks/usePageTitle"

const painPoints = [
    { icon: Package, text: '"Where is my order?" floods', color: "#F59E0B" },
    { icon: RefreshCw, text: "Refund and return questions", color: "#EF4444" },
    { icon: TrendingUp, text: "Support spikes during sales", color: "#8B5CF6" },
    { icon: Crown, text: "High-value customers get lost in queues", color: "#3B82F6" }
]

const solutions = [
    {
        number: "01",
        title: "Order context inside every conversation",
        feature: "Shopify Integration",
        color: "#10B981",
        icon: ShoppingCart,
        capabilities: [
            "Order lookup with real-time status",
            "Customer purchase history at a glance",
            "Revenue attribution per conversation"
        ],
        impact: "Agents resolve faster, AI answers accurately"
    },
    {
        number: "02",
        title: "AI handles repetitive order questions",
        feature: "AI Auto-Resolution + Knowledge Base",
        color: "#8B5CF6",
        icon: Brain,
        capabilities: [
            "Delivery status inquiries answered instantly",
            "Refund policies explained automatically",
            "Return instructions with step-by-step guidance"
        ],
        impact: "Massive reduction in human workload"
    },
    {
        number: "03",
        title: "Prioritize customers that matter",
        feature: "Customer Management + Auto-Tag Rules",
        color: "#F59E0B",
        icon: Crown,
        capabilities: [
            "Lifecycle stages (VIP, at-risk, new)",
            "Automatic priority escalation for high-LTV",
            "Smart routing based on customer value"
        ],
        impact: "Better retention and loyalty"
    },
    {
        number: "04",
        title: "Support customers where they already are",
        feature: "Multi-Channel Inbox",
        color: "#3B82F6",
        icon: Inbox,
        capabilities: [
            "WhatsApp, Instagram, Email, Web chat",
            "Unified view across all channels",
            "Consistent experience everywhere"
        ],
        impact: "Faster replies, higher trust"
    }
]

const outcomes = [
    { icon: DollarSign, title: "Lower cost per conversation", value: "₹12", desc: "avg cost/ticket" },
    { icon: Clock, title: "Faster resolutions during peak", value: "2min", desc: "avg resolution" },
    { icon: Heart, title: "Happier, repeat customers", value: "4.7/5", desc: "CSAT score" }
]

const channels = [
    { name: "WhatsApp", color: "#25D366", svg: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg> },
    { name: "Instagram", color: "#E4405F", svg: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
    { name: "Email", color: "#EA4335", svg: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg> },
    { name: "Live Chat", color: "#FACC15", svg: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" /><circle cx="8" cy="10" r="1.5" /><circle cx="12" cy="10" r="1.5" /><circle cx="16" cy="10" r="1.5" /></svg> }
]

export function Ecommerce() {
    usePageTitle("E-commerce Support - Scale Order & Returns Automation")
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                            <ShoppingCart className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-400">For E-commerce & Shopify Teams</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Automate orders.<br />
                            Delight customers.
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Let AI handle "Where is my order?" while your team focuses on complex issues. Shopify integration brings order context into every conversation.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://app.enorve.com/">
                                <Button variant="primary" size="lg">
                                    Get Started
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </a>
                            <Link to="/contact-sales">
                                <Button variant="secondary" size="lg">
                                    Talk to sales
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* E-commerce Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-emerald-500/25 blur-[120px] -z-10" />

                            {/* Main UI Mockup */}
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.85)] bg-[#0C0E12]">
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                                        </div>
                                        <span className="text-xs text-gray-500 ml-3">Order Support</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                                            <span className="text-[10px] text-emerald-400">Shopify Connected</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Conversation with Order Panel */}
                                <div className="flex">
                                    {/* Chat */}
                                    <div className="flex-1 p-4 border-r border-white/5">
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-2">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-[10px] font-bold text-white">SP</div>
                                                <div className="flex-1">
                                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                                        <p className="text-xs text-gray-300">Where is my order? I ordered 3 days ago and still haven't received it.</p>
                                                    </div>
                                                    <div className="flex gap-2 mt-1">
                                                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400">order_status</span>
                                                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">VIP customer</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* AI Response */}
                                            <div className="flex items-start gap-2">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                                                    <Sparkles className="w-4 h-4 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                                        <p className="text-xs text-gray-300">Hi Sneha! I found your order #EN-45821. It shipped yesterday and is currently in transit. Expected delivery: Tomorrow by 6 PM.</p>
                                                        <div className="flex items-center gap-1 mt-2">
                                                            <CheckCircle className="w-3 h-3 text-emerald-400" />
                                                            <span className="text-[9px] text-emerald-400">Auto-resolved</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Order Sidebar */}
                                    <div className="w-52 p-4 bg-white/[0.01]">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Package className="w-4 h-4 text-emerald-400" />
                                            <span className="text-xs font-medium text-white">Order Details</span>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                                <div className="text-[10px] text-gray-500">Order ID</div>
                                                <div className="text-xs text-white font-mono">#EN-45821</div>
                                            </div>
                                            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                                <div className="text-[10px] text-gray-500">Status</div>
                                                <div className="flex items-center gap-1">
                                                    <Truck className="w-3 h-3 text-blue-400" />
                                                    <span className="text-xs text-blue-400">In Transit</span>
                                                </div>
                                            </div>
                                            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                                <div className="text-[10px] text-gray-500">Order Value</div>
                                                <div className="text-xs text-emerald-400 font-medium">₹4,299</div>
                                            </div>
                                            <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
                                                <div className="flex items-center gap-1">
                                                    <Crown className="w-3 h-3 text-amber-400" />
                                                    <span className="text-[10px] text-amber-400 font-medium">VIP Customer</span>
                                                </div>
                                                <div className="text-[10px] text-gray-500 mt-1">LTV: ₹42,500</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -right-4 top-8 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float">
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-emerald-400" />
                                    <div>
                                        <div className="text-xs text-white font-medium">68%</div>
                                        <div className="text-[10px] text-gray-500">WISMO resolved</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -left-4 bottom-12 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-4 h-4 text-emerald-400" />
                                    <div>
                                        <div className="text-xs text-white font-medium">₹8.4L</div>
                                        <div className="text-[10px] text-gray-500">Revenue attributed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-4">
                            The e-commerce support struggle
                        </h2>
                        <p className="text-lg text-gray-400">Challenges that every online store faces</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {painPoints.map((pain, index) => (
                            <motion.div
                                key={pain.text}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-[24px] bg-[#0C0E12] border border-white/5"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${pain.color}20`, border: `1px solid ${pain.color}40` }}
                                >
                                    <pain.icon className="w-6 h-6" style={{ color: pain.color }} />
                                </div>
                                <p className="text-white font-medium leading-snug">{pain.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">
                            Built for e-commerce
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Deep Shopify integration and AI that understands orders, returns, and customer value
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={solution.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-[32px] bg-[#0C0E12] border border-white/5 hover:border-emerald-500/30 transition-all duration-500"
                            >
                                <div className="grid lg:grid-cols-[1fr,2fr,1fr] gap-8 items-center">
                                    {/* Number & Title */}
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="text-4xl font-bold opacity-30"
                                            style={{ color: solution.color }}
                                        >
                                            {solution.number}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-medium text-white mb-2 leading-tight">{solution.title}</h3>
                                            <div
                                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                                                style={{ backgroundColor: `${solution.color}20`, color: solution.color, border: `1px solid ${solution.color}40` }}
                                            >
                                                <solution.icon className="w-3 h-3" />
                                                {solution.feature}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Capabilities */}
                                    <div className="space-y-2">
                                        {solution.capabilities.map((cap) => (
                                            <div key={cap} className="flex items-start gap-3">
                                                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: solution.color }} />
                                                <span className="text-gray-400 text-sm">{cap}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Impact */}
                                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.02] to-white/[0.05] border border-white/10">
                                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Impact</div>
                                        <p className="text-white font-medium text-sm">{solution.impact}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shopify Integration Deep Dive */}
            <section className="py-24 relative bg-black/50">
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
                                <span className="text-xs text-[#95BF47] font-medium">Shopify Integration</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                                Order context<br />
                                <span className="text-gray-500">everywhere</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                No more switching between tabs. Pull order status, shipping info, and purchase history directly into every conversation.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { title: "Real-time Order Lookup", desc: "Instant access to order status, tracking, and delivery ETA" },
                                    { title: "Customer History", desc: "See all previous orders, returns, and total spend" },
                                    { title: "Revenue Attribution", desc: "Track revenue influenced by support conversations" }
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                                            <p className="text-gray-500 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Order Lookup Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-[32px] bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white font-medium">Customer 360°</h3>
                                <span className="text-xs text-emerald-400">Synced from Shopify</span>
                            </div>

                            {/* Customer Card */}
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-sm font-bold text-white">SP</div>
                                    <div>
                                        <div className="text-white font-medium">Sneha Patel</div>
                                        <div className="text-xs text-gray-500">sneha@example.com</div>
                                    </div>
                                    <div className="ml-auto flex items-center gap-1 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                                        <Crown className="w-3 h-3 text-amber-400" />
                                        <span className="text-[10px] text-amber-400">VIP</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                                        <div className="text-lg font-bold text-white">12</div>
                                        <div className="text-[10px] text-gray-500">Orders</div>
                                    </div>
                                    <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                                        <div className="text-lg font-bold text-emerald-400">₹42.5K</div>
                                        <div className="text-[10px] text-gray-500">Lifetime Value</div>
                                    </div>
                                    <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                                        <div className="text-lg font-bold text-white">4.9</div>
                                        <div className="text-[10px] text-gray-500">Avg CSAT</div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Orders */}
                            <div className="text-xs text-gray-500 mb-3">Recent Orders</div>
                            <div className="space-y-2">
                                {[
                                    { id: "#EN-45821", status: "In Transit", value: "₹4,299", date: "2 days ago" },
                                    { id: "#EN-42156", status: "Delivered", value: "₹2,899", date: "2 weeks ago" },
                                    { id: "#EN-38901", status: "Delivered", value: "₹6,499", date: "1 month ago" }
                                ].map((order) => (
                                    <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <Package className="w-4 h-4 text-gray-500" />
                                            <div>
                                                <div className="text-xs text-white font-mono">{order.id}</div>
                                                <div className="text-[10px] text-gray-500">{order.date}</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-emerald-400">{order.value}</div>
                                            <div className={`text-[10px] ${order.status === 'In Transit' ? 'text-blue-400' : 'text-green-400'}`}>{order.status}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Multi-Channel Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4"
                        >
                            Meet customers where they shop
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-400 max-w-2xl mx-auto"
                        >
                            WhatsApp, Instagram, Email, Live Chat — all in one unified inbox with consistent AI assistance
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {channels.map((channel, index) => (
                            <motion.div
                                key={channel.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-[24px] bg-[#0C0E12] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 text-center"
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500"
                                    style={{ backgroundColor: `${channel.color}20`, color: channel.color, border: `1px solid ${channel.color}40` }}
                                >
                                    {channel.svg}
                                </div>
                                <h3 className="text-lg font-medium text-white">{channel.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes Section */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                            <TrendingUp className="w-3 h-3 text-emerald-400" />
                            <span className="text-xs text-emerald-400 font-medium">Proven Results</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">
                            Results that matter
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {outcomes.map((outcome, index) => (
                            <motion.div
                                key={outcome.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-10 rounded-[32px] bg-[#0C0E12] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 text-center"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <outcome.icon className="w-10 h-10 text-emerald-400" />
                                </div>
                                <div className="text-5xl font-bold text-white mb-2">{outcome.value}</div>
                                <div className="text-sm text-gray-500 mb-4">{outcome.desc}</div>
                                <h3 className="text-xl font-medium text-white">{outcome.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 pb-20 relative z-10">
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
                            Scale e-commerce support with AI
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Get started with Enorve and connect your Shopify store in minutes.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://app.enorve.com/">
                                <Button variant="primary" size="lg">
                                    Get Started
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </a>
                            <Link to="/contact-sales">
                                <Button variant="secondary" size="lg">
                                    Talk to sales
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* CSS for float animation */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}
