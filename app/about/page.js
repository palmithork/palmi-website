import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "About — Pálmi Þór K.",
  description:
    "About Pálmi Þór Kristinsson — the different directions he has taken, what he is building and why.",
};

const intro = [
  "My name is Pálmi Þór Kristinsson.",
  "I’m naturally curious about people.",
  "I like deep conversations, humour, films, psychology and understanding what makes people behave the way they do.",
  "I also have a big imagination.",
  "I’ve often found myself looking at something and thinking about what it could become rather than simply accepting it exactly as it is.",
  "That way of thinking eventually started applying to myself too.",
];

// Blocks: a string is a paragraph, { list } is a set of short lines,
// { emphasis } is a paragraph that should stand out.
const chapters = [
  {
    number: "01",
    label: "My path",
    title: "I didn’t follow one straight path.",
    blocks: [
      "Before the work I do today, I tried a lot of different directions.",
      "I worked practical jobs, worked on fishing boats and tried different ideas and projects while figuring out what I actually wanted to do.",
      "For a long time, I struggled with confidence and understanding where I fit.",
      "I wanted to become someone who felt comfortable around other people.",
      "Someone who could speak his mind.",
      "Someone who respected himself and could build the life and relationships he actually wanted.",
      { emphasis: "So I started learning." },
    ],
  },
  {
    number: "02",
    label: "Turning point",
    title: "One idea changed a lot for me.",
    blocks: [
      "At some point I realised that I didn’t have to treat my personality or my life as something completely fixed.",
      "There were things about myself that I could work on.",
      {
        list: [
          "I could learn to communicate better.",
          "I could become more confident.",
          "I could develop social skills.",
          "I could build stronger boundaries.",
        ],
      },
      {
        emphasis:
          "I could choose what kind of man I wanted to become and then actually work toward becoming him.",
      },
    ],
  },
  {
    number: "03",
    label: "Learning",
    title: "Learning became part of my life.",
    blocks: [
      "At first, the reasons were personal.",
      {
        list: [
          "I wanted confidence.",
          "I wanted respect.",
          "I wanted better relationships.",
          "I wanted to feel comfortable walking into a room rather than immediately wondering what everyone else thought of me.",
        ],
      },
      "But the more I learned, the more interesting the subject itself became.",
      "Personal development stopped being only about fixing something I disliked.",
      {
        emphasis:
          "It became about discovering how much of ourselves we can deliberately develop.",
      },
    ],
  },
  {
    number: "04",
    label: "Today",
    title: "Where I am today.",
    blocks: [
      "Today, I work independently creating video content for businesses.",
      "I host a podcast about personal growth.",
      "I have created my first course around ideas I have spent years learning.",
      "And I continue exploring acting, filmmaking and other creative work.",
      "I am still working on things in myself.",
      "I do not have every answer.",
      "And I do not want to pretend that I do.",
      "What I can do is share what I have learned, what has helped me and what I am continuing to figure out.",
      {
        emphasis:
          "That feels more useful than pretending I have reached some final version of myself.",
      },
    ],
  },
];

const values = [
  {
    number: "01",
    title: "Keep Developing",
    text: "You do not have to stay exactly as you are.",
  },
  {
    number: "02",
    title: "Be Clear About Who You Are",
    text: "Know what you stand for and learn to communicate it.",
  },
  {
    number: "03",
    title: "Don’t Hide Forever",
    text: "Growth often requires being willing to be seen before you feel completely ready.",
  },
  {
    number: "04",
    title: "Stay Curious",
    text: "There is always more to understand about yourself, people and the world.",
  },
];

function Block({ block }) {
  if (typeof block === "string") return <p>{block}</p>;

  if (block.list) {
    return (
      <p className="about-list">
        {block.list.map((line, i) => (
          <span key={line}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </p>
    );
  }

  return <p className="about-emphasis">{block.emphasis}</p>;
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader current="/about" />

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
              About
            </p>
            <h1
              className="page-hero-title page-hero-title--long reveal"
              style={{ "--delay": "0.25s" }}
            >
              I’ve spent a lot of my life trying to understand who I could become.
            </h1>
            <div className="page-hero-copy reveal" style={{ "--delay": "0.45s" }}>
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <div className="chapters">
          {chapters.map((chapter) => (
            <section
              key={chapter.number}
              className="chapter story-grid"
              aria-labelledby={`chapter-${chapter.number}`}
            >
              <div className="chapter-head">
                <p className="section-label">
                  {chapter.number} · {chapter.label}
                </p>
                <h2 id={`chapter-${chapter.number}`} className="section-title">
                  {chapter.title}
                </h2>
              </div>
              <div className="story-copy chapter-copy">
                {chapter.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="values" aria-labelledby="values-title">
          <div className="section-head">
            <p className="section-label">Values</p>
            <h2 id="values-title" className="section-title">
              What I try to live by
            </h2>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <article key={value.number} className="pg-pillar">
                <span className="service-number">{value.number}</span>
                <h3 className="value-title">{value.title}</h3>
                <p className="pg-pillar-text">{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta" aria-labelledby="about-cta-title">
          <div className="final-cta-inner">
            <h2 id="about-cta-title" className="final-cta-title">
              This is what I’m building.
            </h2>
            <div className="final-cta-actions">
              <a href="/video" className="btn btn--outline">
                Explore Video
              </a>
              <a href="/personal-growth" className="btn btn--outline">
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
