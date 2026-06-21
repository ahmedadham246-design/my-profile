import SectionCounter from "../components/section-counter";
import SectionCounterDescription from "../components/section-counter-descriotion";
import { NUMBERS_FIRST_SECTION, NUMBERS_SECOND_SECTION } from "../data/Numbers";

const SECTION_NUMBER = 4;

const Numbers = () => {
  return (
    <section id="numbers" className="section grid gap-7 bg-black ">
      <div className="section-header">
        <SectionCounterDescription
          description="NUMBERS"
          start={SECTION_NUMBER}
        />
        <SectionCounter start={SECTION_NUMBER} />
      </div>

      <div className="container mx-auto grid gap-7 ">
        <div className="flex items-center justify-between">
          <h3 className="text-5xl lg:text-7xl font-bebas-neue font-black text-white">
            SIGNATURE RESULTS.
          </h3>
          <span className="text-text-muted font-jet-brains-mono text-sm">
            ACROSS 6 YEARS · 40+ BRANDS
          </span>
        </div>

        {/* CARDS SECTION WRAPPER TO NOT APPLY GAP ON IT  */}
        <div>
          {/* First CARDS SECTION */}
          <div className="grid  grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-0 ">
            {NUMBERS_FIRST_SECTION.map((item, index) => {
              const isFirstCard = index === 0;
              return (
                <div
                  key={item.company}
                  className={`border border-text-muted p-8 flex flex-col gap-8 ${isFirstCard ? "border-primary bg-primary text-black" : ""}`}
                >
                  <div className="flex items-center gap-1 font-jet-brains-mono text-sm">
                    <p>{item.company}</p>{" "}
                    <span
                      className={`inline-block size-0.5 ${
                        isFirstCard ? "bg-black" : "bg-white"
                      } `}
                    />{" "}
                    <p>{item.duration}</p>
                  </div>

                  <p className="font-bebas-neue  text-6xl lg:text-8xl">
                    {item.Number}
                    <span
                      className={`text-6xl ${isFirstCard ? "text-black" : "text-primary"}`}
                    >
                      {item.unit}
                    </span>
                  </p>
                  <p className={`text-sm ${isFirstCard ? "font-bold" : ""}`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          {/* Second CARDS SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 ">
            {NUMBERS_SECOND_SECTION.map((item) => {
              return (
                <div
                  key={item.company}
                  className={`border border-text-muted p-8 flex flex-col gap-8 `}
                >
                  <div className="flex items-center gap-1 font-jet-brains-mono text-sm">
                    <p>{item.company}</p>{" "}
                    {item.duration && (
                      <>
                        <span className={`inline-block size-0.5  bg-white `} />{" "}
                        <p>{item.duration}</p>
                      </>
                    )}
                  </div>

                  <p className="font-bebas-neue  text-6xl lg:text-8xl">
                    {item.Number}
                    <span className={`text-6xl text-primary`}>{item.unit}</span>
                  </p>
                  <p className="text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
