import { activities } from "@/constants/activities"
import { translate } from "@/constants/l10n"
import { site } from "@/constants/site"
import type { Locale } from "@/constants/types"
import SectionHeader from "./SectionHeader"

type ActivitiesSectionProps = {
  locale: Locale
}

export default function ActivitiesSection({ locale }: ActivitiesSectionProps) {
  return (
    <section id="additional" className="content-section activities-section" aria-labelledby="additional-title">
      <SectionHeader
        id="additional"
        locale={locale}
        title={site.sections.additional.title}
        intro={site.sections.additional.intro}
      />

      <div className="activities-list">
        {activities.map((activity) => (
          <article className="activity-entry" key={activity.id}>
            <p className="activity-result">{translate(activity.result, locale)}</p>
            <div>
              <h3>{translate(activity.title, locale)}</h3>
              <p>{translate(activity.description, locale)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
