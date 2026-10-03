"use client";

import { useLanguage, usePageTitle } from "../i18n/LanguageProvider";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const headshots = ["01", "02", "03", "04"];

export default function ActingContent() {
  const { t } = useLanguage();
  usePageTitle("nav.acting");

  return (
    <>
      <SiteHeader current="/acting" />

      <main>
        <section className="page-hero">
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-glow hero-glow--one" />
            <div className="hero-glow hero-glow--two" />
            <div className="hero-grain" />
            <div className="hero-vignette" />
          </div>

          <div className="page-hero-inner">
            <h1 className="page-hero-title reveal" style={{ "--delay": "0.15s" }}>
              {t("acting.hero.title")}
            </h1>
            <div className="page-hero-copy reveal" style={{ "--delay": "0.4s" }}>
              <p>{t("acting.hero.p1")}</p>
              <p>{t("acting.hero.p2")}</p>
              <p>{t("acting.hero.p3")}</p>
            </div>
          </div>
        </section>

        <section className="page-section" aria-labelledby="selected-title">
          <div className="section-head">
            <p className="section-label">{t("acting.selected.label")}</p>
            <h2 id="selected-title" className="section-title">
              {t("acting.selected.title")}
            </h2>
          </div>

          <article className="featured-work">
            <div className="work-frame" aria-hidden="true">
              <div className="work-still work-still--02" />
              <div className="work-letterbox" />
              <div className="portrait-grain" />
            </div>
            <div className="featured-work-body">
              {/* Production title — not translated */}
              <h3 className="featured-work-title">Signal</h3>
              <p className="featured-work-meta">{t("acting.selected.meta")}</p>
              <p className="featured-work-text">{t("acting.selected.text")}</p>
            </div>
          </article>
        </section>

        <section className="page-section" aria-labelledby="headshots-title">
          <div className="section-head">
            <p className="section-label">{t("acting.headshots.label")}</p>
            <h2 id="headshots-title" className="section-title">
              {t("acting.headshots.title")}
            </h2>
          </div>

          {/* Replace each .portrait-placeholder with <img className="portrait-photo" … /> */}
          <div className="headshots-grid">
            {headshots.map((number) => (
              <div key={number} className="headshot">
                <div className="portrait-frame" aria-hidden="true">
                  <div className="portrait-placeholder">
                    <svg
                      className="portrait-silhouette"
                      viewBox="0 0 400 500"
                      preserveAspectRatio="xMidYMax meet"
                    >
                      <path d="M200 92c-44 0-74 36-74 84 0 34 14 62 34 78v26c-62 10-120 40-142 96-8 20-12 70-14 124h392c-2-54-6-104-14-124-22-56-80-86-142-96v-26c20-16 34-44 34-78 0-48-30-84-74-84z" />
                    </svg>
                  </div>
                  <div className="portrait-light" />
                  <div className="portrait-grain" />
                </div>
                <span className="headshot-number">{number}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="page-section" aria-labelledby="showreel-title">
          <div className="section-head">
            <p className="section-label">{t("acting.showreel.label")}</p>
            <h2 id="showreel-title" className="section-title">
              {t("acting.showreel.title")}
            </h2>
          </div>

          <div className="work-frame latest-frame" aria-hidden="true">
            <div className="work-still work-still--04" />
            <div className="work-letterbox" />
            <div className="portrait-grain" />
            <span className="work-play latest-play" />
          </div>
          <p className="showreel-text">{t("acting.showreel.text")}</p>
        </section>

        <section className="final-cta" aria-labelledby="acting-cta-title">
          <div className="final-cta-inner">
            <h2 id="acting-cta-title" className="final-cta-title">
              {t("acting.finalCta.title")}
            </h2>
            <div className="final-cta-actions final-cta-actions--single">
              <a href="/contact?interest=acting" className="btn btn--outline">
                {t("acting.finalCta.cta")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
