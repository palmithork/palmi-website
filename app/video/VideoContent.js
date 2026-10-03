"use client";

import { useLanguage, usePageTitle } from "../i18n/LanguageProvider";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const contactHref = "/contact?interest=video";

const services = [
  { number: "01", key: "social" },
  { number: "02", key: "ongoing" },
  { number: "03", key: "events" },
  { number: "04", key: "drone" },
];

// Placeholders until real project stills and links are ready.
// Client names are not translated; `titleKey` is used where the title is generic text.
const projects = [
  { number: "01", title: "Vélvörn" },
  { number: "02", title: "Hoobla" },
  { number: "03", title: "Penninn" },
  { number: "04", titleKey: "video.work.futureProject" },
];

export default function VideoContent() {
  const { t } = useLanguage();
  usePageTitle("nav.video");

  return (
    <>
      <SiteHeader current="/video" />

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
              {t("video.hero.label")}
            </p>
            <h1 className="page-hero-title reveal" style={{ "--delay": "0.25s" }}>
              {t("video.hero.title")}
            </h1>
            <div className="page-hero-copy reveal" style={{ "--delay": "0.45s" }}>
              <p>{t("video.hero.p1")}</p>
              <p>{t("video.hero.p2")}</p>
              <p>{t("video.hero.p3")}</p>
            </div>
            <div className="reveal" style={{ "--delay": "0.65s" }}>
              <a href={contactHref} className="btn btn--outline page-hero-btn">
                {t("shared.startVideoProject")}
              </a>
            </div>
          </div>
        </section>

        <section className="services" aria-labelledby="services-title">
          <div className="section-head">
            <p className="section-label">{t("video.services.label")}</p>
            <h2 id="services-title" className="section-title">
              {t("video.services.title")}
            </h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.number} className="service-card">
                <span className="service-number">{service.number}</span>
                <h3 className="service-title">{t(`video.services.${service.key}.title`)}</h3>
                <p className="service-text">{t(`video.services.${service.key}.text`)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work" aria-labelledby="work-title">
          <div className="section-head">
            <p className="section-label">{t("video.work.label")}</p>
            <h2 id="work-title" className="section-title">
              {t("video.work.title")}
            </h2>
          </div>
          <div className="work-grid">
            {projects.map((project) => (
              <article key={project.number} className="work-card">
                <div className="work-frame" aria-hidden="true">
                  <div className={`work-still work-still--${project.number}`} />
                  <div className="work-letterbox" />
                  <div className="portrait-grain" />
                  <span className="work-play" />
                </div>
                <div className="work-meta">
                  <span className="work-number">{project.number}</span>
                  <h3 className="work-title">
                    {project.titleKey ? t(project.titleKey) : project.title}
                  </h3>
                  <span className="work-status">{t("shared.comingSoon")}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta" aria-labelledby="video-cta-title">
          <div className="final-cta-inner">
            <h2 id="video-cta-title" className="final-cta-title">
              {t("video.finalCta.title")}
            </h2>
            <div className="final-cta-text">
              <p>{t("video.finalCta.p1")}</p>
              <p>{t("video.finalCta.p2")}</p>
            </div>
            <div className="final-cta-actions final-cta-actions--single">
              <a href={contactHref} className="btn btn--outline">
                {t("shared.startVideoProject")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
