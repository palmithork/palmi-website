import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Personal Growth — Pálmi Þór K.",
  description:
    "Practical personal development for men — character, boundaries, communication, confidence and presence.",
};

const pillars = [
  {
    number: "01",
    title: "Character",
    text: "You can deliberately decide who you want to become and work toward developing that person.",
  },
  {
    number: "02",
    title: "Boundaries & Communication",
    text: "Understand what you accept, what you do not accept and what you stand for.",
  },
  {
    number: "03",
    title: "Confidence & Presence",
    text: "Confidence and presence can be developed. The goal is not to become the loudest man in the room. The goal is to stop feeling like you have to disappear inside the room.",
  },
];

export default function PersonalGrowthPage() {
  return (
    <>
      {/* Matches the shared nav link, which still points to the homepage section */}
      <SiteHeader current="/#personal-growth" />

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
              Personal Growth
            </p>
            <h1 className="page-hero-title reveal" style={{ "--delay": "0.25s" }}>
              Build the person you want to become.
            </h1>
            <div className="page-hero-copy reveal" style={{ "--delay": "0.45s" }}>
              <p>I believe we can deliberately change parts of who we are.</p>
              <p className="pg-beliefs">
                Confidence can be developed.
                <br />
                Communication can be learned.
                <br />
                Boundaries can become stronger.
                <br />
                Character can be built intentionally.
              </p>
              <p>
                That idea has had a huge impact on my own life, and it is at the centre of what I
                teach.
              </p>
            </div>
          </div>
        </section>

        <section className="story" aria-labelledby="story-title">
          <div className="story-grid">
            <div>
              <p className="section-label">My story</p>
              <h2 id="story-title" className="section-title">
                I started learning this because I needed it myself.
              </h2>
            </div>
            <div className="story-copy">
              <p>I wanted more confidence.</p>
              <p>I wanted to feel comfortable around other people.</p>
              <p>
                I wanted better relationships, more respect and the ability to say what I actually
                thought instead of constantly questioning myself.
              </p>
              <p>
                What started as an attempt to change my own life turned into years of learning about
                behaviour, communication, relationships, confidence and personal development.
              </p>
            </div>
          </div>

          <blockquote className="statement">
            <p>
              Working on yourself changes more than how you feel about yourself.
              <br />
              <em>It changes how you show up in your entire life.</em>
            </p>
          </blockquote>
        </section>

        <section className="pg-pillars" aria-label="Three pillars">
          {pillars.map((pillar) => (
            <article key={pillar.number} className="pg-pillar">
              <span className="service-number">{pillar.number}</span>
              <h3 className="pg-pillar-title">{pillar.title}</h3>
              <p className="pg-pillar-text">{pillar.text}</p>
            </article>
          ))}
        </section>

        <section id="course" className="course" aria-labelledby="course-title">
          <div className="course-panel">
            <p className="section-label">Course</p>
            <h2 id="course-title" className="course-title">
              Practical personal development for men who want more from themselves.
            </h2>
            <div className="course-copy">
              <p>
                I created this course around the ideas that have had the biggest impact on the way
                I see myself, relationships and personal growth.
              </p>
              <p>
                The focus is not on becoming an “alpha male” or pretending to be somebody you are
                not.
              </p>
              <p className="course-closing">It is about building yourself deliberately.</p>
            </div>
            <a href="/course" className="btn btn--outline course-btn">
              Explore the Course
            </a>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="pg-cta-title">
          <div className="final-cta-inner">
            <h2 id="pg-cta-title" className="final-cta-title">
              Start working on yourself deliberately.
            </h2>
            <div className="final-cta-actions final-cta-actions--single">
              <a href="/contact?interest=personal-growth" className="btn btn--outline">
                Explore Personal Growth
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
