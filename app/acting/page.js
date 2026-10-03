import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Acting — Pálmi Þór K.",
  description: "Acting — selected screen work, headshots and showreel material.",
};

const headshots = ["01", "02", "03", "04"];

export default function ActingPage() {
  return (
    <>
      {/* Matches the shared nav link, which still points to the homepage section */}
      <SiteHeader current="/#acting" />

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
              Acting
            </h1>
            <div className="page-hero-copy reveal" style={{ "--delay": "0.4s" }}>
              <p>Acting is a developing creative path for me.</p>
              <p>
                I’ve worked as an extra, done on-camera work, taken acting classes and received a
                speaking role in a television project in 2026.
              </p>
              <p>
                Coming back to acting is also part of challenging myself to be seen, perform and get
                more comfortable in front of the camera.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section" aria-labelledby="selected-title">
          <div className="section-head">
            <p className="section-label">Screen</p>
            <h2 id="selected-title" className="section-title">
              Selected work
            </h2>
          </div>

          <article className="featured-work">
            <div className="work-frame" aria-hidden="true">
              <div className="work-still work-still--02" />
              <div className="work-letterbox" />
              <div className="portrait-grain" />
            </div>
            <div className="featured-work-body">
              <h3 className="featured-work-title">Signal</h3>
              <p className="featured-work-meta">Television project · 2026</p>
              <p className="featured-work-text">
                Selected screen work and production material will be added here as it becomes
                available.
              </p>
            </div>
          </article>
        </section>

        <section className="page-section" aria-labelledby="headshots-title">
          <div className="section-head">
            <p className="section-label">Portraits</p>
            <h2 id="headshots-title" className="section-title">
              Headshots
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
            <p className="section-label">Clips</p>
            <h2 id="showreel-title" className="section-title">
              Showreel
            </h2>
          </div>

          <div className="work-frame latest-frame" aria-hidden="true">
            <div className="work-still work-still--04" />
            <div className="work-letterbox" />
            <div className="portrait-grain" />
            <span className="work-play latest-play" />
          </div>
          <p className="showreel-text">Showreel and selected acting clips will be added here.</p>
        </section>

        <section className="final-cta" aria-labelledby="acting-cta-title">
          <div className="final-cta-inner">
            <h2 id="acting-cta-title" className="final-cta-title">
              Casting or acting enquiry?
            </h2>
            <div className="final-cta-actions final-cta-actions--single">
              <a href="/contact?interest=acting" className="btn btn--outline">
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
