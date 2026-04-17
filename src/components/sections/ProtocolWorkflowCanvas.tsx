import { motion } from "framer-motion"

/**
 * ProtocolWorkflowCanvas — visual demo of Enorve's protocol engine.
 *
 * Shows a 3-node pipeline: customer message → protocol evaluation → action,
 * with a floating collaborator cursor to hint at the multiplayer editor.
 * Scoped to the forest-green + cream brand palette; dot-grid backdrop echoes
 * the ink canvas pattern used by no-code workflow tools.
 *
 * Desktop-first — the canvas uses absolute px coords inside a fixed-width
 * container, scaled down on narrower screens via `transform: scale()`.
 */

const FOREST = "#1FA86F"
const CREAM = "#D4C08A"

export function ProtocolWorkflowCanvas() {
    return (
        <div className="w-full flex justify-center">
            {/* Responsive scaler — at <1100px, shrink the 1100×560 canvas proportionally */}
            <div
                className="origin-top"
                style={{
                    // CSS clamp gives proportional scale-down between 640px and 1100px
                    width: "min(100%, 1100px)",
                    aspectRatio: "1100 / 560",
                }}
            >
                <div
                    className="relative w-[1100px] h-[560px] rounded-3xl border border-white/[0.06] overflow-hidden"
                    style={{
                        backgroundColor: "#0B1812",
                        backgroundImage: "radial-gradient(rgba(238,242,238,0.045) 1px, transparent 0)",
                        backgroundSize: "26px 26px",
                        transformOrigin: "top left",
                        // Scale the 1100px-wide inner canvas to fit the parent's fluid width.
                        // The `w-[1100px]` + this transform gives pixel-perfect node coords
                        // that scale down cleanly on tablet/mobile.
                        transform: "scale(var(--canvas-scale, 1))",
                    }}
                    // Compute scale from rendered width vs. 1100.
                    ref={(el) => {
                        if (!el || typeof ResizeObserver === "undefined") return
                        const ro = new ResizeObserver(() => {
                            const parent = el.parentElement
                            if (!parent) return
                            const scale = Math.min(1, parent.clientWidth / 1100)
                            el.style.setProperty("--canvas-scale", String(scale))
                        })
                        ro.observe(el.parentElement!)
                    }}
                >
                    {/* Ambient forest wash — corners, low opacity */}
                    <div className="absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full pointer-events-none"
                        style={{ background: `${FOREST}14`, filter: "blur(100px)" }} />
                    <div className="absolute -bottom-20 -right-20 w-[320px] h-[320px] rounded-full pointer-events-none"
                        style={{ background: `${FOREST}0D`, filter: "blur(90px)" }} />

                    {/* Top chrome ─────────────────────────────────────────────── */}
                    <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-40">
                        <div className="flex gap-2 items-center">
                            <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center" style={{ color: FOREST }}>
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <div className="flex bg-white/[0.03] border border-white/[0.06] rounded-lg p-0.5">
                                <button className="px-3 py-1 text-[11px] font-medium bg-white/[0.06] text-white rounded-md">Workflow</button>
                                <button className="px-3 py-1 text-[11px] font-medium text-white/45">Edit</button>
                                <button className="px-3 py-1 text-[11px] font-medium text-white/45">Logs</button>
                            </div>
                            <div className="ml-2 flex items-center gap-2 text-[11px] text-white/55">
                                <span className="text-white/35">/</span>
                                <span className="text-white/80">Returns — damaged item</span>
                                <span className="text-[9px] text-white/35 uppercase tracking-wider border border-white/[0.08] rounded px-1.5 py-0.5 ml-1">v3</span>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-1.5">
                                <span className="relative flex w-1.5 h-1.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping" style={{ backgroundColor: FOREST }} />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: FOREST }} />
                                </span>
                                <span className="text-[9px] text-white/70 uppercase tracking-[0.14em] font-medium">Live</span>
                            </div>
                            <button
                                className="flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-lg"
                                style={{ backgroundColor: FOREST, color: "#0B1812" }}
                            >
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                                Publish
                            </button>
                        </div>
                    </div>

                    {/* SVG wires — coordinates are absolute within the 1100×560 canvas ─── */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none z-10"
                        width="1100"
                        height="560"
                        viewBox="0 0 1100 560"
                    >
                        <defs>
                            <filter id="wire-glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        {/* Trigger → Protocol */}
                        <path
                            d="M 340 300 C 410 300, 410 250, 480 250"
                            stroke={FOREST}
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            filter="url(#wire-glow)"
                            opacity="0.85"
                        />
                        {/* Protocol → Action (primary path) */}
                        <path
                            d="M 800 270 C 870 270, 870 210, 940 210"
                            stroke={FOREST}
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            filter="url(#wire-glow)"
                            opacity="0.85"
                        />
                        {/* Protocol → Escalate (dormant branch) */}
                        <path
                            d="M 800 330 C 860 330, 860 430, 720 430"
                            stroke="rgba(238,242,238,0.18)"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="4 5"
                        />

                        {/* Animated token traveling the main path — Trigger → Protocol */}
                        <motion.circle
                            r="3"
                            fill={FOREST}
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: ["0%", "100%"] }}
                            transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.4, delay: 0.4 }}
                            style={{
                                offsetPath: `path('M 340 300 C 410 300, 410 250, 480 250')`,
                                filter: `drop-shadow(0 0 4px ${FOREST})`,
                            }}
                        />
                        {/* Animated token — Protocol → Action */}
                        <motion.circle
                            r="3"
                            fill={FOREST}
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: ["0%", "100%"] }}
                            transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.4, delay: 2.2 }}
                            style={{
                                offsetPath: `path('M 800 270 C 870 270, 870 210, 940 210')`,
                                filter: `drop-shadow(0 0 4px ${FOREST})`,
                            }}
                        />
                    </svg>

                    {/* Node 1: Trigger ─────────────────────────────────────────── */}
                    <div className="absolute z-20" style={{ left: 50, top: 210 }}>
                        <div className="text-[10px] text-white/55 uppercase tracking-[0.14em] mb-2 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-white/35" />
                            Trigger
                        </div>
                        <article className="relative bg-white/[0.035] border border-white/[0.08] rounded-xl w-[280px]"
                            style={{ boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6)" }}>
                            <div className="p-3 border-b border-white/[0.05] flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[11px] font-medium text-white">
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: FOREST }} />
                                    Customer message
                                </div>
                                <span className="text-[9px] text-white/40 uppercase tracking-wider">WhatsApp</span>
                            </div>
                            <div className="p-3">
                                <div className="text-[11px] text-white/80 italic leading-relaxed">
                                    "Hey, I want to return order #4521 — it arrived damaged."
                                </div>
                                <div className="mt-2 text-[9px] text-white/40">
                                    from Priya · 2s ago
                                </div>
                            </div>
                            {/* Output port */}
                            <span
                                className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2"
                                style={{ backgroundColor: FOREST, borderColor: FOREST, boxShadow: `0 0 6px ${FOREST}CC` }}
                            />
                        </article>
                    </div>

                    {/* Node 2: Protocol Engine ─────────────────────────────────── */}
                    <div className="absolute z-20" style={{ left: 480, top: 150 }}>
                        <div className="text-[10px] text-white/55 uppercase tracking-[0.14em] mb-2 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-white/35" />
                            Protocol · Returns
                        </div>
                        <article
                            className="relative bg-white/[0.04] border rounded-xl w-[320px]"
                            style={{
                                borderColor: "rgba(31,168,111,0.22)",
                                boxShadow: `0 0 0 1px rgba(31,168,111,0.05), 0 20px 60px -20px rgba(31,168,111,0.35)`,
                            }}
                        >
                            {/* Input ports */}
                            <span
                                className="absolute -left-1.5 w-3 h-3 rounded-full border-2"
                                style={{ top: 44, backgroundColor: FOREST, borderColor: FOREST, boxShadow: `0 0 6px ${FOREST}CC` }}
                            />
                            <span
                                className="absolute -left-1.5 w-3 h-3 rounded-full border-2"
                                style={{ top: 76, backgroundColor: "#0B1812", borderColor: "rgba(238,242,238,0.25)" }}
                            />

                            <div className="p-3 border-b border-white/[0.05] flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[11px] font-medium text-white">
                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke={FOREST} strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                    Evaluate policy
                                </div>
                                <span className="text-[9px] text-white/40 uppercase tracking-wider">4 steps</span>
                            </div>

                            <div className="p-3 space-y-2">
                                <ProtocolRow label="Verify order in Shopify" value="#4521 · ok" />
                                <ProtocolRow label="Check return window" value="12d of 30d" />
                                <ProtocolRow label="Reason match: damaged" value="policy: refund" />
                                <ProtocolRow label="Confirm with customer" value="auto-reply" />
                            </div>

                            <div className="px-3 py-2 border-t border-white/[0.05] flex items-center justify-between">
                                <span className="text-[9px] text-white/40 uppercase tracking-[0.12em]">Confidence</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-16 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                                        <div className="h-full rounded-full" style={{ width: "94%", backgroundColor: FOREST }} />
                                    </div>
                                    <span className="text-[10px] font-semibold" style={{ color: FOREST }}>94%</span>
                                </div>
                            </div>

                            {/* Output ports */}
                            <span
                                className="absolute -right-1.5 w-3 h-3 rounded-full border-2"
                                style={{ top: 60, backgroundColor: FOREST, borderColor: FOREST, boxShadow: `0 0 6px ${FOREST}CC` }}
                            />
                            <span
                                className="absolute -right-1.5 w-3 h-3 rounded-full border-2"
                                style={{ top: 120, backgroundColor: "#0B1812", borderColor: "rgba(238,242,238,0.25)" }}
                            />

                            {/* Port label for the dormant branch */}
                            <span className="absolute text-[8px] text-white/30 uppercase tracking-wider"
                                style={{ right: 14, top: 112 }}>
                                escalate ↓
                            </span>
                        </article>
                    </div>

                    {/* Node 3: Action ─────────────────────────────────────────── */}
                    <div className="absolute z-20" style={{ left: 940, top: 110 }}>
                        <div className="text-[10px] text-white/55 uppercase tracking-[0.14em] mb-2 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-white/35" />
                            Action
                        </div>
                        <article
                            className="relative bg-white/[0.04] border rounded-xl w-[250px]"
                            style={{
                                borderColor: "rgba(31,168,111,0.22)",
                                boxShadow: `0 0 0 1px rgba(31,168,111,0.05), 0 20px 60px -20px rgba(31,168,111,0.35)`,
                            }}
                        >
                            <span
                                className="absolute -left-1.5 w-3 h-3 rounded-full border-2"
                                style={{ top: 28, backgroundColor: FOREST, borderColor: FOREST, boxShadow: `0 0 6px ${FOREST}CC` }}
                            />
                            <div className="p-3 space-y-2">
                                <ActionRow>Refund issued — $48.00</ActionRow>
                                <ActionRow>Return label emailed</ActionRow>
                                <ActionRow>Customer thanked on WhatsApp</ActionRow>
                            </div>
                            <div className="px-3 py-2 border-t border-white/[0.05] flex items-center justify-between">
                                <span className="text-[9px] text-white/40 uppercase tracking-[0.12em]">Resolved</span>
                                <span className="text-[10px] text-white/70">14s · no human</span>
                            </div>
                        </article>
                    </div>

                    {/* Dormant branch target — "Escalate" ghost card ───────────── */}
                    <div className="absolute z-20" style={{ left: 500, top: 390 }}>
                        <article className="relative bg-white/[0.015] border border-dashed border-white/[0.10] rounded-xl w-[220px] p-3">
                            <div className="flex items-center gap-2 text-[10px] text-white/40">
                                <span className="w-1 h-1 rounded-full bg-white/25" />
                                Escalate to human
                            </div>
                            <div className="mt-1 text-[9px] text-white/25">dormant · used 3× this week</div>
                            <span
                                className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2"
                                style={{ backgroundColor: "#0B1812", borderColor: "rgba(238,242,238,0.15)" }}
                            />
                        </article>
                    </div>

                    {/* Floating collaborator cursor — gentle orbit around the Protocol node */}
                    <motion.div
                        className="absolute pointer-events-none z-30 flex flex-col items-start"
                        initial={{ x: 560, y: 330 }}
                        animate={{
                            x: [560, 640, 700, 620, 560],
                            y: [330, 340, 310, 300, 330],
                        }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <svg className="drop-shadow-lg" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill={CREAM} stroke="#0B1812" strokeWidth="1.5" />
                        </svg>
                        <div
                            className="text-[9px] font-semibold px-1.5 py-0.5 rounded ml-3 -mt-0.5"
                            style={{ backgroundColor: CREAM, color: "#0B1812" }}
                        >
                            Alex — editing
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

/* ─────────────────────────────── sub-components ─────────────────────────────── */

function ProtocolRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center gap-2 text-[11px]">
            <span className="w-3 h-3 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(31,168,111,0.18)" }}>
                <svg className="w-2 h-2" fill="none" stroke={FOREST} strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </span>
            <span className="text-white/80 flex-1 truncate">{label}</span>
            <span className="text-[9px] text-white/45 uppercase tracking-wider shrink-0">{value}</span>
        </div>
    )
}

function ActionRow({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2 text-[11px] text-white/85">
            <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke={FOREST} strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{children}</span>
        </div>
    )
}
