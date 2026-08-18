import keywords1 from "./assets/images/Keywords1.png";
import keywords2 from "./assets/images/Keywords2.png";

function FutureSection() {
    return (
        <section className="w-full bg-white py-8 mt-10 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">

            <div className="w-full max-w-[1200px] mx-auto">

                <h2 className="text-2xl mt-2 sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-black leading-tight tracking-[-1px] mb-5 sm:mb-10">
                    Keywords to Content, Your Way.
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">

                    {/* KEYWORD PLANNER */}
                    <div className="w-full bg-[#F3F3F1] rounded-[30px] overflow-hidden p-30 sm:p-5 md:p-6 lg:pt-[20px]">
                        <h2 className="text-2xl ml-10 font-semibold sm:text-3xl md:text-4xl lg:text-[20px] text-black leading-tight tracking-[-1px] sm:mb-1 relative z-10">
                            Plan keywords that actually drive traffic</h2>

                        {/* <div className="w-full bg-white rounded-[24px] overflow-hidden px-3 sm:px-4 md:px-5 lg:px-4 pt-6 sm:pt-8 md:pt-9 pb-5 sm:pb-6"> */}

                            <div className="mb-3 w-full flex items-center justify-center translate-y-4 sm:translate-y-6">

                                <img
                                    src={keywords1}
                                    alt="Keyword Planner"
                                    className="w-[96%] sm:w-[94%] h-[430px] md:w-[92%] lg:w-[96%] h-auto object-contain"
                                />
                            </div>

                        {/* </div> */}

                    </div>

                    {/* CONTENT CREATION */}
                    <div className="w-full bg-[#F3F3F1] rounded-[30px] overflow-hidden p-30 sm:p-5 md:p-6 lg:pt-[20px]">
                        <h2 className="text-2xl ml-10 font-semibold sm:text-3xl md:text-4xl lg:text-[20px] text-black leading-tight tracking-[-1px] sm:mb-1 relative z-10">
                            Create content for every marketing channel</h2>

                        {/* <div className="w-full bg-white rounded-[24px] overflow-hidden px-3 sm:px-4 md:px-5 lg:px-4 pt-4 sm:pt-8 md:pt-9 pb-5 sm:pb-6"> */}

                            <div className="mb-3 w-full flex items-center justify-center translate-y-4 sm:translate-y-6">

                                <img
                                    src={keywords2}
                                    alt="Content creation for every marketing channel"
                                    className="w-[96%] sm:w-[94%] md:w-[92%] lg:w-[96%] h-auto object-contain"
                                />

                            </div>

                        {/* </div> */}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default FutureSection;