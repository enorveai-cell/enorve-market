import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Settings2 } from "lucide-react"
import type { ROIInputs } from "../../hooks/useROICalculator"

interface Props {
    inputs: ROIInputs
    onInputChange: <K extends keyof ROIInputs>(key: K, value: ROIInputs[K]) => void
}

function formatCurrency(value: number): string {
    return `$${value.toLocaleString()}`
}

function formatPercent(value: number): string {
    return `${Math.round(value * 100)}%`
}

const sensitivityFields: Array<{
    key: keyof ROIInputs
    label: string
    min: number
    max: number
    step: number
    format: (v: number) => string
}> = [
        { key: "fullyLoadedSalary", label: "Fully Loaded Salary ($/yr)", min: 25000, max: 150000, step: 1000, format: formatCurrency },
        { key: "agentUtilization", label: "Agent Utilization", min: 0.4, max: 1, step: 0.05, format: formatPercent },
        { key: "avgHandleTime", label: "Avg Handle Time (min)", min: 2, max: 30, step: 1, format: v => `${v} min` },
        { key: "discountRate", label: "Discount Rate", min: 0, max: 0.20, step: 0.01, format: formatPercent },
        { key: "migrationCost", label: "Migration / Implementation Cost", min: 0, max: 100000, step: 1000, format: formatCurrency },
        { key: "hiringOnboardingCost", label: "Hiring + Onboarding Cost (per agent)", min: 0, max: 25000, step: 500, format: formatCurrency },
    ]

export function SensitivityPanel({ inputs, onInputChange }: Props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl bg-[#0C0E12] border border-white/5 overflow-hidden"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
            >
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                        <Settings2 className="w-4 h-4 text-violet-400" />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-white">Sensitivity Analysis</h3>
                        <p className="text-sm text-gray-400">Advanced financial adjustments</p>
                    </div>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 space-y-5">
                            {sensitivityFields.map(field => (
                                <div key={field.key}>
                                    <div className="flex items-center justify-between mb-2">
                                        <label className="text-sm text-gray-300">{field.label}</label>
                                        <span className="text-sm font-medium text-white tabular-nums">
                                            {field.format(inputs[field.key])}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min={field.min}
                                        max={field.max}
                                        step={field.step}
                                        value={inputs[field.key]}
                                        onChange={e => onInputChange(field.key, parseFloat(e.target.value))}
                                        className="w-full h-1.5 rounded-full appearance-none bg-white/10 cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-4
                      [&::-webkit-slider-thumb]:h-4
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-violet-500
                      [&::-webkit-slider-thumb]:border-2
                      [&::-webkit-slider-thumb]:border-violet-300
                      [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(139,92,246,0.5)]
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-moz-range-thumb]:w-4
                      [&::-moz-range-thumb]:h-4
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-violet-500
                      [&::-moz-range-thumb]:border-2
                      [&::-moz-range-thumb]:border-violet-300
                      [&::-moz-range-thumb]:cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
