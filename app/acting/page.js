import ActingContent from "./ActingContent";

// Default (Icelandic) title; the client updates it when the language changes.
export const metadata = {
  title: "Leiklist — Pálmi Þór K.",
  description: "Acting — selected screen work, headshots and showreel material.",
};

export default function ActingPage() {
  return <ActingContent />;
}
