import SectionCounter from "../components/section-counter";
import SectionCounterDescription from "../components/section-counter-descriotion";
import TimelineVertical from "../components/timeline-vertical";
import { TIME_LINE } from "../data/TimeLine";

const SECTION_NUMBER = 5;

const Career = () => {
  return (
    <section className="section bg-black grid gap-7">
      <div className="section-header">
        <SectionCounterDescription
          description="CAREER"
          start={SECTION_NUMBER}
        />
        <SectionCounter start={SECTION_NUMBER} />
      </div>
      <div className="container mx-auto grid gap-5">
        <div className="flex items-end justify-between">
          <h3 className="text-white  text-6xl lg:text-9xl font-black font-bebas-neue  ">
            FROM COPYWRITER <br /> TO FOUNDER.
          </h3>
          <p className="text-text-muted font-jet-brains-mono text-sm">
            From 2019 → NOW
          </p>
        </div>
        <hr className=" border-gray-500/25 w-full" />

        {/* Mobile: Vertical Timeline */}
        <div className="sm:hidden">
          <TimelineVertical />
        </div>

        {/* sm: Horizontal Scrollable Timeline */}
        <div className="hidden sm:grid lg:hidden relative overflow-x-auto -mx-4 px-4">
          <div className="absolute top-8 left-0 right-0 h-px bg-zinc-700" />
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8 min-w-[500px]">
            {TIME_LINE.map((item) => (
              <div
                key={item.company}
                className="relative flex flex-col items-center text-center"
              >
                <span className="text-xs text-zinc-500 mb-6">{item.year}</span>
                <div
                  className={`z-10 h-4 w-4 rounded-full border-2 ${
                    item.active
                      ? "bg-primary border-primary"
                      : "border-zinc-400 bg-black"
                  }`}
                />
                <h3
                  className={`mt-8 text-xl font-bold uppercase leading-none ${
                    item.active ? "text-primary" : ""
                  }`}
                >
                  {item.company}
                </h3>
                <p className="mt-4 text-xs text-zinc-400 max-w-[140px]">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* lg: Full 7-Column Horizontal Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-8 left-0 right-0 h-px bg-zinc-700" />
          <div className="grid grid-cols-7 gap-8">
            {TIME_LINE.map((item) => (
              <div
                key={item.company}
                className="relative flex flex-col items-center text-center"
              >
                <span className="text-xs text-zinc-500 mb-6">{item.year}</span>
                <div
                  className={`z-10 h-4 w-4 rounded-full border-2 ${
                    item.active
                      ? "bg-primary border-primary"
                      : "border-zinc-400 bg-black"
                  }`}
                />
                <h3
                  className={`mt-8 text-3xl font-bold uppercase leading-none ${
                    item.active ? "text-primary" : ""
                  }`}
                >
                  {item.company}
                </h3>
                <p className="mt-4 text-sm text-zinc-400 max-w-[180px]">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center font-jet-brains-mono text-sm">
        IN-HOUSE COPYWRITER → TEAM LEAD →{" "}
        <span className="text-primary">FOUNDER</span>
      </p>
    </section>
  );
};

export default Career;
