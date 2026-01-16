export function EnhancedFooter() {
    return (
        <footer className="overflow-hidden bg-[#050505] w-full border-t border-white/5 pt-12 pb-0 relative">
            {/* Giant Watermark */}
            <div className="relative w-full overflow-hidden pointer-events-none select-none pt-12">
                <h1 className="text-[20vw] leading-none font-bold text-white/5 text-center -mb-12 tracking-tighter">
                    ENORVE
                </h1>
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent" />
            </div>

        </footer>
    )
}
