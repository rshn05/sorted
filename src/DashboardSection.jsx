import dashboardImg from "./assets/images/Dashboard.png";

function DashboardSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="mx-auto flex w-full max-w-[1400px] justify-center px-4 pt-[110px] pb-[50px] sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <img
          src={dashboardImg}
          alt="Dashboard"
          className="block h-auto w-full max-w-[950px] object-contain"
        />
      </div>
    </section>
  );
}

export default DashboardSection;