import ContactContent from "./ContactContent";

// Default (Icelandic) title; the client updates it when the language changes.
export const metadata = {
  title: "Hafa samband — Pálmi Þór K.",
  description: "Get in touch about video, personal growth, podcast, acting or something else.",
};

export default function ContactPage() {
  return <ContactContent />;
}
