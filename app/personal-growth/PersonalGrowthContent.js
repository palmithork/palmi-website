"use client";

import { useLanguage, usePageTitle } from "../i18n/LanguageProvider";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import {
  SkoolBenefits,
  SkoolButton,
  SkoolCta,
  SkoolOffer,
  SkoolPreview,
  SkoolThemes,
} from "./SkoolSection";

// Sales-page flow: hero → problem → Skool offer → what you get → topics → preview → CTA → story → close.
export default function PersonalGrowthContent() {
  const { t } = useLanguage();
  usePageTitle("nav.personalGrowth");

  return (
    <>
      <SiteHeader current="/personal-growth" />

      <main className="pg-page">
        {/* 1. Hero */}
        <section className="page-hero pg-hero">
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
            <h1 className="pg-hero-title reveal" style={{ "--delay": "0.2s" }}>
              {t("personalGrowth.hero.title")}
            </h1>
            <p className="pg-hero-copy reveal" style={{ "--delay": "0.35s" }}>
              {t("personalGrowth.hero.copy")}
            </p>
            <div className="reveal" style={{ "--delay": "0.5s" }}>
              <a href="#skool" className="btn btn--primary pg-hero-btn">
                {t("personalGrowth.hero.cta")}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. Problem */}
        <section className="pg-section pg-problem" aria-labelledby="problem-title">
          <div className="pg-problem-head">
            <p className="section-label">{t("personalGrowth.problem.label")}</p>
            <h2 id="problem-title" className="pg-title">
              {t("personalGrowth.problem.title")}
            </h2>
            <p className="pg-problem-intro">{t("personalGrowth.problem.intro")}</p>
          </div>
          <div>
            <ul className="pg-problem-list">
              {t("personalGrowth.problem.items").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="pg-problem-closing">{t("personalGrowth.problem.closing")}</p>
          </div>
        </section>

        {/* 3–7. Skool offer, what you get, topics, preview, repeated CTA */}
        <section id="skool" className="pg-section skool" aria-labelledby="skool-title">
          <SkoolOffer />
          <SkoolBenefits />
          <SkoolThemes />
          <SkoolPreview />
          <SkoolCta />
        </section>

        {/* 8. Personal story (why me) */}
        <section className="pg-section pg-story" aria-labelledby="story-title">
          <div>
            <p className="section-label">{t("personalGrowth.story.label")}</p>
            <h2 id="story-title" className="pg-title">
              {t("personalGrowth.story.title")}
            </h2>
          </div>
          <div className="pg-story-copy">
            {t("personalGrowth.story.paragraphs").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <blockquote className="pg-statement">
              {t("personalGrowth.story.statement")}{" "}
              <em>{t("personalGrowth.story.statementEmphasis")}</em>
            </blockquote>
            <p className="pg-approach">{t("personalGrowth.story.approach")}</p>
          </div>
        </section>

        {/* 9. Closing */}
        <section className="final-cta pg-final" aria-labelledby="pg-cta-title">
          <div className="final-cta-inner">
            <h2 id="pg-cta-title" className="final-cta-title">
              {t("personalGrowth.finalCta.title")}
            </h2>
            <div className="pg-final-action">
              <SkoolButton />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
