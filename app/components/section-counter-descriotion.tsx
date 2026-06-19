import { HTMLAttributes } from "react";

interface ISectionCounter extends HTMLAttributes<HTMLSpanElement> {
  start?: number;
  description?: string;
}
const SectionCounterDescription = ({
  start = 0,
  description = "",
  className,
  ...props
}: ISectionCounter) => {
  const number = start > 9 ? start.toString() : `0${start.toString()}`;
  return (
    <div className="flex items-center gap-2">
      <span className="size-2 inline-block bg-primary rounded-full" />
      <span
        className={`font-jet-brains-mono text-sm ${className}`}
        {...props}
      >
        {number} / {description}
      </span>
    </div>
  );
};

export default SectionCounterDescription;
