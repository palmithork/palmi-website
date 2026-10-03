import PersonalGrowthContent from "./PersonalGrowthContent";

// Default (Icelandic) title; the client updates it when the language changes.
export const metadata = {
  title: "Sjálfsrækt — Pálmi Þór K.",
  description:
    "Practical personal development for men — character, boundaries, communication, confidence and presence.",
};

export default function PersonalGrowthPage() {
  return <PersonalGrowthContent />;
}
