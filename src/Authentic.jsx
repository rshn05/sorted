import authenticImg from "./assets/images/Authentic.webp";

function Authentic() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <h2 className="text-2xl -mt-[25px] ml-[201px] sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-black leading-tight tracking-[-1px] sm:mb-6 relative top-[170px] z-10">
        Authentic</h2>
      <div className="mx-auto flex w-full max-w-[1400px] justify-center px-4 pt-[70px] pb-[70px] sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <img
          src={authenticImg}
          alt="Authentic"
          className="block h-auto w-full max-w-[1200px] object-contain"
        />
      </div>
    </section>
  );
}

export default Authentic;