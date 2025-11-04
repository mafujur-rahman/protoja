"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import QuestionButton from "../gsap/question-button";
import AnimatedButton from "../gsap/animated-button";
import ConsultationButton from "../gsap/consultation";

gsap.registerPlugin(ScrollTrigger);

const Question = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    if (window.innerWidth > 768) {
      gsap.to(cardsRef.current[0], {
        x: -200,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(cardsRef.current[1], {
        x: 420,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        ease: "power3.out",
        duration: 1,
      });
    }
  });

  return (
    <div
      ref={containerRef}
      className="bg-[#272727] px-4 md:px-4 py-28 md:h-[80vh] md:flex md:relative justify-center"
    >
      <div
        ref={(el) => (cardsRef.current[0] = el)}
        className={`flex flex-col justify-center md:absolute bg-black-400 bg-[url('/assets/letsworkbg.png')] bg-cover bg-center self-stretch px-6 py-4 my-auto rounded-2xl  min-h-[505px] min-w-[240px] md:w-[867px] max-md:px-2 max-md:max-w-full `}
      >
        <p className=" text-white text-3xl">
          Unlock your new design team today
        </p>
        <p className=" text-[#FF8B09] mt-2 font-base text-xl">
          Let’s talk, no strings attached
        </p>
        <div className="flex flex-col mt-10 w-full max-md:max-w-full">
          <div className="gap-2.5 mt-6 self-stretch px-2.5 py-4 w-full text-7xl font-base border-b border-zinc-300 leading-[104px] text-white max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
            <span className="text-[#F76F00]">Let’s</span> work
          </div>
          <div className="mt-20">

          </div>

          <div className=" mt-20">
            <ConsultationButton/>
          </div>
        </div>
      </div>
      <div
        ref={(el) => (cardsRef.current[1] = el)}
        className={`px-6 my-6 md:my-0 py-6 md:py-0 rounded-2xl md:absolute bg-[#F76F00] min-w-[240px] w-[309px] max-md:px-5 `}
        style={{ height: "500px" }}
      >
        <div>
          <Image
            src={"/assets/scrool/logo.png"}
            width={1000}
            height={1000}
            alt="Profile picture of Rafat, Design Head at Protoja"
            className="w-[100px] mt-24"
          />
        </div>

        <p className="mt-12 text-black">
          {" "}
          My Name is Rafat, Design Head at Protoja. I will answer all your
          Question
        </p>
        <div className="text-black border-b border-[#D16004] mt-10"></div>
        <QuestionButton/>
      </div>
    </div>
  );
};

export default Question;
