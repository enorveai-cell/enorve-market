import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils"
import { Menu, X, ChevronDown, Bot, Inbox, Zap, BookOpen, BarChart3, Headphones, ShoppingCart, Building2, Rocket } from "lucide-react"
import { Button } from "./ui/Button"
import { EnorveLogoFull } from "./ui/Logo"

const productLinks = [
    { label: "AI Copilot", href: "/product/ai-copilot", icon: Bot, description: "AI assist & auto-resolution" },
    { label: "Inbox", href: "/product/inbox", icon: Inbox, description: "Unified multi-channel inbox" },
    { label: "Automation", href: "/product/automation", icon: Zap, description: "Workflows & routing" },
    { label: "Knowledge Base", href: "/product/knowledge-base", icon: BookOpen, description: "Knowledge management" },
    { label: "Analytics", href: "/product/analytics", icon: BarChart3, description: "Performance insights" },
]

const solutionLinks = [
    { label: "Customer Support", href: "/solutions/customer-support", icon: Headphones, description: "For support teams" },
    { label: "E-commerce", href: "/solutions/ecommerce", icon: ShoppingCart, description: "For online stores" },
    { label: "SaaS", href: "/solutions/saas", icon: Building2, description: "For B2B companies" },
    { label: "Founders", href: "/solutions/founders", icon: Rocket, description: "For small teams" },
]

const resourceLinks = [
    { label: "Help Center", href: "https://help.enorve.com", external: true },
    { label: "Blog", href: "https://blog.enorve.com", external: true },
]


export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleMouseEnter = (menu: string) => {
        setActiveDropdown(menu)
    }

    const handleMouseLeave = () => {
        setActiveDropdown(null)
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10"
                        : "bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="h-16 flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <EnorveLogoFull className="w-[94px] h-[23px] text-white" />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {/* Product Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('product')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-default"
                                >
                                    Product
                                    <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === 'product' && "rotate-180")} />
                                </button>
                                <AnimatePresence>
                                    {activeDropdown === 'product' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-2 w-80 p-4 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/10 shadow-2xl"
                                        >
                                            <div className="grid gap-1">
                                                {productLinks.map((link) => (
                                                    <Link
                                                        key={link.href}
                                                        to={link.href}
                                                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                                                    >
                                                        <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                                                            <link.icon className="w-4 h-4 text-violet-400" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors">{link.label}</div>
                                                            <div className="text-xs text-gray-500">{link.description}</div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Solutions Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('solutions')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-default"
                                >
                                    Solutions
                                    <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === 'solutions' && "rotate-180")} />
                                </button>
                                <AnimatePresence>
                                    {activeDropdown === 'solutions' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-2 w-72 p-4 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/10 shadow-2xl"
                                        >
                                            <div className="grid gap-1">
                                                {solutionLinks.map((link) => (
                                                    <Link
                                                        key={link.href}
                                                        to={link.href}
                                                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                                                    >
                                                        <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                                                            <link.icon className="w-4 h-4 text-violet-400" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors">{link.label}</div>
                                                            <div className="text-xs text-gray-500">{link.description}</div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Pricing */}
                            <Link
                                to="/pricing"
                                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                            >
                                Pricing
                            </Link>

                            {/* Resources Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('resources')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-default"
                                >
                                    Resources
                                    <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === 'resources' && "rotate-180")} />
                                </button>
                                <AnimatePresence>
                                    {activeDropdown === 'resources' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-2 w-48 p-3 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/10 shadow-2xl"
                                        >
                                            <div className="grid gap-1">
                                                {resourceLinks.map((link) => (
                                                    <a
                                                        key={link.href}
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                    >
                                                        {link.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                        </div>

                        {/* Desktop CTAs */}
                        <div className="hidden md:flex items-center gap-3">
                            <Link
                                to="/contact-sales"
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-4 py-2"
                            >
                                Talk to sales
                            </Link>
                            <a
                                href="https://app.enorve.com/"
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-4 py-2"
                            >
                                Login
                            </a>
                            <a href="https://app.enorve.com/">
                                <Button variant="primary" size="sm">
                                    Get Started
                                </Button>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-x-0 top-16 z-40 md:hidden"
                    >
                        <div className="bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 max-h-[80vh] overflow-y-auto">
                            <div className="flex flex-col gap-2">
                                {/* Product Section */}
                                <div className="border-b border-white/5 pb-3">
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-1">Product</div>
                                    <div className="grid grid-cols-1 gap-1">
                                        {productLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                to={link.href}
                                                className="flex items-center gap-3 py-2 px-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <link.icon className="w-4 h-4 text-violet-400" />
                                                <span className="text-sm font-medium">{link.label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Solutions Section */}
                                <div className="border-b border-white/5 pb-3 pt-2">
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-1">Solutions</div>
                                    <div className="grid grid-cols-1 gap-1">
                                        {solutionLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                to={link.href}
                                                className="flex items-center gap-3 py-2 px-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <link.icon className="w-4 h-4 text-emerald-400" />
                                                <span className="text-sm font-medium">{link.label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Links */}
                                <div className="pt-2 space-y-2">
                                    <Link to="/pricing" className="block py-2 px-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                                    <a href="https://help.enorve.com" target="_blank" rel="noopener noreferrer" className="block py-2 px-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>Help Center</a>
                                    <Link to="/contact-sales" className="block py-2 px-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>Talk to sales</Link>
                                </div>

                                {/* Auth Section */}
                                <div className="pt-4 mt-2 border-t border-white/10 space-y-3">
                                    <a href="https://app.enorve.com/" className="block py-2 px-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-center">Login</a>
                                    <a href="https://app.enorve.com/" className="block">
                                        <Button variant="primary" size="md" className="w-full">
                                            Get Started
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
