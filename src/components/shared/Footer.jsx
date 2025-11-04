"use client";
import React from "react";
import Image from "next/image";
import AnimatedButton from "../gsap/animated-button";
import { usePathname } from "next/navigation";

function Footer() {
  const socialIcons = [
    {
      name: "linkedin",
      href: "https://www.linkedin.com",
      icon: "f-3.png",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com",
      icon: "f-4.png",
    },
    {
      name: "twitter",
      href: "https://www.twitter.com",
      icon: "f-5.png",
    },
    {
      name: "youtube",
      href: "https://www.youtube.com",
      icon: "f-6.png",
    },
    {
      name: "facebook",
      href: "https://www.facebook.com",
      icon: "f-7.png",
    },
  ];

  const pathName = usePathname();

  const shouldHideNavbar =  pathName.startsWith("/admin-dashboard");
  console.log(shouldHideNavbar)

  return (
    <div className={`${shouldHideNavbar === true ? "hidden" : "block"}`} >
      <div className="bg-[url('/f-2.png')] w-full h-[150vh] bg-cover bg-no-repeat bg-center">
        <div className="flex flex-wrap gap-5 justify-between items-start py-28 w-full max-w-[1440px] mx-auto px-6">
          {/* Left Section */}
          <div className="flex flex-col self-stretch">
            <div className="flex flex-col w-full">
              <div className="flex justify-center items-center pt-px max-w-full w-[114px]">
                <div>
                  <Image
                    loading="lazy"
                    src={"/assets/plogo.png"}
                    alt="Company logo"
                    width={214}
                    height={114}
                    className="object-contain self-stretch my-auto rounded-none aspect-[43.78px] w-[43.78px]"
                  />
                </div>
                <div>
                  <Image
                    loading="lazy"
                    src={"/assets/cname.png"}
                    alt="Company name"
                    width={114}
                    height={114}
                    className="object-contain self-stretch my-auto rounded-none ms-2"
                  />
                </div>
              </div>
              <div className="mt-6 w-full text-base leading-6 text-zinc-300">
                An Experienced UX Design Studio focusing on crafting
                <br />
                functional, simple, human-centered digital products for
                <br />
                future.
              </div>
            </div>

            <div className="pt-16">
              <div className="flex gap-3 items-center">
                {/* Custom SVG */}
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="46" height="46" rx="23" fill="white" />
                  <g clipPath="url(#clip0)">
                    <g clipPath="url(#clip1)">
                      <path
                        d="M23.9489 17.6992C25.2469 17.6992 26.4918 18.2149 27.4096 19.1327C28.3275 20.0505 28.8431 21.2954 28.8431 22.5934C28.8431 23.8915 28.3275 25.1363 27.4096 26.0542C26.4918 26.972 25.2469 27.4877 23.9489 27.4877C22.6509 27.4877 21.406 26.972 20.4882 26.0542C19.5703 25.1363 19.0547 23.8915 19.0547 22.5934C19.0547 21.2954 19.5703 20.0505 20.4882 19.1327C21.406 18.2149 22.6509 17.6992 23.9489 17.6992Z"
                        fill="#8A8A8A"
                      />
                      <path
                        d="M24.1707 30.7348C26.3064 30.7348 28.2526 30.0003 29.7266 28.6752L30.7556 27.758L35.3909 32.3171L34.2875 33.3477C31.6356 35.8118 28.0326 37.1724 24.169 37.1724C15.8546 37.1724 9.5625 30.8482 9.5625 22.4948C9.5625 14.1059 15.7074 8 24.169 8C27.9615 8 31.5273 9.36064 34.213 11.7857L35.3553 12.8164L30.7911 17.3789L29.7639 16.4955C28.2526 15.1704 26.2692 14.4715 24.1707 14.4715C19.3526 14.4715 16.0052 17.7834 16.0052 22.5304C16.0052 27.2773 19.4626 30.7348 24.1707 30.7348Z"
                        fill="#8A8A8A"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(8 8)"
                      />
                    </clipPath>
                    <clipPath id="clip1">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(8 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <img src="/assets/upworkIconHero.svg" alt="Upwork" />
                <img src="/assets/fiverIconHero.svg" alt="Fiverr" />
              </div>

              <div className="pt-4">
                <div className="flex items-center">
                  <span className="text-white font-bold text-2xl mr-2">
                    4.9
                  </span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        width="14"
                        height="14"
                        className="sm:w-4 sm:h-4 md:w-5 md:h-5"
                        viewBox="0 0 24 24"
                        fill="#FF4500"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 md:text-xl sm:text-sm">
                  Based on Marketplace reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <p className="md:text-[54px] leading-normal text-[#FFF2D3]">
              Your expert design team is just <br />
              <span className="text-[#FAFAFA] italic">one click away</span>
            </p>
            <div className="flex items-center pt-4 gap-4">
              <Image src={"/f-1.svg"} width={16} height={16} alt="" />
              <p className="text-[#FAFAFA] text-2xl">
                Talking any project with Friendly discuss?
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-12">
              <div className="flex items-center">
                <button className="bg-[#FAFAFA] w-[252px] text-[18px] text-black px-4 h-12 rounded-full">
                  Let’s Talk?
                </button>
                <button className="bg-[#FFFFFF] w-12 flex items-center justify-center rounded-full h-12">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="-rotate-45"
                    fill="none"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <AnimatedButton href={"/contact"} label={"Company Deck"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
