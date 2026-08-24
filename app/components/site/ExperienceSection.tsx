import { experience } from "@/constants/experience"
import { translate, uiCopy } from "@/constants/l10n"
import { site } from "@/constants/site"
import type { Locale } from "@/constants/types"
import { formatDateRange } from "@/app/lib/formatters"
import SectionHeader from "./SectionHeader"

type ExperienceSectionProps = {
  locale: Locale
}

export default function ExperienceSection({ locale }: ExperienceSectionProps) {
  const copy = uiCopy[locale]

  return (
    <section id="experience" className="content-section experience-section" aria-labelledby="experience-title">
      <SectionHeader
        id="experience"
        locale={locale}
        title={site.sections.experience.title}
        intro={site.sections.experience.intro}
      />

      <div className="experience-list">
        {experience.map((entry) => (
          <article className="experience-entry" key={entry.id}>
            <div className="experience-entry-heading">
              <h3>{translate(entry.organization, locale)}</h3>
              <p>{translate(entry.location, locale)}</p>
            </div>

            <div className="role-list">
              {entry.roles.map((role) => (
                <div className="role-item" key={`${entry.id}-${role.startDate}`}>
                  <div className="role-meta">
                    <time dateTime={role.startDate}>
                      {formatDateRange(role.startDate, role.endDate, locale)}
                    </time>
                    {role.endDate === null ? (
                      <span className="current-label">
                        <span className="status-dot" aria-hidden="true" />
                        {copy.current}
                      </span>
                    ) : null}
                  </div>
                  <div className="role-content">
                    <h4>{translate(role.title, locale)}</h4>
                    {"summary" in role && role.summary ? (
                      <p className="role-summary">{translate(role.summary, locale)}</p>
                    ) : null}
                    <ul className="detail-list">
                      {role.highlights.map((highlight) => (
                        <li key={translate(highlight, locale)}>{translate(highlight, locale)}</li>
                      ))}
                    </ul>
                    <p className="tech-line">
                      <span>{copy.stack}:</span> {role.stack.join(" / ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
