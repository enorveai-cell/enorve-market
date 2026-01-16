import { motion } from "framer-motion"
import { MessageSquare, Mail, Slack, Instagram, Phone, MessagesSquare } from "lucide-react"

const channels = [
    { name: "WhatsApp", icon: MessageSquare, color: "bg-green-500", description: "Business API integration" },
    { name: "Email", icon: Mail, color: "bg-blue-500", description: "IMAP/SMTP support" },
    { name: "Slack", icon: Slack, color: "bg-purple-500", description: "Team notifications" },
    { name: "Instagram", icon: Instagram, color: "bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400", description: "DMs & comments" },
    { name: "Live Chat", icon: MessagesSquare, color: "bg-indigo-500", description: "Website widget" },
    { name: "Phone", icon: Phone, color: "bg-cyan-500", description: "Voice & SMS" },
]

export function InboxSection() {
    return (
        <section id="features" className="py-32 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-radial from-indigo-500/10 to-transparent blur-3xl -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-indigo-400 bg-indigo-500/10 rounded-full mb-6">
                            Unified Inbox
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            <span className="text-gradient">Every channel.</span>
                            <br />
                            <span className="text-white">One inbox.</span>
                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                            Stop switching between tabs. Enorve unifies WhatsApp, Email, Slack,
                            Instagram, and more into a single, intelligent inbox. Your team sees
                            every conversation in one place—with full context.
                        </p>

                        {/* Channel pills */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {channels.map((channel, i) => (
                                <motion.div
                                    key={channel.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default"
                                >
                                    <div className={`w-6 h-6 rounded-full ${channel.color} flex items-center justify-center`}>
                                        <channel.icon className="w-3.5 h-3.5 text-white" />
                                    </div>
                                    <span className="text-sm text-white">{channel.name}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Features list */}
                        <ul className="space-y-4">
                            {[
                                "Real-time message syncing across all channels",
                                "Collision detection—see when teammates are viewing",
                                "Advanced filtering by status, priority, and tags",
                                "Bulk actions for efficient ticket management",
                            ].map((feature, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3 text-gray-300"
                                >
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                    </div>
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-40" />
                        <img
                            src="/inbox-illustration.png"
                            alt="Unified Inbox with multiple channels"
                            className="relative w-full h-auto rounded-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
