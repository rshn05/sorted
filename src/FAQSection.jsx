import { useState } from "react";

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is Sortted?",
            answer:
                "Sortted is an AI-powered content growth platform that helps businesses create, optimize and humanize content from one place. Instead of using multiple tools for writing, SEO keyword planning and humanising, Sortted brings everything into one connected workflow.",
        },
        {
            question: "How is Sortted different from other AI writing tools?",
            answer:
                "Sortted uses SERP analysis and NLP processing to understand what already ranks on Google. It analyzes top-ranking pages, extracts important keywords, topics and search intent patterns, then creates optimized intent-based content designed to improve relevance, readability and ranking potential - backed by real search data instead of generic AI output..",
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
        {
            question: "Can I use Sortted for my business?",
            answer:
                "Yes. Sortted is designed to help businesses plan, create, optimize and improve their content workflow from a single platform.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex((currentIndex) =>
            currentIndex === index ? null : index
        );
    };

    return (
        <section
            id="faq"
            className="w-full bg-white overflow-hidden"
        >
            {/* FAQ SECTION */}
            <div className="w-full py-14 sm:py-16 md:py-20 lg:py-[100px]">
                <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12">

                    {/* HEADING */}
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-black font-semibold leading-tight tracking-[-1.5px]">
                            Your Questions, Answered
                        </h2>

                        <p className="text-xs sm:text-sm md:text-[14px] text-[#555555] leading-5 mt-4">
                            Helping you understand our process
                        </p>
                    </div>

                    {/* FAQ GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mt-10 sm:mt-12 md:mt-14 max-w-[900px] mx-auto">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={faq.question}
                                    className={`w-full bg-white rounded-[16px] overflow-hidden transition-all duration-300 ${isOpen
                                        ? "shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
                                        : "shadow-none"
                                        }`}
                                >
                                    {/* QUESTION BUTTON */}
                                    <button
                                        type="button"
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${index}`}
                                        className={`w-full min-h-[58px] sm:min-h-[60px] flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left bg-[#E7E7E7] ${isOpen
                                                ? "rounded-t-[16px]"
                                                : "rounded-[16px]"
                                            }`}
                                    >
                                        <span className="text-[13px] sm:text-[14px] md:text-[15px] text-[#252525] font-medium leading-5">
                                            {faq.question}
                                        </span>

                                        <span
                                            className={`shrink-0 w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full bg-[#1D1D1D] flex items-center justify-center transition-transform duration-300 ${isOpen
                                                    ? "rotate-45"
                                                    : "rotate-0"
                                                }`}
                                            aria-hidden="true"
                                        >
                                            <span className="relative block w-[8px] h-[8px]">
                                                <span className="absolute left-1/2 top-0 w-[1.5px] h-[8px] bg-white -translate-x-1/2" />
                                                <span className="absolute left-0 top-1/2 w-[8px] h-[1.5px] bg-white -translate-y-1/2" />
                                            </span>
                                        </span>
                                    </button>

                                    {/* ANSWER */}
                                    <div
                                        id={`faq-answer-${index}`}
                                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out bg-[#E7E7E7] rounded-b-[16px] ${isOpen
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-5 sm:px-6 pb-5">
                                                <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#555555] leading-5">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>


        </section>
    );
}

export default FAQSection;