import Image from "next/image";
import React from "react";

const OurBlog = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="lg:pt-52 max-w-[1440px] mx-auto px-4 md:pt-12 sm:px-6 md:px-20 pt-40">
        <h1 className="text-[#F76F00] text-base">Our blog</h1>
        <p className="text-5xl text-[#101828] py-2 font-semibold ">Resources and insights</p>
        <p className="text-[#475467] text-xl ">The latest industry news, interviews, technologies, and resources.</p>
        <div className=" md:pt-16 pt-10 lg:pt-20" >
          <Image className="w-full" src={'/blog/blog.svg'} width={1116} height={720} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
