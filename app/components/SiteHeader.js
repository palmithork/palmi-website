"use client";

import { useLanguage } from "../i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import { siteLinks } from "./siteLinks";

export default function SiteHeader({ current, links = siteLinks }) {
  const { t } = useLanguage();

  const navItems = links.map((link) => (
    <a
      key={link.key}
      href={link.href}
      aria-current={link.href === current ? "page" : undefined}
    >
      {t(link.key)}
    </a>
  ));

  return (
    <header className="site-header">
      <a href="/" className="brand">
        PÁLMI ÞÓR K.
      </a>

      <div className="header-end">
        <nav className="nav-desktop" aria-label={t("common.mainNav")}>
          {navItems}
        </nav>

        <LanguageSwitcher />

        <details className="nav-mobile">
          <summary aria-label={t("common.openMenu")}>
            <span />
            <span />
          </summary>
          <nav aria-label={t("common.mainNav")}>{navItems}</nav>
        </details>
      </div>
    </header>
  );
}
