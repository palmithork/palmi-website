"use client";

import { useState } from "react";
import { useLanguage, usePageTitle } from "../i18n/LanguageProvider";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Lines from "../components/Lines";

const links = {
  youtube: "https://www.youtube.com/@Lei%C3%B0ina%C3%B0karlmennsku",
  spotify:
    "https://open.spotify.com/show/0jVdaoj0r0vJ96zQGXYYSp?si=738QZfs9TrOjOgKuD2pEkQ&utm_source=copy-link",
  instagram: "https://www.instagram.com/leidin_ad_karlmennsku?stkn=MTNhcmEzMm00M2IycA==",
  tiktok: "https://www.tiktok.com/@leidinadkarlmennsku?_r=1&_t=ZN-9AFjFBdVwms",
};

// External links open in a new tab.
const external = { target: "_blank", rel: "noopener noreferrer" };

// Full episodes are on YouTube and Spotify; Instagram and TikTok carry clips and social content.
const listenPlatforms = [
  { name: "YouTube", icon: "youtube", href: links.youtube },
  { name: "Spotify", icon: "spotify", href: links.spotify },
];

const socialPlatforms = [
  { name: "Instagram", icon: "instagram", href: links.instagram },
  { name: "TikTok", icon: "tiktok", href: links.tiktok },
];

// Simple inline platform marks (no external icon files or packages).
function PlatformIcon({ name }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", "aria-hidden": true, focusable: "false" };

  if (name === "youtube") {
    return (
      <svg {...common}>
        <rect x="1.5" y="4.5" width="21" height="15" rx="4.5" fill="currentColor" />
        <path d="M10 8.8v6.4l5.6-3.2z" fill="var(--bg)" />
      </svg>
    );
  }

  if (name === "spotify") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="10.5" fill="currentColor" />
        <g fill="none" stroke="var(--bg)" strokeLinecap="round">
          <path d="M6.6 9.4c3.7-1.1 7.9-.8 11 .9" strokeWidth="2" />
          <path d="M7.3 12.7c3-.8 6.3-.5 8.9.9" strokeWidth="1.7" />
          <path d="M7.9 15.8c2.4-.6 4.8-.4 6.9.7" strokeWidth="1.4" />
        </g>
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg {...common}>
        <g fill="none" stroke="currentColor" strokeWidth="1.9">
          <rect x="3" y="3" width="18" height="18" rx="5.2" />
          <circle cx="12" cy="12" r="4.2" />
        </g>
        <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  // TikTok
  return (
    <svg {...common}>
      <path
        d="M13.6 2.5h3.1c.3 2.4 1.8 4 4.3 4.3v3.1c-1.6 0-3-.5-4.3-1.3v6.6a6 6 0 1 1-6-6c.3 0 .6 0 .9.1v3.2a2.9 2.9 0 1 0 2 2.7z"
        fill="currentColor"
      />
    </svg>
  );
}

// Labelled group of platform links (platform names are not translated).
function PlatformLinks({ label, items }) {
  return (
    <div className="platform-links">
      <span className="platform-links-label">{label}</span>
      <div className="platform-links-items">
        {items.map((platform) => (
          <a key={platform.name} href={platform.href} {...external}>
            <PlatformIcon name={platform.icon} />
            {platform.name}
          </a>
        ))}
      </div>
    </div>
  );
}

const episodes = [
  { number: "01", key: "character" },
  { number: "02", key: "boundaries" },
  { number: "03", key: "confidence" },
];

function ListenButtons() {
  const { t } = useLanguage();

  return (
    <>
      <a href={links.youtube} className="btn btn--outline" {...external}>
        {t("shared.watchOnYoutube")}
      </a>
      <a href={links.spotify} className="btn btn--outline" {...external}>
        {t("shared.listenOnSpotify")}
      </a>
    </>
  );
}

// Fixed month names so the server and every browser format dates identically
// (browsers don't all ship Icelandic locale data, which caused hydration mismatches).
const months = {
  is: ["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", "desember"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
};

function formatDate(iso, language) {
  const date = new Date(iso);
  const day = date.getUTCDate();
  const month = (months[language] || months.is)[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  if (language === "en") return `${day} ${month} ${year}`;
  if (language === "es") return `${day} de ${month} de ${year}`;
  return `${day}. ${month} ${year}`;
}

// Newest YouTube episode: shows the thumbnail first and only loads the YouTube player
// when someone presses play (faster page, nothing from YouTube until then).
function LatestEpisode({ episode }) {
  const { t, language } = useLanguage();
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${episode.id}/maxresdefault.jpg`);

  const date = episode.published ? formatDate(episode.published, language) : null;

  return (
    <>
      <div className="work-frame latest-frame latest-frame--video">
        {playing ? (
          <iframe
            className="case-media latest-embed"
            src={`https://www.youtube-nocookie.com/embed/${episode.id}?autoplay=1&rel=0`}
            title={episode.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="latest-player"
            onClick={() => setPlaying(true)}
            aria-label={`${t("podcast.latest.play")}: ${episode.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="case-media"
              src={thumb}
              alt=""
              onError={() => setThumb(`https://i.ytimg.com/vi/${episode.id}/hqdefault.jpg`)}
            />
            <span className="latest-player-shade" aria-hidden="true" />
            <span className="work-play latest-play" aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="latest-meta">
        <div>
          <p className="latest-title latest-title--live">{episode.title}</p>
          {date && (
            <time className="latest-date" dateTime={episode.published}>
              {date}
            </time>
          )}
        </div>
        <div className="latest-actions">
          <a href={episode.url} className="btn btn--outline" {...external}>
            {t("shared.watchOnYoutube")}
          </a>
          <a href={links.spotify} className="btn btn--outline" {...external}>
            {t("shared.listenOnSpotify")}
          </a>
        </div>
      </div>
    </>
  );
}

export default function PodcastContent({ latest }) {
  const { t } = useLanguage();
  usePageTitle("nav.podcast");

  return (
    <>
      <SiteHeader current="/podcast" />

      <main>
        <section className="page-hero page-hero--tight">
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
            <div className="reveal" style={{ "--delay": "0.7s" }}>
              <div className="platform-groups">
                <PlatformLinks label={t("podcast.hero.listenOn")} items={listenPlatforms} />
                <PlatformLinks label={t("podcast.hero.socialOn")} items={socialPlatforms} />
              </div>
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

          <div className="latest-body">
            {latest ? (
              <LatestEpisode episode={latest} />
            ) : (
              // Fallback if YouTube can't be reached
              <>
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
              </>
            )}
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
                  <a href={links.youtube} className="play-btn" {...external}>
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
            <PlatformLinks
              label={t("podcast.finalCta.follow")}
              items={socialPlatforms}
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
