import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Home, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/Button"
import { usePageTitle } from "../hooks/usePageTitle"

export function NotFound() {
    usePageTitle("Page Not Found")
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(250,207,57,0.15),rgba(255,255,255,0))] pointer-events-none z-0" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center px-6 relative z-10"
            >
                {/* 404 Number */}
                <div className="text-[150px] md:text-[200px] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20">
                    404
                </div>

                {/* Message */}
                <h1 className="text-2xl md:text-3xl font-medium text-white mb-4 -mt-4">
                    Page not found
                </h1>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/">
                        <Button variant="primary" size="lg">
                            <Home className="w-5 h-5 mr-2" />
                            Go home
                        </Button>
                    </Link>
                    <Link to="/contact-sales">
                        <Button variant="secondary" size="lg">
                            Contact support
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}
