import { ChannelStrip } from "../components/sections/ChannelStrip"
import { PlatformSection } from "../components/sections/PlatformSection"
import { AIEngineSection } from "../components/sections/AIEngineSection"
import { IsometricSection } from "../components/sections/IsometricSection"
import { EnterpriseSecuritySection } from "../components/sections/EnterpriseSecuritySection"
import { ConnectStackSection } from "../components/sections/ConnectStackSection"
import { CTASection } from "../components/sections/CTASection"
import { MidPageCTA } from "../components/sections/MidPageCTA"
import { Hero } from "../components/Hero"
import { usePageTitle } from "../hooks/usePageTitle"

export function Home() {
    usePageTitle({
        title: "AI-Powered Customer Support Platform",
        description: "Transform customer support with AI. Enorve combines intelligent automation, unified inbox, and knowledge management to help teams resolve issues faster and delight customers."
    })
    return (
        <>
            <Hero />
            <ChannelStrip />
            <PlatformSection />
            <AIEngineSection />
            <IsometricSection />
            <EnterpriseSecuritySection />
            <MidPageCTA />
            <ConnectStackSection />
            <CTASection />
        </>
    )
}
