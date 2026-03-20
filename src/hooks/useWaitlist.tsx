import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { WaitlistModal } from "../components/WaitlistModal"

interface WaitlistContextValue {
    openWaitlist: () => void
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null)

export function WaitlistProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const openWaitlist = useCallback(() => setIsOpen(true), [])
    const closeWaitlist = useCallback(() => setIsOpen(false), [])

    return (
        <WaitlistContext.Provider value={{ openWaitlist }}>
            {children}
            <WaitlistModal isOpen={isOpen} onClose={closeWaitlist} />
        </WaitlistContext.Provider>
    )
}

export function useWaitlist() {
    const ctx = useContext(WaitlistContext)
    if (!ctx) throw new Error("useWaitlist must be used within WaitlistProvider")
    return ctx
}
