export function PlatformSection() {
    return (
        <section className="overflow-hidden bg-[#050505] w-full z-20 border-t border-white/5 py-24 relative" id="platform">
            {/* Ambient Glow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#facf39]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 animate-fade-in-left">
                        <h2 className="text-2xl md:text-6xl font-semibold text-white tracking-tight leading-[1.05] mb-6">
                            From conversation to resolution — automatically, safely.
                        </h2>

                        <p className="text-lg text-neutral-400 leading-relaxed max-w-lg mb-10">
                            Every customer message in Enorve flows through a governed decision pipeline — combining AI reasoning, business rules, and human escalation to reach the right outcome.
                        </p>

                        <div className="space-y-10">
                            {/* Item 1 */}
                            <div className="flex gap-6 items-start animate-fade-in-up delay-200">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] ring-1 ring-white/5">
                                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-semibold text-white tracking-tight">Live conversation intake</h4>
                                    <p className="text-base text-gray-400 mt-2 leading-relaxed">
                                        Messages from WhatsApp, email, chat, and social arrive in one unified inbox — with full history and context.
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex gap-6 items-start animate-fade-in-up delay-400">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(245,158,11,0.3)] ring-1 ring-white/5">
                                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-semibold text-white tracking-tight">AI decision layer</h4>
                                    <p className="text-base text-gray-400 mt-2 leading-relaxed">
                                        Enorve evaluates intent, confidence, sentiment, and risk in real time to decide whether to respond, clarify, route, or escalate.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex gap-6 items-start animate-fade-in-up delay-600">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] ring-1 ring-white/5">
                                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-semibold text-white tracking-tight">Ticket & resolution workflow</h4>
                                    <p className="text-base text-gray-400 mt-2 leading-relaxed">
                                        When automation isn't enough, conversations become structured tickets — routed, tracked, and resolved without losing context.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual - Animated Flow Diagram with SVG */}
                    <div className="order-1 lg:order-2 relative animate-fade-in-right delay-300">
                        <div className="overflow-hidden aspect-square md:aspect-[4/3] bg-[#050505] border border-white/10 rounded-3xl relative shadow-2xl">
                            {/* Dot Grid Background */}
                            <div className="absolute inset-0 opacity-20 dot-grid" />

                            {/* Active Pill with ping animation */}
                            <div className="absolute top-8 left-8 z-30 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#facf39]/40 bg-[#facf39]/10 backdrop-blur-md shadow-lg shadow-[#facf39]/5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#facf39] opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#facf39]" />
                                </span>
                                <span className="text-[10px] uppercase font-bold text-[#facf39] tracking-wide font-mono">
                                    LIVE CONVERSATION EXECUTION FLOW
                                </span>
                            </div>

                            {/* Flow Diagram with Animated SVG */}
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="relative w-full max-w-[530px] h-[400px] scale-[0.45] sm:scale-[0.75] md:scale-[0.9] lg:scale-100 transition-transform origin-center">

                                    {/* SVG Connectors with Animated Dots */}
                                    <svg className="absolute inset-0 w-full h-full z-0 overflow-visible pointer-events-none">
                                        <defs>
                                            <filter id="glow-connector" x="-50%" y="-50%" width="200%" height="200%">
                                                <feGaussianBlur stdDeviation="2" result="blur" />
                                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                            </filter>
                                        </defs>

                                        {/* Connection Lines */}
                                        <g stroke="#facf39" strokeWidth="1" strokeOpacity="0.4" fill="none">
                                            <path d="M 100 200 L 120 200" />
                                            <path d="M 200 200 L 220 200" />
                                            <path d="M 300 200 L 315 200 L 315 100 L 330 100" />
                                            <path d="M 300 200 L 315 200 L 315 300 L 330 300" />
                                            <path d="M 410 300 L 430 300" />
                                        </g>

                                        {/* Animated Flow Dots */}
                                        <g fill="#facf39" filter="url(#glow-connector)">
                                            <circle r="3">
                                                <animateMotion dur="3s" repeatCount="indefinite" path="M 100 200 L 120 200" calcMode="linear" />
                                            </circle>
                                            <circle r="3">
                                                <animateMotion dur="3s" begin="0.8s" repeatCount="indefinite" path="M 200 200 L 220 200" calcMode="linear" />
                                            </circle>
                                            <circle r="3">
                                                <animateMotion dur="4s" begin="1.5s" repeatCount="indefinite" path="M 300 200 L 315 200 L 315 100 L 330 100" calcMode="linear" />
                                            </circle>
                                            <circle r="3">
                                                <animateMotion dur="4s" begin="1.5s" repeatCount="indefinite" path="M 300 200 L 315 200 L 315 300 L 330 300" calcMode="linear" />
                                            </circle>
                                            <circle r="3">
                                                <animateMotion dur="2s" begin="2.5s" repeatCount="indefinite" path="M 410 300 L 430 300" calcMode="linear" />
                                            </circle>
                                        </g>
                                    </svg>

                                    {/* Node 1: Customer Message */}
                                    <div className="flex flex-col z-10 bg-[#161616]/80 w-20 h-20 border border-[#facf39]/40 rounded-lg absolute top-[160px] left-[20px] shadow-[0_0_30px_-10px_rgba(250,207,57,0.1)] backdrop-blur-sm items-center justify-center hover:border-[#facf39]/80 transition-colors cursor-default">
                                        <span className="text-[10px] font-medium text-neutral-300 text-center mt-0.5">
                                            Customer Message
                                        </span>
                                    </div>

                                    {/* Node 2: Conversation Context */}
                                    <div className="absolute left-[120px] top-[160px] w-20 h-20 bg-[#161616]/80 backdrop-blur-sm border border-[#facf39]/40 rounded-lg flex flex-col items-center justify-center z-10 shadow-[0_0_30px_-10px_rgba(250,207,57,0.1)] gap-1 hover:border-[#facf39]/80 transition-colors cursor-default">
                                        <svg className="w-6 h-6 text-[#facf39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        <span className="text-[10px] leading-tight font-medium text-neutral-300 text-center px-1">
                                            Conversation Context
                                        </span>
                                    </div>

                                    {/* Node 3: Decision Diamond */}
                                    <div className="absolute left-[220px] top-[160px] w-20 h-20 bg-[#161616]/80 backdrop-blur-sm border border-[#facf39]/40 rounded-lg rotate-45 flex items-center justify-center z-10 shadow-[0_0_30px_-10px_rgba(250,207,57,0.1)] hover:border-[#facf39]/80 transition-colors cursor-default">
                                        <div className="-rotate-45 flex flex-col items-center justify-center pt-1">
                                            <span className="text-[10px] font-medium text-neutral-300 text-center mt-0.5">
                                                Can Enorve Resolve?
                                            </span>
                                        </div>
                                    </div>

                                    {/* Node 4: Reply Sent */}
                                    <div className="absolute left-[330px] top-[60px] w-20 h-20 bg-[#161616]/80 backdrop-blur-sm border border-[#facf39]/40 rounded-lg flex flex-col items-center justify-center z-10 shadow-[0_0_30px_-10px_rgba(250,207,57,0.1)] gap-2 hover:border-[#facf39]/80 transition-colors cursor-default">
                                        <svg className="w-5 h-5 text-[#facf39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <span className="text-[10px] leading-tight font-medium text-neutral-300 text-center">
                                            Reply Sent
                                        </span>
                                    </div>

                                    {/* Node 5: Human Escalation */}
                                    <div className="absolute left-[330px] top-[260px] w-20 h-20 bg-[#161616]/80 backdrop-blur-sm border border-[#facf39]/40 rounded-lg flex flex-col items-center justify-center z-10 shadow-[0_0_30px_-10px_rgba(250,207,57,0.1)] gap-1 hover:border-[#facf39]/80 transition-colors cursor-default">
                                        <span className="text-[10px] leading-tight font-medium text-neutral-300 text-center px-1">
                                            Human Escalation
                                        </span>
                                    </div>

                                    {/* Node 6: Ticket Created */}
                                    <div className="absolute left-[430px] top-[260px] w-20 h-20 bg-[#161616]/80 backdrop-blur-sm border border-[#facf39]/40 rounded-lg flex flex-col items-center justify-center z-10 shadow-[0_0_30px_-10px_rgba(250,207,57,0.1)] gap-1 hover:border-[#facf39]/80 transition-colors cursor-default">
                                        <span className="text-[10px] leading-tight font-medium text-neutral-300 text-center">
                                            Ticket Created
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
