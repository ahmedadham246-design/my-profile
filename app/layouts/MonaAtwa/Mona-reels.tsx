import ReelsSection from "@/app/components/ReelsSection";
import { MONA_REELS } from "@/app/data/MonaAtwaData";

const MonaReels = () => {
  return (
    <ReelsSection
      counter={10}
      description="REELS POC"
      sectionNumber="02-"
      title="DR. MONA ATWA · REELS"
      subtitle="HEALTHCARE · DERMATOLOGY"
      subtitleMuted="ISMAILIA · PS · SUEZ · "
      dateRange="2019-Present"
      reels={MONA_REELS}
    />
  );
};

export default MonaReels;
