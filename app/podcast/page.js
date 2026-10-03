import PodcastContent from "./PodcastContent";
import { getLatestEpisode } from "./latestEpisode";

// Default (Icelandic) title; the client updates it when the language changes.
export const metadata = {
  title: "Hlaðvarp — Pálmi Þór K.",
  description:
    "Leiðin að karlmennsku — a podcast about character, confidence, relationships, boundaries, communication and personal development.",
};

// Re-check YouTube for a new episode at most once an hour (must be a literal for Next.js).
export const revalidate = 3600;

export default async function PodcastPage() {
  const latest = await getLatestEpisode();
  return <PodcastContent latest={latest} />;
}
