const featureCards = [
    {
        title: "Plan your SEO strategy",
        description: "Find high-potential keywords for your content.",
        color: "#1683E8",
        icon: (
            <svg
                viewBox="0 0 64 64"
                className="h-[52px] w-[52px] scale-[1.1] origin-left"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="30"
                    cy="31"
                    r="23"
                    fill="#1683E8"
                />

                <circle
                    cx="28"
                    cy="28"
                    r="13"
                    fill="white"
                    stroke="#111111"
                    strokeWidth="2"
                />

                <path
                    d="M38 38L49 49"
                    stroke="#111111"
                    strokeWidth="6"
                    strokeLinecap="round"
                />

                <path
                    d="M24 17C29 17 34 20 36 25"
                    stroke="#B9DDFB"
                    strokeWidth="2"
                    strokeLinecap="round"
                />

                <path
                    d="M47 10L49 6M53 14L58 12M51 7L54 4"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },

    {
        title: "Write SEO articles",
        description: "Generate articles designed to rank.",
        color: "#FFC45C",
        icon: (
            <svg
                viewBox="0 0 64 64"
                className="h-[52px] w-[52px] scale-[1.1] origin-left"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="30"
                    cy="31"
                    r="23"
                    fill="#FFC45C"
                />

                <path
                    d="M19 12H38L47 21V47H19V12Z"
                    fill="white"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />

                <path
                    d="M38 12V22H47"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />

                <path
                    d="M24 29H40M24 35H38"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinecap="round"
                />

                <path
                    d="M39 43L48 34L53 39L44 48L38 50L39 43Z"
                    fill="#FFC45C"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        title: "Create every type of content",
        description: "Blogs, ads, emails, social posts & more.",
        color: "#F15D50",
        icon: (
            <svg
                viewBox="0 0 64 64"
                className="h-[52px] w-[52px] scale-[1.1] origin-left"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="30"
                    cy="31"
                    r="23"
                    fill="#F15D50"
                />

                <rect
                    x="15"
                    y="15"
                    width="30"
                    height="29"
                    rx="2"
                    fill="white"
                    stroke="#111111"
                    strokeWidth="2"
                />

                <path
                    d="M15 15H45V22H15V15Z"
                    fill="#FF9D83"
                    stroke="#111111"
                    strokeWidth="2"
                />

                <path
                    d="M21 27V39M27 27V39M21 33H28"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinecap="round"
                />

                <rect
                    x="31"
                    y="31"
                    width="10"
                    height="8"
                    fill="#F8C13E"
                    stroke="#111111"
                    strokeWidth="1.5"
                />

                <path
                    d="M34 35L36 33L39 36"
                    stroke="#111111"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <circle
                    cx="43"
                    cy="17"
                    r="7"
                    fill="white"
                    stroke="#111111"
                    strokeWidth="2"
                />

                <path
                    d="M41 15L46 17L41 19V15Z"
                    fill="#111111"
                />
            </svg>
        ),
    },

    {
        title: "Write in your brand voice",
        description: "Keep every piece of content consistent.",
        color: "#45B96B",
        icon: (
            <svg
                viewBox="0 0 64 64"
                className="h-[52px] w-[52px] scale-[1.1] origin-left"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="30"
                    cy="31"
                    r="23"
                    fill="#45B96B"
                />

                <path
                    d="M15 26C15 18 22 13 31 13C40 13 47 18 47 26C47 34 40 39 31 39H26L19 45L20 37C17 34 15 30 15 26Z"
                    fill="white"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />

                <path
                    d="M22 27H24M27 24V30M31 22V32M35 24V30M40 26V28"
                    stroke="#111111"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />

                <path
                    d="M47 11L49 7M53 14L57 12M51 7L54 4"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
];

function PlatformSection() {
    return (
        <section className="w-full bg-white px-5 py-16 sm:px-8 md:px-10 lg:px-14 xl:px-16">

            <div className="mx-auto w-full max-w-[1150px]">

                {/* Section Label */}
                <p className="mb-4 animate-[sectionFade_1s_ease-out_forwards] text-[27px] font-bold leading-5 text-[#545454] opacity-0">
                    See what Sortted can do

                    
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">

                    {featureCards.map((card, index) => (
                        <div
                            key={card.title}
                            className="group relative min-h-[180px] overflow-visible rounded-[9px] border border-[#DDDDDD] bg-white px-[18px] py-[18px] opacity-0 transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] animate-[cardFade_0.9s_ease-out_forwards] hover:-translate-y-1 hover:border-[#D0D0D0] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                            style={{
                                animationDelay: `${index * 120}ms`,
                            }}
                        >

                            {/* Soft Color Glow */}
                            <div
                                className="pointer-events-none absolute -left-3 -top-3 h-20 w-20 rounded-full opacity-0 blur-2xl transition-all duration-700 ease-out group-hover:scale-125 group-hover:opacity-20"
                                style={{
                                    backgroundColor: card.color,
                                }}
                            />

                            {/* Icon */}
                            <div className="relative flex h-[60px] w-[60px] items-center justify-start overflow-visible">
                                <div className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:scale-[1.08]">
                                    {card.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="relative mt-5 flex items-center gap-1 text-[16px] font-semibold leading-5 tracking-[-0.01em] text-[#111111]">

                                <span className="transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                                    {card.title}
                                </span>

                                {/* <span className="inline-block text-[19px] font-normal leading-none transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                                    →
                                </span> */}

                            </h3>

                            {/* Description */}
                            <p className="relative mt-2 max-w-[235px] text-[14px] font-normal leading-[1.45] text-[#666666] transition-colors duration-600 ease-out group-hover:text-[#444444]">
                                {card.description}
                            </p>

                            {/* Bottom Color Line */}
                            <div
                                className="absolute bottom-0 left-[9px] h-[2px] w-0 rounded-full transition-[width] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%-18px)]"
                                style={{
                                    backgroundColor: card.color,
                                    clipPath: "polygon(0 100%, 2% 0, 98% 0, 100% 100%)",
                                }}
                            />

                            {/* Very Soft Line Glow */}
                            <div
                                className="pointer-events-none absolute bottom-0 left-[9px] h-[5px] w-0 rounded-full opacity-0 blur-[5px] transition-[width,opacity] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%-18px)] group-hover:opacity-25"
                                style={{
                                    backgroundColor: card.color,
                                }}
                            />

                        </div>
                    ))}

                </div>

            </div>

            {/* Animations */}
            <style>
                {`
                    @keyframes cardFade {
                        0% {
                            opacity: 0;
                            transform: translateY(24px);
                        }

                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes sectionFade {
                        0% {
                            opacity: 0;
                            transform: translateY(12px);
                        }

                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .animate-\\[cardFade_0\\.9s_ease-out_forwards\\],
                        .animate-\\[sectionFade_1s_ease-out_forwards\\] {
                            animation: none !important;
                            opacity: 1 !important;
                            transform: none !important;
                        }
                    }
                `}
            </style>

        </section>
    );
}

export default PlatformSection;