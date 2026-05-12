import logo from "./assets/images/footer/ftLogo.jpg";

import facebook from "./assets/images/footer/fb.svg";
import instagram from "./assets/images/footer/ig.svg";
import linkedin from "./assets/images/footer/ln.svg";

function FooterSection() {

    return (

        <footer className="w-full bg-[#050505] overflow-hidden">

            <div className="max-w-[900px] mx-auto px-8 pt-[80px] pb-6">

                {/* TOP */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">

                    {/* LEFT */}
                    <div className="flex flex-col justify-between min-h-[200px]">

                        <div>

                            {/* LOGO */}
                            <img
                                src={logo}
                                alt="Sortted"
                                className="w-[92px] object-contain"
                            />

                            {/* SOCIAL */}
                            <div className="flex items-center gap-3 mt-10">

                                <img
                                    src={facebook}
                                    alt="facebook"
                                    className="w-[10px] cursor-pointer opacity-90 hover:opacity-100 transition"
                                />

                                <div className="w-[1px] h-[18px] bg-[#2A2A2A]"></div>

                                <img
                                    src={instagram}
                                    alt="instagram"
                                    className="w-[15px] cursor-pointer opacity-90 hover:opacity-100 transition"
                                />

                                <div className="w-[1px] h-[18px] bg-[#2A2A2A]"></div>

                                <img
                                    src={linkedin}
                                    alt="linkedin"
                                    className="w-[15px] cursor-pointer opacity-90 hover:opacity-100 transition"
                                />

                            </div>

                        </div>

                        {/* BOTTOM LINKS */}
                        <div className="space-y-3">

                            <p
                                className="text-[#8E8E8E] text-[13px] cursor-pointer hover:text-white transition"
                                style={{
                                    fontFamily:
                                        'Inter, sans-serif',
                                    fontWeight: 500,
                                }}
                            >
                                Terms of use
                            </p>

                            <p
                                className="text-[#8E8E8E] text-[13px] cursor-pointer hover:text-white transition"
                                style={{
                                    fontFamily:
                                        'Inter, sans-serif',
                                    fontWeight: 500,
                                }}
                            >
                                Privacy policy
                            </p>

                        </div>

                    </div>

                    {/* EMPTY CENTER */}
                    <div></div>

                    {/* RIGHT */}
                    <div className="grid grid-cols-2 gap-[120px]">

                        {/* FEATURES */}
                        <div className="min-w-[170px]">

                            <h3
                                className="text-white text-[18px] mb-3"
                                style={{
                                    fontFamily:
                                        'Inter, sans-serif',
                                    fontWeight: 700,
                                }}
                            >
                                Features
                            </h3>

                            <div className="space-y-0">

                                {[
                                    "SEO Keyword planner",
                                    "AI Article Writer",
                                    "Content Studio",
                                    "Humanizer",
                                    "GEO: Rank in AI",
                                    "Site Audit",
                                    "Social Listening",
                                    "Social Auto-Publishing"
                                ].map((item, index) => (

                                    <p
                                        key={index}
                                        className="
                                        text-[#9A9A9A]
                                        text-[12px]
                                        leading-[24px]
                                        cursor-pointer
                                        hover:text-white
                                        transition
                                        "
                                        style={{
                                            fontFamily:
                                                'Inter, sans-serif',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {item}
                                    </p>

                                ))}

                            </div>

                        </div>

                        {/* QUICK LINKS */}
                        <div className="min-w-[120px]">

                            <h3
                                className="text-white text-[18px] mb-3"
                                style={{
                                    fontFamily:
                                        'Inter, sans-serif',
                                    fontWeight: 700,
                                }}
                            >
                                Quick Links
                            </h3>

                            <div className="space-y-0">

                                {[
                                    "Home",
                                    "Features",
                                    "Pricing",
                                    "Blogs",
                                    "FAQ",
                                    "Contact us"
                                ].map((item, index) => (

                                    <p
                                        key={index}
                                        className="
                                        text-white
                                        text-[12px]
                                        leading-[24px]
                                        cursor-pointer
                                        hover:text-[#B8B8B8]
                                        transition
                                        "
                                        style={{
                                            fontFamily:
                                                'Inter, sans-serif',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {item}
                                    </p>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

                {/* BOTTOM LINE */}
                <div className="w-full h-[1px] bg-[#1E1E1E] mt-4 mb-4"></div>

                {/* COPYRIGHT */}
                <p
                    className="
                    text-center
                    text-[#8B8B8B]
                    text-[10px]
                    font-bold
                    "
                    style={{
                        fontFamily:
                            'Inter, sans-serif',
                        fontWeight: 500,
                    }}
                >
                    © 2026 SORTTED. All Rights Reserved.
                </p>

            </div>

        </footer>

    );
}

export default FooterSection;