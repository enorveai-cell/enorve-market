import { Outlet } from "react-router-dom"
import { V2Nav } from "../components/v2/Nav"

/**
 * V2Layout — wraps every /v2/* route with the new brand shell.
 *
 * The `data-brand="v2"` attribute is the ONLY thing that activates the
 * new token layer in `src/styles/v2-brand.css`. Live site pages never
 * carry this attribute, so they stay on the old indigo/purple tokens.
 *
 * See docs/redesign-brief.md for the full design system.
 */
export function V2Layout() {
    return (
        <div data-brand="v2" className="relative min-h-screen">
            <V2Nav />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
