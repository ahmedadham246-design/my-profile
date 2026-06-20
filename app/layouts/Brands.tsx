import SectionCounter from "../components/section-counter";
import SectionCounterDescription from "../components/section-counter-descriotion";
import { BRAND_CATEGORIES } from "../data/BrandsData";

const COUNTER = 24;
const Brands = () => {
  return (
    <section id="brands" className="section bg-foreground">
      <div className="section-header mb-10">
        <SectionCounterDescription
          description="BRANDS & INDUSTRIES"
          start={COUNTER}
        />
        <SectionCounter start={COUNTER} />
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between flex-wrap">
          <h5 className="text-8xl text-black font-bebas-neue font-black">
            40+ BRANDS Across <br /> 8+ Industries
          </h5>
          <p className="text-gray-400 font-jet-brains-mono">MENA-WIDE</p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10">
          {BRAND_CATEGORIES.map((b) => {
            return (
              <div key={b.category} className="bg-white rounded-md p-4">
                <h3 className="font-bebas-neue font-bold text-xl text-black">
                  {b.category}
                </h3>
                <ul className="mt-5">
                  {b.brands.map((brand, index) => {
                    return (
                      <li
                        className={`font-jet-brains-mono text-gray-500 text-sm my-2 ${index < b.brands.length - 1 ? "border-b border-gray-700" : ""}`}
                        key={`${b.category}-${index}`}
                      >
                        {brand}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
