"use client";

import { useState } from "react";
import CustomAnimatedButton from "../gsap/custom-animated-button";
import HoverButton from "../gsap/hover-button";

const PricingCard = ({
  title,
  subtitle,
  price,
  saveText,
  teamComposition1,
  teamComposition2,
  isHoverable = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);


  const isDark = title === "Elevate";
  const isHoveredState = isHoverable && isHovered;

  return (
    <div
      className={`relative rounded-3xl pb-8 mt-4 border overflow-hidden md:w-1/3 transition-colors duration-300 ${
        isHoveredState
          ? "bg-[#222222] border-[#F76F00] text-white"
          : isDark
          ? "bg-[#ff6b00]  text-white border-[#F76F00]"
          : "bg-[#FFF9EC] text-black border-[#FFCA6D]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 pb-0">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-medium">{title}</h3>
          <div
            className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${
              isHoveredState
                ? "bg-[#FFF2D3] text-[#F76F00]"
                : "bg-[#414141] text-[#FFF9EC]"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                isHoveredState ? "bg-[#F76F00]" : "bg-[#FAFAFA]"
              } `}
            ></span>
            Limited availability
          </div>
        </div>

        <p className="text-md mb-8">{subtitle}</p>

        <div className="mb-2 pl-8">
          <div className="flex items-baseline">
            <span className="text-5xl font-bold">{price}</span>
            <span className="text-md ml-1">/monthly</span>
          </div>
          <p className="text-md">{saveText}</p>
        </div>

        {/* Button */}

        <div className="mt-8 mb-8">
          <CustomAnimatedButton
            textColor={isHoveredState ? "" : "#F76F00"}
            buttonBg={isHoveredState ? "white" : "none"}
            href={"/"}
            label={"Get started now"}
          />
        </div>

        <div className="mb-6">
          <h4
            className={`text-md font-medium mb-4 ${
              isHoveredState ? "text-[#ff6b00]" : "text-[#F76F00]"
            }`}
          >
            Team composition
          </h4>
          <ul className="space-y-2">
            {teamComposition1.map((item, index) => (
              <li key={index} className="flex items-center text-md">
                <span
                  className={`h-3 w-3 rounded-full ${
                    isHoveredState && isHovered
                      ? "bg-[#FAFAFA]"
                      : "bg-[#1E1E1E]"
                  }  mr-3`}
                ></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            className={`text-md font-medium mb-4 ${
              isHoveredState ? "text-[#ff6b00]" : "text-[#F76F00]"
            }`}
          >
            Team composition
          </h4>
          <ul className="space-y-2">
            {teamComposition2.map((item, index) => (
              <li key={index} className="flex items-center text-md">
                <span
                  className={`h-3 w-3 rounded-full ${
                    isHoveredState && isHovered
                      ? "bg-[#FAFAFA]"
                      : "bg-[#1E1E1E]"
                  } mr-3`}
                ></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PricingCards = () => {

  const [hover,sethover] = useState(false)

  return (
    <div className="md:flex md:gap-8 p-4 max-w-[1440px] mx-auto">
      <PricingCard
        title="Spark"
        subtitle="For startups & small teams"
        price="$4900"
        saveText="Save 10% on quarterly plans, 20% on yearly!"
        teamComposition1={[
          "1 Senior UX Consultant",
          "Shared Design Manager",
          "1 project manager",
          "1 UI/UX Designer",
        ]}
        teamComposition2={[
          "1 task at a time",
          "80 design hours/month",
          "48-72 hour delivery",
          "Unlimited requests & brands",
          "24/7 Figma access",
          "Managed via Slack, Trello & What's app",
          "Pause or cancel anytime",
        ]}
      />

      <div onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} className="relative group rounded-3xl mt-4 pb-8 border overflow-hidden md:w-1/3 bg-[#F76F00] hover:bg-[#272727] hover:text-[#FAFAFA] text-black border-[#FFCA6D]">
        <div className="p-8 pb-0">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl group-hover:text-[#FAFAFA]  font-medium">Elevate</h3>
            <div className="px-3 py-1 rounded-full text-xs flex items-center gap-1 group-hover:bg-[#343434] bg-[#FFF2D3] group-hover:text-[#FAFAFA] text-[#F76F00]">
              <span className="h-2 w-2 rounded-full  group-hover:bg-[#FAFAFA] bg-[#F76F00]"></span>
              Limited availability
            </div>
          </div>

          <p className="text-md mb-8">For growing businesses & teams</p>

          <div className="mb-2 pl-8">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold">$9900</span>
              <span className="text-md ml-1">/monthly</span>
            </div>
            <p className="text-md">
              Save 10% on quarterly plans, 20% on yearly!
            </p>
          </div>

          <div className="mt-8 mb-8">
            <HoverButton hover={hover} />
          </div>

          <div className="mb-6">
            <h4 className="text-md font-medium mb-4 group-hover:text-[#A1400C] text-[#FAFAFA]">
              Team composition
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center text-md">
                <span className="h-3 w-3 rounded-full group-hover:bg-[#FAFAFA] bg-[#1E1E1E] mr-3"></span>
                2 Experienced Designers
              </li>
              <li className="flex items-center text-md">
                <span className="h-3 w-3 rounded-full group-hover:bg-[#FAFAFA] bg-[#1E1E1E] mr-3"></span>
                Dedicated Project Manager
              </li>
              <li className="flex items-center text-md">
                <span className="h-3 w-3 rounded-full group-hover:bg-[#FAFAFA] bg-[#1E1E1E] mr-3"></span>
                Shared Design Director
              </li>
              <li className="flex items-center text-md">
                <span className="h-3 w-3 rounded-full group-hover:bg-[#FAFAFA] bg-[#1E1E1E] mr-3"></span>
                1 UI/UX Designer
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-medium mb-4 group-hover:text-[#A1400C] text-[#FAFAFA]">
              Team composition
            </h4>
            <ul className="space-y-2">
              {[
                "Up to 5 tasks at a time",
                "120 design hours/month",
                "48-72 hour delivery",
                "Unlimited UX iterations",
                "Fast-track adjustments",
                "Unlimited users",
                "24/7 Figma access",
                "Managed via Slack, Trello & What's app",
                "Pause or cancel anytime",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-md">
                  <span className="h-3 w-3 rounded-full group-hover:bg-[#FAFAFA] bg-[#1E1E1E] mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <PricingCard
        title="Visionary"
        subtitle="For enterprises & high-impact projects"
        price="Custom"
        saveText="Save up to 20% with long-term plans!"
        teamComposition1={[
          "Dedicated Expert Design Team",
          "Design Director & Account Manager",
        ]}
        teamComposition2={[
          "No task limit",
          "Unlimited requests",
          "24-hour delivery",
          "Unlimited brands & users",
          "Weekly strategy meetings",
          "Real-time collaboration",
          "24/7 access to advanced tools",
          "Managed via Slack, Trello & What's app",
          "Pause or cancel anytime",
        ]}
      />
    </div>
  );
};

export default PricingCards;
