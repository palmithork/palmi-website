"use client";

import { useLanguage, usePageTitle } from "../i18n/LanguageProvider";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Lines from "../components/Lines";

const pillars = [
  { number: "01", key: "character" },
  { number: "02", key: "boundaries" },
  { number: "03", key: "confidence" },
];

export default function PersonalGrowthContent() {
  const { t } = useLanguage();
  usePageTitle("nav.personalGrowth");

  return (
    <>
      <SiteHeader current="/personal-growth" />

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
              {t("personalGrowth.hero.label")}
            </p>
            <h1 className="page-hero-title reveal" style={{ "--delay": "0.25s" }}>
              {t("personalGrowth.hero.title")}
            </h1>
            <div className="page-hero-copy reveal" style={{ "--delay": "0.45s" }}>
              <p>{t("personalGrowth.hero.p1")}</p>
              <p className="pg-beliefs">
                <Lines lines={t("personalGrowth.hero.beliefs")} />
              </p>
              <p>{t("personalGrowth.hero.p3")}</p>
            </div>
          </div>
        </section>

        <section className="story" aria-labelledby="story-title">
          <div className="story-grid">
            <div>
              <p className="section-label">{t("personalGrowth.story.label")}</p>
              <h2 id="story-title" className="section-title">
                {t("personalGrowth.story.title")}
              </h2>
            </div>
            <div className="story-copy">
              {t("personalGrowth.story.paragraphs").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <blockquote className="statement">
            <p>
              {t("personalGrowth.story.statement")}
              <br />
              <em>{t("personalGrowth.story.statementEmphasis")}</em>
            </p>
          </blockquote>
        </section>

        <section className="pg-pillars" aria-label={t("personalGrowth.pillars.label")}>
          {pillars.map((pillar) => (
            <article key={pillar.number} className="pg-pillar">
              <span className="service-number">{pillar.number}</span>
              <h3 className="pg-pillar-title">{t(`personalGrowth.pillars.${pillar.key}.title`)}</h3>
              <p className="pg-pillar-text">{t(`personalGrowth.pillars.${pillar.key}.text`)}</p>
            </article>
          ))}
        </section>

        <section id="course" className="course" aria-labelledby="course-title">
          <div className="course-panel">
            <p className="section-label">{t("personalGrowth.course.label")}</p>
            <h2 id="course-title" className="course-title">
              {t("personalGrowth.course.title")}
            </h2>
            <div className="course-copy">
              <p>{t("personalGrowth.course.p1")}</p>
              <p>{t("personalGrowth.course.p2")}</p>
              <p className="course-closing">{t("personalGrowth.course.closing")}</p>
            </div>
            <a href="/course" className="btn btn--outline course-btn">
              {t("personalGrowth.course.cta")}
            </a>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="pg-cta-title">
          <div className="final-cta-inner">
            <h2 id="pg-cta-title" className="final-cta-title">
              {t("personalGrowth.finalCta.title")}
            </h2>
            <div className="final-cta-actions final-cta-actions--single">
              <a href="/contact?interest=personal-growth" className="btn btn--outline">
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
