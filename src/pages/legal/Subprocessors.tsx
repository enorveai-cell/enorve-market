import { motion } from "framer-motion"
import { Shield } from "lucide-react"
import { usePageTitle } from "../../hooks/usePageTitle"

const subprocessors = [
    {
        name: "Supabase (Pty) Ltd",
        purpose: "Database hosting, authentication, edge functions, file storage",
        location: "United States (AWS us-east-1)",
        dataProcessed: "All customer data, user accounts, conversation data",
    },
    {
        name: "OpenAI, L.L.C.",
        purpose: "AI language model for conversation handling and auto-QA grading",
        location: "United States",
        dataProcessed: "Conversation messages, knowledge base content (sent per-request, not stored)",
    },
    {
        name: "Groq, Inc.",
        purpose: "AI language model for CSAT inference and lightweight classification",
        location: "United States",
        dataProcessed: "Conversation summaries (sent per-request, not stored)",
    },
    {
        name: "Upstash, Inc.",
        purpose: "Redis caching, rate limiting, token budget counters",
        location: "United States",
        dataProcessed: "Tenant configuration cache, rate limit counters (no PII stored)",
    },
    {
        name: "Resend, Inc.",
        purpose: "Transactional email delivery (invitations, lifecycle emails, notifications)",
        location: "United States",
        dataProcessed: "Email addresses, email content",
    },
    {
        name: "Unipile SAS",
        purpose: "Social messaging channel connectivity (WhatsApp, Instagram, LinkedIn)",
        location: "France",
        dataProcessed: "Messages sent/received via connected social channels",
    },
    {
        name: "Dodo Payments Ltd",
        purpose: "Subscription billing and payment processing",
        location: "United States",
        dataProcessed: "Billing email, payment method tokens, subscription status",
    },
    {
        name: "Vercel Inc.",
        purpose: "Frontend application hosting and CDN",
        location: "United States",
        dataProcessed: "IP addresses, browser metadata (standard CDN logs)",
    },
    {
        name: "Cloudflare, Inc.",
        purpose: "DNS, DDoS protection, marketing site hosting",
        location: "Global (edge network)",
        dataProcessed: "IP addresses, HTTP request metadata",
    },
    {
        name: "Functional Software, Inc. (Sentry)",
        purpose: "Application error monitoring and performance tracking",
        location: "United States",
        dataProcessed: "Error stack traces, user IDs (no message content)",
    },
    {
        name: "PostHog, Inc.",
        purpose: "Product analytics and conversion funnel tracking",
        location: "United States (EU hosting available)",
        dataProcessed: "User IDs, feature usage events, page views (no message content)",
    },
]

export function Subprocessors() {
    usePageTitle("Subprocessors")
    return (
        <div className="pt-32 pb-20">
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto px-6 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                        <Shield className="w-4 h-4 text-violet-400" />
                        <span className="text-sm text-violet-400">Legal</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                        Subprocessors
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Enorve uses the following third-party subprocessors to deliver our services.
                        This list is updated when subprocessors are added or removed.
                    </p>
                    <p className="text-gray-500 text-sm mt-4">
                        Last updated: March 18, 2026
                    </p>
                </motion.div>
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-6">
                <div className="space-y-4">
                    {subprocessors.map((sp, i) => (
                        <motion.div
                            key={sp.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                            className="border border-white/10 rounded-xl p-6 bg-white/[0.02]"
                        >
                            <h3 className="text-lg font-semibold text-white mb-1">{sp.name}</h3>
                            <p className="text-gray-400 text-sm mb-3">{sp.purpose}</p>
                            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500">
                                <span>Location: {sp.location}</span>
                                <span>Data: {sp.dataProcessed}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 border-t border-white/10 pt-8">
                    <h2 className="text-xl font-bold text-white mb-4">Notification of Changes</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Enorve will notify customers at least 30 days before adding a new subprocessor
                        that processes personal data. If you have concerns about a new subprocessor,
                        please contact us at{" "}
                        <a href="mailto:privacy@enorve.com" className="text-violet-400 hover:text-violet-300">
                            privacy@enorve.com
                        </a>.
                    </p>
                </div>
            </section>
        </div>
    )
}
