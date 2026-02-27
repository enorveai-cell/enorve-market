import { motion } from "framer-motion"

const languages = [
    { name: "English", native: "English" },
    { name: "Spanish", native: "Español" },
    { name: "French", native: "Français" },
    { name: "German", native: "Deutsch" },
    { name: "Portuguese", native: "Português" },
    { name: "Chinese", native: "中文" },
    { name: "Japanese", native: "日本語" },
    { name: "Korean", native: "한국어" },
    { name: "Arabic", native: "العربية" },
    { name: "Hindi", native: "हिन्दी" },
    { name: "Russian", native: "Русский" },
    { name: "Italian", native: "Italiano" },
    { name: "Dutch", native: "Nederlands" },
    { name: "Turkish", native: "Türkçe" },
    { name: "Thai", native: "ไทย" },
    { name: "Vietnamese", native: "Tiếng Việt" },
    { name: "Polish", native: "Polski" },
    { name: "Swedish", native: "Svenska" },
    { name: "Indonesian", native: "Bahasa" },
    { name: "Hebrew", native: "עברית" },
    { name: "Czech", native: "Čeština" },
    { name: "Greek", native: "Ελληνικά" },
    { name: "Romanian", native: "Română" },
    { name: "Bengali", native: "বাংলা" },
    { name: "Tamil", native: "தமிழ்" },
    { name: "Malay", native: "Melayu" },
    { name: "Filipino", native: "Filipino" },
    { name: "Ukrainian", native: "Українська" },
    { name: "Finnish", native: "Suomi" },
    { name: "Danish", native: "Dansk" },
]

// Double the array for seamless infinite scroll
const row1 = languages.slice(0, 15)
const row2 = languages.slice(15, 30)

function LanguagePill({ name, native, index }: { name: string; native: string; index: number }) {
    return (
        <div className="flex-shrink-0 flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.06] rounded-full pl-3 pr-4 py-2 hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300 group cursor-default">
            <span className="text-base opacity-70 group-hover:opacity-100 transition-opacity" style={{ animationDelay: `${index * 0.1}s` }}>
                {native}
            </span>
            <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors font-medium">
                {name}
            </span>
        </div>
    )
}

function MarqueeRow({ items, direction = "left", speed = 30 }: { items: typeof row1; direction?: "left" | "right"; speed?: number }) {
    const doubled = [...items, ...items]
    return (
        <div className="relative overflow-hidden w-full mask-gradient">
            <div
                className={`flex gap-3 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {doubled.map((lang, i) => (
                    <LanguagePill key={`${lang.name}-${i}`} name={lang.name} native={lang.native} index={i} />
                ))}
            </div>
        </div>
    )
}

export function LanguagesSection() {
    return (
        <section className="py-24 relative overflow-hidden" id="languages">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06),transparent_70%)]" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Global by Default
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-medium text-white tracking-tighter leading-[1.1] mb-6"
                    >
                        <span className="bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-transparent">100+ languages</span> supported
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
                    >
                        Automatic detection and translation powered by advanced AI. No configuration needed — it just works across every language your customers speak.
                    </motion.p>
                </div>

                {/* Scrolling Language Pills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                >
                    <MarqueeRow items={row1} direction="left" speed={35} />
                    <MarqueeRow items={row2} direction="right" speed={40} />
                </motion.div>

                {/* Bottom Feature Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16"
                >
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 text-center hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-medium mb-2">Auto-Detect</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Instantly identifies the customer's language from the first message</p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 text-center hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
                        <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                        </div>
                        <h3 className="text-white font-medium mb-2">Real-Time Translation</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Responds in the customer's language while agents work in their own</p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 text-center hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-medium mb-2">Zero Configuration</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">No setup required — works out of the box across all channels</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
