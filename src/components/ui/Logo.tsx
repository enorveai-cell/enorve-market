// Enorve Flow Mark — Full wordmark lockup (icon + "enorve" text)

export function EnorveLogoFull({ className = "h-[23px]", variant = "light" }: { className?: string; variant?: "light" | "dark" | "brand" }) {
    const containerFill = variant === "dark" ? "#1A8A58" : variant === "brand" ? "rgba(255,255,255,0.12)" : "#0F5C38";
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
                <rect width="56" height="56" rx="13" fill={containerFill}/>
                <rect x="10" y="13" width="30" height="7" rx="3.5" fill="white"/>
                <rect x="10" y="24.5" width="22" height="7" rx="3.5" fill="#22C76E"/>
                <rect x="10" y="36" width="26" height="7" rx="3.5" fill="white"/>
            </svg>
            <span className="text-[16px] font-normal tracking-[1.5px] lowercase text-current" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                enorve
            </span>
        </div>
    )
}

// Icon-only Flow Mark with background-aware variants
export function EnorveLogoIcon({ className = "w-5 h-5", variant = "light" }: { className?: string; variant?: "light" | "dark" | "brand" }) {
    const containerFill = variant === "dark" ? "#1A8A58" : variant === "brand" ? "rgba(255,255,255,0.12)" : "#0F5C38";
    return (
        <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect width="56" height="56" rx="13" fill={containerFill}/>
            <rect x="10" y="13" width="30" height="7" rx="3.5" fill="white"/>
            <rect x="10" y="24.5" width="22" height="7" rx="3.5" fill="#22C76E"/>
            <rect x="10" y="36" width="26" height="7" rx="3.5" fill="white"/>
        </svg>
    )
}
