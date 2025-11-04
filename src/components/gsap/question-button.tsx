/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import React, { useCallback, useLayoutEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const QuestionButton = () => {
  const rightImage = useRef(null);
  const leftImage = useRef(null);
  const scheduleRef = useRef(null);

  useLayoutEffect(() => {
    gsap.set(leftImage.current, { autoAlpha: 0, x: 0 });
    return () =>
      gsap.killTweensOf([
        leftImage.current,
        rightImage.current,
        scheduleRef.current,
      ]);
  }, []);

  const handleMouseEnter = useCallback(() => {
    gsap.to(rightImage.current, {
      scaleY: 0.1,
      duration: 0.2,
      autoAlpha: 0,
    });
    gsap.to(leftImage.current, {
      x: 20,
      scaleY: 1,
      duration: 0.2,
      autoAlpha: 1,
    });
    gsap.to(scheduleRef.current, { x: 35, duration: 0.3 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    gsap.to(rightImage.current, { scaleY: 1, duration: 0.3, autoAlpha: 1 });
    gsap.to(leftImage.current, {
      x: 0,
      scaleY: 0.5,
      duration: 0.3,
      autoAlpha: 0,
    });
    gsap.to(scheduleRef.current, { x: 0, duration: 0.3 });
  }, []);

  return (
    <div className="text-gray-200 flex items-center mt-20">
      <div
        ref={leftImage}
        className=" bg-[#272727] absolute left-0 items-center flex justify-center px-[10px] py-[10px]  rounded-full"
      >
        <div className="bg-green-600 w-5 h-5 items-center flex justify-center rounded-full">
          <FaWhatsapp width={28} height={28} color="#FFFFFF" />
        </div>
      </div>
      <button
        ref={scheduleRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=" bg-[#272727] w-full max-w-[241] p-2 rounded-full"
      >
        <span className="my-auto text-[#F76F00] text-xl font-base">
          Ask Questions
        </span>
      </button>
      <div
        ref={rightImage}
        className=" bg-[#272727] items-center flex justify-center px-[10px] py-[10px]  rounded-full"
      >
        <div className="bg-green-600 w-5 h-5 items-center flex justify-center rounded-full">
          <FaWhatsapp width={28} height={28} color="#FFFFFF" />
        </div>
      </div>
    </div>
  );
};

export default QuestionButton;
