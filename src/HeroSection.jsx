function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center pt-24 pb-20 px-4 bg-white">
      {/* Top Badge */}
      <div className="flex items-center gap-3 mb-5">
        <span className="bg-gradient-to-r from-[#5B21B6] to-[#9333EA] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
          AI-Powered
        </span>

        <span className="text-gray-500 text-lg">
          Intent-based content intelligence
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-3 mb-10">
        <div className="flex text-yellow-400 text-2xl">
          ★★★★★
        </div>

        <span className="text-green-700 font-semibold text-2xl">
          Loved by 5000+ Users
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[50px] leading-[82px] font-bold max-w-[1200px] text-black">
        Write Content that
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-4 relative inline-block">
          ranks on Google

          {/* Underline */}
          <span className="absolute left-0 -bottom-3 w-full h-[10px] bg-blue-500 rounded-full opacity-70"></span>
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 text-gray-500 text-[25px] font-medium">
        Create content people are searching for and get found.
      </p>

      {/* Button */}
      <button className="mt-12 bg-gradient-to-r from-[#3B1FAE] to-[#E12AC8] text-white text-[18px] font-bold px-7 py-3 rounded-2xl shadow-[0_15px_35px_rgba(128,0,255,0.35)] hover:scale-105 transition duration-300">
        Get started for free
      </button>
    </section>
  );
}

export default HeroSection;

