import img2 from "./assets/images/FeedbackImg/2.avif";
import img4 from "./assets/images/FeedbackImg/4.avif";
import img5 from "./assets/images/FeedbackImg/5.avif";
import img6 from "./assets/images/FeedbackImg/6.png";

import stars5 from "./assets/images/5stars.png";
import stars4 from "./assets/images/4stars.png";
import stars35 from "./assets/images/3.5stars.png";

import comma from "./assets/images/comma.svg";
import smile from "./assets/images/emoji-smile.svg";

function initialsFromName(name) {
    return name
        .trim()
        .split(/\s+/)
        .map((part) => part[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

function FeedbackAvatar({ image, name }) {
    if (image) {
        return (
            <img
                src={image}
                alt={name}
                className="
                w-[44px]
                h-[44px]
                rounded-full
                object-cover
                shrink-0
                "
            />
        );
    }
    return (
        <div
            className="
            w-[44px]
            h-[44px]
            rounded-full
            shrink-0
            flex
            items-center
            justify-center
            bg-[#DDE5ED]
            text-[#3D4F5F]
            text-[14px]
            leading-none
            font-semibold
            "
            style={{ fontFamily: "Urbanist, sans-serif" }}
            aria-label={`${name} initials`}
        >
            {initialsFromName(name)}
        </div>
    );
}

function FeedbackSection() {

    const topReviews = [
        {
            stars: stars5,
            name: "Emma Johnson",
            review:
                "The AI writer creates surprisingly high-quality articles. Saved our team hours every week."
        },
        {
            stars: stars4,
            name: "Maria Brown",
            review:
                "The Humanizer makes AI content sound natural and readable. Huge difference in quality."
        },
        {
            stars: stars35,
            name: "Rohit Shinde",
            review:
                "Our organic traffic started improving after using Sortted’s keyword insights and article optimization."
        },
        {
            image: img4,
            stars: stars5,
            name: "Martin Laura",
            review:
                "Finally a platform that combines AI writing and keyword research in a simple workflow."
        },
        {
            image: img5,
            stars: stars4,
            name: "Rose Taylor",
            review:
                "The SEO keyword planner helped us discover topics we were completely missing."
        }
    ];

    const bottomReviews = [
        {
            image: img6,
            stars: stars35,
            name: "Olivia Anderson",
            review:
                "Content generated through Sortted feels more structured and ranking-focused than other AI tools."
        },
        {
            stars: stars5,
            name: "Ankit Verma",
            review:
                "The Humanizer feature removes the robotic feel from AI content almost instantly."
        },
        {
            stars: stars4,
            name: "Sophia Wilson",
            review:
                "We published articles from Sortted and started seeing better indexing and search visibility."
        },
        {
            stars: stars35,
            name: "Maria Garcia",
            review:
                "Sortted helped us scale content production without sacrificing readability or SEO quality."
        },
        {
            image: img2,
            stars: stars5,
            name: "Amelia Jones",
            review:
                "The combination of SERP analysis, AI writing and humanization makes Sortted genuinely useful for content growth."
        }
    ];

    return (
        <section
            id="blog"
            className="w-full bg-white py-[95px] px-5 overflow-hidden"
        >

            {/* NEXT SECTION PREVIEW */}                 
            <div className="w-full bg-white py-8 sm:py-10 md:py-2">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-center text-black font-bold leading-tight tracking-[-1.5px] px-5">
                    Built to Simplify Work for Millions
                </h3>
            </div>

            {/* SLIDERS */}
            <div className="relative max-w-[1150px] mx-auto overflow-hidden mt-16">

                {/* LEFT FADE */}
                <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

                {/* RIGHT FADE */}
                <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                {/* TOP ROW */}
                <div className="relative flex overflow-hidden mb-4">

                    <div className="flex animate-scrollLeft gap-4 whitespace-nowrap slider-track">

                        {[...topReviews, ...topReviews].map((item, index) => (

                            <div
                                key={index}
                                className="
                                min-w-[300px]
                                max-w-[300px]
                                h-[250px]
                                rounded-[20px]
                                border
                                border-[#DDE5ED]
                                bg-[#F4F7F9]
                                relative
                                overflow-hidden
                                p-5
                                shadow-[0px_8px_24px_rgba(15,23,42,0.06)]
                                "
                            >

                                {/* DOTTED BG */}
                                <div
                                    className="
                                    absolute
                                    bottom-0
                                    left-0
                                    w-full
                                    h-[78%]
                                    pointer-events-none
                                    "
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(#C4CDD7 1px, transparent 1px)",
                                        backgroundSize: "12px 12px",
                                        maskImage:
                                            "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
                                        WebkitMaskImage:
                                            "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
                                        opacity: 0.7,
                                    }}
                                ></div>

                                {/* COMMA */}
                                <img
                                    src={comma}
                                    alt="comma"
                                    className="
                                    absolute
                                    top-5
                                    right-5
                                    w-[18px]
                                    z-10
                                    "
                                />

                                {/* TOP */}
                                <div className="relative z-10 flex items-center gap-3 mb-4">

                                    <FeedbackAvatar image={item.image} name={item.name} />

                                    <div>

                                        <h3
                                            className="
                                            text-[16px]
                                            leading-[24px]
                                            text-[#1C1C1C]
                                            "
                                            style={{
                                                fontFamily:
                                                    'Urbanist, sans-serif',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {item.name}
                                        </h3>

                                        <img
    src={item.stars}
    alt="stars"
    className={`
    mt-[2px]
    object-contain
    ${
        item.stars === stars35
            ? "w-[55px]"
            : item.stars === stars4
            ? "w-[65px]"
            : "w-[78px]"
    }
    `}
/>

                                    </div>

                                </div>

                                {/* LINE */}
                                <div className="relative z-10 border-t border-[#DDE5ED] pt-4">

                                    <p
                                        className="
                                        text-[15px]
                                        leading-[24px]
                                        text-[#333]
                                        whitespace-normal
                                        "
                                        style={{
                                            fontFamily:
                                                'Inter, sans-serif',
                                                fontWeight: 500,
                                        }}
                                    >
                                        {item.review}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* BOTTOM ROW */}
                <div className="relative flex overflow-hidden">

                    <div className="flex animate-scrollRight gap-4 whitespace-nowrap slider-track">

                        {[...bottomReviews, ...bottomReviews].map((item, index) => (

                            <div
                                key={index}
                                className="
                                min-w-[300px]
                                max-w-[300px]
                                h-[250px]
                                rounded-[20px]
                                border
                                border-[#DDE5ED]
                                bg-[#F4F7F9]
                                relative
                                overflow-hidden
                                p-5
                                shadow-[0px_8px_24px_rgba(15,23,42,0.06)]
                                "
                            >

                                {/* DOTTED BG */}
                                <div
                                    className="
                                    absolute
                                    bottom-0
                                    left-0
                                    w-full
                                    h-[78%]
                                    pointer-events-none
                                    "
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(#C4CDD7 1px, transparent 1px)",
                                        backgroundSize: "12px 12px",
                                        maskImage:
                                            "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
                                        WebkitMaskImage:
                                            "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
                                        opacity: 0.7,
                                    }}
                                ></div>

                                {/* COMMA */}
                                <img
                                    src={comma}
                                    alt="comma"
                                    className="
                                    absolute
                                    top-5
                                    right-5
                                    w-[18px]
                                    z-10
                                    "
                                />

                                {/* TOP */}
                                <div className="relative z-10 flex items-center gap-3 mb-4">

                                    <FeedbackAvatar image={item.image} name={item.name} />

                                    <div>

                                        <h3
                                            className="
                                            text-[16px]
                                            leading-[24px]
                                            text-[#1C1C1C]
                                            "
                                            style={{
                                                fontFamily:
                                                    'Urbanist, sans-serif',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {item.name}
                                        </h3>

                                        <img
    src={item.stars}
    alt="stars"
    className={`
    mt-[2px]
    object-contain
    ${
        item.stars === stars35
            ? "w-[55px]"
            : item.stars === stars4
            ? "w-[65px]"
            : "w-[78px]"
    }
    `}
/>

                                    </div>

                                </div>

                                {/* LINE */}
                                <div className="relative z-10 border-t border-[#DDE5ED] pt-4">

                                    <p
                                        className="
                                        text-[15px]
                                        leading-[24px]
                                        text-[#333]
                                        whitespace-normal
                                        "
                                        style={{
                                            fontFamily:
                                                'Inter, sans-serif',
                                                fontWeight: 500,
                                        }}
                                    >
                                        {item.review}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

            {/* ANIMATION */}
            <style>
                {`
                    @keyframes scrollLeft {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    @keyframes scrollRight {
                        0% {
                            transform: translateX(-50%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }

                    .animate-scrollLeft {
                        animation: scrollLeft 35s linear infinite;
                    }

                    .animate-scrollRight {
                        animation: scrollRight 35s linear infinite;
                    }

                    .slider-track:hover {
                        animation-play-state: paused;
                    }

                    .slider-track:active {
                        animation-play-state: paused;
                    }
                `}
            </style>

        </section>
    );
}

export default FeedbackSection;