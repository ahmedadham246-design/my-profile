import { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const Badge = ({ children, ...props }: BadgeProps) => {
  return (
    <span
      {...props}
      className={`border-[0.5px] border-foreground/30 rounded-md px-2 py-1 text-xs cursor-pointer transition-all hover:bg-primary hover:text-black  hover:scale-105 duration-200 hover:shadow-md ${props.className}`}
    >
      {children}
    </span>
  );
};
