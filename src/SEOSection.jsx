import seo1 from "./assets/images/SEOimg/seo1.png";
import seo2 from "./assets/images/SEOimg/seo2.png";
import seo3 from "./assets/images/SEOimg/seo3.png";

function SEOSection() {
    return (
        <section className="w-full bg-white py-24 px-5 overflow-hidden">

            <div className="max-w-[1200px] mx-auto flex flex-col gap-28">

                {/* Row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={seo1}
                            alt="SEO Planner"
                            className="w-full max-w-[600px] rounded-[20px]"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full max-w-[560px]">

                        <div className="inline-flex items-center justify-center rounded-full px-8 py-[4px] mb-5 border border-[rgb(123,0,255)]/50">

                            <span
                                className="text-[14px] font-semibold leading-normal
                                bg-[linear-gradient(344deg,rgb(193,0,232)_21%,rgb(123,0,255)_53%,rgb(28,107,255)_83%)]
                                bg-clip-text text-transparent"
                            >
                                SEO Keyword Planner
                            </span>

                        </div>

                        <h2 className="font-['Nokora'] text-[37px] font-bold leading-[120%] text-[#0C0C0C]">

                            Find the

                            <span className="text-[rgb(118,73,230)]">
                                {" "}right{" "}
                            </span>

                            keywords,
                            <br />

                            rank before your rivals

                        </h2>

                        <p
                            className="mt-6 text-[#6B6B6B] text-[21px] leading-[1.6] font-normal"
                            style={{ fontFamily: "Inter Display, sans-serif" }}
                        >
                            Easily discover high-volume keywords your audience is actually searching for, analyse what's driving traffic for top pages and build your content strategy around terms that are proven to rank.
                        </p>

                    </div>

                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Content */}
                    <div className="w-full max-w-[560px] order-2 lg:order-1">

                        <div className="inline-flex items-center justify-center rounded-full px-8 py-[4px] mb-5 border border-[rgb(123,0,255)]/50">

                            <span
                                className="text-[14px] font-semibold leading-normal
                                bg-[linear-gradient(344deg,rgb(193,0,232)_21%,rgb(123,0,255)_53%,rgb(28,107,255)_83%)]
                                bg-clip-text text-transparent"
                            >
                                AI Article Writer
                            </span>

                        </div>

                        <h2 className="font-['Nokora'] text-[37px] font-bold leading-[120%] text-[#0C0C0C]">

                            Create content,

                            <span className="text-[rgb(118,73,230)]">
                                {" "}Google{" "}
                            </span>

                            was already waiting for

                        </h2>

                        <p
                            className="mt-6 text-[#6B6B6B] text-[21px] leading-[1.6] font-normal"
                            style={{ fontFamily: "Inter Display, sans-serif" }}
                        >
                            Generate publish-ready content in seconds backed by real SEO data from Google's top results.
                        </p>

                    </div>

                    {/* Image */}
                    <div className="flex justify-center order-1 lg:order-2">
                        <img
                            src={seo2}
                            alt="AI Writer"
                            className="w-full max-w-[600px] rounded-[20px]"
                        />
                    </div>

                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={seo3}
                            alt="Humanizer"
                            className="w-full max-w-[600px] rounded-[20px]"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full max-w-[560px]">

                        <div className="inline-flex items-center justify-center rounded-full px-8 py-[4px] mb-5 border border-[rgb(123,0,255)]/50">

                            <span
                                className="text-[14px] font-semibold leading-normal
                                bg-[linear-gradient(344deg,rgb(193,0,232)_21%,rgb(123,0,255)_53%,rgb(28,107,255)_83%)]
                                bg-clip-text text-transparent"
                            >
                                Humanize AI Text
                            </span>

                        </div>

                        <h2 className="font-['Nokora'] text-[37px] font-bold leading-[120%] text-[#0C0C0C]">

                            Write like a

                            <span className="text-[rgb(118,73,230)]">
                                {" "}Human,{" "}
                            </span>

                            not robotic

                        </h2>

                        <p
                            className="mt-6 text-[#6B6B6B] text-[21px] leading-[1.6] font-normal"
                            style={{ fontFamily: "Inter Display, sans-serif" }}
                        >
                            Instantly transform robotic AI text into clear, natural copy your audience actually connects with while keeping your message intact.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default SEOSection;