import mobileImg from "./assets/images/mobile.png";
import appleIcon from "./assets/images/apple.svg";
import androidIcon from "./assets/images/android.svg";

function DownloadSection() {

    return (
        <section className="w-full bg-white pt-24 px-5 overflow-hidden">

            <div className="max-w-[1200px] mx-auto">

                <div className="flex justify-center">

                    <img
                        src={mobileImg}
                        alt="mobile"
                        className="w-full max-w-[520px] object-contain"
                    />

                </div>

                <h2 className="text-2xl md:text-6xl text-center text-black leading-tight mt-6">

                    Download Capable and
                    <br />
                    Connect Today

                </h2>

                <p className="text-center text-gray-500 text-sm md:text-lg leading-8 max-w-[800px] mx-auto mt-8">

                    Download Capable now to start connecting with like-minded people and enjoy a seamless social experience!

                </p>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">

                    <button className="flex items-center gap-4 border border-gray-200 rounded-full px-7 py-4 hover:shadow-lg transition">

                        <img
                            src={androidIcon}
                            alt="android"
                            className="w-8 h-8"
                        />

                        <div className="text-left">

                            <p className="text-[8px] text-gray-500">
                                Get It On
                            </p>

                            <h3 className="text-black text-sm font-medium">
                                Google Play
                            </h3>

                        </div>

                    </button>

                    <button className="flex items-center gap-4 border border-gray-200 rounded-full px-7 py-4 hover:shadow-lg transition">

                        <img
                            src={appleIcon}
                            alt="apple"
                            className="w-8 h-8"
                        />

                        <div className="text-left">

                            <p className="text-[8px] text-gray-500">
                                Download on the
                            </p>

                            <h3 className="text-black text-sm font-medium">
                                App Store
                            </h3>

                        </div>

                    </button>

                </div>

                <div className="flex items-center gap-6 mt-24">

                    <div className="flex-1 h-[1px] bg-gray-200"></div>

                    <div className="border border-gray-200 rounded-full px-6 py-3 flex items-center gap-3">

                        <span className="text-black text-lg">
                            ✉
                        </span>

                        <span className="text-black text-lg">
                            hello@capable.com
                        </span>

                    </div>

                    <div className="flex-1 h-[1px] bg-gray-200"></div>

                </div>

                {/* Footer Links */}
                <div className="flex flex-wrap justify-center gap-5 mt-16">

                    {[
                        "Benefits",
                        "Features",
                        "How To Use",
                        "Pricing",
                        "Testimonials",
                        "Waitlist"
                    ].map((item, index) => (

                        <button
                            key={index}
className="border border-gray-200 rounded-full px-5 py-2 text-black text-xs hover:bg-black hover:text-white transition"                        >
                            {item}
                        </button>

                    ))}

                </div>

                {/* Bottom Border */}
                <div className="w-full h-[1px] bg-gray-200 mt-20"></div>

            </div>

        </section>
    );
}

export default DownloadSection;