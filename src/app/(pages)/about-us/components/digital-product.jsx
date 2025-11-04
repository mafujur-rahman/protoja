import ChangingColorText from "@/components/gsap/changing-color-text";
import React from "react";

const DigitalProduct = () => {
  return (
    <div className="bg-[#F76F00]">
      <div className="max-w-[1440px] mx-auto px-4 lg:py-20 md:py-12 py-6 sm:px-6 md:px-20">
        <div className="flex md:flex-row flex-col md:gap-28 lg:gap-32">
          <div className="text-[#E8E8E8] pt-2">OUR ACHIEVEMENT</div>
          <div>
            <div>
              <ChangingColorText
                wordClassName=" font-bold  md:text-4xl text-3xl lg:text-7xl transition-colors duration-300 text-orange-400"
                changedColor={"#E8E8E8"}
                lines={[
                  "Protoja is a digital product",
                  "design studio that cares",
                  "about you and your",
                  "brand, no matter the size or",
                  "industry",
                ]}
              />

              <div className="flex py-3 items-center">
                <button className="bg-[#E8E8E8] text-[#F76F00] px-4 py-2 rounded-full ">
                  VIEW DETAILS
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
                      stroke="#F76F00"
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
        <div className="lg:pt-32 gap-20 pt-16 flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="text-[#FDD2B0] font-normal text-7xl md:text-[100px] lg:text-[130px]">40+</p>
            <p className="text-[#FFFFFF] pt-12 md:pt-20 font-normal text-3xl md:text-[40px]">
              Years of experience
            </p>
            <p className="text-[#FFFFFF] pt-4 font-normal text-base">
              Our team consists of skilled <br />
              designers who create
            </p>
          </div>
          <div>
            <p className="text-[#FDD2B0] font-normal text-7xl md:text-[100px] lg:text-[130px]">40+</p>
            <p className="text-[#FFFFFF] pt-12 md:pt-20 font-normal text-3xl md:text-[40px]">
              Completed projects
            </p>
            <p className="text-[#FFFFFF] pt-4 font-normal text-base">
              Our team consists of skilled <br />
              designers who create
            </p>
          </div>
          <div>
            <p className="text-[#FDD2B0] font-normal text-7xl md:text-[100px] lg:text-[130px]">95%</p>
            <p className="text-[#FFFFFF] pt-12 md:pt-20 font-normal text-3xl md:text-[40px]">
              Satisfied Client
            </p>
            <p className="text-[#FFFFFF] pt-4 font-normal text-base">
              Our team consists of skilled <br />
              designers who create catchy product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalProduct;
