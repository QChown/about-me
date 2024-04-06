import React, { useRef } from "react";

type Props = {
  text: string;
  semanticType?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

const AnimatedText = ({ text, semanticType = "p", className = "" }: Props) => {
  const elementRef = useRef<HTMLElement>(null);

  const element = React.createElement(
    semanticType,
    { ref: elementRef, className: className },
    text
  );

  return element;
};

export default AnimatedText;
