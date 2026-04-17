import { V2Hero } from "../../components/v2/Hero"
import { V2DemoCompare } from "../../components/v2/DemoCompare"
import { V2Pipeline } from "../../components/v2/Pipeline"
import { V2CapabilityGrid } from "../../components/v2/CapabilityGrid"
import { V2Language } from "../../components/v2/Language"
import { V2Enterprise } from "../../components/v2/Enterprise"
import { V2FinalCTA } from "../../components/v2/FinalCTA"
import { V2Footer } from "../../components/v2/Footer"

/**
 * v2 Homepage — parallel redesign.
 *
 * Live at /v2 during iteration. Activated by <V2Layout data-brand="v2">,
 * which scopes the new token layer. The live site at "/" is unaffected.
 *
 * Composition (see docs/redesign-brief.md §5):
 *   1. Hero              ink + glow
 *   2. DemoCompare       cream-alt
 *   3. Pipeline          cream
 *   4. CapabilityGrid    cream-alt
 *   5. Language          ink           ← second dark moment
 *   6. Enterprise        cream
 *   7. FinalCTA          ink + glow    ← bookends the hero
 *   8. Footer            ink
 */
export function V2Home() {
    return (
        <>
            <V2Hero />
            <V2DemoCompare />
            <V2Pipeline />
            <V2CapabilityGrid />
            <V2Language />
            <V2Enterprise />
            <V2FinalCTA />
            <V2Footer />
        </>
    )
}
