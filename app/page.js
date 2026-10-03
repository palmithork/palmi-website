"use client";

import Image from "next/image";
import { useLanguage, usePageTitle } from "./i18n/LanguageProvider";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

// Text for each card lives under home.paths.<key> / home.more.<key> in the translation files.
const paths = [
  { id: "creative-work", key: "video", number: "01", href: "/video" },
  { id: "personal-growth", key: "personalGrowth", number: "02", href: "/personal-growth" },
];

const more = [
  { id: "podcast", key: "podcast", href: "/podcast" },
  { id: "acting", key: "acting", href: "/acting" },
  { id: "about", key: "about", href: "/about" },
];

export default function Home() {
  const { t } = useLanguage();
  usePageTitle();

  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero">
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-glow hero-glow--one" />
            <div className="hero-glow hero-glow--two" />
            <div className="hero-grain" />
            <div className="hero-vignette" />
          </div>

          <div className="hero-inner">
            <div className="hero-content">
              <h1 className="hero-title reveal" style={{ "--delay": "0.1s" }}>
                PÁLMI ÞÓR K.
              </h1>
              <p className="hero-headline reveal" style={{ "--delay": "0.3s" }}>
                {t("home.hero.headlineVideo")}
                <br />
                <em>{t("home.hero.headlineGrowth")}</em>
              </p>
              <p className="hero-copy reveal" style={{ "--delay": "0.45s" }}>
                {t("home.hero.copy")}
              </p>
              <div className="hero-actions reveal" style={{ "--delay": "0.65s" }}>
                <a href="/contact?interest=video" className="btn btn--outline">
                  {t("home.hero.ctaVideo")}
                </a>
                <a href="/contact?interest=personal-growth" className="btn btn--outline">
                  {t("home.hero.ctaGrowth")}
                </a>
              </div>
            </div>

            <div className="hero-portrait reveal" style={{ "--delay": "0.5s" }}>
              <div className="portrait-frame portrait-frame--photo">
                <Image
                  src="/images/1-177.jpg"
                  alt="Pálmi Þór K."
                  fill
                  priority
                  sizes="(max-width: 900px) min(100vw, 520px), 620px"
                  className="portrait-photo portrait-photo--hero"
                />
                <div className="portrait-light" />
                <div className="portrait-grain" />
                <span className="portrait-corner portrait-corner--tl" />
                <span className="portrait-corner portrait-corner--tr" />
                <span className="portrait-corner portrait-corner--bl" />
                <span className="portrait-corner portrait-corner--br" />
              </div>
            </div>
          </div>

          <div className="scroll-cue" aria-hidden="true">
            <span />
          </div>
        </section>

        <section className="intro" aria-labelledby="intro-title">
          <h2 id="intro-title" className="intro-title">
            {t("home.intro.title")}
          </h2>
          <div className="intro-copy">
            <p>{t("home.intro.p1")}</p>
            <p>{t("home.intro.p2")}</p>
            <p>
              {t("home.intro.p3a")}
              <br />
              {t("home.intro.p3b")}
            </p>
            <p className="intro-closing">{t("home.intro.closing")}</p>
          </div>
        </section>

        <section className="pillars" aria-label={t("home.paths.label")}>
          {paths.map((path) => (
            <article key={path.id} id={path.id} className="pillar">
              <div className={`pillar-visual pillar-visual--${path.number}`} aria-hidden="true" />
              <div className="pillar-body">
                <span className="pillar-number">{path.number}</span>
                <h2 className="pillar-title">{t(`home.paths.${path.key}.title`)}</h2>
                <p className="pillar-text">{t(`home.paths.${path.key}.text`)}</p>
                <a href={path.href} className="btn btn--outline pillar-btn">
                  {t(`home.paths.${path.key}.cta`)}
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="more" aria-label={t("home.more.label")}>
          {more.map((item) => (
            <article key={item.id} id={item.id} className="more-card">
              <span className="more-label">{t(`home.more.${item.key}.label`)}</span>
              <h3 className="more-title">{t(`home.more.${item.key}.title`)}</h3>
              <p className="more-text">{t(`home.more.${item.key}.text`)}</p>
              <a href={item.href} className="more-cta">
                {t(`home.more.${item.key}.cta`)} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </section>

        <section className="final-cta" aria-labelledby="final-cta-title">
          <div className="final-cta-inner">
            <h2 id="final-cta-title" className="final-cta-title">
              {t("home.finalCta.title")}
            </h2>
            <p className="final-cta-text">{t("home.finalCta.text")}</p>
            <div className="final-cta-actions">
              <a href="/contact?interest=video" className="btn btn--outline">
                {t("home.finalCta.ctaVideo")}
              </a>
              <a href="/personal-growth" className="btn btn--outline">
                {t("home.finalCta.ctaGrowth")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
