import Image from "next/image";
import SectionCounter from "../components/section-counter";

const Header = () => {
  return (
    <div className="h-full w-full py-8 md:py-12 border-l-primary border-l-12 px-6 md:px-8">
      {/* Header Section For Counter and Logo */}
      <div className="flex items-center justify-between">
        <h4 className="flex gap-1 text-white ">
          <span className="size-2 bg-primary inline-block mt-0.5 rounded-full" />
          AHMED ADHAM · PORTFOLIO 2026
        </h4>
        <SectionCounter start={1} />
      </div>

      {/* ====================== MAIN CONTENT ====================== */}
      <div className="mt-8 md:mt-18  w-full relative grid grid-cols-1  md:grid-cols-3">
        {/* Left Content  */}
        <div className="col-span-1 md:col-span-2 md:static md:z-10">
          <h3 className="text-primary font-jet-brains-mono text-lg mb-8 md:mb-12">
            CONTENT TEAM LEAD · CREATIVE STRATEGIST
          </h3>

          <h1 className="text-white text-8xl md:text-[14rem] leading-none font-bebas-neue  font-black ">
            AHMED <br /> ADHAM
            <span className="inline-block size-6 bg-primary" />
          </h1>

          <p className=" mt-8 md:mt-10 font-dm-sans text-xl md:text-2xl  text-muted lg:max-w-[90%]">
            I don't make content.{" "}
            <span className="text-primary">
              I craft brands people talk about
            </span>{" "}
            , and numbers worth remembering. Founder & CEO at KKA — 6+ years
            across fintech, F&B, healthcare, fashion and sports.
          </p>
          <hr className="h-px border-0 bg-white/20 w-full mt-12  mb-4" />

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="header-statistics">
              <p>USERS REACHED ACROSS BRANDS</p>
              <span>50M+</span>
            </div>
            <div className="header-statistics">
              <p>CLIENT SALES DRIVEN WITH ONE CLIENT</p>
              <span>31M EGP</span>
            </div>
            <div className="header-statistics">
              <p>BRANDS BUILT & MANAGED</p>
              <span>40+</span>
            </div>
          </div>
        </div>
        {/* Right Content Image  */}
        <div className="w-full lg:absolute lg:-right-90 lg:-top-30 lg:h-full lg:w-[67%] z-10">
          <Image
            src={"/images/header.png"}
            alt={"Ahmed Adham"}
            width={800}
            height={1200}
            priority={true}
            loading="eager"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
