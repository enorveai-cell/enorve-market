import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const STORAGE_KEY = "enorve_exit_intent_dismissed"

export function ExitIntentModal() {
    const [show, setShow] = useState(false)

    const dismiss = useCallback(() => {
        setShow(false)
        sessionStorage.setItem(STORAGE_KEY, "1")
    }, [])

    useEffect(() => {
        // Don't show if already dismissed this session
        if (sessionStorage.getItem(STORAGE_KEY)) return

        const handleMouseLeave = (e: MouseEvent) => {
            // Only trigger when mouse leaves through the top of the viewport
            if (e.clientY <= 0) {
                setShow(true)
                // Remove listener after triggering once
                document.removeEventListener("mouseleave", handleMouseLeave)
            }
        }

        // Wait 5 seconds before arming the listener
        const timer = setTimeout(() => {
            document.addEventListener("mouseleave", handleMouseLeave)
        }, 5000)

        return () => {
            clearTimeout(timer)
            document.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                    onClick={dismiss}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-[400px] rounded-2xl bg-[#0a0a0f] border border-white/10 p-8 shadow-2xl text-center"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={dismiss}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-5">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                            </span>
                            <span className="text-xs text-emerald-400 font-medium">5 spots this month</span>
                        </span>

                        <h3 className="text-lg font-semibold text-white mb-2">
                            We're accepting 5 design partners.
                        </h3>
                        <p className="text-sm text-gray-400 mb-6">
                            Free setup. No commitment. Shape the product with us.
                        </p>

                        <Link
                            to="/design-partners"
                            onClick={dismiss}
                            className="inline-flex items-center gap-2 bg-white text-black font-medium text-sm h-10 px-6 rounded-full hover:bg-gray-200 transition-all"
                        >
                            Apply in 2 minutes
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
