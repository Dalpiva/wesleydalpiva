export type Locale = "en" | "pt-BR"

export type Localized<T> = {
  readonly en: T
  readonly "pt-BR": T
}

export type LocalizedText = Localized<string>

export type DateRange = {
  readonly startDate: string
  readonly endDate?: string | null
}

export type ExperienceRole = DateRange & {
  readonly title: LocalizedText
  readonly summary?: LocalizedText
  readonly highlights: readonly LocalizedText[]
  readonly stack: readonly string[]
}

export type ExperienceEntry = {
  readonly id: string
  readonly organization: LocalizedText
  readonly location: LocalizedText
  readonly roles: readonly ExperienceRole[]
}

export type Metric = {
  readonly value: string
  readonly label: LocalizedText
}

export type System = {
  readonly id: string
  readonly number: string
  readonly name: LocalizedText
  readonly domain: LocalizedText
  readonly description: LocalizedText
  readonly scale: readonly Metric[]
  readonly role: LocalizedText
  readonly stack: readonly string[]
  readonly responsibilities: readonly LocalizedText[]
}

export type StackGroup = {
  readonly id: string
  readonly marker: string
  readonly label: LocalizedText
  readonly description: LocalizedText
  readonly priority: "primary" | "secondary"
  readonly items: readonly string[]
}

export type Activity = {
  readonly id: string
  readonly title: LocalizedText
  readonly result: LocalizedText
  readonly description: LocalizedText
}
