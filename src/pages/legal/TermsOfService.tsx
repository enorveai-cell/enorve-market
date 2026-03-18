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
                        Last updated: March 18, 2026
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
                                and our <a href="/privacy-policy" className="text-violet-400 hover:underline">Privacy Policy</a>.
                                If you do not agree, you may not use our services. These terms constitute a legally binding
                                agreement between you ("Customer", "you") and QuickmaticAI Pvt Ltd, operating as Enorve ("Enorve", "we", "us").
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
                            <p className="leading-relaxed">
                                Enorve provides an AI-powered customer support platform that includes omnichannel inbox management,
                                AI copilot and autonomous resolution, automation workflows, knowledge base, analytics, and integrations.
                                We reserve the right to modify, suspend, or discontinue any feature with reasonable notice.
                                We will use commercially reasonable efforts to notify you of material changes at least 30 days in advance.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Account Registration</h2>
                            <p className="leading-relaxed mb-4">When you create an account, you agree to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Provide accurate and complete registration information</li>
                                <li>Maintain the security of your account credentials and enable MFA when required</li>
                                <li>Accept responsibility for all activities conducted under your account</li>
                                <li>Notify us immediately of any unauthorized access or security breach</li>
                                <li>Not share account credentials or transfer your account without our consent</li>
                            </ul>
                            <p className="leading-relaxed mt-4 text-gray-400">
                                You are responsible for all users you invite to your workspace, including their compliance with these terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use</h2>
                            <p className="leading-relaxed mb-4">You agree not to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Violate any applicable laws, regulations, or third-party rights</li>
                                <li>Infringe on intellectual property rights of any party</li>
                                <li>Transmit malicious code, viruses, or attempt to disrupt the service</li>
                                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                                <li>Use the service for spam, phishing, or unsolicited mass communications</li>
                                <li>Reverse-engineer, decompile, or disassemble any part of the service</li>
                                <li>Use the platform to process data in violation of applicable privacy laws</li>
                                <li>Attempt to circumvent rate limits, usage quotas, or security controls</li>
                                <li>Resell or sublicense access to the platform without our written consent</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">AI-Powered Features</h2>
                            <p className="leading-relaxed mb-4">
                                Our platform uses artificial intelligence to assist with customer support operations. By using these features, you acknowledge that:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>AI-generated responses are automated and may not always be accurate or appropriate</li>
                                <li>You are responsible for reviewing and supervising AI-generated content before it reaches your customers</li>
                                <li>Conversation data is processed by our AI provider (OpenAI) under a zero data retention agreement</li>
                                <li>Your data is never used to train AI models belonging to Enorve or any third party</li>
                                <li>AI confidence thresholds, escalation rules, and human-in-the-loop controls are configurable in your workspace settings</li>
                                <li>We are not liable for actions taken based solely on AI-generated recommendations</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Payment and Billing</h2>
                            <p className="leading-relaxed mb-4">
                                Paid plans are billed in advance on a monthly or annual basis. By subscribing, you authorize us to
                                charge your payment method for all fees associated with your chosen plan.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Prices are listed in your selected currency and exclude applicable taxes</li>
                                <li>Plan changes take effect immediately with prorated billing</li>
                                <li>Failed payments enter a 7-day grace period before access is restricted</li>
                                <li>Refunds are provided at our discretion; contact billing@enorve.com for requests</li>
                                <li>We reserve the right to change pricing with 30 days' notice</li>
                                <li>Usage overages, if enabled on your plan, are billed at the rates displayed in your billing dashboard</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Free Trials</h2>
                            <p className="leading-relaxed">
                                We may offer free trials with limited functionality and usage quotas. Trials are limited to
                                one per organization. At the end of the trial period, you must select a paid plan to continue
                                using the service. We reserve the right to terminate trials that we reasonably believe are
                                being abused or created in bad faith.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Data Ownership</h2>
                            <p className="leading-relaxed mb-4">
                                You retain all rights, title, and interest in your data ("Customer Data"). By using our service, you grant us a limited
                                license to process your data solely to provide the service. Specifically:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>We will not access your data except to provide the service, prevent fraud, or comply with law</li>
                                <li>We do not use your data to train AI models</li>
                                <li>You can export your data at any time via the platform's data export feature</li>
                                <li>Upon account termination, we will delete your data within 90 days unless legally required to retain it</li>
                                <li>We may generate anonymized, aggregated analytics that cannot identify you or your customers</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                            <p className="leading-relaxed">
                                The Enorve platform, including its software, design, documentation, trademarks, and all related
                                intellectual property, remains the exclusive property of QuickmaticAI Pvt Ltd. These terms do not
                                grant you any rights to our intellectual property beyond what is necessary to use the service.
                                Any feedback, suggestions, or ideas you provide may be used by us without obligation or compensation.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Service Level Agreement</h2>
                            <p className="leading-relaxed">
                                We target 99.9% uptime for our platform, measured monthly. Scheduled maintenance windows are excluded.
                                Our current SLA commitments, support response time targets, and incident priority definitions are
                                published at <a href="https://app.enorve.com/sla" className="text-violet-400 hover:underline" target="_blank" rel="noopener noreferrer">app.enorve.com/sla</a>.
                                Enterprise customers may negotiate custom SLA terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                            <p className="leading-relaxed mb-4">
                                To the maximum extent permitted by applicable law:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Enorve shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                                <li>Our total aggregate liability shall not exceed the fees paid by you in the 12 months preceding the claim</li>
                                <li>We are not liable for losses caused by AI-generated responses, third-party service outages, or force majeure events</li>
                                <li>The service is provided "as is" without warranties of any kind, express or implied</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
                            <p className="leading-relaxed">
                                You agree to indemnify and hold Enorve harmless from any claims, damages, or expenses arising from
                                your use of the service, your violation of these terms, or your violation of any third-party rights,
                                including but not limited to intellectual property rights and privacy rights.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                            <p className="leading-relaxed mb-4">
                                Either party may terminate this agreement:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>You may cancel your subscription at any time through your billing settings</li>
                                <li>We may suspend or terminate your account for violation of these terms with written notice</li>
                                <li>We may immediately suspend accounts engaged in abusive, fraudulent, or illegal activity</li>
                                <li>Upon termination, your right to use the service ceases immediately</li>
                                <li>We will retain your data for 90 days post-termination to allow for export, then delete it</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Governing Law & Disputes</h2>
                            <p className="leading-relaxed">
                                These terms are governed by the laws of India. Any disputes arising from or relating to these terms
                                shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days,
                                disputes shall be submitted to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996,
                                with the seat of arbitration in Bengaluru, India. Nothing in this section prevents either party from
                                seeking injunctive relief in a court of competent jurisdiction.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Changes to These Terms</h2>
                            <p className="leading-relaxed">
                                We may update these Terms of Service from time to time. We will notify you of material changes
                                at least 30 days in advance via email or in-app notification. Continued use of the service after
                                such changes constitutes acceptance of the updated terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <p className="mt-2 text-violet-400">legal@enorve.com</p>
                            <p className="mt-4 text-gray-400 text-sm">
                                QuickmaticAI Pvt Ltd, operating as Enorve
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
