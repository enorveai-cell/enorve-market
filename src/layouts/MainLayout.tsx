import { Outlet } from "react-router-dom"
import { GradientBackground } from "../components/ui/GradientBackground"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { EnhancedFooter } from "../components/sections/EnhancedFooter"

export function MainLayout() {
    return (
        <div className="relative min-h-screen bg-black text-white overflow-x-hidden antialiased">
            <GradientBackground />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <EnhancedFooter />
        </div>
    )
}
