import { contact } from "@/constants/contact"
import { translate, uiCopy } from "@/constants/l10n"
import { site } from "@/constants/site"
import type { Locale } from "@/constants/types"
import { formatYears, fullYearsSince, interpolate } from "@/app/lib/formatters"
import ContactSection from "./ContactSection"
import EarlierWorkSection from "./EarlierWorkSection"
import ExperienceSection from "./ExperienceSection"
import HeroSection from "./HeroSection"
import SiteHeader from "./SiteHeader"
import StackSection from "./StackSection"
import SystemsSection from "./SystemsSection"

type PortfolioPageProps = {
  locale: Locale
}

export default function PortfolioPage({ locale }: PortfolioPageProps) {
  const years = formatYears(fullYearsSince(site.professionalExperienceStartDate), locale)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: translate(site.role, locale),
    url: site.url,
    image: `${site.url}${site.profileImage.src}`,
    email: `mailto:${contact.email}`,
    sameAs: contact.links.map((link) => link.href),
    description: interpolate(translate(site.hero.summary, locale), { years }),
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        {uiCopy[locale].skipToContent}
      </a>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <HeroSection locale={locale} />
        <SystemsSection locale={locale} />
        <ExperienceSection locale={locale} />
        <StackSection locale={locale} />
        <EarlierWorkSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  )
}
