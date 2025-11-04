import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChangingColorText from "@/components/gsap/changing-color-text";
import CustomNavButton from "@/components/gsap/nav-button";

gsap.registerPlugin(ScrollTrigger);

const ProtojaCraft = () => {
  return (
    <div>
      <Image
        className="w-full"
        src={"/about-us/about-us-1.png"}
        width={744}
        height={744}
        alt=""
      />
      <div className="bg-[#E8E8E8] ">
        <div className="sm:px-6 md:px-20 px-4 max-w-[1440px] mx-auto py-12">
          <ChangingColorText
            wordClassName=" font-bold  items-center md:text-4xl text-3xl lg:text-6xl transition-colors duration-300 text-[#CBCBCB]"
            changedColor={"#161616"}
            lines={[
              "At Protoja, we craft intuitive UI/UX",
              "design solutions that help brands",
              "stand out and thrive. ",
              "Our focus is not just on visuals but",
              "on creating meaningful, user-",
              "centric experiences that drive",
              "engagement, growth, and success.",
            ]}
          />
          <p className="max-w-[960px] mx-auto px-3 py-6 md:py-12 text-[#161616] font-normal">
            Protoja was founded with one clear goal—to bridge the gap between
            businesses and users through impactful design. We believe that great
            design is not just about aesthetics; it’s about functionality,
            accessibility, and the power to solve real problems. With 7+ years
            of experience in UI/UX, SaaS, and product design, we’ve helped
            startups and enterprises turn ideas into scalable, user-friendly
            products.
          </p>
          <div className="flex justify-center items-center">
            <CustomNavButton
              href={"/contact"}
              buttonBg="#F76F00"
              textColor="#1E1E1E"
              label={"Book a free call"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtojaCraft;
