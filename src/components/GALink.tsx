import { useGAEvent } from '../hooks/useGAEvent'

interface GALinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    trackingName: string
    trackingLocation: string
}

export function GALink({ trackingName, trackingLocation, onClick, children, ...props }: GALinkProps) {
    const { trackCTA } = useGAEvent()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Track the CTA click
        trackCTA(trackingName, trackingLocation)

        // Call original onClick if provided
        onClick?.(e)
    }

    return (
        <a {...props} onClick={handleClick}>
            {children}
        </a>
    )
}
