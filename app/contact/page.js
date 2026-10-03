import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact — Pálmi Þór K.",
  description: "Get in touch about video, personal growth, podcast, acting or something else.",
};

// Placeholder address — not final. Replace (and make it a mailto: link) when confirmed.
const placeholderEmail = "hello@palmithork.com";

export default function ContactPage() {
  return (
    <>
      <SiteHeader current="/contact" />

      <main>
        <section className="page-hero page-hero--short">
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-glow hero-glow--one" />
            <div className="hero-glow hero-glow--two" />
            <div className="hero-grain" />
            <div className="hero-vignette" />
          </div>

          <div className="page-hero-inner">
            <p className="section-label reveal" style={{ "--delay": "0.1s" }}>
              Contact
            </p>
            <h1 className="page-hero-title reveal" style={{ "--delay": "0.25s" }}>
              Let’s talk.
            </h1>
            <div className="page-hero-copy reveal" style={{ "--delay": "0.45s" }}>
              <p>
                Whether you’re looking for video content for your business, want to know more about
                my personal-growth work or have something else in mind, send me a message.
              </p>
            </div>
          </div>
        </section>

        <section className="contact" aria-label="Contact form">
          <ContactForm />

          <aside className="contact-direct" aria-labelledby="direct-title">
            <h2 id="direct-title" className="contact-direct-title">
              Prefer email?
            </h2>
            <p className="contact-email">
              <span className="contact-email-address">{placeholderEmail}</span>
              <span className="contact-email-tag">Placeholder</span>
            </p>
          </aside>
        </section>

        <p className="contact-closing">
          Video. Personal Growth. Podcast. Acting.
          <br />
          <em>One place to reach me.</em>
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
