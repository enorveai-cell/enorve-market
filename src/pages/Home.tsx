import { ChannelStrip } from "../components/sections/ChannelStrip"
import { GovernedAutonomySection } from "../components/sections/GovernedAutonomySection"
import { PlatformSection } from "../components/sections/PlatformSection"
import { AIEngineSection } from "../components/sections/AIEngineSection"
import { LanguagesSection } from "../components/sections/LanguagesSection"
import { FeatureGridSection } from "../components/sections/FeatureGridSection"
import { EnterpriseSecuritySection } from "../components/sections/EnterpriseSecuritySection"
import { ConnectStackSection } from "../components/sections/ConnectStackSection"
import { CTASection } from "../components/sections/CTASection"
import { MidPageCTA } from "../components/sections/MidPageCTA"
import { Hero } from "../components/Hero"
import { SimulatorTeaser } from "../components/sections/SimulatorTeaser"
import { usePageTitle } from "../hooks/usePageTitle"
import { useStructuredData, createOrganizationSchema, createSoftwareApplicationSchema } from "../hooks/useStructuredData"

export function Home() {
    usePageTitle({
        title: "AI-Powered Customer Support for E-commerce",
        description: "Your AI says exactly what you'd say. Every time. Define exactly how your AI handles refunds, complaints, and escalations — then stress-test it before a real customer ever sees it."
    })

    // Add structured data for SEO
    useStructuredData([
        createOrganizationSchema(),
        createSoftwareApplicationSchema()
    ])

    return (
        <>
            <Hero />
            <SimulatorTeaser />
            <ChannelStrip />
            <PlatformSection />
            <FeatureGridSection />
            <AIEngineSection />
            <GovernedAutonomySection />
            <LanguagesSection />
            <MidPageCTA />
            <ConnectStackSection />
            {/* ENTERPRISE SECURITY SECTION — re-enable post Series A */}
            {/* <EnterpriseSecuritySection /> */}
            <CTASection />
        </>
    )
}
