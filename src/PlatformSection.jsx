import {
    PenLine,
    Search,
    Wand2,
    Layers3,
    ShieldCheck,
    BarChart3,
    Hash,
    Bot
} from "lucide-react";

function PlatformSection() {

    const sections = [
        {
            category: "CREATE",
            cards: [
                {
                    icon: <PenLine size={15} strokeWidth={2} />,
                    title: "AI ARTICLE WRITER",
                    desc: "NLP-powered, intent-driven content at the speed of thought",
                    color: "#A855F7"
                },
                {
                    icon: <Layers3 size={15} strokeWidth={2} />,
                    title: "CONTENT STUDIO",
                    desc: "Social content, ad copy, product copy, pages, emails & all marketing content",
                    color: "#00E0B8"
                },
                {
                    icon: <Wand2 size={15} strokeWidth={2} />,
                    title: "HUMANIZER",
                    desc: "Natural rewriting that sounds real, clear and human",
                    color: "#FFB800"
                }
            ]
        },

        {
            category: "RANK",
            cards: [
                {
                    icon: <Search size={15} strokeWidth={2} />,
                    title: "SEO KEYWORD PLANNER",
                    desc: "Discover high-ranking keywords with real search volume data",
                    color: "#0A84FF"
                },
                {
                    icon: <Bot size={15} strokeWidth={2} />,
                    title: "GEO: RANK IN AI",
                    desc: "Optimize and improve brand rankings in AI-powered search results",
                    color: "#FFFFFF"
                },
                {
                    icon: <ShieldCheck size={15} strokeWidth={2} />,
                    title: "SITE AUDIT",
                    desc: "Audit your website for SEO, speed and technical performance",
                    color: "#22D3EE"
                }
            ]
        },

        {
            category: "DISTRIBUTE & MEASURE",
            cards: [
                {
                    icon: <Wand2 size={15} strokeWidth={2} />,
                    title: "SOCIAL PUBLISHING",
                    desc: "Smart scheduling, best-time publishing and unified inbox management",
                    color: "#FF4D8D"
                },
                {
                    icon: <Hash size={15} strokeWidth={2} />,
                    title: "SOCIAL LISTENING",
                    desc: "Track brand mentions, monitor conversations and discover trends",
                    color: "#FF7A00"
                },
                {
                    icon: <BarChart3 size={15} strokeWidth={2} />,
                    title: "ANALYTICS DASHBOARD",
                    desc: "One smart dashboard for performance, analytics and growth insights",
                    color: "#84CC16"
                }
            ]
        }
    ];

    return (
        <section className="w-full bg-black py-20 px-5 overflow-hidden">

            <div className="max-w-[1240px] mx-auto">

                {/* Badge */}
               <div className="flex justify-center mb-6">

    <div
        className="
        px-9 py-[7px]
        rounded-full font-bold
        border border-[rgba(41,137,255,0.2)]
        bg-[linear-gradient(155deg,rgb(0,17,79)_23%,rgba(98,0,150,0.8)_60%)]
        shadow-[inset_0_0_32px_rgba(116,176,253,0.12),inset_0_3px_12px_rgba(212,232,255,0.08),inset_0_0.5px_0.5px_rgba(212,232,255,0.12)]
        "
    >

        <p
            className="text-[22px] font-medium tracking-[0.05em] leading-none text-[#EBF3FE]"
            style={{ fontFamily: "Inter Tight, sans-serif" }}>
                Features
        </p>

    </div>

</div>

                {/* Heading */}
               <h2
    className="text-center text-white
    text-[42px]
    leading-[1.1]
    tracking-[-2.25px]
    font-normal
    mb-16"
    style={{ fontFamily: "Geist, sans-serif" }}
>
    One Platform for Your Brand’s Growth
</h2>

                {/* Sections */}
                <div className="flex flex-col gap-10">

                    {sections.map((section, sectionIndex) => (

                        <div key={sectionIndex}>

                            {/* Category */}
<div className="flex items-center gap-2 mb-2 max-w-[950px] mx-auto">
                                <span className="text-[#D1D5DB] text-[12px]">
                                    ✦
                                </span>

                                <p
                                    className="text-[#8A8A8A]
                                    text-[14px]
                                    tracking-[0.4px]
                                    font-medium
                                    uppercase"
                                    style={{ fontFamily: "sans-serif" }}
                                >
                                    {section.category}
                                </p>

                            </div>

                            {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[950px] mx-auto">
                                {section.cards.map((item, index) => (

                                    <div
                                        key={index}
                                        className="relative
                                        bg-[#050505]
                                        border border-white/10
                                        rounded-[10px]
                                        h-[140px]
                                        px-4 py-4
                                        overflow-hidden"
                                        style={{
                                            boxShadow: `inset 2px 0 0 ${item.color}`
                                        }}
                                    >

                                        {/* Top */}
                                        <div className="flex items-center gap-4 mb-5">

                                            {/* Icon */}
                                            <div
                                                className="w-[38px]
                                                h-[38px]
                                                rounded-[12px]
                                                flex items-center
                                                justify-center
                                                border
                                                shrink-0"
                                                style={{
                                                    borderColor: item.color,
                                                    color: item.color,
                                                    background: `${item.color}10`
                                                }}
                                            >
                                                {item.icon}
                                            </div>

                                            {/* Title */}
                                            <h3
                                                className="text-[14px]
                                                font-semibold
                                                tracking-[0.2px]"
                                                style={{
                                                    color: item.color,
                                                    fontFamily: "sans-serif"
                                                }}
                                            >
                                                {item.title}
                                            </h3>

                                        </div>

                                        {/* Description */}
                                        <p
                                            className="text-[#D1D1D1]
                                            text-[14px]
                                            leading-[1.5]
                                            font-normal
                                            max-w-[95%]"
                                            style={{
                                                fontFamily: "sans-serif"
                                            }}
                                        >

                                            {item.desc}

                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default PlatformSection;