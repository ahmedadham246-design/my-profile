import { TIME_LINE } from "../data/TimeLine";

const TimelineVertical = () => {
  return (
    <div className="relative flex flex-col gap-0">
      <div className="absolute left-[7px] top-4 bottom-4 w-px bg-zinc-700" />

      {TIME_LINE.map((item, index) => (
        <div
          key={item.company}
          className="relative flex items-start gap-6 py-5"
        >
          <div
            className={`z-10 h-4 w-4 shrink-0 rounded-full border-2 ${
              item.active
                ? "bg-primary border-primary"
                : "border-zinc-400 bg-black"
            }`}
          />

          <div className="flex flex-col">
            <span className="text-xs text-zinc-500">{item.year}</span>

            <h3
              className={`mt-1 text-2xl font-bold uppercase leading-none ${
                item.active ? "text-primary" : "text-white"
              }`}
            >
              {item.company}
            </h3>

            <p className="mt-2 text-sm text-zinc-400">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineVertical;
