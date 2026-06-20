import DesignCard from "@/app/components/DesignCard";
import SectionCounter from "@/app/components/section-counter";
import SectionCounterDescription from "@/app/components/section-counter-descriotion";

interface DesignData {
  link: string;
}

interface DesignsSectionProps {
  counter: number;
  description: string;
  sectionNumber: string;
  title: string;
  subtitle: string;
  dateRange: string;
  bgColor: string;
  designs: DesignData[];
  imagePrefix: string;
}

const DesignsSection = ({
  counter,
  description,
  sectionNumber,
  title,
  subtitle,
  dateRange,
  bgColor,
  designs,
  imagePrefix,
}: DesignsSectionProps) => {
  return (
    <section className={`${bgColor} py-20 px-6 md:px-12 lg:px-24 `}>
      <div className="section-header mb-6">
        <SectionCounterDescription start={counter} description={description} />
        <SectionCounter start={counter} />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-b-gray-400/30 pb-10">
          <h1 className="text-5xl md:text-7xl font-black font-bebas-neue text-black uppercase">
            {sectionNumber} {title}
          </h1>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-sm md:text-base font-medium tracking-widest uppercase font-jet-brains-mono text-text-muted">
              {subtitle}
              <br />
              {dateRange}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 items-stretch">
          {designs.map((project, index) => (
            <DesignCard
              key={`/images/${imagePrefix}-${index + 1}.webp`}
              img={`/images/${imagePrefix}-${index + 1}.webp`}
              count={index + 1}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignsSection;
