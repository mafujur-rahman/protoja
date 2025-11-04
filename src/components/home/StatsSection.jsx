"use client";
import { Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";

const statsData = [
  { number: "01", title: "Years of Experience", count: "6+" },
  { number: "02", title: "Country Served", count: "51+" },
  { number: "03", title: "Happy Clients", count: "200+" },
  { number: "04", title: "Industry we worked", count: "25+" },
];

const StatsSection = ({ header, span }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div className="flex overflow-hidden flex-col bg-white mt-80" ref={ref}>
      <div className=" justify-center">
        <div>
          <Typography
            variant="h6"
            color="initial"
            className="text-center text-5xl"
          >
            {header}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className="text-center text-2xl"
          >
            {span}
          </Typography>
        </div>
      </div>

      <div className="flex relative flex-col self-center mt-16 w-full font-bold text-center text-white max-w-[1170px] max-md:mt-10 max-md:max-w-full">
        <div className="flex z-10 flex-wrap gap-1.5 justify-center items-center text-black">
          {statsData.map((stat, index) => (
            <div
              className={`flex flex-col justify-center self-stretch p-6 my-auto w-72 rounded-2xl min-h-[505px] min-w-[240px] max-md:px-5
             ${
               isVisible
                 ? "animate__animated " +
                   (index < 2 ? "animate__fadeInLeft" : "animate__fadeInRight")
                 : ""
             }`}
              key={index}
              style={{
                backgroundColor: index === 0 ? "#DD6504" : "#E8E8E8",
                color: index === 0 ? "white" : "black",
              }}
            >
              <div className="gap-2.5 self-stretch p-2.5 w-full text-lg leading-none whitespace-nowrap">
                {stat.number}
              </div>
              <div className="flex flex-col mt-64 w-full max-md:mt-10">
                <div className="gap-2.5 self-stretch px-2.5 py-4 w-full text-xl leading-none border-b border-zinc-300">
                  {stat.title}
                </div>
                <div className="gap-2.5 self-start p-2.5 mt-8 text-6xl leading-none whitespace-nowrap max-md:text-4xl">
                  {stat.count}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
