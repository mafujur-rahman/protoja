"use client";

import SpinHome from "@/components/home/SpinHome";

const WorksTop = () => {
  return (
    <>
      <div className="bg-[url('/hero-2.png')] bg-no-repeat w-full bg-cover h-screen object-cover">
        <div className="max-w-[1440px] lg:py-72 py-36 mx-auto px-6">
          <div className="flex gap-4 justify-between md:flex-col flex-row">
            <div>
              <p className="text-[#FFF2D3] text-xl font-medium">
                Strategy - Visual Identity - Website
              </p>
              <p className="text-[#FAFAFA] leading-normal text-[44px] lg:text-[72px] font-medium">
                Rudy Capital | Turning crypto <br className="hidden md:flex" /> complexity into clarity
              </p>
            </div>
            <div className="hidden lg:block" >
              <SpinHome />
            </div>
          </div>
          <div className="pt-52 flex flex-wrap justify-between gap-4 md:flex-col flex-row">
            <div>
              <p className="text-[#CBCBCB] text-xl">Industry</p>
              <p className="text-[#FAFAFA] text-3xl">Protoja</p>
            </div>
            <div>
              <p className="text-[#CBCBCB] text-xl">Categories</p>
              <p className="text-[#FAFAFA] text-3xl">Saas Design</p>
            </div>
            <div>
              <p className="text-[#CBCBCB] text-xl">Timelines</p>
              <p className="text-[#FAFAFA] text-3xl">2 Months</p>
            </div>
            <div>
              <p className="text-[#CBCBCB] text-xl">Services</p>
              <p className="text-[#FAFAFA] text-3xl">Visual Identity </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksTop;
