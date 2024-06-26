"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {};

const Hero = (props: Props) => {
  const [pinSectionTwo, setPinSectionTwo] = useState(false);
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
            end: "top 200",
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
            end: "top 200",
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
            scrub: 1,
            endTrigger: endTrigger.current,
            end: "top 200",
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
          end: "top 200",
        },
      });

      ScrollTrigger.create({
        trigger: animationParent.current,
        start: "top top",
        pin: true,
        onLeave: () => {
          setPinSectionTwo(true);
        },
        onEnterBack: () => {
          setPinSectionTwo(false);
        },
        end: "+=300",
      });
    },

    { dependencies: [], scope: animationParent }
  );

  useGSAP(
    () => {
      const fadeText: gsap.DOMTarget = gsap.utils.toArray(".fadeText");
      const fadeImages: gsap.DOMTarget = gsap.utils.toArray(".fadeImages");
      gsap.utils.toArray(".trigger").forEach((trigger, index) => {
        gsap.to(".imgContainer", {
          scrollTrigger: {
            trigger: trigger as gsap.DOMTarget,
            start: "top+=50% top",
            immediateRender: index === 0 ?? false,
            toggleActions: "play none none reverse",
            onEnter: () => {
              console.log(index);
              console.log(fadeImages[index]);
              gsap.to(fadeText[index], {
                autoAlpha: 1,
                delay: 0.5,
              });
              gsap.to(fadeImages[index + 1], {
                autoAlpha: 1,
                duration: 1.27,
              });
              gsap.to(fadeImages[index], {
                autoAlpha: 0,
                duration: 1.27,
              });
            },
            onLeaveBack: () => {
              gsap.to(fadeText[index], {
                autoAlpha: 0,
              });
              gsap.to(fadeImages[index + 1], {
                autoAlpha: 0,
                duration: 1.27,
              });
              gsap.to(fadeImages[index], {
                autoAlpha: 1,
                duration: 1.27,
              });
            },
            // onLeave: () => {
            //   gsap.to(fadeText[index - 1], {
            //     autoAlpha: 0,
            //   });
            // },
            // onEnterBack: () => {
            //   gsap.to(fadeText[index], {
            //     autoAlpha: 1,
            //   });
            // },
          },
          xPercent: index % 2 === 0 ? 100 : 0,
          ease: "power1.inOut",
          duration: 0.75,
        });
      });
    },
    { dependencies: [] }
  );
  return (
    <div className='bg-stone-900'>
      <div
        ref={animationParent}
        className='flex flex-col justify-center items-center container'
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
        <div className='w-full h-full'>
          <div className='trigger absolute top-0 left-0 translate-y-[300px] w-full pointer-events-none h-screen'></div>
          <div className='trigger absolute top-[100vh] left-0 translate-y-[300px] w-full pointer-events-none h-screen'></div>
          <div className='trigger absolute top-[200vh] left-0 translate-y-[300px] w-full pointer-events-none h-screen'></div>

          <div className='top-0 left-0 w-full sectionTwo scale-[.25] -translate-y-1/3 opacity-0 flex flex-wrap'>
            <div className='w-1/2 h-screen imgContainer sticky -top-[300px]'>
              <div className='h-full w-full px-8 flex items-center relative'>
                <div className='fadeImages woo absolute w-[calc(100%-4rem)] grid grid-cols-6 grid-rows-5 gap-4'>
                  <Image
                    alt='Landscape of New Brunswick Canada'
                    src='/images/nb-landscape.jpeg'
                    width={1250}
                    height={1250}
                    className='col-span-4 row-span-2 col-start-3 row-start-4'
                  />
                  <Image
                    alt='Flag of New Brunswick Canada'
                    src='/images/nb-flag.webp'
                    width={800}
                    height={800}
                    className='col-span-2 row-span-2'
                  />
                  <Image
                    alt='Landscape of New Brunswick Canada'
                    src='/images/super-joe.jpeg'
                    width={800}
                    height={800}
                    className='col-span-2 row-span-3 col-start-5 row-start-1'
                  />
                  <Image
                    alt='Landscape of New Brunswick Canada'
                    src='/images/young-q.jpg'
                    width={800}
                    height={800}
                    className='col-span-2 row-span-3 col-start-1 row-start-3'
                  />
                  <Image
                    alt='Landscape of New Brunswick Canada'
                    src='/images/young-q2.jpg'
                    width={800}
                    height={800}
                    className='col-span-2 row-span-3 col-start-3 object-left'
                  />
                </div>
                <div className='fadeImages absolute opacity-0 w-[calc(100%-4rem)] grid grid-cols-6 grid-rows-5 gap-4'>
                  <Image
                    alt='Football on grass field'
                    src='/images/football-1.jpeg'
                    width={1250}
                    height={1250}
                    className='col-span-4 row-span-2'
                  />
                  <Image
                    alt='Landscape of New Brunswick Canada'
                    src='/images/vesper.JPG'
                    width={800}
                    height={800}
                    className='col-span-2 row-span-5 col-start-5 object-[70%]'
                  />
                  <Image
                    alt='Landscape of New Brunswick Canada'
                    src='/images/surgery.JPG'
                    width={800}
                    height={800}
                    className='col-span-2 row-span-3 row-start-3'
                  />
                  <Image
                    alt='Landscape of New Brunswick Canada'
                    src='/images/football-2.JPG'
                    width={800}
                    height={800}
                    className='col-span-2 row-span-2 col-start-3 row-start-3'
                  />
                </div>
                <div className='fadeImages absolute opacity-0 w-[calc(100%-4rem)] grid grid-cols-6 grid-rows-5 gap-4'>
                  <Image
                    alt='Football on grass field'
                    src='/images/aspen.jpeg'
                    width={1250}
                    height={1250}
                    className='col-span-3 row-span-3'
                  />
                  <Image
                    alt='Landscape of New Brunswick Canada'
                    src='/images/hike.jpeg'
                    width={800}
                    height={800}
                    className='col-span-3 row-span-2 col-start-2 row-start-4'
                  />
                  <Image
                    alt='Landscape of New Brunswick Canada'
                    src='/images/maple-2.jpeg'
                    width={800}
                    height={800}
                    className='col-span-2 row-span-2 col-start-5 row-start-4'
                  />
                  <Image
                    alt='Landscape of New Brunswick Canada'
                    src='/images/brazil.jpeg'
                    width={800}
                    height={800}
                    className='col-span-3 row-span-3 col-start-4 row-start-1'
                  />
                </div>
                <div className='fadeImages absolute opacity-0 w-[calc(100%-4rem)] grid grid-cols-6 grid-rows-7 gap-4'>
                  <Image
                    alt='Football on grass field'
                    src='/images/jackson.jpg'
                    width={1250}
                    height={1250}
                    className='col-span-4 row-span-4'
                  />
                  <Image
                    alt='Landscape of New Brunswick Canada'
                    src='/images/house.jpg'
                    width={800}
                    height={800}
                    className='col-span-2 row-span-3 col-start-5 row-start-2'
                  />
                  <Image
                    alt='Landscape of New Brunswick Canada'
                    src='/images/kids.jpg'
                    width={800}
                    height={800}
                    className='col-span-3 row-span-3 row-start-5'
                  />
                  <Image
                    alt='Landscape of New Brunswick Canada'
                    src='/images/copacabana.jpg'
                    width={800}
                    height={800}
                    className='col-span-3 row-span-3 col-start-4 row-start-5'
                  />
                </div>
              </div>
            </div>
            <div className='w-1/2 h-screen flex items-center justify-center  px-8 '>
              <div className='h-fit flex flex-col gap-4'>
                <h2>Roots and Early Inspirations</h2>
                <p>
                  I'm a true New Brunswick native and the spirited youngest of
                  five siblings. My early years were a whirlwind of sports—lace
                  up skates for hockey, cleats for football, and spikes for
                  track and field, no season passed without a game or match.
                </p>
                <p>
                  Looking up to Joe Sakic as more than just a sports star, he
                  was my role model, teaching me about resilience and
                  leadership, lessons I carry with me every day.
                </p>
              </div>
            </div>
            <div className='w-1/2 h-screen flex items-center justify-center  px-8 '>
              <div className='h-fit flex flex-col gap-4 fadeText opacity-0'>
                <h2>From Gridiron Dreams to Reality Checks</h2>
                <p>
                  My passion for football hit its stride in high school, which
                  led me all the way to Calgary in 2012 to play at the
                  University of Calgary. However, the path wasn't easy; I
                  endured multiple knee injuries requiring six surgeries,
                  ultimately sidelining my dreams of playing professional
                  football.
                </p>
              </div>
            </div>
            <div className='w-1/2 h-screen'></div>
            <div className='w-1/2  h-screen'></div>
            <div className='w-1/2 h-screen flex items-center justify-center  px-8 '>
              <div className='h-fit flex flex-col gap-4 fadeText opacity-0 '>
                <h2>Turning Points</h2>
                <p>
                  Initially, I studied Kinesiology at the University of Calgary.
                  My game-changer was a course titled 'Computers in
                  Kinesiology'—it wasn't just my only A+; it completely shifted
                  my perspective. Inspired by the intersection of tech and
                  sports, I decided to pivot my career towards technology,
                  aiming to create websites and games that celebrate the sports
                  world.
                </p>
              </div>
            </div>
            <div className='w-1/2 h-screen flex items-center justify-center px-8'>
              <div className='h-fit flex flex-col gap-4 fadeText opacity-0 '>
                <h2>Life Beyond Code</h2>
                <p>
                  Career paths change, but my love for sports never wavers—I'm
                  always ready to cheer on my favorite teams! When I'm not
                  catching a game, you can find me outdoors, whether I'm running
                  forest trails, cycling up hills, golfing with buddies, or
                  crafting unique pieces in my woodworking shop. Each activity
                  fuels my zest for life, blending adventure with creativity.
                </p>
              </div>
            </div>
            <div className='w-1/2 h-screen'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
