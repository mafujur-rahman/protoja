import Image from "next/image";
import React from "react";

const UnlockYourDesign = () => {
  return (
    <div className="bg-[#030303]">
      <div className="px-4 py-16 md:py-32 sm:px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="bg-[url('/service/unlock.svg')] lg:pl-12 lg:py-16 rounded-3xl h-[600px] lg:h-[534px] bg-center bg-cover overflow-hidden">
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Text Section */}
            <div className="px-6 lg:px-0" >
              <p className="text-white text-[44px] md:text-[54px] leading-snug font-semibold">
                Unlock your new design <br />
                <span className="italic">team today.</span>
              </p>
              <p className="text-white">Let’s talk, no strings attached</p>
              <p className="text-white pt-12 lg:pt-24 text-[44px] lg:text-[54px]">
                <span className="text-[#F76F00]">Let’s</span> work
              </p>
              <div className="flex pt-8 items-center">
                <button className="bg-[#F76F00] text-[18px] text-white px-4 py-2 rounded-full">
                  Book a free Consultation today!
                </button>
                <button className="bg-[#F76F00] px-2 rounded-full py-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="-rotate-45"
                    fill="none"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image Section */}
            <Image className="mt-8 md:mt-0" src={'/unlock.png'} width={820} height={435} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockYourDesign;

{/* <div className="relative w-[1000px] h-[1000px] gap-4">
              <Image src={'/service/laptop.png'} className="absolute object-contain lg:top-12 right-44" width={1000} height={1000} alt="" />
              <Image src={'/service/mobile.png'} className="absolute object-contain top-0 right-0" width={500} height={500} alt="" />
            </div> */}