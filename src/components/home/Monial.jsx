"use client";

import * as React from "react";
import TestimonialSlider from "./TestimonialSlider";
import gsap from "gsap";
export default function Monial() {
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
    <div className="bg-[FAFAFA] md:p-20 max-w-[1440px] px-4 sm:px-6 md:px-20 mx-auto">
      <div className="md:flex justify-between">
        <div className="md:w-1/5">
          <p className="md:text-2xl text-black">Testimonials</p>
          <div className="w-full border-t-2 border-[#CBCBCB] mt-4">
            <p className="md:text-xl text-black mt-4">
              How our clients feel about working with us
            </p>
          </div>
        </div>
        <h1
          ref={containerRef}
          className="md:leading-[70px] text-4xl md:mx-0 md:text-[70px] font-bold"
        >
          {renderText("Real Experiences,Real")}
          <br />
          {renderText("Success-See what")}
          <br />
          {renderText("Clients Say about")}
          <br />
          {renderText("Protoja")}
        </h1>
      </div>

      <div className="md:flex justify-between mt-20 gap-4"></div>
      <TestimonialSlider />
    </div>
  );
}
