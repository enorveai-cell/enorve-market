import { useCallback } from 'react'

declare global {
    interface Window {
        gtag?: (...args: any[]) => void
    }
}

interface GAEventParams {
    event_category?: string
    event_label?: string
    value?: number
    [key: string]: any
}

export function useGAEvent() {
    const trackEvent = useCallback((
        eventName: string,
        params?: GAEventParams
    ) => {
        // Only track if gtag is available (GA is loaded)
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', eventName, params)
        }
    }, [])

    // Convenience methods for common events
    const trackCTA = useCallback((
        buttonName: string,
        location: string,
        additionalParams?: GAEventParams
    ) => {
        trackEvent('cta_click', {
            event_category: 'engagement',
            event_label: buttonName,
            location: location,
            ...additionalParams
        })
    }, [trackEvent])

    const trackNavigation = useCallback((
        destination: string,
        source: string
    ) => {
        trackEvent('navigation', {
            event_category: 'navigation',
            event_label: destination,
            source: source
        })
    }, [trackEvent])

    const trackFormSubmit = useCallback((
        formName: string,
        success: boolean = true
    ) => {
        trackEvent('form_submit', {
            event_category: 'forms',
            event_label: formName,
            success: success
        })
    }, [trackEvent])

    return {
        trackEvent,
        trackCTA,
        trackNavigation,
        trackFormSubmit
    }
}
