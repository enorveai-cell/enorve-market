import { motion } from "framer-motion"
import {
    Shield, Lock, Key, Database, Cloud,
    Activity, Eye, CheckCircle, Zap,
    FileText, Globe
} from "lucide-react"
import { usePageTitle } from "../hooks/usePageTitle"

const securitySections = [
    {
        title: "Access & Authentication",
        icon: Key,
        controls: [
            { text: "Password-based authentication", status: "Enforced", description: "Secure password hashing and validation." },
            { text: "Multi-factor authentication (MFA)", status: "Available", description: "TOTP-based MFA supported for all roles." },
            { text: "Role-based access controls (RBAC)", status: "Enforced", description: "5 granular roles: super admin, admin, manager, agent, viewer." },
            { text: "Tenant-level data isolation", status: "Enforced", description: "Row-level security ensures complete separation of customer data." },
        ]
    },
    {
        title: "Data Protection",
        icon: Database,
        controls: [
            { text: "Encryption in transit (TLS)", status: "Enforced", description: "All data encrypted via HTTPS/TLS." },
            { text: "Encryption at rest", status: "Enforced", description: "Database and backups encrypted at rest." },
            { text: "PII detection in AI responses", status: "Active", description: "AI detects and masks sensitive data like emails, phone numbers, and card details." },
        ]
    },
    {
        title: "AI Safety & Ethics",
        icon: Zap,
        controls: [
            { text: "Usage rate limiting", status: "Enforced", description: "Distributed rate limiting prevents misuse and excessive consumption." },
            { text: "Abuse detection monitoring", status: "Active", description: "Real-time analysis of abnormal usage patterns." },
            { text: "No training on customer data", status: "Guaranteed", description: "Your data is never used to train AI models." },
        ]
    },
    {
        title: "Infrastructure",
        icon: Cloud,
        controls: [
            { text: "High availability architecture", status: "Active", description: "Managed cloud infrastructure designed for reliability." },
            { text: "Automated backups", status: "Active", description: "Regular database backups via managed infrastructure." },
            { text: "Edge-level protection", status: "Active", description: "DDoS mitigation inherited from Cloudflare and infrastructure providers." },
        ]
    }
]

const trustItems = [
    { label: "Encryption at rest & in transit", icon: Lock },
    { label: "Role-based access control", icon: Shield },
    { label: "Multi-factor authentication", icon: Key },
    { label: "Tenant data isolation", icon: Database },
]

export function Security() {
    usePageTitle({
        title: "Security - Enterprise-Grade Protection",
        description: "Enterprise-grade security for your customer data. Encrypted at rest and in transit, role-based access control, and tenant-level data isolation."
    })

    return (
        <div className="pt-32 pb-20 relative overflow-hidden min-h-screen">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-5xl mx-auto px-6 mb-24 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-sm">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-400">Security First Architecture</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 text-white">
                        Security is our<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">foundation</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
                        We prioritize your data's safety with encryption, strict access controls, and continuous monitoring.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="flex items-center gap-6 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            {trustItems.map((item) => (
                                <div key={item.label} className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm font-medium text-gray-300">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Security Grid */}
            <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {securitySections.map((section, idx) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                                    <section.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {section.controls.map((control) => (
                                    <div key={control.text} className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/[0.07] transition-colors border border-transparent hover:border-white/5">
                                        <div>
                                            <div className="font-medium text-white mb-1">{control.text}</div>
                                            <div className="text-sm text-gray-400">{control.description}</div>
                                        </div>
                                        <span className={`
                                            px-2 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider
                                            ${control.status === 'Enforced' || control.status === 'Guaranteed' || control.status === 'Active'
                                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}
                                        `}>
                                            {control.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Governance Section */}
            <section className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <div className="p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
                    <div className="mb-8">
                        <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-400">
                            <FileText className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-semibold text-white mb-4">Governance & Compliance</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We maintain strict internal protocols and follow industry-standard security practices to protect your data.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
                            <h4 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                                <Globe className="w-4 h-4 text-blue-400" />
                                Data Hosting
                            </h4>
                            <p className="text-sm text-gray-400">
                                Customer data is hosted on secure, managed cloud infrastructure with encryption at rest and in transit.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
                            <h4 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                                <Activity className="w-4 h-4 text-purple-400" />
                                Incident Response
                            </h4>
                            <p className="text-sm text-gray-400">
                                Defined incident response procedures with escalation paths and transparent communication for security events.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
