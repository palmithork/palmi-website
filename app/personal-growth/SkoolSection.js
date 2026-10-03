"use client";

// Building blocks for the Skool course & community offer on /personal-growth.
import Image from "next/image";
import { useLanguage } from "../i18n/LanguageProvider";

export const SKOOL_URL = "https://www.skool.com/palmi-test-hopur-1-1443";

// External links open in a new tab.
const external = { target: "_blank", rel: "noopener noreferrer" };

const benefits = ["course", "tasks", "community", "newContent", "access"];

const themes = ["purpose", "boundaries", "confidence", "decisions", "character"];

// Shown uncropped at their natural (wide) shape. Order follows the captions.
const screenshots = [
  { src: "/images/skool/skool-3.png", key: "videos", width: 1906, height: 849 },
  { src: "/images/skool/skool-1.png", key: "tasks", width: 1898, height: 854 },
  { src: "/images/skool/skool-2.png", key: "topics", width: 1895, height: 853 },
];

function useSkoolText() {
  const { t } = useLanguage();
  return (key) => t(`personalGrowth.skool.${key}`);
}

export function SkoolButton({ className = "" }) {
  const k = useSkoolText();

  return (
    <a href={SKOOL_URL} className={`btn btn--primary skool-btn ${className}`} {...external}>
      {k("cta")}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

// Offer panel — headline, lead and the first Skool CTA.
export function SkoolOffer() {
  const k = useSkoolText();

  return (
    <div className="skool-offer">
      <p className="section-label">{k("label")}</p>
      <h2 id="skool-title" className="skool-title">
        {k("title")}
      </h2>
      <p className="skool-lead">{k("lead")}</p>
      <SkoolButton />
    </div>
  );
}

export function SkoolBenefits() {
  const k = useSkoolText();

  return (
    <div className="skool-block">
      <h3 className="skool-subtitle">{k("benefits.title")}</h3>
      <ul className="skool-benefits">
        {benefits.map((key, i) => (
          <li key={key} className="skool-benefit">
            <span className="skool-marker" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="skool-benefit-title">{k(`benefits.${key}.title`)}</h4>
            <p className="skool-benefit-text">{k(`benefits.${key}.text`)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SkoolThemes() {
  const k = useSkoolText();

  return (
    <div className="skool-block">
      <h3 className="skool-subtitle">{k("themes.title")}</h3>
      <ul className="skool-themes">
        {themes.map((key, i) => (
          <li key={key} className="skool-theme">
            <span className="skool-theme-number">{String(i + 1).padStart(2, "0")}</span>
            {k(`themes.${key}`)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SkoolPreview() {
  const k = useSkoolText();

  return (
    <div className="skool-block">
      <h3 className="skool-subtitle">{k("gallery.title")}</h3>
      <div className="skool-gallery">
        {screenshots.map((shot, i) => (
          <figure key={shot.src} className={`skool-shot${i === 0 ? " skool-shot--main" : ""}`}>
            <div className="skool-shot-frame">
              <Image
                src={shot.src}
                alt={k(`gallery.${shot.key}Alt`)}
                width={shot.width}
                height={shot.height}
                sizes={i === 0 ? "(max-width: 900px) 100vw, 860px" : "(max-width: 900px) 100vw, 420px"}
                className="skool-shot-img"
              />
            </div>
            <figcaption className="skool-caption">{k(`gallery.${shot.key}`)}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

// Repeated mid-page CTA after the preview.
export function SkoolCta() {
  const k = useSkoolText();

  return (
    <div className="skool-cta">
      <div>
        <h3 className="skool-cta-title">{k("final.title")}</h3>
        <p className="skool-cta-text">{k("final.text")}</p>
      </div>
      <SkoolButton />
    </div>
  );
}
