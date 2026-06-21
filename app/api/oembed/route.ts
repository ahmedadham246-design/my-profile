import { NextRequest, NextResponse } from "next/server";

const OEMBED_ENDPOINTS: Record<string, string> = {
  tiktok: "https://www.tiktok.com/oembed",
  youtube: "https://www.youtube.com/oembed",
  instagram: "https://www.instagram.com/oembed",
  facebook: "https://www.facebook.com/oembed",
  linkedin: "https://www.linkedin.com/oembed",
};

function detectPlatform(url: string): string | null {
  if (url.includes("tiktok.com")) return "tiktok";
  if (url.includes("youtube.com") || url.includes("youtu.be")) return "youtube";
  if (url.includes("instagram.com")) return "instagram";
  if (url.includes("facebook.com")) return "facebook";
  if (url.includes("linkedin.com")) return "linkedin";
  return null;
}

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

async function getFacebookThumbnail(url: string): Promise<string | null> {
  try {
    const cleanUrl = url.split("?")[0];
    const res = await fetch(cleanUrl, {
      headers: {
        "User-Agent": "facebookexternalhit/1.1",
        Accept: "text/html",
      },
      next: { revalidate: 86400 },
    });
    const html = await res.text();
    const patterns = [
      /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i,
      /<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i,
      /<meta[^>]*property=["']og:image:secure_url["'][^>]*content=["']([^"']+)["']/i,
      /<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image:secure_url["']/i,
    ];
    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match?.[1]) return decodeHtmlEntities(match[1]);
    }
    return null;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const videoUrl = req.nextUrl.searchParams.get("url");
  if (!videoUrl) {
    return NextResponse.json(
      { error: "Missing url parameter" },
      { status: 400 },
    );
  }

  const platform = detectPlatform(videoUrl);
  if (!platform) {
    return NextResponse.json(
      { error: "Unsupported platform" },
      { status: 400 },
    );
  }

  try {
    if (platform === "facebook") {
      const rawThumbnail = await getFacebookThumbnail(videoUrl);
      if (rawThumbnail) {
        return NextResponse.json({
          thumbnail: `/api/image-proxy?url=${encodeURIComponent(rawThumbnail)}`,
        });
      }
      return NextResponse.json({});
    }

    const oembedUrl = `${OEMBED_ENDPOINTS[platform]}?url=${encodeURIComponent(videoUrl)}`;
    const res = await fetch(oembedUrl, { next: { revalidate: 86400 } });
    const data = await res.json();

    if (data.thumbnail_url) {
      return NextResponse.json({
        thumbnail: data.thumbnail_url,
        title: data.title,
      });
    }
    return NextResponse.json({});
  } catch {
    return NextResponse.json({});
  }
}
