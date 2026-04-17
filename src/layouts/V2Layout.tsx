import { Outlet } from "react-router-dom"
import { MotionConfig } from "framer-motion"
import { V2Nav } from "../components/v2/Nav"

/**
 * V2Layout — wraps every /v2/* route with the new brand shell.
 *
 * The `data-brand="v2"` attribute is the ONLY thing that activates the
 * new token layer in `src/styles/v2-brand.css`. Live site pages never
 * carry this attribute, so they stay on the old indigo/purple tokens.
 *
 * `<MotionConfig reducedMotion="user">` — respects the OS
 * prefers-reduced-motion setting for every framer-motion animation
 * nested inside. Transform/opacity-only animations remain (non-motion
 * visual changes are kept), but translate/scale/physics are neutralised.
 *
 * See docs/redesign-brief.md for the full design system and
 * ui-ux-pro-max §7 for the motion guidance this page follows.
 */
export function V2Layout() {
    return (
        <MotionConfig reducedMotion="user">
            <div data-brand="v2" className="relative min-h-screen">
                <V2Nav />
                <main>
                    <Outlet />
                </main>
            </div>
        </MotionConfig>
    )
}
