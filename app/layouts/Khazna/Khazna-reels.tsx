import ReelCard from "@/app/components/ReelCard";
import SectionCounter from "@/app/components/section-counter";
import SectionCounterDescription from "@/app/components/section-counter-descriotion";
import { KHAZNA_REELS } from "@/app/data/KhaznaData";
const COUNTER = 7;
const KhaznaReels = () => {
  return (
    <section className="section bg-black ">
      <div className="section-header">
        <SectionCounterDescription description="REELS POC" start={COUNTER} />
        <SectionCounter start={COUNTER} />
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between border-b border-gray-50/20 pb-2">
          <div className="text-6xl lg:text-8xl font-black font-bebas-neue flex items-center gap-2">
            <span className="text-primary">01-</span>
            <h4>KHAZNA · REELS</h4>
          </div>
          <p className="text-md text-end font-jet-brains-mono">
            FINTECH <span className="text-text-muted">EGYPT + KSA </span> <br />
            <span className="text-text-muted text-end">2021–2025</span>
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {KHAZNA_REELS.map((r, idx) => (
            <ReelCard key={r.link} videoUrl={r.link} count={idx + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KhaznaReels;
