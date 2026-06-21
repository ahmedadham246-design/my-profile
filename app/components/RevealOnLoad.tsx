"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

interface RevealOnLoadProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const RevealOnLoad = ({
  children,
  delay = 0,
  duration = 0.9,
  className = "",
}: RevealOnLoadProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 40 });

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
    });

    return () => {
      tween.kill();
    };
  }, [delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default RevealOnLoad;
