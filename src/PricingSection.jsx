import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

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
            discount: "-10%",
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
            discount: "-10%",
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
            monthlyPrice: "$1999",
            fullyearlyPrice: "$3349",
            yearlyPrice: "$1999",
            discount: "-40%",
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
            note: "(Images, Ranking Insights & Optimize)",
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

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 35,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const headerVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const cardsContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.08,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 25,
            scale: 0.98,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const tableVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section
            id="pricing"
            className="scroll-mt-[120px] w-full overflow-visible bg-white px-3 py-8 sm:px-5 sm:py-10 md:px-6 md:py-12 lg:px-8 lg:py-[15px] xl:px-10"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.08,
            }}
        >
            <div className="mx-auto w-full max-w-[1100px]">

                {/* HEADER */}
                <motion.div
                    className="flex flex-col items-center"
                    variants={headerVariants}
                >
                    <h2 className="text-center text-3xl font-bold leading-tight text-[#071535] sm:text-4xl md:text-5xl lg:text-[50px]">
                        Pricing Plans
                    </h2>

                    <p className="mt-2 max-w-[700px] px-2 text-center text-xs leading-5 text-[#65708A] sm:text-sm sm:leading-6 md:text-base">
                        Everything you need to create, optimize and grow your
                        content.
                    </p>

                    {/* BILLING TOGGLE */}
                    <div className="relative mt-5 flex items-center rounded-full bg-[#DDE3EE] p-1">

                        <motion.div
                            layout
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 32,
                            }}
                            className={`absolute top-1 bottom-1 rounded-full bg-white shadow-sm ${billing === "monthly"
                                    ? "left-1 right-[59%]"
                                    : "left-[43%] right-1"
                                }`}
                        />

                        <button
                            type="button"
                            onClick={() => setBilling("monthly")}
                            className={`relative z-10 flex h-[34px] items-center justify-center rounded-full px-4 text-[11px] font-medium leading-none transition-colors duration-200 sm:px-5 sm:text-xs md:px-6 md:text-sm ${billing === "monthly"
                                    ? "text-[#4D5673]"
                                    : "text-[#737A94]"
                                }`}
                        >
                            Monthly
                        </button>

                        <button
                            type="button"
                            onClick={() => setBilling("yearly")}
                            className={`relative z-10 flex h-[34px] items-center justify-center gap-1.5 rounded-full px-4 text-[11px] font-medium leading-none transition-colors duration-200 sm:gap-2 sm:px-5 sm:text-xs md:px-6 md:text-sm ${billing === "yearly"
                                    ? "text-[#4D5673]"
                                    : "text-[#737A94]"
                                }`}
                        >
                            <span>Yearly</span>

                            <span className="rounded-full bg-[#E5F4D9] px-1.5 py-1 text-[8px] font-semibold leading-none text-[#28720D] sm:px-2 sm:text-[10px] md:text-xs">
                                Saver
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* PRICING AREA */}
                <div className="mt-12 w-full sm:mt-14 md:mt-16 lg:mt-16">

                    {/* PRICING CARDS */}
                    <motion.div
                        className="relative w-full overflow-visible"
                        variants={cardsContainerVariants}
                    >
                        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-[190px_repeat(4,minmax(0,1fr))] lg:gap-0">

                            {/* CHOOSE YOUR PLAN */}
                            <motion.div
                                variants={cardVariants}
                                className="hidden min-h-[250px] items-center rounded-[8px] border-[1px] border-[#D7DCE6] bg-white px-5 lg:flex"
                            >
                                <h3 className="text-xl font-bold leading-[1.25] text-[#071535] md:text-2xl">
                                    Choose
                                    <br />
                                    your plan
                                </h3>
                            </motion.div>

                            {/* PLAN CARDS */}
                            {plans.map((plan) => {
                                const Icon = plan.icon;

                                const cardSpacing =
                                    plan.name === "Growth" ||
                                        plan.name === "Pro"
                                        ? "mt-5 sm:mt-5 lg:mt-0"
                                        : "";

                                const cardBackground = plan.popular
                                    ? "bg-[#F4FAFF]"
                                    : "";

                                const cardRadius = "rounded-[8px]";

                                const cardClassName =
                                    "relative z-30 flex min-h-[270px] w-full flex-col items-center justify-center border-[1px] border-[#D7DCE6] bg-white px-4 py-5 sm:min-h-[270px] lg:min-h-[250px] lg:px-3 " +
                                    cardSpacing +
                                    " " +
                                    cardBackground +
                                    " " +
                                    cardRadius +
                                    " hover:border-[#9CA3AF]";

                                return (
                                    <motion.div
                                        key={plan.name}
                                        variants={cardVariants}
                                        whileHover={{
                                            y: -7,
                                            boxShadow:
                                                "0 16px 32px rgba(0, 0, 0, 0.10)",
                                        }}
                                        transition={{
                                            duration: 0.28,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className={cardClassName}
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
                                                    delay: 0.5,
                                                    duration: 0.35,
                                                    ease: [
                                                        0.22,
                                                        1,
                                                        0.36,
                                                        1,
                                                    ],
                                                }}
                                                className="absolute left-[-1px] right-[-1px] top-[-11px] z-[999] flex h-[24px] origin-bottom items-center justify-center rounded-t-[8px] bg-[#0C89E8]"
                                            >
                                                <span className="text-[9px] font-semibold uppercase leading-none tracking-wide text-white sm:text-[10px] md:text-[11px]">
                                                    Most Popular
                                                </span>
                                            </motion.div>
                                        )}

                                        {/* PRO BADGE */}
                                        {plan.name === "Pro" && (
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
                                                    delay: 0.5,
                                                    duration: 0.35,
                                                    ease: [
                                                        0.22,
                                                        1,
                                                        0.36,
                                                        1,
                                                    ],
                                                }}
                                                className="absolute left-[-1px] right-[-1px] top-[-22px] z-[999] flex h-[35px] origin-bottom items-center justify-center rounded-t-[12px] bg-[#087B47]"
                                            >
                                                <span className="text-[9px] font-semibold leading-none tracking-wide text-white sm:text-[10px] md:text-[11px] lg:text-[15px]">
                                                    Yearly Exclusive
                                                </span>
                                            </motion.div>
                                        )}

                                        {/* ICON */}
                                        <motion.div
                                            className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${plan.iconBg}`}
                                            whileHover={{
                                                scale: 1.08,
                                                rotate: 4,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                        >
                                            <Icon
                                                className={`h-6 w-6 ${plan.iconColor}`}
                                                strokeWidth={1.8}
                                            />
                                        </motion.div>

                                        {/* PLAN NAME */}
                                        <h4
                                            className={`mt-4 text-base font-bold leading-5 sm:text-lg ${plan.nameColor}`}
                                        >
                                            {plan.name}
                                        </h4>

                                        {/* PRICE */}
                                        <div className="mt-0 flex flex-col items-center">

                                            {/* DISCOUNT */}
                                            <div className="mb-1 flex h-[18px] items-center justify-center">
                                                {plan.name === "Pro" ? (
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[12px] font-medium leading-4 text-[#737373] line-through sm:text-[13px] lg:text-[15px]">
                                                            {
                                                                plan.fullyearlyPrice
                                                            }
                                                        </span>

                                                        <span className="rounded-full bg-[#E5F4D9] px-2 py-0.5 text-[8px] font-semibold leading-none text-[#28720D] sm:text-[9px] md:text-[10px]">
                                                            {plan.discount}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <AnimatePresence mode="wait">
                                                        {billing === "yearly" &&
                                                            plan.fullyearlyPrice && (
                                                                <motion.div
                                                                    key={`discount-${plan.name}`}
                                                                    initial={{
                                                                        opacity: 0,
                                                                        y: 5,
                                                                    }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        y: 0,
                                                                    }}
                                                                    exit={{
                                                                        opacity: 0,
                                                                        y: -5,
                                                                    }}
                                                                    transition={{
                                                                        duration: 0.25,
                                                                    }}
                                                                    className="flex items-center gap-2"
                                                                >
                                                                    <span className="text-[12px] font-medium leading-4 text-[#737373] line-through sm:text-[13px] lg:text-[15px]">
                                                                        {
                                                                            plan.fullyearlyPrice
                                                                        }
                                                                    </span>

                                                                    <span className="rounded-full bg-[#E5F4D9] px-2 py-0.5 text-[8px] font-semibold leading-none text-[#28720D] sm:text-[9px] md:text-[10px]">
                                                                        {
                                                                            plan.discount
                                                                        }
                                                                    </span>
                                                                </motion.div>
                                                            )}
                                                    </AnimatePresence>
                                                )}
                                            </div>

                                            {/* CURRENT PRICE */}
                                            {plan.name === "Free" ||
                                                plan.name === "Pro" ? (
                                                <div className="flex items-baseline justify-center gap-1.5">
                                                    <span
                                                        className={`text-3xl font-bold leading-9 sm:text-[34px] ${plan.priceColor}`}
                                                    >
                                                        {getPrice(plan)}
                                                    </span>

                                                    <span className="text-[9px] leading-4 text-[#30384C] sm:text-[10px] md:text-[11px]">
                                                        /user/
                                                        {plan.name === "Pro"
                                                            ? "yr"
                                                            : billing ===
                                                                "monthly"
                                                                ? "mo"
                                                                : "yr"}
                                                    </span>
                                                </div>
                                            ) : (
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={`${plan.name}-${billing}`}
                                                        initial={{
                                                            opacity: 0,
                                                            y: 6,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            y: -6,
                                                        }}
                                                        transition={{
                                                            duration: 0.25,
                                                        }}
                                                        className="flex items-baseline justify-center gap-1.5"
                                                    >
                                                        <span
                                                            className={`text-3xl font-bold leading-9 sm:text-[34px] ${plan.priceColor}`}
                                                        >
                                                            {getPrice(plan)}
                                                        </span>

                                                        <span className="text-[9px] leading-4 text-[#30384C] sm:text-[10px] md:text-[11px]">
                                                            /user/
                                                            {billing ===
                                                                "monthly"
                                                                ? "mo"
                                                                : "yr"}
                                                        </span>
                                                    </motion.div>
                                                </AnimatePresence>
                                            )}
                                        </div>

                                        {/* DESCRIPTION */}
                                        <p className="mt-2 min-h-[40px] max-w-[190px] px-2 text-center text-[10px] leading-4 text-[#596278] sm:text-[11px] md:text-xs">
                                            {plan.description}
                                        </p>

                                        {/* BUTTON */}
                                        <motion.button
                                            type="button"
                                            onClick={() =>
                                                navigate("/signup")
                                            }
                                            whileHover={{
                                                scale: 1.03,
                                            }}
                                            whileTap={{
                                                scale: 0.97,
                                            }}
                                            className={`mt-4 mb-1 flex h-[38px] w-[140px] max-w-full items-center justify-center rounded-[4px] text-[11px] font-medium leading-4 shadow-sm transition-all duration-300 sm:text-xs ${plan.buttonStyle}`}
                                        >
                                            Get Started
                                        </motion.button>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* LIMIT TEXT */}
                    <p className="sm:text-4xl pt-4 pb-0.5 ml-[10px] md:text-5xl lg:text-[13px] text-[#737373] font-normal leading-tight">
                        Limit renews monthly
                    </p>

                    {/* DETAILS TABLE */}
                    <motion.div
                        className="w-full overflow-x-hidden rounded-[8px] border-[1px] border-[#D7DCE6] bg-white"
                        variants={tableVariants}
                    >
                        <div className="min-w-[900px]">
                            {comparisonRows.map((row, rowIndex) => (
                                <motion.div
                                    key={row.feature}
                                    initial={{
                                        opacity: 0,
                                        y: 8,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.15,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        delay: rowIndex * 0.03,
                                    }}
                                    className={`grid min-h-[42px] grid-cols-[190px_repeat(4,minmax(0,1fr))] ${rowIndex !==
                                            comparisonRows.length - 1
                                            ? "border-b-[1px] border-[#E3E6EC]"
                                            : ""
                                        }`}
                                >

                                    {/* FEATURE */}
                                    <div className="flex flex-col justify-center border-r-[1px] border-[#E3E6EC] px-3">
                                        <span className="text-[12px] font-semibold leading-4 text-[#18213A] md:text-[13px]">
                                            {row.feature}
                                        </span>

                                        {row.note && (
                                            <span className="text-[6px] text-[#667085] md:text-[7px] lg:text-[8.5px]">
                                                {row.note}
                                            </span>
                                        )}
                                    </div>

                                    {/* VALUES */}
                                    {row.values.map(
                                        (value, valueIndex) => {
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
                                                        <span className="text-[10px] leading-4 md:text-[11px] lg:text-[11.5px]">
                                                            {value}
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        }
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

export default PricingSection;