"use client";

import Image from "next/image";
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

// Simple placeholders until these projects get full case studies.
// Client names are not translated; `titleKey` is used where the title is generic text.
const projects = [
  { number: "03", title: "Penninn" },
  { number: "04", titleKey: "video.work.futureProject" },
];

// Client case studies: one client project = main video + 3 photos + 2 reels.
// Any media left as null shows a placeholder. To add media, drop the file in /public
// and put its path here (photos also need an alt text key under video.work.clients.<id>).
const clients = [
  {
    id: "velvorn",
    name: "Vélvörn",
    // "-web" files are compressed copies of the originals (kept alongside in the same folder)
    mainVideo: "/videos/velvorn/velvorn-main-web.mp4",
    photos: [
      { src: "/images/velvorn/velvorn-1.jpg", altKey: "photo1Alt" },
      { src: "/images/velvorn/velvorn-2.jpg", altKey: "photo2Alt" },
      { src: "/images/velvorn/velvorn-3.jpg", altKey: "photo3Alt" },
    ],
    reels: [
      "/videos/velvorn/velvorn-reel-1.mp4",
      "/videos/velvorn/velvorn-reel-2-web.mp4",
      "/videos/velvorn/velvorn-reel-3-web.mp4",
    ],
  },
  {
    id: "hoobla",
    name: "Hoobla",
    mainVideo: null,
    photos: [
      { src: "/images/hoobla/hoobla-1.jpg", altKey: "photo1Alt" },
      { src: "/images/hoobla/hoobla-2.jpg", altKey: "photo2Alt" },
      { src: "/images/hoobla/hoobla-3.jpg", altKey: "photo3Alt" },
    ],
    reels: [null, null],
  },
];

// "#t=0.1" makes browsers (Safari in particular) show the first frame as a preview.
function CaseVideo({ src, variant, label }) {
  return (
    <div className={`work-frame work-frame--${variant}`}>
      <video
        className="case-media"
        src={`${src}#t=0.1`}
        controls
        preload="metadata"
        playsInline
        aria-label={label}
      />
    </div>
  );
}

function CasePlaceholder({ variant, still, play = false }) {
  const { t } = useLanguage();

  return (
    <div className={`work-frame work-frame--${variant} case-placeholder`}>
      <div className={`work-still work-still--${still}`} aria-hidden="true" />
      <div className="portrait-grain" aria-hidden="true" />
      {play && <span className="work-play" aria-hidden="true" />}
      <span className="case-placeholder-tag">{t("shared.comingSoon")}</span>
    </div>
  );
}

function ClientCase({ client }) {
  const { t } = useLanguage();
  const label = (key) => t(`video.work.caseStudy.${key}`);

  return (
    <article className="case-study" aria-labelledby={`case-${client.id}-title`}>
      <header className="case-head">
        <p className="case-label">{label("label")}</p>
        <h3 id={`case-${client.id}-title`} className="case-title">
          {client.name}
        </h3>
        <p className="case-intro">{t(`video.work.clients.${client.id}.intro`)}</p>
      </header>

      <div className="deliverable">
        <h4 className="deliverable-label">
          <span>01</span>
          {label("mainVideo")}
        </h4>
        {client.mainVideo ? (
          <CaseVideo
            src={client.mainVideo}
            variant="video"
            label={`${client.name} — ${label("mainVideo")}`}
          />
        ) : (
          <CasePlaceholder variant="video" still="01" play />
        )}
      </div>

      <div className="deliverable">
        <h4 className="deliverable-label">
          <span>02</span>
          {label("photography")}
        </h4>
        <div className="case-photos">
          {client.photos.map((photo, i) =>
            photo ? (
              <div key={i} className="work-frame work-frame--photo">
                <Image
                  src={photo.src}
                  alt={
                    photo.altKey ? t(`video.work.clients.${client.id}.${photo.altKey}`) : client.name
                  }
                  fill
                  sizes="(max-width: 900px) 33vw, 220px"
                  className="case-media"
                />
              </div>
            ) : (
              <CasePlaceholder key={i} variant="photo" still={`0${i + 2}`} />
            )
          )}
        </div>
      </div>

      <div className="deliverable">
        <h4 className="deliverable-label">
          <span>03</span>
          {label("reels")}
        </h4>
        <div className={`case-reels case-reels--${client.reels.length}`}>
          {client.reels.map((src, i) =>
            src ? (
              <CaseVideo
                key={i}
                src={src}
                variant="reel"
                label={`${client.name} — ${label("reels")} ${i + 1}`}
              />
            ) : (
              <CasePlaceholder key={i} variant="reel" still={["01", "03", "04"][i]} play />
            )
          )}
        </div>
      </div>
    </article>
  );
}

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
          <div className="case-grid">
            {clients.map((client) => (
              <ClientCase key={client.id} client={client} />
            ))}
          </div>

          <h3 className="more-projects-title">{t("video.work.moreProjects")}</h3>
          <div className="work-grid work-grid--compact">
            {projects.map((project) => (
              <article key={project.number} className="work-card">
                <div className="work-frame" aria-hidden="true">
                  <div className={`work-still work-still--${project.number}`} />
                  <div className="work-letterbox" />
                  <div className="portrait-grain" />
                  <span className="work-play" />
                </div>
                <div className="work-meta">
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
