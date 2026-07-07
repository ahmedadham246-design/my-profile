import SectionCounter from "../components/section-counter";
import SectionCounterDescription from "../components/section-counter-descriotion";
import { BRAND_CATEGORIES } from "../data/BrandsData";

const COUNTER = 24;

const Brands = () => {
  const getSpanClass = (category: string) => {
    if (category === "F&B") return "lg:col-span-2";
    if (category === "OTHER") return "lg:col-span-3";
    return "lg:col-span-1";
  };

  const renderList = (brands: string[], category: string) => {
    return (
      <ul className="flex-1 min-w-[150px]">
        {brands.map((brand, index) => (
          <li
            className="font-dm-sans font-bold text-[13px] text-[#111111] uppercase py-2.5 border-b border-black/10 last:border-b-0"
            key={`${category}-${brand}-${index}`}
          >
            {brand}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section id="brands" className="section bg-foreground py-24 px-6 md:px-12 lg:px-24">
      <div className="section-header mb-16">
        <SectionCounterDescription
          description="BRANDS & INDUSTRIES"
          start={COUNTER}
        />
        <SectionCounter start={COUNTER} />
      </div>
      <div className="container mx-auto">
        <div className="flex items-start justify-between flex-wrap mb-16 gap-4">
          <h1 className="text-6xl md:text-8xl font-black font-bebas-neue leading-none text-black uppercase tracking-tight">
            40+ BRANDS ACROSS <br /> 8+ INDUSTRIES
          </h1>
          <p className="text-gray-400 font-jet-brains-mono tracking-widest text-sm mt-2">MENA-WIDE</p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {BRAND_CATEGORIES.map((b) => {
            const isTwoCol = b.category === "F&B" || b.category === "OTHER";
            const splitIndex = b.category === "OTHER" ? 6 : Math.ceil(b.brands.length / 2);
            const col1 = b.brands.slice(0, splitIndex);
            const col2 = b.brands.slice(splitIndex);

            return (
              <div
                key={b.category}
                className={`${getSpanClass(b.category)} bg-[#e8e6e2] rounded-lg p-6 flex flex-col justify-start`}
              >
                <div className="mb-6">
                  <span className="inline-block bg-primary text-black font-jet-brains-mono text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                    {b.category}
                  </span>
                </div>
                {isTwoCol ? (
                  <div className="flex flex-col sm:flex-row gap-x-12 gap-y-4">
                    {renderList(col1, b.category)}
                    {renderList(col2, b.category)}
                  </div>
                ) : (
                  renderList(b.brands, b.category)
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
