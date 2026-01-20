import { useEffect, useState } from 'react'

/**
 * Hook to detect if user prefers reduced motion
 * Returns true if user has prefers-reduced-motion: reduce set
 */
export function usePrefersReducedMotion(): boolean {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

        // Set initial value
        setPrefersReducedMotion(mediaQuery.matches)

        // Listen for changes
        const handleChange = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches)
        }

        mediaQuery.addEventListener('change', handleChange)

        return () => {
            mediaQuery.removeEventListener('change', handleChange)
        }
    }, [])

    return prefersReducedMotion
}

/**
 * Helper to get safe animation variants based on user preference
 * @param normalVariant - Full animation variant
 * @param reduceMotion - Whether to use reduced motion
 * @returns Appropriate variant based on preference
 */
export function getMotionVariant<T>(normalVariant: T, reduceMotion: boolean): T | {} {
    return reduceMotion ? {} : normalVariant
}
