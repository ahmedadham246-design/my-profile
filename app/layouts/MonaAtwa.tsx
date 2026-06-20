import SectionCounter from "@/app/components/section-counter";
import SectionCounterDescription from "@/app/components/section-counter-descriotion";
import Image from "next/image";
import MonaLogo from "@/public/images/dr-mona-logo.webp";
import { MONA_METRICS, MONA_BADGES } from "@/app/data/MonaAtwaData";
import { Badge } from "@/app/components/Badge";

const COUNTER = 9;
const MonaAtwa = () => {
  return (
    <section className="section bg-black">
      <div className="section-header mb-2">
        <SectionCounterDescription description="CASE 02" start={COUNTER} />
        <SectionCounter start={COUNTER} />
      </div>
      <div className="container mx-auto grid gap-8">
        <div className="flex items-center justify-between border-b border-b-gray-50/20">
          <h3 className="text-primary font-bebas-neue font-semibold text-6xl lg:text-7xl flex-wrap lg:flex-nowrap">
            02 Dr. Mona Atwa
          </h3>
          <Image
            src={MonaLogo}
            alt="Dr. Mona Atwa Logo"
            width={150}
            height={50}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 h-full">
          {/* Content */}
          <div className="flex flex-col justify-between h-full lg:col-span-2 lg:max-w-[85%]">
            <h4 className="text-5xl lg:text-7xl font-black font-bebas-neue ">
              A PERSONAL BRAND BEFORE{" "}
              <span className="text-primary">
                PERSONAL BRANDS WERE A THING.
              </span>
            </h4>
            <p className="text-gray-200 text-lg">
              Positioned a respected dermatologist as the canal region's
              most-trusted name. Five-year retainer, three cities, and a Ramadan
              campaign that booked 2.6M EGP with zero ad spend. With 31M EGP
              cumulative revenue over 5-year.
            </p>

            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 border-t border-gray-50/20 pt-2">
              <li className="flex flex-col gap-2">
                <span className="text-primary">CHALLENGE</span>
                <p className="text-white text-sm">
                  Respected clinic, weak digital presence. Word of mouth, not
                  scroll. Brief: own the canal.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-primary">INSIGHT</span>
                <p className="text-white text-sm">
                  Patients don't choose credentials. They choose the doctor they
                  feel safe with.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-primary">EXECUTION</span>
                <p className="text-white text-sm">
                  Personal-brand strategy before the trend. Educate first, sell
                  second. Consistency as weapon.
                </p>
              </li>
            </ul>
          </div>

          {/* METRICS CARD */}
          <div className="bg-[#161616] px-4 py-6 col-span-1 border border-gray-50/20">
            {/* METRICS CARD HEADER */}
            <div className="border-b border-b-gray-50/20 flex items-center justify-between p-2">
              <h6 className="text-xs text-text-muted">METRICS</h6>
              <span className="text-blue-500">↗</span>
            </div>
            {/* METRICS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
              {MONA_METRICS.map((m) => (
                <div key={m.title}>
                  <div className="flex items-end gap-4">
                    <p className="text-primary font-bebas-neue text-5xl lg:text-6xl font-semibold">
                      {m.title}
                    </p>
                    {m.unit ? (
                      <span className="text-white font-bold text-2xl">
                        {m.unit}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <span className="text-xs">{m.description}</span>
                </div>
              ))}
            </div>
            {/* BADGES */}
            <div className="flex flex-wrap items-center gap-2 mt-2 border-t border-t-gray-50/20 pt-2">
              {MONA_BADGES.map((b) => (
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

export default MonaAtwa;
