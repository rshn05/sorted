import img1 from "./assets/images/FutureImg/1.avif";
import img2 from "./assets/images/FutureImg/2.avif";
import img3 from "./assets/images/FutureImg/3.avif";
import img4 from "./assets/images/FutureImg/4.avif";
import img5 from "./assets/images/FutureImg/5.avif";

function FutureSection() {
    return (
        <section className="w-full bg-black text-white py-24 px-5 overflow-hidden">

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 border-b border-white/10 pb-16">

                <div className="flex flex-col items-center justify-center py-10 border-b md:border-b-0 md:border-r border-white/10">

                    <h2 className="text-3xl font-bold text-white">
                        0
                    </h2>

                    <p className="text-gray-400 mt-3 text-sm">
                        Zero manual effort
                    </p>

                </div>

                <div className="flex flex-col items-center justify-center py-10 border-b md:border-b-0 md:border-r border-white/10">

                    <div className="flex items-center mb-5">

                        {[img1, img2, img3, img4, img5].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="avatar"
                                className="w-14 h-14 rounded-full object-cover border-2 border-black -ml-3 first:ml-0"
                            />
                        ))}

                    </div>

                    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#5B21B6] to-[#E12AC8] bg-clip-text text-transparent">
                        5,000+
                    </h2>

                    <p className="text-gray-400 mt-3 text-sm text-center">
                        Real teams. Real results. Your turn
                    </p>

                </div>

                <div className="flex flex-col items-center justify-center py-10">

                    <h2 className="text-xl font-bold text-white">
                        10X
                    </h2>

                    <p className="text-gray-400 mt-3 text-sm">
                        Faster. Without the burnout
                    </p>

                </div>

            </div>

<div className="max-w-[1400px] mx-auto mt-24 flex flex-col lg:flex-row items-start gap-10">
<div className="w-full lg:w-[40%]">
                    <div className="inline-block border border-[#7C3AED] rounded-full px-5 py-2 text-sm text-[#C084FC] mb-8">
                        All-in-one content platform
                    </div>

                    <h1 className="text-5xl md:text-3xl leading-tight font-bold max-w-[650px]">

                        A smarter way from

                        <span className="block bg-gradient-to-r from-[#8B5CF6] to-[#E879F9] bg-clip-text text-transparent mt-3">
                            Idea to Content
                        </span>

                        <span className="block bg-gradient-to-r from-[#8B5CF6] to-[#E879F9] bg-clip-text text-transparent mt-3">
                            in 60 Seconds
                        </span>

                    </h1>

                </div>

<div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">


                    <div className="bg-[#0B0B0F] border border-cyan-500/50 rounded-3xl p-6 h-full shadow-[0_0_30px_rgba(6,182,212,0.15)]">

                        <div className="flex items-center gap-3 mb-5">

                            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-lg flex-shrink-0">
                                ⌕
                            </div>

                            <h3 className="text-xs font-semibold text-cyan-400 leading-tight">
                                Keyword Planner
                            </h3>

                        </div>

                        <p className="text-white text-xs font-semibold mb-3">
                            Know before you write
                        </p>

                        <p className="text-gray-400 leading-6 text-xs">
                            Find the right SEO keywords with real search volume data, target what people actually search for.
                        </p>

                    </div>

                    <div className="bg-[#0B0B0F] border border-[#7C3AED]/50 rounded-3xl p-6 h-full shadow-[0_0_30px_rgba(124,58,237,0.15)]">

                        <div className="flex items-center gap-3 mb-5">

                            {/* Icon */}
                            <div className="w-10 h-10 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center text-[#A855F7] text-lg flex-shrink-0">
                                ✎
                            </div>

                            {/* Header */}
                            <h3 className="text-xs font-semibold text-[#A855F7] leading-tight">
                                AI-Writer
                            </h3>

                        </div>

                        <p className="text-white text-xs font-semibold mb-3">
                            Intent-based writing
                        </p>

                        <p className="text-gray-400 leading-6 text-xs">
                            Pulls info. from Google's top-ranking pages so every piece is built around powerful SEO insights.
                        </p>

                    </div>

                    <div className="bg-[#0B0B0F] border border-pink-500/50 rounded-3xl p-6 h-full shadow-[0_0_30px_rgba(236,72,153,0.15)]">

                        <div className="flex items-center gap-3 mb-5">

                            <div className="w-10 h-10 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 text-lg flex-shrink-0">
                                ✨
                            </div>

                            <h3 className="text-xs font-semibold text-pink-400 leading-tight">
                                Humanizer
                            </h3>

                        </div>

                        <p className="text-white text-xs font-semibold mb-3">
                            Sound Human, not robot
                        </p>

                        <p className="text-gray-400 leading-6 text-xs">
                            Polish AI written content into writing that feels natural, engaging and genuinely Human.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default FutureSection;