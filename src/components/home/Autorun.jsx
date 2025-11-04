"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const servicesList = [
  "UX Design",
  "User Testing",
  "Product Prototype",
  "Mobile UI",
  "Sotware UI design",
  "Web app design",
  "Interaction design",
];
gsap.registerPlugin(ScrollTrigger);

const Autorun = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth > 768) {
      sectionRefs.current.forEach((section, index) => {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
          height: "80vh",
          delay: 0.1,
          duration: .7,
          ease: "power2.out",
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [sectionRefs]);

  return (
    <div className="text-black bg-[#272727]">
      <p className="max-w-[1440px] mx-auto px-4 sm:px-6 md:mx-20 text-[#FAFAFA] text-3xl py-3 md:py-6">
        What we offer
      </p>
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        id="section1"
        className=" bg-[#C3ABFF] md:h-[25vh] z-0 overflow-hidden"
      >
        <div className="md:flex justify-between max-w-[1440px] mx-auto px-4 sm:px-6 md:mx-20 p-12">
          <div>
            <h1 className="md:text-[80px] text-4xl">UI UX Design</h1>
            <div className="md:flex justify-between md:w-[535.48px] max-w-[535.48px]">
              <p className="md:mt-32 mt-16 text-[20.51px] ">
                Our product design services focus on <br /> creating intuitive
                and aesthetically <br /> pleasing products that resonate with{" "}
                <br /> your audience and stand out in the <br /> market.
              </p>
              <div className="md:mt-32 mt-16 text-[13.5px]">
                {servicesList.map((service, index) => (
                  <p key={index} className="text-xl">
                    {" "}
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className=" mt-16 md:mt-0  max-w-[453.75px]">
            <Image
              loading="lazy"
              src="/assets/scrool/3.png"
              alt="Product design visualization"
              style={{ height: 420 }}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        id="section2"
        className=" bg-[#272727] md:h-[25vh] z-1 overflow-hidden"
      >
        <div className="md:flex max-w-[1440px] mx-auto px-4 sm:px-6 md:mx-20 justify-between p-12 text-white">
          <div>
            <h1 className="text-white text-4xl md:text-[80px]">MVP Development</h1>
            <div className="md:flex justify-between max-w-[535.48px]">
              <p className="md:mt-32 mt-16 text-[20.51px] ">
                Our product design services focus on <br /> creating intuitive
                and aesthetically <br /> pleasing products that resonate with{" "}
                <br /> your audience and stand out in the <br /> market.
              </p>
              <div className="md:mt-32 mt-16 text-[13.5px]">
                {servicesList.map((service, index) => (
                  <p key={index} className="text-xl">
                    {" "}
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="min-w-[240px] md:mt-0 mt-16  max-w-[453.75px]">
            <Image
              loading="lazy"
              src="/assets/figure.png"
              alt="Product design visualization"
              style={{ height: 420 }}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        id="section3"
        className=" bg-[#F76F00] md:h-[25vh] z-1 overflow-hidden"
      >
        <div className="md:flex max-w-[1440px] mx-auto px-4 sm:px-6 md:mx-20 justify-between p-12">
          <div>
            <h1 className="md:text-[80px] text-4xl">Mobile app Design</h1>
            <div className="md:flex justify-between md:w-[535.48px] w-[535.48px]">
              <p className="md:mt-32 mt-16 text-[20.51px] ">
                Our product design services focus on <br /> creating intuitive
                and aesthetically <br /> pleasing products that resonate with{" "}
                <br /> your audience and stand out in the <br /> market.
              </p>
              <div className="md:mt-32 mt-16 text-[13.5px]">
                {servicesList.map((service, index) => (
                  <p key={index} className="text-xl">
                    {" "}
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className=" mt-16 md:mt-0 max-w-[453.75px]">
            <Image
              loading="lazy"
              src="/assets/scrool/2.png"
              alt="Product design visualization"
              style={{ height: 420 }}
              width={1000}
              height={1000}
              className=""
            />
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        id="section4"
        className=" bg-[#FFD580] md:h-[25vh] z-2 overflow-hidden"
      >
        <div className="md:flex max-w-[1440px] mx-auto px-4 sm:px-6 md:mx-20 justify-between p-12">
          <div>
            <h1 className="md:text-[80px] text-4xl">Website Design</h1>
            <div className="md:flex justify-between max-w-[535.48px]">
              <p className="md:mt-32 mt-16 text-[20.51px] ">
                Our product design services focus on <br /> creating intuitive
                and aesthetically <br /> pleasing products that resonate with{" "}
                <br /> your audience and stand out in the <br /> market.
              </p>
              <div className="md:mt-32 mt-16 text-[13.5px]">
                {servicesList.map((service, index) => (
                  <p key={index} className="text-xl">
                    {" "}
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 md:mt-0 max-w-[453.75px]">
            <Image
              loading="lazy"
              src="/assets/scrool/4.png"
              alt="Product design visualization"
              style={{ height: 420 }}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        id="section5"
        className=" bg-[#ffffff] z-2 md:h-[25vh] overflow-hidden"
      >
        <div className="md:flex max-w-[1440px] mx-auto px-4 sm:px-6 md:mx-20 justify-between p-12">
          <div>
            <h1 className="md:text-[80px] text-4xl">Web App Design</h1>
            <div className="md:flex justify-between max-w-[535.48px]">
              <p className="md:mt-32 mt-16 text-[20.51px] ">
                Our product design services focus on <br /> creating intuitive
                and aesthetically <br /> pleasing products that resonate with{" "}
                <br /> your audience and stand out in the <br /> market.
              </p>
              <div className="md:mt-32 mt-16 text-[13.5px]">
                {servicesList.map((service, index) => (
                  <p key={index} className="text-xl">
                    {" "}
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="min-w-[240px] md:mt-0 mt-16 max-w-[453.75px]">
            <Image
              loading="lazy"
              src="/assets/scrool/4.png"
              alt="Product design visualization"
              style={{ height: 420 }}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[5] = el)}
        id="section6"
        className=" bg-[#86FF80] md:h-[25vh] overflow-hidden"
      >
        <div className="md:flex max-w-[1440px] mx-auto px-4 sm:px-6 md:mx-20 justify-between p-12">
          <div>
            <h1 className="md:text-[80px] text-4xl">SaaS Design</h1>
            <div className="md:flex  justify-between w-[535.48px] max-w-[535.48px]">
              <p className="md:mt-32 mt-16 text-[20.51px] ">
                Our product design services focus on <br /> creating intuitive
                and aesthetically <br /> pleasing products that resonate with{" "}
                <br /> your audience and stand out in the <br /> market.
              </p>
              <div className="md:mt-32 mt-16 text-[13.5px]">
                {servicesList.map((service, index) => (
                  <p key={index} className="text-xl">
                    {" "}
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="min-w-[240px] mt-16 md:mt-0 max-w-[453.75px]">
            <Image
              loading="lazy"
              src="/assets/scrool/4.png"
              alt="Product design visualization"
              style={{ height: 420 }}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[6] = el)}
        id="section7"
        className=" bg-[#272727] md:h-[25vh] overflow-hidden"
      >
        <div className="md:flex max-w-[1440px] mx-auto px-4 sm:px-6 md:mx-20 justify-between p-12 text-white">
          <div>
            <h1 className="text-white text-4xl md:text-[80px]">Brand Design</h1>
            <div className="md:flex justify-between md:w-[535.48px] max-w-[535.48px]">
              <p className="md:mt-32 mt-16 text-[20.51px] ">
                Our product design services focus on <br /> creating intuitive
                and aesthetically <br /> pleasing products that resonate with{" "}
                <br /> your audience and stand out in the <br /> market.
              </p>
              <div className="md:mt-32 mt-16 text-[13.5px]">
                {servicesList.map((service, index) => (
                  <p key={index} className="text-xl">
                    {" "}
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="min-w-[240px] md:mt-0 mt-16 max-w-[453.75px]">
            <Image
              loading="lazy"
              src="/assets/scrool/1.png"
              alt="Product design visualization"
              style={{ height: 420 }}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Autorun;
