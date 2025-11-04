import React from "react";
import ProFacts from "../components/pro-facts";
import AboutUsDetails from "../components/about-us-details";

const AboutUsHero = () => {
  return (
    <div className="bg-[#020202] lg:py-52 py-40 md:h-[100vh] h-screen">
      <div className=" flex flex-col gap-4 justify-between md:flex-row sm:px-6 md:px-20 px-4 max-w-[1440px] mx-auto">
        <ProFacts />
        <AboutUsDetails/>
      </div>
    </div>
  );
};

export default AboutUsHero;
