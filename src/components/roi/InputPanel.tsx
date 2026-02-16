import { motion } from "framer-motion"
import { Users, TicketCheck, Bot, Timer } from "lucide-react"
import type { ROIInputs } from "../../hooks/useROICalculator"

interface Props {
    inputs: ROIInputs
    onInputChange: <K extends keyof ROIInputs>(key: K, value: ROIInputs[K]) => void
}

export function InputPanel({ inputs, onInputChange }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            {/* Operational Inputs */}
            <div className="p-6 rounded-2xl bg-[#0C0E12] border border-white/5">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-5">
                    Operational Inputs
                </h3>

                <div className="space-y-5">
                    {/* Number of agents */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Users className="w-3.5 h-3.5 text-violet-400" />
                            <label className="text-sm text-gray-300">Number of Agents</label>
                        </div>
                        <input
                            type="number"
                            min={1}
                            max={10000}
                            value={inputs.numberOfAgents}
                            onChange={e => {
                                const val = parseInt(e.target.value) || 1
                                onInputChange("numberOfAgents", val)
                                onInputChange("monthlyTicketVolume", val * 150)
                            }}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20
                transition-colors placeholder-gray-500"
                        />
                    </div>

                    {/* Monthly ticket volume */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <TicketCheck className="w-3.5 h-3.5 text-blue-400" />
                            <label className="text-sm text-gray-300">Monthly Ticket Volume</label>
                        </div>
                        <input
                            type="number"
                            min={1}
                            max={10000000}
                            value={inputs.monthlyTicketVolume}
                            onChange={e => onInputChange("monthlyTicketVolume", parseInt(e.target.value) || 1)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20
                transition-colors placeholder-gray-500"
                        />
                        <p className="text-[11px] text-gray-500 mt-1">Default: agents × 150</p>
                    </div>

                    {/* AI deflection rate */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <Bot className="w-3.5 h-3.5 text-emerald-400" />
                                <label className="text-sm text-gray-300">AI Deflection Rate</label>
                            </div>
                            <span className="text-sm font-medium text-emerald-400 tabular-nums">
                                {Math.round(inputs.aiDeflectionRate * 100)}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={0.80}
                            step={0.01}
                            value={inputs.aiDeflectionRate}
                            onChange={e => onInputChange("aiDeflectionRate", parseFloat(e.target.value))}
                            className="w-full h-1.5 rounded-full appearance-none bg-white/10 cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-emerald-500
                [&::-webkit-slider-thumb]:border-2
                [&::-webkit-slider-thumb]:border-emerald-300
                [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(16,185,129,0.5)]
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-4
                [&::-moz-range-thumb]:h-4
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-emerald-500
                [&::-moz-range-thumb]:border-2
                [&::-moz-range-thumb]:border-emerald-300
                [&::-moz-range-thumb]:cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                            <span>0%</span>
                            <span>80%</span>
                        </div>
                    </div>

                    {/* Average handle time */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <Timer className="w-3.5 h-3.5 text-amber-400" />
                                <label className="text-sm text-gray-300">Avg Handle Time</label>
                            </div>
                            <span className="text-sm font-medium text-white tabular-nums">
                                {inputs.avgHandleTime} min
                            </span>
                        </div>
                        <input
                            type="range"
                            min={2}
                            max={30}
                            step={1}
                            value={inputs.avgHandleTime}
                            onChange={e => onInputChange("avgHandleTime", parseInt(e.target.value))}
                            className="w-full h-1.5 rounded-full appearance-none bg-white/10 cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-amber-500
                [&::-webkit-slider-thumb]:border-2
                [&::-webkit-slider-thumb]:border-amber-300
                [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(245,158,11,0.5)]
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-4
                [&::-moz-range-thumb]:h-4
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-amber-500
                [&::-moz-range-thumb]:border-2
                [&::-moz-range-thumb]:border-amber-300
                [&::-moz-range-thumb]:cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* Financial Inputs */}
            <div className="p-6 rounded-2xl bg-[#0C0E12] border border-white/5">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-5">
                    Financial Inputs
                </h3>

                <div className="space-y-5">
                    {/* Salary */}
                    <div>
                        <label className="text-sm text-gray-300 mb-2 block">Fully Loaded Salary ($/yr)</label>
                        <input
                            type="number"
                            min={0}
                            value={inputs.fullyLoadedSalary}
                            onChange={e => onInputChange("fullyLoadedSalary", parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20
                transition-colors"
                        />
                    </div>

                    {/* Hiring cost */}
                    <div>
                        <label className="text-sm text-gray-300 mb-2 block">Hiring + Onboarding Cost</label>
                        <input
                            type="number"
                            min={0}
                            value={inputs.hiringOnboardingCost}
                            onChange={e => onInputChange("hiringOnboardingCost", parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20
                transition-colors"
                        />
                    </div>

                    {/* Migration cost */}
                    <div>
                        <label className="text-sm text-gray-300 mb-2 block">Migration / Implementation Cost</label>
                        <input
                            type="number"
                            min={0}
                            value={inputs.migrationCost}
                            onChange={e => onInputChange("migrationCost", parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20
                transition-colors"
                        />
                    </div>

                    {/* Discount rate */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-sm text-gray-300">Discount Rate</label>
                            <span className="text-sm font-medium text-white tabular-nums">
                                {Math.round(inputs.discountRate * 100)}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={0.20}
                            step={0.01}
                            value={inputs.discountRate}
                            onChange={e => onInputChange("discountRate", parseFloat(e.target.value))}
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
                </div>
            </div>
        </motion.div>
    )
}
