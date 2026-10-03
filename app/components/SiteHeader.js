import { siteLinks } from "./siteLinks";

export default function SiteHeader({ current }) {
  const links = siteLinks.map((link) => (
    <a
      key={link.label}
      href={link.href}
      aria-current={link.href === current ? "page" : undefined}
    >
      {link.label}
    </a>
  ));

  return (
    <header className="site-header">
      <a href="/" className="brand">
        PÁLMI ÞÓR K.
      </a>

      <nav className="nav-desktop" aria-label="Main">
        {links}
      </nav>

      <details className="nav-mobile">
        <summary aria-label="Open menu">
          <span />
          <span />
        </summary>
        <nav aria-label="Main">{links}</nav>
      </details>
    </header>
  );
}
