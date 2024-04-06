import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {
  text: string;
  semanticType?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  parentref: React.RefObject<HTMLDivElement>;
};

const AnimatedText = ({
  text,
  semanticType = "p",
  className = "",
  parentref,
}: Props) => {
  const elementRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const splitText = new SplitText(elementRef.current, { type: "chars" });
    const chars = splitText.chars;

    gsap.set(chars, { autoAlpha: 1, x: 0, y: 0 });

    gsap.to(chars, {
      x: () => gsap.utils.random(-500, 800),
      y: () => gsap.utils.random(-500, 800),
      autoAlpha: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: parentref.current,
        start: "top top",
        markers: true,
        scrub: 1,
        end: "top+=500 top",
      },
    });
  }, []);

  const element = React.createElement(
    semanticType,
    { ref: elementRef, className: className },
    text
  );

  return element;
};

export default AnimatedText;
