import Image from "next/image";
import React from "react";

const SolutionCard = ({src,title,details}) => {
  return (
    <div>
      <Image
        className="rounded-lg"
        src={src}
        width={411}
        height={225}
        alt=""
      />
      <p className="text-[#1E1E1E] font-semibold py-3 text-2xl lg:text-[32px]">
        {title}
      </p>
      <p className="text-[#737373]">
        {details}
      </p>
    </div>
  );
};

export default SolutionCard;
