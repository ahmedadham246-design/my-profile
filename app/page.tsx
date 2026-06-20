import CaseStudySection from "./components/CaseStudySection";
import DesignsSection from "./components/DesignsSection";
import ReelsSection from "./components/ReelsSection";
import {
  KHAZNA_DESIGNS,
  KHAZNA_REELS,
  RESULTS,
  RESULTS_BADGE,
} from "./data/KhaznaData";
import {
  MONA_BADGES,
  MONA_DESIGNS,
  MONA_METRICS,
  MONA_REELS,
} from "./data/MonaAtwaData";
import About from "./layouts/About";
import BASCRFrameWork from "./layouts/BSCAR-FrameWork";
import Career from "./layouts/Career";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import Numbers from "./layouts/Numbers";

// Logos
import KhaznaLogo from "@/public/images/khazna.webp";
import MonaLogo from "@/public/images/dr-mona-logo.webp";
import RoastLogo from "@/public/images/roast-logo.webp";
import { ROAST_BADGES, ROAST_METRICS, ROAST_REELS } from "./data/RoastData";

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
            <span className="text-primary">PERSONAL BRANDS WERE A THING.</span>
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

      {/* 03 Roast N’ Toast */}
      <CaseStudySection
        counter={12}
        caseLabel="CASE 03"
        title="03 Roast N’ Toast"
        logo={RoastLogo}
        logoAlt="Roast N’ Toast Logo"
        logoWidth={150}
        logoHeight={50}
        headline={
          <>
            BUILT A LINE OUTSIDE THE DOOR BEFORE
            <span className="text-primary">THE DOOR OPENED.</span>
          </>
        }
        description="Specialty coffee in a city that hadn't seen it. Zero audience, zero brand equity, limited budget. We made Ismailia talk about it before it opened, then trained the in-house team to take over."
        challenge="Saturated café market, no audience, limited budget.Plus: train the client to run marketing in-house."
        insight="People don't line up for coffee they line up for stories. The pre-opening window was the real asset."
        execution="Three phases: curiosity, behind-the-scenes, collective launch moment. Mentored an internal lead."
        resultsLabel="METRICS"
        results={ROAST_METRICS}
        badges={ROAST_BADGES}
      />
      <ReelsSection
        counter={13}
        description="REELS POC"
        sectionNumber="03"
        title="ROAST N’ TOAST · REELS"
        subtitle="SPECIALTY COFFEE · F&B ISMAILIA"
        subtitleMuted="2025"
        dateRange="2019-Present"
        reels={ROAST_REELS}
      />
      <Footer />
    </>
  );
};

export default HomeScreen;
