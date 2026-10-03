import VideoContent from "./VideoContent";

// Default (Icelandic) title; the client updates it when the language changes.
export const metadata = {
  title: "Myndbönd — Pálmi Þór K.",
  description:
    "Video content for businesses — social media, ongoing content, events and drone footage.",
};

export default function VideoPage() {
  return <VideoContent />;
}
