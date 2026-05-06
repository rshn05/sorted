function PlatformSection() {

    const features = [
        {
            icon: "✎",
            title: "AI Content Writer",
            heading: "Content at the speed of thought",
            desc: "Generate intent-driven content in seconds using NLP-powered AI that understands what your audience is really searching for.",
            color: "text-[#C084FC]"
        },
        {
            icon: "⌕",
            title: "SEO Keyword Planner",
            heading: "Find keyword, that convert",
            desc: "Discover search volume of keywords and build a data-backed SEO strategy that drives organic traffic to your site.",
            color: "text-[#22C55E]"
        },
        {
            icon: "⌘",
            title: "GEO: Rank in AI",
            heading: "Get cited by AI",
            desc: "Optimize your content to appear in AI-generated search results on ChatGPT, Perplexity, Google Gemini & other LLMs.",
            color: "text-[#E879F9]"
        },
        {
            icon: "⌬",
            title: "Social Media Scheduler",
            heading: "Automate posts and Smart inbox",
            desc: "Schedule posts, auto-publish at peak hours and manage every reply from a single unified inbox, across every platform.",
            color: "text-[#38BDF8]"
        },
        {
            icon: "#",
            title: "Social Listening",
            heading: "Your brand is being talked about",
            desc: "Monitor brand mentions, track sentiment and stay ahead of conversations about your brand across the web, all in real time.",
            color: "text-[#FBBF24]"
        },
        {
            icon: "⌗",
            title: "Analytics Dashboard",
            heading: "Less reporting and more growing",
            desc: "Get a unified view of your content, brand and social performance all in one place, so your every decision is backed by real data.",
            color: "text-[#A78BFA]"
        }
    ];

    return (
        <section className="w-full bg-black py-24 px-5 overflow-hidden">

            <div className="max-w-[1200px] mx-auto">

                <div className="flex justify-center mb-8">

                    <div className="bg-gradient-to-r from-[#312E81] to-[#9333EA] text-white px-8 py-2 rounded-full text-lg font-medium">
                        Features
                    </div>

                </div>

                <h2 className="text-sm md:text-3xl font-bold text-center text-white mb-20">
                    One Platform. Everything you need
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {features.map((item, index) => (

                        <div
                            key={index}
                            className="bg-[#050816] border border-[#312E81] rounded-[24px] p-7 shadow-[0_0_40px_rgba(59,130,246,0.08)] hover:translate-y-[-5px] transition duration-300"
                        >

                            <div className="flex items-center gap-4 mb-8">

                                <div className={`w-14 h-14 rounded-2xl bg-[#0B1120] flex items-center justify-center text-3xl ${item.color}`}>
                                    {item.icon}
                                </div>

                                <div className="bg-black px-4 py-2 rounded-lg">
                                    <h3 className="text-white text-sm font-semibold">
                                        {item.title}
                                    </h3>
                                </div>

                            </div>

                            <h4 className="text-white text-base font-semibold mb-5 leading-tight">
                                {item.heading}
                            </h4>

                            <p className="text-gray-400 leading-6 text-xs">
                                {item.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default PlatformSection;