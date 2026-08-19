import { sectionNavigation, translate } from "@/constants"
import type { Locale, LocalizedText } from "@/constants/types"

type SectionHeaderProps = {
  id: (typeof sectionNavigation)[number]["id"]
  locale: Locale
  title: LocalizedText
  intro?: LocalizedText
}

export default function SectionHeader({ id, locale, title, intro }: SectionHeaderProps) {
  const section = sectionNavigation.find((item) => item.id === id)

  if (!section) return null

  return (
    <header className="section-header">
      <h2 id={`${id}-title`} className="section-title">
        {translate(title, locale)}
      </h2>
      <div className="section-header-meta">
        <p className="section-kicker">
          <span>{section.number}</span>
          <span aria-hidden="true">/</span>
          <span>{translate(section.label, locale)}</span>
        </p>
        {intro ? <p className="section-intro">{translate(intro, locale)}</p> : null}
      </div>
    </header>
  )
}
