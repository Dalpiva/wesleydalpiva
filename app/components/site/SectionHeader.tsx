import { sectionNavigation, translate } from "@/constants"
import type { Locale } from "@/constants/types"

type SectionHeaderProps = {
  id: (typeof sectionNavigation)[number]["id"]
  locale: Locale
  intro?: string
}

export default function SectionHeader({ id, locale, intro }: SectionHeaderProps) {
  const section = sectionNavigation.find((item) => item.id === id)

  if (!section) return null

  return (
    <header className="section-header">
      <p className="section-kicker">
        <span>{section.number}</span>
        <span aria-hidden="true">/</span>
        <span>{translate(section.label, locale)}</span>
      </p>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  )
}
