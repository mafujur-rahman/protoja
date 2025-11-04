import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const ChangingText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textWrapperRef = useRef(null);

  const splitTextIntoSpans = (text) => {
    const mid = Math.floor(text.length / 2);
    return text.split("").map((letter, i) => (
      <span key={i} data-index={i - mid} className="inline-block opacity-0">
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  useEffect(() => {
    const animateText = () => {
      const wrapper = textWrapperRef.current;
      if (!wrapper) return;

      const spans = wrapper.querySelectorAll("span");

      gsap.killTweensOf(spans);

      spans.forEach((span) => {
        gsap.set(span, { y: -50, opacity: 0 });
      });

      Math.floor(spans.length / 2);

      gsap.to(spans, {
        y: 0,
        opacity: 1,
        stagger: {
          each: 0.04,
          from: "center",
        },
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    };

    animateText();

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      ref={textWrapperRef}
      className="text-[#FFF2D3]"
    >
      {splitTextIntoSpans(texts[currentIndex])}
    </div>
  );
};

export default ChangingText;
