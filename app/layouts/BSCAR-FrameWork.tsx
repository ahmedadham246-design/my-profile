import AboutCard from "../components/AboutCard";
import SectionCounter from "../components/section-counter";
import SectionCounterDescription from "../components/section-counter-descriotion";

const SECTION_NUMBER = 3;
const BASCRFrameWork = () => {
  return (
    <section id="BASCAR" className="bg-[#faeed9] section">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4 lg:mb-12">
        <SectionCounterDescription
          description="OPERATING SYSTEM"
          start={SECTION_NUMBER}
        />
        <SectionCounter start={SECTION_NUMBER} />
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-10 flex-wrap lg:flex-nowrap ">
          <h2 className="text-black font-bebas-neue text-5xl lg:text-9xl font-black w-full lg:w-[50%]">
            THE BSCAR FRAMEWORK.
          </h2>
          <p className="text-black font-jet-brains-mono  text-base lg:text-lg leading-12 text-justify w-full lg:w-[28%]">
            MY OPERATING SYSTEM FOR EVERY PROJECT. FIVE STEPS THAT{" "}
            <span className="font-bold">LOOP</span> . EACH CYCLE BUILDS ON THE
            LAST UNTIL THE BRAND HAS MOMENTUM.
          </p>
        </div>
        <hr className=" border-gray-500/25 w-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 mt-5 lg:gap-0 gap-10 ">
        <AboutCard
          step={1}
          mainLetter="B"
          title="Brief"
          description="Strip the ask to the problem. What does success look like in numbers & in feeling, in 90 days?"
        />

        <AboutCard
          step={2}
          mainLetter="S"
          title="Strategy"
          description="Audience, insight, angle, channels. The argument behind every decision before the first asset."
        />

        <AboutCard
          step={3}
          mainLetter="C"
          title="Content"
          description="Make the work. Copy, scripts, art direction, production. Ship at the strategy's cadence."
          highlighted
        />

        <AboutCard
          step={4}
          mainLetter="A"
          title="Analysis"
          description="Read the data with the strategy in your hand. What converted, what didn't, what surprised us."
        />
        <AboutCard
          step={5}
          mainLetter="R"
          title="Repeat"
          description="Compound. The brands that win are the ones running the loop fastest & with consistency."
        />
      </div>
    </section>
  );
};

export default BASCRFrameWork;
