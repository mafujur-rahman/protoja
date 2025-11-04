import Button1 from "@/components/buttons/button";
import Image from "next/image";
import React from "react";

const NativeUser = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6">
      {/* Parent flex container */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 my-16 lg:my-20">

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-[#1E1E1E] text-[32px] lg:text-[44px] leading-snug">
            Offer native user <br /> experiences instead <br /> of one-size-fits-all!
          </h1>

          <p className="my-8 text-gray-700 leading-relaxed">
            Don’t let your app frustrate visitors with complex interfaces and menus. <br />
            It should fit your platform for a simple and native user experience. <br />
            We can help you do it.
          </p>

          {/* Highlight Badge */}
          <div className="flex items-center rounded-full overflow-hidden text-sm font-medium">
            <div className="bg-[#B2FFAB] text-gray-900 px-6 py-3">
              Conversation Rate Up To 200%
            </div>
            <div className="bg-gray-900 text-white px-6 py-3 rounded-full -ml-5">
              Trend Mobile Design
            </div>
          </div>

          {/* Button */}
          <div className="mt-14 lg:mt-28">
            <Button1
              label="Schedule a call now"
              text="white"
              bg1="#1E1E1E"
              bg2="#1E1E1E"
              stroke="white"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/service/s-5.png"
            className="rounded-2xl"
            width={778}
            height={685}
            alt="Native user experience illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default NativeUser;
