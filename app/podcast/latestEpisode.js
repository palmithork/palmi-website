// Server-side: finds the newest full episode on the podcast's YouTube channel via its public RSS feed.
// No API key needed. Resolved from https://www.youtube.com/@Lei%C3%B0ina%C3%B0karlmennsku
const CHANNEL_ID = "UCl-sCnr4K0niyuu3dAGou9Q";

// "UULF…" is the channel's long-form uploads playlist (excludes Shorts).
// The plain channel feed is a fallback; Shorts are filtered out of it below.
const FEEDS = [
  `https://www.youtube.com/feeds/videos.xml?playlist_id=UULF${CHANNEL_ID.slice(2)}`,
  `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
];

// How often (seconds) to check YouTube for a new episode.
export const REVALIDATE_SECONDS = 3600;

function decodeXml(text) {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&amp;/g, "&");
}

function tag(entry, name) {
  const match = entry.match(new RegExp(`<${name}>([^<]*)</${name}>`));
  return match ? decodeXml(match[1].trim()) : null;
}

function parseNewestEpisode(xml) {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];

  for (const entry of entries) {
    const link = entry.match(/<link rel="alternate" href="([^"]+)"/)?.[1] || "";
    if (link.includes("/shorts/")) continue;

    const id = tag(entry, "yt:videoId");
    const title = tag(entry, "title");
    if (!id || !title) continue;

    return {
      id,
      title,
      published: tag(entry, "published"),
      url: `https://www.youtube.com/watch?v=${id}`,
    };
  }

  return null;
}

// Returns { id, title, published, url } or null if YouTube can't be reached.
export async function getLatestEpisode() {
  for (const feed of FEEDS) {
    try {
      const response = await fetch(feed, { next: { revalidate: REVALIDATE_SECONDS } });
      if (!response.ok) continue;

      const episode = parseNewestEpisode(await response.text());
      if (episode) return episode;
    } catch {
      // Network error — try the next feed, then fall back to the placeholder.
    }
  }

  return null;
}
