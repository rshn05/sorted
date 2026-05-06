import { useState } from "react";


function FAQSection() {

    const [openIndex, setOpenIndex] = useState(1);

    const faqs = [
        {
            question: "How do I create an account?",
            answer: "Simply sign up with your email address and follow the onboarding process to create your account."
        },
        {
            question: "Can I customize my profile?",
            answer: "Yes, Capable allows you to personalize your profile with a photo, bio, and interests to better connect with others."
        },
        {
            question: "Is Capable available on all devices?",
            answer: "Capable is available on both iOS and Android devices, ensuring you can stay connected from your smartphone or tablet."
        },
        {
            question: "What privacy controls are available?",
            answer: "Capable offers advanced privacy settings, allowing you to control who can view your profile and interact with you, ensuring your data is secure."
        },
        {
            question: "How does the smart matching work?",
            answer: "Our smart matching algorithm analyzes your interests and preferences to suggest connections that are most likely to be meaningful and relevant."
        },
        {
            question: "Can I share multimedia content?",
            answer: "Yes, Capable supports sharing photos, videos, and other multimedia content to enhance your interactions and keep your connections engaged."
        },
        {
            question: "What should I do if I encounter issues?",
            answer: "If you experience any issues, please contact our support team through the app or website, and we'll assist you as quickly as possible."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-white py-24 px-5">

            <div className="max-w-[900px] mx-auto">

                {/* Badge */}
                <div className="flex justify-center mb-5">

                    <div className="border border-gray-300 rounded-full px-4 py-1 text-[12px] text-gray-500">
                        ⓘ FAQ's
                    </div>

                </div>

                <h2 className="text-xl md:text-6xl font-bold text-center text-black mb-14">
                    Frequently Asked Questions
                </h2>

                {/* FAQ Items */}
                <div className="flex flex-col gap-2">

                    {faqs.map((faq, index) => {

                        const isOpen = openIndex === index;

                        return (

                            <div
                                key={index}
                                className="bg-[#F5F7FA] border border-gray-200 rounded-2xl px-5 py-4 transition-all duration-300"
                            >

                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between text-left"
                                >

                                    <h3 className="text-sm md:text-base font-semibold text-black">
                                        {faq.question}
                                    </h3>

                                    <div className="w-8 h-8 rounded-full bg-[#2F2F2F] flex items-center justify-center text-white text-lg flex-shrink-0">

                                        {isOpen ? "−" : "+"}

                                    </div>

                                </button>

                                {/* Answer */}
                                {isOpen && (

                                    <div className="mt-4 pt-4 border-t border-gray-300">

                                        <p className="text-gray-500 leading-6 text-xs md:text-sm max-w-[720px]">
                                            {faq.answer}
                                        </p>

                                    </div>

                                )}

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}

export default FAQSection;