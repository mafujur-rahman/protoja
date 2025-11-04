"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomServiceButton from "../gsap/service-button";

gsap.registerPlugin(ScrollTrigger);

export default function Trending() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;
    if (window.innerWidth > 768) {
      gsap.to(cardsRef.current[0], {
        x: -465,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(cardsRef.current[1], {
        x: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        ease: "power3.out",
        duration: 1,
      });
      gsap.to(cardsRef.current[2], {
        x: 465,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        ease: "power3.out",
        duration: 1,
      });
    }
  });

  return (
    <div className="bg-[#E8E8E8] py-10 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20">
        <div className="md:flex pb-10 justify-between">
          <h1 className="text-[#1E1E1E] text-4xl font-semibold lg:text-7xl">
            What's trending
          </h1>
          <div className="mt-4 md:mt-0">
            <CustomServiceButton
              buttonBg="#FFFFFF"
              textColor="black"
              label={"What's trending"}
              href={"/service"}
            />
          </div>
        </div>
        <div
          ref={containerRef}
          className="md:flex justify-center md:h-[50vh] md:relative gap-4"
        >
          {/* Card 1 */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="max-w-[454px] md:absolute"
          >
            <Image
              src="/assets/scrool/t1.png"
              width={2000}
              height={1000}
              alt="approch"
            />
            <p className="text-[#1E1E1E] pt-2">
              The Founders Guide to Rebranding{" "}
            </p>
            <p className="pt-10 text-[#1E1E1E]">Knowledge</p>
            <p className="border-[#1E1E1E] border w-full"></p>
          </div>
          {/* Card 2 */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="max-w-[454px] md:absolute"
          >
            <Image
              src="/assets/scrool/t3.png"
              width={2000}
              height={1000}
              alt="approch"
            />
            <p className="text-[#1E1E1E] pt-2">
              Why is branding a must for startup success ?{" "}
            </p>
            <p className="pt-10 text-[#1E1E1E]">Knowledge</p>
            <p className="border-[#1E1E1E] border w-full"></p>
          </div>
          {/* Card 3 */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="max-w-[454px] md:absolute"
          >
            <Image
              src="/assets/scrool/t2.png"
              width={2000}
              height={1000}
              alt="approch"
            />
            <p className="text-[#1E1E1E] pt-2">
              Why is branding a must for startup success ?{" "}
            </p>
            <p className="pt-10 text-[#1E1E1E]">Knowledge</p>
            <p className="border-[#1E1E1E] border w-full"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
