import dashboardImg from "./assets/images/img.avif";

function DashboardSection() {

    return (

        <section className="relative w-full overflow-hidden">

            {/* Gradient Background */}
            <div className="absolute inset-0 bg-[linear-gradient(#43008a_0%,#ffffff_95%)]"></div>

            {/* Content */}
            <div className="relative z-10 flex justify-center px-4 sm:px-5 pt-16 sm:pt-24 md:pt-12 pb-16">

                <div className="w-full max-w-[1150px]">

                    <img
                        src={dashboardImg}
                        alt="dashboard"
                        className="w-full h-auto object-contain block shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
                    />

                </div>

            </div>

        </section>
    );
}

export default DashboardSection;