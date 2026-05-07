import seo1 from "./assets/images/SEOimg/seo1.avif";
import seo2 from "./assets/images/SEOimg/seo2.avif";
import seo3 from "./assets/images/SEOimg/seo3.avif";

function SEOSection() {
    return (
        <section className="w-full bg-white py-24 px-5 overflow-hidden">

            <div className="max-w-[1200px] mx-auto flex flex-col gap-28">

                {/* Row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={seo1}
                            alt="SEO Planner"
                            className="w-full max-w-[420px] rounded-[20px]"
                        />
                    </div>

                    <div className="max-w-[420px]">

                        <div className="inline-block border border-[#A855F7]/40 rounded-full px-4 py-1 text-[11px] text-[#A855F7] mb-5">
                            SEO Keyword Planner
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">
                            Find the
                            <span className="text-[#7C3AED]">
                                {" "}right{" "}
                            </span>
                            keywords,
                            <br />
                            rank before your rivals
                        </h2>

                        <p className="mt-6 text-gray-500 leading-7 text-sm md:text-base">
                            Easily discover high-volume keywords your audience is actually searching for, analyse what's driving traffic for top pages and build your content strategy around terms that are proven to rank.
                        </p>

                    </div>

                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="max-w-[420px] order-2 lg:order-1">

                        <div className="inline-block border border-[#A855F7]/40 rounded-full px-4 py-1 text-[11px] text-[#A855F7] mb-5">
                            AI Article Writer
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">
                            Create content,
                            <span className="text-[#7C3AED]">
                                {" "}Google{" "}
                            </span>
                            was already waiting for
                        </h2>

                        <p className="mt-6 text-gray-500 leading-7 text-sm md:text-base">
                            Generate publish-ready content in seconds backed by real SEO data from Google's top results.
                        </p>

                    </div>

                    <div className="flex justify-center order-1 lg:order-2">
                        <img
                            src={seo2}
                            alt="AI Writer"
                            className="w-full max-w-[420px] rounded-[20px]"
                        />
                    </div>

                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="flex justify-center">
                        <img
                            src={seo3}
                            alt="Humanizer"
                            className="w-full max-w-[420px] rounded-[20px]"
                        />
                    </div>

                    <div className="max-w-[420px]">

                        <div className="inline-block border border-[#A855F7]/40 rounded-full px-4 py-1 text-[11px] text-[#A855F7] mb-5">
                            Humanize AI Text
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">
                            Write like a
                            <span className="text-[#7C3AED]">
                                {" "}Human,{" "}
                            </span>
                            not robotic
                        </h2>

                        <p className="mt-6 text-gray-500 leading-7 text-sm md:text-base">
                            Instantly transform robotic AI text into clear, natural copy your audience actually connects with while keeping your message intact.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default SEOSection;
