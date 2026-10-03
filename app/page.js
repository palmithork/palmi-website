const navLinks = [
  { label: "Home", href: "/" },
  { label: "Video", href: "#creative-work" },
  { label: "Personal Growth", href: "#personal-growth" },
  { label: "Podcast", href: "/podcast" },
  { label: "Acting", href: "#acting" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const paths = [
  {
    id: "creative-work",
    number: "01",
    title: "Video",
    text: "Video content for businesses — social media, events, ongoing content and more.",
    cta: "Explore Video",
    href: "/video",
  },
  {
    id: "personal-growth",
    number: "02",
    title: "Personal Growth",
    text: "Ideas and practical tools around character, boundaries, communication, confidence and presence.",
    cta: "Explore Personal Growth",
    href: "/personal-growth",
  },
];

const more = [
  {
    id: "podcast",
    label: "Podcast",
    title: "Leiðin að karlmennsku",
    text: "Thoughts on character, confidence, relationships, boundaries and personal development.",
    cta: "Explore Podcast",
    href: "/podcast",
  },
  {
    id: "acting",
    label: "Acting",
    title: "Acting",
    text: "A developing creative path — selected screen work, headshots and future showreel material.",
    cta: "View Acting",
    href: "/acting",
  },
  {
    id: "about",
    label: "About",
    title: "About Pálmi",
    text: "The story behind the different directions I’ve taken, what I’m building and why.",
    cta: "About Me",
    href: "/about",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a href="/" className="brand">
          PÁLMI ÞÓR K.
        </a>

        <nav className="nav-desktop" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <details className="nav-mobile">
          <summary aria-label="Open menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Main">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </details>
      </header>

      <main>
        <section className="hero">
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-glow hero-glow--one" />
            <div className="hero-glow hero-glow--two" />
            <div className="hero-grain" />
            <div className="hero-vignette" />
          </div>

          <div className="hero-inner">
            <div className="hero-content">
              <h1 className="hero-title reveal" style={{ "--delay": "0.1s" }}>
                PÁLMI ÞÓR K.
              </h1>
              <p className="hero-headline reveal" style={{ "--delay": "0.3s" }}>
                Video for businesses.
                <br />
                <em>Personal growth for men.</em>
              </p>
              <p className="hero-copy reveal" style={{ "--delay": "0.45s" }}>
                I create video content for businesses and share what I’ve learned about character,
                boundaries, communication, confidence and presence.
              </p>
              <div className="hero-actions reveal" style={{ "--delay": "0.65s" }}>
                <a href="/contact?interest=video" className="btn btn--outline">
                  Work with me — Video
                </a>
                <a href="/contact?interest=personal-growth" className="btn btn--outline">
                  Work with me — Personal Growth
                </a>
              </div>
            </div>

            <div className="hero-portrait reveal" style={{ "--delay": "0.5s" }} aria-hidden="true">
              <div className="portrait-frame">
                {/* Replace .portrait-placeholder with <img className="portrait-photo" … /> when the photo is ready */}
                <div className="portrait-placeholder">
                  <svg className="portrait-silhouette" viewBox="0 0 400 500" preserveAspectRatio="xMidYMax meet">
                    <path d="M200 92c-44 0-74 36-74 84 0 34 14 62 34 78v26c-62 10-120 40-142 96-8 20-12 70-14 124h392c-2-54-6-104-14-124-22-56-80-86-142-96v-26c20-16 34-44 34-78 0-48-30-84-74-84z" />
                  </svg>
                </div>
                <div className="portrait-light" />
                <div className="portrait-grain" />
                <span className="portrait-corner portrait-corner--tl" />
                <span className="portrait-corner portrait-corner--tr" />
                <span className="portrait-corner portrait-corner--bl" />
                <span className="portrait-corner portrait-corner--br" />
              </div>
            </div>
          </div>

          <div className="scroll-cue" aria-hidden="true">
            <span />
          </div>
        </section>

        <section className="intro" aria-labelledby="intro-title">
          <h2 id="intro-title" className="intro-title">
            I’ve never been just one thing.
          </h2>
          <div className="intro-copy">
            <p>
              My work has taken me in different directions — from creating video for businesses to
              podcasting, acting and studying personal development.
            </p>
            <p>This website brings those parts together.</p>
            <p>
              Some people come here because they need content for their business.
              <br />
              Others come because they want to work on themselves.
            </p>
            <p className="intro-closing">Both are part of what I’m building.</p>
          </div>
        </section>

        <section className="pillars" aria-label="Main paths">
          {paths.map((path) => (
            <article key={path.id} id={path.id} className="pillar">
              <div className={`pillar-visual pillar-visual--${path.number}`} aria-hidden="true" />
              <div className="pillar-body">
                <span className="pillar-number">{path.number}</span>
                <h2 className="pillar-title">{path.title}</h2>
                <p className="pillar-text">{path.text}</p>
                <a href={path.href} className="btn btn--outline pillar-btn">
                  {path.cta}
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="more" aria-label="More from Pálmi">
          {more.map((item) => (
            <article key={item.id} id={item.id} className="more-card">
              <span className="more-label">{item.label}</span>
              <h3 className="more-title">{item.title}</h3>
              <p className="more-text">{item.text}</p>
              <a href={item.href} className="more-cta">
                {item.cta} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </section>

        <section className="final-cta" aria-labelledby="final-cta-title">
          <div className="final-cta-inner">
            <h2 id="final-cta-title" className="final-cta-title">
              Let’s build something.
            </h2>
            <p className="final-cta-text">
              Whether you need video content for your business or want to explore my personal-growth
              work, start here.
            </p>
            <div className="final-cta-actions">
              <a href="/contact?interest=video" className="btn btn--outline">
                Start a Video Project
              </a>
              <a href="/personal-growth" className="btn btn--outline">
                Explore Personal Growth
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a href="/" className="brand">
            PÁLMI ÞÓR K.
          </a>
          <nav className="footer-nav" aria-label="Footer">
            {navLinks
              .filter((link) => link.label !== "Home")
              .map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
          </nav>
        </div>
        <p className="footer-copy">© 2026 Pálmi Þór K.</p>
      </footer>
    </>
  );
}
