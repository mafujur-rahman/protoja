import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = ({ img, title1, title2, title3,href="" }) => {
  return (
    <div className="flex lg:flex-row gap-8 lg:gap-0 flex-col overflow-hidden">
      <Image
        className={` lg:rounded-r-none rounded-r-2xl rounded-l-2xl `}
        src={`${img}`}
        alt="Projects"
        width={845}
        height={578}
      />
      <div className="py-8 min-h-[302px] px-4 border-l border-r border-t border-b lg:border-l-0 border-[#d2acac] rounded-l-2xl lg:rounded-l-none  rounded-br-2xl rounded-tr-xl relative">
        <p className="text-[#E6E6E6] ">{title1}</p>
        <p className="text-[#FAFAFA] font-medium text-2xl pt-2">{title2}</p>
        <p className="pt-6 text-[#CBCBCB] text-base">{title3}</p>
        <div className="lg:pt-80 pt-20">
          <ProjectButton href={href} />
        </div>
      </div>
    </div>
  );
};

export default Projects;

export const Project2 = ({ img, title1, title2, title3,href="" }) => {
  return (
    <div className="flex flex-col gap-8 lg:gap-0 max-w-[628px]  h-full rounded-2xl overflow-hidden">
      <Image
        className={` rounded-b-2xl lg:rounded-b-none rounded-t-2xl max-h-[424px] h-auto `}
        src={`${img}`}
        alt="Projects"
        width={845}
        height={578}
      />
      <div className="py-8 px-4 border-l border-r border-b lg:border-t-0 border-t rounded-tl-2xl rounded-tr-xl lg:rounded-tl-none lg:rounded-tr-none rounded-bl-2xl rounded-br-2xl border-[#4E4E4E] relative">
        <p className="text-[#E6E6E6] ">{title1}d</p>
        <p className="text-[#FAFAFA] font-medium text-2xl pt-2">{title2}</p>
        <p className="pt-6 text-[#CBCBCB] text-base">{title3}</p>
        <div className="pt-12">
          <ProjectButton href={href} />
        </div>
      </div>
    </div>
  );
};

export const Project3 = ({ img, title1, title2, title3,href="" }) => {
  return (
    <div className="flex  lg:flex-row gap-8 lg:gap-0 flex-col overflow-hidden">
      <div className="py-8 lg:order-1 order-2 px-4 min-h-[302px] border-[#d2acac] border-r border-t border-b border-l lg:border-l-0 lg:rounded-l-none rounded-l-2xl rounded-tr-2xl rounded-br-2xl relative">
        <p className="text-[#E6E6E6] ">{title1}</p>
        <p className="text-[#FAFAFA] font-medium text-2xl pt-2">{title2}</p>
        <p className="pt-6 text-[#CBCBCB] text-base">{title3}</p>
        <div className="lg:pt-80 pt-20">
          <ProjectButton href={href} />
        </div>
      </div>
      <Image
        className={` order-1 lg:order-2 lg:rounded-r-none rounded-r-2xl rounded-l-2xl `}
        src={`${img}`}
        alt="Projects"
        width={845}
        height={578}
      />
    </div>
  );
};

export const ProjectButton = ({ label,href="" }) => {
  return (
    <Link href={href}>
      <div className="flex">
        <button className="w-full py-3 rounded-full text-white flex items-center justify-center px-4 border border-[#FAFAFA]">
          {label || "View Project"}
        </button>
        <div className="px-3 py-3 rounded-full flex items-center justify-center border border-[#FAFAFA]">
          <Image
            src="/projects/arrow.svg"
            alt="Projects"
            width={24}
            height={24}
          />
        </div>
      </div>
    </Link>
  );
};
