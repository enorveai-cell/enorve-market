import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface PageMetaOptions {
    title: string
    description?: string
    ogImage?: string
    ogType?: 'website' | 'article'
    twitterCard?: 'summary' | 'summary_large_image'
}

export function usePageMeta(options: PageMetaOptions | string) {
    const location = useLocation()

    // Support both string (backwards compatible) and object syntax
    const config = typeof options === 'string'
        ? { title: options, description: undefined, ogImage: undefined, ogType: 'website' as const, twitterCard: 'summary_large_image' as const }
        : { ogType: 'website' as const, twitterCard: 'summary_large_image' as const, ...options }

    const { title, description, ogImage, ogType, twitterCard } = config

    useEffect(() => {
        // Update page title
        const previousTitle = document.title
        document.title = title ? `${title} | Enorve` : 'Enorve - AI-Powered Customer Support Platform'

        // Helper function to set or create meta tag
        const setMetaTag = (name: string, content: string, property = false) => {
            const attribute = property ? 'property' : 'name'
            let meta = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`)
            if (!meta) {
                meta = document.createElement('meta')
                meta.setAttribute(attribute, name)
                document.head.appendChild(meta)
            }
            meta.content = content
        }

        // Update meta description
        if (description) {
            setMetaTag('description', description)
        }

        // Update Open Graph tags
        setMetaTag('og:title', document.title, true)
        if (description) {
            setMetaTag('og:description', description, true)
        }
        setMetaTag('og:type', ogType, true)
        setMetaTag('og:url', `https://enorve.com${location.pathname}`, true)
        setMetaTag('og:site_name', 'Enorve', true)
        setMetaTag('og:locale', 'en_US', true)
        if (ogImage) {
            setMetaTag('og:image', ogImage, true)
        }

        // Update Twitter Card tags
        setMetaTag('twitter:card', twitterCard)
        setMetaTag('twitter:site', '@enorveai')
        setMetaTag('twitter:title', document.title)
        if (description) {
            setMetaTag('twitter:description', description)
        }
        if (ogImage) {
            setMetaTag('twitter:image', ogImage)
        }

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
    }, [title, description, ogImage, ogType, twitterCard, location.pathname, location.search])
}

// Export backwards compatible alias
export const usePageTitle = usePageMeta
