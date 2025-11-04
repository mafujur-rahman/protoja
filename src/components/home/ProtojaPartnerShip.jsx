"use client";

import * as React from "react";
import PricingCards from "./PricingCard";
import gsap from "gsap";
export default function ProtoJaPartnerShip() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const words = containerRef.current.querySelectorAll(".word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
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
    <div className="bg-[FAFAFA] md:pt-20 max-w-[1440px] px-4 md:px-20 sm:px-6 mx-auto">
      <div className="md:flex justify-between">
        <div className="md:w-1/5">
          <p className="md:text-2xl text-black">PROTOJA PARTNERSHIP</p>
          <div className="w-full border-t-2 border-[#CBCBCB] mt-4">
            <p className="md:text-xl text-black mt-4">
              Reliable, scalable, and expert design support—whenever you need
              it.
            </p>
          </div>
        </div>
        <div>
          <h1
            ref={containerRef}
            className="md:leading-[70px] pt-10 md:pt-0 text-4xl md:mx-0 md:text-[54px] font-bold"
          >
            {renderText("Build a long-term design team that")}
            <br />
            {renderText("grows with your business. Get")}
            <br />
            {renderText("expert UI/UX solutions with flexible")}
            <br />
            {renderText("pricing, full transparency, and no")}
            <br />
            {renderText("hidden fees.")}
          </h1>
          <h4 className="text-[#161616] py-16">
            Your dedicated design team, ready to scale with your needs. Get
            expert UI/UX solutions with flexible pricing <br />
            seamless collaboration, and no hidden fees.
          </h4>
        </div>
      </div>
      <div className="">
        <PricingCards />
      </div>
    </div>
  );
}
