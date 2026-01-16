import { motion } from "framer-motion"
import { Shield } from "lucide-react"
import { usePageTitle } from "../../hooks/usePageTitle"

export function PrivacyPolicy() {
    usePageTitle("Privacy Policy")
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
                        Privacy Policy
                    </h1>
                    <p className="text-gray-400">
                        Last updated: January 1, 2026
                    </p>
                </motion.div>
            </section>

            {/* Content */}
            <section className="max-w-3xl mx-auto px-6">
                <div className="prose prose-invert prose-gray max-w-none">
                    <div className="space-y-8 text-gray-300">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                            <p className="leading-relaxed">
                                QuickmaticAI Pvt Ltd ("Enorve", "we", "us", or "our") is committed to protecting your privacy.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                                when you use our service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                            <p className="leading-relaxed mb-4">We collect information you provide directly to us, such as:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Account information (name, email, company)</li>
                                <li>Customer support data you process through our platform</li>
                                <li>Usage data and analytics</li>
                                <li>Communications you send to us</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                            <p className="leading-relaxed mb-4">We use the information we collect to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process transactions and send related information</li>
                                <li>Send technical notices and support messages</li>
                                <li>Respond to your comments and questions</li>
                                <li>Analyze usage and trends to improve user experience</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
                            <p className="leading-relaxed">
                                We retain your information for as long as your account is active or as needed to provide
                                you services. We will also retain and use your information as necessary to comply with
                                legal obligations, resolve disputes, and enforce our agreements.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                            <p className="leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your personal
                                data against unauthorized access, alteration, disclosure, or destruction. All data is
                                encrypted at rest and in transit.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                            <p className="leading-relaxed mb-4">You have the right to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Export your data in a portable format</li>
                                <li>Object to processing of your data</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <p className="mt-2 text-violet-400">privacy@enorve.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
