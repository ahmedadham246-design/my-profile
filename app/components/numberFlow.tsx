"use client";
import { useEffect, useRef, useState } from "react";
import NumberFlow, { NumberFlowProps } from "@number-flow/react";

interface IProps extends NumberFlowProps {
  value: number;
}

export const NumFlow = ({ value, ...props }: IProps) => {
  const [currentVal, setCurrentVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            setCurrentVal(value);
          }, 50);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <span ref={ref} className="inline-block">
      <NumberFlow {...props} value={currentVal} />
    </span>
  );
};

export const parseNumberString = (
  str: string,
): { value: number; suffix: string } => {
  const cleanStr = str.replace(/,/g, "");
  const match = cleanStr.match(/^(\d+)(.*)$/);
  if (match) {
    return {
      value: parseInt(match[1], 10),
      suffix: match[2],
    };
  }
  return { value: 0, suffix: str };
};

interface TextProps extends Omit<NumberFlowProps, "value"> {
  text: string;
}

export const AnimatedNumberText = ({ text, ...props }: TextProps) => {
  const { value, suffix } = parseNumberString(text);
  return (
    <span className="inline-flex items-baseline">
      <NumFlow {...props} value={value} />
      {suffix && <span className={props.className}>{suffix}</span>}
    </span>
  );
};
