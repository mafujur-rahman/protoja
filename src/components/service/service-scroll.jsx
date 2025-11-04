"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceStackScroll = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const stack = [
    { bg: "#D4ABFF", title: "Product UI/UX Design", desc: "We build brands that people remember...", tags: ["Brand Strategy", "Logo Design"] },
    { bg: "#ABDFFF", title: "Brand Guideline Design", desc: "We build brands that people remember...", tags: ["Brand Strategy", "Logo Design"] },
    { bg: "#FFABFF", title: "Mobile App UX/UI Design", desc: "We build brands that people remember...", tags: ["Brand Strategy", "Logo Design"] },
    { bg: "#FFABAC", title: "Web App Dashboard Design", desc: "We build brands that people remember...", tags: ["Brand Strategy", "Logo Design"] },
    { bg: "#B2FFAB", title: "SaaS Product Design", desc: "We build brands that people remember...", tags: ["Brand Strategy", "Logo Design"] },
  ];

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const cards = cardRefs.current;

    // Initial setup: all cards below viewport
    gsap.set(cards, { yPercent: 100, scale: 1 });
    gsap.set(cards[0], { yPercent: 0, scale: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    cards.forEach((card, i) => {
      if (i === 0) return;
      const prev = cards[i - 1];

      // Bring current card to top
      tl.set(card, { zIndex: cards.length + i });

      // Immediately shrink previous card as next card starts
      tl.to(
        prev,
        {
          scale: 0.8, // shrink previous card
          duration: 1,
          ease: "power3.inOut",
        },
        "+=0"
      );

      // Slide next card from bottom on top
      tl.to(
        card,
        {
          yPercent: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "<" // start at the same time as previous card shrinking
      );
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  const Card = ({ bg, title, desc, tags }, index) => (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      className="stack-card absolute inset-0 rounded-2xl p-6 lg:p-14 shadow-2xl h-full flex items-center justify-center"
      style={{ backgroundColor: bg }}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 w-full">
        <div className="flex-1">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1E1E1E] leading-tight">
            {title}
          </h2>
          {desc && <p className="mt-4 max-w-xl text-[#1E1E1E] font-medium">{desc}</p>}
          {tags && (
            <div className="lg:my-16 my-2 flex flex-wrap gap-3">
              {tags.map((t, i) => (
                <span key={i} className="bg-white/30 px-4 py-2 rounded-full text-sm font-semibold text-[#1E1E1E]">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <Image src="/service/service.png" width={617} height={465} alt="service" />
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative h-[90vh] lg:h-[80vh] mt-16 md:mt-0 overflow-hidden">
      {stack.map((item, i) => Card(item, i))}
    </div>
  );
};

export default ServiceStackScroll;
