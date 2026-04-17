import { motion } from "framer-motion"
import { homeV2 } from "../../content/home.v2"
import { fadeUp, fadeUpSmall, revealViewport, staggerContainer } from "./motion"

/**
 * v2 DemoCompare — WITHOUT / WITH Enorve refund scenario.
 *
 * Cream surface (contrasts hero's deep forest). The comparison is the
 * single strongest piece of copy we have — it deserves a full section
 * with two symmetric cards and a clear verdict chip on each.
 *
 * Motion: header fades up first, then the customer bubble, then the two
 * reply cards stagger in so your eye moves left→right and lands on the
 * enorve card (with the primary-tinted border doing the rest).
 */
export function V2DemoCompare() {
    const { eyebrow, headline, subhead, customerMessage, without, with: withCase, ctaLabel, ctaHref } =
        homeV2.demoCompare

    return (
        <section className="v2-surface-cream-alt">
            <motion.div
                className="v2-container v2-section"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
            >
                {/* Section header */}
                <motion.div
                    variants={fadeUp}
                    style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}
                >
                    <span className="v2-eyebrow">{eyebrow}</span>
                    <h2 style={{ marginTop: 16 }}>{headline}</h2>
                    <p
                        style={{
                            marginTop: 16,
                            fontSize: 18,
                            lineHeight: 1.55,
                            color: "var(--brand-text-muted)",
                        }}
                    >
                        {subhead}
                    </p>
                </motion.div>

                {/* Shared customer message */}
                <motion.div
                    variants={fadeUpSmall}
                    style={{ marginTop: 56, display: "flex", justifyContent: "center" }}
                >
                    <CustomerBubble text={customerMessage} />
                </motion.div>

                {/* Paired replies */}
                <motion.div
                    variants={staggerContainer}
                    style={{
                        marginTop: 32,
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: 24,
                        alignItems: "stretch",
                    }}
                >
                    <motion.div variants={fadeUpSmall} style={{ display: "flex" }}>
                        <ReplyCard
                            label={without.label}
                            reply={without.reply}
                            verdict={without.verdict}
                            tone={without.verdictTone}
                            variant="generic"
                        />
                    </motion.div>
                    <motion.div variants={fadeUpSmall} style={{ display: "flex" }}>
                        <ReplyCard
                            label={withCase.label}
                            reply={withCase.reply}
                            verdict={withCase.verdict}
                            tone={withCase.verdictTone}
                            variant="enorve"
                        />
                    </motion.div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    variants={fadeUpSmall}
                    style={{ marginTop: 48, display: "flex", justifyContent: "center" }}
                >
                    <a href={ctaHref} className="v2-btn v2-btn-outline">
                        {ctaLabel} →
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}

function CustomerBubble({ text }: { text: string }) {
    return (
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start", maxWidth: 520 }}>
            <span
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: 999,
                    background: "linear-gradient(135deg, #D4AF37 0%, #C17A2B 100%)",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                }}
                aria-hidden="true"
            >
                C
            </span>
            <div>
                <div
                    style={{
                        fontSize: 12,
                        color: "var(--brand-text-muted)",
                        marginBottom: 4,
                    }}
                >
                    Customer · WhatsApp
                </div>
                <div
                    style={{
                        fontSize: 15,
                        lineHeight: 1.5,
                        background: "#fff",
                        padding: "12px 16px",
                        borderRadius: 16,
                        borderTopLeftRadius: 4,
                        border: "1px solid var(--brand-line)",
                        color: "var(--brand-text)",
                    }}
                >
                    {text}
                </div>
            </div>
        </div>
    )
}

function ReplyCard({
    label,
    reply,
    verdict,
    tone,
    variant,
}: {
    label: string
    reply: string
    verdict: string
    tone: "danger" | "success"
    variant: "generic" | "enorve"
}) {
    const isEnorve = variant === "enorve"
    const toneColor = tone === "success" ? "var(--brand-success)" : "var(--brand-danger)"
    const toneBg =
        tone === "success" ? "rgba(31, 168, 111, 0.1)" : "rgba(184, 58, 46, 0.08)"
    const toneBorder =
        tone === "success" ? "rgba(31, 168, 111, 0.28)" : "rgba(184, 58, 46, 0.25)"

    return (
        <div
            className="v2-card"
            style={{
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 18,
                // Enorve card gets a subtle lift to suggest "this is the answer"
                boxShadow: isEnorve ? "var(--shadow-card)" : "none",
                borderColor: isEnorve ? "var(--brand-primary-tint)" : "var(--brand-line)",
            }}
        >
            {/* Label row */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                }}
            >
                <span
                    style={{
                        fontSize: 12,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: isEnorve ? "var(--brand-primary)" : "var(--brand-text-muted)",
                    }}
                >
                    {label}
                </span>
                {isEnorve && (
                    <span
                        style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: "var(--brand-primary)",
                            background: "var(--brand-primary-tint)",
                            padding: "3px 8px",
                            borderRadius: 999,
                        }}
                    >
                        Your rules
                    </span>
                )}
            </div>

            {/* AI bubble */}
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
                <div style={{ maxWidth: "88%" }}>
                    <div
                        style={{
                            fontSize: 12,
                            color: isEnorve ? "var(--brand-primary)" : "var(--brand-text-muted)",
                            marginBottom: 4,
                            textAlign: "right",
                        }}
                    >
                        {isEnorve ? "enorve AI" : "Generic AI"}
                    </div>
                    <div
                        style={{
                            fontSize: 15,
                            lineHeight: 1.5,
                            padding: "12px 16px",
                            borderRadius: 16,
                            borderTopRightRadius: 4,
                            background: isEnorve ? "var(--brand-primary)" : "#F1ECDE",
                            color: isEnorve ? "#fff" : "var(--brand-text)",
                            border: isEnorve ? "none" : "1px solid var(--brand-line)",
                        }}
                    >
                        {reply}
                    </div>
                </div>
            </div>

            {/* Verdict chip */}
            <div
                style={{
                    marginTop: "auto",
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 600,
                    color: toneColor,
                    background: toneBg,
                    border: `1px solid ${toneBorder}`,
                }}
            >
                {tone === "success" ? <CheckIcon /> : <AlertIcon />}
                {verdict}
            </div>
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

function AlertIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
                d="M6 3.5V6.5M6 8.5V8.6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    )
}
