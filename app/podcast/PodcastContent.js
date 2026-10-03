"use client";

import { useLanguage, usePageTitle } from "../i18n/LanguageProvider";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Lines from "../components/Lines";

// Placeholders: replace with the real channel/show URLs when ready.
const youtubeHref = "#";
const spotifyHref = "#";

const episodes = [
  { number: "01", key: "character" },
  { number: "02", key: "boundaries" },
  { number: "03", key: "confidence" },
];

function ListenButtons() {
  const { t } = useLanguage();

  return (
    <>
      <a href={youtubeHref} className="btn btn--outline">
        {t("shared.watchOnYoutube")}
      </a>
      <a href={spotifyHref} className="btn btn--outline">
        {t("shared.listenOnSpotify")}
      </a>
    </>
  );
}

export default function PodcastContent() {
  const { t } = useLanguage();
  usePageTitle("nav.podcast");

  return (
    <>
      <SiteHeader current="/podcast" />

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
              {t("podcast.hero.label")}
            </p>
            {/* Podcast name stays the same in every language */}
            <h1
              className="page-hero-title page-hero-title--sentence reveal"
              style={{ "--delay": "0.25s" }}
            >
              Leiðin að karlmennsku
            </h1>
            <p className="podcast-subtitle reveal" style={{ "--delay": "0.4s" }}>
              {t("podcast.hero.subtitle")}
            </p>
            <div className="page-hero-copy reveal" style={{ "--delay": "0.55s" }}>
              <p>{t("podcast.hero.p1")}</p>
              <p>
                {t("podcast.hero.goal")}
                <br />
                {t("podcast.hero.goalText")}
              </p>
            </div>
          </div>
        </section>

        <section className="latest" aria-labelledby="latest-title">
          <div className="section-head">
            <p className="section-label">{t("podcast.latest.label")}</p>
            <h2 id="latest-title" className="section-title">
              {t("podcast.latest.title")}
            </h2>
          </div>

          <div className="work-frame latest-frame" aria-hidden="true">
            <div className="work-still work-still--01" />
            <div className="work-letterbox" />
            <div className="portrait-grain" />
            <span className="work-play latest-play" />
          </div>

          <div className="latest-meta">
            <p className="latest-title">{t("podcast.latest.placeholder")}</p>
            <div className="latest-actions">
              <ListenButtons />
            </div>
          </div>
        </section>

        <section className="episodes" aria-labelledby="episodes-title">
          <div className="section-head">
            <p className="section-label">{t("podcast.episodes.label")}</p>
            <h2 id="episodes-title" className="section-title">
              {t("podcast.episodes.title")}
            </h2>
          </div>

          <div className="episodes-grid">
            {episodes.map((episode) => (
              <article key={episode.number} className="episode-card">
                <div className="work-frame" aria-hidden="true">
                  <div className={`work-still work-still--0${Number(episode.number) + 1}`} />
                  <div className="work-letterbox" />
                  <div className="portrait-grain" />
                </div>
                <div className="episode-body">
                  <span className="work-number">{episode.number}</span>
                  <h3 className="episode-title">{t(`podcast.episodes.${episode.key}`)}</h3>
                  <p className="episode-text">{t("podcast.episodes.placeholder")}</p>
                  <a href={youtubeHref} className="play-btn">
                    <span className="play-btn-icon" aria-hidden="true" />
                    {t("shared.watch")}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story" aria-labelledby="why-title">
          <div className="story-grid">
            <div>
              <p className="section-label">{t("podcast.why.label")}</p>
              <h2 id="why-title" className="section-title">
                {t("podcast.why.title")}
              </h2>
            </div>
            <div className="story-copy">
              <p>{t("podcast.why.p1")}</p>
              <p className="podcast-topics">
                <Lines lines={t("podcast.why.topics")} />
              </p>
              <p>{t("podcast.why.p2")}</p>
              <p className="podcast-closing">{t("podcast.why.closing")}</p>
            </div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="podcast-cta-title">
          <div className="final-cta-inner">
            <h2 id="podcast-cta-title" className="final-cta-title">
              {t("podcast.finalCta.title")}
            </h2>
            <div className="final-cta-actions">
              <ListenButtons />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
