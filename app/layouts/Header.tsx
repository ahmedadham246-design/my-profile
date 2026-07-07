import Image from "next/image";
import SectionCounter from "../components/section-counter";
import RevealOnLoad from "../components/RevealOnLoad";
import { AnimatedNumberText } from "../components/numberFlow";

const Header = () => {
  return (
    <header
      id="header"
      className="h-full w-full py-8 md:py-12 border-l-primary border-l-12 px-6 md:px-8"
    >
      {/* Header Section For Counter and Logo */}
      <RevealOnLoad delay={0}>
        <div className="flex items-center justify-between">
          <h4 className="flex gap-1 text-white ">
            <span className="size-2 bg-primary inline-block mt-0.5 rounded-full" />
            AHMED ADHAM · PORTFOLIO 2026
          </h4>
          <SectionCounter start={1} />
        </div>
      </RevealOnLoad>

      {/* ====================== MAIN CONTENT ====================== */}
      <div className="mt-8 md:mt-18  w-full relative grid grid-cols-1  md:grid-cols-3">
        {/* Left Content  */}
        <div className="col-span-1 md:col-span-2 md:static z-20">
          <RevealOnLoad delay={0.1}>
            <h3 className="text-primary font-jet-brains-mono text-lg mb-8 md:mb-12">
              CONTENT TEAM LEAD · CREATIVE STRATEGIST
            </h3>
          </RevealOnLoad>

          <RevealOnLoad delay={0.25}>
            <h1 className="text-white text-8xl md:text-[14rem] leading-none font-bebas-neue  font-black ">
              AHMED <br /> ADHAM
              <span className="inline-block size-6 bg-primary" />
            </h1>
          </RevealOnLoad>

          <RevealOnLoad delay={0.45}>
            <p className=" mt-8 md:mt-10 font-dm-sans text-xl md:text-2xl  text-muted lg:max-w-[90%]">
              I don&apos;t make content.{" "}
              <span className="text-primary">
                I craft brands people talk about
              </span>{" "}
              , and numbers worth remembering. Founder &amp; CEO at KKA — 6+
              years across fintech, F&amp;B, healthcare, fashion and sports.
            </p>
          </RevealOnLoad>

          <RevealOnLoad delay={0.55}>
            <hr className="h-px border-0 bg-white/20 w-full mt-12  mb-4" />

            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="header-statistics">
                <p>USERS REACHED ACROSS BRANDS</p>
                <AnimatedNumberText
                  text="50M+"
                  className="text-primary text-4xl font-bold font-jet-brains-mono"
                />
              </div>
              <div className="header-statistics">
                <p>CLIENT SALES DRIVEN WITH ONE CLIENT</p>
                <AnimatedNumberText
                  text="31M EGP"
                  className="text-primary text-4xl font-bold font-jet-brains-mono"
                />
              </div>
              <div className="header-statistics">
                <p>BRANDS BUILT & MANAGED</p>
                <AnimatedNumberText
                  text="40+"
                  className="text-primary text-4xl font-bold font-jet-brains-mono"
                />
              </div>
            </div>
          </RevealOnLoad>
        </div>
        {/* Right Content Image  */}
        <RevealOnLoad
          delay={0.3}
          className="w-full md:absolute md:-right-24 md:-top-16 md:w-[48%] md:h-full lg:absolute lg:-right-90 lg:-top-30 lg:h-full lg:w-[67%] z-10"
        >
          <Image
            src={"/images/header.webp"}
            alt={"Ahmed Adham"}
            width={800}
            height={1200}
            priority={true}
            loading="eager"
            className="w-full h-auto object-contain"
          />
        </RevealOnLoad>
      </div>
    </header>
  );
};

export default Header;
