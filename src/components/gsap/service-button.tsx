"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";

const CustomServiceButton = ({ href, label, buttonBg="none",textColor="#F76F00"}) => {
  const rightArrowRef = useRef(null);
  const leftArrowRef = useRef(null);
  const scheduleRef = useRef(null);
  const rightArrowSvg = useRef(null);
  const leftArrowSvg = useRef(null);

  const handleMouseEnter = () => {
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
    gsap.to(scheduleRef.current, {
      x: "40px",
      duration: 0.3,
    });
    gsap.to(rightArrowSvg.current, {
      ease: "bounce.out",
      x: "-20px",
      duration: 1,
    });
    gsap.to(leftArrowSvg.current, {
      ease: "bounce.out",
      duration: 1,
      x: "0px",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(rightArrowRef.current, {
      scaleY: 1,
      duration: 0.3,
      autoAlpha: 1,
    });
    gsap.to(leftArrowRef.current, {
      scaleY: 0.5,
      duration: 0.3,
      autoAlpha: 0,
    });
    gsap.to(leftArrowSvg.current, {
      x: "-20px",
      ease: "bounce.out",
      duration: 1,
    });
    gsap.to(scheduleRef.current, {
      x: "0px",
      duration: 0.3,
    });
    gsap.to(rightArrowSvg.current, {
      ease: "bounce.out",
      x: "0px",
      duration: 1,
    });
  };

  return (
    <div className="relative flex items-center">
      <div
        ref={leftArrowRef}
        className={`bg-[#FFFFFF] h-12 w-12 rounded-full flex items-center justify-center opacity-0 absolute left-[-44px] `}
      >
        <svg
          ref={leftArrowSvg}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#1E1E1E"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="#1E1E1E"
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
        className={`relative z-10 bg-[${buttonBg}] text-[${textColor}] font-medium px-6 py-2.5 rounded-full transition-colors text-xl`}
      >
        {label}
      </Link>

      {/* Arrow - visually moves before the button on hover */}
      <div
        ref={rightArrowRef}
        className=" bg-[#FFFFFF] h-12 w-12 rounded-full flex items-center justify-center relative z-20"
      >
        <svg
          ref={rightArrowSvg}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#1E1E1E"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5M5 12L12 5M5 12L12 19"
            stroke="#1E1E1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomServiceButton;