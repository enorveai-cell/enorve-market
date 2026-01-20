export function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="relative">
                {/* Outer ring */}
                <div className="w-16 h-16 border-4 border-purple-500/20 rounded-full"></div>

                {/* Spinning ring */}
                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>

                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
        </div>
    )
}
