import Button1 from "@/components/buttons/button";
import Image from "next/image";
import React from "react";

const UnloackApp = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row mt-16 lg:mt-20 justify-between gap-24">
        {/* Left Column - Flex Column to Push Button to Bottom */}
        <div className="flex flex-col justify-between md:min-h-[400px] lg:min-h-[500px]">
          <div>
            <p className="text-[44px] font-semibold leading-[50px] text-[#1E1E1E]">
              Offer native user experiences instead of one-size-fits-all!
            </p>
            <p className="text-[#4E4E4E] py-8 text-[16px]">
              Don’t let your app frustrate visitors with complex interfaces and
              menus. It should fit your platform for a simple and native user
              experience. We can help you do it.
            </p>
          </div>

          {/* Button pushed to bottom with 5px bottom margin */}
          <div className="mt-auto mb-[5px]">
            <Button1
              stroke="white"
              text="white"
              bg1="#1E1E1E"
              bg2="#1E1E1E"
              label="Unlock App success"
            />
          </div>
        </div>

        {/* Right Image */}
        <Image
          src="/service/s-8.png"
          width={737}
          height={578}
          alt="Unlock App Success"
          className="rounded-lg object-contain"
        />
      </div>
    </div>
  );
};

export default UnloackApp;