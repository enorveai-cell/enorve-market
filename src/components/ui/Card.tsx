import { cn } from "../../lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "gradient" | "bordered"
    hover?: boolean
    children: React.ReactNode
}

export function Card({
    variant = "default",
    hover = true,
    className,
    children,
    ...props
}: CardProps) {
    const variants = {
        default: "bg-zinc-900/50 border-white/5",
        glass: "bg-white/5 backdrop-blur-xl border-white/10",
        gradient: "bg-gradient-to-br from-white/10 to-white/5 border-white/10",
        bordered: "bg-transparent border-white/10",
    }

    return (
        <div
            className={cn(
                "relative rounded-2xl border p-6 transition-all duration-300",
                variants[variant],
                hover && "hover:bg-white/[0.08] hover:border-white/20 hover:shadow-xl hover:shadow-indigo-500/5",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

interface FeatureCardProps {
    icon: React.ReactNode
    title: string
    description: string
    className?: string
    gradient?: string
}

export function FeatureCard({
    icon,
    title,
    description,
    className,
    gradient = "from-indigo-500 to-purple-500",
}: FeatureCardProps) {
    return (
        <Card
            variant="glass"
            className={cn("group relative overflow-hidden", className)}
        >
            {/* Gradient glow on hover */}
            <div
                className={cn(
                    "absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
                    `bg-gradient-to-r ${gradient}`
                )}
                style={{ opacity: 0.1 }}
            />

            <div className="relative z-10">
                <div
                    className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                        "bg-gradient-to-br",
                        gradient,
                        "text-white shadow-lg"
                    )}
                    style={{ boxShadow: `0 8px 32px -8px rgba(99, 102, 241, 0.5)` }}
                >
                    {icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
        </Card>
    )
}

interface StatCardProps {
    value: string
    label: string
    className?: string
}

export function StatCard({ value, label, className }: StatCardProps) {
    return (
        <div className={cn("text-center", className)}>
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {value}
            </div>
            <div className="text-gray-400 text-sm">{label}</div>
        </div>
    )
}
