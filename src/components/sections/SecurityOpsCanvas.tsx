import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

/**
 * SecurityOpsCanvas — companion to ProtocolWorkflowCanvas, but built around
 * a different metaphor. Where Protocol shows a node graph with flowing wires,
 * this shows an operations console: a live audit stream (scrolling monospace
 * terminal feed), a tiny residency minimap with a packet traveling between
 * regions, and a compact compliance strip. The texture is deliberately
 * "logs & infra", not "drag-and-drop" — because procurement buyers respond
 * to evidence of running systems, not canvas flair.
 */

const FOREST = "#1FA86F"
const CREAM = "#D4C08A"
const WARN = "#D4C08A" // cream doubles as our "amber/warn" — keeps palette tight

type Severity = "AUDIT" | "INFO" | "WARN"
type LogSeed = {
    severity: Severity
    event: string
    actor: string
    meta: string
}

const LOG_POOL: LogSeed[] = [
    { severity: "AUDIT", event: "auth.session.signed", actor: "arjun@acme.co", meta: "ip 103.12.·.· · tenant 0x4A21" },
    { severity: "INFO", event: "kb.article.embedded", actor: "sys:crawler", meta: "region eu-central-1" },
    { severity: "INFO", event: "message.pii.redacted", actor: "sys:policy", meta: "email, phone" },
    { severity: "AUDIT", event: "role.change", actor: "priya@acme.co", meta: "added admin · tenant 0x4A21" },
    { severity: "INFO", event: "protocol.published", actor: "aalia@acme.co", meta: "returns-v3" },
    { severity: "INFO", event: "webhook.dispatched", actor: "sys:events", meta: "shopify.io · 200 OK" },
    { severity: "AUDIT", event: "data.export", actor: "legal@acme.co", meta: "gdpr.full · signed by DPO" },
    { severity: "INFO", event: "auth.mfa.verified", actor: "manas@acme.co", meta: "yubikey · ok" },
    { severity: "INFO", event: "message.received", actor: "+91 98··43", meta: "whatsapp · queued" },
    { severity: "WARN", event: "rate.throttled", actor: "sys:gateway", meta: "5/min · soft limit" },
    { severity: "AUDIT", event: "subprocessor.approved", actor: "security@acme.co", meta: "resend.com · dpa v3" },
    { severity: "INFO", event: "conversation.resolved", actor: "sys:ai", meta: "14s · zero-touch" },
    { severity: "AUDIT", event: "dpa.countersigned", actor: "counsel@acme.co", meta: "v2 · 4y renewal" },
    { severity: "INFO", event: "kb.article.indexed", actor: "sys:crawler", meta: "8 docs · 2.1s" },
]

const REGIONS = [
    { id: "eu", flag: "🇪🇺", name: "Frankfurt", sub: "eu-central-1", x: 56, y: 38 },
    { id: "us", flag: "🇺🇸", name: "Oregon", sub: "us-west-2", x: 18, y: 36 },
    { id: "in", flag: "🇮🇳", name: "Mumbai", sub: "ap-south-1", x: 74, y: 52 },
] as const

type RegionId = typeof REGIONS[number]["id"]

export function SecurityOpsCanvas() {
    return (
        <div className="w-full flex justify-center">
            <div
                className="origin-top"
                style={{ width: "min(100%, 1100px)", aspectRatio: "1100 / 560" }}
            >
                <div
                    className="relative w-[1100px] h-[560px] rounded-3xl border border-white/[0.06] overflow-hidden"
                    style={{
                        backgroundColor: "#0B1812",
                        backgroundImage: "radial-gradient(rgba(238,242,238,0.045) 1px, transparent 0)",
                        backgroundSize: "26px 26px",
                        transformOrigin: "top left",
                        transform: "scale(var(--canvas-scale, 1))",
                    }}
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
                    {/* Ambient wash */}
                    <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
                        style={{ background: `${FOREST}14`, filter: "blur(110px)" }} />
                    <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full pointer-events-none"
                        style={{ background: `${CREAM}08`, filter: "blur(100px)" }} />

                    {/* Chrome */}
                    <ConsoleChrome />

                    {/* Big left panel — live audit stream */}
                    <div className="absolute z-20" style={{ left: 32, top: 84 }}>
                        <div className="text-[10px] text-white/55 uppercase tracking-[0.14em] mb-2 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-white/35" />
                            Audit stream · live
                        </div>
                        <AuditStream />
                    </div>

                    {/* Right top — residency minimap */}
                    <div className="absolute z-20" style={{ left: 740, top: 84 }}>
                        <div className="text-[10px] text-white/55 uppercase tracking-[0.14em] mb-2 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-white/35" />
                            Residency
                        </div>
                        <ResidencyMap />
                    </div>

                    {/* Right bottom — compliance strip */}
                    <div className="absolute z-20" style={{ left: 740, top: 360 }}>
                        <div className="text-[10px] text-white/55 uppercase tracking-[0.14em] mb-2 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-white/35" />
                            Controls · 96 / 100
                        </div>
                        <ComplianceGrid />
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ─────────────── chrome ─────────────── */

function ConsoleChrome() {
    const [eps, setEps] = useState(12)
    useEffect(() => {
        const iv = setInterval(() => setEps((v) => Math.max(6, Math.min(22, v + (Math.random() > 0.5 ? 1 : -1) * 2))), 1400)
        return () => clearInterval(iv)
    }, [])

    return (
        <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-40">
            <div className="flex gap-2 items-center">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center" style={{ color: FOREST }}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                </div>
                <div className="flex bg-white/[0.03] border border-white/[0.06] rounded-lg p-0.5">
                    <button className="px-3 py-1 text-[11px] font-medium bg-white/[0.06] text-white rounded-md">Audit</button>
                    <button className="px-3 py-1 text-[11px] font-medium text-white/45">Policies</button>
                    <button className="px-3 py-1 text-[11px] font-medium text-white/45">Incidents</button>
                </div>
                <div className="ml-2 flex items-center gap-2 text-[11px] text-white/55">
                    <span className="text-white/35">/</span>
                    <span className="text-white/80">soc.ops</span>
                    <span className="text-[9px] text-white/35 uppercase tracking-wider border border-white/[0.08] rounded px-1.5 py-0.5 ml-1">retention 7y</span>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                {/* Events-per-second ticker with tiny sparkline */}
                <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-1.5">
                    <span className="relative flex w-1.5 h-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping" style={{ backgroundColor: FOREST }} />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: FOREST }} />
                    </span>
                    <span className="text-[9px] text-white/70 uppercase tracking-[0.14em] font-medium tabular-nums">
                        <span className="text-white/90">{eps}</span> eps
                    </span>
                    <svg className="w-8 h-3" viewBox="0 0 32 12" fill="none">
                        <polyline points="0,8 4,5 8,7 12,3 16,6 20,4 24,7 28,2 32,5" stroke={FOREST} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                    </svg>
                </div>
                <button
                    className="flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-lg"
                    style={{ backgroundColor: FOREST, color: "#0B1812" }}
                >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12M6 9l6 6 6-6M4 21h16" />
                    </svg>
                    Export SIEM
                </button>
            </div>
        </div>
    )
}

/* ─────────────── audit stream ─────────────── */

function AuditStream() {
    const [tick, setTick] = useState(0)

    useEffect(() => {
        const iv = setInterval(() => setTick((t) => t + 1), 2600)
        return () => clearInterval(iv)
    }, [])

    const visible = 9
    // Derive the visible window from tick: indices [tick .. tick+visible-1] into LOG_POOL.
    // Using a memoized array keeps entry ids stable so AnimatePresence animates right.
    const entries = useMemo(() => {
        const out: Array<LogSeed & { id: string; time: string }> = []
        const base = Date.now()
        for (let i = 0; i < visible; i++) {
            const seed = LOG_POOL[(tick + i) % LOG_POOL.length]
            // Older-looking timestamps for rows further down.
            const ago = i * 4 + (tick % 3)
            const d = new Date(base - ago * 1000)
            const time = `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}`
            // Stable id per (tick, slot) — but the TOP slot changes each tick, causing
            // enter animations; lower slots shift and get new ids too (existing rows
            // move down). To animate rows as "new at top, old sliding out at bottom",
            // we tie id to the underlying LOG_POOL index + the tick at insertion time.
            const seedIdx = (tick + i) % LOG_POOL.length
            out.push({ ...seed, id: `${seedIdx}-${tick + i}`, time })
        }
        return out
    }, [tick])

    return (
        <article
            className="relative bg-[#0A1512] border border-white/[0.08] rounded-xl w-[684px] overflow-hidden"
            style={{ boxShadow: "0 20px 60px -20px rgba(0,0,0,0.7)" }}
        >
            {/* Filter bar */}
            <div className="px-3 py-2 border-b border-white/[0.06] flex items-center gap-2 bg-white/[0.02]">
                <div className="flex items-center gap-1">
                    <Chip active>All</Chip>
                    <Chip>Auth</Chip>
                    <Chip>Data</Chip>
                    <Chip>Admin</Chip>
                    <Chip>Config</Chip>
                </div>
                <div className="ml-auto flex items-center gap-2 text-[10px] text-white/40">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                    </svg>
                    <span className="font-mono text-white/35">filter events…</span>
                </div>
            </div>

            {/* Log viewport */}
            <div className="relative h-[326px] overflow-hidden font-mono">
                <AnimatePresence initial={false}>
                    {entries.map((e, i) => (
                        <motion.div
                            key={e.id}
                            layout
                            initial={i === 0 ? { opacity: 0, y: -18, backgroundColor: "rgba(31,168,111,0.14)" } : false}
                            animate={{ opacity: 1 - i * 0.04, y: 0, backgroundColor: "rgba(0,0,0,0)" }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                            className="grid items-center px-3 h-[36px] text-[11px] border-b border-white/[0.03]"
                            style={{ gridTemplateColumns: "88px 58px 1fr 1fr auto" }}
                        >
                            <span className="text-white/50 tabular-nums">{e.time}</span>
                            <SeverityBadge severity={e.severity} />
                            <span className="truncate" style={{ color: FOREST }}>{e.event}</span>
                            <span className="text-white/75 truncate" style={{ color: e.actor.startsWith("sys:") ? "rgba(255,255,255,0.4)" : CREAM }}>
                                {e.actor}
                            </span>
                            <span className="text-white/40 truncate pl-3">{e.meta}</span>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {/* Bottom fade — top row pops against the stream */}
                <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none"
                    style={{ background: "linear-gradient(180deg, transparent, #0A1512)" }} />
            </div>

            {/* Footer */}
            <div className="px-3 py-2 border-t border-white/[0.06] flex items-center justify-between text-[10px]">
                <span className="text-white/45">
                    <span className="tabular-nums text-white/75">2,431</span> events today
                </span>
                <span className="text-white/35">
                    retained 7y · streamed to your SIEM
                </span>
            </div>
        </article>
    )
}

function SeverityBadge({ severity }: { severity: Severity }) {
    const color = severity === "AUDIT" ? CREAM : severity === "WARN" ? WARN : "rgba(255,255,255,0.4)"
    return (
        <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.12em]" style={{ color }}>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
            {severity}
        </span>
    )
}

function Chip({ children, active }: { children: React.ReactNode; active?: boolean }) {
    return (
        <span
            className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${active ? "" : "border-white/[0.06] bg-white/[0.02] text-white/55"}`}
            style={active ? { borderColor: `${FOREST}44`, backgroundColor: `${FOREST}1F`, color: FOREST } : undefined}
        >
            {children}
        </span>
    )
}

/* ─────────────── residency minimap ─────────────── */

function ResidencyMap() {
    const [active, setActive] = useState<RegionId>("eu")
    const activeRegion = REGIONS.find((r) => r.id === active)!

    // Auto-cycle every 4.2s so the canvas feels alive without clicks.
    useEffect(() => {
        const iv = setInterval(() => {
            setActive((cur) => {
                const i = REGIONS.findIndex((r) => r.id === cur)
                return REGIONS[(i + 1) % REGIONS.length].id
            })
        }, 4200)
        return () => clearInterval(iv)
    }, [])

    return (
        <article
            className="relative bg-white/[0.04] border rounded-xl w-[328px] overflow-hidden"
            style={{
                borderColor: "rgba(31,168,111,0.22)",
                boxShadow: `0 0 0 1px rgba(31,168,111,0.05), 0 20px 60px -20px rgba(31,168,111,0.35)`,
            }}
        >
            {/* Abstract world backdrop — dot grid with 3 region dots */}
            <div
                className="relative h-[150px] overflow-hidden"
                style={{
                    backgroundColor: "#0B1812",
                    backgroundImage: "radial-gradient(rgba(238,242,238,0.05) 1px, transparent 0)",
                    backgroundSize: "10px 10px",
                }}
            >
                {/* Connecting arcs between all regions — faint */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <filter id="arc-glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="0.4" />
                        </filter>
                    </defs>
                    {/* Three pairwise arcs between regions */}
                    <path d="M 18 36 Q 40 15 56 38" stroke="rgba(238,242,238,0.10)" fill="none" strokeWidth="0.3" />
                    <path d="M 56 38 Q 70 30 74 52" stroke="rgba(238,242,238,0.10)" fill="none" strokeWidth="0.3" />
                    <path d="M 18 36 Q 40 75 74 52" stroke="rgba(238,242,238,0.08)" fill="none" strokeWidth="0.3" strokeDasharray="1 2" />

                    {/* Highlighted arc from a "customer" origin → active region. Use the
                         non-active region closest to active as the origin. */}
                    {REGIONS.filter((r) => r.id !== activeRegion.id).slice(0, 1).map((origin) => {
                        const d = `M ${origin.x} ${origin.y} Q ${(origin.x + activeRegion.x) / 2} ${Math.min(origin.y, activeRegion.y) - 20} ${activeRegion.x} ${activeRegion.y}`
                        return (
                            <g key={origin.id}>
                                <path d={d} stroke={FOREST} fill="none" strokeWidth="0.5" strokeLinecap="round" filter="url(#arc-glow)" />
                                <motion.circle
                                    r="0.8"
                                    fill={FOREST}
                                    initial={{ offsetDistance: "0%" }}
                                    animate={{ offsetDistance: ["0%", "100%"] }}
                                    transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity }}
                                    style={{ offsetPath: `path('${d}')`, filter: `drop-shadow(0 0 1.2px ${FOREST})` }}
                                />
                            </g>
                        )
                    })}
                </svg>

                {/* Region pins */}
                {REGIONS.map((r) => {
                    const isActive = r.id === active
                    return (
                        <div
                            key={r.id}
                            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5"
                            style={{ left: `${r.x}%`, top: `${r.y}%` }}
                        >
                            <span className="relative flex w-2 h-2">
                                {isActive && (
                                    <span
                                        className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping"
                                        style={{ backgroundColor: FOREST }}
                                    />
                                )}
                                <span
                                    className="relative inline-flex rounded-full h-2 w-2"
                                    style={{ backgroundColor: isActive ? FOREST : "rgba(238,242,238,0.25)" }}
                                />
                            </span>
                            <span className="text-[8px] font-mono text-white/45 uppercase tracking-wider">
                                {r.id}
                            </span>
                        </div>
                    )
                })}
            </div>

            {/* Region toggle pills */}
            <div className="p-2 flex gap-1">
                {REGIONS.map((r) => {
                    const isActive = r.id === active
                    return (
                        <button
                            key={r.id}
                            onClick={() => setActive(r.id)}
                            className={`flex-1 flex items-center gap-1.5 px-2 py-1.5 rounded-md border text-[10px] transition-colors ${isActive ? "" : "border-white/[0.05] bg-white/[0.015] text-white/55 hover:bg-white/[0.04]"}`}
                            style={isActive ? {
                                borderColor: `${FOREST}55`,
                                backgroundColor: `${FOREST}1F`,
                                color: FOREST,
                            } : undefined}
                        >
                            <span className="text-xs leading-none">{r.flag}</span>
                            <span className="font-medium">{r.name}</span>
                        </button>
                    )
                })}
            </div>

            <div className="px-3 py-2 border-t border-white/[0.05] flex items-center justify-between text-[10px]">
                <span className="text-white/45 uppercase tracking-[0.12em]">Transit</span>
                <span className="font-mono text-white/75">
                    TLS 1.3 · AES-256
                </span>
            </div>
        </article>
    )
}

/* ─────────────── compliance strip ─────────────── */

const CONTROLS: Array<{ label: string; sub: string; tone: "forest" | "cream" }> = [
    { label: "SOC 2 Type II", sub: "90d active", tone: "forest" },
    { label: "DPA v2", sub: "counter-signed", tone: "forest" },
    { label: "GDPR DSAR", sub: "/api/gdpr", tone: "cream" },
    { label: "SAML / OIDC", sub: "enabled", tone: "forest" },
    { label: "AES-256", sub: "at rest", tone: "forest" },
    { label: "Pen-test", sub: "Q1 clean", tone: "cream" },
]

function ComplianceGrid() {
    return (
        <div className="grid grid-cols-2 gap-2 w-[328px]">
            {CONTROLS.map((c) => {
                const color = c.tone === "forest" ? FOREST : CREAM
                return (
                    <div
                        key={c.label}
                        className="relative flex items-center gap-2 p-2 rounded-lg border bg-white/[0.025]"
                        style={{ borderColor: "rgba(255,255,255,0.06)" }}
                    >
                        <span className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${color}22`, color }}
                        >
                            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <div className="min-w-0 flex-1">
                            <div className="text-[10px] text-white/85 font-medium truncate">{c.label}</div>
                            <div className="text-[8.5px] text-white/40 font-mono truncate">{c.sub}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
