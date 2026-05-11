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

    const columns = [
        [
            {
                category: "CREATE",
                icon: <PenLine size={22} />,
                title: "AI ARTICLE WRITER",
                desc: "NLP-powered, intent-driven content at the speed of thought",
                color: "#A855F7"
            },
            {
                category: "RANK",
                icon: <Search size={22} />,
                title: "SEO KEYWORD PLANNER",
                desc: "Discover high-ranking keywords with real search volume data",
                color: "#0A84FF"
            },
            {
                category: "DISTRIBUTE & MEASURE",
                icon: <Wand2 size={22} />,
                title: "SOCIAL PUBLISHING",
                desc: "Smart scheduling, best-time publishing and unified inbox management",
                color: "#FF4D8D"
            }
        ],

        [
            {
                icon: <Layers3 size={22} />,
                title: "CONTENT STUDIO",
                desc: "Social content, ad copy, product copy, pages, emails & all marketing content",
                color: "#00D7A3"
            },
            {
                icon: <Bot size={22} />,
                title: "GEO: RANK IN AI",
                desc: "Optimize and improve brand rankings in AI-powered search results",
                color: "#FFFFFF"
            },
            {
                icon: <Hash size={22} />,
                title: "SOCIAL LISTENING",
                desc: "Track brand mentions, monitor conversations and discover trends",
                color: "#FF7A00"
            }
        ],

        [
            {
                icon: <Wand2 size={22} />,
                title: "HUMANIZER",
                desc: "Natural rewriting that sounds real, clear and human",
                color: "#FFB800"
            },
            {
                icon: <ShieldCheck size={22} />,
                title: "SITE AUDIT",
                desc: "Audit your website for SEO, speed and technical performance",
                color: "#22D3EE"
            },
            {
                icon: <BarChart3 size={22} />,
                title: "ANALYTICS DASHBOARD",
                desc: "One smart dashboard for performance, analytics and growth insights",
                color: "#84CC16"
            }
        ]
    ];

    return (
        <section className="w-full bg-black py-24 px-5 overflow-hidden">

            <div className="max-w-[1100px] mx-auto">

                {/* Badge */}
                <div className="flex justify-center mb-7">

                    <div className="px-10 py-[10px] rounded-full border border-[#3B82F6]/30
                    bg-[linear-gradient(90deg,#111C77_0%,#6D28D9_100%)]">

                        <span className="text-white text-[18px] font-semibold">
                            Features
                        </span>

                    </div>

                </div>

                {/* Heading */}
                <h2 className="text-center text-white text-[58px] leading-[1.1]
                font-medium tracking-[-2px] mb-20">

                    One Platform for Your Brand’s Growth

                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {columns.map((column, columnIndex) => (

                        <div
                            key={columnIndex}
                            className="flex flex-col gap-8"
                        >

                            {column.map((item, index) => (

                                <div key={index}>

                                    {/* Category */}
                                    {item.category && (

                                        <div className="flex items-center gap-2 mb-4">

                                            <div className="text-[#B3B3B3] text-[14px]">
                                                ✦
                                            </div>

                                            <p className="text-[#7A7A7A] text-[15px] font-medium tracking-[0.3px]">
                                                {item.category}
                                            </p>

                                        </div>

                                    )}

                                    {/* Card */}
                                    <div
                                        className="bg-[#050505]
                                        border border-white/10
                                        rounded-[18px]
                                        min-h-[145px]
                                        px-6 py-6
                                        relative overflow-hidden"
                                        style={{
                                            boxShadow: `inset 1px 0 0 ${item.color}`
                                        }}
                                    >

                                        {/* Glow */}
                                        <div
                                            className="absolute left-0 top-0 bottom-0 w-[3px]"
                                            style={{
                                                background: item.color
                                            }}
                                        />

                                        <div className="flex items-start gap-5">

                                            {/* Icon */}
                                            <div
                                                className="w-[48px] h-[48px]
                                                rounded-[12px]
                                                flex items-center justify-center
                                                shrink-0 border"
                                                style={{
                                                    borderColor: item.color,
                                                    color: item.color,
                                                    background: `${item.color}10`
                                                }}
                                            >
                                                {item.icon}
                                            </div>

                                            {/* Content */}
                                            <div>

                                                <h3
                                                    className="text-[15px] font-semibold mb-5 tracking-[0.2px]"
                                                    style={{
                                                        color: item.color
                                                    }}
                                                >
                                                    {item.title}
                                                </h3>

                                                <p className="text-[#CFCFCF] text-[16px] leading-[1.45]">
                                                    {item.desc}
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default PlatformSection;