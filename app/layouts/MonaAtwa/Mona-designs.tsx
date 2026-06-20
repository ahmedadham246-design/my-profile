import DesignsSection from "@/app/components/DesignsSection";
import { MONA_DESIGNS } from "@/app/data/MonaAtwaData";

const MonaDesigns = () => {
  return (
    <DesignsSection
      counter={11}
      description="DESIGNS POC"
      sectionNumber="02-"
      title="Dr. Mona Atwa· DESIGNS"
      subtitle="HEALTHCARE · DERMATOLOGY"
      dateRange="2019-Present"
      bgColor="bg-pink-50"
      designs={MONA_DESIGNS}
      imagePrefix="mona"
    />
  );
};

export default MonaDesigns;
