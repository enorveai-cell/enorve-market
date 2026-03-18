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
                                We share data with the following categories of service providers, solely to operate our platform:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-gray-400 mb-4">
                                    <thead>
                                        <tr className="border-b border-white/10 text-left">
                                            <th className="py-2 pr-4 text-white font-semibold">Provider</th>
                                            <th className="py-2 pr-4 text-white font-semibold">Purpose</th>
                                            <th className="py-2 text-white font-semibold">Data Shared</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr>
                                            <td className="py-2 pr-4">Supabase</td>
                                            <td className="py-2 pr-4">Database & authentication</td>
                                            <td className="py-2">All platform data (encrypted at rest)</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 pr-4">OpenAI</td>
                                            <td className="py-2 pr-4">AI-powered features</td>
                                            <td className="py-2">Conversation content (zero retention)</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 pr-4">Dodo Payments</td>
                                            <td className="py-2 pr-4">Payment processing</td>
                                            <td className="py-2">Billing details (PCI DSS compliant)</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 pr-4">Resend</td>
                                            <td className="py-2 pr-4">Transactional email delivery</td>
                                            <td className="py-2">Email address, message content</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 pr-4">Sentry</td>
                                            <td className="py-2 pr-4">Error monitoring</td>
                                            <td className="py-2">Error traces, user/tenant IDs (no PII)</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 pr-4">PostHog</td>
                                            <td className="py-2 pr-4">Product analytics</td>
                                            <td className="py-2">Anonymized usage events (consent-based)</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 pr-4">Upstash</td>
                                            <td className="py-2 pr-4">Rate limiting & caching</td>
                                            <td className="py-2">Tenant IDs, request counters</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 pr-4">Cloudflare</td>
                                            <td className="py-2 pr-4">CDN, CAPTCHA, DNS</td>
                                            <td className="py-2">IP address, browser fingerprint</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="leading-relaxed text-gray-400">
                                We do not sell your data to any third party. Data is shared only as necessary to provide our services.
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
                                <li>Account data: deleted within 90 days of account closure upon request</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                            <p className="leading-relaxed">
                                We implement industry-standard technical and organizational measures to protect your personal
                                data against unauthorized access, alteration, disclosure, or destruction. All data is
                                encrypted at rest (AES-256) and in transit (TLS 1.3). Access to production systems is restricted
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
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us at:
                            </p>
                            <p className="mt-2 text-violet-400">privacy@enorve.com</p>
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
