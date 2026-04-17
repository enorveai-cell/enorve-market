import { motion } from "framer-motion"
import { homeV2 } from "../../content/home.v2"
import { fadeUp, revealViewport, staggerContainer } from "./motion"

/**
 * v2 FinalCTA — ink-on-glow closer. Mirrors the hero's tonal weight
 * so the page bookends with conviction. Single centered column.
 *
 * Motion: same stagger rhythm as the hero (eyebrow → headline → subhead →
 * CTAs → footnote) so the close echoes the open.
 */
export function V2FinalCTA() {
    const { eyebrow, headline, subhead, ctaPrimary, ctaSecondary, footNote } = homeV2.finalCta

    return (
        <section className="v2-surface-hero">
            <motion.div
                className="v2-container v2-section"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 20,
                }}
            >
                <motion.span
                    variants={fadeUp}
                    className="v2-eyebrow"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                    <span className="v2-dot" />
                    {eyebrow}
                </motion.span>

                <motion.h2
                    variants={fadeUp}
                    style={{
                        maxWidth: 760,
                        marginTop: 8,
                        fontSize: "var(--type-display)",
                        lineHeight: "var(--leading-tight)",
                        letterSpacing: "var(--tracking-display)",
                        fontWeight: 500,
                    }}
                >
                    {headline}
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    style={{
                        maxWidth: 560,
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
                        marginTop: 16,
                        display: "flex",
                        gap: 12,
                        flexWrap: "wrap",
                        justifyContent: "center",
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
                        marginTop: 4,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 13,
                        color: "var(--brand-primary-soft)",
                    }}
                >
                    <span className="v2-dot" />
                    {footNote}
                </motion.div>
            </motion.div>
        </section>
    )
}
