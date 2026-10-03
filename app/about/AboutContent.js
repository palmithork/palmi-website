"use client";

import { useLanguage, usePageTitle } from "../i18n/LanguageProvider";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Lines from "../components/Lines";

// Chapter text (including its paragraph/list/emphasis blocks) lives under about.chapters.<key>.
const chapters = [
  { number: "01", key: "path" },
  { number: "02", key: "turningPoint" },
  { number: "03", key: "learning" },
  { number: "04", key: "today" },
];

const values = [
  { number: "01", key: "keepDeveloping" },
  { number: "02", key: "beClear" },
  { number: "03", key: "dontHide" },
  { number: "04", key: "stayCurious" },
];

function Block({ block }) {
  if (typeof block === "string") return <p>{block}</p>;

  if (block.list) {
    return (
      <p className="about-list">
        <Lines lines={block.list} />
      </p>
    );
  }

  return <p className="about-emphasis">{block.emphasis}</p>;
}

export default function AboutContent() {
  const { t } = useLanguage();
  usePageTitle("nav.about");

  return (
    <>
      <SiteHeader current="/about" />

      <main>
        <section className="page-hero">
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-glow hero-glow--one" />
            <div className="hero-glow hero-glow--two" />
            <div className="hero-grain" />
            <div className="hero-vignette" />
          </div>

          <div className="page-hero-inner">
            <p className="section-label reveal" style={{ "--delay": "0.1s" }}>
              {t("about.hero.label")}
            </p>
            <h1
              className="page-hero-title page-hero-title--long reveal"
              style={{ "--delay": "0.25s" }}
            >
              {t("about.hero.title")}
            </h1>
            <div className="page-hero-copy reveal" style={{ "--delay": "0.45s" }}>
              {t("about.hero.intro").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <div className="chapters">
          {chapters.map((chapter) => (
            <section
              key={chapter.number}
              className="chapter story-grid"
              aria-labelledby={`chapter-${chapter.number}`}
            >
              <div className="chapter-head">
                <p className="section-label">
                  {chapter.number} · {t(`about.chapters.${chapter.key}.label`)}
                </p>
                <h2 id={`chapter-${chapter.number}`} className="section-title">
                  {t(`about.chapters.${chapter.key}.title`)}
                </h2>
              </div>
              <div className="story-copy chapter-copy">
                {t(`about.chapters.${chapter.key}.blocks`).map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="values" aria-labelledby="values-title">
          <div className="section-head">
            <p className="section-label">{t("about.values.label")}</p>
            <h2 id="values-title" className="section-title">
              {t("about.values.title")}
            </h2>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <article key={value.number} className="pg-pillar">
                <span className="service-number">{value.number}</span>
                <h3 className="value-title">{t(`about.values.${value.key}.title`)}</h3>
                <p className="pg-pillar-text">{t(`about.values.${value.key}.text`)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta" aria-labelledby="about-cta-title">
          <div className="final-cta-inner">
            <h2 id="about-cta-title" className="final-cta-title">
              {t("about.finalCta.title")}
            </h2>
            <div className="final-cta-actions">
              <a href="/video" className="btn btn--outline">
                {t("shared.exploreVideo")}
              </a>
              <a href="/personal-growth" className="btn btn--outline">
                {t("shared.explorePersonalGrowth")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
