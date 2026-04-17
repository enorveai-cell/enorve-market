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

  pipeline: {
    eyebrow: "How it works",
    headline: "From message to resolution — your rules, every step.",
    subhead:
      "One pipeline across every channel. No bot handoffs. No context loss.",
    steps: [
      {
        title: "Message arrives",
        body: "WhatsApp, email, chat, SMS, Instagram. All in one inbox.",
      },
      {
        title: "AI reads your protocol",
        body: "Refund window, escalation path, tone. Your policy, in plain English.",
      },
      {
        title: "AI drafts the reply",
        body: "Grounded in your knowledge base. Cites sources. Refuses to guess.",
      },
      {
        title: "You ship or refine",
        body: "Auto-send on high-confidence, or review. The loop teaches the AI.",
      },
    ],
  },

  capabilities: {
    eyebrow: "What Enorve does",
    headline: "A full support operation — run by AI that knows your rules.",
    subhead:
      "Not a chatbot. A governed layer across every channel your customers already use.",
    items: [
      {
        title: "Omnichannel inbox",
        body: "WhatsApp, email, chat, SMS, Instagram. One thread per customer.",
      },
      {
        title: "Protocol engine",
        body: "Define tone, policy, escalation. The AI follows it, case by case.",
      },
      {
        title: "Knowledge grounding",
        body: "Every reply cites your KB. The AI refuses to guess when confidence drops.",
      },
      {
        title: "Simulator",
        body: "Stress-test protocols against adversarial scenarios before a real customer sees it.",
      },
      {
        title: "Human-in-the-loop",
        body: "AI drafts. You approve, edit, or auto-send. Every override trains the model.",
      },
      {
        title: "Outcome analytics",
        body: "Resolution rate, policy drift, gaps in the KB. Not vanity metrics — action items.",
      },
    ],
  },

  language: {
    eyebrow: "Governed autonomy",
    headline: "You write the policy. AI follows it — line by line.",
    subhead:
      "Plain English. No prompt engineering, no retraining, no ML team. Change a rule and it's live in seconds.",
    protocolTitle: "Refund policy — live",
    rules: [
      "Offer a full refund within 30 days of purchase.",
      "If the customer mentions 'lawyer' or 'legal', escalate to a human.",
      "Always apologize before citing policy.",
      "Never offer store credit unless the customer asks for it first.",
    ],
    chip: "AI follows 47 rules",
    ctaLabel: "See the full protocol editor",
    ctaHref: "/product/protocols",
  },

  enterprise: {
    eyebrow: "Built for the long haul",
    headline: "Enterprise-grade. Startup-simple.",
    subhead:
      "The same platform whether you're the founder answering tickets or a 50-person ops team.",
    pillars: [
      {
        title: "SOC 2 Type II",
        body: "Audited controls across data, access, and availability.",
      },
      {
        title: "Data residency",
        body: "EU, US, or India. Customer data never leaves the region you choose.",
      },
      {
        title: "SSO & SAML",
        body: "Okta, Google Workspace, Azure AD. Role-based access per team.",
      },
      {
        title: "Audit log",
        body: "Every AI decision, every override, every policy change — traceable.",
      },
    ],
    ctaLabel: "Read the security page",
    ctaHref: "/security",
  },

  finalCta: {
    eyebrow: "Early access",
    headline: "Ship AI customer support — the right way.",
    subhead:
      "Design partners get priority onboarding, pricing locked for year one, and direct access to the team building it.",
    ctaPrimary: { label: "Join Early Access", href: "/design-partners" },
    ctaSecondary: { label: "Talk to sales", href: "/contact-sales" },
    footNote: "47 support teams already waiting · No credit card required",
  },

  footer: {
    tagline: "Customer support AI that follows your rules.",
    columns: [
      {
        heading: "Product",
        links: [
          { label: "AI Copilot", href: "/product/ai-copilot" },
          { label: "Inbox", href: "/product/inbox" },
          { label: "Automation", href: "/product/automation" },
          { label: "Knowledge Base", href: "/product/knowledge-base" },
          { label: "Protocols", href: "/product/protocols" },
          { label: "Analytics", href: "/product/analytics" },
          { label: "Campaigns", href: "/product/campaigns" },
        ],
      },
      {
        heading: "Solutions",
        links: [
          { label: "Customer Support", href: "/solutions/customer-support" },
          { label: "E-commerce", href: "/solutions/ecommerce" },
          { label: "SaaS", href: "/solutions/saas" },
          { label: "Founders", href: "/solutions/founders" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Pricing", href: "/pricing" },
          { label: "ROI Calculator", href: "/labor-replacement-calculator" },
          { label: "Cost per Ticket", href: "/calculator" },
          { label: "AI Simulator", href: "/ai-simulator" },
          { label: "Security", href: "/security" },
          { label: "AI Transparency", href: "/ai-transparency" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "Design Partners", href: "/design-partners" },
          { label: "Contact Sales", href: "/contact-sales" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms of Service", href: "/terms-of-service" },
          { label: "Subprocessors", href: "/subprocessors" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Enorve. All rights reserved.`,
  },
} as const
