import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Video — Pálmi Þór K.",
  description:
    "Video content for businesses — social media, ongoing content, events and drone footage.",
};

const contactHref = "/contact?interest=video";

const services = [
  {
    number: "01",
    title: "Social Media Content",
    text: "Reels, short-form videos and branded content.",
  },
  {
    number: "02",
    title: "Ongoing Content",
    text: "Regular monthly content for businesses.",
  },
  {
    number: "03",
    title: "Events",
    text: "Company events, celebrations and other events.",
  },
  {
    number: "04",
    title: "Drone",
    text: "Drone footage on its own or as part of larger content.",
  },
];

// Placeholders until real project stills and links are ready.
const projects = [
  { number: "01", title: "Vélvörn" },
  { number: "02", title: "Hoobla" },
  { number: "03", title: "Penninn" },
  { number: "04", title: "Future project" },
];

export default function VideoPage() {
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
              Video
            </p>
            <h1 className="page-hero-title reveal" style={{ "--delay": "0.25s" }}>
              Content made for the way businesses communicate today.
            </h1>
            <div className="page-hero-copy reveal" style={{ "--delay": "0.45s" }}>
              <p>
                Not every project needs a huge crew, complicated production or months of planning.
              </p>
              <p>
                I work as a one-man video creator helping businesses produce clean, engaging content
                for social media, events and their online presence.
              </p>
              <p>From filming to editing, I keep the process straightforward.</p>
            </div>
            <div className="reveal" style={{ "--delay": "0.65s" }}>
              <a href={contactHref} className="btn btn--outline page-hero-btn">
                Start a Video Project
              </a>
            </div>
          </div>
        </section>

        <section className="services" aria-labelledby="services-title">
          <div className="section-head">
            <p className="section-label">Services</p>
            <h2 id="services-title" className="section-title">
              What I make
            </h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.number} className="service-card">
                <span className="service-number">{service.number}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-text">{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work" aria-labelledby="work-title">
          <div className="section-head">
            <p className="section-label">Portfolio</p>
            <h2 id="work-title" className="section-title">
              Selected work
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
                  <h3 className="work-title">{project.title}</h3>
                  <span className="work-status">Coming soon</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta" aria-labelledby="video-cta-title">
          <div className="final-cta-inner">
            <h2 id="video-cta-title" className="final-cta-title">
              Need content for your business?
            </h2>
            <div className="final-cta-text">
              <p>Tell me what you are working on and what kind of content you need.</p>
              <p>
                We can start with one project or talk about creating content together regularly.
              </p>
            </div>
            <div className="final-cta-actions final-cta-actions--single">
              <a href={contactHref} className="btn btn--outline">
                Start a Video Project
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
