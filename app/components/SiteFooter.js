import { siteLinks } from "./siteLinks";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="/" className="brand">
          PÁLMI ÞÓR K.
        </a>
        <nav className="footer-nav" aria-label="Footer">
          {siteLinks
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
  );
}
