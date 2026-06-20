import ReelCard from "@/app/components/ReelCard";
import SectionCounter from "@/app/components/section-counter";
import SectionCounterDescription from "@/app/components/section-counter-descriotion";
import Slider from "@/app/components/Slider";
import { KHAZNA_REELS } from "@/app/data/KhaznaData";
import { MONA_REELS } from "@/app/data/MonaAtwaData";
const COUNTER = 10;

const MonaReels = () => {
  return (
    <section className="section bg-black ">
      <div className="section-header mb-8">
        <SectionCounterDescription description="REELS POC" start={COUNTER} />
        <SectionCounter start={COUNTER} />
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between border-b border-gray-50/20 pb-2">
          <div className="text-6xl lg:text-8xl font-black font-bebas-neue flex items-center gap-2">
            <span className="text-primary">02-</span>
            <h4>DR. MONA ATWA · REELS</h4>
          </div>
          <p className="text-md text-end font-jet-brains-mono">
            HEALTHCARE · DERMATOLOGY{" "}
            <span className="text-text-muted">ISMAILIA · PS · SUEZ · </span>{" "}
            <br />
            <span className="text-text-muted text-end">2019-Present</span>
          </p>
        </div>
        <div className="mt-10 w-full overflow-hidden">
          <Slider
            data={MONA_REELS.map((r, idx) => (
              <ReelCard key={r} videoUrl={r} count={idx + 1} />
            ))}
          />
        </div>
      </div>
    </section>
  );
};

export default MonaReels;
