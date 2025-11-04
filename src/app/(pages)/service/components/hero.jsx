"use client";

import Button1 from "@/components/buttons/button";
import Image from "next/image";

const ServiceHero = () => {
  return (
    <div className=" bg-[url('/hero-2.png')] bg-no-repeat w-full bg-cover min-h-screen overflow-hidden object-cover">
      <div className=" max-w-[1440px] pt-24 lg:pt-0 lg:py-28 mx-auto lg:px-6">
        <div className="flex gap-4 justify-between items-center flex-col md:flex-row">
          <div className="px-6 lg:px-0">
            <p className="text-[#FAFAFA] leading-tight text-[36px] lg:text-[72px] font-medium">
              Mobile App UI <br /> UX Services
            </p>
            <p className="text-[#CBCBCB] pt-4 text-xl ">
              Is your app design costing you users? Bad UX and weird pop-ups
              give them a hard <br /> time. You need to act fast before they
              delete it for good. We can solve this for you.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center my-8">
              <Button1 label="Let's design your app now" />
            </div>
            <div className="flex gap-4">
              <Image src={"/service/figma.png"} width={44} height={44} alt="" />
              <Image
                src={"/service/diamond.png"}
                width={44}
                height={44}
                alt=""
              />
              <Image src={"/service/ps.png"} width={44} height={44} alt="" />
              <Image src={"/service/xd.png"} width={44} height={44} alt="" />
            </div>
            <div className="flex md:flex-row flex-wrap mt-8 gap-5">
               <p className="px-4 py-2 rounded-full text-[#FAFAFA] bg-[#471903]" >Mobile app design</p>
               <p className="px-4 py-2 rounded-full text-[#FAFAFA] bg-[#471903]" >UI/UX Design for Mobile</p>
               <p className="px-4 py-2 rounded-full text-[#FAFAFA] bg-[#471903]" >Mobile app design</p>
            </div>
            <div className="flex md:flex-row flex-wrap  mt-4 lg:mt-8 gap-5">
               <p className="px-4 py-2 rounded-full text-[#FAFAFA] bg-[#471903]" >Mobile Prototyping & Testing</p>
               <p className="px-4 py-2 rounded-full text-[#FAFAFA] bg-[#471903]" >Responsive Design for All Devices</p>
            </div>
          </div>
          <Image src={'/service/h-1.png'} width={760} height={1120} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
