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

    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    // Initial setup
    gsap.set(cards, {
      y: "100%",
      scale: 1,
      transformOrigin: "center center",
      borderRadius: "16px"
    });

    // First card starts at top
    gsap.set(cards[0], {
      y: "0%",
      scale: 1
    });

    cards.forEach((c) => (c.style.willChange = "transform"));

    const sectionHeight = window.innerHeight;
    const totalDuration = (cards.length - 1) * sectionHeight;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalDuration}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Create smooth stacking animations for all cards with equal spacing
    cards.forEach((card, i) => {
      if (i === 0) return;

      const startPosition = (i - 1) * (1 / (cards.length - 1));
      const endPosition = i * (1 / (cards.length - 1));

      // Animate the previous card to move up and scale down
      tl.fromTo(cards[i - 1],
        {
          scale: 1,
          y: 0,
          borderRadius: "16px"
        },
        {
          scale: 0.68,
          y: 45,
          borderRadius: "38px",
          ease: "none",
          duration: endPosition - startPosition
        },
        startPosition
      );

      // Animate the new card to come in
      tl.fromTo(card,
        {
          y: "100%",
          scale: 1
        },
        {
          y: "0%",
          scale: 1,
          ease: "none",
          duration: endPosition - startPosition
        },
        startPosition
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const Card = ({ bg, title, desc, tags }, index) => (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      className="stack-card absolute inset-0 rounded-2xl p-6 lg:p-14 shadow-2xl min-h-screen flex items-center justify-center"
      style={{ backgroundColor: bg }}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 w-full">
        <div className="flex-1">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1E1E1E] leading-tight">{title}</h2>
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
    <div ref={containerRef} className="relative h-[100vh] lg:h-[100vh] mt-16 md:mt-0 overflow-hidden">
      {stack.map((item, i) => Card(item, i))}
    </div>
  );
};

export default ServiceStackScroll;