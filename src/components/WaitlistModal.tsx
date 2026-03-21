import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile"
import { cn } from "../lib/utils"

interface WaitlistModalProps {
    isOpen: boolean
    onClose: () => void
}

type FormStatus = "idle" | "loading" | "success" | "error"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA" // test key fallback

// Disposable email domains — blocks throwaway signups
const DISPOSABLE_DOMAINS = new Set([
    "mailinator.com", "guerrillamail.com", "guerrillamail.de", "grr.la",
    "guerrillamailblock.com", "tempmail.com", "temp-mail.org", "throwaway.email",
    "yopmail.com", "sharklasers.com", "guerrillamail.info", "guerrillamail.net",
    "trashmail.com", "trashmail.me", "trashmail.net", "dispostable.com",
    "maildrop.cc", "mailnesia.com", "tempail.com", "tempr.email",
    "discard.email", "discardmail.com", "fakeinbox.com", "mailcatch.com",
    "mintemail.com", "mohmal.com", "mytemp.email", "harakirimail.com",
    "jetable.org", "nospam.ze.tc", "mailforspam.com", "safetymail.info",
    "10minutemail.com", "10minutemail.net", "20minutemail.com",
    "getnada.com", "emailondeck.com", "mailsac.com", "burnermail.io",
    "inboxkitten.com", "33mail.com",
])

// Rate limit: one submission per 60 seconds (client-side)
const COOLDOWN_KEY = "enorve_waitlist_last"
const COOLDOWN_MS = 60_000

function isOnCooldown(): boolean {
    const last = localStorage.getItem(COOLDOWN_KEY)
    if (!last) return false
    return Date.now() - parseInt(last, 10) < COOLDOWN_MS
}

function setCooldown(): void {
    localStorage.setItem(COOLDOWN_KEY, Date.now().toString())
}

function isDisposableEmail(email: string): boolean {
    const domain = email.split("@")[1]?.toLowerCase()
    return domain ? DISPOSABLE_DOMAINS.has(domain) : false
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<FormStatus>("idle")
    const [errorMessage, setErrorMessage] = useState("")
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const turnstileRef = useRef<TurnstileInstance>(null)

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
            setTimeout(() => inputRef.current?.focus(), 250)
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    // Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        if (isOpen) {
            window.addEventListener("keydown", handleEscape)
            return () => window.removeEventListener("keydown", handleEscape)
        }
    }, [isOpen, onClose])

    const handleClose = useCallback(() => {
        onClose()
        setTimeout(() => {
            setEmail("")
            setStatus("idle")
            setErrorMessage("")
            setTurnstileToken(null)
            turnstileRef.current?.reset()
        }, 300)
    }, [onClose])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Layer 1: Basic validation
        if (!EMAIL_REGEX.test(email)) {
            setErrorMessage("Please enter a valid email address.")
            return
        }

        // Layer 2: Disposable email blocking
        if (isDisposableEmail(email)) {
            setErrorMessage("Please use a work or personal email — disposable addresses aren't accepted.")
            return
        }

        // Layer 3: Client-side rate limiting
        if (isOnCooldown()) {
            setErrorMessage("You've already submitted — check your inbox.")
            return
        }

        // Layer 4: Turnstile verification
        if (!turnstileToken) {
            setErrorMessage("Verifying you're human — please wait a moment.")
            return
        }

        setErrorMessage("")
        setStatus("loading")

        try {
            const formBody = new URLSearchParams()
            formBody.append("email", email)

            const res = await fetch("https://app.loops.so/api/newsletter-form/cmmz2b8ry01ri0i1o3vfeuyfy", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formBody.toString(),
            })
            if (!res.ok && res.status !== 409) {
                throw new Error("Network error")
            }
            setCooldown()
            setStatus("success")
        } catch {
            setStatus("error")
            setErrorMessage("Something went wrong — please try again.")
            turnstileRef.current?.reset()
            setTurnstileToken(null)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                    onClick={handleClose}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative w-full max-w-[440px] rounded-2xl bg-[#0a0a0f] border border-white/10 p-8 md:p-10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 w-8 h-4 flex items-center justify-center text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                            aria-label="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {status === "success" ? (
                            <div className="text-center py-4">
                                <div className="w-12 h-12 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">You're on the list</h3>
                                <p className="text-sm text-gray-400">We'll be in touch as soon as early access opens.</p>
                            </div>
                        ) : (
                            <>
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-5">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                                    </span>
                                    <span className="text-xs text-green-300 font-medium">Early access opening soon</span>
                                </div>

                                <h3 className="text-[22px] font-semibold text-white mb-2">Get early access to Enorve</h3>
                                <p className="text-sm text-gray-400 mb-6">
                                    Be first in line when we launch. E-commerce and SaaS teams get priority access.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            ref={inputRef}
                                            type="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                                if (errorMessage) setErrorMessage("")
                                            }}
                                            placeholder="your@email.com"
                                            className={cn(
                                                "w-full h-11 px-4 rounded-lg bg-white/5 border text-sm text-white placeholder:text-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50",
                                                errorMessage
                                                    ? "border-red-500/50"
                                                    : "border-white/10 focus:border-white/20"
                                            )}
                                        />
                                        {errorMessage && (
                                            <p className="text-xs text-red-400 mt-1.5">{errorMessage}</p>
                                        )}
                                    </div>

                                    {/* Invisible Turnstile — no checkbox, renders nothing visible */}
                                    <Turnstile
                                        ref={turnstileRef}
                                        siteKey={TURNSTILE_SITE_KEY}
                                        options={{ size: "invisible", theme: "dark" }}
                                        onSuccess={setTurnstileToken}
                                        onError={() => setTurnstileToken(null)}
                                        onExpire={() => setTurnstileToken(null)}
                                    />

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full h-11 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-medium transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {status === "loading" ? "Joining..." : "Join the waitlist"}
                                    </button>
                                </form>

                                <p className="text-[11px] text-gray-500 text-center mt-4">
                                    No credit card required. We'll only email you about your access.
                                </p>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
