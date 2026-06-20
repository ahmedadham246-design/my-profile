import Image from "next/image";
import Link from "next/link";

interface IDesignCard {
  count?: number;
  img: string;
  link: string;
}

const DesignCard = ({ count, img, link }: IDesignCard) => {
  const counter = count?.toString().padStart(2, "0");

  return (
    <div className="flex gap-3 h-full">
      {/* Number Badge */}
      <span className="h-fit p-1 rounded-md font-bold text-xs text-black bg-white font-jet-brains-mono">
        {counter}
      </span>
      <div className="group cursor-pointer flex flex-col flex-1 min-w-0">
        <div className="relative flex-1 h-[400px] overflow-hidden bg-gray-50">
          <Image
            src={img}
            alt={`${img}-${count}`}
            width={600}
            height={600}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Link Label */}
        <div className="mt-4 text-center">
          <Link
            href={link}
            className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-blue-600 hover:text-blue-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
