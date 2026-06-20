"use client";

import { Eye, PlayIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Platform SVG Icons to ensure 100% compatibility with older lucide-react versions
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const VideoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m22 8-6 4 6 4V8Z" />
    <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
  </svg>
);

const getPlatform = (url: string) => {
  if (url.includes("instagram.com"))
    return {
      name: "Instagram",
      bg: "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
      icon: InstagramIcon,
    };
  if (url.includes("linkedin.com"))
    return {
      name: "LinkedIn",
      bg: "from-[#0077b5] to-[#004182]",
      icon: LinkedinIcon,
    };
  if (url.includes("facebook.com"))
    return {
      name: "Facebook",
      bg: "from-[#1877f2] to-[#0d58c8]",
      icon: FacebookIcon,
    };
  return {
    name: "Video",
    bg: "from-[#161616] via-[#242424] to-[#121212]",
    icon: VideoIcon,
  };
};

const formatViews = (val: number) => {
  if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
  if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
  return val.toString();
};

interface ReelCardProps {
  videoUrl: string;
  count: number;
  views?: number;
  title?: string;
  className?: string;
}

const ReelCard = ({
  videoUrl,
  count,
  views,
  title,
  className,
}: ReelCardProps) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch(`/api/oembed?url=${encodeURIComponent(videoUrl)}`)
      .then((res) => res.json())
      .then((data) => {
        if (active && data.thumbnail) setThumbnail(data.thumbnail);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [videoUrl]);

  const platform = getPlatform(videoUrl);
  const PlatformIcon = platform.icon;

  return (
    <Link
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative h-[480px] md:h-[600px] w-[280px] md:w-[340px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-background-muted transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 select-none snap-start block ${className || ""}`}
    >
      {thumbnail ? (
        <>
          {/* Card Image Background */}
          <img
            src={thumbnail}
            alt={title || "Video thumbnail"}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Elegant Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 z-10" />

          {/* Interactive Info Layers */}
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
            {/* Top row */}
            <div className="flex justify-between items-start">
              <span className="text-xl font-bold font-jet-brains-mono text-white/70">
                {count.toString().padStart(2, "0")}
              </span>
              <span className="px-2.5 py-1 text-[10px]  tracking-wider rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5 shadow-sm uppercase font-jet-brains-mono font-bold">
                <PlatformIcon className="size-3" />
                {platform.name}
              </span>
            </div>

            {/* Bottom info */}
            <div className="flex flex-col gap-2">
              <h5 className="text-xl md:text-2xl font-bebas-neue font-medium tracking-wider text-white leading-tight line-clamp-2 uppercase">
                {title || "Khazna Reels"}
              </h5>

              {views != null && views > 0 && (
                <span className="flex items-center gap-1.5 text-xs font-jet-brains-mono text-text-muted">
                  <Eye className="size-3.5 text-text-muted" />
                  {formatViews(views)} VIEWS
                </span>
              )}
            </div>
          </div>
        </>
      ) : (
        /* Gorgeous Fallback Gradient Card when oembed thumbnail isn't found */
        <div
          className={`relative w-full h-full bg-gradient-to-br ${platform.bg} flex flex-col justify-between p-6 transition-all duration-500 overflow-hidden`}
        >
          {/* Subdued watermarked platform icon in background */}
          <div className="absolute -right-10 -bottom-10 opacity-[0.08] pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-12">
            <PlatformIcon className="size-60" />
          </div>

          {/* Top Row */}
          <div className="flex justify-between items-start z-10">
            <span className="text-xl font-bold font-jet-brains-mono text-white/50">
              {count.toString().padStart(2, "0")}
            </span>
            <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-full bg-white/15 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5 shadow-sm uppercase font-jet-brains-mono font-bold">
              <PlatformIcon className="size-3" />
              {platform.name}
            </span>
          </div>

          {/* Bottom Row */}
          <div className="mt-auto z-10 flex flex-col gap-2">
            <h5 className="text-xl md:text-2xl font-bebas-neue font-medium tracking-wider text-white leading-tight line-clamp-2 uppercase">
              {title || "Khazna Reels"}
            </h5>

            {views != null && views > 0 && (
              <span className="flex items-center gap-1.5 text-xs font-jet-brains-mono text-white/60">
                <Eye className="size-3.5 text-white/60" />
                {formatViews(views)} VIEWS
              </span>
            )}
          </div>
        </div>
      )}

      {/* Global Premium Centered Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <div className="size-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-black group-hover:border-primary">
          <PlayIcon className="size-6 fill-current translate-x-[2px]" />
        </div>
      </div>
    </Link>
  );
};

export default ReelCard;
