import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

// ── Types ────────────────────────────────────────────────────────────────────
interface ChatMsg { from: "customer" | "ai-bad" | "ai-good" | "system"; text: string; delay: number }

// ── Scene data ───────────────────────────────────────────────────────────────
const SCENE_DURATION = {
  intro: 4000,
  problem: 12000,
  solution: 14000,
  builder: 10000,
  simulator: 10000,
  inbox: 8000,
  analytics: 8000,
  outro: 6000,
}

type Scene = keyof typeof SCENE_DURATION
const SCENES: Scene[] = ["intro", "problem", "solution", "builder", "simulator", "inbox", "analytics", "outro"]

const BAD_CHAT: ChatMsg[] = [
  { from: "customer", text: "I want a refund. This product broke after 2 days. This is unacceptable.", delay: 1000 },
  { from: "ai-bad", text: "Hi! Thanks for reaching out 😊 I'd be happy to help with a discount on your next order!", delay: 3500 },
  { from: "customer", text: "ARE YOU SERIOUS? I want a REFUND not a discount", delay: 6000 },
  { from: "ai-bad", text: "I understand your frustration! Here's a 20% discount code: SAVE20", delay: 8500 },
  { from: "system", text: "⚠ POLICY VIOLATED — Refund ignored, discount offered without authorization", delay: 10500 },
]

const GOOD_CHAT: ChatMsg[] = [
  { from: "customer", text: "I want a refund. This product broke after 2 days. This is unacceptable.", delay: 1000 },
  { from: "system", text: "🔒 Refund Protocol — activated", delay: 3000 },
  { from: "ai-good", text: "I'm sorry to hear that. A product breaking after 2 days is not acceptable. Let me process your refund right away. Can you confirm your order number?", delay: 4000 },
  { from: "customer", text: "It's #4521", delay: 7500 },
  { from: "ai-good", text: "Thank you. Your refund of $49.00 has been initiated. You'll see it in 3-5 business days.", delay: 9500 },
  { from: "system", text: "✅ RESOLVED — Protocol followed. Customer satisfied.", delay: 12000 },
]

const FLOW_NODES = [
  { label: "Trigger", sub: "Customer requests refund", color: "#8b5cf6", x: 0, y: 0 },
  { label: "Collect", sub: "Ask for order number", color: "#14b8a6", x: 1, y: 0 },
  { label: "Action", sub: "Look up order details", color: "#22c55e", x: 2, y: 0 },
  { label: "Condition", sub: "Within 30-day policy?", color: "#f59e0b", x: 3, y: 0 },
  { label: "Message", sub: "Process refund", color: "#3b82f6", x: 2, y: 1 },
  { label: "Escalate", sub: "Transfer to manager", color: "#ef4444", x: 3, y: 1 },
]

const INBOX_ITEMS = [
  { name: "Sarah M.", channel: "💬", preview: "When will my order arrive?", time: "2m", status: "ai" },
  { name: "James K.", channel: "📧", preview: "Invoice request for March", time: "5m", status: "ai" },
  { name: "Priya R.", channel: "📸", preview: "Product color doesn't match photo", time: "8m", status: "human" },
  { name: "Tom W.", channel: "💬", preview: "How do I change my subscription?", time: "12m", status: "ai" },
  { name: "Lisa C.", channel: "📧", preview: "Urgent: delivery to wrong address", time: "15m", status: "human" },
]

const METRICS = [
  { label: "Resolution Rate", value: 87, suffix: "%", color: "#22c55e" },
  { label: "Avg Response", value: 12, suffix: "s", color: "#3b82f6" },
  { label: "AI Confidence", value: 94, suffix: "%", color: "#8b5cf6" },
  { label: "QA Score", value: 82, suffix: "/100", color: "#f59e0b" },
]

// ── Animated counter ─────────────────────────────────────────────────────────
function Counter({ to, duration = 1500, suffix = "" }: { to: number; duration?: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      setVal(Math.round(to * progress))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [to, duration])
  return <>{val}{suffix}</>
}

// ── Chat bubble ──────────────────────────────────────────────────────────────
function Bubble({ msg, visible }: { msg: ChatMsg; visible: boolean }) {
  if (!visible) return null
  const isCustomer = msg.from === "customer"
  const isSystem = msg.from === "system"
  const isBad = msg.from === "ai-bad"

  if (isSystem) {
    const isError = msg.text.startsWith("⚠")
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center py-2 px-4 rounded-full text-xs font-semibold mx-auto max-w-[90%] ${
          isError
            ? "bg-red-500/20 text-red-300 border border-red-500/30"
            : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
        }`}
      >
        {msg.text}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isCustomer ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isCustomer
            ? "bg-white/10 text-white/90 rounded-bl-md"
            : isBad
              ? "bg-red-500/20 text-red-200 rounded-br-md border border-red-500/20"
              : "bg-emerald-500/20 text-emerald-200 rounded-br-md border border-emerald-500/20"
        }`}
      >
        {msg.text}
      </div>
    </motion.div>
  )
}

// ── Typing indicator ─────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex gap-1 px-4 py-3">
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-white/30 rounded-full"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}

// ── Main ─────────────────────────────────────────────────────────────────────
export function DemoVideo() {
  const [scene, setScene] = useState<Scene>("intro")
  const [sceneTime, setSceneTime] = useState(0)
  const [started, setStarted] = useState(false)

  const sceneIdx = SCENES.indexOf(scene)

  const advanceScene = useCallback(() => {
    const nextIdx = sceneIdx + 1
    if (nextIdx < SCENES.length) {
      setScene(SCENES[nextIdx])
      setSceneTime(0)
    }
  }, [sceneIdx])

  // Scene timer
  useEffect(() => {
    if (!started) return
    const interval = setInterval(() => setSceneTime(t => t + 100), 100)
    return () => clearInterval(interval)
  }, [started, scene])

  // Auto-advance
  useEffect(() => {
    if (!started) return
    if (sceneTime >= SCENE_DURATION[scene]) {
      advanceScene()
    }
  }, [sceneTime, scene, started, advanceScene])

  // Progress bar
  const totalDuration = Object.values(SCENE_DURATION).reduce((a, b) => a + b, 0)
  const elapsed = SCENES.slice(0, sceneIdx).reduce((a, s) => a + SCENE_DURATION[s], 0) + sceneTime
  const progress = Math.min(elapsed / totalDuration, 1)

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center justify-center overflow-hidden relative" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Progress bar */}
      {started && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
            style={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      )}

      {/* Start screen */}
      {!started && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="text-4xl font-bold tracking-tight">
            <span className="text-emerald-400">enorve</span>
          </div>
          <p className="text-white/40 text-lg">Product Demo</p>
          <button
            onClick={() => setStarted(true)}
            className="flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 rounded-full text-black font-semibold text-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Play Demo
          </button>
          <p className="text-white/20 text-sm">Auto-plays in 72 seconds. Best at 1920×1080.</p>
        </motion.div>
      )}

      {/* Scenes */}
      <AnimatePresence mode="wait">
        {started && (
          <motion.div
            key={scene}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-6xl mx-auto px-8"
          >
            {/* ── INTRO ──────────────────────────────────────────── */}
            {scene === "intro" && (
              <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl sm:text-6xl font-bold text-center leading-tight"
                >
                  Your AI says exactly<br />
                  <span className="text-emerald-400">what you'd say.</span>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-xl text-white/40 mt-4"
                >
                  Every time.
                </motion.p>
              </div>
            )}

            {/* ── PROBLEM ────────────────────────────────────────── */}
            {scene === "problem" && (
              <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs font-semibold uppercase tracking-[4px] text-red-400 mb-2"
                >
                  The Problem
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-white/60 mb-6"
                >
                  Generic AI doesn't follow your rules.
                </motion.h2>

                {/* Bad chat mockup */}
                <div className="w-full max-w-md">
                  <div className="bg-white/[0.03] border border-red-500/20 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                      <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Without Enorve</span>
                    </div>
                    {BAD_CHAT.map((msg, i) => (
                      <Bubble key={i} msg={msg} visible={sceneTime >= msg.delay} />
                    ))}
                    {sceneTime >= 2500 && sceneTime < 3500 && <TypingDots />}
                    {sceneTime >= 7500 && sceneTime < 8500 && <TypingDots />}
                  </div>
                </div>
              </div>
            )}

            {/* ── SOLUTION ───────────────────────────────────────── */}
            {scene === "solution" && (
              <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs font-semibold uppercase tracking-[4px] text-emerald-400 mb-2"
                >
                  With Enorve
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-white/60 mb-6"
                >
                  AI that follows your protocol. Every time.
                </motion.h2>

                <div className="w-full max-w-md">
                  <div className="bg-white/[0.03] border border-emerald-500/20 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">With Enorve</span>
                    </div>
                    {GOOD_CHAT.map((msg, i) => (
                      <Bubble key={i} msg={msg} visible={sceneTime >= msg.delay} />
                    ))}
                    {sceneTime >= 3000 && sceneTime < 4000 && <TypingDots />}
                    {sceneTime >= 8500 && sceneTime < 9500 && <TypingDots />}
                  </div>
                </div>
              </div>
            )}

            {/* ── BUILDER ────────────────────────────────────────── */}
            {scene === "builder" && (
              <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs font-semibold uppercase tracking-[4px] text-violet-400 mb-2"
                >
                  Protocol Engine
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-white/60 mb-8"
                >
                  Build your AI's behavior visually.
                </motion.h2>

                {/* Flow builder mockup */}
                <div className="relative w-full max-w-3xl h-72">
                  {FLOW_NODES.map((node, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.4, duration: 0.4 }}
                      className="absolute bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 w-40"
                      style={{
                        left: `${node.x * 190}px`,
                        top: `${node.y * 140}px`,
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color }} />
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: node.color }}>
                          {node.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-white/50 leading-relaxed">{node.sub}</p>
                    </motion.div>
                  ))}

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
                    {[
                      [140, 24, 190, 24],
                      [330, 24, 380, 24],
                      [520, 24, 570, 24],
                      [480, 70, 480, 140],
                      [620, 70, 620, 140],
                    ].map(([x1, y1, x2, y2], i) => (
                      <motion.line
                        key={i}
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth={2}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.5 + i * 0.3, duration: 0.5 }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
            )}

            {/* ── SIMULATOR ──────────────────────────────────────── */}
            {scene === "simulator" && (
              <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs font-semibold uppercase tracking-[4px] text-amber-400 mb-2"
                >
                  Adversarial Simulator
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-white/60 mb-8"
                >
                  Stress-test before customers see it.
                </motion.h2>

                <div className="w-full max-w-lg">
                  {/* Persona cards */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {["Angry Refunder", "Off-Topic Wanderer", "Policy Pusher"].map((name, i) => (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.3 }}
                        className={`bg-white/[0.04] border rounded-xl px-4 py-3 text-center ${
                          i === 0 ? "border-amber-500/30 bg-amber-500/[0.06]" : "border-white/10"
                        }`}
                      >
                        <div className="text-lg mb-1">{["😤", "🌀", "📋"][i]}</div>
                        <p className="text-xs font-medium text-white/70">{name}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Health score */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5 }}
                    className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center"
                  >
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Health Score</p>
                    <div className="text-5xl font-bold text-amber-400 mb-2">
                      {sceneTime >= 3000 ? <Counter to={72} duration={1200} /> : "—"}
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2 mt-3">
                      <motion.div
                        className="h-full bg-amber-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: sceneTime >= 3000 ? "72%" : "0%" }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-white/30 mt-2">
                      <span>0</span>
                      <span>No breaches · 2/3 goals achieved</span>
                      <span>100</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {/* ── INBOX ──────────────────────────────────────────── */}
            {scene === "inbox" && (
              <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs font-semibold uppercase tracking-[4px] text-sky-400 mb-2"
                >
                  Unified Inbox
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-white/60 mb-6"
                >
                  Every channel. One inbox.
                </motion.h2>

                <div className="w-full max-w-lg space-y-2">
                  {INBOX_ITEMS.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.4 }}
                      className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5"
                    >
                      <span className="text-lg">{item.channel}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white/80">{item.name}</span>
                          <span className="text-[10px] text-white/30">{item.time} ago</span>
                        </div>
                        <p className="text-xs text-white/40 truncate">{item.preview}</p>
                      </div>
                      <div className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        item.status === "ai"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                      }`}>
                        {item.status === "ai" ? "AI handling" : "Agent"}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ── ANALYTICS ──────────────────────────────────────── */}
            {scene === "analytics" && (
              <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs font-semibold uppercase tracking-[4px] text-white/40 mb-2"
                >
                  Real-Time Analytics
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-white/60 mb-8"
                >
                  See what's working. Fix what's not.
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
                  {METRICS.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.3 }}
                      className="bg-white/[0.03] border border-white/10 rounded-xl p-5 text-center"
                    >
                      <p className="text-[10px] text-white/40 uppercase tracking-wider mb-3">{m.label}</p>
                      <div className="text-3xl font-bold" style={{ color: m.color }}>
                        {sceneTime >= 1000 + i * 300 ? <Counter to={m.value} suffix={m.suffix} duration={1000} /> : "—"}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Mini chart mockup */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="w-full max-w-2xl mt-4 bg-white/[0.02] border border-white/10 rounded-xl p-6"
                >
                  <div className="flex items-end gap-1 h-20">
                    {Array.from({ length: 24 }, (_, i) => {
                      const h = 20 + Math.sin(i * 0.5) * 15 + Math.random() * 25
                      return (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t-sm bg-emerald-500/40"
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 2.8 + i * 0.05, duration: 0.3 }}
                        />
                      )
                    })}
                  </div>
                  <div className="flex justify-between text-[10px] text-white/20 mt-2">
                    <span>7 days ago</span>
                    <span>Message volume over time</span>
                    <span>Today</span>
                  </div>
                </motion.div>
              </div>
            )}

            {/* ── OUTRO ──────────────────────────────────────────── */}
            {scene === "outro" && (
              <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl font-bold text-center leading-tight"
                >
                  AI that follows your rules.<br />
                  <span className="text-emerald-400">Not its own.</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="flex flex-col items-center gap-4 mt-6"
                >
                  <a
                    href="https://enorve.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 rounded-full text-black font-semibold text-lg transition-colors"
                  >
                    Get early access →
                  </a>
                  <div className="flex items-center gap-2 text-sm text-white/30">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    47 support teams already waiting
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scene indicator */}
      {started && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
          {SCENES.map((s, i) => (
            <div
              key={s}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === sceneIdx ? "w-6 bg-emerald-400" : i < sceneIdx ? "w-1.5 bg-white/20" : "w-1.5 bg-white/5"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
