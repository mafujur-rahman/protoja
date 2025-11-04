import Image from "next/image";
import React from "react";

const BlogHero = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4  lg:pb-20 md:pb-12 pb-6 sm:px-6 md:px-20 bg-white">
      <div className="flex flex-col relative items-center md:flex-row gap-4 justify-between">
        <div className="">
          <div className="bg-[#FEF1E6] w-[200px] lg:mt-0 mt-12 px-2 py-1 gap-4 flex items-center rounded-full border border-[#FDD2B0]">
            <p className="bg-white px-3 py-[2px] rounded-full">Design</p>
            <p className="text-[#DE6400]">8 min read</p>
          </div>
          <p className="text-[#101828] py-8 font-semibold text-[60px] leading-[60px] ">
            How collaboration <br /> makes us better <br /> designers
          </p>
          <p className="text-[#475467] text-xl ">
            Collaboration can make our teams stronger, and our individual <br />{" "}
            designs better. Here’s how to do it well.
          </p>
          <div className="flex items-center pt-8 space-x-3">
            <Image
              src={"/blog/rafat.jpg"}
              className="rounded-full border border-[#D6CFB7]"
              width={50}
              height={50}
              alt=""
            />
            <div>
              <p className="text-sm font-semibold text-[#101828]">
                Md Rafatul Islam
              </p>
              <p className="text-sm text-[#475467]  ">Published 14 Jan 2024</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 right-[400px]" >
            <Image src={"/blog/Hand-drawn arrow.svg"} width={286} height={199} alt="" />
        </div>
        <div>
          <Image src={"/blog/blog-hero.png"} width={520} height={840} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
