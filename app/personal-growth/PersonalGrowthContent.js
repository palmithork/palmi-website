"use client";

import Image from "next/image";
import { useLanguage, usePageTitle } from "../i18n/LanguageProvider";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Lines from "../components/Lines";
import {
  SkoolBenefits,
  SkoolButton,
  SkoolCta,
  SkoolOffer,
  PriceLine,
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

          <div className="page-hero-inner pg-hero-grid">
            <div className="pg-hero-text">
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
              <PriceLine
                className="pg-problem-intro reveal"
                style={{ "--delay": "0.6s" }}
                communityKey="communityHero"
              />
            </div>

            <div className="pg-hero-media reveal" style={{ "--delay": "0.45s" }}>
              <Image
                src="/images/personal-growth/attraction-hero.jpg"
                alt={t("personalGrowth.hero.imageAlt")}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 520px"
                className="pg-hero-img"
              />
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

        {/* 3. What you get out of the course */}
        <section className="pg-section pg-gains" aria-labelledby="gains-title">
          <h2 id="gains-title" className="pg-title">
            {t("personalGrowth.gains.title")}
          </h2>
          <ul className="pg-gains-list">
            {t("personalGrowth.gains.items").map((item, i) => (
              <li key={i} className="pg-gain">
                <svg className="pg-gain-check" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  <path d="M3 8.5l3.2 3.2L13 4.8" />
                </svg>
                <div>
                  <h3 className="pg-gain-title">{item.title}</h3>
                  <p className="pg-gain-text">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 4–8. Skool offer, what you get, topics, preview, repeated CTA */}
        <section id="skool" className="pg-section skool" aria-labelledby="skool-title">
          <SkoolOffer />
          <SkoolBenefits />
          <SkoolThemes />
          <SkoolPreview />
          <SkoolCta />
        </section>

        {/* 9. Attraction */}
        <section className="pg-section pg-story" aria-labelledby="attraction-title">
          <div>
            <p className="section-label">{t("personalGrowth.attraction.label")}</p>
            <h2 id="attraction-title" className="pg-title">
              {t("personalGrowth.attraction.title")}
            </h2>
          </div>
          <div className="pg-story-copy">
            {t("personalGrowth.attraction.paragraphs").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* 10. Personal story (why me) */}
        <section className="pg-section pg-story" aria-labelledby="story-title">
          <div>
            <p className="section-label">{t("personalGrowth.story.label")}</p>
            <h2 id="story-title" className="pg-title">
              {t("personalGrowth.story.title")}
            </h2>
          </div>
          <div className="pg-story-copy">
            {t("personalGrowth.story.paragraphs").map((paragraph, i) => (
              <p key={i}>{Array.isArray(paragraph) ? <Lines lines={paragraph} /> : paragraph}</p>
            ))}
            <blockquote className="pg-statement">
              {t("personalGrowth.story.statement")}{" "}
              <em>{t("personalGrowth.story.statementEmphasis")}</em>
            </blockquote>
            <p>{t("personalGrowth.story.note")}</p>
          </div>
        </section>

        {/* 11. Closing */}
        <section className="final-cta pg-final" aria-labelledby="pg-cta-title">
          <div className="final-cta-inner">
            <h2 id="pg-cta-title" className="final-cta-title">
              {t("personalGrowth.finalCta.title")}
            </h2>
            <p className="final-cta-text">
              {t("personalGrowth.finalCta.line")}
              <br />
              {t("personalGrowth.finalCta.extra")}
            </p>
            <div className="pg-final-action">
              <SkoolButton labelKey="courseCta" />
            </div>
            <PriceLine className="final-cta-text" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
