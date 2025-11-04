import CustomNavButton from "@/components/gsap/nav-button";
import React from "react";

const UnlockDesign = () => {
  return (
    <div className="bg-[#000000]">
      <div className="lg:py-24 md:py-16 py-8">
        <p className="text-white text-center text-5xl">
          Unlock your new design <br className="md:block hidden" /> team today.
        </p>
        <p className="text-[#FFFFFF] pt-4 text-[14px] text-center">
          Get a team of design experts and all the benefits for just one flat
          fee. Cancel anytime.
        </p>
        <div className="flex pt-4 justify-center items-center">
          <CustomNavButton
            href={"/contact"}
            buttonBg="#F76F00"
            textColor="#1E1E1E"
            label={"Book a free call"}
          />
        </div>
      </div>
    </div>
  );
};

export default UnlockDesign;
