"use client";

import AnimatedButton from "../gsap/animated-button";
import TalkNowButton from "../gsap/talk-button";
import SpinHome from "../home/SpinHome";
import WorksBrands from "../../app/(pages)/works/components/works-brand";

const WorksTop = () => {
  return (
    <div className="relative bg-[url('/hero-2.png')] bg-no-repeat w-full bg-cover min-h-screen overflow-hidden object-cover">
      {/* Main content */}
      <div className="max-w-[1440px] py-28 sm:py-48 mx-auto lg:px-6">
        <div className="flex px-6 lg:px-0 gap-4 justify-between flex-col md:flex-row">
          <div>
            <p className="text-[#FFF2D3] text-xl font-medium">
              Designing with Purpose, Delivering for the Future
            </p>
            <p className="text-[#FAFAFA] leading-normal text-[36px] lg:text-[72px] font-medium">
              We craft <span className="italic">interactive</span> <br /> experiences
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center mt-8">
              <TalkNowButton label={"Chat with us"} />
              <AnimatedButton href={"/contact"} label={"schedule a call"} />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="lg:p-44 hidden lg:block">
              <SpinHome />
            </div>
            <WorksBrands />
          </div>
        </div>
      </div>

      {/* Testing bar */}
      <div className="absolute bottom-0 left-0 w-full bg-transparent">
        <div className="flex justify-center items-center gap-3 sm:gap-4 lg:gap-8">
          <Testing value="User Testing" className="bg-[#B2FFAB] -rotate-[24deg] w-[90px] sm:w-[120px] lg:w-[193px] text-black" />
          <Testing value="User Testing" className="bg-[#FFD580] rotate-[24deg] w-[90px] sm:w-[120px] lg:w-[193px] text-black" />
          <Testing value="User Testing" className="bg-[#ABDFFF] -rotate-[24deg] w-[90px] sm:w-[120px] lg:w-[193px] text-black" />
          <Testing value="User Testing" className="bg-[#FFABFF] rotate-[24deg] w-[90px] sm:w-[120px] lg:w-[193px] text-black" />
          <Testing value="User Testing" className="bg-[#C3ABFF] -rotate-[24deg] w-[90px] sm:w-[120px] lg:w-[193px] text-black" />
          <Testing value="User Testing" className="bg-[#FFABAC] rotate-[24deg] w-[90px] sm:w-[120px] lg:w-[193px] text-black" />
        </div>
      </div>
    </div>
  );
};

export default WorksTop;

const Testing = ({ value, className }) => {
  return (
    <div
      className={`${className} rounded-full whitespace-nowrap flex justify-center items-center px-4 py-4`}
    >
      {value}
    </div>
  );
};
