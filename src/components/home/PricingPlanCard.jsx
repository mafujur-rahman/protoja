"use client";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Link from "next/link";
import TalkNowButton from "../gsap/talk-button";

gsap.registerPlugin(ScrollTrigger);

const PricingPlanCard = () => {
  const pricingContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!pricingContainerRef.current) return;

    if (window.innerWidth > 768) {
      gsap.to(cardsRef.current[0], {
        x: -360,
        scrollTrigger: {
          trigger: pricingContainerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "power2.out",
      });

      gsap.to(cardsRef.current[1], {
        x: 360,
        scrollTrigger: {
          trigger: pricingContainerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <div
      ref={pricingContainerRef}
      className="md:flex flex-col md:flex-row md:relative md:h-[90vh] justify-center mt-20"
    >
      <div
        ref={(el) => (cardsRef.current[0] = el)}
        className=" max-w-[615px] md:h-[800px] my-4 max-h-[800px] bg-[url('/assets/freeAuditBg.svg')] md:absolute bg-cover bg-center rounded-3xl py-5 md:py-20 px-10"
      >
        <h1 className="md:text-7xl text-4xl text-white">Free audit</h1>
        <h2 className="md:text-3xl text-white md:mt-20 mt-10 font-normal">
          30-Minute Call
        </h2>
        <p className="md:text-xl text-white mt-10">
          Discuss your needs, challenges, and project scope with our experts to
          find the best solution.
        </p>
        <button className="md:text-2xl mt-10 bg-[#E6E6E6] rounded-full px-10 py-2 h-[58px] text-[#1E1E1E] w-full">
          Book a call Now
        </button>
        <div className="flex justify-between mt-10">
          <div className="w-1/2">
            <p className="text-white md:text-2xl font-bold">You Get:</p>
            <ul className="text-white md:text-xl list-disc pl-6 space-y-4 ">
              {" "}
              {/* Added list-disc and pl-6 */}
              <li className="mt-10">1 Senior UX Consultant</li>
              <li className="mt-10">1 Product Designer</li>
              <li className="mt-10">Personalized recommendations</li>
              <li className="mt-10">24/7 Figma collaboration</li>
            </ul>
          </div>
          <div className="w-1/2">
            <p className="text-white md:text-2xl font-bold">What’s Included:</p>
            <ul className="text-white md:text-xl list-disc pl-6 space-y-4 ">
              {" "}
              {/* Added list-disc and pl-6 */}
              <li className="mt-10">Expert design insights</li>
              <li className="mt-10">Tailored strategy suggestions</li>
              <li className="mt-10">Actionable next steps</li>
              <li className="mt-10">No obligation, just value</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        ref={(el) => (cardsRef.current[1] = el)}
        className="max-w-[615px] md:h-[800px] my-4 max-h-[800px] bg-cover bg-center md:absolute rounded-3xl bg-[#1E1E1E] p-6"
      >
        <div className="h-[90%] bg-[url('/assets/notSurePlanBg.svg')] bg-no-repeat bg-cover rounded-3xl w-full py-20 px-10">
          <h1 className="md:text-9xl text-6xl font-normal text-white">
            Not sure which plan fits?
          </h1>
          <h2 className="md:text-4xl text-white mt-20 font-normal">
            If you need a custom approach, let’s chat and find the perfect
            solution for your business.
          </h2>
        </div>
       <div className="mt-4">
         <TalkNowButton label={"Let's Talk Now"} />
       </div>
      </div>
    </div>
  );
};

export default PricingPlanCard;
