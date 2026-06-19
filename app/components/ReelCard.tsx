"use client";

import { Eye, PlayIcon, ExternalLink } from "lucide-react";
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
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative h-[600px] w-[350px] overflow-hidden rounded-2xl border border-primary block ${""}`}
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

      <PlayIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 text-white/90 drop-shadow-lg" />

      <div className="absolute bottom-0 left-0 w-full bg-black/50 p-3 text-white rounded-b-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye size={14} /> <span>{seenCount} views</span>
          </div>
          <ExternalLink size={14} className="text-white/80" />
        </div>
      </div>
    </a>
  );
};

export default ReelCard;
