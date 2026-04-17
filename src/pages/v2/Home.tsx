import { V2Hero } from "../../components/v2/Hero"
import { V2DemoCompare } from "../../components/v2/DemoCompare"

/**
 * v2 Homepage — parallel redesign.
 *
 * Live at /v2 during iteration. Activated by <V2Layout data-brand="v2">,
 * which scopes the new token layer. The live site at "/" is unaffected.
 *
 * Composition (see docs/redesign-brief.md §5):
 *   1. Hero                 — split layout, product-card right  ✓
 *   2. DemoCompare          — WITHOUT / WITH refund scenario    ✓
 *   3. Pipeline / How it works   — next iteration
 *   4. Capability grid           — next iteration
 *   5. Language governance (protocol editor)  — next iteration
 *   6. Enterprise / trust        — next iteration
 *   7. FinalCTA                  — next iteration
 *   8. Footer                    — next iteration
 */
export function V2Home() {
    return (
        <>
            <V2Hero />
            <V2DemoCompare />
            {/* Placeholder slots for subsequent sections.
                Kept as comments so the composition intent stays visible
                without rendering empty blocks to the DOM. */}
            {/* <V2Pipeline /> */}
            {/* <V2CapabilityGrid /> */}
            {/* <V2Language /> */}
            {/* <V2Enterprise /> */}
            {/* <V2FinalCTA /> */}
            {/* <V2Footer /> */}
        </>
    )
}
