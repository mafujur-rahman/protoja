import React from "react";
import ServiceScroll from "./service-scroll";

const ServicePage = () => {
  return (
    <div className="px-4 md:pt-32 sm:px-6 md:px-20 max-w-[1440px] mx-auto">
      <p className="text-[#FAFAFA] text-center lg:text-left font-medium text-xl md:text-3xl">
        What we offer
      </p>
      <div className="flex gap-8 lg:gap-60 md:flex-row flex-col justify-between md:py-20">
        <div className="max-w-[302px]">
          <h1 className="text-[#FAFAFA] text-2xl">Services</h1>
          <p className="bg-[#FAFAFA] my-4 h-[1px]"></p>
          <div className="text-[#CBCBCB] text-[18px]">
            We deliver transformative digital journeys for renowned global
            brands by combining creativity, AI innovation, and modern
            technology.
          </div>
        </div>
        <div className="text-[#FAFAFA] font-semibold mb-10 lg:mb-0 leading-tight md:text-[72px]">
          Our award winning digital services
        </div>
      </div>
      <div className="pb-20"> 
        <ServiceScroll/>
      </div>
    </div>
  );
};

export default ServicePage;
