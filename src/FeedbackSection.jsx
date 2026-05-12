import img1 from "./assets/images/FeedbackImg/1.avif";
import img2 from "./assets/images/FeedbackImg/2.avif";
import img3 from "./assets/images/FeedbackImg/3.avif";
import img4 from "./assets/images/FeedbackImg/4.avif";

import stars from "./assets/images/stars.svg";
import comma from "./assets/images/comma.svg";
import smile from "./assets/images/emoji-smile.svg";

function FeedbackSection() {

    const reviews = [
        {
            image: img1,
            name: "Michael Brown",
            review:
                "With Capable, I've expanded my network and found genuine connections. The seamless interface makes socializing so much easier."
        },
        {
            image: img2,
            name: "Emily Johnson",
            review:
                "Capable’s features are fantastic for both meeting new people and staying connected with existing friends. It's a must-have app."
        },
        {
            image: img3,
            name: "John Doe",
            review:
                "The intuitive design and smart features of Capable made it easy to find meaningful connections. It's become my go-to app."
        },
        {
            image: img4,
            name: "Emma Johnson",
            review:
                "Capable has truly transformed my social life. I've connected with amazing people and discovered new interests. Highly recommended!"
        }
    ];

    return (

        <section
            id="blog"
            className="w-full bg-white py-[95px] px-5 overflow-hidden"
        >

            {/* TOP */}
            <div className="max-w-[1100px] mx-auto text-center">

                {/* SMALL TAG */}
               <div
    className="
    inline-flex
    items-center
    gap-2
    px-4
    py-1
    rounded-full
    border
    border-[#D9DEE5]
    bg-[#F8F9FB]
    mb-5
    "
>

    <img
        src={smile}
        alt="smile"
        className="w-[14px] h-[14px]"
    />

    <span
        className="text-[13px] leading-[24px] text-[#333]"
        style={{
            fontFamily:
                '"Instrument Sans", sans-serif',
            fontWeight: 500,
        }}
    >
        Our Testimonials
    </span>

</div>

                {/* HEADING */}
                <h2
                    className="
                    text-[45px]
                    leading-[70px]
                    text-[#0C0C0C]
                    "
                    style={{
                        fontFamily:
                            'Urbanist, sans-serif',
                        fontWeight: 700,
                    }}
                >
                    User Reviews and Feedback
                </h2>

                {/* SUBTEXT */}
                <p
                    className="
                    max-w-[720px]
                    mx-auto
                    mt-4
                    text-[14px]
                    leading-[27px]
                    text-[#666]
                    "
                    style={{
                        fontFamily:
                            'Inter, sans-serif',
                        fontWeight: 500,
                    }}
                >
                    See how Capable has transformed users' social experiences <br />
                    through their own words.
                </p>

            </div>

            {/* SLIDERS */}
            <div className="relative max-w-[900px] mx-auto overflow-hidden mt-16">

                {/* LEFT FADE */}
                <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

                {/* RIGHT FADE */}
                <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                {/* TOP ROW */}
                <div className="relative flex overflow-hidden mb-4">

                    <div className="flex animate-scrollLeft gap-4 whitespace-nowrap slider-track">

                        {[...reviews, ...reviews].map((item, index) => (

                            <div
                                key={index}
                                className="
                                min-w-[285px]
                                max-w-[285px]
                                h-[215px]
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

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="
                                        w-[44px]
                                        h-[44px]
                                        rounded-full
                                        object-cover
                                        "
                                    />

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
                                            src={stars}
                                            alt="stars"
                                            className="w-[78px] mt-[2px]"
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

                        {[...reviews, ...reviews].map((item, index) => (

                            <div
                                key={index}
                                className="
                                min-w-[285px]
                                max-w-[285px]
                                h-[215px]
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

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="
                                        w-[44px]
                                        h-[44px]
                                        rounded-full
                                        object-cover
                                        "
                                    />

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
                                            src={stars}
                                            alt="stars"
                                            className="w-[78px] mt-[2px]"
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