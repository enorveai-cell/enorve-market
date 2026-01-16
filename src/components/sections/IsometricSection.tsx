export function IsometricSection() {
    return (
        <div className="lg:px-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-32 z-10 w-full px-6 relative gap-x-20 gap-y-20 items-center py-24">
            {/* Left: Isometric Process Visualization */}
            <div className="aspect-square lg:max-w-none flex w-full max-w-lg mx-auto relative items-center justify-center animate-fade-in-up">
                {/* Isometric Stack Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                    {/* Layer 04 (Bottom) */}
                    <div className="absolute inset-0 z-0 translate-y-24 transition-transform duration-700 hover:translate-y-28 group">
                        <div className="w-full h-full border border-white/10 bg-white/[0.02] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-[#FACC15]/30" />
                        {/* Label Right */}
                        <div className="absolute top-1/2 -right-12 sm:-right-24 -translate-y-1/2 translate-x-4 flex items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500 delay-300">
                            <div className="px-3 py-1.5 rounded-full border border-white/10 bg-[#080808] flex items-center gap-2 shadow-xl">
                                <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">04. EXECUTE</span>
                                <div className="w-8 h-4 bg-neutral-800 rounded-full relative">
                                    <div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-green-500 rounded-full" />
                                </div>
                            </div>
                            <div className="w-12 h-[1px] bg-white/10 origin-left -rotate-[25deg]" />
                        </div>
                    </div>

                    {/* Layer 03 */}
                    <div className="absolute inset-0 z-10 translate-y-12 transition-transform duration-700 hover:translate-y-14 group">
                        <div className="w-full h-full border border-white/10 bg-white/[0.04] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-[#FACC15]/30" />
                        {/* Label Left */}
                        <div className="absolute top-1/2 -left-12 sm:-left-24 -translate-y-1/2 -translate-x-4 flex flex-row-reverse items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500 delay-200">
                            <div className="px-3 py-1.5 rounded-full border border-white/10 bg-[#080808] flex items-center gap-2 shadow-xl">
                                <div className="w-8 h-4 bg-neutral-800 rounded-full relative">
                                    <div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-white/20 rounded-full" />
                                </div>
                                <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">03. RECOVER</span>
                            </div>
                            <div className="w-12 h-[1px] bg-white/10 origin-right rotate-[25deg]" />
                        </div>
                    </div>

                    {/* Layer 02 */}
                    <div className="absolute inset-0 z-20 translate-y-0 transition-transform duration-700 hover:-translate-y-2 group">
                        <div className="w-full h-full border border-white/10 bg-white/[0.06] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-[#FACC15]/30" />
                        {/* Label Right */}
                        <div className="absolute top-1/2 -right-12 sm:-right-24 -translate-y-1/2 translate-x-4 flex items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500 delay-100">
                            <div className="flex gap-2 px-3 shadow-xl items-center">
                                <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">02. CONSTRAIN</span>
                                <div className="w-8 h-4 bg-[#FACC15] rounded-full relative">
                                    <div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-black rounded-full" />
                                </div>
                            </div>
                            <div className="w-12 h-[1px] bg-white/10 origin-left -rotate-[25deg]" />
                        </div>
                    </div>

                    {/* Layer 01 (Top) */}
                    <div className="z-30 -translate-y-12 transition-transform duration-700 hover:-translate-y-16 group absolute top-0 right-0 bottom-0 left-0">
                        <div className="backdrop-blur-[2px] transition-colors group-hover:border-[#FACC15]/50 hover:bg-white/10 w-full h-full border-white/10 border shadow-2xl rotate-45 scale-y-50" />
                        {/* Label Left */}
                        <div className="absolute top-1/2 -left-12 sm:-left-24 -translate-y-1/2 -translate-x-4 flex flex-row-reverse items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500">
                            <div className="px-3 py-1.5 rounded-full border border-white/10 bg-[#080808] flex items-center gap-2 shadow-xl">
                                <div className="w-8 h-4 bg-[#FACC15] rounded-full relative">
                                    <div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-black rounded-full" />
                                </div>
                                <span className="uppercase text-xs font-medium text-neutral-400 tracking-wider">01. INTERPRET</span>
                            </div>
                            <div className="w-12 h-[1px] bg-white/10 origin-right rotate-[25deg]" />
                        </div>
                    </div>

                    {/* Connecting dashed line through center */}
                    <div className="absolute left-1/2 top-[-20%] bottom-[-20%] w-px border-l border-dashed border-white/20 -translate-x-1/2 z-[-1]" />
                </div>
            </div>

            {/* Right: Content Steps */}
            <div className="flex flex-col justify-center animate-fade-in-right delay-400">
                <h2 className="text-4xl lg:text-6xl font-light text-white tracking-tight mb-6 leading-[1.1]">
                    From Algorithm
                    <span className="text-neutral-500"> to Accountability</span>
                </h2>

                <p className="text-lg font-light text-neutral-400 max-w-md mb-16 leading-relaxed">
                    We remove probabilistic ambiguity and replace it with deterministic
                    control layers — ensuring every AI action is bounded, observable,
                    and reviewable.
                </p>

                {/* Steps List */}
                <div className="relative space-y-12 pl-2">
                    {/* Vertical Connector Line */}
                    <div className="bg-gradient-to-b from-[#FACC15] via-white/10 to-transparent opacity-30 w-[1px] absolute top-4 bottom-4 left-[27px]" />

                    {/* Step 1 */}
                    <div className="relative flex gap-8 group cursor-default animate-fade-in-up delay-500">
                        <div className="relative z-10 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-[#FACC15] group-hover:text-[#FACC15] transition-all duration-300">
                                <span className="text-sm font-medium">01</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-white mb-1">Interpret</h4>
                            <p className="text-sm text-neutral-500 leading-relaxed">Parse intent, entities, and sentiment from raw input.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex gap-8 group cursor-default animate-fade-in-up delay-600">
                        <div className="relative z-10 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-[#FACC15] group-hover:text-[#FACC15] transition-all duration-300">
                                <span className="text-sm font-medium">02</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-white mb-1">Constrain</h4>
                            <p className="text-sm text-neutral-500 leading-relaxed">Apply policy rules before any response is generated.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex gap-8 group cursor-default animate-fade-in-up delay-700">
                        <div className="relative z-10 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-[#FACC15] group-hover:text-[#FACC15] transition-all duration-300">
                                <span className="text-sm font-medium">03</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-white mb-1">Recover</h4>
                            <p className="text-sm text-neutral-500 leading-relaxed">Escalate or fallback when confidence is low.</p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex gap-8 group cursor-default animate-fade-in-up delay-800">
                        <div className="relative z-10 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-[#FACC15] group-hover:text-[#FACC15] transition-all duration-300">
                                <span className="text-sm font-medium">04</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-white mb-1">Execute</h4>
                            <p className="text-sm text-neutral-500 leading-relaxed">Deliver the final, verified response to the customer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
