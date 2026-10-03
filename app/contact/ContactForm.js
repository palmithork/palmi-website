"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";

// Values are stable ids (also used by ?interest= links elsewhere on the site);
// the visible labels come from contact.form.options.<key>.
const interests = [
  { value: "video", key: "video" },
  { value: "personal-growth", key: "personalGrowth" },
  { value: "podcast", key: "podcast" },
  { value: "acting", key: "acting" },
  { value: "other", key: "other" },
];

export default function ContactForm() {
  const { t } = useLanguage();
  const [interest, setInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("interest");
    if (interests.some((option) => option.value === value)) setInterest(value);
  }, []);

  function handleSubmit(event) {
    // No backend yet — nothing is sent.
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label className="field">
          <span className="field-label">{t("contact.form.name")}</span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label className="field">
          <span className="field-label">{t("contact.form.email")}</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
      </div>

      <label className="field field--select">
        <span className="field-label">{t("contact.form.interest")}</span>
        <select
          name="interest"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          required
        >
          <option value="" disabled>
            {t("contact.form.selectOne")}
          </option>
          {interests.map((option) => (
            <option key={option.value} value={option.value}>
              {t(`contact.form.options.${option.key}`)}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span className="field-label">{t("contact.form.message")}</span>
        <textarea name="message" rows={6} required />
      </label>

      <div className="form-footer">
        <button type="submit" className="btn btn--outline form-submit">
          {t("contact.form.submit")}
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {submitted ? t("contact.form.comingSoon") : ""}
        </p>
      </div>
    </form>
  );
}
