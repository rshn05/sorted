import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


/* =========================================
   HERO EMOJI IMAGES
========================================= */

import heroImage1 from "./assets/images/emoji/1.png";
import heroImage2 from "./assets/images/emoji/2.png";
import heroImage3 from "./assets/images/emoji/3.png";
import heroImage4 from "./assets/images/emoji/4.png";
import heroImage5 from "./assets/images/emoji/5.png";
import heroImage6 from "./assets/images/emoji/6.png";
import heroImage7 from "./assets/images/emoji/7.png";


/* =========================================
   LOGO IMAGES
========================================= */

import logo1 from "./assets/images/logo/1.png";
import logo2 from "./assets/images/logo/2.png";
import logo3 from "./assets/images/logo/3.png";
import logo4 from "./assets/images/logo/4.png";
import logo5 from "./assets/images/logo/5.png";
import logo6 from "./assets/images/logo/6.png";


/* =========================================
   ROTATING BADGE CONTENT
========================================= */

const rotatingContent = [
  {
    text: "High-converting copy",
    dotColor: "#8A35E8",
    backgroundColor: "#EEE5FF",
  },
  {
    text: "Winning keywords",
    dotColor: "#FFAA16",
    backgroundColor: "#FFF0D1",
  },
  {
    text: "Intent-driven content",
    dotColor: "#35BE4B",
    backgroundColor: "#E2F3E4",
  },
];


/* =========================================
   HERO IMAGES
========================================= */

const heroImages = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
  heroImage7,
];


/* =========================================
   LOGOS
========================================= */

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
];


/* =========================================
   PARTICLE DOT BACKGROUND
========================================= */

function HeroDots() {
  const canvasRef = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return undefined;


    const ctx = canvas.getContext("2d");

    if (!ctx) return undefined;


    /* =========================================
       PARTICLE SETTINGS
    ========================================= */

    const config = {
      spacing: 12,

      dotRadius: 0.7,

      dotColor: 92,

      dotOpacity: 0.75,

      interactionRadius: 115,

      force: 10,

      drag: 0.9,

      ease: 0.075,

      mouseSmoothness: 0.22,
    };


    let width = 0;
    let height = 0;

    let particles = [];

    let animationFrameId = null;

    let resizeObserver = null;


    const mouse = {
      x: -1000,
      y: -1000,

      targetX: -1000,
      targetY: -1000,

      active: false,
    };


    /* =========================================
       CREATE PARTICLES
    ========================================= */

    const createParticles = () => {
      particles = [];


      const startX =
        config.spacing / 2;

      const startY =
        config.spacing / 2;


      for (
        let y = startY;
        y < height;
        y += config.spacing
      ) {

        for (
          let x = startX;
          x < width;
          x += config.spacing
        ) {

          particles.push({
            x,
            y,

            originalX: x,
            originalY: y,

            vx: 0,
            vy: 0,
          });

        }

      }
    };


    /* =========================================
       RESIZE CANVAS
    ========================================= */

    const resizeCanvas = () => {
      const rect =
        canvas.getBoundingClientRect();


      width =
        rect.width;

      height =
        rect.height;


      const dpr =
        Math.min(
          window.devicePixelRatio || 1,
          2
        );


      canvas.width =
        Math.round(
          width * dpr
        );


      canvas.height =
        Math.round(
          height * dpr
        );


      canvas.style.width =
        `${width}px`;


      canvas.style.height =
        `${height}px`;


      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );


      createParticles();
    };


    /* =========================================
       MOUSE MOVE
    ========================================= */

    const handleMouseMove = (event) => {
      const rect =
        canvas.getBoundingClientRect();


      mouse.targetX =
        event.clientX -
        rect.left;


      mouse.targetY =
        event.clientY -
        rect.top;


      if (!mouse.active) {

        mouse.x =
          mouse.targetX;


        mouse.y =
          mouse.targetY;

      }


      mouse.active = true;
    };


    /* =========================================
       MOUSE LEAVE
    ========================================= */

    const handleMouseLeave = () => {
      mouse.active = false;


      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };


    /* =========================================
       UPDATE PARTICLE
    ========================================= */

    const updateParticle = (particle) => {

      if (mouse.active) {

        const dx =
          particle.x -
          mouse.x;


        const dy =
          particle.y -
          mouse.y;


        const distanceSquared =
          dx * dx +
          dy * dy;


        const interactionRadiusSquared =
          config.interactionRadius *
          config.interactionRadius;


        if (
          distanceSquared <
            interactionRadiusSquared &&
          distanceSquared > 0
        ) {

          const distance =
            Math.sqrt(
              distanceSquared
            );


          const normalized =
            1 -
            distance /
            config.interactionRadius;


          const strength =
            normalized *
            normalized;


          const angle =
            Math.atan2(
              dy,
              dx
            );


          const force =
            config.force *
            strength;


          particle.vx +=
            Math.cos(angle) *
            force;


          particle.vy +=
            Math.sin(angle) *
            force;

        }

      }


      /* DRAG */

      particle.vx *=
        config.drag;


      particle.vy *=
        config.drag;


      /* RETURN TO ORIGINAL GRID */

      particle.vx +=
        (
          particle.originalX -
          particle.x
        ) *
        config.ease;


      particle.vy +=
        (
          particle.originalY -
          particle.y
        ) *
        config.ease;


      /* UPDATE POSITION */

      particle.x +=
        particle.vx;


      particle.y +=
        particle.vy;
    };


    /* =========================================
       DRAW PARTICLE
    ========================================= */

    const drawParticle = (particle) => {

      ctx.beginPath();


      ctx.arc(
        particle.x,
        particle.y,
        config.dotRadius,
        0,
        Math.PI * 2
      );


      ctx.fillStyle =
        `rgba(${config.dotColor}, ${config.dotColor}, ${config.dotColor}, ${config.dotOpacity})`;


      ctx.fill();
    };


    /* =========================================
       ANIMATION LOOP
    ========================================= */

    const animate = () => {

      ctx.clearRect(
        0,
        0,
        width,
        height
      );


      /* SMOOTH MOUSE */

      if (mouse.active) {

        mouse.x +=
          (
            mouse.targetX -
            mouse.x
          ) *
          config.mouseSmoothness;


        mouse.y +=
          (
            mouse.targetY -
            mouse.y
          ) *
          config.mouseSmoothness;

      }


      /* PARTICLES */

      for (
        let i = 0;
        i < particles.length;
        i += 1
      ) {

        updateParticle(
          particles[i]
        );


        drawParticle(
          particles[i]
        );

      }


      animationFrameId =
        requestAnimationFrame(
          animate
        );
    };


    /* =========================================
       HERO
    ========================================= */

    const hero =
      canvas.closest(
        ".hero-section"
      );


    /* =========================================
       START
    ========================================= */

    resizeCanvas();


    if (
      typeof ResizeObserver !==
      "undefined"
    ) {

      resizeObserver =
        new ResizeObserver(() => {

          resizeCanvas();

        });


      if (
        canvas.parentElement
      ) {

        resizeObserver.observe(
          canvas.parentElement
        );

      }

    } else {

      window.addEventListener(
        "resize",
        resizeCanvas
      );

    }


    hero?.addEventListener(
      "mousemove",
      handleMouseMove
    );


    hero?.addEventListener(
      "mouseleave",
      handleMouseLeave
    );


    animate();


    /* =========================================
       CLEANUP
    ========================================= */

    return () => {

      if (
        animationFrameId !== null
      ) {

        cancelAnimationFrame(
          animationFrameId
        );

      }


      resizeObserver?.disconnect();


      window.removeEventListener(
        "resize",
        resizeCanvas
      );


      hero?.removeEventListener(
        "mousemove",
        handleMouseMove
      );


      hero?.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

    };

  }, []);


  return (

    <div className="pointer-events-none absolute inset-0 z-0">

      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        aria-hidden="true"
        style={{
          touchAction: "none",
          willChange: "transform",
        }}
      />

    </div>

  );
}


/* =========================================
   7 EMOJI IMAGES
========================================= */

function HeroImageRow() {

  return (

    <div className="relative flex items-center justify-center mb-7 md:mb-9">

      <div className="flex items-center justify-center -space-x-[8px] sm:-space-x-[9px] md:-space-x-[10px] lg:-space-x-[11px]">


        {heroImages.map(
          (image, index) => (

            <div
              key={`hero-image-${index}`}
              className="hero-character relative shrink-0 w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] md:w-[66px] md:h-[66px] lg:w-[72px] lg:h-[72px] rounded-full"
              style={{
                zIndex:
                  index + 1,

                animationDelay:
                  `${100 + index * 110}ms`,
              }}
            >

              <img
                src={image}
                alt=""
                draggable="false"
                loading="eager"
                decoding="async"
                className="block w-full h-full rounded-full object-cover select-none pointer-events-none"
              />

            </div>

          )
        )}


      </div>

    </div>

  );
}


/* =========================================
   HERO SECTION
========================================= */

function HeroSection() {

  const navigate =
    useNavigate();


  const [
    activeIndex,
    setActiveIndex,
  ] =
    useState(0);


  /* =========================================
     ROTATING BADGE
  ========================================= */

  useEffect(() => {

    const interval =
      window.setInterval(() => {

        setActiveIndex(
          (previousIndex) =>
            (
              previousIndex +
              1
            ) %
            rotatingContent.length
        );

      }, 2000);


    return () => {

      window.clearInterval(
        interval
      );

    };

  }, []);


  const activeContent =
    rotatingContent[
      activeIndex
    ];


  return (

    <section className="hero-section relative w-full bg-white overflow-hidden">


      {/* =====================================
          PARTICLE BACKGROUND
      ====================================== */}

      <HeroDots />


      {/* =====================================
          TOP FADE
      ====================================== */}

      <div className="pointer-events-none absolute top-0 left-0 z-[2] w-full h-[70px] bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.72)_30%,rgba(255,255,255,0)_100%)]"></div>


      {/* =====================================
          HERO AREA
      ====================================== */}

      <div className="relative z-10 w-full min-h-[760px] flex items-center justify-center px-5 sm:px-6 lg:px-8">


        {/* =====================================
            HERO CONTENT
        ====================================== */}

        <div className="w-full max-w-[1200px] flex flex-col items-center justify-center text-center pt-14 pb-16 md:pt-16 md:pb-20 -translate-y-[60px]">


          {/* =====================================
              EMOJI ROW
          ====================================== */}

          <HeroImageRow />


          {/* =====================================
              ROTATING BADGE

              IMPORTANT:
              OUTER = POSITION
              INNER = ANIMATION
          ====================================== */}

          <div className="relative translate-y-[35px]">


            {/* ENTRANCE ANIMATION WRAPPER */}

            <div className="hero-reveal hero-reveal-badge relative h-[82px] md:h-[96px] flex items-center justify-center">


              {/* ACTUAL BADGE */}

              <div
                key={activeIndex}
                className="hero-badge flex items-center justify-center gap-4 md:gap-5 rounded-full px-7 sm:px-9 md:px-11 py-[14px] md:py-[17px] max-w-[95vw]"
                style={{
                  backgroundColor:
                    activeContent.backgroundColor,
                }}
              >


                {/* COLOR DOT */}

                <span
                  className="shrink-0 w-[22px] h-[22px] sm:w-[27px] sm:h-[27px] md:w-[22px] md:h-[22px] rounded-full"
                  style={{
                    backgroundColor:
                      activeContent.dotColor,
                  }}
                ></span>


                {/* ROTATING TEXT */}

                <span className="whitespace-nowrap text-black font-sans font-semibold text-[28px] sm:text-[38px] md:text-[39px] lg:text-[38px] leading-none tracking-[-0.045em]">

                  {
                    activeContent.text
                  }

                </span>


              </div>


            </div>


          </div>


          {/* =====================================
              HEADING
          ====================================== */}

          <h1 className="hero-reveal hero-reveal-heading mt-7 md:mt-8 text-black font-sans font-semibold text-[43px] sm:text-[54px] md:text-[66px] lg:text-[80px] leading-[0.98] tracking-[-0.055em] max-w-[1100px]">

            at the speed of thought.

          </h1>


          {/* =====================================
              DESCRIPTION
          ====================================== */}

          <p className="hero-reveal hero-reveal-description mt-6 md:mt-7 text-[#515970] font-sans font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.025em] max-w-[800px]">

            Built for marketers, agencies, startups and growing teams.

          </p>


          {/* =====================================
              BUTTONS
          ====================================== */}

          <div className="hero-reveal hero-reveal-buttons mt-8 md:mt-9 w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7">


            {/* GET STARTED */}

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/signup"
                )
              }
              className="w-full sm:w-auto min-w-[235px] bg-[#0C89E8] hover:bg-[#087DD8] text-white font-sans font-medium text-[17px] sm:text-[18px] px-7 py-[14px] rounded-[9px] shadow-[0_2px_6px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_7px_18px_rgba(12,137,232,0.24)] active:translate-y-0"
            >

              Get started for free

            </button>


            {/* REQUEST DEMO */}

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/contact"
                )
              }
              className="w-full sm:w-auto min-w-[235px] bg-white hover:bg-[#F7F7F7] text-black border-[1.5px] border-black font-sans font-medium text-[17px] sm:text-[18px] px-7 py-[12.5px] rounded-[9px] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_7px_18px_rgba(0,0,0,0.1)] active:translate-y-0"
            >

              Request a demo

            </button>


          </div>


          {/* =====================================
              TRUST ITEMS
          ====================================== */}

          <div className="hero-reveal hero-reveal-trust mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10">


            {/* ITEM 1 */}

            <div className="flex items-center gap-2">

              <span className="w-[19px] h-[19px] rounded-full bg-black text-white flex items-center justify-center text-[11px] font-bold">

                ✓

              </span>


              <span className="text-[#272727] font-sans font-normal text-[14px] sm:text-[15px]">

                No credit card required

              </span>

            </div>


            {/* ITEM 2 */}

            <div className="flex items-center gap-2">

              <span className="w-[19px] h-[19px] rounded-full bg-black text-white flex items-center justify-center text-[11px] font-bold">

                ✓

              </span>


              <span className="text-[#272727] font-sans font-normal text-[14px] sm:text-[15px]">

                Cancel anytime

              </span>

            </div>


          </div>


        </div>


      </div>


      {/* =====================================
          LOGO SLIDER AREA
      ====================================== */}

      <div className="hero-reveal hero-reveal-logos relative z-10 w-full -mt-[150px] pt-10 pb-24 md:pt-12 md:pb-28">


        <div className="max-w-[1200px] mx-auto px-5">


          {/* =====================================
              SIDE MASK
          ====================================== */}

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">


            {/* =====================================
                SLIDER
            ====================================== */}

            <div className="group flex w-max animate-[logoScroll_25s_linear_infinite] hover:[animation-play-state:paused]">


              {[...logos, ...logos, ...logos].map(
                (logo, index) => (

                  <div
                    key={`logo-${index}`}
                    className="flex items-center justify-center mx-10 shrink-0"
                  >

                    <img
                      src={logo}
                      alt=""
                      draggable="false"
                      loading="eager"
                      decoding="async"
                      className="h-[2.4rem] md:h-[3rem] w-auto object-contain opacity-80 hover:opacity-100 transition duration-300 select-none"
                    />

                  </div>

                )
              )}


            </div>


          </div>


        </div>


      </div>


      {/* =====================================
          BOTTOM DOT FADE
      ====================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 z-[2] w-full h-[70px] bg-[linear-gradient(0deg,#FFFFFF_0%,rgba(255,255,255,0.65)_25%,rgba(255,255,255,0)_100%)]"></div>


      {/* =====================================
          STYLES
      ====================================== */}

      <style>
        {`

          /* =================================
             7 IMAGE ENTRANCE
             BIG → NORMAL
          ================================= */

          @keyframes heroImageZoomOut {

            0% {
              opacity: 0;
              transform: scale(1.45);
              filter: blur(4px);
            }


            55% {
              opacity: 1;
              transform: scale(0.96);
              filter: blur(0px);
            }


            75% {
              transform: scale(1.04);
            }


            100% {
              opacity: 1;
              transform: scale(1);
              filter: blur(0px);
            }

          }


          /* =================================
             IMAGE OUTER WRAPPER
             ENTRANCE ONLY
          ================================= */

          .hero-character {
            opacity: 0;

            transform: scale(1.45);

            transform-origin: center center;

            animation-name: heroImageZoomOut;

            animation-duration: 650ms;

            animation-timing-function:
              cubic-bezier(0.22, 1, 0.36, 1);

            animation-fill-mode: forwards;

            will-change: transform, opacity;

            backface-visibility: hidden;

            -webkit-backface-visibility: hidden;
          }


          /* =================================
             IMAGE ITSELF
             HOVER TILT ONLY
          ================================= */

          .hero-character img {
            display: block;

            transform:
              rotate(0deg)
              translateZ(0);

            transform-origin:
              center center;

            transition:
              transform
              260ms
              cubic-bezier(0.22, 1, 0.36, 1);

            will-change: transform;

            backface-visibility: hidden;

            -webkit-backface-visibility: hidden;

            image-rendering: auto;
          }


          /* =================================
             TILT ON HOVER
          ================================= */

          .hero-character:hover img {
            transform:
              rotate(12deg)
              translateZ(0);
          }


          /* =================================
             BADGE CHANGE ANIMATION
          ================================= */

          @keyframes badgeEnter {

            0% {
              opacity: 0;
              transform:
                translateY(8px)
                scale(0.97);
              filter: blur(4px);
            }


            40% {
              opacity: 1;
              filter: blur(0px);
            }


            100% {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
              filter: blur(0px);
            }

          }


          .hero-badge {
            animation:
              badgeEnter
              300ms
              cubic-bezier(0.22, 1, 0.36, 1);
          }


          /* =================================
             HERO CONTENT REVEAL
          ================================= */

          @keyframes heroContentReveal {

            0% {
              opacity: 0;

              transform:
                translateY(22px);

              filter:
                blur(4px);
            }


            100% {
              opacity: 1;

              transform:
                translateY(0);

              filter:
                blur(0px);
            }

          }


          .hero-reveal {
            opacity: 0;

            animation-name:
              heroContentReveal;

            animation-duration:
              700ms;

            animation-timing-function:
              cubic-bezier(0.22, 1, 0.36, 1);

            animation-fill-mode:
              forwards;
          }


          /* =================================
             CONTENT STAGGER
          ================================= */

          .hero-reveal-badge {
            animation-delay: 620ms;
          }


          .hero-reveal-heading {
            animation-delay: 700ms;
          }


          .hero-reveal-description {
            animation-delay: 790ms;
          }


          .hero-reveal-buttons {
            animation-delay: 880ms;
          }


          .hero-reveal-trust {
            animation-delay: 970ms;
          }


          .hero-reveal-logos {
            animation-delay: 1060ms;
          }


          /* =================================
             LOGO SLIDER
          ================================= */

          @keyframes logoScroll {

            from {
              transform:
                translate3d(
                  0,
                  0,
                  0
                );
            }


            to {
              transform:
                translate3d(
                  -33.333333%,
                  0,
                  0
                );
            }

          }


          /* =================================
             MOBILE
          ================================= */

          @media (max-width: 640px) {

            .hero-section {
              min-height: 700px;
            }

          }


          /* =================================
             REDUCED MOTION
          ================================= */

          @media (
            prefers-reduced-motion: reduce
          ) {

            .hero-character {
              opacity: 1;

              transform: none;

              animation: none;
            }


            .hero-character img {
              transition: none;
            }


            .hero-reveal {
              opacity: 1;

              transform: none;

              filter: none;

              animation: none;
            }


            .hero-badge {
              animation: none;
            }

          }

        `}
      </style>


    </section>

  );
}


export default HeroSection;