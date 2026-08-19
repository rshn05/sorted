import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    Gift,
    Send,
    TrendingUp,
    Crown,
    Check,
} from "lucide-react";

function PricingSection() {
    const [billing, setBilling] = useState("monthly");
    const navigate = useNavigate();

    const plans = [
        {
            name: "Free",
            monthlyPrice: "$0",
            yearlyPrice: "$0",
            description: "Get started with basic features.",
            icon: Gift,
            iconBg: "bg-[#EDEDED]",
            iconColor: "text-[#000]",
            nameColor: "text-[#000]",
            priceColor: "text-[#000]",
            buttonStyle:
                "border-[1px] border-[#8B91A2] bg-white text-[#101A3A] hover:bg-[#111] hover:border-[#111] hover:text-white",
        },
        {
            name: "Starter",
            monthlyPrice: "$9",
            fullyearlyPrice: "$108",
            yearlyPrice: "$97",
            description: "Perfect for individuals getting started.",
            icon: Send,
            iconBg: "bg-[#EDEDED]",
            iconColor: "text-[#000]",
            nameColor: "text-[#000]",
            priceColor: "text-[#000]",
            buttonStyle:
                "bg-[#111] text-white hover:bg-[#000]",
        },
        {
            name: "Growth",
            monthlyPrice: "$29",
            fullyearlyPrice: "$348",
            yearlyPrice: "$313",
            description: "Everything you need to grow faster.",
            icon: TrendingUp,
            iconBg: "bg-[#E8F1FF]",
            iconColor: "text-[#0B8DE3]",
            nameColor: "text-[#0B8DE3]",
            priceColor: "text-[#0B8DE3]",
            popular: true,
            buttonStyle:
                "bg-[#0B8DE3] text-white hover:bg-[#087DD8]",
        },
        {
            name: "Pro",
            monthlyPrice: "$199",
            fullyearlyPrice: "$2388",
            yearlyPrice: "$1999",
            description: "For agencies and power users.",
            icon: Crown,
            iconBg: "bg-[#E7F6EF]",
            iconColor: "text-[#12834A]",
            nameColor: "text-[#12834A]",
            priceColor: "text-[#12834A]",
            buttonStyle:
                "bg-[#087B47] text-white hover:bg-[#066A3D]",
        },
    ];




    const comparisonRows = [


        {
            feature: "Multi-Client Workspaces",
            values: ["1", "2", "5", "Unlimited"],
        },
        {
            feature: "Brand Voices",
            values: ["1", "2", "5", "Unlimited"],
        },
        {
            feature: "SEO Article Writer",
            note: "(Images, Ranking Insights & Keywords)",
            values: [
                <>
                    1 Article
                    <br />
                    ~upto 500 words
                </>,
                <>
                    5 Articles
                    <br />
                    ~upto 1000 words
                </>,
                <>
                    15 Articles
                    <br />
                    ~upto 2500 words
                </>,
                <>
                    Unlimited
                    <br />
                    ~upto 2500+ words
                </>,
            ],
        },
        {
            feature: "SEO Keyword Analysis",
            note: "(Volume, CPC, competition, keywords)",
            values: ["10", "50", "150", "Unlimited"],
        },
        {
            feature: "Content Studio",
            note: "(Copy, posts, emails, CTA, Scripts etc)",
            values: [
                "10 generations",
                "50 generations",
                "150 generations",
                "Unlimited",
            ],
        },
        {
            feature: "Plagiarism Remover",
            values: [
                "10 checks",
                "50 checks",
                "150 checks",
                "Unlimited",
            ],
        },
        {
            feature: "Save Your Files",
            values: [
                { check: true },
                { check: true },
                { check: true },
                { check: true },
            ],
        },
        {
            feature: "Export Files",
            values: [
                { check: true },
                { check: true },
                { check: true },
                { check: true },
            ],
        },
        {
            feature: "Support",
            values: [
                "",
                "Email",
                "Email",
                "Priority Support",
            ],
        },
    ];

    const getPrice = (plan) => {
        return billing === "monthly"
            ? plan.monthlyPrice
            : plan.yearlyPrice;
    };

    /* SECTION ANIMATION */
    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 45,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    /* HEADER ANIMATION */
    const headerVariants = {
        hidden: {
            opacity: 0,
            y: 25,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    /* CARDS CONTAINER ANIMATION */
    const cardsContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.15,
                staggerChildren: 0.12,
            },
        },
    };

    /* CARD ANIMATION */
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.97,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    /* TABLE ANIMATION */
    const tableVariants = {
        hidden: {
            opacity: 0,
            y: 25,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section
            className="w-full overflow-visible bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-2 xl:px-12"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.12,
            }}
        >
            <div className="mx-auto w-full max-w-[1100px]">

                {/* HEADER */}
                <motion.div
                    className="flex flex-col items-center"
                    variants={headerVariants}
                >

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-center text-[#071535] font-bold leading-tight">
                        Pricing Plans
                    </h2>

                    <p className="mt-2 max-w-[700px] text-xs sm:text-sm md:text-base text-center text-[#65708A] leading-5 sm:leading-6">
                        Everything you need to create, optimize and grow your content.
                    </p>

                    {/* BILLING TOGGLE */}
                    <div className="mt-5 flex items-center rounded-full bg-[#EEF1F9] p-1">

                        <button
                            type="button"
                            onClick={() => setBilling("monthly")}
                            className={`rounded-full px-4 py-2 sm:px-5 md:px-6 text-[11px] sm:text-xs md:text-sm font-medium leading-none transition-all duration-300 ${billing === "monthly"
                                ? "bg-[#ffffff] text-[#4D5673] shadow-sm"
                                : "bg-transparent text-[#737A94]"
                                }`}
                        >
                            Monthly
                        </button>

                        <button
                            type="button"
                            onClick={() => setBilling("yearly")}
                            className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3 py-2 sm:px-4 text-[11px] sm:text-xs md:text-sm font-medium leading-none transition-all duration-300 ${billing === "yearly"
                                ? "bg-white text-[#4D5673] shadow-sm"
                                : "bg-transparent text-[#737A94]"
                                }`}
                        >
                            <span>Yearly</span>

                            <span className="rounded-full bg-[#E5F4D9] px-1.5 py-1 sm:px-2 text-[8px] sm:text-[10px] md:text-xs text-[#28720D] font-semibold leading-none">
                                Saver
                            </span>
                        </button>

                    </div>
                </motion.div>

                {/* PRICING TABLE */}
                <div className="mt-8 sm:mt-10 w-full">

                    {/* DESKTOP / TABLET WRAPPER */}
                    <div className="mx-auto w-full">

                        {/* PRICING CARDS */}
                        <motion.div
                            className="relative overflow-visible"
                            variants={cardsContainerVariants}
                        >
                            <div className="relative rounded-[8px] border-[1px] border-[#D7DCE6]">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[185px_repeat(4,minmax(0,1fr))]">



                                    {/* CHOOSE YOUR PLAN */}
                                    <motion.div
                                        variants={cardVariants}
                                        className="hidden min-h-[270px] items-center rounded-l-[7px] bg-white px-7 lg:flex"
                                    >
                                        <h3 className="text-xl md:text-2xl text-[#071535] font-bold leading-[1.25]">
                                            Choose
                                            <br />
                                            your plan
                                        </h3>
                                    </motion.div>

                                    {/* PLAN CARDS */}
                                    {plans.map((plan) => {
                                        const Icon = plan.icon;

                                        return (
                                            <motion.div
                                                key={plan.name}
                                                variants={cardVariants}
                                                className={`relative z-10 flex min-h-[250px] flex-col items-center justify-center border-b-[1px] border-[#D7DCE6] px-4 sm:px-5 lg:border-b-0 lg:border-l-[1px] ${plan.popular
                                                    ? "bg-[#F4FAFF]"
                                                    : "bg-white"
                                                    } ${plan.name === "Free"
                                                        ? "lg:rounded-l-[7px]"
                                                        : plan.name === "Pro"
                                                            ? "lg:rounded-r-[7px]"
                                                            : ""
                                                    }`}
                                            >

                                                {/* MOST POPULAR */}
                                                {plan.popular && (
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            scaleY: 0.7,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            scaleY: 1,
                                                        }}
                                                        transition={{
                                                            delay: 0.6,
                                                            duration: 0.4,
                                                            ease: [
                                                                0.22,
                                                                1,
                                                                0.36,
                                                                1,
                                                            ],
                                                        }}
                                                        className="absolute left-0 right-0 top-[-11px] z-[999] flex h-[24px] origin-bottom items-center justify-center rounded-t-[8px] bg-[#0C89E8]"
                                                    >
                                                        <span className="text-[9px] sm:text-[10px] md:text-[11px] text-white font-semibold uppercase leading-none tracking-wide">
                                                            Most Popular
                                                        </span>
                                                    </motion.div>
                                                )}

                                                {/* ICON */}
                                                <motion.div
                                                    className={`mt-4 flex h-11 w-11 items-center justify-center rounded-full ${plan.iconBg}`}
                                                    whileHover={{
                                                        scale: 1.1,
                                                        rotate: 4,
                                                    }}
                                                    transition={{
                                                        duration: 0.25,
                                                    }}
                                                >
                                                    <Icon
                                                        className={`h-6 w-6 ${plan.iconColor}`}
                                                        strokeWidth={1.8}
                                                    />
                                                </motion.div>

                                                {/* PLAN NAME */}
                                                <h4
                                                    className={`mt-5 text-base sm:text-lg font-bold leading-5 ${plan.nameColor}`}
                                                >
                                                    {plan.name}
                                                </h4>

                                                {/* PRICE */}
                                                <div className="mt-0 flex flex-col items-start">

                                                    {/* YEARLY STRIKE PRICE */}
                                                    <div className="h-[16px] mb-2 flex items-center">


                                                        {billing === "yearly" && plan.fullyearlyPrice && (
                                                            <div className="flex items-center gap-1.5">
                                                                <span className="text-left ml-4 text-[12px] lg:text-[15px] sm:text-[13px] font-medium leading-4 text-[#737373] line-through">
                                                                    {plan.fullyearlyPrice}
                                                                </span>

                                                                <span className="rounded-full bg-[#E5F4D9] ml-4 px-2 py-0.5 text-[8px] sm:text-[9px] md:text-[10px] font-semibold leading-none text-[#28720D]">
                                                                    {plan.name === "Pro" ? "-16%" : "-10%"}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>



                                                    {/* CURRENT PRICE + PERIOD */}
                                                    <div className="flex items-baseline justify-center gap-1.5">
                                                        <span
                                                            className={`text-3xl sm:text-[34px] font-bold leading-9 ${plan.priceColor}`}
                                                        >
                                                            {getPrice(plan)}
                                                        </span>

                                                        <span className="text-[9px] sm:text-[10px] md:text-[11px] text-[#30384C] leading-4">
                                                            /user/{billing === "monthly" ? "mo" : "yr"}
                                                        </span>
                                                    </div>

                                                </div>

                                                {/* DESCRIPTION */}
                                                <p className="mt-2 min-h-[40px] max-w-[190px] px-2 text-[10px] sm:text-[11px] md:text-xs text-center text-[#596278] leading-4">
                                                    {plan.description}
                                                </p>

                                                {/* BUTTON */}
                                                <motion.button
                                                    type="button"
                                                    onClick={() =>
                                                        navigate("/signup")
                                                    }
                                                    whileHover={{
                                                        scale: 1.04,
                                                    }}
                                                    whileTap={{
                                                        scale: 0.97,
                                                    }}
                                                    className={`mt-4 flex h-[38px] w-[140px] max-w-full items-center justify-center rounded-[4px] text-[11px] sm:text-xs font-medium leading-4 shadow-sm transition-all duration-300 ${plan.buttonStyle}`}
                                                >
                                                    Get Started
                                                </motion.button>

                                            </motion.div>
                                        );
                                    })}

                                </div>

                            </div>
                        </motion.div>

                        {/* SPACE BETWEEN PRICING AND DETAILS */}
                        {/* <div className="h-4" /> */}
                        <p className="sm:text-4xl pt-4 pb-0.5 ml-[10px] md:text-5xl lg:text-[13px] text-[#737373] font-normal leading-tight">
                            Limit renews monthly
                        </p>

                        {/* DETAILS TABLE */}
                        <motion.div
                            className="w-full overflow-x-auto rounded-[8px] border-[1px] border-[#D7DCE6] bg-white"
                            variants={tableVariants}
                        >
                            <div className="min-w-[900px]">

                                {comparisonRows.map((row, rowIndex) => (
                                    <motion.div
                                        key={row.feature}
                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            delay: rowIndex * 0.04,
                                        }}
                                        className={`grid grid-cols-[185px_repeat(4,minmax(0,1fr))] min-h-[42px] ${rowIndex !==
                                            comparisonRows.length - 1
                                            ? "border-b-[1px] border-[#E3E6EC]"
                                            : ""
                                            }`}
                                    >



                                        {/* FEATURE */}
                                        <div className="flex flex-col justify-center border-r-[1px] border-[#E3E6EC] px-3">

                                            <span className="text-[12px] md:text-[13px] text-[#18213A] font-semibold leading-4">
                                                {row.feature}
                                            </span>

                                            {row.note && (
                                                <span className="text-[6px] lg:text-[8.5px] md:text-[2px] text-[#667085]">
                                                    {row.note}
                                                </span>
                                            )}

                                        </div>

                                        {/* VALUES */}
                                        {row.values.map((value, valueIndex) => {
                                            const isCheck =
                                                typeof value === "object" &&
                                                value?.check;

                                            const isLastColumn =
                                                valueIndex ===
                                                row.values.length - 1;

                                            return (
                                                <div
                                                    key={`${row.feature}-${valueIndex}`}
                                                    className={`flex min-h-[42px] items-center justify-center px-2 text-center ${!isLastColumn
                                                        ? "border-r-[1px] border-[#E3E6EC]"
                                                        : ""
                                                        } ${valueIndex === 3
                                                            ? "text-[#16814D]"
                                                            : "text-[#1C2338]"
                                                        }`}
                                                >

                                                    {isCheck ? (
                                                        <span
                                                            className={`flex h-[17px] w-[17px] items-center justify-center rounded-full ${valueIndex === 3
                                                                ? "bg-[#16814D]"
                                                                : valueIndex === 2
                                                                    ? "bg-[#0C89E8]"
                                                                    : valueIndex === 1
                                                                        ? "bg-[#111]"
                                                                        : "bg-[#626B82]"
                                                                }`}
                                                        >
                                                            <Check
                                                                className="h-[10px] w-[10px] text-white"
                                                                strokeWidth={3}
                                                            />
                                                        </span>
                                                    ) : (
                                                        <span className="text-[10px] lg:text-[11.5px] md:text-[11px] leading-4">
                                                            {value}
                                                        </span>
                                                    )}

                                                </div>
                                            );
                                        })}

                                    </motion.div>
                                ))}

                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </motion.section>
    );
}

export default PricingSection;