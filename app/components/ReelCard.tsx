"use client";

import { Eye, PlayIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ReelCardProps {
  videoUrl: string;
  count: number;
  views?: number;
  className?: string;
}

const ReelCard = ({ videoUrl, count, views }: ReelCardProps) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/oembed?url=${encodeURIComponent(videoUrl)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.thumbnail) setThumbnail(data.thumbnail);
      })
      .catch(() => {});
  }, [videoUrl]);

  return (
    <Link
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative h-[600px] w-[350px] overflow-hidden rounded-2xl  block ${""}`}
    >
      {count && (
        <span className="absolute top-4 left-4 text-sm text-text-muted">
          {count.toLocaleString().padStart(2, "0")}
        </span>
      )}
      {views != null && views > 0 && (
        <span className="absolute top-4 right-4 flex items-center gap-1 text-sm text-text-muted">
          <Eye className="size-3.5" />
          {views >= 1000000
            ? `${(views / 1000000).toFixed(1)}M`
            : views >= 1000
              ? `${(views / 1000).toFixed(1)}K`
              : views.toString()}
        </span>
      )}
      {thumbnail ? (
        <img
          src={thumbnail}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full bg-muted">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="size-16 rounded-full bg-muted-foreground/20" />
            <div className="h-3 w-24 rounded bg-muted-foreground/20" />
          </div>
        </div>
      )}

      <button className="size-14 flex flex-col items-center justify-center bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md">
        <PlayIcon
          fill={"oklch(62.3% 0.214 259.815) "}
          className=" size-6 text-blue-500 drop-shadow-lg"
        />
        <span className="w-4 bg-blue-500 h-px" />
      </button>
    </Link>
  );
};

export default ReelCard;
