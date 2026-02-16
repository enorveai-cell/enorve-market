/**
 * Competitor pricing benchmarks — static constants based on publicly available list prices.
 * Text names only (no logos). Each entry includes a lastVerified date for audit trail.
 *
 * NOTE: These are approximate list prices. Actual negotiated enterprise prices may vary.
 * Quarterly review recommended.
 */

export interface CompetitorPricing {
    name: string
    /** Monthly per-agent seat cost */
    perAgentCost: number
    /** Monthly per-agent AI add-on cost (0 if included) */
    aiAddonCost: number
    /** Per-resolution cost for AI (if applicable) */
    perResolutionCost?: number
    /** ISO date string of last price verification */
    lastVerified: string
    /** Plan name used for reference */
    planReference: string
}

export const competitors: CompetitorPricing[] = [
    {
        name: "Zendesk",
        perAgentCost: 89,
        aiAddonCost: 50,
        lastVerified: "2026-01-15",
        planReference: "Suite Professional",
    },
    {
        name: "Intercom",
        perAgentCost: 74,
        aiAddonCost: 0,
        perResolutionCost: 0.99,
        lastVerified: "2026-01-15",
        planReference: "Advanced",
    },
    {
        name: "Freshdesk",
        perAgentCost: 49,
        aiAddonCost: 29,
        lastVerified: "2026-01-15",
        planReference: "Pro",
    },
]

/**
 * Enorve pricing — derived from the Business plan on the Pricing page.
 * $499/mo for up to 100 agents ≈ $4.99/agent/mo.
 * No separate AI add-on cost — AI is included.
 */
export const enorve = {
    name: "Enorve",
    basePlanCost: 499,        // monthly flat
    maxAgentsInBase: 100,
    perAgentCost: 4.99,
    aiAddonCost: 0,
    perResolutionCost: 0,
    lastVerified: "2026-01-15",
    planReference: "Business",
}
