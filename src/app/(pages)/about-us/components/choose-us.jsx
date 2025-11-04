"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const features = [
  {
    icon: "/about-us/c-1.svg",
    title: "User-Centered Design",
    description:
      "Great design starts with understanding real users. We step into their shoes to create intuitive, accessible, and engaging experiences that feel natural and effortless.",
  },
  {
    icon: "/about-us/c-2.svg",
    title: "Skilled & Passionate Team",
    description:
      "Our team of expert UI/UX designers brings a diverse set of skills and deep industry knowledge to every project. From research to prototyping, we craft user-friendly interfaces that elevate digital products.",
  },
  {
    icon: "/about-us/c-3.svg",
    title: "Innovative & Future-Proof Solutions",
    description:
      "We don’t just follow design trends—we set them. Our designs are built for longevity, ensuring your digital product stays relevant, functional, and impactful as technology evolves.",
  },
  {
    icon: "/about-us/c-4.svg",
    title: "Data-Driven Decision Making",
    description:
      "Every design choice is backed by research, user testing, and analytics. We combine creativity with insights to ensure that designs not only look great but also drive real results for your business.",
  },
  {
    icon: "/about-us/c-4.svg",
    title: "Transparent & Collaborative Process",
    description:
      "We believe in clear, open communication. You’ll have full visibility into our process, from ideation to execution, ensuring that every step aligns with your vision and goals.",
  },
  {
    icon: "/about-us/c-5.svg",
    title: "Efficiency Without Compromise",
    description:
      "We balance speed with quality, ensuring that projects are delivered on time without sacrificing creativity, usability, or attention to detail.",
  },
];

const ChooseUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 40,
      ease: "linear",
    });
  }, []);

  return (
    <div>
      <div className="overflow-hidden bg-[#F76F00] py-3">
        <div ref={containerRef} className="flex gap-6 w-max">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <p className="text-black text-2xl">Why choose Us</p>
              <Image
                src="/about-us/a-7.png"
                width={40}
                height={40}
                alt=""
                className="pr-4"
              />
            </div>
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`duplicate-${i}`}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <p className="text-black text-2xl">Why choose Us</p>
              <Image
                src="/about-us/a-7.png"
                width={40}
                height={40}
                alt=""
                className="pr-4"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1E1E1E]">
        <div className="max-w-[1440px] mx-auto px-4 lg:py-20 md:py-12 py-6 sm:px-6 md:px-20">
          <div className="max-w-full mx-auto flex flex-col md:flex-row gap-6 justify-between">
            <div className="min-w-[200px]">
              <h2 className="text-3xl md:text-4xl text-[#FFFFFF] font-semibold leading-tight">
                Why <br /> Choose <br /> Protoja?
              </h2>
            </div>
            <div className="flex-1 max-w-[947px] space-y-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row md:items-start items-center lg:gap-16 gap-5 border-b border-[#FFFFFF1A] pb-6"
                >
                  <div className="flex gap-4 max-w-[230px] w-full">
                    <Image src={feature.icon} width={48} height={48} alt="" />
                    <h3 className="text-lg text-[#FFFFFF] font-semibold">
                      {feature.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[#FFFFFF] mt-2 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
