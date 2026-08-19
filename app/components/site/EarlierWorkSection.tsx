import { earlierWork } from "@/constants/earlier-work"
import { translate, uiCopy } from "@/constants/l10n"
import { site } from "@/constants/site"
import type { Locale } from "@/constants/types"
import { formatDateRange } from "@/app/lib/formatters"
import SectionHeader from "./SectionHeader"

type EarlierWorkSectionProps = {
  locale: Locale
}

export default function EarlierWorkSection({ locale }: EarlierWorkSectionProps) {
  const copy = uiCopy[locale]

  return (
    <section id="earlier-work" className="content-section earlier-section" aria-labelledby="earlier-work-title">
      <SectionHeader
        id="earlier-work"
        locale={locale}
        intro={translate(site.sections.earlierWork.intro, locale)}
      />
      <h2 id="earlier-work-title" className="section-title">
        {translate(site.sections.earlierWork.title, locale)}
      </h2>

      <div className="progression" aria-label={copy.progression}>
        {site.progression.map((step, index) => (
          <div className="progression-step" key={translate(step, locale)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{translate(step, locale)}</strong>
            {index < site.progression.length - 1 ? <span className="progression-arrow" aria-hidden="true">-&gt;</span> : null}
          </div>
        ))}
      </div>

      <div className="earlier-work-list">
        {earlierWork.map((work) => (
          <article className="earlier-work-entry" key={work.id}>
            <div className="earlier-work-meta">
              <time dateTime={work.startDate}>
                {formatDateRange(work.startDate, work.endDate, locale)}
              </time>
              <span className="meta-label">{copy.stack}</span>
              <span>{work.stack.join(" / ")}</span>
            </div>
            <div>
              <h3>{translate(work.title, locale)}</h3>
              <p>{translate(work.description, locale)}</p>
              <ul className="detail-list compact-list">
                {work.highlights.map((highlight) => (
                  <li key={translate(highlight, locale)}>{translate(highlight, locale)}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
