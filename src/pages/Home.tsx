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
import { usePageTitle } from "../hooks/usePageTitle"
import { useStructuredData, createOrganizationSchema, createSoftwareApplicationSchema } from "../hooks/useStructuredData"

export function Home() {
    usePageTitle({
        title: "AI-Powered Customer Support for E-commerce",
        description: "Your AI handles support. Your team handles exceptions. Enorve answers your customers' questions across WhatsApp, Email, and Chat — instantly and accurately."
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
            <PlatformSection />
            <FeatureGridSection />
            <AIEngineSection />
            <GovernedAutonomySection />
            <LanguagesSection />
            <MidPageCTA />
            <ConnectStackSection />
            <EnterpriseSecuritySection />
            <CTASection />
        </>
    )
}
