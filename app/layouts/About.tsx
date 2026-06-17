import SectionCounter from "../components/section-counter";
import SectionCounterDescription from "../components/section-counter-descriotion";

const SECTION_NUMBER = 2;

const About = () => {
  return (
    <div className="h-screen container mx-auto">
      {/* HEader  */}
      <div className="flex items-center justify-between">
        <SectionCounterDescription description="ABOUT" start={SECTION_NUMBER} />
        <SectionCounter start={SECTION_NUMBER} />
      </div>
    </div>
  );
};

export default About;
