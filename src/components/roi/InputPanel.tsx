import { motion } from "framer-motion"
import { Users, DollarSign, Bot } from "lucide-react"
import type { LaborInputs } from "../../hooks/useROICalculator"

interface Props {
    inputs: LaborInputs
    onInputChange: <K extends keyof LaborInputs>(key: K, value: LaborInputs[K]) => void
}

export function InputPanel({ inputs, onInputChange }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            {/* Team Inputs */}
            <div className="p-6 rounded-2xl bg-[#0C0E12] border border-white/5">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-5">
                    Your Support Team
                </h3>

                <div className="space-y-5">
                    {/* Current headcount */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Users className="w-3.5 h-3.5 text-violet-400" />
                            <label className="text-sm text-gray-300">Current Support Headcount</label>
                        </div>
                        <input
                            type="number"
                            min={1}
                            max={500}
                            value={inputs.currentHeadcount}
                            onChange={e => onInputChange("currentHeadcount", Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20
                transition-colors placeholder-gray-500"
                        />
                        <p className="text-[11px] text-gray-500 mt-1">Full-time support agents</p>
                    </div>

                    {/* Avg agent cost */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                            <label className="text-sm text-gray-300">Avg Agent Cost ($/yr)</label>
                        </div>
                        <input
                            type="number"
                            min={20000}
                            max={150000}
                            step={1000}
                            value={inputs.avgAgentCost}
                            onChange={e => onInputChange("avgAgentCost", parseInt(e.target.value) || 20000)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20
                transition-colors placeholder-gray-500"
                        />
                        <p className="text-[11px] text-gray-500 mt-1">Fully loaded: salary + benefits + tools + overhead</p>
                    </div>

                    {/* Monthly conversations */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Bot className="w-3.5 h-3.5 text-blue-400" />
                            <label className="text-sm text-gray-300">Monthly Conversations</label>
                        </div>
                        <input
                            type="number"
                            min={100}
                            max={500000}
                            step={100}
                            value={inputs.monthlyConversations}
                            onChange={e => onInputChange("monthlyConversations", parseInt(e.target.value) || 100)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20
                transition-colors placeholder-gray-500"
                        />
                        <p className="text-[11px] text-gray-500 mt-1">Total inbound support conversations</p>
                    </div>

                    {/* Expected automation rate */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <Bot className="w-3.5 h-3.5 text-emerald-400" />
                                <label className="text-sm text-gray-300">Expected Automation Rate</label>
                            </div>
                            <span className="text-sm font-medium text-emerald-400 tabular-nums">
                                {Math.round(inputs.automationRate * 100)}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={0.80}
                            step={0.01}
                            value={inputs.automationRate}
                            onChange={e => onInputChange("automationRate", parseFloat(e.target.value))}
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
                        <p className="text-[11px] text-gray-500 mt-2">
                            Set the automation rate <em>you</em> expect to achieve — Enorve has not yet validated an industry benchmark with customer data.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
