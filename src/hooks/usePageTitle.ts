import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function usePageTitle(title: string) {
    const location = useLocation()

    useEffect(() => {
        // Update page title
        const previousTitle = document.title
        document.title = title ? `${title} | Enorve` : 'Enorve - AI-Powered Customer Support Platform'

        // Update or create canonical tag
        let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
        if (!canonicalLink) {
            canonicalLink = document.createElement('link')
            canonicalLink.rel = 'canonical'
            document.head.appendChild(canonicalLink)
        }
        
        // Always use enorve.com as canonical domain
        const canonicalUrl = `https://enorve.com${location.pathname}${location.search}`
        canonicalLink.href = canonicalUrl

        return () => {
            document.title = previousTitle
        }
    }, [title, location.pathname, location.search])
}
