import ChangingColorText from "@/components/gsap/changing-color-text";
import Image from "next/image";
import React from "react";

const CreativeProcess = () => {
  return (
    <div className="bg-[url('/projects/p-21.png')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="md:flex gap-4 py-14 lg:py-28 justify-between">
          <div className="md:w-1/5">
            <p className="md:text-2xl text-[#CBCBCB]">Process</p>
            <div className="w-full border-t-2 border-[#CBCBCB] mt-4">
              <p className="md:text-xl text-[#CBCBCB] mt-4">
                Flexible, transparent, and tailored to your needs—get the best
                value with no hidden costs.
              </p>
            </div>
          </div>
          <div className="max-w-[930px] hidden lg:block">
            <ChangingColorText
            lines={[
              "Our creative working process explore",
              "how we can help you achieve your",
              "design goals-no commitement",
              "required.",
            ]}
            changedColor={"#CBCBCB"}
            wordClassName={"text-[#161616] text-[32px] lg:text-[54px]"}
          />
          </div>
          <div className="block lg:hidden">
            <ChangingColorText
            lines={[
              "Our creative working ",
              "process explore",
              "how we can help",
              "you achieve your",
              "design goals-no",
              "commitement",
              "required.",
            ]}
            changedColor={"#CBCBCB"}
            wordClassName={"text-[#161616] text-[32px] lg:text-[54px]"}
          />
          </div>
        </div>
        <div className="lg:pb-32 pb-12 gap-14 lg:gap-28 px-4 flex flex-col lg:flex-row items-center justify-between">
          <Process />
          <Process />
          <Process />
        </div>
      </div>
    </div>
  );
};

export default CreativeProcess;

const Process = () => {
  return (
    <div className="lg:max-w-[519px] max-w-[335px] md:max-w-[400px] h-[473px] lg:h-[633px]  bg-[url('/card.png')]  bg-[#1E1E1E] rounded-xl p-4 ">
      <div className="flex justify-between items-center">
        <h1 className="text-[#FAFAFA] text-[44px]">Research</h1>
        <Image src={"/projects/p-22.png"} width={120} height={140} alt="" />
      </div>
      <p className="text-[#E6E6E6]">
        In the first week, we identify user pain points, analyze business needs,
        and assess challenges. These approaches are essential to set the stage
        for a more effective and improved user experience.
      </p>
      <div className="flex gap-4 items-center pt-10 ">
        <div className="bg-[#73310F] text-[18px] flex justify-center items-center w-[138px] rounded-full px-2 py-2 text-[#E6E6E6]">
          Understand
        </div>
        <div className="bg-[#73310F] text-[18px] flex justify-center items-center w-[138px] rounded-full px-2 py-2 text-[#E6E6E6]">
          Observe
        </div>
        <div className="bg-[#73310F] text-[18px] flex justify-center items-center w-[138px] rounded-full px-2 py-2 text-[#E6E6E6]">
          Research
        </div>
      </div>
      <div className="bg-[#73310F] mt-6 text-[18px] flex justify-center items-center w-[138px] rounded-full px-2 py-2 text-[#E6E6E6]">
        Analysis
      </div>
    </div>
  );
};
