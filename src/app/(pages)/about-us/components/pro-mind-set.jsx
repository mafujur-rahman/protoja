import Image from "next/image";
import React from "react";

const ProMindSet = () => {
  return (
    <div className="bg-[#1E1E1E]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20 py-12 md:py-20">
        <h1 className="text-center text-[#E8E8E8] text-3xl sm:text-4xl md:text-5xl font-semibold mb-12">
          The Pro Mindset
        </h1>

        {/* Cards Wrapper */}
        <div className="relative lg:min-h-[65vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Card 1 */}
          <div className="bg-[#080808] border border-[#232323] rounded-xl p-5 w-full max-w-[350px] flex flex-col justify-between h-[410px] 
            md:absolute md:top-32 md:left-32 lg:left-44 z-10 transition-transform duration-300 hover:-translate-y-2">
            <Image src="/about-us/a-4.svg" width={90} height={90} alt="Transparency" />
            <div>
              <h1 className="text-[#F1F1F1] py-3 font-medium text-[26px] sm:text-[32px]">
                Transparency
              </h1>
              <p className="text-[#F1F1F1] text-[14px] sm:text-[15px]">
                We keep you informed with real-time updates on progress,
                hours spent, and task management—so you're always in the loop.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#080808] border border-[#232323] rounded-xl p-5 w-full max-w-[350px] flex flex-col justify-between h-[410px]
            rotate-0 md:rotate-[10deg] md:absolute md:top-32 z-20 transition-transform duration-300 hover:-translate-y-2">
            <Image src="/about-us/a-5.svg" width={90} height={90} alt="Strong Leadership" />
            <div>
              <h1 className="text-[#F1F1F1] py-3 font-medium text-[26px] sm:text-[32px]">
                Strong Leadership
              </h1>
              <p className="text-[#F1F1F1] text-[14px] sm:text-[15px] font-medium">
                Every project is guided by our Head of Design and Project Manager,
                ensuring quality, direction, and seamless execution.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#080808] border border-[#232323] rounded-xl p-5 w-full max-w-[350px] flex flex-col justify-between h-[410px]
            rotate-0 md:rotate-[20deg] md:absolute md:top-36 md:right-32 lg:right-44 z-0 transition-transform duration-300 hover:-translate-y-2">
            <Image src="/about-us/a-6.svg" width={90} height={90} alt="Long-Term Commitment" />
            <div>
              <h1 className="text-[#F1F1F1] py-3 font-medium text-[26px] sm:text-[32px]">
                Long-Term Commitment
              </h1>
              <p className="text-[#F1F1F1] text-[14px] sm:text-[15px]">
                We don’t just deliver and disappear. Think of us as your lasting design partner,
                continuously supporting your growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProMindSet;
