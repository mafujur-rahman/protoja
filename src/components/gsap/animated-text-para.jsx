"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({
    text,
    className = "",
    stagger = 0.05,
    animation = "leftToRight", // leftToRight, topToBottom, maskReveal, fade, fillTopBottom
}) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;

        const letters = textRef.current.querySelectorAll(".letter");

        switch (animation) {
            case "leftToRight":
                gsap.from(letters, {
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 90%",
                        end: "bottom 80%",
                        scrub: 1,
                    },
                    x: -20,
                    opacity: 0,
                    duration: 0.8,
                    stagger: stagger,
                    ease: "power3.out",
                });
                break;

            case "topToBottom":
                gsap.from(letters, {
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 90%",
                        end: "bottom 80%",
                        scrub: 1,
                    },
                    y: -20,
                    opacity: 0,
                    duration: 0.8,
                    stagger: stagger,
                    ease: "power3.out",
                });
                break;

            case "maskReveal":
                gsap.fromTo(
                    letters,
                    { yPercent: 100, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: "top 90%",
                            end: "bottom 80%",
                            scrub: 1,
                        },
                        yPercent: 0,
                        opacity: 1,
                        stagger: stagger,
                        duration: 1,
                        ease: "power3.out",
                    }
                );
                break;

            case "fade":
                gsap.from(letters, {
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 90%",
                        end: "bottom 80%",
                        scrub: 1,
                    },
                    opacity: 0,
                    duration: 1,
                    stagger: stagger,
                    ease: "power3.out",
                });
                break;

            case "fillTopBottom":
                // Filling effect using clip-path
                gsap.fromTo(
                    letters,
                    { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 },
                    {
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: "top 90%",
                            end: "bottom 80%",
                            scrub: 1,
                        },
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1,
                        stagger: stagger,
                        ease: "power3.out",
                    }
                );
                break;

            default:
                gsap.from(letters, {
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 90%",
                        end: "bottom 80%",
                        scrub: 1,
                    },
                    x: -20,
                    opacity: 0,
                    duration: 0.8,
                    stagger: stagger,
                    ease: "power3.out",
                });
        }
    }, [animation, stagger]);

    return (
        <span
            ref={textRef}
            className={`inline-flex flex-wrap overflow-hidden break-words ${className}`}
        >
            {text.split(" ").map((word, wi) => (
                <span
                    key={wi}
                    className="inline-block whitespace-nowrap mr-2 relative" // keep word together
                >
                    {word.split("").map((char, ci) => (
                        <span
                            key={ci}
                            className="letter inline-block relative overflow-hidden"
                        >
                            <span className="relative">{char}</span>
                        </span>
                    ))}
                </span>
            ))}
        </span>
    );
};

export default AnimatedText;
