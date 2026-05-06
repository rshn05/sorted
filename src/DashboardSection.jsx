import dashboardImg from "./assets/images/img.avif"

function DashboardSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-[#5B12B5] via-[#8F63D9] to-white"></div>

<div className="relative z-10 max-w-[900px] mx-auto px-5 flex justify-center">

<div className="overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] w-full">

          <img
            src={dashboardImg}
            alt="dashboard"
            className="w-full h-auto object-cover"
          />

        </div>

      </div>

    </section>
  );
}

export default DashboardSection;