import SectionCounter from "@/app/components/section-counter";
import SectionCounterDescription from "@/app/components/section-counter-descriotion";
import Image from "next/image";
import KhaznaLogo from "@/public/images/khazna.png";
import { RESULTS, RESULTS_BADGE } from "@/app/data/KhaznaData";
import { Badge } from "@/app/components/Badge";
const COUNTER = 6;
const KhaznaApp = () => {
  return (
    <section className="section bg-black">
      <div className="section-header mb-8">
        <SectionCounterDescription description="CASE 01" start={6} />
        <SectionCounter start={6} />
      </div>
      <div className="container mx-auto  grid gap-8">
        <div className="flex items-center justify-between border-b border-b-gray-50/20">
          <h3 className="text-primary font-bebas-neue font-semibold text-6xl lg:text-7xl flex-wrap lg:flex-nowrap">
            01 Khazna App
          </h3>
          <Image src={KhaznaLogo} alt="Khazna Logo" width={250} height={150} style={{ width: "auto", height: "auto" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 h-full ">
          {/* Content */}
          <div className="flex flex-col justify-between h-full lg:col-span-2 lg:max-w-[85%]">
            <h4 className=" text-5xl  lg:text-7xl font-black font-bebas-neue">
              EGYPT'S EMBEDDED FINANCE{" "}
              <span className="text-primary">FLAGSHIP</span> SCALED ACROSS TWO
              MARKETS.
            </h4>
            <p className="text-gray-200 text-lg">
              Built the full content engine from scratch (voice guide, CRM
              library, UX copy, campaigns, and the Saudi Arabia launch) for one
              of Egypt's largest fintech apps. Bilingual, compliant, and human
              enough that people stopped flinching at finance.
            </p>

            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 border-t border-gray-50/20 pt-2 ">
              <li className="flex flex-col gap-2">
                <span className="text-primary">CHALLENGE</span>
                <p className="text-white text-sm">
                  Small team. Fast scale. Every piece of copy bilingual,
                  on-brand, compliant across two markets.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-primary">INSIGHT</span>
                <p className="text-white text-sm">
                  Fintech in Egypt carries stigma. Humanize through content that
                  educates, entertains, simplifies.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-primary">EXECUTION</span>
                <p className="text-white text-sm">
                  Countless strategies, Voice guide, 2,000-message CRM library,
                  app's first-edition UX copy, full KSA launch strategy.
                </p>
              </li>
            </ul>
          </div>

          {/* RESULTS CARD */}
          <div className="bg-[#161616] px-4 py-6 col-span-1 border border-gray-50/20 ">
            {/* RESULTS CARD HEADER */}
            <div className="border-b border-b-gray-50/20 flex items-center justify-between p-2">
              <h6 className="text-xs text-text-muted ">RESULTS</h6>
              <span className="text-blue-500">↗</span>
            </div>
            {/* RESULTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
              {RESULTS.map((r) => (
                <div key={r.title}>
                  <div className="flex items-end gap-4">
                    <p className="text-primary font-bebas-neue text-5xl lg:text-6xl font-semibold">
                      {r.title}
                    </p>
                    {r.unit ? (
                      <span className="text-white font-bold text-2xl">
                        {r.unit}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <span className="text-xs">{r.description}</span>
                </div>
              ))}
            </div>
            {/* BADGES */}
            <div className="flex flex-wrap items-center gap-2 mt-2 border-t border-t-gray-50/20 pt-2">
              {RESULTS_BADGE.map((b) => (
                <Badge key={b} className="rounded-xl">
                  {b}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KhaznaApp;
