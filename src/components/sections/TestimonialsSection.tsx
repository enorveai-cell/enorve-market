import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote: "Enorve reduced our average response time by 60%. The AI Copilot feels like having an extra 10 agents on the team.",
        author: "Sarah Chen",
        role: "Head of Support",
        company: "TechFlow",
        avatar: "SC",
        rating: 5,
    },
    {
        quote: "Finally, one inbox for everything. We used to juggle 5 different tools. Now our team can focus on actually helping customers.",
        author: "Marcus Johnson",
        role: "Customer Success Lead",
        company: "ScaleUp HQ",
        avatar: "MJ",
        rating: 5,
    },
    {
        quote: "The auto-resolution feature handles 60% of our tickets. Our CSAT actually went up because responses are faster and more consistent.",
        author: "Emily Rodriguez",
        role: "VP of Operations",
        company: "GrowthBrand",
        avatar: "ER",
        rating: 5,
    },
]

export function TestimonialsSection() {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        <span className="text-gradient">Loved by teams</span>
                        <br />
                        <span className="text-white">worldwide.</span>
                    </h2>

                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        See why hundreds of support teams trust Enorve to deliver exceptional customer experiences.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/20 transition-colors"
                        >
                            {/* Quote icon */}
                            <div className="absolute top-6 right-6 text-white/10">
                                <Quote className="w-8 h-8" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <svg key={j} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-300 leading-relaxed mb-6">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.author}</div>
                                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

