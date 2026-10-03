"use client";

import { useEffect, useState } from "react";

const interests = ["Video Project", "Personal Growth", "Podcast / Media", "Acting", "Other"];

// Maps the ?interest= value used by buttons elsewhere on the site.
const interestFromQuery = {
  video: "Video Project",
  "personal-growth": "Personal Growth",
  podcast: "Podcast / Media",
  acting: "Acting",
};

export default function ContactForm() {
  const [interest, setInterest] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("interest");
    if (interestFromQuery[value]) setInterest(interestFromQuery[value]);
  }, []);

  function handleSubmit(event) {
    // No backend yet — nothing is sent.
    event.preventDefault();
    setStatus("Form connection coming soon.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label className="field">
          <span className="field-label">Name</span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label className="field">
          <span className="field-label">Email</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
      </div>

      <label className="field field--select">
        <span className="field-label">What are you interested in?</span>
        <select
          name="interest"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          required
        >
          <option value="" disabled>
            Select one
          </option>
          {interests.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span className="field-label">Message</span>
        <textarea name="message" rows={6} required />
      </label>

      <div className="form-footer">
        <button type="submit" className="btn btn--outline form-submit">
          Send Message
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}
