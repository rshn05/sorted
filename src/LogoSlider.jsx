import logo1 from "./assets/images/logoipsum-1.png";
import logo2 from "./assets/images/logoipsum2.png";
import logo3 from "./assets/images/logoipsum4.png";
import logo4 from "./assets/images/logo-07.png";

function LogoSlider() {

    const logos = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo1,
        logo2,
    ];

    return (

        <section className="w-full py-10 overflow-hidden bg-white">

            <div className="max-w-[1200px] mx-auto px-5">

                {/* Fade Container */}
                <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">

                    {/* Slider */}
                    <div className="group flex w-max animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused]">

                        {[...logos, ...logos, ...logos].map((logo, index) => (

                            <div
                                key={index}
                                className="flex items-center justify-center mx-10 shrink-0"
                            >

                                <img
                                    src={logo}
                                    alt="logo"
                                    className="h-7 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default LogoSlider;