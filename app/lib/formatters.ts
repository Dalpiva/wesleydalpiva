import { uiCopy } from "@/constants/l10n"
import type { Locale } from "@/constants/types"

const dateLocales: Record<Locale, string> = {
  en: "en-US",
  "pt-BR": "pt-BR",
}

export function formatMonthYear(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(dateLocales[locale], {
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00Z`))
}

export function formatDateRange(startDate: string, endDate: string | null | undefined, locale: Locale) {
  const end = endDate ? formatMonthYear(endDate, locale) : uiCopy[locale].present
  return `${formatMonthYear(startDate, locale)} - ${end}`
}

export function fullYearsSince(startDate: string, now = new Date()) {
  const start = new Date(`${startDate}T12:00:00Z`)
  let years = now.getUTCFullYear() - start.getUTCFullYear()

  const anniversary = new Date(Date.UTC(now.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()))
  if (now < anniversary) years -= 1

  return Math.max(0, years)
}

export function formatYears(years: number, locale: Locale) {
  return `${years} ${years === 1 ? uiCopy[locale].year : uiCopy[locale].years}`
}

export function interpolate(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""))
}
