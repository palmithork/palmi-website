import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Podcast — Pálmi Þór K.",
  description:
    "Leiðin að karlmennsku — a podcast about character, confidence, relationships, boundaries, communication and personal development.",
};

// Placeholders: replace with the real channel/show URLs when ready.
const youtubeHref = "#";
const spotifyHref = "#";

const episodes = [
  { number: "01", title: "Character" },
  { number: "02", title: "Boundaries" },
  { number: "03", title: "Confidence" },
];

function ListenButtons() {
  return (
    <>
      <a href={youtubeHref} className="btn btn--outline">
        Watch on YouTube
      </a>
      <a href={spotifyHref} className="btn btn--outline">
        Listen on Spotify
      </a>
    </>
  );
}

export default function PodcastPage() {
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
              Podcast
            </p>
            <h1
              className="page-hero-title page-hero-title--sentence reveal"
              style={{ "--delay": "0.25s" }}
            >
              Leiðin að karlmennsku
            </h1>
            <p className="podcast-subtitle reveal" style={{ "--delay": "0.4s" }}>
              A podcast about character, confidence, relationships, boundaries, communication and
              personal development.
            </p>
            <div className="page-hero-copy reveal" style={{ "--delay": "0.55s" }}>
              <p>
                I speak directly to the camera about ideas that have helped me understand myself,
                relationships and personal growth more clearly.
              </p>
              <p>
                The goal is simple:
                <br />
                hear an idea, understand it, and be able to use something from it in your own life.
              </p>
            </div>
          </div>
        </section>

        <section className="latest" aria-labelledby="latest-title">
          <div className="section-head">
            <p className="section-label">Episode</p>
            <h2 id="latest-title" className="section-title">
              Latest episode
            </h2>
          </div>

          <div className="work-frame latest-frame" aria-hidden="true">
            <div className="work-still work-still--01" />
            <div className="work-letterbox" />
            <div className="portrait-grain" />
            <span className="work-play latest-play" />
          </div>

          <div className="latest-meta">
            <p className="latest-title">Episode title coming soon</p>
            <div className="latest-actions">
              <ListenButtons />
            </div>
          </div>
        </section>

        <section className="episodes" aria-labelledby="episodes-title">
          <div className="section-head">
            <p className="section-label">Archive</p>
            <h2 id="episodes-title" className="section-title">
              Selected episodes
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
                  <h3 className="episode-title">{episode.title}</h3>
                  <p className="episode-text">Episode description coming soon.</p>
                  <a href={youtubeHref} className="play-btn">
                    <span className="play-btn-icon" aria-hidden="true" />
                    Watch
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story" aria-labelledby="why-title">
          <div className="story-grid">
            <div>
              <p className="section-label">Why</p>
              <h2 id="why-title" className="section-title">
                Why I started the podcast
              </h2>
            </div>
            <div className="story-copy">
              <p>
                I wanted a place to talk openly about the things I had spent years learning about
                myself.
              </p>
              <p className="podcast-topics">
                Confidence.
                <br />
                Relationships.
                <br />
                Boundaries.
                <br />
                Communication.
                <br />
                Character.
              </p>
              <p>Not as someone who has every answer.</p>
              <p className="podcast-closing">
                As someone who has spent a long time trying to understand these things, apply them,
                and keep learning.
              </p>
            </div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="podcast-cta-title">
          <div className="final-cta-inner">
            <h2 id="podcast-cta-title" className="final-cta-title">
              Take one idea and use it.
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
