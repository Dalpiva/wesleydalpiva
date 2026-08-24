import { systems } from "@/constants/systems"
import { translate, uiCopy } from "@/constants/l10n"
import { site } from "@/constants/site"
import type { Locale } from "@/constants/types"
import SectionHeader from "./SectionHeader"

type SystemsSectionProps = {
  locale: Locale
}

export default function SystemsSection({ locale }: SystemsSectionProps) {
  const copy = uiCopy[locale]

  return (
    <section id="systems" className="content-section systems-section" aria-labelledby="systems-title">
      <SectionHeader
        id="systems"
        locale={locale}
        title={site.sections.systems.title}
        intro={site.sections.systems.intro}
      />

      <div className="systems-list">
        {systems.map((system) => (
          <article className="system-entry" key={system.id}>
            <div className="system-number">{system.number}</div>
            <div className="system-content">
              <p className="system-domain">{translate(system.domain, locale)}</p>
              <h3>{translate(system.name, locale)}</h3>
              <p className="system-description">{translate(system.description, locale)}</p>

              <div className="system-metadata">
                <div className="system-meta-block system-scale">
                  <p className="meta-label">{copy.scale}</p>
                  <dl>
                    {system.scale.map((metric) => (
                      <div key={`${metric.value}-${translate(metric.label, locale)}`}>
                        <dt>{metric.value}</dt>
                        <dd>{translate(metric.label, locale)}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="system-meta-block">
                  <p className="meta-label">{copy.role}</p>
                  <p>{translate(system.role, locale)}</p>
                </div>

                <div className="system-meta-block">
                  <p className="meta-label">{copy.stack}</p>
                  <p className="system-stack">{system.stack.join(" / ")}</p>
                </div>
              </div>

              <div className="system-responsibilities">
                <p className="meta-label">{copy.responsibilities}</p>
                <ul className="detail-list">
                  {system.responsibilities.map((responsibility) => (
                    <li key={translate(responsibility, locale)}>{translate(responsibility, locale)}</li>
                  ))}
                </ul>
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
