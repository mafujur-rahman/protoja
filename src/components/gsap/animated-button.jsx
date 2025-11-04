"use client";

import Link from "next/link";
import React, { useRef, useCallback, useLayoutEffect } from "react";
import { gsap } from "gsap";

const AnimatedButton = ({
  href,
  label,
  buttonBg = "#F76F00",
  border = "0",
}) => {
  const rightArrowRef = useRef(null);
  const leftArrowRef = useRef(null);
  const scheduleRef = useRef(null);
  const rightArrowSvg = useRef(null);
  const leftArrowSvg = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {});
    return () => ctx.revert(); 
  }, []);

  const handleMouseEnter = useCallback(() => {
    gsap.to(rightArrowRef.current, {
      scaleY: 0.1,
      duration: 0.3,
      autoAlpha: 0,
    });
    gsap.to(leftArrowRef.current, {
      x: "40px",
      scaleY: 1,
      duration: 0.3,
      autoAlpha: 1,
    });
    gsap.to(scheduleRef.current, { x: "40px", duration: 0.3 });
    gsap.to(rightArrowSvg.current, {
      ease: "bounce.out",
      x: "-20px",
      duration: 1,
    });
    gsap.to(leftArrowSvg.current, {
      ease: "bounce.out",
      x: "0px",
      duration: 1,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    gsap.to(rightArrowRef.current, { scaleY: 1, duration: 0.3, autoAlpha: 1 });
    gsap.to(leftArrowRef.current, { scaleY: 0.5, duration: 0.3, autoAlpha: 0 });
    gsap.to(leftArrowSvg.current, {
      x: "-20px",
      ease: "bounce.out",
      duration: 1,
    });
    gsap.to(scheduleRef.current, { x: "0px", duration: 0.3 });
    gsap.to(rightArrowSvg.current, {
      x: "0px",
      ease: "bounce.out",
      duration: 1,
    });
  }, []);

  return (
    <div className="relative flex items-center">
      <div
        ref={leftArrowRef}
        className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center opacity-0 absolute left-[-44px] will-change-transform"
      >
        <svg
          ref={leftArrowSvg}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={scheduleRef}
        href={href}
        style={{ backgroundColor: buttonBg, borderWidth: border }}
        className="relative z-10 text-white font-medium px-6 py-2.5 rounded-full hover:bg-orange-400 transition-colors text-xl will-change-transform"
      >
        {label}
      </Link>

      <div
        ref={rightArrowRef}
        className="bg-[#F76F00] h-12 w-12 rounded-full flex items-center justify-center relative z-20 will-change-transform"
      >
        <svg
          ref={rightArrowSvg}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 12H5M5 12L12 5M5 12L12 19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedButton;
