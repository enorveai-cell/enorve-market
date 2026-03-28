import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
        // Track SPA page views in GA4
        if (window.gtag) {
            window.gtag('event', 'page_view', {
                page_path: pathname,
                page_location: window.location.href,
                page_title: document.title,
            })
        }
    }, [pathname])

    return null
}
