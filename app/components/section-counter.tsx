interface ISectionCounter {
  start?: number;
  end?: number;
  className?: string;
}
const SectionCounter = ({
  start = 0,
  end = 25,
  className = "",
}: ISectionCounter) => {
  return (
    <span
      className={`font-jet-brains-mono text-sm text-text-muted ${className}`}
    >
      {start}/{end}
    </span>
  );
};

export default SectionCounter;
