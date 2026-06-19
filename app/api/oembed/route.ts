import { NextRequest, NextResponse } from "next/server";

const OEMBED_ENDPOINTS: Record<string, string> = {
  tiktok: "https://www.tiktok.com/oembed",
  youtube: "https://www.youtube.com/oembed",
  instagram: "https://www.instagram.com/oembed",
};

function detectPlatform(url: string): string | null {
  if (url.includes("tiktok.com")) return "tiktok";
  if (url.includes("youtube.com") || url.includes("youtu.be")) return "youtube";
  if (url.includes("instagram.com")) return "instagram";
  return null;
}

export async function GET(req: NextRequest) {
  const videoUrl = req.nextUrl.searchParams.get("url");
  if (!videoUrl) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  const platform = detectPlatform(videoUrl);
  if (!platform) {
    return NextResponse.json({ error: "Unsupported platform" }, { status: 400 });
  }

  const oembedUrl = `${OEMBED_ENDPOINTS[platform]}?url=${encodeURIComponent(videoUrl)}`;

  try {
    const res = await fetch(oembedUrl, { next: { revalidate: 86400 } });
    const data = await res.json();

    return NextResponse.json({
      thumbnail: data.thumbnail_url,
      title: data.title,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch thumbnail" }, { status: 500 });
  }
}
