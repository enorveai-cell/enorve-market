import { ChannelStrip } from "../components/sections/ChannelStrip"
import { GovernedAutonomySection } from "../components/sections/GovernedAutonomySection"
import { PlatformSection } from "../components/sections/PlatformSection"
import { AIEngineSection } from "../components/sections/AIEngineSection"
import { LanguagesSection } from "../components/sections/LanguagesSection"
import { IsometricSection } from "../components/sections/IsometricSection"
import { EnterpriseSecuritySection } from "../components/sections/EnterpriseSecuritySection"
import { ConnectStackSection } from "../components/sections/ConnectStackSection"
import { CTASection } from "../components/sections/CTASection"
import { MidPageCTA } from "../components/sections/MidPageCTA"
import { Hero } from "../components/Hero"
import { usePageTitle } from "../hooks/usePageTitle"
import { useStructuredData, createOrganizationSchema, createSoftwareApplicationSchema } from "../hooks/useStructuredData"

export function Home() {
    usePageTitle({
        title: "Governed Autonomous AI Operations for E-commerce",
        description: "Your AI handles support. Your team handles exceptions. Enorve autonomously resolves customer conversations across WhatsApp, Email, and Chat — with full governance, explainability, and escalation control."
    })

    // Add structured data for SEO
    useStructuredData([
        createOrganizationSchema(),
        createSoftwareApplicationSchema()
    ])

    return (
        <>
            <Hero />
            <ChannelStrip />
            <GovernedAutonomySection />
            <PlatformSection />
            <AIEngineSection />
            <LanguagesSection />
            <IsometricSection />
            <EnterpriseSecuritySection />
            <MidPageCTA />
            <ConnectStackSection />
            <CTASection />
        </>
    )
}
