"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ChangingColorText = ({ lines, changedColor, wordClassName }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const words = containerRef.current?.querySelectorAll(".word");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      if (words?.length) {
        tl.to(words, {
          color: changedColor,
          stagger: 0.2,
          ease: "none",
        });
      }

      ScrollTrigger.refresh();

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const renderText = (text) => {
    return text.split(" ").map((word, index) => (
      <React.Fragment key={index}>
        <span className={`word ${wordClassName}`}>{word}</span>
        {index < text.split(" ").length - 1 && "\u00A0"}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex justify-center items-center">
      <h1 className="lg:leading-[60px] leading-10" ref={containerRef}>
        {lines.map((line, idx) => (
          <React.Fragment key={idx}>
            {renderText(line)}
            {idx < lines.length - 1 && <span className="block" />}
          </React.Fragment>
        ))}
      </h1>
    </div>
  );
};

export default ChangingColorText;
