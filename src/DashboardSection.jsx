import dashboardImg from "./assets/images/img.avif";

function DashboardSection() {

    return (

        <section className="relative w-full h-[850px] overflow-visible">

            {/* Gradient Background */}
            <div className="absolute inset-0 bg-[linear-gradient(#43008a_0%,#ffffff_95%)]"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-5 pt-[140px]">

                <div className="w-full max-w-[1150px] shadow-[0_30px_80px_rgba(0,0,0,0.18)] overflow-hidden">

                    <img
                        src={dashboardImg}
                        alt="dashboard"
                        className="w-full h-auto object-cover block"
                    />

                </div>

            </div>

        </section>
    );
}

export default DashboardSection;