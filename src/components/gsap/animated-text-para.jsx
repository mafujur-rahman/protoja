"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({
  text,
  className = "",
  stagger = 0.05,
  xOffset = -20,
  yOffset = 0,
  animation = "leftToRight",
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll(".letter");

    let animProps;
    switch (animation) {
      case "leftToRight":
        animProps = { x: xOffset, opacity: 0 };
        break;
      case "topToBottom":
        animProps = { y: yOffset || -20, opacity: 0 };
        break;
      case "maskReveal":
        animProps = { yPercent: 100, opacity: 0 };
        break;
      case "fade":
        animProps = { opacity: 0 };
        break;
      default:
        animProps = { x: xOffset, opacity: 0 };
    }

    gsap.from(letters, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        end: "bottom 80%",
        scrub: 1,
      },
      ...animProps,
      duration: 0.8,
      stagger: stagger,
      ease: "power3.out",
    });
  }, [animation, stagger, xOffset, yOffset]);

  return (
    <span
      ref={textRef}
      className={`inline-flex flex-wrap overflow-hidden break-words ${className}`}
    >
      {text.split(" ").map((word, wi) => (
        <span
          key={wi}
          className="inline-block whitespace-nowrap mr-3" // keep word together
        >
          {word.split("").map((char, ci) => (
            <span key={ci} className="letter inline-block">
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
