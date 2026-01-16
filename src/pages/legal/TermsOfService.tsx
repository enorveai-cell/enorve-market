import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { usePageTitle } from "../../hooks/usePageTitle"

export function TermsOfService() {
    usePageTitle("Terms of Service")
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
                        <FileText className="w-4 h-4 text-violet-400" />
                        <span className="text-sm text-violet-400">Legal</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                        Terms of Service
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
                            <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                            <p className="leading-relaxed">
                                By accessing or using Enorve's services, you agree to be bound by these Terms of Service
                                and our Privacy Policy. If you do not agree, you may not use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
                            <p className="leading-relaxed">
                                Enorve provides an AI-powered customer support platform that includes inbox management,
                                automation tools, knowledge base, and analytics. We reserve the right to modify or
                                discontinue any feature at any time.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Account Registration</h2>
                            <p className="leading-relaxed mb-4">When you create an account, you agree to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Provide accurate and complete information</li>
                                <li>Maintain the security of your account credentials</li>
                                <li>Accept responsibility for all activities under your account</li>
                                <li>Notify us immediately of any unauthorized access</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use</h2>
                            <p className="leading-relaxed mb-4">You agree not to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe on intellectual property rights</li>
                                <li>Transmit malicious code or interfere with the service</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Use the service for spam or unsolicited communications</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Payment and Billing</h2>
                            <p className="leading-relaxed">
                                Paid plans are billed in advance on a monthly or annual basis. You authorize us to
                                charge your payment method for all fees associated with your account. Refunds are
                                provided at our discretion.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Data Ownership</h2>
                            <p className="leading-relaxed">
                                You retain all rights to your data. We will not access your data except to provide
                                the service, prevent fraud, or comply with law. We do not use your data to train
                                AI models.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                            <p className="leading-relaxed">
                                To the maximum extent permitted by law, Enorve shall not be liable for any indirect,
                                incidental, special, consequential, or punitive damages arising from your use of
                                the service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                            <p className="leading-relaxed">
                                We may terminate or suspend your account at any time for violation of these terms.
                                You may cancel your account at any time. Upon termination, your right to use the
                                service will immediately cease.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <p className="mt-2 text-violet-400">legal@enorve.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
