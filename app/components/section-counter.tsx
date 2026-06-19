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
  const number = start > 9 ? start.toString() : `0${start.toString()}`;
  return (
    <span
      className={`font-jet-brains-mono text-sm ${className}`}
    >
      {number}/{end}
    </span>
  );
};

export default SectionCounter;
