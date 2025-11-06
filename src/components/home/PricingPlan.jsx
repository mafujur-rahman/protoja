"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PricingPlanCard from "./PricingPlanCard";
import AnimatedText from "../gsap/animated-text-para";

gsap.registerPlugin(ScrollTrigger);

export default function PricingPlan() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const words = containerRef.current.querySelectorAll(".word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    tl.to(words, {
      color: "#575757",
      stagger: 0.2,
      ease: "none",
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  const renderText = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word inline-block mr-2 text-[#CBCBCB]">
        {word}
      </span>
    ));
  };

  return (
    <div className="bg-[FAFAFA] p-20 max-w-[1440px] px-4 md:mx-20 sm:px-6 mx-auto">
      <div className="md:flex justify-between">
        <div className="md:w-1/5">
          <p className="md:text-2xl text-4xl text-black">
            <AnimatedText
              text="Our Pricing Plan"
              animation="topToBottom"
              yOffset={30}
            />
          </p>
          <div className="w-full border-t-2 border-[#CBCBCB] mt-4">
            <p className="md:text-xl text-black mt-4">

              <AnimatedText
                text="Flexible, transparent, and tailored to your needs—get the best value with no hidden costs."
                animation="fade"
                stagger={0.05}
              />
            </p>
          </div>
        </div>
        <div>
          <h1
            ref={containerRef}
            className="md:leading-[70px] mt-16 md:mt-0 text-4xl md:mx-0 md:text-[70px] font-bold"
          >
            {renderText("Start with a free UX consultation")}
            <br />
            {renderText("and explore how we can help you")}
            <br />
            {renderText("achieve your design goals—no")}
            <br />
            {renderText("commitment required.")}
          </h1>
        </div>
      </div>

      <PricingPlanCard />
    </div>
  );
}
