import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    Shield, ArrowRight, Lock, Key, Database, Cloud,
    Activity, AlertTriangle, Eye, Mail, CheckCircle, Zap
} from "lucide-react"
import { Button } from "../components/ui/Button"
import { usePageTitle } from "../hooks/usePageTitle"

const securityAreas = [
    {
        title: "Access & Authentication",
        icon: Key,
        items: [
            "Password-based user authentication",
            "Multi-factor authentication (MFA) supported for privileged roles",
            "Role-based access controls",
            "Logical tenant-level data isolation",
            "Authorization checks enforced server-side for protected operations",
            "Client-side state is not relied upon for access control or billing decisions",
            "Access decisions are evaluated based on server-validated identity and permissions"
        ]
    },
    {
        title: "Data Protection",
        icon: Database,
        items: [
            "Encryption in transit using modern TLS standards",
            "Encryption at rest for stored data, as supported by underlying infrastructure providers",
            "Logical separation of customer data",
            "Data handled in accordance with defined internal classification and access guidelines"
        ]
    },
    {
        title: "AI Usage & Abuse Controls",
        icon: Zap,
        items: [
            "AI features are subject to server-side usage limits and plan-level enforcement",
            "Controls are in place to reduce the risk of automated misuse and excessive consumption",
            "Monitoring is applied to identify abnormal or unintended usage patterns",
            "These controls are designed to support fair usage and operational stability"
        ]
    },
    {
        title: "Infrastructure & Reliability",
        icon: Cloud,
        items: [
            "Cloud-hosted infrastructure with redundancy and fault-tolerance measures",
            "Ongoing monitoring for service availability and operational anomalies",
            "Regular data backups with defined recovery objectives",
            "Planned maintenance activities communicated in advance where applicable"
        ]
    },
    {
        title: "Incident Response",
        icon: AlertTriangle,
        items: [
            "Documented procedures for handling security incidents",
            "Investigation and response processes aligned with severity and impact",
            "Notification provided for confirmed incidents in accordance with applicable obligations",
            "Internal controls may be used to restrict access or disable specific functionality when required to mitigate risk"
        ]
    }
]

export function Security() {
    usePageTitle("Security - Enterprise-Grade Protection")
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-4xl mx-auto px-6 mb-20 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-400">Security at Enorve</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Built with security<br />from day one
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Protecting customer data is a core design consideration at Enorve. We apply industry-standard security practices designed to safeguard information, support system reliability, and promote responsible access to the platform.
                    </p>
                </motion.div>
            </section>

            {/* Security Areas */}
            <section className="max-w-4xl mx-auto px-6 mb-20 relative z-10">
                <div className="space-y-8">
                    {securityAreas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-[24px] bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <area.icon className="w-5 h-5 text-emerald-400" />
                                </div>
                                <h2 className="text-lg font-medium text-white">{area.title}</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-2">
                                {area.items.map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-500/60" />
                                        <span className="text-sm text-gray-400">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Additional Info */}
            <section className="max-w-4xl mx-auto px-6 mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-[24px] bg-[#0C0E12] border border-white/5 space-y-6"
                >
                    <div className="flex items-start gap-4">
                        <Activity className="w-5 h-5 text-emerald-400 mt-1" />
                        <div>
                            <h3 className="text-white font-medium mb-1">System Status</h3>
                            <p className="text-sm text-gray-400">
                                Current service availability and incident updates are published on our public{" "}
                                <a href="https://status.enorve.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                                    Status page
                                </a>.
                            </p>
                        </div>
                    </div>

                    <div className="h-px bg-white/5" />

                    <div className="flex items-start gap-4">
                        <Eye className="w-5 h-5 text-emerald-400 mt-1" />
                        <div>
                            <h3 className="text-white font-medium mb-1">Privacy & Compliance</h3>
                            <p className="text-sm text-gray-400 mb-2">
                                Enorve processes personal data in accordance with its Privacy Policy and applicable data protection requirements.
                            </p>
                            <p className="text-sm text-gray-400">
                                Security controls are designed to align with commonly adopted SaaS and enterprise security practices, including principles reflected in SOC 2 Trust Services Criteria.{" "}
                                <Link to="/privacy-policy" className="text-emerald-400 hover:underline">
                                    Privacy Policy →
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="h-px bg-white/5" />

                    <div className="flex items-start gap-4">
                        <Mail className="w-5 h-5 text-amber-400 mt-1" />
                        <div>
                            <h3 className="text-white font-medium mb-1">Responsible Disclosure</h3>
                            <p className="text-sm text-gray-400">
                                If you believe you have identified a security vulnerability, please report it responsibly to{" "}
                                <a href="mailto:security@enorve.com" className="text-amber-400 hover:underline">
                                    security@enorve.com
                                </a>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="max-w-3xl mx-auto px-6 pb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative p-10 rounded-[32px] bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_70%)]" />

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
                            Questions about Security?
                        </h2>
                        <p className="text-gray-400 mb-6 max-w-md mx-auto">
                            For security-related inquiries, contact{" "}
                            <a href="mailto:security@enorve.com" className="text-emerald-400 hover:underline">
                                security@enorve.com
                            </a>
                        </p>
                        <Link to="/contact-sales">
                            <Button variant="primary" size="lg">
                                Contact us
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
