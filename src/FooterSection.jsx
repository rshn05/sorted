import logo from "./assets/images/footer/ftLogo.png";

import facebook from "./assets/images/footer/fb.svg";
import instagram from "./assets/images/footer/ig.svg";
import linkedin from "./assets/images/footer/ln.svg";

function FooterSection() {

    const scrollToSection = (id) => {

        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

    };

    return (

        <footer className="w-full bg-[#101011] overflow-hidden">

            <div className="max-w-[1200px] mx-auto px-8 pt-[80px] pb-6">

                {/* TOP */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">

                    {/* LEFT */}
                    <div className="flex flex-col justify-between min-h-[200px]">

                        <div>

                            {/* LOGO */}
                            <img
                                src={logo}
                                alt="Sortted"
                                className="w-[120px] object-contain"
                            />

                            {/* SOCIAL */}
                            <div className="flex items-center gap-4 mt-10">

                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={facebook}
                                        alt="facebook"
                                        className="w-[12px] cursor-pointer opacity-90 hover:opacity-100 transition"
                                    />
                                </a>

                                <div className="w-[1px] h-[18px] bg-[#2A2A2A]"></div>

                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={instagram}
                                        alt="instagram"
                                        className="w-[22px] cursor-pointer opacity-90 hover:opacity-100 transition"
                                    />
                                </a>

                                <div className="w-[1px] h-[18px] bg-[#2A2A2A]"></div>

                                <a
                                    href="https://www.linkedin.com/company/sorttedtechnologies/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={linkedin}
                                        alt="linkedin"
                                        className="w-[22px] cursor-pointer opacity-90 hover:opacity-100 transition"
                                    />
                                </a>

                            </div>

                        </div>

                        {/* BOTTOM LINKS */}
                        {/* <div className="space-y-3">

                            <a
                                href="/terms"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                block
                                text-[#8E8E8E]
                                text-[16px]
                                hover:text-white
                                transition
                                "
                                style={{
                                    fontFamily:
                                        'Inter, sans-serif',
                                    fontWeight: 500,
                                }}
                            >
                                Terms of Service
                            </a>

                            <a
                                href="/privacy"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                block
                                text-[#8E8E8E]
                                text-[16px]
                                hover:text-white
                                transition
                                "
                                style={{
                                    fontFamily:
                                        'Inter, sans-serif',
                                    fontWeight: 500,
                                }}
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="/refund-policy"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                block
                                text-[#8E8E8E]
                                text-[16px]
                                hover:text-white
                                transition
                                "
                                style={{
                                    fontFamily:
                                        'Inter, sans-serif',
                                    fontWeight: 500,
                                }}
                            >
                                Refund Policy
                            </a>

                        </div> */}

                    </div>

                    {/* EMPTY CENTER */}
                    <div></div>

                    {/* RIGHT */}
                    <div className="grid grid-cols-2 gap-[120px]">

                        {/* FEATURES */}
                        <div className="min-w-[170px]">

                            <h3
                                className="text-white text-[22px] mb-3"
                                style={{
                                    fontFamily:
                                        'Inter, sans-serif',
                                    fontWeight: 700,
                                }}
                            >
                                Features
                            </h3>

                            <div className="space-y-2">

                                {[
                                    "SEO Keyword planner",
                                    "AI Article Writer",
                                    "Content Studio",
                                    // "Humanizer",
                                    // "GEO-AEO: Rank in AI",
                                    // "Site Audit",
                                    // "Social Listening",
                                    // "Social Auto-Publishing"
                                ].map((item, index) => (

                                    <p
                                        key={index}
                                        className="
                                        text-[#9A9A9A]
                                        text-[15px]
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
                                className="text-white text-[22px] mb-3"
                                style={{
                                    fontFamily:
                                        'Inter, sans-serif',
                                    fontWeight: 700,
                                }}
                            >
                                Quick Links
                            </h3>

                            <div className="space-y-2">

                                <p
                                    onClick={() => scrollToSection("home")}
                                    className="
                                    text-white
                                    text-[15px]
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
                                    Home
                                </p>

                                <p
                                    onClick={() => scrollToSection("platform")}
                                    className="
                                    text-white
                                    text-[15px]
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
                                    Features
                                </p>

                                <p
                                    onClick={() => scrollToSection("pricing")}
                                    className="
                                    text-white
                                    text-[15px]
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
                                    Pricing
                                </p>

                                <p><a
                                    href="https://sortted.com/blog"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
    text-white
    text-[15px]
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
                                    Blogs
                                </a>
                                </p>
                                <p
                                    onClick={() => scrollToSection("faq")}
                                    className="
                                    text-white
                                    text-[15px]
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
                                    FAQ
                                </p>

                                <p
                                    onClick={() => scrollToSection("contact")}
                                    className="
                                    text-white
                                    text-[15px]
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
                                    Contact us
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* BOTTOM LINE */}
                {/* <div className="w-full h-[1px] bg-[#1E1E1E] mt-4 mb-4"></div> */}

                {/* COPYRIGHT */}
                {/* <div className="flex flex-col md:flex-row items-center justify-between gap-4">

    <p
        className="
        text-[#8B8B8B]
        text-[14px]
        "
        style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
        }}
    >
        © 2026 SORTTED. All Rights Reserved.
    </p>

    <div className="flex items-center gap-6">

        <a
            href="/terms"
            target="_blank"
            rel="noreferrer"
            className="text-[#8B8B8B] text-[14px] hover:text-white transition"
        >
            Terms of Service
        </a>

        <a
            href="https://sortted.com/privacy"
            target="_blank"
            rel="noreferrer"
            className="text-[#8B8B8B] text-[14px] hover:text-white transition"
        >
            Privacy Policy
        </a>

        <a
            href="/refund-policy"
            target="_blank"
            rel="noreferrer"
            className="text-[#8B8B8B] text-[14px] hover:text-white transition"
        >
            Refund Policy
        </a>

    </div>

</div> */}

            </div>

        </footer>

    );
}

export default FooterSection;