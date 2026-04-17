import { motion } from "framer-motion"
import { homeV2 } from "../../content/home.v2"
import { cardLiftHover, fadeUp, fadeUpSmall, revealViewport, staggerContainer } from "./motion"

/**
 * v2 CapabilityGrid — 6 tiles on cream-alt, auto-fit grid.
 * Each tile: a small graphical glyph, a title, and a short body.
 * The glyphs are CSS/SVG so we can iterate copy + layout without image assets.
 *
 * Motion: header fades up, then tiles stagger in. Each tile has a subtle
 * spring-based lift on hover — keeps the grid feeling interactive without
 * distracting from the copy.
 */
export function V2CapabilityGrid() {
    const { eyebrow, headline, subhead, items } = homeV2.capabilities

    return (
        <section className="v2-surface-cream-alt">
            <motion.div
                className="v2-container v2-section"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
            >
                <motion.div
                    variants={fadeUp}
                    style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}
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

                <motion.div
                    variants={staggerContainer}
                    style={{
                        marginTop: 64,
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 20,
                    }}
                >
                    {items.map((item, i) => (
                        <Tile key={item.title} title={item.title} body={item.body} index={i} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

function Tile({ title, body, index }: { title: string; body: string; index: number }) {
    return (
        <motion.div
            variants={fadeUpSmall}
            whileHover={cardLiftHover}
            className="v2-card"
            style={{
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 16,
            }}
        >
            <Glyph variant={index} />
            <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--brand-text)", margin: 0 }}>
                {title}
            </h3>
            <p
                style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "var(--brand-text-muted)",
                    margin: 0,
                }}
            >
                {body}
            </p>
        </motion.div>
    )
}

/**
 * Tiny geometric glyphs — one per tile. Shared colors pulled from tokens.
 * Intentionally abstract; the copy carries the meaning, not the icon.
 */
function Glyph({ variant }: { variant: number }) {
    const primary = "var(--brand-primary)"
    const soft = "var(--brand-primary-soft)"
    const tint = "var(--brand-primary-tint)"

    return (
        <span
            style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: tint,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: primary,
            }}
            aria-hidden="true"
        >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {variant === 0 && (
                    <>
                        <rect x="3" y="4" width="16" height="12" rx="3" stroke={primary} strokeWidth="1.6" />
                        <path d="M6 9h10M6 12h7" stroke={soft} strokeWidth="1.6" strokeLinecap="round" />
                    </>
                )}
                {variant === 1 && (
                    <>
                        <path d="M11 3v16M3 7h16M3 15h16" stroke={primary} strokeWidth="1.6" strokeLinecap="round" />
                        <circle cx="11" cy="7" r="1.6" fill={primary} />
                        <circle cx="11" cy="15" r="1.6" fill={soft} />
                    </>
                )}
                {variant === 2 && (
                    <>
                        <rect x="4" y="3" width="14" height="16" rx="2" stroke={primary} strokeWidth="1.6" />
                        <path d="M7 7h8M7 10h8M7 13h5" stroke={soft} strokeWidth="1.6" strokeLinecap="round" />
                    </>
                )}
                {variant === 3 && (
                    <>
                        <path
                            d="M11 3l6.5 3.8v7.4L11 18 4.5 14.2V6.8L11 3z"
                            stroke={primary}
                            strokeWidth="1.6"
                            strokeLinejoin="round"
                        />
                        <path d="M8 11l2 2 4-4" stroke={soft} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                )}
                {variant === 4 && (
                    <>
                        <circle cx="7" cy="8" r="3" stroke={primary} strokeWidth="1.6" />
                        <circle cx="15" cy="8" r="3" stroke={soft} strokeWidth="1.6" />
                        <path d="M3 18c0-2.8 2-5 4-5s4 2.2 4 5M11 18c0-2.8 2-5 4-5s4 2.2 4 5" stroke={primary} strokeWidth="1.6" strokeLinecap="round" />
                    </>
                )}
                {variant === 5 && (
                    <>
                        <path d="M3 17V11M8 17V8M13 17V13M18 17V5" stroke={primary} strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M3 19h16" stroke={soft} strokeWidth="1.6" strokeLinecap="round" />
                    </>
                )}
            </svg>
        </span>
    )
}
