import saveImage from "./assets/images/boy.png";

function BrandIcon({ type }) {
    const common = {
        width: "100%",
        height: "100%",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

    switch (type) {
        case "content-note":
            return (
                <svg {...common}>
                    <rect x="8" y="6" width="24" height="28" rx="3" fill="#4A3AFF" />
                    <path d="M13 12H27M13 17H27M13 22H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="25" cy="24" r="3" fill="#FFC700" />
                    <path d="M24 25L27 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );

        case "google-docs":
            return (
                <svg {...common}>
                    <rect x="10" y="6" width="20" height="28" rx="3" fill="#4285F4" />
                    <path d="M24 6V13H30" fill="#AECBFA" />
                    <path d="M14 17H26M14 21H26M14 25H23" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
            );

        case "reddit":
            return (
                <svg {...common}>
                    <circle cx="20" cy="21" r="12" fill="#FF4500" />
                    <circle cx="15.5" cy="20" r="2" fill="white" />
                    <circle cx="24.5" cy="20" r="2" fill="white" />
                    <circle cx="16" cy="20" r="0.8" fill="#111827" />
                    <circle cx="24" cy="20" r="0.8" fill="#111827" />
                    <path d="M15 25C18 27 22 27 25 25" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M24 9L27 7" stroke="#FF4500" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="28" cy="6" r="2" fill="#FF4500" />
                </svg>
            );

        case "linkedin":
            return (
                <svg {...common}>
                    <rect x="7" y="7" width="26" height="26" rx="3" fill="#0A66C2" />
                    <circle cx="14" cy="14" r="2.2" fill="white" />
                    <path d="M12 18V27M18 27V22.5C18 20 19.3 18.5 21.5 18.5C23.7 18.5 25 20 25 22.5V27M18 18V27" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            );

        case "drive":
            return (
                <svg {...common}>
                    <path d="M15 7H23L34 26H26L15 7Z" fill="#0F9D58" />
                    <path d="M15 7L6 23L10 30L20 13L15 7Z" fill="#F4B400" />
                    <path d="M10 30H29L34 26H14L10 30Z" fill="#4285F4" />
                </svg>
            );

        case "facebook":
            return (
                <svg {...common}>
                    <circle cx="20" cy="20" r="13" fill="#1877F2" />
                    <path d="M22 13H19.5C17.5 13 16.5 14.2 16.5 16.3V18.5H14V22H16.5V28H20.2V22H22.8L23.3 18.5H20.2V16.8C20.2 15.9 20.6 15.5 21.5 15.5H23V13H22Z" fill="white" />
                </svg>
            );

        case "sheets":
            return (
                <svg {...common}>
                    <rect x="9" y="6" width="22" height="28" rx="3" fill="#0F9D58" />
                    <path d="M24 6V13H31" fill="#34A853" />
                    <path d="M14 17H26M14 21H26M14 25H26" stroke="white" strokeWidth="1.8" />
                    <path d="M18 16V27M22 16V27" stroke="white" strokeWidth="1.5" />
                </svg>
            );

        case "whatsapp":
            return (
                <svg {...common}>
                    <circle cx="20" cy="19" r="12" fill="#25D366" />
                    <path d="M14 30L15.5 25.5" stroke="#25D366" strokeWidth="3" strokeLinecap="round" />
                    <path d="M15 17.5C15.7 20.8 18.5 23.3 21.5 24C23 24.3 24.2 23.5 25 22.3L22.5 20.7L21.2 22C19.5 21.3 18.2 20 17.5 18.4L18.8 17.1L17.2 14.7C16 15.3 14.8 16 15 17.5Z" fill="white" />
                </svg>
            );

        case "instagram":
            return (
                <svg {...common}>
                    <rect x="8" y="8" width="24" height="24" rx="7" fill="url(#instagramGradient)" />
                    <circle cx="20" cy="20" r="5.5" stroke="white" strokeWidth="2" />
                    <circle cx="27" cy="13" r="1.5" fill="white" />
                    <defs>
                        <linearGradient id="instagramGradient" x1="8" y1="32" x2="32" y2="8" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F58529" />
                            <stop offset="0.45" stopColor="#DD2A7B" />
                            <stop offset="1" stopColor="#8134AF" />
                        </linearGradient>
                    </defs>
                </svg>
            );

        case "gmail":
            return (
                <svg {...common}>
                    <path d="M7 12L20 22L33 12V28C33 29.7 31.7 31 30 31H10C8.3 31 7 29.7 7 28V12Z" fill="white" />
                    <path d="M7 12L20 22L33 12" stroke="#EA4335" strokeWidth="3" />
                    <path d="M7 12V28" stroke="#4285F4" strokeWidth="3" />
                    <path d="M33 12V28" stroke="#34A853" strokeWidth="3" />
                </svg>
            );

        case "x":
            return (
                <svg {...common}>
                    <path d="M9 9L18 20.5L9.5 31H13.5L20 23L26.5 31H31L21.5 18.5L29.5 9H25.5L19.5 16L14 9H9Z" fill="#111111" />
                </svg>
            );

        case "powerpoint":
            return (
                <svg {...common}>
                    <rect x="8" y="7" width="24" height="26" rx="3" fill="#D24726" />
                    <path d="M17 13H21.5C25 13 27 14.8 27 17.5C27 20.2 25 22 21.5 22H19.5V27H17V13ZM19.5 15.5V19.5H21.2C23.3 19.5 24.3 18.8 24.3 17.5C24.3 16.2 23.3 15.5 21.2 15.5H19.5Z" fill="white" />
                </svg>
            );

        case "youtube":
            return (
                <svg {...common}>
                    <rect x="6" y="11" width="28" height="18" rx="6" fill="#FF0000" />
                    <path d="M17 15.5L26 20L17 24.5V15.5Z" fill="white" />
                </svg>
            );

        case "forms":
            return (
                <svg {...common}>
                    <rect x="9" y="6" width="22" height="28" rx="3" fill="#673AB7" />
                    <path d="M15 13H25M15 18H25M15 23H22M15 28H25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
            );

        case "slides":
            return (
                <svg {...common}>
                    <rect x="8" y="6" width="24" height="28" rx="3" fill="#F9AB00" />
                    <rect x="13" y="12" width="14" height="11" rx="1" fill="white" />
                    <path d="M13 27H27" stroke="white" strokeWidth="2" />
                </svg>
            );

        case "video":
            return (
                <svg {...common}>
                    <rect x="7" y="10" width="26" height="21" rx="3" fill="#252525" />
                    <path d="M16 10V7H20V10M23 10V7H27V10" stroke="#252525" strokeWidth="2" />
                    <path d="M17 15L26 20.5L17 26V15Z" fill="white" />
                </svg>
            );

        default:
            return null;
    }
}

function WhyChooseUsSection() {
    const tools = [
        { id: "content-note", type: "content-note", position: "left-[23.5%] top-[22.5%]", delay: "0.2s" },
        { id: "google-docs", type: "google-docs", position: "left-[36.5%] top-[21.5%]", delay: "0s" },
        { id: "reddit", type: "reddit", position: "left-[51.5%] top-[20.5%]", delay: "0.8s" },
        { id: "linkedin", type: "linkedin", position: "left-[64%] top-[22.5%]", delay: "1.4s" },
        { id: "drive", type: "drive", position: "left-[79.5%] top-[24.5%]", delay: "0.5s" },
        { id: "facebook", type: "facebook", position: "left-[15.5%] top-[39.5%]", delay: "1.1s" },
        { id: "instagram", type: "instagram", position: "left-[84.5%] top-[38.5%]", delay: "1.8s" },
        { id: "sheets", type: "sheets", position: "left-[30.5%] top-[49.5%]", delay: "0.3s" },
        { id: "whatsapp", type: "whatsapp", position: "left-[73.5%] top-[51.5%]", delay: "1.6s" },
        { id: "gmail", type: "gmail", position: "left-[16.5%] top-[61.5%]", delay: "0.7s" },
        { id: "x", type: "x", position: "left-[83.5%] top-[61.5%]", delay: "1.3s" },
        { id: "powerpoint", type: "powerpoint", position: "left-[23.5%] top-[78.5%]", delay: "1.9s" },
        { id: "youtube", type: "youtube", position: "left-[35%] top-[82.5%]", delay: "0.9s" },
        { id: "forms", type: "forms", position: "left-[49%] top-[83.5%]", delay: "1.5s" },
        { id: "slides", type: "slides", position: "left-[67.5%] top-[82.5%]", delay: "0.4s" },
        { id: "video", type: "video", position: "left-[80.5%] top-[80.5%]", delay: "1.2s" }
    ];

    return (
        <section className="w-full overflow-hidden bg-white px-3 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
            <style>
                {`
                    @keyframes sorttedFloat {
                        0%, 100% { transform: translate3d(0, 0, 0); }
                        25% { transform: translate3d(0, -5px, 0); }
                        50% { transform: translate3d(0, 2px, 0); }
                        75% { transform: translate3d(0, -3px, 0); }
                    }

                    @keyframes sorttedStar {
                        0%, 100% { transform: rotate(0deg) scale(1); }
                        50% { transform: rotate(18deg) scale(1.12); }
                    }

                    @keyframes sorttedDot {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.35); }
                    }

                    .sortted-floating-icon {
                        animation-name: sorttedFloat;
                        animation-duration: 3.8s;
                        animation-timing-function: ease-in-out;
                        animation-iteration-count: infinite;
                        animation-fill-mode: both;
                        will-change: transform;
                    }

                    .sortted-star {
                        animation: sorttedStar 2.8s ease-in-out infinite;
                    }

                    .sortted-dot {
                        animation: sorttedDot 2.2s ease-in-out infinite;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .sortted-floating-icon,
                        .sortted-star,
                        .sortted-dot {
                            animation: none;
                        }
                    }
                `}
            </style>

            <div className="mx-auto w-full max-w-[1200px]">
                {/* Heading */}
                <div className="relative z-20 flex flex-col items-center text-center">
                    <h2 className="text-xl font-semibold leading-tight tracking-[-0.03em] text-[#101828] sm:text-2xl md:text-3xl lg:text-[38px]">
                        Save 50+ Hrs &amp; $800+ Monthly
                    </h2>
                </div>

                {/* Main Visual Frame - Expanded max width */}
                <div className="relative mx-auto mt-4 aspect-[16/9] w-full max-w-[1100px]">
                    {/* Background Graphic containing native paths and character */}
                    <img
                        src={saveImage}
                        alt="Person using multiple marketing and productivity tools"
                        className="h-full w-full object-contain"
                    />

                    {/* Animated Icons Floating on Image Nodes */}
                    {tools.map((tool) => (
                        <div
                            key={tool.id}
                            className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 ${tool.position}`}
                            style={{ animationDelay: tool.delay }}
                        >
                            <div className="sortted-floating-icon flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#E8E8F0] bg-white p-1 shadow-[0_6px_18px_rgba(16,24,40,0.12)] sm:h-11 sm:w-11 md:h-12 md:w-12 md:p-1.5">
                                <BrandIcon type={tool.type} />
                            </div>
                        </div>
                    ))}

                    {/* Decorative Stars and Dots */}
                    <div className="sortted-star absolute left-[45%] top-[10%] z-10">
                        <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="#6338F5">
                            <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                        </svg>
                    </div>

                    <div className="sortted-star absolute right-[32%] top-[30%] z-10">
                        <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="#6338F5">
                            <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                        </svg>
                    </div>

                    <span className="sortted-dot absolute left-[10%] top-[25%] z-10 h-2 w-2 rounded-full bg-[#F04DA8]" />
                    <span className="sortted-dot absolute left-[6%] top-[68%] z-10 h-2 w-2 rounded-full bg-[#FFB13B]" />
                    <span className="sortted-dot absolute right-[8%] top-[72%] z-10 h-2 w-2 rounded-full bg-[#FFB13B]" />
                    <span className="sortted-dot absolute right-[5%] top-[33%] z-10 h-2 w-2 rounded-full bg-[#6338F5]" />
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUsSection;