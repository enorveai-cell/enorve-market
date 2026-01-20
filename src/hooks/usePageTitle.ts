import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface PageMetaOptions {
    title: string
    description?: string
}

export function usePageMeta(options: PageMetaOptions | string) {
    const location = useLocation()

    // Support both string (backwards compatible) and object syntax
    const { title, description } = typeof options === 'string'
        ? { title: options, description: undefined }
        : options

    useEffect(() => {
        // Update page title
        const previousTitle = document.title
        document.title = title ? `${title} | Enorve` : 'Enorve - AI-Powered Customer Support Platform'

        // Update or create meta description
        if (description) {
            let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')
            if (!metaDescription) {
                metaDescription = document.createElement('meta')
                metaDescription.name = 'description'
                document.head.appendChild(metaDescription)
            }
            metaDescription.content = description
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
    }, [title, description, location.pathname, location.search])
}

// Export backwards compatible alias
export const usePageTitle = usePageMeta

