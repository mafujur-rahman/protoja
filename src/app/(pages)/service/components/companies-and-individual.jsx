import Image from "next/image";
import React from "react";

const CompaniesAndIndividual = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 ">
      <h1 className="text-[#471903] text-center pb-8 pt-10 lg:pt-20 lg:pb-16 text-2xl">
        {" "}
        <span className="text-[#F76F00]">2,000+</span> companies & individuals
        trust Toos
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-gradient-to-t flex items-center justify-center from-black to-[#14171A] px-4 py-4 rounded-sm">
          <Image src={"/service/2.png"} width={130} height={44} alt="" />
        </div>
        <div className="bg-gradient-to-t flex items-center justify-center from-black to-[#14171A] px-4 py-4 rounded-sm">
          <Image src={"/service/2.png"} width={130} height={44} alt="" />
        </div>
        <div className="bg-gradient-to-t flex items-center justify-center from-black to-[#14171A] px-4 py-4 rounded-sm">
          <Image src={"/service/2.png"} width={130} height={44} alt="" />
        </div>
        <div className="bg-gradient-to-t flex items-center justify-center from-black to-[#14171A] px-4 py-4 rounded-sm">
          <Image src={"/service/2.png"} width={130} height={44} alt="" />
        </div>
      </div>
      <div className="grid mt-8 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-gradient-to-t flex items-center justify-center from-black to-[#14171A] px-4 py-4 rounded-sm">
          <Image src={"/service/2.png"} width={130} height={44} alt="" />
        </div>
        <div className="bg-gradient-to-t flex items-center justify-center from-black to-[#14171A] px-4 py-4 rounded-sm">
          <Image src={"/service/2.png"} width={130} height={44} alt="" />
        </div>
        <div className="bg-gradient-to-t flex items-center justify-center from-black to-[#14171A] px-4 py-4 rounded-sm">
          <Image src={"/service/2.png"} width={130} height={44} alt="" />
        </div>
        <div className="bg-gradient-to-t flex items-center justify-center from-black to-[#14171A] px-4 py-4 rounded-sm">
          <Image src={"/service/2.png"} width={130} height={44} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CompaniesAndIndividual;
