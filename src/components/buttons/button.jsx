import React from "react";

const Button1 = ({label,bg1="#FAFAFA",bg2="#FFFFFF",stroke="black",text="black"}) => {
  return (
    <div className="flex items-center">
      <button className={`bg-[${bg1}] w-[252px] text-[18px] text-${text} px-4 py-3 rounded-full`}>
        {label}
      </button>
      <button className={`bg-[${bg2}] px-3 rounded-full py-3`}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="-rotate-45"
          fill="none"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke={`${stroke}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Button1;
