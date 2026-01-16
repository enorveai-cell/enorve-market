import { ArrowRight } from "lucide-react"

export function MidPageCTA() {
    return (
        <section className="py-16 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <div className="relative p-8 md:p-10 rounded-[24px] bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent border border-violet-500/20 text-center overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]" />

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
                            Ready to transform your support?
                        </h2>
                        <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                            Join hundreds of teams using AI to resolve customer issues faster.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a
                                href="https://app.enorve.com/"
                                className="bg-white text-black font-medium text-sm h-11 px-6 rounded-full hover:bg-gray-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                            >
                                Get Started
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
