"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "slide-left"
  | "slide-right";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
}

const getFromVars = (
  variant: AnimationVariant
): gsap.TweenVars => {
  switch (variant) {
    case "fade-up":
      return { opacity: 0, y: 60 };
    case "fade-down":
      return { opacity: 0, y: -60 };
    case "fade-in":
      return { opacity: 0 };
    case "slide-left":
      return { opacity: 0, x: -60 };
    case "slide-right":
      return { opacity: 0, x: 60 };
  }
};

const ScrollReveal = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.8,
  stagger = 0.15,
  className = "",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.children.length > 0 ? el.children : el;

    const fromVars = getFromVars(variant);

    gsap.set(targets, fromVars);

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        stagger: el.children.length > 1 ? stagger : 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [variant, delay, duration, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
