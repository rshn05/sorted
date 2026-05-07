import logo1 from "./assets/images/logo-07.png";
import logo2 from "./assets/images/logoipsum-1.png";
import logo3 from "./assets/images/logoipsum2.png";
import logo4 from "./assets/images/logoipsum4.png";


function LogoSlider() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo1,
    logo2,
    logo3,
    logo4,
  ];

  return (
    <section className="relative w-full overflow-hidden py-14 bg-white">

      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

      <div className="relative w-full overflow-hidden">

        <div className="flex w-max animate-scroll">

          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-10 md:mx-16 flex items-center justify-center flex-shrink-0"
            >
              <img
                src={logo}
                alt="brand-logo"
                className="h-8 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default LogoSlider;