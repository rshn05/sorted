import { useState } from "react";
import cloudImg from "./assets/images/cloude.avif";

function PricingSection() {

    const [billing, setBilling] = useState("monthly");

    const monthlyPlans = [
        {
            name: "Starter",
            price: "$9",
            sub: "month",
            features: [
                "1 Projects",
                "5 AI Articles per month",
                "upto 1000 Word Length",
                "20 SEO Keyword Insights",
                "5 AI-Text Humanizations",
                "Free Article Images",
                "SERP top-rank page analysis",
                "Content ranking-Score",
                "Dashboard + Content Manager",
                "Email Support",
            ],
        },
        {
            name: "Growth",
            price: "$49",
            sub: "month",
            popular: true,
            features: [
                "2 Projects",
                "50 AI Articles per month",
                "upto 2000 Word Length",
                "100 SEO Keyword Insights",
                "50 AI-Text Humanizations",
                "Free Article Images",
                "SERP top-rank page analysis",
                "Content ranking-score",
                "Dashboard + Content Manager",
                "Priority Email Support",
            ],
        },
        {
            name: "Scale",
            price: "$99",
            sub: "month",
            features: [
                "10 Projects",
                "120 AI Articles per month",
                "upto 4000 Word Length",
                "250 SEO Keyword Insights",
                "120 AI-Text Humanizations",
                "Free Article Images",
                "SERP top-rank page analysis",
                "Content ranking-Score",
                "Dashboard + Content Manager",
                "Priority Email Support",
            ],
        },
    ];

    const yearlyPlans = [
        {
            name: "Starter",
            price: "$108",
            sub: "Annually + Extra 3 months",
            features: [
                "1 Projects",
                "5 AI Articles per month",
                "upto 1000 Word Length",
                "20 SEO Keyword Insights",
                "5 AI-Text Humanizations",
                "Free Article Images",
                "SERP top-rank page analysis",
                "Content ranking-Score",
                "Dashboard + Content Manager",
                "Email Support",
            ],
        },
        {
            name: "Growth",
            price: "$588",
            sub: "Annually + Extra 3 months",
            popular: true,
            features: [
                "2 Projects",
                "50 AI Articles per month",
                "upto 2000 Word Length",
                "100 SEO Keyword Insights",
                "50 AI-Text Humanizations",
                "Free Article Images",
                "SERP top-rank page analysis",
                "Content ranking-score",
                "Dashboard + Content Manager",
                "Priority Email Support",
            ],
        },
        {
            name: "Scale",
            price: "$1188",
            sub: "Annually + Extra 3 months",
            features: [
                "10 Projects",
                "120 AI Articles per month",
                "upto 4000 Word Length",
                "250 SEO Keyword Insights",
                "120 AI-Text Humanizations",
                "Free Article Images",
                "SERP top-rank page analysis",
                "Content ranking-Score",
                "Dashboard + Content Manager",
                "Priority Email Support",
            ],
        },
    ];

    const plans =
        billing === "monthly"
            ? monthlyPlans
            : yearlyPlans;

    return (

        <section
            className="relative w-full overflow-hidden py-[100px] px-5"
            style={{
                background:
                    "linear-gradient(180deg,#4B0082 0%,#4B0082 100%)",
            }}
        >

            {/* CLOUD */}
            <img
                src={cloudImg}
                alt="cloud"
                className="
                absolute
                bottom-[-120px]
                left-1/2
                -translate-x-1/2
                w-[1700px]
                max-w-none
                opacity-45
                pointer-events-none
                select-none
                z-0
                "
            />

            <div className="relative z-20 max-w-[1200px] mx-auto">

                {/* HEADING */}
                <div className="text-center">

                    <h2
                        className="
                        text-white
                        text-[56px]
                        leading-[67px]
                        font-normal
                        "
                        style={{
                            fontFamily:
                                '"Plus Jakarta Sans", sans-serif',
                        }}
                    >
                        Plans & Pricing
                    </h2>

                    <p
                        className="
                        mt-2
                        text-[#D0D5D9]
                        text-[16px]
                        leading-[24px]
                        "
                        style={{
                            fontFamily:
                                'Inter, sans-serif',
                        }}
                    >
                        Choose a plan that fits your goals and scale as you grow
                    </p>

                </div>

                {/* TOGGLE */}
                <div className="flex justify-center mt-14">

                    <div
                        className="
                        flex
                        items-center
                        gap-1
                        bg-[#F4F7FB]
                        rounded-[10px]
                        p-[5px]
                        "
                    >

                        <button
                            onClick={() => setBilling("monthly")}
                            className={`
                            px-7 py-2 rounded-[6px]
                            text-[12px]
                            ${
                                billing === "monthly"
                                    ? "bg-[#CDB7FF]"
                                    : "bg-transparent"
                            }
                            `}
                            style={{
                                fontFamily: "sans-serif",
                            }}
                        >
                            Monthly
                        </button>

                        <button
                            onClick={() => setBilling("yearly")}
                            className={`
                            flex items-center gap-2
                            px-4 py-2 rounded-[6px]
                            text-[12px]
                            ${
                                billing === "yearly"
                                    ? "bg-[#CDB7FF]"
                                    : "bg-transparent"
                            }
                            `}
                            style={{
                                fontFamily: "sans-serif",
                            }}
                        >
                            Annual

                            <span
                                className="
                                px-2 py-[2px]
                                rounded-full
                                text-white
                                text-[10px]
                                bg-gradient-to-r
                                from-[#0F7BFF]
                                to-[#D100D1]
                                "
                            >
                                Extra 3 months
                            </span>

                        </button>

                    </div>

                </div>

                {/* CARDS */}
                <div
                    className="
                    mt-12
                    max-w-[1150px]
                    mx-auto
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-8
                    "
                >

                    {plans.map((plan, index) => (

                        <div
                            key={index}
                            className="
                            bg-[#F4F7FB]
                            rounded-[16px]
                            px-5
                            py-5
                            shadow-[0_20px_40px_rgba(0,0,0,0.18)]
                            "
                        >

                            {/* TOP */}
                            <div className="flex items-center gap-2">

                                <p
                                    className="
                                    text-[16px]
                                    leading-[24px]
                                    text-[#0E1C29]
                                    "
                                    style={{
                                        fontFamily:
                                            'Inter, sans-serif',
                                        fontWeight: 400,
                                    }}
                                >
                                    {plan.name}
                                </p>

                                {plan.popular && (

                                    <div
                                        className="
                                        flex items-center gap-1
                                        bg-[#7B4DFF]
                                        text-white
                                        text-[11px]
                                        px-3 py-[5px]
                                        rounded-full
                                        "
                                    >

                                        <span>✦</span>

                                        <span>Popular</span>

                                    </div>

                                )}

                            </div>

                            {/* PRICE */}
                            <div className="mt-5">

                                <div className="flex items-end gap-2">

                                    <h3
                                        className="
                                        text-[36px]
                                        leading-[36px]
                                        text-[#0E1C29]
                                        "
                                        style={{
                                            fontFamily:
                                                'Inter, sans-serif',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {plan.price}
                                    </h3>

                                    <p
                                        className="
                                        text-[14px]
                                        leading-[22px]
                                        text-[#0E1C29]
                                        mb-[2px]
                                        "
                                        style={{
                                            fontFamily:
                                                'Inter, sans-serif',
                                            fontWeight: 400,
                                        }}
                                    >
                                        {plan.sub}
                                    </p>

                                </div>

                            </div>

                            {/* BUTTON */}
                            <button
                                className={`
                                mt-5
                                w-full
                                h-[54px]
                                rounded-[12px]
                                flex items-center justify-center gap-2
                                ${
                                    plan.popular
                                        ? "bg-gradient-to-r from-[#0088FF] to-[#C400D6] text-white shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
                                        : "bg-[#DDE5ED] text-[#0E1C29]"
                                }
                                `}
                            >

                                <span className="text-[15px]">
                                    ♕
                                </span>

                                <span
                                    className="
                                    text-[14px]
                                    leading-[22px]
                                    "
                                    style={{
                                        fontFamily:
                                            'Inter, sans-serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    Get Started
                                </span>

                            </button>

                            {/* DIVIDER */}
                            <div
                                className="
                                my-5
                                border-t
                                border-dashed
                                border-[#BCC7D4]
                                "
                            />

                            {/* PLAN TEXT */}
                            <p
                                className="
                                text-[16px]
                                leading-[24px]
                                text-[#0E1C29]
                                mb-5
                                "
                                style={{
                                    fontFamily:
                                        'Inter, sans-serif',
                                    fontWeight: 400,
                                }}
                            >

                                {plan.name === "Scale"
                                    ? "Dedicated account manager"
                                    : plan.name === "Growth"
                                    ? "Everything in Pro plan"
                                    : "Everything in starter plan"}

                            </p>

                            {/* FEATURES */}
                            <div className="space-y-4">

                                {plan.features.map((item, i) => (

                                    <div
                                        key={i}
                                        className="
                                        flex items-center gap-3
                                        "
                                    >

                                        {/* CHECK */}
                                        <div
                                            className="
                                            w-[16px]
                                            h-[16px]
                                            rounded-full
                                            border
                                            border-[#00B81F]
                                            flex
                                            items-center
                                            justify-center
                                            text-[#00B81F]
                                            text-[10px]
                                            shrink-0
                                            "
                                        >
                                            ✓
                                        </div>

                                        {/* TEXT */}
                                        <p
                                            className="
                                            text-[14px]
                                            leading-[22px]
                                            text-[#0E1C29]
                                            "
                                            style={{
                                                fontFamily:
                                                    'Inter, sans-serif',
                                                fontWeight: 400,
                                            }}
                                        >
                                            {item}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default PricingSection;