"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: 1,
    count: 200,
    text: `Startups we have helped in their\n journey over the past 6 years`,
  },
  {
    id: 2,
    count: 500,
    text: `Projects successfully completed\nwith innovation at the core`,
  },
  {
    id: 3,
    count: 1000,
    text: `Happy clients globally who've\ntrusted our process and people`,
  },
];

const ProFacts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const circleRef = useRef(null);
  const slideContainerRef = useRef(null);
  const countRef = useRef(null);
  const progressAnimation = useRef(null);
  const countAnimation = useRef(null);
  const slideTimeout = useRef(null);
  const isInitialMount = useRef(true);

  const animateSlideTransition = (direction = "left") => {
    const slideContainer = slideContainerRef.current;
    if (!slideContainer) return;

    gsap.to(slideContainer, {
      x: direction === "left" ? -100 : 100,
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
      onComplete: () => {
        gsap.set(slideContainer, {
          x: direction === "left" ? 100 : -100,
          opacity: 0,
        });

        gsap.to(slideContainer, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          onComplete: resetProgressAnimation,
        });
      },
    });
  };

  const animateCount = (targetValue) => {
    if (countAnimation.current) countAnimation.current.kill();

    countAnimation.current = gsap.to(countRef.current, {
      innerText: targetValue,
      duration: 0.8,
      snap: { innerText: 1 },
      ease: "power2.out",
      onUpdate: function () {
        setDisplayCount(Math.floor(this.targets()[0].innerText));
      },
    });
  };

  const startProgressAnimation = () => {
    if (!circleRef.current) return;

    const circle = circleRef.current;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    gsap.set(circle, {
      strokeDasharray: circumference,
      strokeDashoffset: circumference,
      transformOrigin: "center",
      rotation: -90,
    });

    progressAnimation.current = gsap.to(circle, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "none",
      onComplete: () => {
        slideTimeout.current = setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 300);
      },
    });
  };

  const resetProgressAnimation = () => {
    if (progressAnimation.current) progressAnimation.current.kill();
    if (slideTimeout.current) clearTimeout(slideTimeout.current);
    startProgressAnimation();
  };

  const nextSlide = () => {
    if (progressAnimation.current) progressAnimation.current.kill();
    if (slideTimeout.current) clearTimeout(slideTimeout.current);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (progressAnimation.current) progressAnimation.current.kill();
    if (slideTimeout.current) clearTimeout(slideTimeout.current);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      animateCount(slides[currentSlide].count);
      startProgressAnimation();
      return;
    }

    setDisplayCount(0);
    animateCount(slides[currentSlide].count);
    animateSlideTransition("left");
  }, [currentSlide]);

  useEffect(() => {
    return () => {
      if (progressAnimation.current) progressAnimation.current.kill();
      if (countAnimation.current) countAnimation.current.kill();
      if (slideTimeout.current) clearTimeout(slideTimeout.current);
    };
  }, []);

  return (
    <div>
      <div className="text-[#FAFAFA] md:mx-0 overflow-hidden">
        <div className="max-w-[219px] w-full">
          <div className="flex py-[10px] justify-between">
            <p>Pro facts</p>
            <p>{`${currentSlide + 1} / ${slides.length}`}</p>
          </div>
          <p className="w-full h-[2px] bg-white"></p>
        </div>

        {/* Slide Content */}
        <div ref={slideContainerRef} className="relative">
          <div className="text-7xl font-semibold pt-7">
            <span ref={countRef}>{displayCount}</span>+
          </div>
          <p className="text-xl mt-4 whitespace-pre-line">
            {slides[currentSlide].text}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="py-10 flex gap-16">
          <button
            onClick={prevSlide}
            className="bg-[#FFFFFF] h-12 w-12 cursor-pointer rounded-full flex items-center justify-center relative z-20 hover:bg-gray-100 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#F76F00">
              <path
                d="M19 12H5M5 12L12 5M5 12L12 19"
                stroke="#F76F00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="relative h-12 w-12 bg-[#FFFFFF] rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg
              className="absolute"
              width="55"
              height="55"
              viewBox="0 0 24 24"
            >
              <circle
                ref={circleRef}
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="#F76F00"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#F76F00">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#F76F00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProFacts;
