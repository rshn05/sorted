import saveImage from "./assets/images/Save.png";

function BrandIcon({ type }) {
    const common = {
        width: "100%",
        height: "100%",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

    switch (type) {
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
        {
            id: "google-docs",
            type: "google-docs",
            position: "left-[18%] top-[14%]",
            delay: "0s"
        },
        {
            id: "reddit",
            type: "reddit",
            position: "left-[47%] top-[10%]",
            delay: "0.8s"
        },
        {
            id: "linkedin",
            type: "linkedin",
            position: "left-[65%] top-[14%]",
            delay: "1.4s"
        },
        {
            id: "drive",
            type: "drive",
            position: "right-[14%] top-[18%]",
            delay: "0.5s"
        },
        {
            id: "facebook",
            type: "facebook",
            position: "left-[9%] top-[34%]",
            delay: "1.1s"
        },
        {
            id: "instagram",
            type: "instagram",
            position: "right-[8%] top-[34%]",
            delay: "1.8s"
        },
        {
            id: "sheets",
            type: "sheets",
            position: "left-[27%] top-[46%]",
            delay: "0.3s"
        },
        {
            id: "whatsapp",
            type: "whatsapp",
            position: "right-[22%] top-[45%]",
            delay: "1.6s"
        },
        {
            id: "gmail",
            type: "gmail",
            position: "left-[10%] top-[61%]",
            delay: "0.7s"
        },
        {
            id: "x",
            type: "x",
            position: "right-[9%] top-[60%]",
            delay: "1.3s"
        },
        {
            id: "powerpoint",
            type: "powerpoint",
            position: "left-[18%] top-[77%]",
            delay: "1.9s"
        },
        {
            id: "youtube",
            type: "youtube",
            position: "left-[33%] top-[83%]",
            delay: "0.9s"
        },
        {
            id: "forms",
            type: "forms",
            position: "left-[49%] top-[81%]",
            delay: "1.5s"
        },
        {
            id: "slides",
            type: "slides",
            position: "left-[68%] top-[78%]",
            delay: "0.4s"
        },
        {
            id: "video",
            type: "video",
            position: "right-[14%] top-[75%]",
            delay: "1.2s"
        }
    ];

    return (
        <section className="w-full overflow-hidden bg-white px-3 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">

            <style>
                {`
                    @keyframes sorttedFloat {
                        0%,
                        100% {
                            transform: translate3d(0, 0, 0);
                        }

                        25% {
                            transform: translate3d(0, -5px, 0);
                        }

                        50% {
                            transform: translate3d(0, 2px, 0);
                        }

                        75% {
                            transform: translate3d(0, -3px, 0);
                        }
                    }

                    @keyframes sorttedStar {
                        0%,
                        100% {
                            transform: rotate(0deg) scale(1);
                        }

                        50% {
                            transform: rotate(18deg) scale(1.12);
                        }
                    }

                    @keyframes sorttedDot {
                        0%,
                        100% {
                            transform: scale(1);
                        }

                        50% {
                            transform: scale(1.35);
                        }
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

                {/* Main Visual */}
                <div className="relative mx-auto mt-3 h-[380px] w-full max-w-[1200px] sm:mt-4 sm:h-[420px] md:h-[460px] lg:mt-1 lg:h-[500px]">

                    {/* Dotted paths */}
                    <svg
                        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
                        viewBox="0 0 1000 610"
                        fill="none"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M75 120 C150 85 205 145 285 110 C350 80 370 90 410 120"
                            stroke="#C9C4FF"
                            strokeWidth="1.5"
                            strokeDasharray="4 7"
                            strokeLinecap="round"
                        />

                        <path
                            d="M500 120 C560 85 610 105 670 135 C735 165 820 115 910 130"
                            stroke="#C9C4FF"
                            strokeWidth="1.5"
                            strokeDasharray="4 7"
                            strokeLinecap="round"
                        />

                        <path
                            d="M65 215 C145 185 200 220 225 270 C245 305 205 330 170 330"
                            stroke="#C9C4FF"
                            strokeWidth="1.5"
                            strokeDasharray="4 7"
                            strokeLinecap="round"
                        />

                        <path
                            d="M760 215 C825 190 895 215 930 255 C950 285 930 325 870 330"
                            stroke="#C9C4FF"
                            strokeWidth="1.5"
                            strokeDasharray="4 7"
                            strokeLinecap="round"
                        />

                        <path
                            d="M75 400 C135 380 195 405 220 455 C245 500 210 525 165 540"
                            stroke="#C9C4FF"
                            strokeWidth="1.5"
                            strokeDasharray="4 7"
                            strokeLinecap="round"
                        />

                        <path
                            d="M775 400 C840 380 900 405 925 455 C945 490 920 525 870 540"
                            stroke="#C9C4FF"
                            strokeWidth="1.5"
                            strokeDasharray="4 7"
                            strokeLinecap="round"
                        />

                        <path
                            d="M165 540 C280 570 360 550 415 525 C460 505 540 505 585 525 C650 555 740 570 870 540"
                            stroke="#C9C4FF"
                            strokeWidth="1.5"
                            strokeDasharray="4 7"
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Floating brand icons */}
                    {tools.map((tool) => (
    <div
        key={tool.id}
        className={`absolute z-10 ${tool.position}`}
        style={{
            animationDelay: tool.delay
        }}
    >
        <div className="sortted-floating-icon flex h-11 w-11 items-center justify-center rounded-[11px] border border-[#E8E8F0] bg-white p-2 shadow-[0_6px_18px_rgba(16,24,40,0.12)] sm:h-12 sm:w-12 sm:p-[9px] md:h-14 md:w-14 md:p-[10px]">

            <BrandIcon type={tool.type} />

        </div>
    </div>
))}

                    {/* Top star */}
                    <div className="sortted-star absolute left-[46%] top-[7%] z-10">
                        <svg
                            className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                            viewBox="0 0 24 24"
                            fill="#6338F5"
                            aria-hidden="true"
                        >
                            <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                        </svg>
                    </div>

                    {/* Right star */}
                    <div className="sortted-star absolute right-[27%] top-[29%] z-10">
                        <svg
                            className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                            viewBox="0 0 24 24"
                            fill="#6338F5"
                            aria-hidden="true"
                        >
                            <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                        </svg>
                    </div>

                    {/* Left lightning */}
                    <div className="absolute left-[23%] top-[31%] z-10 rotate-[-15deg]">
                        <svg
                            className="h-5 w-5 sm:h-6 sm:w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M6 13L11 12L9 19L18 9L13 10L15 4L6 13Z"
                                stroke="#6338F5"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    {/* Right lightning */}
                    <div className="absolute right-[26%] top-[54%] z-10 rotate-[15deg]">
                        <svg
                            className="h-5 w-5 sm:h-6 sm:w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M6 13L11 12L9 19L18 9L13 10L15 4L6 13Z"
                                stroke="#6338F5"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    {/* Pink dot */}
                    <span className="sortted-dot absolute left-[7%] top-[22%] z-10 h-2 w-2 rounded-full bg-[#F04DA8] sm:h-2.5 sm:w-2.5" />

                    {/* Orange dots */}
                    <span className="sortted-dot absolute left-[4%] top-[66%] z-10 h-1.5 w-1.5 rounded-full bg-[#FFB13B] sm:h-2 sm:w-2" />

                    <span className="sortted-dot absolute right-[5%] top-[70%] z-10 h-1.5 w-1.5 rounded-full bg-[#FFB13B] sm:h-2 sm:w-2" />

                    {/* Purple dot */}
                    <span className="sortted-dot absolute right-[3%] top-[31%] z-10 h-1.5 w-1.5 rounded-full bg-[#6338F5] sm:h-2 sm:w-2" />

                    {/* Center glow */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 z-[5] h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/20 blur-[45px] sm:h-[210px] sm:w-[210px] md:h-[260px] md:w-[260px]" />

                    {/* Center boy */}
                    <div className="absolute left-1/2 top-1/2 z-20 flex w-[170px] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:w-[230px] md:w-[290px] lg:w-[350px] xl:w-[380px]">

                        <img
                            src={saveImage}
                            alt="Person using multiple marketing and productivity tools"
                            className="h-auto w-full object-contain"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUsSection;