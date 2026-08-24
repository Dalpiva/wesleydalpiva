# Wesley Dalpiva - Personal Website

Personal website for Wesley Dalpiva, a Backend Software Engineer focused on Python, APIs, databases, cloud infrastructure and production systems.

## Routes

- `/` - English, default language
- `/pt` - Portuguese

The language versions are rendered on the server and share the same content model.

## Content maintenance

Public content lives in `constants/`:

- `site.ts` - identity, hero copy, profile facts and section introductions
- `experience.ts` - roles, dates, responsibilities and technologies
- `systems.ts` - selected systems, verified metrics and scope of contribution
- `stack.ts` - technical stack grouped by priority
- `activities.ts` - robotics activities shown on the site only
- `contact.ts` - public links and resume filename
- `l10n.ts` - interface labels and translations

Dates are stored as ISO values. Current roles use `endDate: null`, and durations are formatted during rendering so time-sensitive copy does not need to be duplicated in components.

## Commands

`Ctrl + K` opens the optional command palette. The conventional navigation remains the primary way to access the site.

## Public assets

- `public/perfil.png` - profile image used in the hero
- `public/cv_wesley_dalpiva.pdf` - downloadable resume
