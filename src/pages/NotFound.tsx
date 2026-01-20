import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Home, ArrowLeft, Search } from "lucide-react"
import { Button } from "../components/ui/Button"
import { usePageTitle } from "../hooks/usePageTitle"

export function NotFound() {
    usePageTitle({
        title: "Page Not Found",
        description: "The page you're looking for doesn't exist. Return to Enorve homepage or explore our customer support solutions."
    })

    return (
        <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-black">
            {/* Ambient Background Glow */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(139,92,246,0.15),rgba(255,255,255,0))] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                {/* 404 Number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-9xl md:text-[200px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 via-purple-400 to-purple-600 leading-none">
                        404
                    </h1>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                    </p>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link to="/">
                        <Button variant="primary" className="group">
                            <Home className="w-4 h-4" />
                            Back to Home
                        </Button>
                    </Link>

                    <Link to="/contact">
                        <Button variant="outline">
                            <Search className="w-4 h-4" />
                            Contact Support
                        </Button>
                    </Link>
                </motion.div>

                {/* Helpful Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 pt-8 border-t border-white/10"
                >
                    <p className="text-sm text-gray-500 mb-4">Popular pages</p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link to="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Pricing
                        </Link>
                        <span className="text-gray-700">•</span>
                        <Link to="/product/ai-copilot" className="text-sm text-gray-400 hover:text-white transition-colors">
                            AI Copilot
                        </Link>
                        <span className="text-gray-700">•</span>
                        <Link to="/security" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Security
                        </Link>
                        <span className="text-gray-700">•</span>
                        <Link to="/solutions/customer-support" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Solutions
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Floating orbs decoration */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
    )
}
