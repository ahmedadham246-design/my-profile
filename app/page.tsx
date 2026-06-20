import CaseStudySection from "./components/CaseStudySection";
import DesignsSection from "./components/DesignsSection";
import ReelCard from "./components/ReelCard";
import ReelsSection from "./components/ReelsSection";
import {
  KHAZNA_DESIGNS,
  KHAZNA_REELS,
  RESULTS,
  RESULTS_BADGE,
} from "./data/KhaznaData";
import About from "./layouts/About";
import BASCRFrameWork from "./layouts/BSCAR-FrameWork";
import Career from "./layouts/Career";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import MonaDesigns from "./layouts/MonaAtwa/Mona-designs";
import MonaReels from "./layouts/MonaAtwa/Mona-reels";
import MonaAtwa from "./layouts/MonaAtwa/MonaAtwa";
import Numbers from "./layouts/Numbers";

import KhaznaLogo from "@/public/images/khazna.webp";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <About />
      <BASCRFrameWork />
      <Numbers />
      <Career />
      {/* HKAZNA */}
      <CaseStudySection
        counter={6}
        caseLabel="CASE 01"
        title="01 Khazna App"
        logo={KhaznaLogo}
        logoAlt="Khazna Logo"
        logoWidth={250}
        logoHeight={150}
        headline={
          <>
            EGYPT&apos;S EMBEDDED FINANCE{" "}
            <span className="text-primary">FLAGSHIP</span> SCALED ACROSS TWO
            MARKETS.
          </>
        }
        description="Built the full content engine from scratch (voice guide, CRM library, UX copy, campaigns, and the Saudi Arabia launch) for one of Egypt's largest fintech apps. Bilingual, compliant, and human enough that people stopped flinching at finance."
        challenge="Small team. Fast scale. Every piece of copy bilingual, on-brand, compliant across two markets."
        insight="Fintech in Egypt carries stigma. Humanize through content that educates, entertains, simplifies."
        execution="Countless strategies, Voice guide, 2,000-message CRM library, app's first-edition UX copy, full KSA launch strategy."
        resultsLabel="RESULTS"
        results={RESULTS}
        badges={RESULTS_BADGE}
      />

      <ReelsSection
        counter={7}
        description="REELS POC"
        sectionNumber="01-"
        title="KHAZNA · REELS"
        subtitle="FINTECH"
        subtitleMuted="EGYPT + KSA "
        dateRange="2021–2025"
        reels={KHAZNA_REELS}
      />
      <DesignsSection
        counter={8}
        description="DESIGNS POC"
        sectionNumber="01-"
        title="KHAZNA · DESIGNS"
        subtitle="FINTECH EGYPT + KCA"
        dateRange="2021-2023"
        bgColor="bg-foreground"
        designs={KHAZNA_DESIGNS}
        imagePrefix="kd"
      />

      {/* MONA ATWA */}

      <MonaAtwa />
      <MonaReels />
      <MonaDesigns />
      <Footer />
    </>
  );
};

export default HomeScreen;
