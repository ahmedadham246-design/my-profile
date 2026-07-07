import { ReactNode } from "react";
import Image from "next/image";
import SectionCounter from "@/app/components/section-counter";
import SectionCounterDescription from "@/app/components/section-counter-descriotion";
import { Badge } from "@/app/components/Badge";
import { AnimatedNumberText } from "./numberFlow";

interface CaseStudySectionProps {
  counter: number;
  caseLabel: string;
  title: string;
  logo?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  headline: ReactNode;
  description: string;
  challenge: string;
  insight: string;
  execution: string;
  resultsLabel: string;
  results: { title: string; unit?: string; description: string }[];
  badges: string[];
  pageLink?: string;
}

const CaseStudySection = ({
  counter,
  caseLabel,
  title,
  logo,
  logoAlt,
  logoWidth,
  logoHeight,
  headline,
  description,
  challenge,
  insight,
  execution,
  resultsLabel,
  results,
  badges,
  pageLink,
}: CaseStudySectionProps) => {
  return (
    <section className="section bg-black ">
      <div className="section-header mb-8">
        <SectionCounterDescription description={caseLabel} start={counter} />
        <SectionCounter start={counter} />
      </div>
      <div className="container mx-auto grid gap-8 ">
        <div className="flex items-center justify-between border-b border-b-gray-50/20">
          <h3 className="text-primary font-bebas-neue font-semibold text-6xl lg:text-7xl flex-wrap lg:flex-nowrap">
            {title}
          </h3>
          {logo && (
            pageLink ? (
              <a href={pageLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image
                  src={logo}
                  alt={logoAlt || ""}
                  width={logoWidth || 150}
                  height={logoHeight || 50}
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
            ) : (
              <Image
                src={logo}
                alt={logoAlt || ""}
                width={logoWidth || 150}
                height={logoHeight || 50}
                style={{ width: "auto", height: "auto" }}
              />
            )
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 h-full ">
          <div className="flex flex-col justify-between h-full lg:col-span-2 lg:max-w-[85%]">
            <h4 className="text-5xl lg:text-7xl font-black font-bebas-neue">
              {headline}
            </h4>
            <p className="text-gray-200 text-lg">{description}</p>

            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 border-t border-gray-50/20 pt-2 ">
              <li className="flex flex-col gap-2">
                <span className="text-primary">CHALLENGE</span>
                <p className="text-white text-sm">{challenge}</p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-primary">INSIGHT</span>
                <p className="text-white text-sm">{insight}</p>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-primary">EXECUTION</span>
                <p className="text-white text-sm">{execution}</p>
              </li>
            </ul>
          </div>

          {pageLink ? (
            <a
              href={pageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#161616] px-4 py-6 col-span-1 border border-gray-50/20 hover:border-primary/50 transition-colors block"
            >
              <div className="border-b border-b-gray-50/20 flex items-center justify-between p-2">
                <h6 className="text-xs text-text-muted ">{resultsLabel}</h6>
                <span className="text-blue-500">↗</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                {results.map((r) => (
                  <div key={r.title}>
                    <div className="flex items-end gap-4">
                      <p className="text-primary font-bebas-neue text-5xl lg:text-6xl font-semibold flex items-baseline">
                        <AnimatedNumberText text={r.title} />
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
              <div className="flex flex-wrap items-center gap-2 mt-2 border-t border-t-gray-50/20 pt-2">
                {badges.map((b) => (
                  <Badge key={b} className="rounded-xl">
                    {b}
                  </Badge>
                ))}
              </div>
            </a>
          ) : (
            <div className="bg-[#161616] px-4 py-6 col-span-1 border border-gray-50/20 ">
              <div className="border-b border-b-gray-50/20 flex items-center justify-between p-2">
                <h6 className="text-xs text-text-muted ">{resultsLabel}</h6>
                <span className="text-blue-500">↗</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                {results.map((r) => (
                  <div key={r.title}>
                    <div className="flex items-end gap-4">
                      <p className="text-primary font-bebas-neue text-5xl lg:text-6xl font-semibold flex items-baseline">
                        <AnimatedNumberText text={r.title} />
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
              <div className="flex flex-wrap items-center gap-2 mt-2 border-t border-t-gray-50/20 pt-2">
                {badges.map((b) => (
                  <Badge key={b} className="rounded-xl">
                    {b}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
