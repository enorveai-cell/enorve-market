import { motion } from "framer-motion"
import { homeV2 } from "../../content/home.v2"
import { cardLiftHover, fadeUp, fadeUpSmall, revealViewport, staggerContainer } from "./motion"

/**
 * v2 Enterprise — trust pillars on cream.
 * 4 horizontal pillars on wide, auto-stacks on narrow.
 * Links to /security for full details.
 *
 * Motion: header fades up, pillars stagger in, each has a subtle spring lift
 * on hover. These cards make a trust claim — the lift signals "tangible".
 */
export function V2Enterprise() {
    const { eyebrow, headline, subhead, pillars, ctaLabel, ctaHref } = homeV2.enterprise

    return (
        <section className="v2-surface-cream">
            <motion.div
                className="v2-container v2-section"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
            >
                <motion.div
                    variants={fadeUp}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "minmax(0, 1fr) auto",
                        gap: "clamp(24px, 4vw, 48px)",
                        alignItems: "end",
                        marginBottom: 56,
                    }}
                >
                    <div style={{ maxWidth: 640 }}>
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
                    </div>
                    <a
                        href={ctaHref}
                        className="v2-btn v2-btn-outline"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        {ctaLabel} →
                    </a>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: 20,
                    }}
                >
                    {pillars.map((pillar, i) => (
                        <Pillar key={pillar.title} title={pillar.title} body={pillar.body} index={i} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

function Pillar({ title, body, index }: { title: string; body: string; index: number }) {
    return (
        <motion.div
            variants={fadeUpSmall}
            whileHover={cardLiftHover}
            style={{
                padding: 28,
                background: "#fff",
                border: "1px solid var(--brand-line)",
                borderRadius: "var(--radius-md)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                boxShadow: "var(--shadow-card)",
            }}
        >
            <PillarIcon variant={index} />
            <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--brand-text)", margin: 0 }}>
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

function PillarIcon({ variant }: { variant: number }) {
    const primary = "var(--brand-primary)"
    const soft = "var(--brand-primary-soft)"
    const tint = "var(--brand-primary-tint)"

    return (
        <span
            style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: tint,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: primary,
            }}
            aria-hidden="true"
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {variant === 0 && (
                    // Shield with check — SOC 2
                    <>
                        <path
                            d="M10 2l6 2.5V10c0 3.3-2.6 6.3-6 8-3.4-1.7-6-4.7-6-8V4.5L10 2z"
                            stroke={primary}
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                        />
                        <path d="M7.5 10l2 2 3.5-3.5" stroke={soft} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                )}
                {variant === 1 && (
                    // Globe — Data residency
                    <>
                        <circle cx="10" cy="10" r="7" stroke={primary} strokeWidth="1.5" />
                        <ellipse cx="10" cy="10" rx="3" ry="7" stroke={soft} strokeWidth="1.4" />
                        <path d="M3 10h14" stroke={soft} strokeWidth="1.4" />
                    </>
                )}
                {variant === 2 && (
                    // Key — SSO
                    <>
                        <circle cx="7" cy="13" r="3" stroke={primary} strokeWidth="1.5" />
                        <path d="M9 11l6-6M12.5 7.5L14 9M14 5.5L15.5 7" stroke={soft} strokeWidth="1.5" strokeLinecap="round" />
                    </>
                )}
                {variant === 3 && (
                    // List with a pulse — audit log
                    <>
                        <rect x="3" y="3" width="14" height="14" rx="2" stroke={primary} strokeWidth="1.5" />
                        <path d="M6 7h8M6 10h8M6 13l1.5-2 1.5 4 1.5-3 3.5 1" stroke={soft} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                )}
            </svg>
        </span>
    )
}
