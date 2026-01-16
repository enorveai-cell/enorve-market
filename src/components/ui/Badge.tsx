import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { cn } from "../../lib/utils"

interface BadgeProps {
    children: React.ReactNode
    variant?: "default" | "new" | "coming-soon"
    className?: string
    href?: string
}

export function Badge({ children, variant = "default", className, href }: BadgeProps) {
    const variants = {
        default: "bg-white/5 border-white/10 text-gray-300",
        new: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
        "coming-soon": "bg-amber-500/10 border-amber-500/20 text-amber-300",
    }

    const content = (
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full border backdrop-blur-sm",
                variants[variant],
                href && "cursor-pointer hover:bg-white/10 transition-colors",
                className
            )}
        >
            {variant === "new" && <Sparkles className="w-3.5 h-3.5" />}
            {children}
            {href && <ArrowRight className="w-3.5 h-3.5" />}
        </motion.span>
    )

    if (href) {
        return <a href={href}>{content}</a>
    }

    return content
}

export function AnimatedBadge({ children, className }: BadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
        >
            <span
                className={cn(
                    "relative inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full",
                    "bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10",
                    "border border-indigo-500/20",
                    "text-indigo-300",
                    className
                )}
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                {children}
                <ArrowRight className="w-3.5 h-3.5" />
            </span>
        </motion.div>
    )
}
