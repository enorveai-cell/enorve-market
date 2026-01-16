import { cn } from "../../lib/utils"

const logos = [
    { name: "Stripe", className: "text-[#635BFF]" },
    { name: "Shopify", className: "text-[#96BF48]" },
    { name: "Notion", className: "text-white" },
    { name: "Linear", className: "text-[#5E6AD2]" },
    { name: "Vercel", className: "text-white" },
    { name: "Figma", className: "text-white" },
    { name: "Slack", className: "text-[#4A154B]" },
    { name: "Discord", className: "text-[#5865F2]" },
]

export function LogoCloud() {
    return (
        <div className="py-12">
            <p className="text-center text-sm text-gray-500 mb-8 tracking-wide uppercase">
                Trusted by industry leaders
            </p>
            <div className="relative overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                {/* Scrolling logos */}
                <div className="flex animate-marquee">
                    {[...logos, ...logos].map((logo, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center mx-12 text-gray-500 hover:text-white transition-colors"
                        >
                            <span className="text-xl font-semibold tracking-tight opacity-40 hover:opacity-100 transition-opacity">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

interface LogoGridProps {
    className?: string
}

export function LogoGrid({ className }: LogoGridProps) {
    return (
        <div className={cn("py-16", className)}>
            <p className="text-center text-sm text-gray-500 mb-10 tracking-wide uppercase">
                Powering support for innovative companies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-60">
                {logos.map((logo, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                        <span className="text-lg font-medium">{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
