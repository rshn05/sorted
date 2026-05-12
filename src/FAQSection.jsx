import { useState } from "react";

function FAQSection() {

    const [openIndex, setOpenIndex] = useState(-1);

    const faqs = [
        {
            question: "What is Alter ?",
            answer:
                "Alter is a Framer template designed to help you build professional, enterprise-ready AI agent websites quickly and efficiently.",
        },
        {
            question: "Is Alter optimized for SEO ?",
            answer:
                "Yes, Alter is built with SEO-friendly practices to help your website rank better on search engines.",
        },
        {
            question: "Do I need coding skills to use Alter ?",
            answer:
                "No! Alter is built for designers and non-technical users. Framer's intuitive interface allows you to customize without writing code.",
        },
        {
            question: "Can I customize Alter to fit my brand ?",
            answer:
                "Absolutely! Alter offers flexible customization options, including fonts, colors, layouts, and more, to match your brand identity.",
        },
        {
            question: "Does Alter include mobile responsiveness ?",
            answer:
                "Yes! Alter is fully responsive and optimized for all devices, ensuring a seamless user experience across desktops, tablets, and mobile phones.",
        },
    ];

    return (

        <section
            id="faq"
            className="w-full bg-white py-[85px] px-5 overflow-hidden"
        >

            <div className="max-w-[760px] mx-auto">

                {/* HEADING */}
                <div className="text-center">

                    <h2
                        className="
                        text-[45px]
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
                        text-[13px]
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
                <div className="mt-10 space-y-3 max-w-[450px] mx-auto">

                    {faqs.map((faq, index) => {

                        const isOpen = openIndex === index;

                        return (

                            <div
                                key={index}
                                className="
                                bg-[#EEF2F6]
                                rounded-[10px]
                                shadow-[0px_10px_30px_rgba(15,23,42,0.3)]
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
                                        text-[12px]
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
                                            text-[11px]
                                            leading-[21px]
                                            text-[rgb(14,28,41)]
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

                    <span className="text-[15px]">
                        ✉
                    </span>

                    <p
                        className="
                        text-[13px]
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