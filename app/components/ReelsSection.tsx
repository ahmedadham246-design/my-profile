import ReelCard from "@/app/components/ReelCard";
import SectionCounter from "@/app/components/section-counter";
import SectionCounterDescription from "@/app/components/section-counter-descriotion";
import Slider from "@/app/components/Slider";

interface ReelData {
  link: string;
  title?: string;
  views?: number;
}

interface ReelsSectionProps {
  counter: number;
  description: string;
  sectionNumber: string;
  title: string;
  subtitle: string;
  subtitleMuted: string;
  dateRange: string;
  reels: ReelData[];
  folderName?: string;
}

const ReelsSection = ({
  counter,
  description,
  sectionNumber,
  title,
  subtitle,
  subtitleMuted,
  dateRange,
  reels,
  folderName,
}: ReelsSectionProps) => {
  return (
    <section className="section bg-black ">
      <div className="section-header">
        <SectionCounterDescription description={description} start={counter} />
        <SectionCounter start={counter} />
      </div>
      <div className="container mx-auto mt-8">
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap border-b border-gray-50/20 pb-2">
          <div className="text-6xl lg:text-8xl font-black font-bebas-neue flex items-center gap-2">
            <span className="text-primary">{sectionNumber}</span>
            <h4>{title}</h4>
          </div>
          <p className="text-md text-end font-jet-brains-mono">
            {subtitle} <span className="text-text-muted">{subtitleMuted} </span>{" "}
            <br />
            <span className="text-text-muted text-end">{dateRange}</span>
          </p>
        </div>
        <div className="mt-10 w-full overflow-hidden">
          <Slider
            data={reels.map((r, idx) => (
              <ReelCard
                key={r.link}
                videoUrl={r.link}
                count={idx + 1}
                title={r.title}
                views={r.views}
                thumbnailUrl={folderName ? `/${folderName}/${idx + 1}.webp` : undefined}
              />
            ))}
          />
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
