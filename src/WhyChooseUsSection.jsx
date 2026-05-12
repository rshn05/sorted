import logo from "./assets/logo.png";

function WhyChooseUsSection() {

    const sortedFeatures = [
        "Replace 6–9 separate growth tools with one platform",
        "AI content generation with humanization workflows",
        "SEO, SERP & GEO optimization for Google and AI search",
        "Multi-channel publishing, scheduling & repurposing",
        "Unified social listening, engagement & inbox management",
        "Lower software costs with centralized analytics and workflows"
    ];

    const competitorFeatures = [
        "Separate tools for writing, SEO and Socials distribution",
        "Manual coordination across multiple platforms",
        "Limited optimization for AI search and GEO visibility",
        "Fragmented systems create inconsistent growth outcomes",
        "Slower content production and execution",
        "$1500–$2000 monthly costs across separate tools"
    ];

    return (
        <section className="w-full bg-[#F5F5F5] py-24 px-5 overflow-hidden">

            <div className="max-w-[1200px] mx-auto">

                {/* Top Tag */}
                <div className="flex justify-center mb-3">

                    <div className="rounded-full border border-[#1A2A5A] bg-[#0A1635]
                    px-5 py-0.5 text-white text-[13px] font-semibold">

                        Why Choose Us

                    </div>

                </div>

                {/* Heading */}
               <div className="flex flex-col items-center text-center mb-20">

    {/* Main Heading */}
    <h2
        className="
        text-[46px]
        leading-[1.1]
        tracking-[-2.25px]
        text-black
        max-w-[900px]
        "
        style={{
            fontFamily: 'Geist, "Geist Placeholder", sans-serif'
        }}
    >
        Sortted.com is built for modern <br /> growth teams
    </h2>

    {/* Sub Text */}
    <p
        className="
        mt-5
        text-[19px]
        leading-[24px]
        text-[rgba(50,0,94,0.8)]
        "
        style={{
            fontFamily: 'Inter Tight, "Inter Tight Placeholder", sans-serif'
        }}
    >
        Create, rank and distribute
    </p>

</div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* LEFT CARD */}
                    <div
    className="
    relative
    overflow-hidden
    rounded-[28px]
    border border-[rgba(41,137,255,0.2)]
    shadow-[inset_0_0_32px_rgba(116,176,253,0.12),inset_0_3px_12px_rgba(212,232,255,0.08),inset_0_0.5px_0.5px_rgba(212,232,255,0.12)]
    p-8
    "
    style={{
        background: "linear-gradient(#010513 0%, #010821 100%)"
    }}
>

    {/* Logo + Heading */}
    <div className="mb-8">


<div className="flex items-center gap-3 mb-5">

    <div
        className="
        w-[30px]
        h-[30px]
        flex items-center
        justify-center
        overflow-hidden
        "
    >
        <img
            src={logo}
            alt="Sortted Logo"
            className="w-[34px] h-[34px] object-contain"
        />
    </div>

    <h3
        className="
        text-[34px]
        font-medium
        tracking-[-0.03em]
        text-[#EBF3FE]
        "
        style={{
            fontFamily:
                'Geist, "Geist Placeholder", sans-serif'
        }}
    >
        Sortted.com
    </h3>

</div>

        <p
            className="
            text-[rgba(235,243,254,0.8)]
            leading-[1.5]
            tracking-[-0.01em]
            text-[17px]
            "
            style={{
                fontFamily:
                    'Inter Display, "Inter Display Placeholder", sans-serif'
            }}
        >
            Sortted unifies content creation, SEO, GEO,
            site performance, publishing, engagement
            and analytics into one unified growth platform.
        </p>

    </div>

    {/* Features */}
    <div className="space-y-0">

        {[
            "Replace 6–9 separate growth tools with one platform",
            "AI content generation with humanization workflows",
            "SEO, SERP & GEO optimization for Google and AI search",
            "Multi-channel publishing, scheduling & repurposing",
            "Unified social listening, engagement & inbox management",
            "Lower software costs with centralized analytics and workflows"
        ].map((item, index) => (

            <div
                key={index}
                className="
                flex items-center gap-4
                py-5
                border-b border-white/10
                last:border-b-0
                "
            >

                {/* Icon */}
                <div
                    className="
                    w-[26px]
                    h-[26px]
                    rounded-full
                    shrink-0
                    flex items-center
                    justify-center
                    bg-white/5
                    "
                >
                    <span className="text-[#7DD3FC] text-[14px]">
                        ✓
                    </span>
                </div>

                {/* Text */}
                <p
                    className="
                    text-[rgba(235,243,254,0.8)]
                    text-[15px]
                    leading-[1.5]
                    tracking-[-0.01em]
                    "
                    style={{
                        fontFamily:
                            'Inter Display, "Inter Display Placeholder", sans-serif'
                    }}
                >
                    {item}
                </p>

            </div>

        ))}

    </div>

</div>

                    {/* RIGHT CARD */}
<div
    className="
    relative
    overflow-hidden
    rounded-[28px]
    border border-[rgba(255,80,80,0.18)]
    shadow-[inset_0_0_32px_rgba(255,120,120,0.05),inset_0_3px_12px_rgba(255,255,255,0.03)]
    p-8
    "
    style={{
        background: "linear-gradient(#060303 0%, #010513 100%)"
    }}
>

    {/* TOP CONTENT */}
    <div className="mb-8">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-5">

            <h3
                className="
                text-[24px]
                font-medium
                tracking-[-0.03em]
                text-[#EBF3FE]
                "
                style={{
                    fontFamily:
                        'Geist, "Geist Placeholder", sans-serif'
                }}
            >
                Competitor
            </h3>

        </div>

        {/* Description */}
        <p
            className="
            text-[rgba(235,243,254,0.8)]
            leading-[1.5]
            tracking-[-0.01em]
            text-[17px]
            "
            style={{
                fontFamily:
                    'Inter Display, "Inter Display Placeholder", sans-serif'
            }}
        >
            Most teams rely on disconnected tools and
            manual workflows, leading to slower execution,
            higher costs and fragmented visibility.
        </p>

    </div>

    {/* FEATURES */}
    <div className="space-y-0">

        {[
            "Separate tools for writing, SEO and Socials distribution",
            "Manual coordination across multiple platforms",
            "Limited optimization for AI search and GEO visibility",
            "Fragmented systems create inconsistent growth outcomes",
            "Slower content production and execution",
            "$1500–$2000 monthly costs across separate tools"
        ].map((item, index) => (

            <div
                key={index}
                className="
                flex items-center gap-4
                py-5
                border-b border-white/10
                last:border-b-0
                "
            >

                {/* ICON */}
                <div
                    className="
                    w-[26px]
                    h-[26px]
                    rounded-full
                    shrink-0
                    flex items-center
                    justify-center
                    bg-white/5
                    "
                >
                    <span className="text-[#FF5A5A] text-[14px]">
                        ✕
                    </span>
                </div>

                {/* TEXT */}
                <p
                    className="
                    text-[rgba(235,243,254,0.8)]
                    text-[15px]
                    leading-[1.5]
                    tracking-[-0.01em]
                    "
                    style={{
                        fontFamily:
                            'Inter Display, "Inter Display Placeholder", sans-serif'
                    }}
                >
                    {item}
                </p>

            </div>

        ))}

    </div>

</div>

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUsSection;