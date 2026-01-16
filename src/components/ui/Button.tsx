import { cn } from "../../lib/utils"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ButtonProps {
    variant?: "primary" | "secondary" | "ghost" | "outline"
    size?: "sm" | "md" | "lg"
    icon?: React.ReactNode
    iconPosition?: "left" | "right"
    children: React.ReactNode
    className?: string
    onClick?: () => void
    disabled?: boolean
    type?: "button" | "submit" | "reset"
}

export function Button({
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    className,
    children,
    onClick,
    disabled,
    type = "button",
}: ButtonProps) {
    const baseStyles = "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full disabled:opacity-50 disabled:pointer-events-none cursor-pointer"

    const variants = {
        primary: "bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10",
        secondary: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 shadow-lg shadow-indigo-500/25",
        ghost: "bg-transparent text-white hover:bg-white/10",
        outline: "bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40",
    }

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
        </motion.button>
    )
}

interface GlowButtonProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

export function GlowButton({
    className,
    children,
    onClick,
}: GlowButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={cn(
                "group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all duration-300 cursor-pointer",
                "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                "hover:shadow-[0_0_40px_8px_rgba(99,102,241,0.3)]",
                className
            )}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
        </motion.button>
    )
}

interface ShimmerButtonProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

export function ShimmerButton({
    className,
    children,
    onClick,
}: ShimmerButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={cn(
                "group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-full overflow-hidden cursor-pointer",
                "bg-white text-black",
                className
            )}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
            <div className="absolute inset-0 animate-shimmer" />
        </motion.button>
    )
}
