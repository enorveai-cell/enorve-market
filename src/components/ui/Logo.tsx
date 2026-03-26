// Enorve logo — custom "e" letterform with diagonal tail

export function EnorveLogoFull({ className = "h-[23px]", variant = "light" }: { className?: string; variant?: "light" | "dark" | "brand" }) {
    const fill = variant === "dark" ? "#ffffff" : "#0F5C38";
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg viewBox="390 290 700 810" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
                <g fill={fill}>
                    <path d="M734.17 952.23C557.58 952.23 413.88 808.63 413.73 632.09C413.88 455.24 557.58 311.64 734.17 311.64C910.87 311.64 1054.62 455.37 1054.62 632.09L1054.62 699.61L734.10 699.25L734.25 564.33L906.96 564.52C879.91 495.53 812.64 446.56 734.17 446.56C631.91 446.56 548.72 529.70 548.64 631.94C548.72 734.17 631.91 817.31 734.17 817.31Z"/>
                    <path d="M430.73 1081.25L1071.03 803.99L590.80 803.99Z"/>
                </g>
            </svg>
            <span className="text-[16px] font-medium tracking-[0.5px] lowercase text-current" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                enorve
            </span>
        </div>
    )
}

// Icon-only variant with background-aware fill
export function EnorveLogoIcon({ className = "w-5 h-5", variant = "light" }: { className?: string; variant?: "light" | "dark" | "brand" }) {
    const fill = variant === "dark" ? "#ffffff" : "#0F5C38";
    return (
        <svg viewBox="390 290 700 810" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g fill={fill}>
                <path d="M734.17 952.23C557.58 952.23 413.88 808.63 413.73 632.09C413.88 455.24 557.58 311.64 734.17 311.64C910.87 311.64 1054.62 455.37 1054.62 632.09L1054.62 699.61L734.10 699.25L734.25 564.33L906.96 564.52C879.91 495.53 812.64 446.56 734.17 446.56C631.91 446.56 548.72 529.70 548.64 631.94C548.72 734.17 631.91 817.31 734.17 817.31Z"/>
                <path d="M430.73 1081.25L1071.03 803.99L590.80 803.99Z"/>
            </g>
        </svg>
    )
}
