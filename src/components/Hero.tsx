export function Hero() {
    const threads = [
        { initials: "NG", name: "Neha Gupta", time: "18m", msg: "Following up on my Instagram DM regarding delayed shipment." },
        { initials: "AP", name: "Ananya Patel", time: "1h", msg: "Received wrong variant. Order ID EN-99821." },
        { initials: "RK", name: "Rahul Khanna", time: "3h", msg: "Payment deducted but order not created. Need urgent help." },
        { initials: "SK", name: "Sonal Kapoor", time: "1d", msg: "Refund approved but not credited yet." },
        { initials: "LM", name: "Lucas Meyer", time: "2d", msg: "Need invoice with VAT details for accounting." },
    ]

    return (
        <section className="overflow-hidden z-10 pt-24 md:pt-32 pb-12 md:pb-20 relative">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            <div className="text-center max-w-[1200px] mx-auto px-6 relative">
                {/* Badge - Animated */}
                <div
                    className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-purple-300 mb-8"
                >
                    <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-semibold border border-purple-500/30">
                        New
                    </span>
                    <span>Enorve Enterprise 2.0</span>
                </div>

                {/* Headline - Animated with delay */}
                <h1 className="animate-fade-in-up delay-100 text-3xl md:text-7xl lg:text-[80px] font-medium tracking-tighter leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4 md:mb-6">
                    Customer support platform for
                    <br />
                    WhatsApp, Email, Chat & Social.
                </h1>

                {/* Subheadline */}
                <p className="animate-fade-in-up delay-200 text-base md:text-2xl font-normal text-gray-300 max-w-xl mx-auto mb-6 md:mb-10 leading-relaxed px-2 md:px-0">
                    Enorve is a unified inbox with AI auto-resolution, where every action
                    is governed, auditable, and escalation-safe. Built for enterprise
                    teams managing high-risk interactions.
                </p>

                {/* CTAs */}
                <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <a href="https://app.enorve.com/" className="bg-white text-black font-medium text-base h-12 px-8 rounded-full hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transform hover:scale-105 flex items-center justify-center w-full sm:w-auto">
                        Get Started
                    </a>
                    <a href="https://help.enorve.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 text-white font-medium text-base h-12 px-8 rounded-full border border-white/20 hover:bg-white/10 transition-all w-full sm:w-auto">
                        Read Documentation
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </a>
                </div>

                {/* Interactive UI Mockup */}
                <div className="animate-fade-in-up delay-500 relative w-full max-w-7xl mx-auto text-white font-sans hidden md:block">
                    {/* Noise overlay */}
                    <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.035]" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect height='120' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E")`
                    }} />

                    {/* Canvas */}
                    <div className="relative h-[760px] rounded-2xl overflow-hidden border border-white/5 shadow-[0_40px_140px_rgba(0,0,0,0.85)]">
                        <div className="flex h-full">
                            {/* Icon Rail */}
                            <aside className="w-16 bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col items-center py-5 gap-6 bg-black/20">
                                <div className="w-9 h-9 rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">E</span>
                                </div>
                            </aside>

                            {/* Inbox Sidebar */}
                            <aside className="w-[340px] bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col">
                                <div className="h-14 px-5 flex items-center justify-between border-b border-white/10">
                                    <span className="text-sm font-medium">Inbox</span>
                                    <span className="text-xs text-white/40">32 open</span>
                                </div>

                                <div className="flex-1 overflow-y-auto px-2 py-2 space-y-[2px]">
                                    {/* Active Thread */}
                                    <div className="animate-fade-in-up delay-600 rounded-xl bg-white/15 border border-white/20 px-3 py-3">
                                        <div className="flex gap-3 items-start">
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 flex items-center justify-center text-xs font-medium">
                                                PS
                                            </div>
                                            <div className="min-w-0 flex-1 text-left">
                                                <div className="flex justify-between">
                                                    <span className="text-sm font-medium truncate">Priya Sharma</span>
                                                    <span className="text-xs text-white/40">5m</span>
                                                </div>
                                                <p className="text-xs text-white/70 line-clamp-2">
                                                    That sounds good. Please share the estimated delivery date.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Other Threads - Staggered animation */}
                                    {threads.map((thread, i) => (
                                        <div key={i} className={`animate-fade-in-up delay-${700 + i * 100} rounded-xl px-3 py-3 hover:bg-white/10 transition-colors cursor-pointer`}>
                                            <div className="flex gap-3">
                                                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs">
                                                    {thread.initials}
                                                </div>
                                                <div className="min-w-0 flex-1 text-left">
                                                    <div className="flex justify-between">
                                                        <span className="text-sm truncate">{thread.name}</span>
                                                        <span className="text-xs text-white/40">{thread.time}</span>
                                                    </div>
                                                    <p className="text-xs text-white/50 line-clamp-2">{thread.msg}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </aside>

                            {/* Chat Main */}
                            <main className="flex-1 flex flex-col bg-transparent">
                                {/* Header */}
                                <header className="h-14 px-6 flex items-center justify-between border-b border-white/10 bg-white/5 backdrop-blur-xl">
                                    <div>
                                        <div className="text-sm font-medium">Priya Sharma</div>
                                        <div className="text-xs text-white/50">WhatsApp • QAHD-2342</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 rounded bg-green-500/15 text-green-300 text-xs">SLA: On track</span>
                                        <span className="px-2 py-1 rounded bg-blue-500/15 text-blue-300 text-xs">FRT: 1m 42s</span>
                                        <span className="px-2 py-1 rounded bg-white/10 text-white/70 text-xs">Normal</span>
                                    </div>
                                </header>

                                {/* Messages - Real staggered animations */}
                                <div className="flex-1 overflow-y-auto py-8 px-10 space-y-6">
                                    {/* Customer Message 1 */}
                                    <div className="animate-fade-in-up delay-300 max-w-[60%] text-left">
                                        <div className="bg-white/10 border border-white/15 rounded-2xl px-5 py-4 text-sm">
                                            Hi, is Cash on Delivery available for Bangalore?
                                        </div>
                                        <div className="text-xs text-white/40 mt-1 ml-2">03:52 PM</div>
                                    </div>

                                    {/* Enorve AI Response */}
                                    <div className="animate-fade-in-up delay-500 max-w-[60%] ml-auto text-right">
                                        <div className="text-sm text-blue-100 text-left bg-gradient-to-br from-[#0F1B33]/80 to-[#0C1426]/80 border border-blue-400/30 rounded-2xl px-5 py-4">
                                            Yes — Cash on Delivery is available for Bangalore orders above ₹999. I can quickly check delivery speed and COD availability for your exact pincode.
                                        </div>
                                        <div className="text-xs text-white/40 mt-1 mr-2">Enorve AI • 03:53 PM</div>
                                    </div>

                                    {/* Customer Message 2 */}
                                    <div className="animate-fade-in-up delay-700 max-w-[60%] text-left">
                                        <div className="bg-white/10 border border-white/15 rounded-2xl px-5 py-4 text-sm">
                                            My pincode is 560102. Do you offer express delivery?
                                        </div>
                                        <div className="text-xs text-white/40 mt-1 ml-2">03:54 PM</div>
                                    </div>

                                    {/* AI Suggestion Ghost */}
                                    <div className="animate-fade-in-up delay-1000 max-w-[60%] ml-auto text-right opacity-70">
                                        <div className="border-dashed text-xs italic text-blue-200 text-left bg-blue-500/5 border border-blue-400/40 rounded-2xl px-5 py-4">
                                            Suggested reply: "✅ Express delivery is available for pincode 560102 📦 Typical delivery: 1–2 business days. Would you like me to confirm the exact ETA before you place the order?"
                                        </div>
                                    </div>

                                    {/* Human Takeover */}
                                    <div className="animate-fade-in-up delay-1200 flex justify-center">
                                        <div className="text-xs text-purple-300 bg-purple-500/15 rounded-full px-4 py-2">
                                            👤 Agent John joined the conversation
                                        </div>
                                    </div>

                                    {/* Human Agent Response */}
                                    <div className="animate-fade-in-up delay-1400 max-w-[60%] ml-auto text-right">
                                        <div className="text-sm text-white text-left bg-white/15 border border-white/20 rounded-2xl px-5 py-4">
                                            Hi Priya 👋 — jumping in to personally confirm this. Express delivery is available and your order would arrive by tomorrow evening if placed before 6 PM today. I'll stay available in case you need help placing the order.
                                        </div>
                                        <div className="text-xs text-white/40 mt-1 mr-2">John • 03:56 PM</div>
                                    </div>
                                </div>

                                {/* Composer */}
                                <footer className="px-6 py-4 border-t border-white/10 bg-white/5 backdrop-blur-xl">
                                    <div className="flex gap-3 items-center">
                                        <span className="px-3 py-1 text-xs rounded bg-purple-500/15 text-purple-300">AI Assist</span>
                                        <input
                                            className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                                            placeholder="Reply as agent or use AI suggestion…"
                                        />
                                        <button className="px-5 py-2 rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-500 transition-colors">
                                            Send
                                        </button>
                                    </div>
                                </footer>
                            </main>
                        </div>
                    </div>

                    {/* Glow */}
                    <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[90%] h-72 bg-purple-500/25 blur-[160px] -z-10" />
                </div>
            </div>
        </section>
    )
}
