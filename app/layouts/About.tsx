import Image from "next/image";
import SectionCounter from "../components/section-counter";
import SectionCounterDescription from "../components/section-counter-descriotion";
import { ABOUT_BADGES } from "../data/About";

const SECTION_NUMBER = 2;

const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="border-[0.5px] border-foreground/30 rounded-md px-2 py-1 text-xs cursor-pointer transition-all hover:bg-primary hover:text-black  hover:scale-105 duration-200 hover:shadow-md">
      {children}
    </span>
  );
};

const About = () => {
  return (
    <section className="section container mx-auto mt-10 ">
      {/* HEader  */}
      <div className="flex items-center justify-between mb-8 lg:mb-12">
        <SectionCounterDescription description="ABOUT" start={SECTION_NUMBER} />
        <SectionCounter start={SECTION_NUMBER} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 ">
        <div className="relative h-full order-2 lg:order-2 ">
          <Image
            src={"/images/about.png"}
            alt="ahmed adham"
            priority={true}
            loading="eager"
            fetchPriority="high"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-10 order-1 lg:order-2">
          <h2 className="text-4xl lg:text-8xl font-bebas-neue tracking-wider font-bold">
            WHO I AM.
          </h2>
          <p className="about-text">
            With tea on the desk, a pen in my hand. I started marketing with
            writing short stories but the habit of turning a feeling into a
            sentence{" "}
            <span className="text-primary">that makes someone stop</span> became
            my entire professional edge.
          </p>

          <p className="about-text">
            After university I discovered advertising. I wanted to write
            campaigns you remember years later and direct shots that make you
            feel something. First internship, first ad written, first client who
            called back because the work moved their numbers.
          </p>

          <p className="about-text">
            Six years. Seven stations. One agency I built myself. Worked in
            fintech, F&B, healthcare, fashion, sports, ERP, furniture,
            education. The through-line: tight budgets, tighter deadlines, and a
            story that moves people
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {ABOUT_BADGES.map((b) => (
              <Badge key={b}>{b}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
