import ChangingColorText from "@/components/gsap/changing-color-text";
import React from "react";
import Projects, { Project2 } from "../../works/components/projects";

const ClientSolution = () => {
  return (
    <div className="bg-gradient-to-b mt-10 from-[#3C1803] to-[#000000]">
      <div className="max-w-[1440px] py-20 mx-auto px-4">
        <div className="md:flex pb-20 justify-between">
          <div className="md:w-1/5">
            <p className="md:text-2xl text-white">Solution</p>
            <div className="w-full border-t-2 border-[#CBCBCB] mt-4">
              <p className="md:text-xl text-white mt-4">
                Mobile app solutions we offer!
              </p>
            </div>
          </div>
          <div className="block md:hidden">
            <h1 className="text-3xl mt-5 font-bold text-white">
              Some works that <br /> exceed our client’s <br /> expectations!
            </h1>
          </div>
          <div className="hidden md:block">
            <ChangingColorText
              wordClassName="text-[#737373] font-bold text-4xl lg:text-[72px] transition-colors duration-300"
              changedColor="#E6E6E6"
              lines={[
                "Some works that",
                "exceed our client’s",
                "expectations!",
              ]}
            />
          </div>
        </div>
        <Projects
          href={"/works/1"}
          img={"/projects/p-1.png"}
          title1={"Strategy - Visual Identity - Website"}
          title2={"Rudy Capital | Turning crypto complexity into clarity"}
          title3={
            "Protoja is a UI UX Design and Brand design studio, crafting user-centered experiences"
          }
        />
        <div className=" py-12 lg:py-24 flex items-center justify-between md:flex-row flex-col gap-8">
          <Project2
            href={"/works/1"}
            img={"/projects/p-2.png"}
            title1={"Strategy - Visual Identity - Website"}
            title2={"Rudy Capital | Turning crypto complexity into clarity"}
            title3={
              "Protoja is a UI UX Design and Brand design studio, crafting user-centered experiences"
            }
          />
          <Project2
            img={"/projects/x.png"}
            title1={"Strategy - Visual Identity - Websiteee"}
            title2={"Rudy Capital | Turning crypto complexity into clarity"}
            title3={
              "Protoja is a UI UX Design and Brand design studio, crafting user-centered experiences"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ClientSolution;
