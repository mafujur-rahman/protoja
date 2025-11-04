import CustomNavButton from "@/components/gsap/nav-button";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const TurningVision = () => {
  return (
    <div className="bg-[#121212]">
      <div className="flex flex-wrap justify-center pt-12 gap-4">
        <CustomNavButton
          href={"/contact"}
          buttonBg="#F76F00"
          textColor="#1E1E1E"
          label={"Notes"}
        />
        <CustomNavButton
          href={"/contact"}
          buttonBg="#FAFAFA"
          textColor="#1E1E1E"
          leftbg="#FAFAFA"
          rightbg="#FAFAFA"
          label={"Nota"}
        />
        <CustomNavButton
          href={"/contact"}
          buttonBg="#FAFAFA"
          textColor="#1E1E1E"
          leftbg="#FAFAFA"
          rightbg="#FAFAFA"
          label={"Petra"}
        />
      </div>
      <h1 className="font-bold text-[#E8E8E8] py-8 text-center text-[54px]">
        Turning visions into victories
      </h1>
      <div className="max-w-[942px] p-4 mx-auto">
        <div className="bg-[#E3E3E3] flex sm:flex-row flex-col gap-4 rounded-xl p-3 ">
          <Image
            className="rounded-xl"
            src={"/about-us/about-2.png"}
            width={370}
            height={438}
            alt=""
          />
          <div className="flex py-8 flex-col">
            <div className="flex gap-4 items-center border px-3 py-2 rounded-full border-[#0000004D]">
              <p className="text-[#000000B2]">Reviewed on</p>
              <Image
                className="rounded-xl"
                src={"/about-us/a-3.svg"}
                width={46}
                height={13}
                alt=""
              />
              <div className="flex flex-row gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star fill="#000000" />
                ))}
              </div>
            </div>
            <p className="text-[#000000] py-8 max-w-[300px] text-2xl">
              We were extremely impressed with how they approached teamwork, how
              they took feedback on board, and how responsive they were
              throughout the process.
            </p>
            <div>
              <p className="text-[#000000]  text-2xl">DIVINE</p>
              <p className="text-[#000000B2]  text-sm">
                Founder & CEO, Notes Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurningVision;
