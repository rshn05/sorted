import { useEffect, useRef } from "react";

import logo1 from "./assets/images/logo/1.png";
import logo2 from "./assets/images/logo/2.png";
import logo3 from "./assets/images/logo/3.png";
import logo4 from "./assets/images/logo/4.png";
import logo5 from "./assets/images/logo/5.png";
import logo6 from "./assets/images/logo/6.png";


/* =========================================
   PARTICLE DOT BACKGROUND
========================================= */

function LogoDots() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const config = {
            spacing: 12,
            dotRadius: 0.7,
            dotColor: 92,
            dotOpacity: 0.28,
            interactionRadius: 115,
            force: 7,
            drag: 0.9,
            ease: 0.075,
            mouseSmoothness: 0.22,
        };

        let width = 0;
        let height = 0;

        let particles = [];

        let animationFrameId;

        let resizeObserver;

        const mouse = {
            x: -1000,
            y: -1000,
            targetX: -1000,
            targetY: -1000,
            active: false,
        };


        /* =========================================
           CREATE GRID
        ========================================= */

        const createParticles = () => {
            particles = [];

            const startX = config.spacing / 2;
            const startY = config.spacing / 2;

            for (let y = startY; y < height; y += config.spacing) {
                for (let x = startX; x < width; x += config.spacing) {
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
           RESIZE
        ========================================= */

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();

            width = rect.width;
            height = rect.height;

            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            createParticles();
        };


        /* =========================================
           MOUSE
        ========================================= */

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();

            mouse.targetX = event.clientX - rect.left;
            mouse.targetY = event.clientY - rect.top;

            if (!mouse.active) {
                mouse.x = mouse.targetX;
                mouse.y = mouse.targetY;
            }

            mouse.active = true;
        };


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
                const dx = particle.x - mouse.x;
                const dy = particle.y - mouse.y;

                const distanceSquared = dx * dx + dy * dy;

                const interactionRadiusSquared =
                    config.interactionRadius *
                    config.interactionRadius;

                if (
                    distanceSquared < interactionRadiusSquared &&
                    distanceSquared > 0
                ) {
                    const distance = Math.sqrt(distanceSquared);

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

            particle.vx *= config.drag;
            particle.vy *= config.drag;


            /* RETURN TO GRID */

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


            particle.x += particle.vx;
            particle.y += particle.vy;
        };


        /* =========================================
           DRAW
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
           ANIMATION
        ========================================= */

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

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

            for (let i = 0; i < particles.length; i += 1) {
                updateParticle(particles[i]);
                drawParticle(particles[i]);
            }

            animationFrameId =
                requestAnimationFrame(animate);
        };


        const sliderSection =
            canvas.closest(".logo-slider-section");


        resizeCanvas();


        if (typeof ResizeObserver !== "undefined") {
            resizeObserver =
                new ResizeObserver(() => {
                    resizeCanvas();
                });

            resizeObserver.observe(
                canvas.parentElement
            );
        } else {
            window.addEventListener(
                "resize",
                resizeCanvas
            );
        }


        sliderSection?.addEventListener(
            "mousemove",
            handleMouseMove
        );

        sliderSection?.addEventListener(
            "mouseleave",
            handleMouseLeave
        );


        animate();


        return () => {
            cancelAnimationFrame(animationFrameId);

            resizeObserver?.disconnect();

            window.removeEventListener(
                "resize",
                resizeCanvas
            );

            sliderSection?.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            sliderSection?.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );
        };

    }, []);


    return (
        <div className="pointer-events-none absolute inset-0 z-0">

            <canvas
                ref={canvasRef}
                className="block h-full w-full"
                style={{
                    touchAction: "none",
                    willChange: "transform",
                }}
            />

        </div>
    );
}


function LogoSlider() {

    const logos = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
    ];

    return (

<section className="logo-slider-section relative w-full pb-20 md:pb-24 overflow-hidden bg-white">

            <LogoDots />

            {/* BOTTOM FADE */}
<div className="pointer-events-none absolute bottom-0 left-0 z-[2] w-full h-[80px] bg-[linear-gradient(0deg,#FFFFFF_10%,rgba(255,255,255,0.86)_30%,rgba(255,255,255,0)_100%)]"></div>

            <div className="relative z-10 max-w-[1200px] mx-auto px-5">

                {/* Fade Container */}
                <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">

                    {/* Slider */}
                    <div className="group flex w-max animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused]">

                        {[...logos, ...logos, ...logos].map((logo, index) => (

                            <div
                                key={index}
                                className="flex items-center justify-center mx-10 shrink-0"
                            >

                                <img
                                    src={logo}
                                    alt="logo"
                                    className="h-[2.4rem] md:h-[3rem] w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default LogoSlider;