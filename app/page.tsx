import CaseStudySection from "./components/CaseStudySection";
import DesignsSection from "./components/DesignsSection";
import ReelsSection from "./components/ReelsSection";
import ScrollReveal from "./components/ScrollReveal";
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


import { ROAST_BADGES, ROAST_METRICS, ROAST_REELS } from "./data/RoastData";
import {
  GRAND_PADEL_BADGES,
  GRAND_PADEL_METRICS,
  GRAND_PADEL_REELS,
} from "./data/GrandPadelData";
import {
  ANTICO_BADGES,
  ANTICO_METRICS,
  ANTICO_REELS,
  ANTICO_DESIGNS,
} from "./data/AnticoData";
import { ICON_BADGES, ICON_METRICS, ICON_REELS } from "./data/IconData";
import { ZEED_METRICS, ZEED_BADGES, ZEED_REELS } from "./data/ZeedData";
import Brands from "./layouts/Brands";

const HomeScreen = () => {
  return (
    <>
      <Header />

      <ScrollReveal variant="fade-up">
        <About />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <BASCRFrameWork />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <Numbers />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <Career />
      </ScrollReveal>

      {/* HKAZNA */}
      <ScrollReveal variant="fade-up">
        <CaseStudySection
          counter={6}
          caseLabel="CASE 01"
          title="01 Khazna App"
          logo="/images/khazna.webp"
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
      </ScrollReveal>

      <ScrollReveal variant="slide-left">
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
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
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
      </ScrollReveal>

      {/* MONA ATWA */}
      <ScrollReveal variant="fade-up">
        <CaseStudySection
          counter={9}
          caseLabel="CASE 02"
          title="02 Dr. Mona Atwa"
          logo="/images/dr-mona-logo.webp"
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
      </ScrollReveal>

      <ScrollReveal variant="slide-right">
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
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
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
      </ScrollReveal>

      {/* 03 Roast N' Toast */}
      <ScrollReveal variant="fade-up">
        <CaseStudySection
          counter={12}
          caseLabel="CASE 03"
          title="03 Roast N' Toast"
          logo="/images/roast-logo.webp"
          logoAlt="Roast N' Toast Logo"
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
      </ScrollReveal>

      <ScrollReveal variant="slide-left">
        <ReelsSection
          counter={13}
          description="REELS POC"
          sectionNumber="03"
          title="ROAST N' TOAST · REELS"
          subtitle="SPECIALTY COFFEE · F&B ISMAILIA"
          subtitleMuted="2025"
          dateRange="2019-Present"
          reels={ROAST_REELS}
        />
      </ScrollReveal>

      {/* 04 Grand Padel */}
      <ScrollReveal variant="fade-up">
        <CaseStudySection
          counter={14}
          caseLabel="CASE 04"
          title="04 Grand Padel"
          logo="/images/padel-logo.webp"
          logoAlt="Grand Padel Logo"
          logoWidth={150}
          logoHeight={50}
          headline={
            <>
              MADE PADEL LOOK FUN, <span className="text-primary">NOT PRO.</span>
            </>
          }
          description="A year-old padel court no one knew about. We shifted the content from sport-highlights to social-experience and pulled the curious in. 4x sales in two months, zero paid spend."
          challenge="Open over a year, barely known. Off-center location. Padel still emerging in Ismailia."
          insight="In a new rising sport, the growth driver isn't elite players, it's people who want to try it. Target the non-player."
          execution="Fun, relatable content with regular people laughing, failing, celebrating. The court as character."
          resultsLabel="RESULTS"
          results={GRAND_PADEL_METRICS}
          badges={GRAND_PADEL_BADGES}
        />
      </ScrollReveal>

      <ScrollReveal variant="slide-right">
        <ReelsSection
          counter={15}
          description="REELS POC"
          sectionNumber="04"
          title="GRAND PADEL · REELS"
          subtitle="SPORTS & ENTERTAINMENT · ISMAILIA"
          subtitleMuted="2025"
          dateRange="2025"
          reels={GRAND_PADEL_REELS}
        />
      </ScrollReveal>

      {/* 05 Antico Café */}
      <ScrollReveal variant="fade-up">
        <CaseStudySection
          counter={16}
          caseLabel="CASE 05"
          title="05 Antico"
          logo="/images/antico-logo.webp"
          logoAlt="Antico Logo"
          logoWidth={150}
          logoHeight={50}
          headline={
            <>
              SOLD THE ITALIAN MORNING & VIBES{" "}
              <span className="text-primary">BEFORE THE PRODUCT.</span>
            </>
          }
          description="Concept café in a city that had never seen one. We seeded a feeling before a brand, atmospheric, no product shots, so by opening day the audience already had a memory attached."
          challenge="No reference for Italian concept café locally. Educate before they can want it."
          insight="Italian breakfast culture is visual and ritual-based. Sell the experience before the product."
          execution="Atmospheric pre-launch · home and family content post-launch. Owners as the family of the home."
          resultsLabel="RESULTS"
          results={ANTICO_METRICS}
          badges={ANTICO_BADGES}
        />
      </ScrollReveal>

      <ScrollReveal variant="slide-left">
        <ReelsSection
          counter={17}
          description="REELS POC"
          sectionNumber="05"
          title="ANTICO CAFÉ · REELS"
          subtitle="F&B · ITALIAN CONCEPT"
          subtitleMuted="ISMAILIA · "
          dateRange="2025"
          reels={ANTICO_REELS}
        />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <DesignsSection
          counter={18}
          description="PHOTOS POC"
          sectionNumber="05"
          title="ANTICO CAFÉ · Photography"
          subtitle="F&B · ITALIAN CONCEPT ISMAILIA"
          dateRange="2025"
          bgColor="bg-foreground"
          designs={ANTICO_DESIGNS}
          imagePrefix="antiko"
        />
      </ScrollReveal>

      {/* 06 Icon 10 */}
      <ScrollReveal variant="fade-up">
        <CaseStudySection
          counter={19}
          caseLabel="CASE 06"
          title="06 Icon 10"
          logoWidth={150}
          logoHeight={50}
          headline={
            <>
              FIXED THE <span className="text-primary">SPACE</span> BEFORE FIXING
              THE CONTENT.
            </>
          }
          description="A café-PlayStation hybrid that wanted to reposition as a café only, but the floor plan worked against the story. First deliverable wasn't content, it was a renovation plan. Then content followed."
          challenge="Five-year hybrid wanted to be a café. The layout contradicted the ambition."
          insight="Content can't reposition a space that contradicts the story. Fix the space first."
          execution="Strategy rebrand · reels in renovated space · staff EGC · influencer + paid combo."
          resultsLabel="RESULTS"
          results={ICON_METRICS}
          badges={ICON_BADGES}
        />
      </ScrollReveal>

      <ScrollReveal variant="slide-right">
        <ReelsSection
          counter={20}
          description="REELS POC"
          sectionNumber="06"
          title="ICON 10 · REELS"
          subtitle="F&B · CAFÉ REBRAND ISMAILIA"
          subtitleMuted="2025 "
          dateRange="2025"
          reels={ICON_REELS}
        />
      </ScrollReveal>

      {/* 07 Zeed */}
      <ScrollReveal variant="fade-up">
        <CaseStudySection
          counter={21}
          caseLabel="CASE 07"
          title="07 Zeed"
          logo="/images/zed-logo.webp"
          logoAlt="Zeed Logo"
          logoWidth={150}
          logoHeight={50}
          headline={
            <>
              BUILD RELATIONSHIP WITH THE FOUNDER{" "}
              <span className="text-primary">BEFORE</span> SELLING THE PRODUCT.
            </>
          }
          description="A new local fashion brand with basics. Differentiator was a multi-generation family clothing legacy. Founder-led storytelling sold out the full first stock organically, as a pre-orders before the shop went live."
          challenge="No audience, no recognition, basic category identical to 50 other brands without a story."
          insight="Egyptian fashion buyers in this segment buy the founder before the product."
          execution="Founder-led legacy storytelling · process B-roll · then culture-relevant summer launch art direction."
          resultsLabel="RESULTS"
          results={ZEED_METRICS}
          badges={ZEED_BADGES}
        />
      </ScrollReveal>

      <ScrollReveal variant="slide-left">
        <ReelsSection
          counter={23}
          description="REELS POC"
          sectionNumber="07"
          title="ZEEED FASHION · REELS"
          subtitle="FASHION BRAND EGYPT"
          subtitleMuted="2025"
          dateRange="2025"
          reels={ZEED_REELS}
        />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <Brands />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <Footer />
      </ScrollReveal>
    </>
  );
};

export default HomeScreen;
