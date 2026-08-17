import { useState } from "react";
import { useNavigate } from "react-router-dom";

import cloudImg from "./assets/images/cloude.avif";
import fireIcon from "./assets/images/fire.png";
import crownIcon from "./assets/images/crown.png";

function PricingSection() {

    const [billing, setBilling] = useState("monthly");
    const navigate = useNavigate();

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
                        text-[40px]
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
                            text-[15px]
                            transition-all duration-300
                            ${
                                billing === "monthly"
                                    ? "bg-[#CDB7FF]"
                                    : "bg-transparent"
                            }
                            `}
                        >
                            Monthly
                        </button>

                        <button
                            onClick={() => setBilling("yearly")}
                            className={`
                            flex items-center gap-2
                            px-4 py-2 rounded-[6px]
                            text-[15px]
                            transition-all duration-300
                            ${
                                billing === "yearly"
                                    ? "bg-[#CDB7FF]"
                                    : "bg-transparent"
                            }
                            `}
                        >
                            Annual

                            <span
                                className="
                                px-2 py-[2px]
                                rounded-full
                                text-white
                                text-[15px]
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
                    max-w-[1100px]
                    mx-auto
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-8
                    items-start
                    "
                >

                    {plans.map((plan, index) => (

                        <div
                            key={index}
                            className={`
                            bg-[#F4F7FB]
                            rounded-[16px]
                            px-5
                            shadow-[0_20px_40px_rgba(0,0,0,0.18)]
                            transition-all duration-300
                            ${
                                plan.popular
                                    ? "py-5 pb-8"
                                    : "py-5"
                            }
                            `}
                        >

                            {/* TOP */}
                            <div className="flex items-center gap-2">

                                <p
                                    className="
                                    text-[16px]
                                    leading-[24px]
                                    text-[#0E1C29]
                                    font-semibold
                                    "
                                >
                                    {plan.name}
                                </p>

                                {plan.popular && (

                                    <div
                                        className="
                                        flex items-center gap-1.5
                                        bg-[#774BE5]
                                        text-white
                                        text-[15px]
                                        px-3 py-[3px]
                                        rounded-full
                                        border border-white/30
                                        "
                                    >

                                        <img
                                            src={fireIcon}
                                            alt="fire"
                                            className="w-[16px] h-[16px] object-contain"
                                        />

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
                                    >
                                        {plan.sub}
                                    </p>

                                </div>

                            </div>

                            {/* BUTTON */}
                            <button
    onClick={() => navigate("/signup")}
    className={`
    group
    mt-5
    w-full
    h-[45px]
    rounded-[12px]
    flex items-center justify-center gap-2
    shadow-[0_2px_10px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)]
    transition-all duration-300
    ${
        plan.popular
            ? `
            bg-gradient-to-r
            from-[#0088FF]
            to-[#C400D6]
            text-white
            hover:bg-none
            hover:bg-[#1F2937]
            `
            : `
            bg-[#DDE5ED]
            text-[#0E1C29]
            hover:bg-gradient-to-r
            hover:from-[#0088FF]
            hover:to-[#C400D6]
            hover:text-white
            `
    }
    `}
>

                                <img
                                    src={crownIcon}
                                    alt="crown"
                                    className="
                                    w-[18px]
                                    h-[18px]
                                    object-contain
                                    transition-all duration-300
                                    group-hover:brightness-0
                                    group-hover:invert
                                    "
                                />

                                <span
                                    className="
                                    text-[14px]
                                    leading-[22px]
                                    font-medium
                                    "
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
                                            text-[#6B7280]
                                            "
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