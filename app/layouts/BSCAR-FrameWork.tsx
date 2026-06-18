import BscarCard from "../components/BscarCard";
import SectionCounter from "../components/section-counter";
import SectionCounterDescription from "../components/section-counter-descriotion";
import { BSCAR_FRAMEWORK_STEP } from "../data/About";

const SECTION_NUMBER = 3;
const BASCRFrameWork = () => {
  return (
    <section id="BASCAR" className="bg-yellow-50 section">
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

      <div className="grid grid-cols-1 lg:grid-cols-5 lg:mt-5 lg:gap-0 gap-10  ">
        {BSCAR_FRAMEWORK_STEP.map((step) => (
          <BscarCard
            key={step.number}
            step={step.number}
            mainLetter={step.letter}
            title={step.title}
            description={step.description}
            highlighted={step.number === 3}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        <span className="w-[5%] h-px bg-black" />
        <p className="font-jet-brains-mono text-text-muted">
          EACH CYCLE BUILDS ON THE LAST
        </p>
        <span className="w-[5%] h-px bg-black" />
      </div>
    </section>
  );
};

export default BASCRFrameWork;
