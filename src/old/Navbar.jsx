import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");


  /* =========================================
     SCROLL + NAVBAR SHRINK + PROGRESS
  ========================================= */

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 50);

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        totalHeight > 0
          ? (window.scrollY / totalHeight) * 100
          : 0;

      setScrollProgress(progress);
    };


    window.addEventListener("scroll", handleScroll);

    handleScroll();


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  /* =========================================
     ACTIVE SECTION
  ========================================= */

  useEffect(() => {

    const sections = [
      "platform",
      "pricing",
      "faq",
    ];


    const handleActiveSection = () => {

      const scrollPosition =
        window.scrollY + 120;


      for (const sectionId of sections) {

        const section =
          document.getElementById(sectionId);


        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition <
            section.offsetTop +
            section.offsetHeight
        ) {

          setActiveSection(sectionId);

          break;
        }

      }

    };


    window.addEventListener(
      "scroll",
      handleActiveSection
    );


    handleActiveSection();


    return () => {

      window.removeEventListener(
        "scroll",
        handleActiveSection
      );

    };

  }, []);


  const navigate = useNavigate();
  const location = useLocation();


  /* =========================================
     SCROLL TO SECTION
  ========================================= */

  const scrollToSection = (id) => {

    const performScroll = () => {

      if (id === "hero") {

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        return;
      }


      const section =
        document.getElementById(id);


      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    };


    if (location.pathname !== "/") {

      navigate("/");


      window.setTimeout(
        performScroll,
        120
      );


      return;
    }


    performScroll();
  };


  /* =========================================
     NAVIGATION
  ========================================= */

  const navigateTo = (path) => {

    navigate(path);

    setMobileMenu(false);

  };


  const goToNextBlog = () => {

    setMobileMenu(false);

    window.location.assign("/blog");

  };


  /* =========================================
     DESKTOP MENU
  ========================================= */

  const desktopMenu = [

    {
      label: "Pricing",
      id: "pricing",
      action: () =>
        scrollToSection("pricing"),
    },

    {
      label: "FAQ",
      id: "faq",
      action: () =>
        scrollToSection("faq"),
    },

    {
      label: "Blog",
      id: "blog",
      action: goToNextBlog,
    },

  ];


  /* =========================================
     MOBILE MENU
  ========================================= */

  const mobileMenuItems = [

    {
      label: "Features",
      action: () =>
        scrollToSection("platform"),
    },

    {
      label: "Pricing",
      action: () =>
        scrollToSection("pricing"),
    },

    {
      label: "FAQ",
      action: () =>
        scrollToSection("faq"),
    },

    {
      label: "Blog",
      action: goToNextBlog,
    },

  ];


  return (

    <nav
      className={`fixed top-0 left-0 w-full bg-white px-5 z-[9999] font-sans animate-[navDrop_0.6s_ease-out] transition-all duration-300 ${
        isScrolled
          ? "py-2 shadow-[0_7px_50px_rgba(0,0,0,0.20)]"
          : "py-5 shadow-[0_4px_5px_rgba(0,0,0,0.20)]"
      }`}
    >


      {/* =========================================
          SCROLL PROGRESS
      ========================================= */}

      <div
        className="absolute top-0 left-0 h-[4px] bg-gradient-to-r from-[#0088FF] via-[#7B61FF] to-[#C400D6] transition-all duration-150"
        style={{
          width: `${scrollProgress}%`,
        }}
      />


      {/* =========================================
          NAV CONTENT
      ========================================= */}

      <div className="max-w-[1160px] mx-auto flex items-center justify-between">


        {/* =====================================
            CSS LOGO
        ====================================== */}

        <div className="flex items-center ml-3 sm:ml-4">

          <button
            type="button"
            onClick={() =>
              scrollToSection("hero")
            }
            aria-label="Go to top"
            className="group"
          >

            <span
              className={`sortted-logo block bg-[linear-gradient(100deg,#369FF4_0%,#4B8FF5_18%,#6879F5_38%,#865CF0_60%,#A33CE5_80%,#8F25D9_100%)] bg-clip-text text-transparent font-sans font-bold tracking-[-0.055em] leading-none cursor-pointer transition-all duration-300 group-hover:scale-[1.03] ${
                isScrolled
                  ? "text-[24px] md:text-[28px]"
                  : "text-[26px] md:text-[30px]"
              }`}
            >
              Sortted
            </span>

          </button>

        </div>


        {/* =====================================
            DESKTOP MENU
        ====================================== */}

        <div className="hidden lg:flex items-center gap-10">


          {/* FEATURES */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("platform")
            }
            className={`text-[15px] font-medium transition duration-300 ${
              activeSection === "platform"
                ? "text-[#5D21B0]"
                : "text-[#1E0D01] hover:text-[#5A5A5A]"
            }`}
          >

            Features

          </button>


          {/* OTHER MENU ITEMS */}

          {desktopMenu.map(
            (item, index) => (

              <button
                key={index}
                type="button"
                onClick={item.action}
                className={`text-[15px] font-medium transition duration-300 ${
                  activeSection === item.id
                    ? "text-[#5D21B0]"
                    : "text-[#1E0D01] hover:text-[#5A5A5A]"
                }`}
              >

                {item.label}

              </button>

            )
          )}

        </div>


        {/* =====================================
            RIGHT SIDE
        ====================================== */}

        <div className="hidden lg:flex items-center gap-7">


          {/* SIGN IN */}

          <button
            type="button"
            onClick={() =>
              navigateTo("/login")
            }
            className="text-[15px] font-bold text-[#1E0D01] hover:text-[#5A5A5A] transition duration-300"
          >

            Sign in

          </button>


          {/* =================================
              GET STARTED
          ================================= */}

          <button
            type="button"
            onClick={() =>
              navigateTo("/signup")
            }
            className="group bg-[#0B8DE3] hover:bg-[#087CC8] text-white text-[14px] font-semibold px-6 py-3 rounded-[10px] flex items-center overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.12)] transition-all duration-300"
          >

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

          </button>

        </div>


        {/* =====================================
            MOBILE MENU BUTTON
        ====================================== */}

        <button
          type="button"
          onClick={() =>
            setMobileMenu(
              !mobileMenu
            )
          }
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col gap-1"
        >

          <span className="w-6 h-[2px] bg-black"></span>

          <span className="w-6 h-[2px] bg-black"></span>

          <span className="w-6 h-[2px] bg-black"></span>

        </button>


      </div>


      {/* =========================================
          MOBILE MENU
      ========================================= */}

      {mobileMenu && (

        <div className="lg:hidden bg-white border-t border-gray-100 mt-5">

          <div className="flex flex-col py-5">


            {mobileMenuItems.map(
              (item, index) => (

                <button
                  key={index}
                  type="button"
                  onClick={item.action}
                  className="text-left px-2 py-4 text-[15px] font-medium text-[#1E0D01] hover:text-[#262626] transition"
                >

                  {item.label}

                </button>

              )
            )}


            {/* MOBILE BUTTONS */}

            <div className="flex flex-col gap-4 mt-5 pt-5 border-t border-gray-100">


              <button
                type="button"
                onClick={() =>
                  navigateTo("/login")
                }
                className="text-left text-[15px] font-bold text-[#1E0D01]"
              >

                Sign in

              </button>


              <button
                type="button"
                onClick={() =>
                  navigateTo("/signup")
                }
                className="bg-[#0B8DE3] text-white text-[15px] font-semibold px-6 py-3 rounded-[10px] w-fit"
              >

                Get Started

              </button>


            </div>

          </div>

        </div>

      )}


      {/* =========================================
          CSS
      ========================================= */}

      <style>
        {`

          @keyframes navDrop {

            from {
              opacity: 0;
              transform: translateY(-16px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }

          }


          /*
            Keeps the gradient text clean,
            especially in Chrome.
          */

          .sortted-logo {
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            text-rendering: geometricPrecision;

            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

        `}
      </style>


    </nav>
  );
}

export default Navbar;