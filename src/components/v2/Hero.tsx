import { motion } from "framer-motion"
import { homeV2 } from "../../content/home.v2"
import { cardReveal, fadeUp, staggerContainer } from "./motion"

/**
 * v2 Hero — split layout.
 *  • Left: eyebrow → headline → subhead → prelaunch chip → dual CTA → social proof
 *  • Right: stylized product UI card showing "AI resolving a conversation" moment
 *
 * The right-side card is CSS-drawn; swap in a real screenshot/loop when available.
 *
 * Motion: above-fold, so entrance runs on mount (not whileInView). Left column
 * uses a staggerContainer so each block fades up in rhythm; right card reveals
 * with a softer scale-in so it feels like the UI is "landing".
 */
export function V2Hero() {
    const { eyebrow, headline, subhead, prelaunchChip, socialProof, ctaPrimary, ctaSecondary } =
        homeV2.hero

    return (
        <section className="v2-surface-hero">
            <div
                className="v2-container v2-section"
                style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
                    gap: "clamp(32px, 5vw, 80px)",
                    alignItems: "center",
                    paddingTop: "clamp(64px, 8vw, 120px)",
                    paddingBottom: "clamp(64px, 8vw, 120px)",
                }}
            >
                {/* Left column */}
                <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                    <motion.span
                        variants={fadeUp}
                        className="v2-eyebrow"
                        style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                    >
                        <span className="v2-dot" />
                        {eyebrow}
                    </motion.span>

                    <motion.h1
                        variants={fadeUp}
                        style={{
                            marginTop: 24,
                            fontSize: "var(--type-hero)",
                            lineHeight: "var(--leading-tight)",
                            letterSpacing: "var(--tracking-display)",
                            fontWeight: 500,
                        }}
                    >
                        {headline.split(". ").map((part, i, arr) => {
                            const isLast = i === arr.length - 1
                            return (
                                <span key={i} style={{ display: "block" }}>
                                    {part}
                                    {!isLast && "."}
                                </span>
                            )
                        })}
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        style={{
                            marginTop: 24,
                            maxWidth: 520,
                            fontSize: 18,
                            lineHeight: 1.55,
                            color: "var(--brand-text-on-dark-muted)",
                        }}
                    >
                        {subhead}
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        style={{
                            marginTop: 28,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            fontSize: 14,
                            color: "var(--brand-text-on-dark-muted)",
                        }}
                    >
                        <span className="v2-dot" />
                        {prelaunchChip}
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        style={{
                            marginTop: 24,
                            display: "flex",
                            gap: 12,
                            flexWrap: "wrap",
                        }}
                    >
                        <a href={ctaPrimary.href} className="v2-btn v2-btn-primary">
                            {ctaPrimary.label}
                        </a>
                        <a href={ctaSecondary.href} className="v2-btn v2-btn-ghost">
                            {ctaSecondary.label} →
                        </a>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        style={{
                            marginTop: 20,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            fontSize: 13,
                            color: "var(--brand-primary-soft)",
                        }}
                    >
                        <span className="v2-dot" />
                        {socialProof}
                    </motion.div>
                </motion.div>

                {/* Right column — product UI preview card */}
                <motion.div variants={cardReveal} initial="hidden" animate="visible">
                    <HeroProductCard />
                </motion.div>
            </div>
        </section>
    )
}

/**
 * Stylized product card showing a conversation → AI reasoning → resolution.
 * Pure CSS/JSX, no real screenshot needed for first cut.
 * When a real product screenshot is available, swap this for an <img>.
 */
function HeroProductCard() {
    return (
        <div
            className="v2-card-dark"
            style={{
                padding: 20,
                boxShadow: "var(--shadow-lift)",
            }}
        >
            {/* Window chrome */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    paddingBottom: 14,
                    borderBottom: "1px solid var(--brand-line-on-dark)",
                }}
            >
                <WindowDot color="#E55C4E" />
                <WindowDot color="#D4AF37" />
                <WindowDot color="var(--brand-primary-soft)" />
                <span
                    style={{
                        marginLeft: 10,
                        fontSize: 12,
                        color: "var(--brand-text-on-dark-muted)",
                        fontFamily: "var(--font-body)",
                    }}
                >
                    enorve • inbox
                </span>
            </div>

            {/* Customer message */}
            <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
                <Avatar initials="S" tint="warm" />
                <div style={{ flex: 1 }}>
                    <div
                        style={{
                            fontSize: 12,
                            color: "var(--brand-text-on-dark-muted)",
                            marginBottom: 4,
                        }}
                    >
                        Sarah • WhatsApp
                    </div>
                    <div
                        style={{
                            fontSize: 14,
                            color: "var(--brand-text-on-dark)",
                            lineHeight: 1.45,
                            background: "rgba(238, 242, 238, 0.04)",
                            padding: "10px 14px",
                            borderRadius: 14,
                            borderTopLeftRadius: 4,
                            border: "1px solid var(--brand-line-on-dark)",
                        }}
                    >
                        Hey, my order #8421 arrived damaged. Can you help?
                    </div>
                </div>
            </div>

            {/* AI reasoning trace — the "Governed Autonomy" signal */}
            <div
                style={{
                    marginTop: 18,
                    padding: 14,
                    borderRadius: 14,
                    background: "rgba(31, 168, 111, 0.06)",
                    border: "1px solid rgba(31, 168, 111, 0.2)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "var(--brand-primary-soft)",
                        fontWeight: 600,
                    }}
                >
                    <span className="v2-dot" />
                    Protocol check
                </div>
                <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
                    <TraceLine label="Order lookup" value="#8421 → 3 days ago ✓" />
                    <TraceLine label="Refund window" value="30 days → within policy ✓" />
                    <TraceLine label="Confidence" value="94% • grounded in KB" />
                </div>
            </div>

            {/* AI reply */}
            <div
                style={{
                    marginTop: 14,
                    display: "flex",
                    gap: 10,
                    justifyContent: "flex-end",
                }}
            >
                <div style={{ maxWidth: "78%" }}>
                    <div
                        style={{
                            fontSize: 12,
                            color: "var(--brand-primary-soft)",
                            marginBottom: 4,
                            textAlign: "right",
                        }}
                    >
                        enorve AI
                    </div>
                    <div
                        style={{
                            fontSize: 14,
                            color: "#fff",
                            lineHeight: 1.45,
                            background: "var(--brand-primary)",
                            padding: "10px 14px",
                            borderRadius: 14,
                            borderTopRightRadius: 4,
                        }}
                    >
                        Sorry about that, Sarah. I'm processing a full refund for order #8421 now — you'll
                        see it in 3–5 business days.
                    </div>
                </div>
                <Avatar initials="e" tint="primary" />
            </div>

            {/* Resolution chip */}
            <div
                style={{
                    marginTop: 14,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--brand-primary-soft)",
                    background: "rgba(31, 168, 111, 0.1)",
                    border: "1px solid rgba(31, 168, 111, 0.25)",
                }}
            >
                <CheckIcon /> Resolved — protocol followed
            </div>
        </div>
    )
}

function WindowDot({ color }: { color: string }) {
    return (
        <span
            style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: color,
                opacity: 0.7,
                display: "inline-block",
            }}
        />
    )
}

function Avatar({ initials, tint }: { initials: string; tint: "warm" | "primary" }) {
    const bg =
        tint === "primary"
            ? "var(--brand-primary)"
            : "linear-gradient(135deg, #D4AF37 0%, #C17A2B 100%)"
    return (
        <span
            style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                background: bg,
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
            }}
        >
            {initials}
        </span>
    )
}

function TraceLine({ label, value }: { label: string; value: string }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                color: "var(--brand-text-on-dark-muted)",
            }}
        >
            <span>{label}</span>
            <span style={{ color: "var(--brand-text-on-dark)", fontWeight: 500 }}>{value}</span>
        </div>
    )
}

function CheckIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
                d="M2.5 6L5 8.5L9.5 3.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
