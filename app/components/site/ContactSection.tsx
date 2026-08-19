import { contact } from "@/constants/contact"
import { translate, uiCopy } from "@/constants/l10n"
import { site } from "@/constants/site"
import type { Locale } from "@/constants/types"
import SectionHeader from "./SectionHeader"

type ContactSectionProps = {
  locale: Locale
}

export default function ContactSection({ locale }: ContactSectionProps) {
  const copy = uiCopy[locale]
  const currentYear = new Date().getFullYear()

  return (
    <section id="contact" className="content-section contact-section" aria-labelledby="contact-title">
      <SectionHeader
        id="contact"
        locale={locale}
        intro={translate(site.sections.contact.intro, locale)}
      />
      <h2 id="contact-title" className="section-title">
        {translate(site.sections.contact.title, locale)}
      </h2>

      <div className="contact-layout">
        <a className="email-link" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <p className="availability-note">
          <span className="status-dot" aria-hidden="true" />
          {copy.openToOpportunities}
        </p>
      </div>

      <div className="contact-links">
        {contact.links.map((link) => (
          <a key={link.id} href={link.href} target="_blank" rel="noreferrer">
            <span>{translate(link.label, locale)}</span>
            <span aria-hidden="true">-&gt;</span>
          </a>
        ))}
        <a href={contact.resume.href} download={contact.resume.downloadName}>
          <span>{translate(contact.resume.label, locale)}</span>
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>

      <footer className="site-footer">
        <span>{site.name.toUpperCase()}</span>
        <span>{copy.footerNote}</span>
        <span>{currentYear} / {copy.rights}</span>
      </footer>
    </section>
  )
}
