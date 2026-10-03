import AboutContent from "./AboutContent";

// Default (Icelandic) title; the client updates it when the language changes.
export const metadata = {
  title: "Um mig — Pálmi Þór K.",
  description:
    "About Pálmi Þór Kristinsson — the different directions he has taken, what he is building and why.",
};

export default function AboutPage() {
  return <AboutContent />;
}
