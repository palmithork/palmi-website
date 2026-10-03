import PodcastContent from "./PodcastContent";

// Default (Icelandic) title; the client updates it when the language changes.
export const metadata = {
  title: "Hlaðvarp — Pálmi Þór K.",
  description:
    "Leiðin að karlmennsku — a podcast about character, confidence, relationships, boundaries, communication and personal development.",
};

export default function PodcastPage() {
  return <PodcastContent />;
}
