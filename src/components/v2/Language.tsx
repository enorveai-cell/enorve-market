import { motion } from "framer-motion"
import { homeV2 } from "../../content/home.v2"
import { cardReveal, fadeUp, revealViewport, staggerContainer } from "./motion"

/**
 * v2 Language — "Governed autonomy" — split layout on ink.
 * Left: copy + CTA. Right: stylized protocol editor showing plain-English rules.
 * This is the central brand argument: you write rules, AI follows them.
 *
 * Motion: pitch fades up on the left as the card reveals from the right,
 * reinforcing the "you → AI" direction of the brand argument.
 */
export function V2Language() {
    const { eyebrow, headline, subhead, protocolTitle, rules, chip, ctaLabel, ctaHref } =
        homeV2.language

    return (
        <section className="v2-surface-ink">
            <motion.div
                className="v2-container v2-section"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.15fr)",
                    gap: "clamp(32px, 5vw, 80px)",
                    alignItems: "center",
                }}
            >
                {/* Left: pitch */}
                <motion.div variants={fadeUp}>
                    <span className="v2-eyebrow">{eyebrow}</span>
                    <h2 style={{ marginTop: 16 }}>{headline}</h2>
                    <p
                        style={{
                            marginTop: 20,
                            maxWidth: 520,
                            fontSize: 18,
                            lineHeight: 1.55,
                            color: "var(--brand-text-on-dark-muted)",
                        }}
                    >
                        {subhead}
                    </p>
                    <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <a href={ctaHref} className="v2-btn v2-btn-light">
                            {ctaLabel} →
                        </a>
                    </div>
                </motion.div>

                {/* Right: protocol editor */}
                <motion.div variants={cardReveal}>
                    <ProtocolCard title={protocolTitle} rules={[...rules]} chip={chip} />
                </motion.div>
            </motion.div>
        </section>
    )
}

function ProtocolCard({
    title,
    rules,
    chip,
}: {
    title: string
    rules: string[]
    chip: string
}) {
    return (
        <div
            className="v2-card-dark"
            style={{
                padding: 20,
                boxShadow: "var(--shadow-lift)",
            }}
        >
            {/* Header row */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: 14,
                    borderBottom: "1px solid var(--brand-line-on-dark)",
                    gap: 12,
                }}
            >
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 13,
                        fontWeight: 500,
                        color: "var(--brand-text-on-dark)",
                        fontFamily: "var(--font-body)",
                    }}
                >
                    <DocIcon />
                    {title}
                </div>
                <span
                    style={{
                        fontSize: 11,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--brand-primary-soft)",
                        background: "rgba(31, 168, 111, 0.08)",
                        border: "1px solid rgba(31, 168, 111, 0.25)",
                        padding: "4px 10px",
                        borderRadius: 999,
                    }}
                >
                    Live
                </span>
            </div>

            {/* Rules list */}
            <ol
                style={{
                    marginTop: 16,
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                }}
            >
                {rules.map((rule, i) => (
                    <li
                        key={i}
                        style={{
                            display: "flex",
                            gap: 12,
                            fontSize: 14,
                            color: "var(--brand-text-on-dark)",
                            lineHeight: 1.5,
                            padding: "12px 14px",
                            background: "rgba(238, 242, 238, 0.03)",
                            border: "1px solid var(--brand-line-on-dark)",
                            borderRadius: 10,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "var(--font-display)",
                                color: "var(--brand-primary-soft)",
                                fontWeight: 500,
                                fontSize: 13,
                                minWidth: 24,
                            }}
                        >
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{rule}</span>
                    </li>
                ))}
            </ol>

            {/* Footer chip */}
            <div
                style={{
                    marginTop: 16,
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
                <Pulse />
                {chip}
            </div>
        </div>
    )
}

function DocIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
                d="M3 1.5h5.5L11 4v8.5a1 1 0 01-1 1H3a1 1 0 01-1-1v-10a1 1 0 011-1z"
                stroke="var(--brand-primary-soft)"
                strokeWidth="1.3"
                strokeLinejoin="round"
            />
            <path d="M4.5 7h5M4.5 9.5h4" stroke="var(--brand-primary-soft)" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
    )
}

function Pulse() {
    return (
        <span
            style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "var(--brand-primary-soft)",
                boxShadow: "0 0 0 4px rgba(31, 168, 111, 0.15)",
            }}
        />
    )
}
