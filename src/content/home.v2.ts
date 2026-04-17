/**
 * Centralized copy for the v2 homepage.
 *
 * Copy lives here (not inlined in JSX) so the words can be iterated
 * without component churn. When the v2 cutover lands, this file
 * absorbs the remaining inlined copy from the old sections.
 */

export const homeV2 = {
  nav: {
    brand: "enorve",
    links: [
      { label: "Product", href: "#" },
      { label: "Solutions", href: "#" },
      { label: "Pricing", href: "/pricing" },
      { label: "Resources", href: "#" },
    ],
    designPartners: { label: "Design Partners", href: "/design-partners" },
    talkToSales: { label: "Talk to sales", href: "/contact-sales" },
    login: { label: "Login", href: "https://app.enorve.com/auth" },
    cta: { label: "Get early access", href: "/design-partners" },
  },

  hero: {
    eyebrow: "AI-Powered Customer Support",
    headline: "Your AI says exactly what you'd say. Every time.",
    subhead:
      "Define exactly how your AI handles refunds, complaints, and escalations — then stress-test it before a real customer ever sees it.",
    prelaunchChip: "Early access opening soon — join the waitlist for priority access.",
    socialProof: "47 support teams already waiting",
    ctaPrimary: { label: "Join Early Access", href: "/design-partners" },
    ctaSecondary: { label: "Watch the demo", href: "/demo-video" },
  },

  demoCompare: {
    eyebrow: "Interactive demo",
    headline: "See it in action.",
    subhead:
      "Watch the same angry refund request play out — with generic AI vs. AI that follows your rules.",
    customerMessage: "I want a refund. This product broke after 2 days.",
    without: {
      label: "Without Enorve",
      reply: "Here's a 20% discount code: SAVE20",
      verdict: "Policy violated",
      verdictTone: "danger" as const,
    },
    with: {
      label: "With Enorve",
      reply: "Let me process your refund right away. Order number?",
      verdict: "Resolved — protocol followed",
      verdictTone: "success" as const,
    },
    ctaLabel: "Watch the demo",
    ctaHref: "/demo-video",
  },
} as const
