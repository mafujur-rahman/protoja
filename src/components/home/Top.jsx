"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import AnimatedButton from "../gsap/animated-button";
import ChangingText from "../gsap/changing-text";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // scroll + mouse tracking
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  //Pin + expand from bottom-right
  useEffect(() => {
    if (!isVideoLoaded) return;

    const video = videoRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=800", // scroll length
        scrub: true,
        pin: video,
        anticipatePin: 1,
      },
    }).fromTo(
      video,
      {
        scaleX: 1,
        scaleY: 1,
        transformOrigin: "bottom right",
      },
      {
        scaleX: 4.9, // expand width 
        scaleY: 3.2, // expand height 
        ease: "power2.out",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isVideoLoaded]);

  const handleVideoLoaded = () => setIsVideoLoaded(true);

  // Overlay effects
  const overlayOpacity = Math.max(0.7 - scrollY / 1000, 0.4);
  const highlightHue = Math.floor(mousePosition.x * 360);
  const highlightSaturation = 70 + Math.floor(mousePosition.y * 30);
  const highlightColor = `hsl(${highlightHue}, ${highlightSaturation}%, 60%)`;

  return (
    <>
      <div ref={containerRef} className="relative min-h-screen bg-black">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-banner-bg.svg"
            alt=""
            className="absolute w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 bg-black" 
            style={{ opacity: overlayOpacity }}
          ></div>
          <div
            className="absolute inset-0 mix-blend-overlay pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${highlightColor} 0%, transparent 50%)`,
              opacity: 0.6,
            }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 h-screen flex justify-between">
          <div className="grid grid-cols-12 gap-4 md:gap-6 h-full w-full">
            {/* Left Column - Logos, Rating, Services */}
            <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col justify-center space-y-8 md:space-y-16">
              {/* Platform Logos */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="46" height="46" rx="23" fill="white" />
                    <g clipPath="url(#clip0_1597_17764)">
                      <g clipPath="url(#clip1_1597_17764)">
                        <path
                          d="M23.9489 17.6992C25.2469 17.6992 26.4918 18.2149 27.4096 19.1327C28.3275 20.0505 28.8431 21.2954 28.8431 22.5934C28.8431 23.8915 28.3275 25.1363 27.4096 26.0542C26.4918 26.972 25.2469 27.4877 23.9489 27.4877C22.6509 27.4877 21.406 26.972 20.4882 26.0542C19.5703 25.1363 19.0547 23.8915 19.0547 22.5934C19.0547 21.2954 19.5703 20.0505 20.4882 19.1327C21.406 18.2149 22.6509 17.6992 23.9489 17.6992Z"
                          fill="#8A8A8A"
                        />
                        <path
                          d="M24.1707 30.7348C26.3064 30.7348 28.2526 30.0003 29.7266 28.6752L30.7556 27.758L35.3909 32.3171L34.2875 33.3477C31.6356 35.8118 28.0326 37.1724 24.169 37.1724C15.8546 37.1724 9.5625 30.8482 9.5625 22.4948C9.5625 14.1059 15.7074 8 24.169 8C27.9615 8 31.5273 9.36064 34.213 11.7857L35.3553 12.8164L30.7911 17.3789L29.7639 16.4955C28.2526 15.1704 26.2692 14.4715 24.1707 14.4715C19.3526 14.4715 16.0052 17.7834 16.0052 22.5304C16.0052 27.2773 19.4626 30.7348 24.1707 30.7348Z"
                          fill="#8A8A8A"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1597_17764">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(8 8)"
                        />
                      </clipPath>
                      <clipPath id="clip1_1597_17764">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(8 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <img src="/assets/upworkIconHero.svg" alt="Upwork" />
                  <img src="/assets/fiverIconHero.svg" alt="Fiverr" />
                </div>

                <div>
                  <div className="flex items-center">
                    <span className="text-white font-bold text-2xl sm:text-xl mr-2">
                      4.9
                    </span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          width="14"
                          height="14"
                          className="sm:w-4 sm:h-4 md:w-5 md:h-5"
                          viewBox="0 0 24 24"
                          fill="#FF4500"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 md:text-xl sm:text-sm">
                    Based on Marketplace reviews
                  </p>
                </div>
              </div>

              {/* Services List */}
              <div className="grid grid-cols-2 gap-y-2 sm:gap-y-3 md:gap-y-4 text-xl sm:text-sm">
                <div className="pr-2 md:pr-4">
                  <p className="text-white text-xl">Web app design</p>
                </div>
                <div>
                  <p className="text-white text-xl">Design System</p>
                </div>
                <div className="pr-2 md:pr-4">
                  <p className="text-white text-xl">Website design</p>
                </div>
                <div>
                  <p className="text-white text-xl">MVP Development</p>
                </div>
                <div className="pr-2 md:pr-4">
                  <p className="text-white text-xl">UI/UX Design</p>
                </div>
                <div>
                  <p className="text-white text-xl">SaaS Design</p>
                </div>
                <div className="pr-2 md:pr-4">
                  <p className="text-white text-xl">Brand design</p>
                </div>
                <div>
                  <p className="text-white text-xl">Mobile App</p>
                </div>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-col justify-center md:pl-6 lg:pl-16 mt-8 md:mt-0">
              <div>
                {/* Tagline */}
                <p className="text-[#FFF2D3] mb-2 sm:mb-4 text-xs sm:text-sm md:text-xl">
                  Designing with Purpose, Delivering for the Future
                </p>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[90px] font-medium text-[#FAFAFA] leading-tight mb-6 md:mb-12">
                  Shape the future with bold{" "}
                  <span className="inline-block">
                    <ChangingText
                      texts={[
                        "UI UX design",
                        "Web app design",
                        "App design",
                        "SaaS Design",
                        "Mobile app",
                        "Brand Design",
                      ]}
                    />
                  </span>
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8">
                  <Link
                    href="/contact"
                    className="px-4 sm:px-5 md:px-6 py-[10px] md:py-3 bg-white text-black rounded-full text-base md:text-xl font-medium hover:bg-gray-100 transition-colors"
                  >
                    Request a Quote
                  </Link>
                  <AnimatedButton href={"/contact"} label={"schedule a call"} />
                </div>

                {/* Studio Description */}
                <p className="text-gray-300 text-xl sm:text-sm md:text-xl max-w-md mt-12 sm:mt-16 md:mt-[100px]">
                  Protoja is a UI UX Design and Brand design studio, crafting
                  user-centered experiences and impactful brand identities to
                  drive business growth.
                </p>

                {/* Video */}
                <video
                  ref={videoRef}
                  src="/assets/design.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onLoadedData={handleVideoLoaded}
                  className="absolute rounded-xl z-0"
                  style={{
                    width: 280,
                    height: 200,
                    bottom: 0,
                    right: 25,
                    transformOrigin: "bottom right",
                  }}
                ></video>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-0 right-0 px-4 sm:px-6 md:px-10 lg:px-20">
            <div className="grid grid-cols-12 gap-4 md:gap-6 items-end">
              <div className="col-span-12 md:col-span-6 lg:col-span-5"></div>
              <div className="col-span-12 md:col-span-6 lg:col-span-7 flex justify-end">
                <div className="relative w-full max-w-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra scroll space */}
      <div className="relative w-full h-[100vh] bg-black"></div>
    </>
  );
};

export default HeroSection;