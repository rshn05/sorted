import { useNavigate } from "react-router-dom";
import girlImg from "./assets/images/girl.webp";

export default function GetStarted() {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white pt-16 px-8 md:px-16 rounded-3xl max-w-[1200px] mx-auto my-12 
relative overflow-hidden flex flex-col md:flex-row justify-between min-h-[340px]">

      {/* Left Content */}
      <div className="flex-1 ml-5 max-w-xl z-10 pb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
          See the Sortted <br />platform in action
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
          Get a demo and discover how content and marketing teams <br /> use Sortted to make their workflow smarter and more efficient.
        </p>
        
        
        
        <a
            href="https://calendly.com/manoj-sortted/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-semibold px-6 py-1 rounded-lg hover:bg-gray-200 transition-colors duration-150 inline-flex items-center gap-2"
          ><button
          type="button"
          // onClick={() => navigate("/contact")}
          className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-150 inline-flex items-center gap-2"
        >
          
            Book a demo <span>→</span>
          
        </button></a>
      </div>

      {/* Bottom-Right Aligned Image */}
      <div className="relative md:absolute bottom-[-1px] right-0 z-10 pointer-events-none">
        <img
          src={girlImg}
          alt="Sortted Platform Graphic"
          className="h-64 sm:h-80 md:h-[370px] w-auto object-contain object-bottom block"
        />
      </div>




    </section>
  );
}
