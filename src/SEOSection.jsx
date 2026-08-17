import seoSectionImg from "./assets/images/SEOsection.png";

function SEOSection() {
    return (
        <section className="w-full bg-white overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 py-20 sm:py-14 md:py-16 lg:pt-20 lg:pb-[30px]">

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-6">

                    {/* Left Content */}
                    <div className="w-full flex justify-center">

                        <div className="flex flex-col">

                            <h2 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[30px] xl:text-[45px] font-bold text-[#17161F] leading-tight tracking-[-0.03em] whitespace-normal lg:whitespace-nowrap">
                                Store, organize and access
                            </h2>

                            <p className="mt-4 ml-3 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] font-medium text-[#17161F] leading-relaxed whitespace-normal lg:whitespace-nowrap">
                                Everything you create, whenever you need it.
                            </p>

                        </div>

                    </div>

                    {/* Right Image */}
<div className="w-full flex justify-center">

    <div className="relative w-full max-w-[630px]">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(190,237,233,0.30)_0%,rgba(227,244,242,0.16)_40%,rgba(255,255,255,0)_72%)] blur-2xl pointer-events-none"></div>

        {/* White Image Container */}
        <div className="relative z-10 w-full rounded-[20px] bg-white p-3 sm:p-4 shadow-[0_12px_35px_rgba(0,0,0,0.14),-8px_8px_25px_rgba(0,0,0,0.08),8px_8px_25px_rgba(0,0,0,0.08)]">

            <img
                src={seoSectionImg}
                alt="Content management dashboard"
                loading="lazy"
                decoding="async"
                className="block w-full h-auto object-contain rounded-[14px]"
            />

        </div>

    </div>

</div>

                </div>

            </div>
        </section>
    );
}

export default SEOSection;