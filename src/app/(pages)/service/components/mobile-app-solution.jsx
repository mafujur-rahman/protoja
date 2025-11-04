import ChangingColorText from "@/components/gsap/changing-color-text";
import React from "react";
import SolutionCard from "./card";

const MobileAppSolution = () => {
  return (
    <div className="bg-[FAFAFA] max-w-[1440px] px-4 md:mx-20 sm:px-6 mx-auto">
      <div className="md:flex lg:gap-60 ">
        <div className="max-w-[432px] w-full">
          <p className="md:text-2xl text-4xl text-black">Solution</p>
          <div className="w-full border-t-2 border-[#E6E6E6] mt-4">
            <p className="md:text-xl text-black mt-4">
              Mobile app solutions we offer!
            </p>
          </div>
        </div>

        <div className="block md:hidden">
          <h1 className="text-3xl mt-5 font-bold text-[#1E1E1E]">
            Mobile app solutions we offer!
          </h1>
        </div>

        <div className="hidden md:block">
          <ChangingColorText
            wordClassName="text-[#CBCBCB] font-bold text-4xl lg:text-[72px] transition-colors duration-300"
            changedColor="#1E1E1E"
            lines={["Mobile app", "solutions we", "offer!"]}
          />
        </div>
      </div>
      <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-10 mt-16">
        <SolutionCard
          title={"User Research"}
          src={"/service/card-1.png"}
          details={
            "To ensure your app meets users' expectations, we do in-depth user research to understand their needs, desires, and pain points."
          }
        />
        <SolutionCard
          title={"Information architecture"}
          src={"/service/card-2.png"}
          details={
            "To ensure your app meets users' expectations, we do in-depth user research to understand their needs, desires, and pain points."
          }
        />
        <SolutionCard
          title={"UX/UI Design"}
          src={"/service/card-3.png"}
          details={
            "To ensure your app meets users' expectations, we do in-depth user research to understand their needs, desires, and pain points."
          }
        />
      </div>
      <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-10 mt-10 lg:mt-16">
        <SolutionCard
          title={"Brand Identity"}
          src={"/service/card-4.png"}
          details={
            "To ensure your app meets users' expectations, we do in-depth user research to understand their needs, desires, and pain points."
          }
        />
        <SolutionCard
          title={"Usability Testing"}
          src={"/service/card-5.png"}
          details={
            "To ensure your app meets users' expectations, we do in-depth user research to understand their needs, desires, and pain points."
          }
        />
        <SolutionCard
          title={"Accessibility Testing"}
          src={"/service/card-6.png"}
          details={
            "To ensure your app meets users' expectations, we do in-depth user research to understand their needs, desires, and pain points."
          }
        />
      </div>
    </div>
  );
};

export default MobileAppSolution;
