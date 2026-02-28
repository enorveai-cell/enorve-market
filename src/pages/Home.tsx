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
        title: "Autonomous Customer Support Platform",
        description: "Support that runs itself. Enorve resolves customer conversations autonomously across WhatsApp, Email, and Chat — with full governance, explainability, and escalation control."
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
