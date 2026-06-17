interface ISectionCounter {
  start?: number;
  description?: string;
  className?: string;
}
const SectionCounterDescription = ({
  start = 0,
  description = "",
  className = "",
}: ISectionCounter) => {
  const number = start > 9 ? start.toString() : `0${start.toString()}`;
  return (
    <div className="flex items-center gap-2">
      <span className="size-2 inline-block bg-primary rounded-full" />
      <span
        className={`font-jet-brains-mono text-sm text-text-muted ${className}`}
      >
        {number} / {description}
      </span>
    </div>
  );
};

export default SectionCounterDescription;
