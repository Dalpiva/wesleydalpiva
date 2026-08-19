import { localeLabels, sectionNavigation, translate, uiCopy } from "@/constants"
import { site } from "@/constants/site"
import type { Locale } from "@/constants/types"
import CommandPalette from "./CommandPalette"

type SiteHeaderProps = {
  locale: Locale
}

function NavigationLinks({ locale }: SiteHeaderProps) {
  return (
    <>
      {sectionNavigation.map((section) => (
        <a key={section.id} href={`#${section.id}`}>
          {translate(section.label, locale)}
        </a>
      ))}
    </>
  )
}

export default function SiteHeader({ locale }: SiteHeaderProps) {
  const copy = uiCopy[locale]
  const alternateLocale: Locale = locale === "en" ? "pt-BR" : "en"
  const homeHref = locale === "en" ? "/" : "/pt"
  const alternateHref = alternateLocale === "en" ? "/" : "/pt"

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-mark" href={homeHref} aria-label={`${site.name} - ${translate(site.role, locale)}`}>
          <span className="site-mark-signal" aria-hidden="true">+</span>
          <span>{site.name.toUpperCase()}</span>
        </a>

        <nav className="desktop-navigation" aria-label={copy.navigation}>
          <NavigationLinks locale={locale} />
        </nav>

        <div className="header-actions">
          <span className="availability-label">
            <span className="status-dot" aria-hidden="true" />
            {copy.available}
          </span>
          <a className="language-switch" href={alternateHref} aria-label={`${copy.language}: ${localeLabels[alternateLocale]}`}>
            {localeLabels[locale]} / {localeLabels[alternateLocale]}
          </a>
          <CommandPalette locale={locale} />
        </div>

        <details className="mobile-navigation">
          <summary>
            <span>{copy.menu}</span>
            <span aria-hidden="true">+</span>
          </summary>
          <nav aria-label={copy.navigation}>
            <NavigationLinks locale={locale} />
            <a href={alternateHref}>{localeLabels[alternateLocale]}</a>
          </nav>
        </details>
      </div>
    </header>
  )
}
