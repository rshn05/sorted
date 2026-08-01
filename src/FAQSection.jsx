import { useState } from "react";

function FAQSection() {

    const [openIndex, setOpenIndex] = useState(-1);

    const faqs = [
        {
            question: "What is Sortted?",
            answer:
                "Sortted is an AI-powered content growth platform that helps businesses create, optimize and humanize content from one place. Instead of using multiple tools for writing, SEO keyword planning and humanising. Sortted brings everything into one connected workflow.",
        },
        {
            question: "How is Sortted different from other AI writing tools?",
            answer:
                "Sortted uses SERP analysis and NLP processing to understand what already ranks on Google. It analyzes top-ranking pages, extracts important keywords, topics and search intent patterns, then creates a new optimized intent-based content designed to improve relevance, readability and ranking potential —  backed by real search data instead of generic AI output.",
        },
        {
            question: "What are the SEO Keyword Planner and Humanizer features in Sortted?",
            answer:
                "The SEO Keyword Planner helps discover high-search keywords and search volume insights to create content people are actively searching for, while the Humanizer rewrites AI-generated text to sound more natural, readable and human-like without affecting SEO quality.",
        },
        {
            question: "Do I need SEO experience to use Sortted?",
            answer:
                "No. Sortted simplifies SEO recommendations and content optimization so beginners can create optimized content without technical expertise.",
        },
        {
            question: "What features are planned for future updates in Sortted?",
            answer:
                "Future updates include GEO optimization for AI search rankings, website Site Audit reports, Social Publishing automation and Social Listening features to help businesses create, optimize, publish and monitor content growth from one platform.",
        },
    ];

    return (

        <section
            id="faq"
            className="w-full bg-white pt-[85px] px-5 overflow-hidden"
        >

            <div className="max-w-[760px] mx-auto">

                {/* HEADING */}
                <div className="text-center">

                    <h2
                        className="
                        text-[40px]
                        leading-[67px]
                        text-[rgb(70,0,99)]
                        "
                        style={{
                            fontFamily:
                                '"Plus Jakarta Sans", sans-serif',
                            fontWeight: 400,
                        }}
                    >
                        Questions? Answers!
                    </h2>

                    <p
                        className="
                        mt-4
                        text-[16px]
                        leading-[24px]
                        text-[rgb(14,28,41)]
                        "
                        style={{
                            fontFamily:
                                'Inter, sans-serif',
                            fontWeight: 400,
                        }}
                    >
                        Find quick answers to the most common questions about our platform
                    </p>

                </div>

                {/* FAQS */}
                <div className="mt-10 space-y-4 max-w-[570px] mx-auto">

                    {faqs.map((faq, index) => {

                        const isOpen = openIndex === index;

                        return (

                            <div
                                key={index}
                                className="
                                bg-[#EEF2F6]
                                rounded-[10px]
                                shadow-[0_3px_5px_rgba(0,0,0,0.5)]
                                overflow-hidden
                                transition-all
                                duration-300
                                "
                            >

                                {/* QUESTION */}
                                <button
                                    onClick={() =>
                                        setOpenIndex(
                                            isOpen ? -1 : index
                                        )
                                    }
                                    className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    px-5
                                    py-[8px]
                                    text-left
                                    "
                                >

                                    <span
                                        className="
                                        text-[16px]
                                        leading-[22px]
                                        text-[rgb(14,28,41)]
                                        "
                                        style={{
                                            fontFamily:
                                                'Inter, sans-serif',
                                            fontWeight: 400,
                                        }}
                                    >
                                        {faq.question}
                                    </span>

                                    <span
                                        className={`
                                        text-[20px]
                                        text-[#1B2430]
                                        transition-transform
                                        duration-300
                                        ${
                                            isOpen
                                                ? "rotate-180"
                                                : ""
                                        }
                                        `}
                                    >
                                        ⌵
                                    </span>

                                </button>

                                {/* ANSWER */}
                                <div
                                    className={`
                                    grid
                                    transition-all
                                    duration-500
                                    ease-in-out
                                    ${
                                        isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                    }
                                    `}
                                >

                                    <div className="overflow-hidden">

                                        <p
                                            className={`
                                            px-5
                                            pb-4
                                            text-[14px]
                                            leading-[21px]
                                            text-[rgb(65, 69, 73)]
                                            transition-all
                                            duration-700
                                            ${
                                                isOpen
                                                    ? "blur-0 translate-y-0"
                                                    : "blur-md translate-y-2"
                                            }
                                            `}
                                            style={{
                                                fontFamily:
                                                    'Inter, sans-serif',
                                                fontWeight: 400,
                                            }}
                                        >
                                            {faq.answer}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

                {/* FOOTER */}
                <div
                    className="
                    mt-10
                    flex
                    items-center
                    justify-center
                    gap-3
                    text-center
                    "
                >

                    <span className="text-[20px]">
                        ✉
                    </span>

                    <p
                        className="
                        text-[17px]
                        leading-[22px]
                        text-[rgb(14,28,41)]
                        "
                        style={{
                            fontFamily:
                                'Inter, sans-serif',
                            fontWeight: 400,
                        }}
                    >
                        Feel free to mail us for any enquiries :
                        {" "}
                        support@sortted.com
                    </p>

                </div>

            </div>

        </section>

    );
}

export default FAQSection;