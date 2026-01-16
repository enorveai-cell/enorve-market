import { Link } from "react-router-dom"
import { EnorveLogoFull } from "./ui/Logo"

const footerLinks = {
    product: {
        title: "Product",
        links: [
            { label: "AI Copilot", href: "/product/ai-copilot" },
            { label: "Inbox", href: "/product/inbox" },
            { label: "Automation", href: "/product/automation" },
            { label: "Knowledge Base", href: "/product/knowledge-base" },
            { label: "Analytics", href: "/product/analytics" },
        ]
    },
    solutions: {
        title: "Solutions",
        links: [
            { label: "Customer Support", href: "/solutions/customer-support" },
            { label: "E-commerce", href: "/solutions/ecommerce" },
            { label: "SaaS", href: "/solutions/saas" },
            { label: "Founders", href: "/solutions/founders" },
        ]
    },
    resources: {
        title: "Resources",
        links: [
            { label: "Help Center", href: "https://help.enorve.com", external: true },
            { label: "Blog", href: "https://blog.enorve.com", external: true },
            { label: "Status", href: "https://app.enorve.com/status", external: true },
        ]
    },
    company: {
        title: "Company",
        links: [
            { label: "Security", href: "/security" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Contact Sales", href: "/contact-sales" },
        ]
    }
}

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-12 justify-items-center lg:justify-items-start">
                    {/* Logo & Description */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1">
                        <Link to="/" className="flex items-center mb-4">
                            <EnorveLogoFull className="w-[94px] h-[23px] text-white" />
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            AI-powered customer support platform for modern teams.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">{footerLinks.product.title}</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.links.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">{footerLinks.solutions.title}</h3>
                        <ul className="space-y-3">
                            {footerLinks.solutions.links.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">{footerLinks.resources.title}</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.links.map((link) => (
                                <li key={link.href}>
                                    {'external' in link && link.external ? (
                                        <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">{footerLinks.company.title}</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.links.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Security Capabilities (Safe Language) */}
                    <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>Secure by design</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Encrypted in transit & at rest</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <svg className="w-3.5 h-3.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Privacy-first data handling</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>High availability infrastructure</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a href="https://x.com/enorve_ai" className="text-gray-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
