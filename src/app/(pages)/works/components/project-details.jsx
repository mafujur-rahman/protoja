import React from "react";
import Projects, { Project2, Project3 } from "./projects";

const ProjectDetails = () => {
  return (
    <div className="bg-[#1E1E1E] py-12 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6">
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
        <div>
          <Project3
            img={"/projects/p-4.jpg"}
            title1={"Strategy - Visual Identity - Website"}
            title2={"Rudy Capital | Turning crypto complexity into clarity"}
            title3={
              "Protoja is a UI UX Design and Brand design studio, crafting user-centered experiences"
            }
          />
        </div>
        <div className="lg:py-24 py-12 flex items-center justify-between md:flex-row flex-col gap-8">
          <Project2
            img={"/projects/p-5.png"}
            title1={"Strategy - Visual Identity - Website"}
            title2={"Rudy Capital | Turning crypto complexity into clarity"}
            title3={
              "Protoja is a UI UX Design and Brand design studio, crafting user-centered experiences"
            }
          />
          <Project2
            img={"/projects/p-6.png"}
            title1={"Strategy - Visual Identity - Websiteee"}
            title2={"Rudy Capital | Turning crypto complexity into clarity"}
            title3={
              "Protoja is a UI UX Design and Brand design studio, crafting user-centered experiences"
            }
          />
        </div>
        <Projects
          img={"/projects/p-7.png"}
          title1={"Strategy - Visual Identity - Website"}
          title2={"Rudy Capital | Turning crypto complexity into clarity"}
          title3={
            "Protoja is a UI UX Design and Brand design studio, crafting user-centered experiences"
          }
        />
        <div className="py-12 lg:py-28">
          <Project3
            img={"/projects/p-8.png"}
            title1={"Strategy - Visual Identity - Website"}
            title2={"Rudy Capital | Turning crypto complexity into clarity"}
            title3={
              "Protoja is a UI UX Design and Brand design studio, crafting user-centered experiences"
            }
          />
        </div>
        <div className="lg:pb-24 pb-12 flex items-center justify-between md:flex-row flex-col gap-8">
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
        <Projects
          img={"/projects/p-11.png"}
          title1={"Strategy - Visual Identity - Website"}
          title2={"Rudy Capital | Turning crypto complexity into clarity"}
          title3={
            "Protoja is a UI UX Design and Brand design studio, crafting user-centered experiences"
          }
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
