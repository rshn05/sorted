import dashboardImg from "./assets/images/Dashboard.webp";

function DashboardSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="mx-auto flex w-full max-w-[1200px] justify-center px-4 pt-[110px] pb-[50px] sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <img
          src={dashboardImg}
          alt="Dashboard"
          className="block h-auto w-full max-w-[1100px] object-contain"
        />
      </div>
      <h2 className="text-center text-2xl -mt-[25px] sm:text-3xl md:text-4xl lg:text-[30px] font-medium text-white leading-tight tracking-[-1px] sm:mb-6 relative -top-[100px] z-10">
        Create More. Optimize Better. Grow Faster.</h2>
    </section>
  );
}

export default DashboardSection;