import { useEffect } from 'react'

export function usePageTitle(title: string) {
    useEffect(() => {
        const previousTitle = document.title
        document.title = title ? `${title} | Enorve` : 'Enorve - AI-Powered Customer Support Platform'

        return () => {
            document.title = previousTitle
        }
    }, [title])
}
