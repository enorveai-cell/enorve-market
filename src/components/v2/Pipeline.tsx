import { homeV2 } from "../../content/home.v2"

/**
 * v2 Pipeline — "How it works" — 4-step horizontal flow on cream.
 * Steps connect with a subtle line; each step is numbered + titled + sub-text.
 */
export function V2Pipeline() {
    const { eyebrow, headline, subhead, steps } = homeV2.pipeline

    return (
        <section className="v2-surface-cream">
            <div className="v2-container v2-section">
                {/* Section header */}
                <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
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

                {/* Steps */}
                <div
                    style={{
                        marginTop: 72,
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: 32,
                        position: "relative",
                    }}
                >
                    {/* Horizontal connector — only visible on wider layouts */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            top: 26,
                            left: "7%",
                            right: "7%",
                            height: 1,
                            background:
                                "linear-gradient(90deg, transparent 0%, var(--brand-primary-tint) 15%, var(--brand-primary-tint) 85%, transparent 100%)",
                            zIndex: 0,
                        }}
                    />
                    {steps.map((step, i) => (
                        <Step
                            key={step.title}
                            index={i + 1}
                            title={step.title}
                            body={step.body}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function Step({ index, title, body }: { index: number; title: string; body: string }) {
    return (
        <div
            style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 14,
            }}
        >
            <span
                style={{
                    width: 52,
                    height: 52,
                    borderRadius: 999,
                    background: "var(--brand-surface)",
                    border: "1px solid var(--brand-primary-tint)",
                    color: "var(--brand-primary)",
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 500,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "var(--shadow-card)",
                }}
                aria-hidden="true"
            >
                {String(index).padStart(2, "0")}
            </span>
            <h3
                style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--brand-text)",
                    margin: 0,
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "var(--brand-text-muted)",
                    margin: 0,
                }}
            >
                {body}
            </p>
        </div>
    )
}
