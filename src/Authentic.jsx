import authenticImg from "./assets/images/Authentic.webp";

function Authentic() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-0 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 md:-mt-14">
      <div className="relative mx-auto w-full max-w-[1300px]">
        {/* Adjusted top and left values down to shift slightly up and left */}
        <h2 className="absolute top-6 left-8 sm:top-10 sm:left-16 md:top-12 md:left-20 lg:top-20 lg:left-20 z-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight pointer-events-none">
          Authentic
        </h2>

        <div className="flex w-full justify-center pt-8 sm:pt-12">
          <img
            src={authenticImg}
            alt="Authentic dashboard preview"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Authentic;