import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  computeScrollProgress,
  createRafThrottledHandler,
  resolveActiveSection,
  waitForSectionThenScroll,
} from "./navbarBehavior";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const pendingSectionRef = useRef(null);
  const cancelPendingScrollRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  /* =========================================
     SINGLE throttled scroll listener (#29)
     — shrink + progress + active section
  ========================================= */
  useEffect(() => {
    const getSectionBounds = (id) => {
      const section = document.getElementById(id);
      if (!section) return null;
      return { top: section.offsetTop, height: section.offsetHeight };
    };

    const updateFromScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setScrollProgress(
        computeScrollProgress(
          scrollY,
          document.documentElement.scrollHeight,
          document.documentElement.clientHeight
        )
      );
      setActiveSection(resolveActiveSection(scrollY, getSectionBounds));
    };

    const onScroll = createRafThrottledHandler(updateFromScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    updateFromScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const performScroll = (id) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("hero");
      return;
    }

    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(id);
  };

  /* Cross-route: wait for landing sections to mount (#19) */
  useEffect(() => {
    if (location.pathname !== "/") return undefined;
    const id = pendingSectionRef.current;
    if (!id) return undefined;

    cancelPendingScrollRef.current?.();
    cancelPendingScrollRef.current = waitForSectionThenScroll(id, {
      performScroll: (sectionId) => {
        pendingSectionRef.current = null;
        performScroll(sectionId);
      },
    });

    return () => {
      cancelPendingScrollRef.current?.();
      cancelPendingScrollRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- scroll when route settles
  }, [location.pathname]);

  const scrollToSection = (id) => {
    // #17 — always close mobile menu on section navigation
    setMobileMenu(false);

    if (location.pathname !== "/") {
      pendingSectionRef.current = id;
      navigate("/");
      return;
    }

    performScroll(id);
  };

  const navigateTo = (path) => {
    navigate(path);
    setMobileMenu(false);
  };

  const goToBlog = () => {
    navigate("/blog");
    setMobileMenu(false);
  };

  const desktopMenu = [
    {
      label: "Pricing",
      id: "pricing",
      action: () => scrollToSection("pricing"),
    },
    {
      label: "FAQ",
      id: "faq",
      action: () => scrollToSection("faq"),
    },
    {
      label: "Blog",
      id: "blog",
      action: goToBlog,
    },
  ];

  const mobileMenuItems = [
    {
      label: "Features",
      action: () => scrollToSection("platform"),
    },
    {
      label: "Pricing",
      action: () => scrollToSection("pricing"),
    },
    {
      label: "FAQ",
      action: () => scrollToSection("faq"),
    },
    {
      label: "Blog",
      action: goToBlog,
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
      <div
        className="absolute top-0 left-0 h-[4px] bg-gradient-to-r from-[#0088FF] via-[#7B61FF] to-[#C400D6] transition-all duration-150"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      <div className="max-w-[1160px] mx-auto flex items-center justify-between">
        <div className="flex items-center ml-3 sm:ml-4">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
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

        <div className="hidden lg:flex items-center gap-10">
          <button
            type="button"
            onClick={() => scrollToSection("platform")}
            className={`text-[15px] font-medium transition duration-300 ${
              activeSection === "platform"
                ? "text-[#5D21B0]"
                : "text-[#1E0D01] hover:text-[#5A5A5A]"
            }`}
          >
            Features
          </button>

          {desktopMenu.map((item, index) => (
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
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-7">
          <button
            type="button"
            onClick={() => navigateTo("/login")}
            className="text-[15px] font-bold text-[#1E0D01] hover:text-[#5A5A5A] transition duration-300"
          >
            Sign in
          </button>

          <button
            type="button"
            onClick={() => navigateTo("/signup")}
            className="group bg-[#0B8DE3] hover:bg-[#087CC8] text-white text-[14px] font-semibold px-5 py-2 rounded-[10px] flex items-center overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.12)] transition-all duration-300"
          >
            <div className="relative h-[22px] overflow-hidden">
              <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-[22px]">
                <span className="h-[22px] leading-[22px]">Start Free Trial</span>
                <span className="h-[22px] leading-[22px]">Start Free Trial</span>
              </div>
            </div>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenu}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {mobileMenu && (
        <div
          className="lg:hidden bg-white border-t border-gray-100 mt-5"
          data-testid="mobile-menu"
        >
          <div className="flex flex-col py-5">
            {mobileMenuItems.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={item.action}
                className="text-left px-2 py-4 text-[15px] font-medium text-[#1E0D01] hover:text-[#262626] transition"
              >
                {item.label}
              </button>
            ))}

            <div className="flex flex-col gap-4 mt-5 pt-5 border-t border-gray-100">
              <button
                type="button"
                onClick={() => navigateTo("/login")}
                className="text-left px-2 py-3 text-[15px] font-bold text-[#1E0D01]"
              >
                Sign in
              </button>

              <button
                type="button"
                onClick={() => navigateTo("/signup")}
                className="mx-2 bg-[#0B8DE3] text-white text-[14px] font-semibold px-6 py-3 rounded-[10px]"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
