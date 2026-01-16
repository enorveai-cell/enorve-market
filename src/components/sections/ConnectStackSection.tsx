import { EnorveLogoIcon } from "../ui/Logo"

export function ConnectStackSection() {
    return (
        <section id="integrations" className="py-32 bg-gradient-to-b from-black to-[#080c10] overflow-hidden relative border-b border-white/[0.08]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-2 py-1 text-[10px] text-yellow-400 ring-1 ring-yellow-500/20 uppercase tracking-tight mb-4 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                            <path d="M12 22v-5"></path>
                            <path d="M9 8V2"></path>
                            <path d="M15 8V2"></path>
                            <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path>
                        </svg>
                        Integrations
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                        <span className="bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent pb-2">Connect Enorve with the tools you already use</span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
                        Bring customer context, data, and workflows into one place — without rebuilding your stack.
                    </p>
                </div>

                {/* Icons Row */}
                <div className="relative mx-auto max-w-4xl animate-fade-in-up delay-200">
                    <div className="flex items-center justify-center gap-4 sm:gap-8 relative z-10 flex-wrap">
                        {/* WhatsApp */}
                        <div className="group relative">
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-[#25D366]/50 group-hover:shadow-[0_0_20px_rgba(37,211,102,0.2)] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </span>
                        </div>
                        {/* Instagram */}
                        <div className="group relative">
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-[#E4405F]/50 group-hover:shadow-[0_0_20px_rgba(228,64,95,0.2)] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                                    <defs>
                                        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#FFDC80" />
                                            <stop offset="25%" stopColor="#FCAF45" />
                                            <stop offset="50%" stopColor="#F77737" />
                                            <stop offset="75%" stopColor="#E1306C" />
                                            <stop offset="100%" stopColor="#C13584" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </span>
                        </div>
                        {/* Slack */}
                        <div className="group relative">
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-[#4A154B]/50 group-hover:shadow-[0_0_20px_rgba(74,21,75,0.2)] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#36C5F0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="4" y1="9" x2="20" y2="9" />
                                    <line x1="4" y1="15" x2="20" y2="15" />
                                    <line x1="10" y1="3" x2="8" y2="21" />
                                    <line x1="16" y1="3" x2="14" y2="21" />
                                </svg>
                            </span>
                        </div>
                        {/* Shopify */}
                        <div className="group relative">
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-[#96BF48]/50 group-hover:shadow-[0_0_20px_rgba(150,191,72,0.2)] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#95BF47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <path d="M16 10a4 4 0 0 1-8 0" />
                                </svg>
                            </span>
                        </div>
                        {/* LinkedIn */}
                        <div className="group relative">
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-[#0A66C2]/50 group-hover:shadow-[0_0_20px_rgba(10,102,194,0.2)] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </span>
                        </div>
                        {/* Zapier */}
                        <div className="group relative">
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-[#FF4A00]/50 group-hover:shadow-[0_0_20px_rgba(255,74,0,0.2)] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                </svg>
                            </span>
                        </div>
                        {/* Live Chat */}
                        <div className="group relative">
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(250,207,57,0.2)] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD500">
                                    <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8z" />
                                    <circle cx="8" cy="10" r="1.3" fill="#0F1216" />
                                    <circle cx="12" cy="10" r="1.3" fill="#0F1216" />
                                    <circle cx="16" cy="10" r="1.3" fill="#0F1216" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Animation SVG Lines */}
                    <div className="relative mt-8 h-64 pointer-events-none">
                        <svg viewBox="0 0 900 360" className="absolute inset-0 w-full h-full" fill="none">
                            <defs>
                                <linearGradient id="enorve-line-gradient" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#facf39" stopOpacity="0"></stop>
                                    <stop offset="50%" stopColor="#facf39" stopOpacity="0.8"></stop>
                                    <stop offset="100%" stopColor="#facf39" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            {/* Connecting Lines with Dash Animation */}
                            <path d="M450 300 C 450 200, 300 120, 150 30" stroke="url(#enorve-line-gradient)" strokeWidth="1" strokeLinecap="round" fill="none" style={{ strokeDasharray: 600, strokeDashoffset: 600 }}>
                                <animate attributeName="stroke-dashoffset" values="600;0;600" dur="4s" begin="0s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"></animate>
                            </path>
                            <path d="M450 300 C 450 210, 360 130, 270 30" stroke="url(#enorve-line-gradient)" strokeWidth="1" strokeLinecap="round" fill="none" style={{ strokeDasharray: 520, strokeDashoffset: 520 }}>
                                <animate attributeName="stroke-dashoffset" values="520;0;520" dur="4s" begin="0.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"></animate>
                            </path>
                            <path d="M450 300 C 450 150, 420 80, 390 30" stroke="url(#enorve-line-gradient)" strokeWidth="1" strokeLinecap="round" fill="none" style={{ strokeDasharray: 450, strokeDashoffset: 450 }}>
                                <animate attributeName="stroke-dashoffset" values="450;0;450" dur="4s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"></animate>
                            </path>
                            <path d="M450 300 C 450 150, 480 80, 510 30" stroke="url(#enorve-line-gradient)" strokeWidth="1" strokeLinecap="round" fill="none" style={{ strokeDasharray: 450, strokeDashoffset: 450 }}>
                                <animate attributeName="stroke-dashoffset" values="450;0;450" dur="4s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"></animate>
                            </path>
                            <path d="M450 300 C 450 210, 540 130, 630 30" stroke="url(#enorve-line-gradient)" strokeWidth="1" strokeLinecap="round" fill="none" style={{ strokeDasharray: 520, strokeDashoffset: 520 }}>
                                <animate attributeName="stroke-dashoffset" values="520;0;520" dur="4s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"></animate>
                            </path>
                            <path d="M450 300 C 450 200, 600 120, 750 30" stroke="url(#enorve-line-gradient)" strokeWidth="1" strokeLinecap="round" fill="none" style={{ strokeDasharray: 600, strokeDashoffset: 600 }}>
                                <animate attributeName="stroke-dashoffset" values="600;0;600" dur="4s" begin="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"></animate>
                            </path>
                        </svg>

                        {/* Center Logo Enorve */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                            <span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-black/80 ring-1 ring-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(250,207,57,0.15)] relative z-20">
                                {/* Enorve Logo SVG */}
                                <EnorveLogoIcon className="w-10 h-10 text-yellow-400" />
                                {/* Breathing glow behind logo */}
                                <span className="absolute inset-0 rounded-2xl bg-yellow-500/20 blur-xl animate-pulse"></span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Feature Pills */}
                <div className="mx-auto mt-12 max-w-4xl animate-fade-in-up delay-400">
                    <div className="flex items-center justify-center gap-3 flex-wrap text-sm text-white/70">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                                <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                                <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                                <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                            </svg>
                            <span className="font-medium text-xs">Instant sync</span>
                        </div>
                        <div className="hidden sm:block w-16 h-px border-t border-dashed border-white/20"></div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            <span className="font-medium text-xs">Secure data</span>
                        </div>
                        <div className="hidden sm:block w-16 h-px border-t border-dashed border-white/20"></div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                                <path d="m12 14 4-4"></path>
                                <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                            </svg>
                            <span className="font-medium text-xs">Real-time</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
