import Image from "next/image"
import { site } from "@/constants/site"
import { translate, uiCopy } from "@/constants/l10n"
import type { Locale } from "@/constants/types"
import { formatYears, fullYearsSince, interpolate } from "@/app/lib/formatters"

type HeroSectionProps = {
  locale: Locale
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const copy = uiCopy[locale]
  const years = formatYears(fullYearsSince(site.professionalExperienceStartDate), locale)
  const summary = interpolate(translate(site.hero.summary, locale), { years })

  return (
    <section id="profile" className="profile-section" aria-labelledby="profile-title">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow">{translate(site.hero.eyebrow, locale)}</p>
          <h1 id="profile-title">{translate(site.hero.title, locale)}</h1>
          <p className="hero-summary">{summary}</p>

          <ul className="hero-keywords" aria-label={copy.technicalFocus}>
            {site.hero.keywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </div>

        <figure className="hero-portrait">
          <div className="portrait-frame">
            <Image
              src={site.profileImage.src}
              alt={copy.profileImageAlt}
              width={site.profileImage.width}
              height={site.profileImage.height}
              priority
              sizes="(max-width: 760px) 82vw, 42vw"
            />
            <span className="portrait-corner portrait-corner-top" aria-hidden="true" />
            <span className="portrait-corner portrait-corner-bottom" aria-hidden="true" />
          </div>
          <figcaption>{copy.profileImageCaption}</figcaption>
        </figure>
      </div>

    </section>
  )
}
