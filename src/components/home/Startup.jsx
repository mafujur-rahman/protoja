import * as React from "react";

export default function BrandingHero() {
  return (
    <div className="flex overflow-hidden flex-col px-6 pt-72 pb-12 max-md:px-5 max-md:py-24">
      <div className="flex flex-wrap gap-10 justify-center px-20 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col pb-20 w-[220px]">
          <div className="flex gap-10 justify-between items-center pb-3.5 w-full border-b border-solid border-b-neutral-50 text-neutral-50">
            <div className="self-stretch my-auto text-base font-semibold leading-none">
              Pro Facts
            </div>

            <div className="flex gap-1 self-stretch my-auto text-sm whitespace-nowrap w-[58px]">
              <div className="flex flex-col justify-center items-start pr-3 leading-none min-h-[16px]">
                <div className="py-px h-4 w-[19px]">01</div>
              </div>
              <div className="my-auto text-sm leading-tight">/</div>
              <div className="py-px h-4 leading-none">03</div>
            </div>
          </div>

          <div className="flex mt-4 font-semibold tracking-tighter whitespace-nowrap text-neutral-50">
            <div className="text-6xl leading-none max-md:text-4xl">200</div>
            <div className="overflow-hidden text-7xl leading-none max-md:text-4xl">
              +
            </div>
          </div>
          <div className="flex justify-center mt-2 text-sm leading-4 text-neutral-50">
            <div className="flex flex-col justify-center w-[244px]">
              <div className="flex w-full min-h-[65px]">
                <div className="flex-1 shrink pr-5 w-full">
                  Startups we have helped in their growth journey over the past
                  6 years
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10 items-start mt-4 w-full">
            <div className="flex overflow-hidden justify-center items-center px-2.5 bg-white rounded-2xl h-[33px] min-h-[33px] w-[33px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2547f131f795ec919fb216bb9c4f16eafb56d27c4fd7769a04d1a4698c8b319?placeholderIfAbsent=true&apiKey=e4c55b3835e0471b869cabb50a0b8cd9"
                alt=""
                className="object-contain self-stretch my-auto aspect-[0.93] w-[13px]"
              />
            </div>
            <div className="flex overflow-hidden relative justify-center items-start rounded-2xl min-h-[33px] rotate-[3.141592653589793rad] w-[33px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdd3c095-7e61-4366-b97f-3b3ecc9031e3?placeholderIfAbsent=true&apiKey=e4c55b3835e0471b869cabb50a0b8cd9"
                alt=""
                className="object-contain absolute right-0 bottom-0 z-0 shrink-0 aspect-square h-[33px] w-[33px]"
              />
              <div className="flex absolute inset-0 z-0 shrink-0 bg-white rounded-2xl border border-orange-500 border-solid h-[33px] w-[33px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink pr-60 basis-0 min-w-[240px] max-md:max-w-full">
          <div className="pr-3.5 w-full text-7xl font-semibold tracking-tighter text-gray-200 leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Building brands for startups that
            <br />
            make people smile
          </div>

          <div className="flex flex-col mt-16 max-w-full w-[152px] max-md:mt-10">
            <div className="flex items-center w-full">
              <div className="self-stretch px-5 py-2.5 my-auto text-lg font-semibold leading-none bg-orange-500 min-h-[39px] rounded-[1440px] text-neutral-50">
                About us
              </div>
              <div className="flex overflow-hidden justify-center items-center self-stretch px-3 my-auto bg-orange-500 rounded-2xl h-[39px] min-h-[39px] w-[39px]">
                <img
                  loading="lazy"
                  src={
                    "https://cdn.builder.io/api/v1/image/assets/TEMP/fcc3b60ddc4f04bbe46c85eda2c221a00be06ab518cb68f438a1c09530254ae3?placeholderIfAbsent=true&apiKey=e4c55b3835e0471b869cabb50a0b8cd9"
                  }
                  alt=""
                  className="object-contain flex-1 shrink self-stretch my-auto aspect-[1.25] basis-0 w-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-start mt-32 ml-14 text-3xl font-medium tracking-tighter leading-none text-neutral-50 max-md:mt-10 max-md:ml-2.5">
        What we offer
      </div>
    </div>
  );
}
