import Image from "next/image";
import SectionCounter from "../components/section-counter";

const Header = () => {
  return (
    <div className="h-screen w-screen py-8 md:py-12 container mx-auto overflow-x-hidden border-l-primary border-l-12 px-6 md:px-8">
      {/* Header Section For Counter and Logo */}
      <div className="flex items-center justify-between">
        <h4 className="flex gap-1 text-white ">
          <span className="size-2 bg-primary inline-block mt-0.5 rounded-full" />
          AHMED ADHAM · PORTFOLIO 2026
        </h4>
        <SectionCounter start={1} />
      </div>

      {/* ====================== MAIN CONTENT ====================== */}
      <div className="mt-14 md:mt-18  w-full relative grid grid-cols-3  ">
        {/* Left Content  */}
        <div className="col-span-2 ">
          <h3 className="text-primary font-jet-brains-mono text-lg mb-8 md:mb-12">
            CONTENT TEAM LEAD · CREATIVE STRATEGIST
          </h3>

          <h1 className="text-white text-8xl md:text-[12rem] leading-none font-bebas-neue  ">
            AHMED <br /> ADHAM
            <span className="inline-block size-6 bg-primary" />
          </h1>

          <p className="mt-10  font-dm-sans text-xl md:text-2xl  text-muted">
            I don't make content.{" "}
            <span className="text-primary">
              I craft brands people talk about
            </span>{" "}
            , and numbers worth remembering. Founder & CEO at KKA — 6+ years
            across fintech, F&B, healthcare, fashion and sports.
          </p>
          <hr className="h-px border-0 bg-white/20 w-full my-12 " />
        </div>
        {/* Right Content Image  */}
        <div className="absolute -right-64 lg:w-[67%] h-full">
          <Image
            src={"/images/header.png"}
            alt={"Ahmed Adham"}
            fill
            className="object-contain absolute right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
