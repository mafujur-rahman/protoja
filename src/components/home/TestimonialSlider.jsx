"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    stars: 5,
    platform: "Upwork",
    platformLogo: "/assets/upworkLogo.svg",
    text: "One of my best experiences with Protoja. I just love everything was just the way I wanted and even better than my expectations. I highly recommend working with protoja design team.",
    author: "Allen Pinto",
    position: "Senior Rusan Specialist",
    avatar: "/assets/testClientIcon.svg",
  },
  {
    id: 2,
    stars: 5,
    platform: "Fiverr",
    platformLogo: "/assets/fiverrLogo.svg",
    text: "Best experience with work of Figma to graphics on admin dashboard system and then it just even further for UI/UX development ready state. I would work with him again in the future!",
    author: "Milan Kordestani",
    position: "Co-Founder at Doe",
    avatar: "/assets/testClientIcon.svg",
  },
  {
    id: 3,
    stars: 5,
    platform: "Clutch",
    platformLogo: "/assets/clutchLogo.svg",
    text: "I was thrilled with the quality of the work and we were able to work out every concern. The final results are great, and we are very happy with the process.",
    author: "Alexander",
    position: "Founder & CEO",
    avatar: "/assets/testClientIcon.svg",
  },
  {
    id: 4,
    stars: 5,
    platform: "Clutch",
    platformLogo: "/assets/upworkLogo.svg",
    text: "I have had the pleasure to work with a great communication UX designer. Great communication. Easy to work with, the design skills, and follows on their promises. I would definitely be looking forward to hire this agency.",
    author: "Peter Rusan",
    position: "Senior Analyst",
    avatar: "/assets/testClientIcon.svg",
  },
];

const TestimonialSlider = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const isDesktop = useRef(false);

  const setupAnimation = useCallback(() => {
    isDesktop.current = window.innerWidth > 768;
    if (!containerRef.current || !isDesktop.current) return;

    if (animationRef.current) {
      animationRef.current.scrollTrigger?.kill();
      animationRef.current.kill();
    }

    const cards = gsap.utils.toArray(".testimonial-card");
    const cardWidth = 270;
    const gap = 10;
    const positions = cards.map((_, i) => {
      const offset = i - Math.floor(cards.length / 2);
      return offset * (cardWidth + gap);
    });

    gsap.set(".testimonial-card", { willChange: "transform" });

    animationRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1.5,
      },
    });

    cards.forEach((card, index) => {
      animationRef.current.to(
        card,
        {
          x: positions[index],
          ease: "none",
          duration: 1,
        },
        0
      );
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.scrollTrigger?.kill();
        animationRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = window.innerWidth > 768;
      if (newIsDesktop !== isDesktop.current) {
        setupAnimation();
      }
    };

    setupAnimation();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [setupAnimation]);

  return (
    <div className="w-full md:h-[40vh] max-w-8xl mx-auto px-4">
      <div
        ref={containerRef}
        className="md:flex justify-center md:flex-row md:relative"
      >
        {/* Fixed black card */}
        <div className="testimonial-card md:absolute flex-shrink-0 mt-4 w-full md:w-[270px] bg-[url('/assets/testimonialStaticBg.png')] bg-cover bg-center h-[362px] rounded-lg p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-12">
              <div className="w-8 h-8  rounded-full flex items-center justify-center mr-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1766_6533)">
                    <rect
                      width="23.9998"
                      height="24"
                      rx="11.9999"
                      fill="#F76F00"
                    />
                    <path
                      d="M17.1488 10.0914C17.1488 10.8592 16.8671 11.5883 16.3921 12.1628C15.9226 12.7262 15.2653 13.1294 14.3428 13.2731C13.9396 12.5881 13.2933 12.2236 12.5366 11.9363C12.7244 11.7596 12.8846 11.6325 13.0171 11.4834C13.4314 11.0139 13.5364 10.4725 13.2878 9.89807C13.0392 9.32912 12.5808 9.03084 11.9621 9.00322C11.3766 8.98113 10.8187 9.34569 10.5978 9.89254C10.3547 10.4836 10.4541 11.0194 10.8795 11.4944C11.0176 11.6491 11.1722 11.7927 11.3379 11.9584C11.1501 12.0468 10.9678 12.1297 10.7911 12.218C10.316 12.45 9.93491 12.7925 9.64768 13.2344C9.62558 13.2675 9.60901 13.3007 9.60349 13.3283V15.0075C9.27759 14.8363 8.90198 14.7424 8.5098 14.7424C8.06238 14.7424 7.6481 14.8639 7.28906 15.0793V7.39029C7.28906 7.03125 7.48239 6.85449 7.85248 6.85449H13.5861C14.8123 6.85449 15.6077 7.21353 16.1822 7.788C16.7898 8.39009 17.1488 9.22417 17.1488 10.0914Z"
                      fill="#EDEDED"
                    />
                    <path
                      d="M8.54773 18.5789C9.46293 18.5789 10.2048 17.837 10.2048 16.9218C10.2048 16.0066 9.46293 15.2646 8.54773 15.2646C7.63254 15.2646 6.89062 16.0066 6.89062 16.9218C6.89062 17.837 7.63254 18.5789 8.54773 18.5789Z"
                      fill="#1E1E1E"
                    />
                    <ellipse
                      opacity="0.2"
                      cx="20.4524"
                      cy="7.51208"
                      rx="13.1477"
                      ry="13.1478"
                      fill="#3C3C3C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1766_6533">
                      <rect
                        width="23.9998"
                        height="24"
                        rx="11.9999"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-white font-medium text-2xl">
                <span className="font-bold">Pro</span>toja
              </span>
            </div>

            <div className="mb-4 text-center">
              <h2 className="text-white text-6xl font-bold">4.9</h2>
              <p className="text-gray-400 text-sm mt-1">160+ Review</p>
            </div>

            <div className="flex mb-12 justify-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-[#ff6b00] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <svg
              width="52"
              height="20"
              viewBox="0 0 42 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6875 0.662109H12.5786V12.3377H10.6875V0.662109Z"
                fill="#FAFAFA"
              />
              <path
                d="M19.1605 8.63769C19.1605 10.4466 17.6805 10.611 17.1872 10.611C16.036 10.611 15.8716 9.54214 15.8716 8.96658V4.44434H13.9805V8.88436C13.9805 9.95325 14.3094 10.9399 14.9671 11.5155C15.5427 12.091 16.2827 12.3377 17.1872 12.3377C17.8449 12.3377 18.6672 12.1733 19.1605 11.6799V12.3377H21.0516V4.44434H19.1605V8.63769Z"
                fill="#FAFAFA"
              />
              <path
                d="M24.7498 1.56665H22.8587V4.44444H21.4609V6.25334H22.8587V12.3378H24.7498V6.25334H26.1476V4.44444H24.7498V1.56665Z"
                fill="#FAFAFA"
              />
              <path
                d="M32.0677 9.95315C31.6566 10.282 31.081 10.5287 30.5055 10.5287C29.1899 10.5287 28.2855 9.54203 28.2855 8.22647C28.2855 6.91091 29.1899 6.00646 30.5055 6.00646C31.081 6.00646 31.6566 6.1709 32.0677 6.58202L32.3144 6.82869L33.6299 5.59535L33.301 5.34868C32.561 4.6909 31.5744 4.27979 30.5055 4.27979C28.2032 4.27979 26.4766 6.00646 26.4766 8.30869C26.4766 10.6109 28.2032 12.3376 30.5055 12.3376C31.5744 12.3376 32.561 11.9265 33.301 11.2687L33.6299 11.022L32.3144 9.70648L32.0677 9.95315Z"
                fill="#FAFAFA"
              />
              <path
                d="M40.2907 5.10213C39.7152 4.52658 39.1396 4.27991 38.2352 4.27991C37.5774 4.27991 36.9196 4.44435 36.4263 4.93769V0.662109H34.5352V12.3377H36.4263V7.97993C36.4263 6.17103 37.6596 6.00658 38.153 6.00658C39.3041 6.00658 39.2218 7.07548 39.2218 7.65104V12.2555H41.113V7.73326C41.113 6.66436 40.8663 5.67769 40.2907 5.10213Z"
                fill="#FAFAFA"
              />
              <path
                d="M30.421 9.62453C31.1476 9.62453 31.7366 9.03554 31.7366 8.30897C31.7366 7.58241 31.1476 6.99341 30.421 6.99341C29.6945 6.99341 29.1055 7.58241 29.1055 8.30897C29.1055 9.03554 29.6945 9.62453 30.421 9.62453Z"
                fill="#EF4335"
              />
              <path
                d="M8.05782 9.46024C7.40004 10.118 6.41337 10.5291 5.34447 10.5291C3.28891 10.5291 1.8089 8.88468 1.8089 6.66467C1.8089 4.44466 3.28891 2.80021 5.42669 2.80021C6.41337 2.80021 7.40004 3.21132 8.14004 3.95132L8.38671 4.19799L9.62005 2.96465L9.37338 2.71798C8.30449 1.64909 6.9067 1.07353 5.42669 1.07353C2.30223 0.991307 0 3.45799 0 6.66467C0 9.87135 2.30223 12.338 5.34447 12.338C6.82448 12.338 8.30449 11.7625 9.29116 10.6936L9.53783 10.4469L8.30449 9.21357L8.05782 9.46024Z"
                fill="#FAFAFA"
              />
            </svg>

            <svg
              width="52"
              height="20"
              viewBox="0 0 41 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1766_6573)">
                <path
                  d="M37.374 6.24636H35.9469C35.0282 6.24636 34.536 6.94061 34.536 8.09753V12.2798H31.8295V6.24594H30.6809C29.7622 6.24594 29.2704 6.94019 29.2704 8.09711V12.2793H26.5634V4.01473H29.2704V5.27107C29.7136 4.29578 30.3205 4.01473 31.223 4.01473H34.5365V5.27107C34.9796 4.29578 35.5865 4.01473 36.489 4.01473H37.3744L37.374 6.24636ZM25.9727 8.79177H20.3297C20.4773 9.71757 21.0513 10.2465 22.0191 10.2465C22.7407 10.2465 23.2495 9.9487 23.4137 9.42016L25.8085 10.0976C25.2183 11.5356 23.7579 12.4119 22.0191 12.4119C19.0826 12.4119 17.7374 10.114 17.7374 8.14745C17.7374 6.21364 18.9184 3.89937 21.8549 3.89937C24.9718 3.89937 26.0052 6.24636 26.0052 7.98218C26.0072 8.25241 25.9964 8.52259 25.9727 8.79177ZM23.3481 7.18852C23.2824 6.4775 22.7736 5.81682 21.8553 5.81682C21.0019 5.81682 20.4939 6.19645 20.3297 7.18852H23.3481ZM13.0135 12.2793H15.3917L18.361 4.01556H15.6382L14.1945 8.82491L12.7179 4.01515H10.0109L13.0135 12.2793ZM1.92403 12.2793H4.6144V6.24636H7.17424V12.2798H9.84799V4.01515H4.6144V3.50296C4.6144 2.94085 5.00806 2.59394 5.63161 2.59394H7.17383V0.362305H5.18889C3.23638 0.362305 1.92403 1.56915 1.92403 3.33726V4.01515H0.398438V6.24678H1.92403V12.2793Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M39.0447 12.527C39.9688 12.527 40.7178 11.7719 40.7178 10.8407C40.7178 9.90943 39.9688 9.15479 39.0447 9.15479C38.1206 9.15479 37.3711 9.90985 37.3711 10.8411C37.3711 11.7723 38.1206 12.527 39.0447 12.527Z"
                  fill="#1DBF73"
                />
              </g>
              <defs>
                <clipPath id="clip0_1766_6573">
                  <rect
                    width="40.334"
                    height="12.2756"
                    fill="white"
                    transform="translate(0.390625 0.362305)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="60"
              height="20"
              viewBox="0 0 46 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1766_6576)">
                <path
                  d="M12.5894 8.2104C11.8419 8.2104 11.1414 7.91106 10.505 7.42377L10.66 6.73588L10.6667 6.71039C10.8047 5.97797 11.2425 4.74858 12.5894 4.74858C13.5995 4.74858 14.4211 5.52569 14.4211 6.48106C14.4177 7.43329 13.5962 8.2104 12.5894 8.2104ZM12.5894 2.99383C10.8687 2.99383 9.53536 4.05117 8.99329 5.79002C8.16492 4.61484 7.53859 3.20404 7.17161 2.01611H5.31965V6.57342C5.31965 7.47152 4.54519 8.20394 3.59563 8.20394C2.64607 8.20394 1.87169 7.47152 1.87169 6.57342V2.01611H0.0195524V6.57342C0.0128147 8.43973 1.61898 9.97152 3.59212 9.97152C5.56535 9.97152 7.17152 8.43973 7.17152 6.57342V5.80914C7.53176 6.5193 7.97285 7.23583 8.50827 7.87283L7.37347 12.9173H9.26926L10.0908 9.25813C10.8114 9.69444 11.6397 9.96837 12.5893 9.96837C14.6197 9.96837 16.273 8.39512 16.273 6.47469C16.273 4.55749 14.6198 2.99383 12.5894 2.99383Z"
                  fill="#6FDA44"
                />
                <path
                  d="M21.9261 3.19107L23.1214 7.74838L24.438 3.19107H26.0071L23.9835 9.77705H22.4143L21.1719 5.19103L19.9327 9.77383H18.3637L16.3398 3.18792H17.909L19.2255 7.74523L20.4209 3.18792H21.926V3.19115L21.9261 3.19107ZM29.7615 2.9936C27.7244 2.9936 26.0745 4.55726 26.0745 6.48083C26.0745 8.40764 27.7277 9.96815 29.7615 9.96815C31.7987 9.96815 33.4519 8.40764 33.4519 6.48083C33.4519 4.55411 31.7987 2.9936 29.7615 2.9936ZM29.7615 8.535C28.5628 8.535 27.5931 7.61778 27.5931 6.48406C27.5931 5.35026 28.5662 4.43312 29.7615 4.43312C30.9603 4.43312 31.93 5.35026 31.93 6.48406C31.93 7.61464 30.9603 8.535 29.7615 8.535ZM37.9336 4.66559C36.8798 4.66559 36.0279 5.47448 36.0279 6.46809V9.77383H34.4486V3.19107H36.0279V4.20379C36.0279 4.20379 36.7013 3.18784 38.0852 3.18784H38.57V4.66559H37.9336ZM43.2337 6.2261C44.3548 5.62734 45.1159 4.49039 45.1159 3.18784H43.5366C43.5366 4.28655 42.5938 5.17828 41.4322 5.17828H41.22V0.0126953H39.6409V9.77374H41.22V6.67192H41.4086C41.5635 6.67192 41.7656 6.76751 41.8565 6.88528L44.0989 9.77383H45.9913L43.2337 6.2261Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_1766_6576">
                  <rect width="46" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* <div className=""> */}
        <div className="md:flex justify-center pb-4 overflow-x-auto scrollbar-hide transition-transform duration-300">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 mt-4 md:absolute testimonial-card w-[270px] bg-white rounded-lg p-6 border border-gray-100 shadow-sm h-[362px]"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#ff6b00] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <img
                  src={testimonial.platformLogo || "/placeholder.svg"}
                  alt={testimonial.platform}
                  className="h-5 object-contain"
                />
              </div>

              <p className="text-base text-gray-700 mb-6 h-[140px] overflow-hidden">
                {testimonial.text}
              </p>

              <div className="flex items-center mt-[100px] space-x-4">
                {/* <span className="text-white font-bold text-xs">
                      {testimonial.author.charAt(0)}
                    </span> */}

                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.avatar}
                  width={36}
                  height={36}
                  loading="lazy"
                  className="h-[36px] object-contain"
                />

                <div>
                  <h4 className="font-medium text-2xl">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default TestimonialSlider;
