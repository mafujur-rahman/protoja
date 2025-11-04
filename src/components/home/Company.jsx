"use client";

import { Typography } from "@mui/material";
import Slider from "./Slider";
import Slider2 from "./Slider2";

const Company = () => {
  return (
    <div className="mt-48 mb-36">
      <Typography
        variant="h6"
        color="initial"
        className="text-center w-[100%] text-5xl py-12 px-32"
      >
        We’ve partnered with the world’s leading innovators to create impactful
        products and elevate them to the next level
      </Typography>

      <Slider />
      <Slider2 />
      <Slider />
    </div>
  );
};

export default Company;
