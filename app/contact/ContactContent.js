"use client";

import { useLanguage, usePageTitle } from "../i18n/LanguageProvider";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactForm from "./ContactForm";

// Placeholder address — not final. Replace (and make it a mailto: link) when confirmed.
const placeholderEmail = "hello@palmithork.com";

export default function ContactContent() {
  const { t } = useLanguage();
  usePageTitle("nav.contact");

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
              {t("contact.hero.label")}
            </p>
            <h1 className="page-hero-title reveal" style={{ "--delay": "0.25s" }}>
              {t("contact.hero.title")}
            </h1>
            <div className="page-hero-copy reveal" style={{ "--delay": "0.45s" }}>
              <p>{t("contact.hero.copy")}</p>
            </div>
          </div>
        </section>

        <section className="contact" aria-label={t("contact.form.label")}>
          <ContactForm />

          <aside className="contact-direct" aria-labelledby="direct-title">
            <h2 id="direct-title" className="contact-direct-title">
              {t("contact.direct.title")}
            </h2>
            <p className="contact-email">
              <span className="contact-email-address">{placeholderEmail}</span>
              <span className="contact-email-tag">{t("contact.direct.placeholderTag")}</span>
            </p>
          </aside>
        </section>

        <p className="contact-closing">
          {t("contact.closing.line")}
          <br />
          <em>{t("contact.closing.emphasis")}</em>
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
