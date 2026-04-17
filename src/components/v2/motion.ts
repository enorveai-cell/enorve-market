import type { Transition, Variants } from "framer-motion"

// Shape of the `viewport` prop on motion components — framer-motion does not
// export this type by name, so we inline the subset we actually use.
type RevealViewport = {
    once?: boolean
    margin?: string
    amount?: "some" | "all" | number
}

/**
 * Shared motion vocabulary for the v2 marketing site.
 *
 * One rhythm across the whole page: ~480ms ease-out on entry, 30-50ms stagger,
 * hover lifts are spring-based. Respects prefers-reduced-motion via
 * <MotionConfig reducedMotion="user"> wrapping V2Layout.
 *
 * See docs/redesign-brief.md + ui-ux-pro-max §7 Animation.
 */

// ── Tokens ─────────────────────────────────────────────────────────────
const EASE_OUT: [number, number, number, number] = [0.2, 0.8, 0.2, 1]

export const motionTokens = {
    dur: {
        tap: 0.15,
        micro: 0.24,
        enter: 0.48,
        heavy: 0.6,
    },
    easeOut: EASE_OUT,
    stagger: 0.06,
    staggerChildrenDelay: 0.08,
}

const enter: Transition = {
    duration: motionTokens.dur.enter,
    ease: EASE_OUT,
}

// ── Variants ───────────────────────────────────────────────────────────

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: enter },
}

export const fadeUpSmall: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: enter },
}

export const fadeRight: Variants = {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0, transition: enter },
}

/**
 * Subtle scale-in for hero cards — grows from 98% to 100% with a slight fade.
 * Used for the product-card on the right of the hero and the protocol editor.
 */
export const cardReveal: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: motionTokens.dur.heavy, ease: EASE_OUT },
    },
}

/**
 * Stagger container — children reveal one after the other at `stagger` intervals.
 * Pair with `fadeUp` or `fadeUpSmall` on the children.
 */
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: motionTokens.stagger,
            delayChildren: motionTokens.staggerChildrenDelay,
        },
    },
}

/**
 * Shared viewport options for whileInView reveals.
 * `once: true` — no replay on scroll-back; `-10%` margin triggers slightly
 * before the section actually enters the viewport, so the motion feels
 * coordinated with the scroll rather than lagging behind it.
 */
export const revealViewport: RevealViewport = {
    once: true,
    margin: "-10% 0px -10% 0px",
}

// ── Hover / interaction helpers ────────────────────────────────────────

/**
 * Subtle lift for interactive cards. Spring feels more "alive" than tween
 * for pointer-driven motion. Avoid on static content.
 */
export const cardLiftHover = {
    y: -4,
    transition: { type: "spring" as const, stiffness: 260, damping: 22 },
}

/**
 * Micro press-in for buttons. 0.97 is the floor — below that feels rubber.
 */
export const pressScale = {
    scale: 0.97,
    transition: { duration: motionTokens.dur.tap, ease: EASE_OUT },
}
