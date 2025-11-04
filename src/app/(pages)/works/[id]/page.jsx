import React from "react";
import WorksTop from "./components/hero";
import Image from "next/image";
import Projects, { Project2 } from "../components/projects";
import UnlockYourDesign from "@/components/home/unlock-your-design";
import Monial from "@/components/home/Monial";
import CreativeProcess from "./components/process";

const WorkDetailsPage = () => {
  return (
    <div>
      <WorksTop />
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex w-full justify-between">
          <Image
            src={"/projects/f-12.jpg"}
            className="w-full"
            width={1282}
            height={723}
            alt=""
          />
        </div>
        <div className="py-8  flex md:flex-row flex-col justify-between">
          <p className="md:text-[60px] text-[32px] font-semibold leading-[60px]  text-[#101828]">
            About this <br className="hidden md:block" /> Project
          </p>
          <div>
            <p className="text-[#737373] max-w-[845px]">
              MyHydration Solutions, established in 2002, empowers businesses
              and nonprofits with transformative IT solutions. With over 150
              Salesforce integrations and 500+ clients, they specialize in
              building, integrating, and supporting Salesforce, Litify, and
              Traction Rec solutions tailored to client needs.
            </p>
            <p className="text-[#737373] pt-4 max-w-[845px]">
              Despite their expertise, Echo Technology Solutions' website did
              not reflect their leadership in the industry. They required a
              complete overhaul to match their innovative offerings.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <Image
            src={"/projects/p-13.png"}
            className="w-full"
            width={1282}
            height={723}
            alt=""
          />
        </div>
        <div className="py-14 flex md:flex-row flex-col justify-between">
          <p className="md:text-[60px] text-[32px] font-semibold leading-[60px] text-[#101828]">
            The Problem
          </p>
          <div>
            <p className="text-[#737373] max-w-[845px]">
              Hydration several challenges such as referrers lacked tracking
              tools, hindering engagement; leadership boards lacked motivation.
            </p>
            <p className="text-[#737373] pt-4 max-w-[845px]">
              It struggled with handling diverse job posts; and navigation and
              personalized dashboards needed improvement.
            </p>
          </div>
        </div>
        <div className="pb-14 flex md:flex-row flex-col justify-between">
          <p className="md:text-[60px] text-[32px] font-semibold leading-[60px] text-[#101828]">
            The Solutions
          </p>
          <div>
            <p className="text-[#737373] pt-4 max-w-[845px]">
              To address these issues, we delivered a comprehensive redesign and
              development using ,
            </p>
            <p className="text-[#737373] pt-4 max-w-[845px]">
              <span className="text-[#1E1E1E] font-semibold">
                New Visual Identity:
              </span>{" "}
              We implemented fresh typography, gradient visuals, and assigned
              unique colors to each service, modernizing the brand while
              maintaining consistency
            </p>
            <p className="text-[#737373] pt-4 max-w-[845px]">
              <span className="text-[#1E1E1E] font-semibold">
                Improved User Experience:
              </span>{" "}
              We implemented fresh typography, gradient Leveraging user
              research, we restructured the sitemap and created a more intuitive
              navigation flow tailored to their target audience.
            </p>
            <p className="text-[#737373] pt-4 max-w-[845px]">
              <span className="text-[#1E1E1E] font-semibold">
                {" "}
                Optimized Content Management:
              </span>{" "}
              Using Webflow CMS, we organized their blog to better showcase
              resources, blogs, and company news
            </p>
            <p className="text-[#737373] pt-4 max-w-[845px]">
              <span className="text-[#1E1E1E] font-semibold">
                Enhanced Performance:
              </span>{" "}
              Optimized for speed and SEO, ensuring a faster and more reliable
              user experience.
            </p>
          </div>
        </div>
        <div className="flex gap-4 pb-14 justify-between flex-col md:flex-row">
          <Image src={"/projects/p-15.png"} width={629} height={723} alt="" />
          <Image src={"/projects/p-14.png"} width={629} height={723} alt="" />
        </div>
        <div>
          <Image src={"/projects/p-16.png"} width={1440} height={518} alt="" />
        </div>
        <div className="py-14 flex md:flex-row flex-col justify-between">
          <p className="md:text-[60px] text-[32px] font-semibold text-[#101828]">Style Guide</p>
          <p className="max-w-[845px] md:pt-0 pt-6 ">
            We developed a comprehensive style guide for Boon, emphasizing a
            vibrant and engaging <br /> visual approach. Green was selected as
            the primary color due to its strong associations with <br /> growth,
            success, and reliability.
          </p>
        </div>
        <div className="flex gap-4 pb-14 justify-between flex-col md:flex-row">
          <Image src={"/projects/p-18.png"} width={628} height={810} alt="" />
          <Image src={"/projects/p-19.png"} width={628} height={810} alt="" />
        </div>
        <div>
          <Image src={"/projects/p-17.png"} width={1440} height={518} alt="" />
        </div>
        <div className="py-14 flex md:flex-row flex-col  justify-between">
          <p className="md:text-[60px] text-[32px] font-semibold text-[#101828]">Motion</p>
          <p className="max-w-[845px] md:pt-0 pt-6">
            We integrated animations and interactions to ensure smooth user flow
            and seamless <br /> transitions, enhancing the overall user
            experience with fluid and engaging interactions for a <br /> refined
            and intuitive interface.
          </p>
        </div>
        <div>
          <Image src={"/projects/p-20.png"} width={1440} height={928} alt="" />
        </div>
        <div className="py-14 flex md:flex-row flex-col justify-between">
          <p className="md:text-[60px] text-[32px] font-semibold leading-[60px] text-[#101828]">
            The Results
          </p>
          <div>
            <p className="text-[#737373] pt-4 max-w-[845px]">
              To address these issues, we delivered a comprehensive redesign and
              development using ,
            </p>
            <p className="text-[#737373] pt-4 max-w-[845px]">
              <span className="text-[#1E1E1E] font-semibold">
                New Visual Identity:
              </span>{" "}
              We implemented fresh typography, gradient visuals, and assigned
              unique colors to each service, modernizing the brand while
              maintaining consistency
            </p>
            <p className="text-[#737373] pt-4 max-w-[845px]">
              <span className="text-[#1E1E1E] font-semibold">
                Improved User Experience:
              </span>{" "}
              We implemented fresh typography, gradient Leveraging user
              research, we restructured the sitemap and created a more intuitive
              navigation flow tailored to their target audience.
            </p>
            <p className="text-[#737373] pt-4 max-w-[845px]">
              <span className="text-[#1E1E1E] font-semibold">
                {" "}
                Optimized Content Management:
              </span>{" "}
              Using Webflow CMS, we organized their blog to better showcase
              resources, blogs, and company news
            </p>
            <p className="text-[#737373] pt-4 max-w-[845px]">
              <span className="text-[#1E1E1E] font-semibold">
                Enhanced Performance:
              </span>{" "}
              Optimized for speed and SEO, ensuring a faster and more reliable
              user experience.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#3C1803] to-[#000000]">
        <div className="max-w-[1440px] mx-auto px-6">
          <p className="text-[#E6E6E6] py-14 text-5xl">Other case studies</p>
          <Projects
            img={"/projects/p-7.png"}
            title1={"Strategy - Visual Identity - Website"}
            title2={"Rudy Capital | Turning crypto complexity into clarity"}
            title3={
              "Protoja is a UI UX Design and Brand design studio, crafting user-centered experiences"
            }
          />
          <div className=" py-12 lg:py-16 flex items-center justify-center md:flex-row flex-col gap-12 lg:gap-32">
            <Project2
              img={"/projects/p-9.png"}
              title1={"Strategy - Visual Identity - Website"}
              title2={"Rudy Capital | Turning crypto complexity into clarity"}
              title3={
                "Protoja is a UI UX Design and Brand design studio, crafting user-centered experiences"
              }
            />
            <Project2
              img={"/projects/p-10.png"}
              title1={"Strategy - Visual Identity - Websiteee"}
              title2={"Rudy Capital | Turning crypto complexity into clarity"}
              title3={
                "Protoja is a UI UX Design and Brand design studio, crafting user-centered experiences"
              }
            />
          </div>
        </div>
      </div>
      <CreativeProcess />
      <Monial />
      <UnlockYourDesign />
    </div>
  );
};

export default WorkDetailsPage;
