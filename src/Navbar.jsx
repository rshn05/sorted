import { useState } from "react";
import logo from "./assets/images/logo1.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-5 md:px-10 py-5 shadow-sm relative">
      <div className="flex items-center justify-between">

        {/* 🔹 Left Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-5 md:h-6 w-auto object-contain cursor-pointer"
          />
        </div>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-[18px] font-medium text-black list-none">

          {/* Features Dropdown */}
          <li className="relative group cursor-pointer">

            <span className="flex items-center hover:text-[rgb(249,117,24)] transition-colors duration-200">

              <span className="mr-2">
                Features
              </span>

              <span className="transform transition-transform duration-300 rotate-90 group-hover:-rotate-90">
                &gt;
              </span>

            </span>

            {/* Dropdown */}
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-52 bg-white rounded-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.18)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 list-none p-4">

              <li className="px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-[rgb(249,117,24)] transition text-left">
                Home
              </li>

              <li className="px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-[rgb(249,117,24)] transition text-left">
                About
              </li>

              <li className="px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-[rgb(249,117,24)] transition text-left">
                Pricing
              </li>

              <li className="px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-[rgb(249,117,24)] transition text-left">
                Career
              </li>

              <li className="px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-[rgb(249,117,24)] transition text-left">
                Blog
              </li>

            </ul>
          </li>

          <li className="cursor-pointer hover:text-gray-700 transition">
            Pricing
          </li>

          <li className="cursor-pointer hover:text-gray-700 transition">
            FAQ
          </li>

          <li className="cursor-pointer hover:text-gray-700 transition">
            Blog
          </li>

        </ul>

        {/* 🔹 Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-5">

          <button className="text-black font-medium hover:text-gray-700 transition">
            Sign in
          </button>

          <button className="bg-[#5B21B6] text-white px-5 py-2 rounded-full hover:bg-[#4C1D95] transition font-bold flex items-center">

            <span className="text-white">
              Get Started
            </span>

            <span className="ml-3 text-xl text-white">
              &gt;
            </span>

          </button>

        </div>

        {/* 🔹 Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-black"
        >
          ☰
        </button>

      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-5 bg-white rounded-2xl shadow-lg p-5">

          <ul className="flex flex-col gap-4 text-black text-[17px] font-medium">

            <li className="hover:text-[rgb(249,117,24)] transition">
              Features
            </li>

            <li className="hover:text-[rgb(249,117,24)] transition">
              Pricing
            </li>

            <li className="hover:text-[rgb(249,117,24)] transition">
              FAQ
            </li>

            <li className="hover:text-[rgb(249,117,24)] transition">
              Blog
            </li>

          </ul>

          <div className="flex flex-col gap-3 mt-6">

            <button className="text-black font-medium border border-gray-300 rounded-full py-3">
              Sign in
            </button>

            <button className="bg-[#5B21B6] text-white py-3 rounded-full font-bold">
              Get Started
            </button>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;