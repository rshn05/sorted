import { useState } from "react";
import logo from "./assets/images/logo1.png";

function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
<nav className="w-full bg-white px-5 py-5 relative z-50 font-sans">
  
      <div className="max-w-[1160px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">

          <img
            src={logo}
            alt="logo"
            className="h-4 w-auto object-contain cursor-pointer"
          />

        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">

          {/* Features Dropdown */}
          <div className="relative group">

            <button className="flex items-center gap-2 text-[15px] font-medium text-[#1E0D01] hover:text-[rgb(249,117,24)] transition duration-300">

              <span>
                Features
              </span>

              {/* Arrow */}
              {/* <span className="relative top-[0px] inline-flex items-center justify-center text-[15px] leading-none transition-transform duration-300 origin-center group-hover:-scale-y-100">
                ⌵
              </span> */}

            </button>

            {/* Dropdown */}
            {/* <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] py-4 px-4 min-w-[180px]">

                {[
                  "Home",
                  "About",
                  "Pricing",
                  "Career",
                  "Blog"
                ].map((item, index) => (

                  <div
                    key={index}
                    className="px-4 py-3 rounded-xl text-[15px] font-medium text-[#1E0D01] hover:text-[rgb(249,117,24)] hover:bg-gray-50 cursor-pointer transition"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div> */}

          </div>

          {/* Menu Items */}
          {["Pricing", "FAQ", "Blog"].map((item, index) => (

            <button
              key={index}
              className="text-[15px] font-medium text-[#1E0D01] hover:text-[#5A5A5A] transition duration-300"
            >
              {item}
            </button>

          ))}

        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-7">

          {/* Sign In */}
          <button className="text-[15px] font-bold text-[#1E0D01] hover:text-[#5A5A5A] transition duration-300">

            Sign in

          </button>

          {/* Get Started */}
       <button className="group bg-[#5D21B0] text-white text-[17px] font-semibold px-4 py-1 rounded-full flex items-center gap-3 overflow-hidden">

    {/* Animated Text */}
    <div className="relative h-[22px] overflow-hidden">

        <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-[22px]">

            <span className="h-[22px] leading-[22px]">
                Get Started
            </span>

            <span className="h-[22px] leading-[22px]">
                Get Started
            </span>

        </div>

    </div>

    {/* Arrow */}
    <span className="text-xl font-normal">
        ❯
    </span>

</button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden flex flex-col gap-1"
        >

          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>

        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (

        <div className="lg:hidden bg-white border-t border-gray-100 mt-5">

          <div className="flex flex-col py-5">

            {[
              "Features",
              "Pricing",
              "FAQ",
              "Blog"
            ].map((item, index) => (

              <button
                key={index}
                className="text-left px-2 py-4 text-[15px] font-medium text-[#1E0D01] hover:text-[#262626] transition"
              >
                {item}
              </button>

            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-4 mt-5 pt-5 border-t border-gray-100">

              <button className="text-left text-[15px] font-bold text-[#1E0D01]">

                Sign in

              </button>

              <button className="bg-[#5D21B0] text-white text-[15px] font-semibold px-6 py-3 rounded-full w-fit flex items-center gap-3">

                <span>
                  Get Started
                </span>

                <span>
                  ❯
                </span>

              </button>

            </div>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;