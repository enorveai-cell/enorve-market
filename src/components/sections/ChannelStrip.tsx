export function ChannelStrip() {
    const channels = [
        { name: "WhatsApp", color: "text-green-400" },
        { name: "Email", color: "text-blue-400" },
        { name: "Instagram", color: "text-pink-400" },
        { name: "LinkedIn", color: "text-blue-500" },
        { name: "Slack", color: "text-purple-400" },
        { name: "Live Chat", color: "text-orange-400" },
    ]

    return (
        <section className="py-16 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <p className="text-lg text-gray-500 mb-10">Works Across</p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {channels.map((channel) => (
                        <div key={channel.name} className={`flex items-center gap-2 text-xl font-semibold text-white`}>
                            <span className={channel.color}>●</span>
                            {channel.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
