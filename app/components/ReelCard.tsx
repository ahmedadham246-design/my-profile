"use client";

import { Eye, PlayIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ReelCardProps {
  videoUrl: string;
  seenCount: number;
  className?: string;
}

const ReelCard = ({ seenCount, videoUrl }: ReelCardProps) => {
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
