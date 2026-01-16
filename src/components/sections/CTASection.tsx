import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { GlowButton, Button } from "../ui/Button"

export function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-500/20 to-transparent blur-3xl" />

            <div className="max-w-4xl mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Headline */}
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        <span className="text-gradient">Ready to transform</span>
                        <br />
                        <span className="text-white">your support?</span>
                    </h2>

                    <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
                        Join hundreds of teams delivering faster, smarter customer support.
                        Choose your plan and start building today
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a href="https://app.enorve.com/">
                            <GlowButton>
                                Get Started
                            </GlowButton>
                        </a>
                        <Link to="/contact-sales">
                            <Button variant="outline" size="lg">
                                Talk to Sales
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Payment required to activate
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Quick setup
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Cancel anytime
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
