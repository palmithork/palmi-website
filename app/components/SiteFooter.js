"use client";

import { useLanguage } from "../i18n/LanguageProvider";
import { siteLinks } from "./siteLinks";

export default function SiteFooter({ links = siteLinks }) {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="/" className="brand">
          PÁLMI ÞÓR K.
        </a>
        <nav className="footer-nav" aria-label={t("common.footerNav")}>
          {links
            .filter((link) => link.key !== "nav.home")
            .map((link) => (
              <a key={link.key} href={link.href}>
                {t(link.key)}
              </a>
            ))}
        </nav>
      </div>
      <p className="footer-copy">{t("common.copyright")}</p>
    </footer>
  );
}
