"use client";

import SpinHome from "../../components/home/SpinHome";

const ServiceTop = () => {
  return (
    <>
      <div className="relative h-screen bg-gray-900 top-0">
        <video
          src="/assets/heroVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="absolute inset-0"
        ></video>

        <div className="relative z-10 flex flex-col justify-between h-full text-white p-6 md:ms-32 transition-transform ">
          <div className="flex items-center h-full">
            <div className="flex justify-center">
              <h6 className="text-[48px] md:text-[70px] text-[#161616] font-bold text-center w-[60%]">
                Helping You Bring Ideas to Life with Care and Creativity
              </h6>
            </div>

            <div className="mr-[320px] mt-[120px]">
              <SpinHome />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTop;
