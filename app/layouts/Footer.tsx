import Link from "next/link";
import SectionCounter from "../components/section-counter";
import SectionCounterDescription from "../components/section-counter-descriotion";
import { CONTACT_INFO } from "../data/Contact_Info";

const COUNTER = 25;

const Footer = () => {
  return (
    <footer className="section bg-footer  ">
      <div className="section-header mb-8">
        <SectionCounterDescription
          description="CONTACT"
          start={COUNTER}
          className="text-black"
        />
        <SectionCounter start={COUNTER} className="text-black" />
      </div>

      <div className="container mx-auto grid gap-5">
        <h2 className="text-black text-6xl lg:text-9xl font-black font-bebas-neue  max-w-5xl ">
          READY TO CRAFT SOMETHING PEOPLE TALK ABOUT?
        </h2>
        <p className="text-black font-jet-brains-mono text-lg font-bold">
          "EVERY BRAND HAS A STORY. AND I’M HERE TO TELL IT.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-b-black/20 ">
          {CONTACT_INFO.map((v, index) => (
            <Link
              href={v.href}
              key={v.value}
              className={`flex flex-col gap-1 text-black font-bebas-neue text-xl  ${index !== 0 ? "px-2 border-l border-black/20" : ""}`}
              target="_blank"
            >
              <span>{v.title}</span>
              {v.value}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
