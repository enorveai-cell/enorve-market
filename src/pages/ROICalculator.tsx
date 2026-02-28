import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Download, ArrowLeft, AlertTriangle, Info } from "lucide-react"
import { Button } from "../components/ui/Button"
import { usePageTitle } from "../hooks/usePageTitle"
import { useROICalculator } from "../hooks/useROICalculator"
import { ExecutiveSummary } from "../components/roi/ExecutiveSummary"
import { HeadcountChart } from "../components/roi/HeadcountChart"
import { CostBreakdownChart } from "../components/roi/CostBreakdownChart"
import { ProjectionChart } from "../components/roi/ProjectionChart"
import { SensitivityPanel } from "../components/roi/SensitivityPanel"
import { InputPanel } from "../components/roi/InputPanel"
import { generateROIPdf } from "../utils/roiPdfExport"

export function ROICalculator() {
    usePageTitle({
        title: "ROI Calculator — Support Economics Engine | Enorve",
        description:
            "Calculate your total support operating cost savings with Enorve vs Zendesk, Intercom, and Freshdesk. Enterprise-grade ROI analysis with PDF export.",
    })

    const { inputs, setInput, results } = useROICalculator()

    return (
        <div className="pt-28 pb-20 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        to="/pricing"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Pricing
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs text-emerald-400 font-medium">Support Economics Engine</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                                Total Cost of Support
                            </h1>
                            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                                Compare your total support operating cost — not just subscription price — across platforms over 3 years.
                            </p>
                        </div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                            <Button
                                variant="outline"
                                onClick={() => generateROIPdf(inputs, results)}
                                icon={<Download className="w-4 h-4" />}
                                iconPosition="left"
                            >
                                Download Executive ROI Report
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[340px_1fr] gap-8">
                    {/* Left Sidebar — Inputs */}
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <InputPanel inputs={inputs} onInputChange={setInput} />
                    </div>

                    {/* Right Content — Results */}
                    <div className="space-y-8">
                        {/* Warnings */}
                        {results.warnings.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-3"
                            >
                                {results.warnings.map((warning, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20"
                                    >
                                        <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-amber-400/90">{warning}</p>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {/* Section 1: Executive Summary */}
                        <ExecutiveSummary results={results} />

                        {/* Section 2: Headcount Impact */}
                        <HeadcountChart results={results} />

                        {/* Section 3: Cost Breakdown */}
                        <CostBreakdownChart results={results} />

                        {/* Section 4: 3-Year Projection */}
                        <ProjectionChart results={results} />

                        {/* Section 5: Sensitivity Panel */}
                        <SensitivityPanel inputs={inputs} onInputChange={setInput} />

                        {/* Savings Table */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="p-6 rounded-2xl bg-[#0C0E12] border border-white/5"
                        >
                            <h3 className="text-lg font-medium text-white mb-4">Detailed Savings Comparison</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left py-3 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Comparison</th>
                                            <th className="text-right py-3 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Annual Savings</th>
                                            <th className="text-right py-3 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">3-Year Cumulative</th>
                                            <th className="text-right py-3 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">NPV</th>
                                            <th className="text-right py-3 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Payback</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {results.savingsVsCompetitors.map((s, i) => (
                                            <tr key={s.competitor} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}>
                                                <td className="py-3 px-4 text-sm text-white font-medium">
                                                    Enorve vs {s.competitor}
                                                </td>
                                                <td className={`py-3 px-4 text-sm text-right font-medium tabular-nums ${s.annualSavings >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                                                    {s.annualSavings >= 0 ? "+" : ""}${Math.abs(s.annualSavings).toLocaleString("en-US", { maximumFractionDigits: 0 })}
                                                </td>
                                                <td className={`py-3 px-4 text-sm text-right tabular-nums ${s.threeYearCumulative >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                                                    ${Math.abs(s.threeYearCumulative).toLocaleString("en-US", { maximumFractionDigits: 0 })}
                                                </td>
                                                <td className={`py-3 px-4 text-sm text-right tabular-nums ${s.npv >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                                                    ${Math.abs(s.npv).toLocaleString("en-US", { maximumFractionDigits: 0 })}
                                                </td>
                                                <td className="py-3 px-4 text-sm text-right text-gray-400 tabular-nums">
                                                    {s.paybackMonths === null
                                                        ? "—"
                                                        : s.paybackMonths === 0
                                                            ? "Immediate"
                                                            : `${s.paybackMonths} mo`}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Legal Disclaimer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-start gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5"
                        >
                            <Info className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                            <div className="text-xs text-gray-500 leading-relaxed space-y-1">
                                <p>
                                    <strong className="text-gray-400">Disclaimer:</strong> Competitor pricing is based on publicly available
                                    list prices as of January 2026. Actual costs may vary based on negotiated contracts, usage volumes,
                                    and vendor-specific terms. This analysis is for informational purposes only and does not constitute
                                    financial advice.
                                </p>
                                <p>
                                    Enorve maintains a quarterly pricing review process to keep competitor benchmarks current.
                                </p>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="relative p-8 rounded-[24px] bg-gradient-to-br from-emerald-500/10 to-violet-500/10 border border-emerald-500/20 text-center overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)]" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
                                    Ready to reduce your support costs?
                                </h3>
                                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                                    Request Beta Access with Enorve today and see real savings within months.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <a href="https://app.enorve.com/">
                                        <Button variant="primary">
                                            Request Beta Access Free
                                        </Button>
                                    </a>
                                    <Link to="/contact-sales">
                                        <Button variant="outline">
                                            Talk to Sales
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
