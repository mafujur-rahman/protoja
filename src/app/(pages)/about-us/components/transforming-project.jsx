import ChangingColorText from "@/components/gsap/changing-color-text";
import Crossing from "./crossing";
import Crossing2 from "./crossing-2";
import React from "react";

const TransformingProject = () => {
  return (
    <div className="bg-[#272727]">
      <div className="max-w-[1440px] mx-auto px-4 lg:pt-20  md:pt-12 py-6 sm:px-6 md:px-20">
        <div className="flex md:flex-row flex-col md:gap-28 lg:gap-40">
          <div className="text-[#E8E8E8] pt-1">OUR MISSION</div>
          <div>
            <ChangingColorText
              wordClassName=" font-bold  md:text-4xl text-3xl lg:text-7xl transition-colors duration-300 text-[#161616]"
              changedColor={"#E8E8E8"}
              lines={[
                "Transforming projects",
                "into lasting, trusted",
                "stand out and thrive. ",
                "partnerships built on",
                "mutual success",
              ]}
            />
            <p className="text-[#A7A7A7CC] max-w-[396px] py-8 ">
              SaaS UX design impacts user satisfaction, adoption, and retention.
              Orbix understands this and has dedicated SaaS experts in our
              agency.
            </p>
            <div className="flex items-center">
              <button className="bg-[#F76F00] text-white px-4 py-2 rounded-full ">
                Let's talk
              </button>
              <button className="bg-[#FFFFFF] px-2 rounded-full py-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="-rotate-45"
                  fill="none"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:py-32 md:py-16 py-8">
        <div className="-rotate-[11.5deg]">
          <Crossing />
        </div>
        <div className="rotate-[7.8deg]">
          <Crossing2 />
        </div>
      </div>
    </div>
  );
};

export default TransformingProject;
