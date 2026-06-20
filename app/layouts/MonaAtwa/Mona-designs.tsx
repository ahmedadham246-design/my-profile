import DesignCard from "@/app/components/DesignCard";
import SectionCounter from "@/app/components/section-counter";
import SectionCounterDescription from "@/app/components/section-counter-descriotion";
import { MONA_DESIGNS } from "@/app/data/MonaAtwaData";

const COUNTER = 11;

const MonaDesigns = () => {
  return (
    <section className="bg-pink-50 py-20 px-6 md:px-12 lg:px-24 ">
      {/* header */}
      <div className="section-header mb-6">
        <SectionCounterDescription start={COUNTER} description="DESIGNS POC" />
        <SectionCounter start={COUNTER} />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-b-gray-400/30 pb-10">
          <h1 className="text-5xl md:text-7xl font-black font-bebas-neue text-black  uppercase">
            02- Dr. Mona Atwa· DESIGNS
          </h1>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-sm md:text-base font-medium tracking-widest uppercase font-jet-brains-mono text-text-muted">
              HEALTHCARE · DERMATOLOGY
              <br />
              2019-Present
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 items-stretch">
          {MONA_DESIGNS.map((project, index) => (
            <DesignCard
              key={`/images/mona-${index + 1}.webp`}
              img={`/images/mona-${index + 1}.webp`}
              count={index + 1}
              link={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonaDesigns;
