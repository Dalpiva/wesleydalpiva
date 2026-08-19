import { stackGroups } from "@/constants/stack"
import { translate } from "@/constants/l10n"
import { site } from "@/constants/site"
import type { Locale } from "@/constants/types"
import SectionHeader from "./SectionHeader"

type StackSectionProps = {
  locale: Locale
}

export default function StackSection({ locale }: StackSectionProps) {
  return (
    <section id="stack" className="content-section stack-section" aria-labelledby="stack-title">
      <SectionHeader
        id="stack"
        locale={locale}
        title={site.sections.stack.title}
        intro={site.sections.stack.intro}
      />

      <div className="stack-list">
        {stackGroups.map((group) => (
          <article className={`stack-group stack-group-${group.priority}`} key={group.id}>
            <div className="stack-group-heading">
              <p className="meta-label">{group.priority === "primary" ? "01" : "02"}</p>
              <h3>{translate(group.label, locale)}</h3>
            </div>
            <div>
              <p className="stack-description">{translate(group.description, locale)}</p>
              <ul className="stack-items">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
