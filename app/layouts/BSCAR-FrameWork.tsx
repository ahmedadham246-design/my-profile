import SectionCounter from "../components/section-counter";
import SectionCounterDescription from "../components/section-counter-descriotion";

const SECTION_NUMBER = 3;
const BASCRFrameWork = () => {
  return (
    <section id="BASCAR" className="bg-foreground section">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4 lg:mb-12">
        <SectionCounterDescription
          description="OPERATING SYSTEM"
          start={SECTION_NUMBER}
        />
        <SectionCounter start={SECTION_NUMBER} />
      </div>

      <div className="flex justify-between items-center gap-10 flex-wrap lg:flex-nowrap container mx-auto">
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
    </section>
  );
};

export default BASCRFrameWork;
