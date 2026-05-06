import linkedin from "./assets/images/footer/linkedin.png";
import twitter from "./assets/images/footer/twitter.png";
import instagram from "./assets/images/footer/instagram.png";

function FooterSection() {

    return (
        <footer className="w-full bg-white overflow-hidden">

            <div className="max-w-[1200px] mx-auto px-5">

                {/* Top Border */}
                <div className="w-full h-[1px] bg-gray-200"></div>

                {/* Footer Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-10">

                    {/* Left */}
                    <p className="text-black text-sm md:text-base">
                        Template by Praha
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">

                        {/* LinkedIn */}
                        <div className="w-10 h-10 rounded-full bg-[#1F1F1F] flex items-center justify-center cursor-pointer hover:scale-110 transition">

                            <img
                                src={linkedin}
                                alt="linkedin"
                                className="w-4 h-4 object-contain"
                            />

                        </div>

                        {/* Twitter */}
                        <div className="w-10 h-10 rounded-full bg-[#1F1F1F] flex items-center justify-center cursor-pointer hover:scale-110 transition">

                            <img
                                src={twitter}
                                alt="twitter"
                                className="w-4 h-4 object-contain"
                            />

                        </div>

                        {/* Instagram */}
                        <div className="w-10 h-10 rounded-full bg-[#1F1F1F] flex items-center justify-center cursor-pointer hover:scale-110 transition">

                            <img
                                src={instagram}
                                alt="instagram"
                                className="w-4 h-4 object-contain"
                            />

                        </div>

                    </div>

                    {/* Right */}
                    <p className="text-black text-sm md:text-base cursor-pointer hover:text-gray-500 transition">
                        Privacy Policy
                    </p>

                </div>

            </div>

            {/* Bottom Gradient */}
            <div className="relative w-full h-[220px] bg-black overflow-hidden">

                {/* Purple Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B0A91] via-[#12002F] to-black opacity-90"></div>

                {/* Large Text */}
                <h1 className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-[100px] md:text-[200px] font-black text-black/80 select-none whitespace-nowrap">
                    Sortted
                </h1>

            </div>

        </footer>
    );
}

export default FooterSection;