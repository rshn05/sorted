import logo from "./assets/images/logo1.png"

function Navbar() {
  return (
    <nav className="bg-white px-10 py-5 shadow-sm">
      <div className="flex items-center justify-between">

        {/* 🔹 Left Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-5 w-auto object-contain cursor-pointer"
          />
        </div>

        {/* 🔹 Center Menu */}
        <ul className="flex items-center gap-8 text-[18px] font-medium text-black list-none">

          {/* Features Dropdown */}
          <li className="relative group cursor-pointer">

            {/* Features */}
            <span className="flex items-center hover:text-[rgb(249,117,24)] transition-colors duration-200">

              <span className="mr-2">
                Features
              </span>

              {/* Arrow */}
              <span className="transform transition-transform duration-300 rotate-90 group-hover:-rotate-90">
                &gt;
              </span>

            </span>

            {/* Dropdown */}
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-50 bg-white rounded-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.18)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 list-none p-5">

              <li className="px-2 py-1 rounded-xl hover:bg-gray-100 hover:text-[rgb(249,117,24)] transition text-left">
                Home
              </li>

              <li className="px-2 py-1 rounded-xl hover:bg-gray-100 hover:text-[rgb(249,117,24)] transition text-left">
                About
              </li>

              <li className="px-2 py-1 rounded-xl hover:bg-gray-100 hover:text-[rgb(249,117,24)] transition text-left">
                Pricing
              </li>

              <li className="px-2 py-1 rounded-xl hover:bg-gray-100 hover:text-[rgb(249,117,24)] transition text-left">
                Career
              </li>

              <li className="px-2 py-1 rounded-xl hover:bg-gray-100 hover:text-[rgb(249,117,24)] transition text-left">
                Blog
              </li>

            </ul>
          </li>

          {/* Other Menu Items */}
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

        {/* 🔹 Right Buttons */}
        <div className="flex items-center gap-5">

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

      </div>
    </nav>
  );
}

export default Navbar;