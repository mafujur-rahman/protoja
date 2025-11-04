"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Crossing2 = () => {
  const icons = [
    "/about-us/cross-11.png",
    "/about-us/cross-10.png",
    "/about-us/cross-9.png",
    "/about-us/cross-1.png",
    "/about-us/cross-2.png",
    "/about-us/cross-3.png",
    "/about-us/cross-4.png",
    "/about-us/cross-5.png",
    "/about-us/cross-6.png",
    "/about-us/cross-7.png",
    "/about-us/cross-8.png",
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".marquee-track",
        { xPercent: -50 }, 
        {
          xPercent: 0,
          duration: 40,
          repeat: -1,
          ease: "linear",
        }
      );
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black py-2 w-[120vw] -ml-[10vw]" ref={marqueeRef}>
      <div className="flex marquee-track w-max">
        {[...icons, ...icons, ...icons].map((src, i) => (
          <div key={i} className="flex items-center gap-4 px-2">
            <div className="w-20 h-10 flex-shrink-0 relative">
              <Image
                src={src}
                alt={`cross-icon-${i}`}
                fill
                className={`object-contain ${[8, 9, 10].includes(i % icons.length) ? "" : "rotate-6"}`}
              />
            </div>
            <Image
              src="/about-us/sparkle.svg"
              alt="sparkle"
              width={30}
              height={30}
              className="rotate-12"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crossing2;
