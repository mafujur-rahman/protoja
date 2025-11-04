"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    review:
      "Absolutely outstanding service! Highly recommend to anyone looking for quality and reliability.",
    name: "John Doe",
    designation: "CEO, TechCorp",
  },
  {
    id: 2,
    review:
      "They exceeded our expectations in every way possible. Brilliant team and amazing delivery!",
    name: "Sarah Smith",
    designation: "Marketing Head, BizSolutions",
  },
  {
    id: 3,
    review:
      "Fantastic experience working with them. Will definitely continue collaborating!",
    name: "Michael Johnson",
    designation: "Founder, StartupWorld",
  },
  {
    id: 4,
    review:
      "Fantastic experience working with them. Will definitely continue collaborating!",
    name: "Md. Erazul Islam",
    designation: "Founder, StartupWorld",
  },
];

const BuildingBrandsCard = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const reviewRef = useRef(null);

  const nextSlide = () => {
    gsap.to(reviewRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      },
    });
  };

  const prevSlide = () => {
    gsap.to(reviewRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setCurrent(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
      },
    });
  };

  useEffect(() => {
    gsap.fromTo(
      reviewRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, [current]);

  useEffect(() => {
    if (window.innerWidth > 768) {
      if (!containerRef.current) return;

      const triggers = [];

      const anim1 = gsap.to(cardsRef.current[0], {
        x: () => -cardsRef.current[0].offsetWidth * 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        ease: "power2.out",
      });

      const anim2 = gsap.to(cardsRef.current[1], {
        x: -95,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        ease: "power2.out",
      });

      const anim3 = gsap.to(cardsRef.current[2], {
        x: 420,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        ease: "power2.out",
      });

      triggers.push(
        anim1.scrollTrigger,
        anim2.scrollTrigger,
        anim3.scrollTrigger
      );

      return () => {
        triggers.forEach((t) => t.kill());
        gsap.killTweensOf(cardsRef.current);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="py-10 md:flex justify-center
      relative md:h-[60vh] px-4 sm:px-6 max-w-[1440px] mx-auto"
    >
      <div
        ref={(el) => (cardsRef.current[0] = el)}
        style={{ backgroundImage: "url('/assets/Frame 2085662573.svg')" }}
        className=" overflow-hidden md:absolute rounded-[16px] px-8 w-full md:w-[350px] h-[451px]"
      >
        <h1 className="text-[#1E1E1E] pt-14 md:text-[70px]">120M +</h1>
        <div className=" flex items-center gap-2 pt-[55%]">
          <Image
            src={"/assets/funding.svg"}
            width={24}
            height={24}
            alt="arrow.png"
          />
          <h2 className="text-2xl text-[#272727]">Total Funding</h2>
        </div>
        <div className="pt-[10%] text-[#464646]">
          Startups we have helped in their growth journey over the past 6 years
        </div>
      </div>
      <div
        ref={(el) => (cardsRef.current[1] = el)}
        className="overflow-hidden md:absolute bg-white my-4 md:my-0 md:top-4 rounded-[16px] pl-8 w-full md:w-[350px] h-[451px]"
      >
        <div style={{ backgroundImage: "url('/assets/Frame 2085662575.svg')" }}>
          <h1 className="text-[#1E1E1E] pt-14 md:text-[70px]">65 +</h1>
          <div className=" flex items-center gap-2 pt-[55%]">
            <Image
              src={"/assets/Logo black.svg"}
              width={24}
              height={24}
              alt="arrow.png"
            />
            <h2 className="text-2xl text-[#272727]">Completed project</h2>
          </div>
          <div className="pt-[10%] text-[#464646]">
            Startups we have helped in their growth journey over the past 6
            years
          </div>
        </div>
      </div>
      <div
        ref={(el) => (cardsRef.current[2] = el)}
        className="md:w-[539px] w-full md:h-[451px] rounded-[16px] md:flex relative overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 z-0"
          style={{ backgroundImage: "url('/assets/Satisfied Client bg.svg')" }}
        />

        {/* Orange color overlay */}
        <div className="absolute inset-0 bg-[#F76F00] z-10" />

        {/* Main content */}
        <div className="relative z-20 md:flex w-full">
          {/* Left Side: Client Stats */}
          <div className="px-8 flex flex-col justify-between py-14">
            <h1 className="text-[#FAFAFA] text-[70px] leading-none">163+</h1>

            <div className="flex items-center md:pt-[68%] gap-2">
              <Image
                src="/assets/satiesfied-client.svg"
                width={24}
                height={24}
                alt="satisfied client"
              />
              <h2 className="text-2xl text-[#FAFAFA]">Satisfied Client</h2>
            </div>

            <p className="text-[#FAFAFA] text-sm leading-relaxed">
              Ensuring client satisfaction through exceptional quality,
              reliability, and seamless service.
            </p>
          </div>

          {/* Right Side: Review Slider */}
          <div className="flex flex-col bg-[#FAFAFA] rounded-[12px] md:mx-6 md:my-6 w-full md:relative overflow-hidden px-6 py-8">
            {/* Progress Circles */}
            <div className="absolute top-3 right-5 flex gap-2">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    current === idx ? "bg-[#FFCA6D]" : "bg-[#E6E6E6]"
                  }`}
                />
              ))}
            </div>

            {/* Review Content */}
            <div
              ref={reviewRef}
              className="flex flex-col justify-center items-start w-full"
            >
              {/* Star Ratings */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    fill="#FF8B09"
                    className="text-yellow-400 text-2xl"
                  />
                ))}
              </div>

              <p className="text-[#575757] text-lg mb-6 leading-relaxed">
                "{testimonials[current].review}"
              </p>

              <div>
                <h3 className="text-xl text-[#141414] font-semibold">
                  {testimonials[current].name}
                </h3>
                <p className="text-[#F65129] opacity-80">
                  {testimonials[current].designation}
                </p>
              </div>
            </div>

            {/* Arrows */}
            <div className="absolute bottom-4 right-5 flex gap-4">
              {/* Prev */}
              <button onClick={prevSlide}>
                <div className="h-12 w-12 border border-[#F76F00] rounded-full flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 12H5M5 12L12 5M5 12L12 19"
                      stroke="#F76F00"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* Next */}
              <button onClick={nextSlide}>
                <div className="h-12 w-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingBrandsCard;
