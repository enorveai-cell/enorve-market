export function EnterpriseSecuritySection() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Security-First Architecture",
            description: "Built with industry-standard security controls.",
        },
        {
            icon: (
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
            ),
            title: "SAML SSO",
            description: "Enforce MFA at the identity provider level.",
        },
        {
            icon: (
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
            ),
            title: "Data Residency",
            description: "Pin data to US, EU, or APAC regions.",
        },
        {
            icon: (
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
            ),
            title: "PII Redaction",
            description: "Automatic masking of sensitive customer data.",
        },
    ]

    return (
        <section className="bg-[#050505] border-t border-white/5 py-24" id="security">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="animate-fade-in-up text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    Enterprise-grade security
                </h2>
                <p className="animate-fade-in-up delay-100 text-xl text-gray-400 max-w-2xl mb-16">
                    Designed for environments where security is non-negotiable. Full support for complex deployments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`animate-fade-in-up delay-${200 + i * 100} p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors`}
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="font-medium text-white mb-1">{feature.title}</h3>
                            <p className="text-sm text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
