import CaseStudySection from "@/app/components/CaseStudySection";
import MonaLogo from "@/public/images/dr-mona-logo.webp";
import { MONA_METRICS, MONA_BADGES } from "@/app/data/MonaAtwaData";

const MonaAtwa = () => {
  return (
    <CaseStudySection
      counter={9}
      caseLabel="CASE 02"
      title="02 Dr. Mona Atwa"
      logo={MonaLogo}
      logoAlt="Dr. Mona Atwa Logo"
      logoWidth={150}
      logoHeight={50}
      headline={
        <>
          A PERSONAL BRAND BEFORE{" "}
          <span className="text-primary">
            PERSONAL BRANDS WERE A THING.
          </span>
        </>
      }
      description="Positioned a respected dermatologist as the canal region's most-trusted name. Five-year retainer, three cities, and a Ramadan campaign that booked 2.6M EGP with zero ad spend. With 31M EGP cumulative revenue over 5-year."
      challenge="Respected clinic, weak digital presence. Word of mouth, not scroll. Brief: own the canal."
      insight="Patients don't choose credentials. They choose the doctor they feel safe with."
      execution="Personal-brand strategy before the trend. Educate first, sell second. Consistency as weapon."
      resultsLabel="METRICS"
      results={MONA_METRICS}
      badges={MONA_BADGES}
    />
  );
};

export default MonaAtwa;
