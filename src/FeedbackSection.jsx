import img1 from "./assets/images/FeedbackImg/1.avif";
import img2 from "./assets/images/FeedbackImg/2.avif";
import img3 from "./assets/images/FeedbackImg/3.avif";
import img4 from "./assets/images/FeedbackImg/4.avif";

function FeedbackSection() {

    const reviews = [
        {
            image: img1,
            name: "Michael Brown",
            review: "With Capable, I've expanded my network and found genuine connections. The seamless interface makes socializing so much easier."
        },
        {
            image: img2,
            name: "Emily Johnson",
            review: "Capable’s features are fantastic for both meeting new people and staying connected with existing friends. It's a must-have app."
        },
        {
            image: img3,
            name: "John Doe",
            review: "The intuitive design and smart features of Capable made it easy to find meaningful connections. It's become my go-to app."
        },
        {
            image: img4,
            name: "Laura Martinez",
            review: "I’m amazed at how Capable’s advanced privacy controls and customizable features have enhanced my online social experience."
        }
    ];

    return (
        <section className="w-full bg-white py-24 px-5 overflow-hidden">

            <div className="max-w-[1200px] mx-auto">

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-6">
                    User Reviews and Feedback
                </h2>

                {/* Sub Heading */}
                <p className="text-center text-gray-500 text-xs md:text-sm max-w-[650px] mx-auto leading-7 mb-16">
                    See how Capable has transformed users' social experiences through their own words.
                </p>

            </div>

            {/* Slider Container */}
            <div className="relative max-w-[1200px] mx-auto overflow-hidden">

                {/* Left Fade */}
                <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

                {/* Right Fade */}
                <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                {/* Top Slider */}
                <div className="relative flex overflow-hidden mb-6">

                    <div className="flex animate-scrollLeft gap-5 whitespace-nowrap slider-track">

                        {[...reviews, ...reviews].map((item, index) => (

                            <div
                                key={index}
                                className="min-w-[280px] max-w-[280px] bg-[#F8FAFC] border border-gray-200 rounded-[24px] p-5"
                            >

                                {/* Top */}
                                <div className="flex items-start justify-between mb-4">

                                    <div className="flex items-center gap-3">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />

                                        <div>

                                            <h3 className="text-black text-sm font-semibold">
                                                {item.name}
                                            </h3>

                                            <div className="text-yellow-400 text-sm mt-1">
                                                ★★★★★
                                            </div>

                                        </div>

                                    </div>

                                    <div className="text-3xl text-black font-bold">
                                        ”
                                    </div>

                                </div>

                                <div className="border-t border-gray-200 pt-4">

                                    <p className="text-gray-600 leading-7 text-xs whitespace-normal">
                                        {item.review}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Bottom Slider */}
                <div className="relative flex overflow-hidden">

                    <div className="flex animate-scrollRight gap-5 whitespace-nowrap slider-track">

                        {[...reviews, ...reviews].map((item, index) => (

                            <div
                                key={index}
                                className="min-w-[280px] max-w-[280px] bg-[#F8FAFC] border border-gray-200 rounded-[24px] p-5"
                            >

                                {/* Top */}
                                <div className="flex items-start justify-between mb-4">

                                    <div className="flex items-center gap-3">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />

                                        <div>

                                            <h3 className="text-black text-sm font-semibold">
                                                {item.name}
                                            </h3>

                                            <div className="text-yellow-400 text-sm mt-1">
                                                ★★★★★
                                            </div>

                                        </div>

                                    </div>

                                    <div className="text-3xl text-black font-bold">
                                        ”
                                    </div>

                                </div>

                                <div className="border-t border-gray-200 pt-4">

                                    <p className="text-gray-600 leading-7 text-xs whitespace-normal">
                                        {item.review}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

            {/* Animation */}
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