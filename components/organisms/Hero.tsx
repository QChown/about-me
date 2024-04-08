"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {};

const Hero = (props: Props) => {
  const animationParent = useRef<HTMLDivElement>(null);
  const endTrigger = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const introText = new SplitText(".intro-text", { type: "chars" });
      const introChars = introText.chars;

      const myNameText = new SplitText(".name-text", { type: "words" });
      const myNameChars = myNameText.words;

      const titleText = new SplitText(".title-text", { type: "chars" });
      const titleChars = titleText.chars;

      introChars.forEach((char, index) => {
        gsap.to(char, {
          rotateY: () => (index === -65 ? 0 : 65),

          x: () => {
            if (index - 1 < introChars.length / 2) {
              return -250;
            } else {
              return 250;
            }
          },
          y: () => {
            switch (index) {
              case 0:
                return -190;
              case 1:
                return -205;
              case 2:
                return -210;
              case 3:
                return -215;
              case 4:
                return -220;
              case 5:
                return -225;
              case 6:
                return -225;
              case 7:
                return -220;
              case 8:
                return -215;
              default:
                return -200;
            }
          },
          autoAlpha: 0,
          duration: 1,
          scale: 1.5,
          stagger: 0.01,
          ease: "power4.out",
          scrollTrigger: {
            trigger: animationParent.current,
            start: "top top",
            scrub: 1,
            endTrigger: endTrigger.current,
            end: "top 20%",
            markers: true,
          },
        });
      });
      myNameChars.forEach((char, index) => {
        gsap.to(char, {
          x: () => {
            if (index === 0) {
              return -500;
            } else {
              return 500;
            }
          },
          y: () => gsap.utils.random(-10, -15),
          rotateY: () => (index === -65 ? 0 : 65),
          autoAlpha: 0,
          scale: 2,
          duration: 1,
          stagger: 0.01,
          ease: "power4.out",
          scrollTrigger: {
            trigger: animationParent.current,
            start: "top top",
            scrub: 1,
            endTrigger: endTrigger.current,
            end: "top 20%",
          },
        });
      });
      titleChars.forEach((char, index) => {
        gsap.to(char, {
          x: () => {
            if (index < 8) {
              return -250;
            } else {
              return 250;
            }
          },
          y: () => {
            switch (index) {
              case 0:
                return 190;
              case 1:
                return 205;
              case 2:
                return 210;
              case 3:
                return 215;
              case 4:
                return 220;
              case 5:
                return 225;
              case 6:
                return 225;
              case 7:
                return 220;
              case 8:
                return 215;
              default:
                return 200;
            }
          },
          rotateY: () => (index === -65 ? 0 : 65),

          scale: 2,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.01,
          ease: "power4.out",
          scrollTrigger: {
            trigger: animationParent.current,
            start: "top top",
            // markers: true,
            scrub: 1,
            endTrigger: endTrigger.current,
            end: "top 20%",
          },
        });
      });

      gsap.to(".sectionTwo", {
        scale: 1,
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: animationParent.current,
          start: "top top",
          scrub: 1,
          endTrigger: endTrigger.current,
          end: "top 20%",
          markers: true,
        },
      });
      ScrollTrigger.create({
        trigger: animationParent.current,
        start: "top top",
        pin: true,
        markers: true,
        scrub: 1,
        endTrigger: endTrigger.current,
        end: "top 20%",
      });
    },

    { dependencies: [], scope: animationParent }
  );

  useGSAP(() => {});
  return (
    <div className='bg-stone-900 '>
      <div
        ref={animationParent}
        className='flex flex-col justify-center items-center    container min-h-screen  '
      >
        <div className='absolute w-full h-screen top-0 left-0 flex items-center justify-center flex-col'>
          <h4 className='intro-text ml-10 text-center text-5xl mb-4 font-semibold text-stone-100'>
            Hello, I am
          </h4>
          <h1 className='name-text text-center text-9xl mb-6 font-bold text-stone-100'>
            Quentin Chown
          </h1>
          <h4
            ref={endTrigger}
            className='title-text ml-28 text-center text-5xl font-semibold text-stone-400'
          >
            Creative Developer
          </h4>
        </div>
        <div className=' top-0 left-0 bg-red-300 w-full h-[4000px] sectionTwo scale-[.25] -translate-y-1/3 opacity-0 flex flex-wrap'>
          <div className='w-1/2 bg-red-500 h-1/2'></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
