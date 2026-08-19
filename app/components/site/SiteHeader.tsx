import { ChevronDown, ChevronUp } from "lucide-react"
import { localeLabels, localeNames, sectionNavigation, supportedLocales, translate, uiCopy } from "@/constants"
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
  const homeHref = locale === "en" ? "/" : "/pt"

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
          <details className="language-dropdown">
            <summary aria-label={`${copy.language}: ${localeNames[locale]}`}>
              <span>{localeNames[locale]}</span>
              <ChevronDown className="language-icon language-icon-down" size={14} strokeWidth={1.75} aria-hidden="true" />
              <ChevronUp className="language-icon language-icon-up" size={14} strokeWidth={1.75} aria-hidden="true" />
            </summary>
            <div className="language-options">
              {supportedLocales.map((option) => {
                const isSelected = option === locale
                const optionClassName = `language-option${isSelected ? " is-selected" : ""}`
                const optionContent = (
                  <>
                    <span>{localeNames[option]}</span>
                    <span className="language-option-code">{localeLabels[option]}</span>
                  </>
                )

                return isSelected ? (
                  <span className={optionClassName} aria-current="page" key={option}>
                    {optionContent}
                  </span>
                ) : (
                  <a className={optionClassName} href={option === "en" ? "/" : "/pt"} key={option}>
                    {optionContent}
                  </a>
                )
              })}
            </div>
          </details>
          <CommandPalette locale={locale} />
        </div>

        <details className="mobile-navigation">
          <summary>
            <span>{copy.menu}</span>
            <span aria-hidden="true">+</span>
          </summary>
          <nav aria-label={copy.navigation}>
            <NavigationLinks locale={locale} />
          </nav>
        </details>
      </div>
    </header>
  )
}
