import { useEffect } from 'react'

type StructuredDataObject = Record<string, any>

export function useStructuredData(data: StructuredDataObject | StructuredDataObject[]) {
    useEffect(() => {
        // Convert to array if single object
        const dataArray = Array.isArray(data) ? data : [data]

        // Create script tags for each structured data object
        const scriptTags = dataArray.map((item) => {
            const script = document.createElement('script')
            script.type = 'application/ld+json'
            script.text = JSON.stringify(item)
            document.head.appendChild(script)
            return script
        })

        // Cleanup function to remove scripts on unmount
        return () => {
            scriptTags.forEach(script => {
                if (script.parentNode) {
                    script.parentNode.removeChild(script)
                }
            })
        }
    }, [data])
}

// Pre-built schema helpers
export const createOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Enorve',
    url: 'https://enorve.com',
    logo: 'https://enorve.com/favicon.svg',
    description: 'AI-Powered Customer Support Platform for WhatsApp, Email, Chat & Social',
    foundingDate: '2024',
    sameAs: [
        'https://twitter.com/enorveai',
        'https://linkedin.com/company/enorve',
        'https://github.com/enorveai'
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        url: 'https://enorve.com/contact'
    }
})

export const createSoftwareApplicationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Enorve',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Customer Support Software',
    operatingSystem: 'Web, Cloud',
    description: 'Unified inbox with AI auto-resolution for customer support teams. Manage WhatsApp, Email, Instagram, and Chat from one platform.',
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '39',
        highPrice: '499',
        offerCount: '3',
        priceSpecification: [
            {
                '@type': 'UnitPriceSpecification',
                price: '39',
                priceCurrency: 'USD',
                name: 'Starter Plan',
                billingDuration: 'P1M'
            },
            {
                '@type': 'UnitPriceSpecification',
                price: '199',
                priceCurrency: 'USD',
                name: 'Professional Plan',
                billingDuration: 'P1M'
            },
            {
                '@type': 'UnitPriceSpecification',
                price: '499',
                priceCurrency: 'USD',
                name: 'Business Plan',
                billingDuration: 'P1M'
            }
        ]
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '127'
    }
})

export const createProductSchema = (name: string, price: string, description: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    brand: {
        '@type': 'Brand',
        name: 'Enorve'
    },
    offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://enorve.com/pricing'
    }
})

export const createWebPageSchema = (name: string, description: string, url: string) => ({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: name,
    description: description,
    url: url,
    isPartOf: {
        '@type': 'WebSite',
        name: 'Enorve',
        url: 'https://enorve.com'
    }
})
