function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center pt-16 md:pt-12 pb-20 px-5 bg-white overflow-hidden">

      <div className="flex items-center gap-4">

    {/* AI Powered Badge */}
    <div className="relative rounded-full p-[1px] overflow-hidden">

        {/* Border Linear */}
        <div className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_55%)]"></div>

        {/* Border Radial */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(88%_50%_at_50.7%_97.2%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_37%)]"></div>

        {/* Main Background */}
        <div className="relative bg-[#4316AB] rounded-full px-5 py-2 backdrop-blur-[12px] shadow-[inset_0px_0px_8px_rgba(182,118,223,0.1)]">

            {/* Inner Gradient */}
            <div className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(110,108,108,0.1)_100%)] shadow-[inset_0px_3px_6px_rgba(182,118,223,0.2)]"></div>

            {/* Text */}
            <p className="relative text-white text-[14px] font-medium tracking-[0.42px] leading-[10px] font-sans">
                AI-Powered
            </p>

        </div>

    </div>

    {/* Right Text */}
    <p className="text-[#6B7280] text-[14px] font-medium tracking-[0.42px] leading-[10px] font-sans">
        Intent-based content intelligence
    </p>

</div>

      <div className="flex items-center gap-3">

    {/* Stars */}
    <div className="flex items-center gap-[2px]">

        {[1, 2, 3, 4, 5].map((star) => (

            <span
                key={star}
                className="text-[14px] text-[#FCAA1C]"
            >
                ★
            </span>

        ))}

    </div>

    {/* Text */}
    <p className="text-[15px] font-semibold tracking-[-0.02em] leading-[1.3em] text-[#2F8A0B] font-sans">
        Loved by 5000+ Users
    </p>

</div>

      <div className="flex flex-col items-center text-center mt-10">

    {/* Heading */}
    <h1 className="text-[42px] md:text-[52px] font-semibold leading-[1] tracking-[-0.05em] text-black max-w-[950px] font-sans">

        Write content that

       <span className="bg-[linear-gradient(90deg,#3BA8FF_0%,#7B61FF_50%,#9333EA_100%)] bg-clip-text text-transparent">
    {" "}ranks on Google
</span>

    </h1>

    <p className="mt-6 text-[18px] md:text-[20px] font-medium leading-[1.6] tracking-[-0.02em] text-[#6B7280] max-w-[720px] text-center font-sans">
    Create content people are searching for and get found.
</p>

    {/* Button */}
    <button className="group mt-10 bg-[linear-gradient(265deg,rgb(233,48,201)_0%,rgb(120,35,177)_30%,rgb(82,35,177)_60%,rgb(46,22,152)_100%)] shadow-[0px_4px_20px_rgba(120,35,177,0.75)] rounded-[10px] px-6 py-3 overflow-hidden">

    {/* Animated Text */}
    <div className="relative h-[24px] overflow-hidden">

        <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-[24px]">

            <span className="h-[24px] leading-[24px] text-white text-[17px] font-semibold font-sans tracking-[-0.02em]">
                Get started for free
            </span>

            <span className="h-[24px] leading-[24px] text-white text-[17px] font-semibold font-sans tracking-[-0.02em]">
                Get started for free
            </span>

        </div>

    </div>

</button>

</div>

    </section>
  );
}

export default HeroSection;