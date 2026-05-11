import img1 from "./assets/images/FutureImg/1.avif";
import img2 from "./assets/images/FutureImg/2.avif";
import img3 from "./assets/images/FutureImg/3.avif";
import img4 from "./assets/images/FutureImg/4.avif";
import img5 from "./assets/images/FutureImg/5.avif";

function FutureSection() {
    return (
<section className="w-full bg-black text-white py-10 px-5 overflow-hidden">

<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 items-center pb-10">
   {/* Left */}
<div className="flex flex-col items-center justify-center py-10 border-b md:border-b-0 md:border-r border-white/10">

    <h2 className="text-[40px] font-semibold leading-[44px] bg-gradient-to-br from-[#A4A4A4] to-white bg-clip-text text-transparent"
        style={{ fontFamily: "Switzer, sans-serif" }} >
        0
    </h2>

    <p className="text-[#D3D3D3] mt-4 text-[17px] font-medium leading-[24px] text-center"
        style={{ fontFamily: "Inter, sans-serif" }} >
        Zero manual effort
    </p>

</div>

{/* Center */}
<div className="relative flex flex-col items-center justify-center py-10 border-b md:border-b-0">

    {/* Side Lines */}
    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[120px] bg-white/10"></div>

    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[120px] bg-white/10"></div>

    {/* Avatars */}
    <div className="flex items-center mb-6">

        {[img1, img2, img3, img4, img5].map((img, index) => (

          <div
    key={index}
    className={`w-14 h-14 rounded-[18px] overflow-hidden border-2 border-black -ml-3 first:ml-0 ${
        index % 2 === 0
            ? "-rotate-[14deg]"
            : "rotate-[14deg]"
    }`}
>

    <img
        src={img}
        alt="avatar"
        className="w-full h-full object-cover"
    />

</div>

        ))}

    </div>

    <h2
        className="text-[57px] font-semibold leading-[62px] bg-[linear-gradient(270deg,rgb(233,48,201)_0%,rgb(120,35,177)_30%,rgb(82,35,177)_60%,rgb(56,24,199)_100%)] bg-clip-text text-transparent"
        style={{ fontFamily: "Switzer, sans-serif" }}
    >
        5,000+
    </h2>

    <p
        className="text-[#D3D3D3] mt-4 text-[17px] font-medium leading-[24px] text-center"
        style={{ fontFamily: "Inter, sans-serif" }}
    >
        Real teams. Real results. Your turn
    </p>

</div>

{/* Right */}
<div className="flex flex-col items-center justify-center py-10">

    <h2
        className="text-[40px] font-semibold leading-[44px] bg-gradient-to-br from-[#A4A4A4] to-white bg-clip-text text-transparent"
        style={{ fontFamily: "Switzer, sans-serif" }}
    >
        10x
    </h2>

    <p
        className="text-[#D3D3D3] mt-4 text-[17px] font-medium leading-[24px] text-center"
        style={{ fontFamily: "Inter, sans-serif" }}
    >
        Faster. Without the burnout
    </p>

</div>

</div>

<div className="max-w-[1160px] mx-auto mt-10 flex flex-col lg:flex-row items-start justify-between gap-3 px-4">
    {/* LEFT CONTENT */}
<div className="space-y-1">
    <div className="inline-flex items-center justify-center border border-[#7C3AED] rounded-full px-5 py-2 mb-5">
    
    <span className="text-[#B49AF5] text-[14px] font-medium tracking-[0.2px]">
        All-in-one content platform
    </span>

</div>
    
    <p className="font-sans text-[30px] font-bold leading-[1.4] text-[#D3D3D3]">
        A smarter way from
    </p>

    <p className="font-['Nokora'] text-[30px] font-bold leading-[1.4] text-[#B49AF5]">
        Idea to Content
    </p>

    <p className="font-['Nokora'] text-[30px] font-bold leading-[1.4] text-[#B49AF5]">
        in 60 Seconds
    </p>

</div>
    {/* RIGHT CARDS */}
<div className="w-full lg:w-[74%] grid grid-cols-1 md:grid-cols-3 gap-5">
    {/* CARD 1 */}
    <div className="bg-[#0B0B0F] border border-[rgb(0,199,143)]/20 border-t-[1px] border-t-[rgb(0,199,143)] rounded-[15px] px-6 py-7 min-h-[255px]
    shadow-[0_0_35px_rgba(0,199,143,0.16)]">

        <div className="flex items-center gap-2 mb-3">

            <div className="w-[40px] h-[40px] rounded-[10px] bg-[rgba(0,199,143,0.1)]
            flex items-center justify-center text-[rgb(0,199,143)] text-[28px] scale-x-[-1]">

                ⌕

            </div>

            <h3 className="text-[18px] font-semibold text-[rgb(0,199,143)] tracking-[-0.3px]">
                Keyword Planner
            </h3>

        </div>

        <p className="text-white text-[18px] font-semibold leading-[1.25] mb-4">
            Know before you write
        </p>

        <p className="text-[#7B7B84] leading-[1.45] text-[15px] font-normal">
            Find the right SEO keywords with real search volume data, target what people actually search for.
        </p>

    </div>

    {/* CARD 2 */}
    <div className="bg-[#0B0B0F] border border-[rgb(144,99,255)]/20 border-t-[1px] border-t-[rgb(144,99,255)] rounded-[15px] px-6 py-7 min-h-[255px]
    shadow-[0_0_35px_rgba(144,99,255,0.16)]">

        <div className="flex items-center gap-2 mb-3">

            <div className="w-[40px] h-[40px] rounded-[18px] bg-[rgba(144,99,255,0.1)]
            flex items-center justify-center text-[rgb(144,99,255)] text-[28px] scale-x-[-1]">

                ✎

            </div>

            <h3 className="text-[18px] font-semibold text-[rgb(144,99,255)] tracking-[-0.3px]">
                AI-Writer
            </h3>

        </div>

        <p className="text-white text-[18px] font-semibold leading-[1.25] mb-4">
            Intent-based writing
        </p>

        <p className="text-[#7B7B84] leading-[1.45] text-[15px] font-normal">
            Pulls info. from Google's top-ranking pages so every piece is built around powerful SEO insights.
        </p>

    </div>

    {/* CARD 3 */}
    <div className="bg-[#0B0B0F] border border-[rgb(244,126,244)]/20 border-t-[1px] border-t-[rgb(244,126,244)] rounded-[15px] px-6 py-7 min-h-[255px]
    shadow-[0_0_35px_rgba(244,126,244,0.16)]">

        <div className="flex items-center gap-2 mb-3">

            <div className="w-[40px] h-[40px] rounded-[18px] bg-[rgba(244,126,244,0.1)]
            flex items-center justify-center text-[rgb(244,126,244)] text-[28px]">

                ✨

            </div>

            <h3 className="text-[18px] font-semibold text-[rgb(244,126,244)] tracking-[-0.3px]">
                Humanizer
            </h3>

        </div>

        <p className="text-white text-[18px] font-semibold leading-[1.25] mb-4">
            Sound Human, not robot
        </p>

        <p className="text-[#7B7B84] leading-[1.45] text-[15px] font-normal">
            Polish AI written content into writing that feels natural, engaging and genuinely Human.
        </p>

    </div>

</div>

</div>

        </section>
    );
}

export default FutureSection;