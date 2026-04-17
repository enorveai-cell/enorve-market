import { homeV2 } from "../../content/home.v2"

/**
 * v2 Footer — 4-column sitemap on a darker ink surface.
 * Brand + tagline on the left, link columns on the right.
 * Bottom bar holds copyright + small meta links.
 */
export function V2Footer() {
    const { tagline, columns, copyright } = homeV2.footer
    const { brand } = homeV2.nav

    return (
        <footer
            style={{
                background: "var(--brand-ink)",
                color: "var(--brand-text-on-dark)",
                borderTop: "1px solid var(--brand-line-on-dark)",
            }}
        >
            <div
                className="v2-container"
                style={{
                    paddingTop: "clamp(56px, 7vw, 96px)",
                    paddingBottom: 40,
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "minmax(240px, 1fr) minmax(0, 2.2fr)",
                        gap: "clamp(32px, 5vw, 72px)",
                        alignItems: "flex-start",
                    }}
                >
                    {/* Brand lockup */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 10,
                                color: "var(--brand-text-on-dark)",
                            }}
                        >
                            <BrandMark />
                            <span
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: 22,
                                    fontWeight: 600,
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                {brand}
                            </span>
                        </div>
                        <p
                            style={{
                                maxWidth: 260,
                                fontSize: 14,
                                lineHeight: 1.55,
                                color: "var(--brand-text-on-dark-muted)",
                            }}
                        >
                            {tagline}
                        </p>
                    </div>

                    {/* Link columns */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                            gap: 24,
                        }}
                    >
                        {columns.map((col) => (
                            <div
                                key={col.heading}
                                style={{ display: "flex", flexDirection: "column", gap: 12 }}
                            >
                                <h4
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 600,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        color: "var(--brand-text-on-dark-muted)",
                                        margin: 0,
                                    }}
                                >
                                    {col.heading}
                                </h4>
                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 8,
                                    }}
                                >
                                    {col.links.map((l) => (
                                        <li key={l.label}>
                                            <a
                                                href={l.href}
                                                style={{
                                                    color: "var(--brand-text-on-dark)",
                                                    fontSize: 14,
                                                    textDecoration: "none",
                                                    transition: "color 160ms ease",
                                                }}
                                                onMouseEnter={(e) =>
                                                    (e.currentTarget.style.color =
                                                        "var(--brand-primary-soft)")
                                                }
                                                onMouseLeave={(e) =>
                                                    (e.currentTarget.style.color =
                                                        "var(--brand-text-on-dark)")
                                                }
                                            >
                                                {l.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        marginTop: 56,
                        paddingTop: 24,
                        borderTop: "1px solid var(--brand-line-on-dark)",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 16,
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <span
                        style={{
                            fontSize: 13,
                            color: "var(--brand-text-on-dark-muted)",
                        }}
                    >
                        {copyright}
                    </span>
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            fontSize: 13,
                            color: "var(--brand-primary-soft)",
                        }}
                    >
                        <span className="v2-dot" />
                        Built for teams who care about what their AI says.
                    </span>
                </div>
            </div>
        </footer>
    )
}

function BrandMark() {
    return (
        <svg
            width="26"
            height="26"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <circle cx="14" cy="14" r="12" stroke="var(--brand-primary-soft)" strokeWidth="2" />
            <path
                d="M8 14h12M8 14c0-3.3 2.7-6 6-6s6 2.7 6 6"
                stroke="var(--brand-primary-soft)"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    )
}
