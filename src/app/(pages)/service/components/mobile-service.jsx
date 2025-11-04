import Button1 from "@/components/buttons/button";
import Image from "next/image";
import React from "react";

const MobileService = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="flex md:flex-row flex-col mt-20 justify-between gap-4">
        <Image src={"/service/man.png"} width={737} height={578} alt="" />
        <div>
          <p className="md:text-[44px] text-[32px] font-semibold leading-10 lg:leading-[50px] text-[#1E1E1E]">
            Users can't stop <br /> using your mobile app <br /> - we promise
            that!
          </p>
          <p className="text-[#4E4E4E] py-8 text-[16px]">
            Protoja is a UI UX Design and Brand design studio, crafting <br />{" "}
            user-centered experiences{" "}
          </p>
          <div className="flex gap-5">
            <p className="px-4 rounded-full text-base text-[#343434] py-3 bg-[#FFABAC]">
              User friendly design
            </p>
            <p className="px-4 rounded-full text-base text-[#343434] py-3 bg-[#D4ABFF]">
              Engagement
            </p>
          </div>
          <p className="px-4 w-[180px] mt-4 rounded-full text-base text-[#343434] py-3 bg-[#B2FFAB]">
            User Centric design
          </p>
          <div className="mt-16">
            <Button1 stroke="white" text="white" bg1="#1E1E1E" bg2="#1E1E1E" label={'Free App consultation'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileService;
