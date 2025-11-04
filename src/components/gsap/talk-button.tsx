/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useRef, useCallback, useLayoutEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { gsap } from "gsap";

const TalkNowButton = ({label}) => {
  const rightImage = useRef(null);
  const leftImage = useRef(null);
  const scheduleRef = useRef(null);

  useLayoutEffect(() => {
    gsap.set(leftImage.current, { autoAlpha: 0, x: -20 });
    return () => gsap.killTweensOf([leftImage.current, rightImage.current, scheduleRef.current]);
  }, []);

  const handleMouseEnter = useCallback(() => {
    gsap.to(rightImage.current, {
      scaleY: 0.1,
      duration: 0.2,
      autoAlpha: 0,
    });
    gsap.to(leftImage.current, {
      x: 0,
      scaleY: 1,
      duration: 0.2,
      autoAlpha: 1,
    });
    gsap.to(scheduleRef.current, { x: 45, duration: 0.3 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    gsap.to(rightImage.current, { scaleY: 1, duration: 0.3, autoAlpha: 1 });
    gsap.to(leftImage.current, { x: -20, scaleY: 0.5, duration: 0.3, autoAlpha: 0 });
    gsap.to(scheduleRef.current, { x: 0, duration: 0.3 });
  }, []);

  return (
    <div className=" flex items-center relative">
      <div
        ref={leftImage}
        className="absolute left-0 border bg-[#414141] items-center flex justify-center w-12 h-12 border-white rounded-full"
      >
        <div className="bg-green-600 w-7 h-7 items-center flex justify-center rounded-full">
          <FaWhatsapp width={28} height={28} color="#FFFFFF" />
        </div>
      </div>
      <a
        ref={scheduleRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href="https://www.whatsapp.com/"
        className="relative z-10 bg-[#FAFAFA] text-black font-medium px-6 py-2.5 rounded-full transition-colors text-xl"
      >
        {label}
      </a>
      <div
        ref={rightImage}
        className="border bg-[#414141] items-center flex justify-center w-12 h-12 border-white rounded-full"
      >
        <div className="bg-green-600 w-7 h-7 items-center flex justify-center rounded-full">
          <FaWhatsapp width={28} height={28} color="#FFFFFF" />
        </div>
      </div>
    </div>
  );
};

export default TalkNowButton;