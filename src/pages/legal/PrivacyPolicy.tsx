import { motion } from "framer-motion"
import { Shield } from "lucide-react"
import { usePageTitle } from "../../hooks/usePageTitle"

export function PrivacyPolicy() {
    usePageTitle({
        title: "Privacy Policy | Enorve",
        description: "How Enorve collects, uses, and protects your data. GDPR and CCPA compliant. Data processing, cookies, and your rights explained."
    })
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
                        Last updated: March 18, 2026
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
                                QuickmaticAI Pvt Ltd, operating as Enorve ("Enorve", "we", "us", or "our"), is committed to protecting your privacy.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                                when you use our AI-powered customer support platform and related services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Legal Basis for Processing</h2>
                            <p className="leading-relaxed mb-4">
                                We process your personal data under the following lawful bases (GDPR Article 6):
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li><span className="text-white font-medium">Contract performance</span> &mdash; Processing necessary to deliver the services you have subscribed to, including account management, billing, and platform operation.</li>
                                <li><span className="text-white font-medium">Legitimate interest</span> &mdash; Processing necessary for security monitoring, fraud prevention, service improvement, and error tracking, where our interests do not override your rights.</li>
                                <li><span className="text-white font-medium">Consent</span> &mdash; Processing based on your explicit opt-in, such as analytics cookies and marketing communications. You may withdraw consent at any time.</li>
                                <li><span className="text-white font-medium">Legal obligation</span> &mdash; Processing required to comply with applicable laws, such as tax reporting and regulatory requirements.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                            <p className="leading-relaxed mb-4">We collect the following categories of information:</p>
                            <p className="leading-relaxed font-semibold text-white mb-2">Account Information</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                                <li>Name, email address, and company name</li>
                                <li>Billing and payment information (processed by our payment provider)</li>
                                <li>Role and team membership within your organization</li>
                            </ul>
                            <p className="leading-relaxed font-semibold text-white mb-2">Platform Data</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                                <li>Customer support conversations processed through our platform</li>
                                <li>Knowledge base content you upload or create</li>
                                <li>Configuration, automation rules, and workflow settings</li>
                            </ul>
                            <p className="leading-relaxed font-semibold text-white mb-2">Usage Data</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Browser type, IP address, and device information</li>
                                <li>Feature usage patterns and interaction analytics</li>
                                <li>Performance metrics and error reports</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                            <p className="leading-relaxed mb-4">We use the information we collect to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process transactions and send related billing information</li>
                                <li>Power AI-assisted responses and automated workflows (see AI Processing below)</li>
                                <li>Send technical notices, security alerts, and support messages</li>
                                <li>Analyze usage trends to improve the platform experience</li>
                                <li>Detect, prevent, and address fraud and security issues</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">AI Processing</h2>
                            <p className="leading-relaxed mb-4">
                                Enorve uses artificial intelligence to provide features such as automated responses,
                                conversation summarization, intent detection, and quality scoring. When AI features are enabled:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                                <li>Conversation content is sent to our AI provider (OpenAI) for processing</li>
                                <li>We have a zero data retention agreement with OpenAI &mdash; your data is not stored by them beyond the API request</li>
                                <li>Your data is never used to train third-party AI models</li>
                                <li>AI processing can be disabled per-tenant by contacting support</li>
                                <li>PII detection and redaction is applied before AI processing where configured</li>
                            </ul>
                            <p className="leading-relaxed text-gray-400">
                                By using AI-powered features on the platform, you consent to this processing. Workspace administrators
                                can configure AI behavior, confidence thresholds, and escalation rules in the platform settings.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services & Subprocessors</h2>
                            <p className="leading-relaxed mb-4">
                                We use third-party service providers to operate our platform, including infrastructure hosting,
                                AI processing, payment processing, email delivery, error monitoring, and product analytics.
                                Data is shared with these providers only as necessary to deliver our services.
                            </p>
                            <p className="leading-relaxed mb-4 text-gray-400">
                                A complete list of our subprocessors, including their purpose, location, and the categories of
                                data they process, is available on our{" "}
                                <a href="/subprocessors" className="text-violet-400 hover:underline">Subprocessors page</a>.
                            </p>
                            <p className="leading-relaxed text-gray-400">
                                We do not sell your personal data to any third party. We will notify you at least 30 days before
                                adding a new subprocessor that processes personal data.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Data Processing Agreement</h2>
                            <p className="leading-relaxed">
                                For customers who require a Data Processing Agreement (DPA) under GDPR Article 28 or other applicable
                                data protection laws, we provide a standard DPA upon request. Contact{" "}
                                <a href="mailto:privacy@enorve.com" className="text-violet-400 hover:underline">privacy@enorve.com</a>{" "}
                                to request a copy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Cookies & Tracking</h2>
                            <p className="leading-relaxed mb-4">We use two categories of cookies:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                                <li><span className="text-white font-medium">Essential cookies</span> &mdash; Required for authentication, session management, and platform security. Always active.</li>
                                <li><span className="text-white font-medium">Analytics cookies</span> &mdash; Used via PostHog to understand feature usage. Only set with your explicit consent.</li>
                            </ul>
                            <p className="leading-relaxed text-gray-400">
                                We respect the Do Not Track browser setting. You can withdraw analytics consent at any time by clearing your browser cookies.
                                We do not use marketing or advertising cookies.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
                            <p className="leading-relaxed mb-4">
                                We retain your information for as long as your account is active or as needed to provide
                                you services. Specific retention periods:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Conversation data: configurable per workspace (default 365 days)</li>
                                <li>Resolved conversations: configurable (default 90 days)</li>
                                <li>Audit logs: configurable (default 730 days)</li>
                                <li>Billing records: retained as required by law</li>
                                <li>Account data: deleted within 30 days of account closure upon request</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                            <p className="leading-relaxed">
                                We implement industry-standard technical and organizational measures to protect your personal
                                data against unauthorized access, alteration, disclosure, or destruction. All data is
                                encrypted at rest and in transit. Access to production systems is restricted
                                to authorized personnel with multi-factor authentication. We maintain SOC 2 Type II aligned controls.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
                            <p className="leading-relaxed">
                                Our infrastructure is currently hosted in the United States. If you are accessing our services from
                                outside the US, your data will be transferred to and processed in the US. We ensure appropriate
                                safeguards are in place for such transfers in accordance with applicable data protection laws.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                            <p className="leading-relaxed mb-4">Depending on your jurisdiction, you have the right to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data (right to be forgotten)</li>
                                <li>Export your data in a portable format (JSON)</li>
                                <li>Object to or restrict processing of your data</li>
                                <li>Withdraw consent for analytics tracking</li>
                                <li>Request disabling of AI processing for your workspace</li>
                            </ul>
                            <p className="leading-relaxed mt-4 text-gray-400">
                                To exercise any of these rights, contact us at the email below. We will respond within 30 days.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">California Privacy Rights (CCPA)</h2>
                            <p className="leading-relaxed mb-4">
                                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                                <li>Right to know what personal information is collected and how it is used</li>
                                <li>Right to request deletion of your personal information</li>
                                <li>Right to opt out of the sale of your personal information</li>
                                <li>Right to non-discrimination for exercising your privacy rights</li>
                            </ul>
                            <p className="leading-relaxed text-gray-400">
                                <span className="text-white font-medium">We do not sell your personal information.</span>{" "}
                                We do not share personal information with third parties for their direct marketing purposes.
                                To exercise any CCPA rights, contact{" "}
                                <a href="mailto:privacy@enorve.com" className="text-violet-400 hover:underline">privacy@enorve.com</a>.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
                            <p className="leading-relaxed">
                                Our services are not directed to individuals under 18. We do not knowingly collect personal
                                information from children. If we become aware that we have collected data from a child, we will
                                take steps to delete it promptly.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                            <p className="leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of material changes by
                                posting the updated policy on this page and updating the "Last updated" date. Continued use of
                                our services after such changes constitutes acceptance of the updated policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Data Protection Contact</h2>
                            <p className="leading-relaxed">
                                If you have any questions about this Privacy Policy, wish to exercise your data rights,
                                or need to report a data protection concern, please contact our data protection team:
                            </p>
                            <p className="mt-2 text-violet-400">privacy@enorve.com</p>
                            <p className="mt-4 text-gray-400 text-sm">
                                QuickmaticAI Pvt Ltd, operating as Enorve
                            </p>
                            <p className="mt-1 text-gray-500 text-sm">
                                We will respond to all data protection inquiries within 30 days.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
