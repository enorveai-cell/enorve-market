import { useWaitlist } from "../hooks/useWaitlist"

export function Hero() {
    const { openWaitlist } = useWaitlist()

    return (
        <section className="overflow-hidden z-10 pt-24 md:pt-32 pb-12 md:pb-20 relative">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            <div className="text-center max-w-[1200px] mx-auto px-6 relative">
                {/* Category Label */}
                <div
                    className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-purple-300 mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    <span>AI-Powered Customer Support</span>
                </div>

                {/* Headline - Animated with delay */}
                <h1 className="animate-fade-in-up delay-100 text-3xl md:text-7xl lg:text-[80px] font-medium tracking-tighter leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4 md:mb-6">
                    Your AI handles support.
                    <br />
                    Your team handles exceptions.
                </h1>

                {/* Subheadline */}
                <p className="animate-fade-in-up delay-200 text-sm md:text-2xl font-normal text-gray-300 max-w-3xl mx-auto mb-4 md:mb-6 leading-relaxed px-4 md:px-0">
                    Enorve answers your customers' questions across WhatsApp, Email, and Chat — instantly and accurately.
                    <br className="hidden md:block" />
                    {" "}When things get complex, your team takes over seamlessly.
                </p>

                {/* Early access line */}
                <p className="animate-fade-in-up delay-250 flex items-center justify-center gap-2 text-[13px] md:text-sm text-gray-400 mb-6 md:mb-10">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                    Early access opening soon — join the waitlist for priority access.
                </p>

                {/* CTAs */}
                <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onClick={openWaitlist} className="bg-white text-black font-medium text-base h-12 px-8 rounded-full hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transform hover:scale-105 flex items-center justify-center w-full sm:w-auto cursor-pointer">
                        Join the waitlist
                    </button>
                    <button onClick={openWaitlist} className="group flex items-center justify-center gap-2 text-white font-medium text-base h-12 px-8 rounded-full border border-white/20 hover:bg-white/10 transition-all w-full sm:w-auto cursor-pointer">
                        Get early access
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
