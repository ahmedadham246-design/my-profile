interface AboutCardProps {
  mainLetter: string;
  title: string;
  description: string;
  step: number;
  highlighted?: boolean;
}

const AboutCard = ({
  title,
  description,
  mainLetter,
  step,
  highlighted = false,
}: AboutCardProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-jet-brains-mono">
        Step {String(step).padStart(2, "0")}
      </span>

      <div
        className={`h-full border-[0.5px] p-6 flex flex-col justify-between gap-4 ${highlighted ? "bg-primary border-primary" : "border-text-muted "}`}
      >
        <h2 className="font-bebas-neue text-[8rem] lg:text-[12rem]  leading-none font-black text-black pt-6">
          {mainLetter}
        </h2>

        <div>
          <h3 className="font-bold text-2xl lg:text-3xl text-black uppercase mb-2">
            {title}
          </h3>

          <p
            className={`text-xs lg:text-sm leading-relaxed self-baseline ${
              highlighted ? "font-bold text-black" : "text-gray-700"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
