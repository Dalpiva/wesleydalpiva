import type { LocalizedText } from "./types"

export const sectionNavigation = [
  {
    id: "profile",
    number: "01",
    label: { en: "Profile", "pt-BR": "Perfil" } satisfies LocalizedText,
  },
  {
    id: "systems",
    number: "02",
    label: { en: "Systems", "pt-BR": "Sistemas" } satisfies LocalizedText,
  },
  {
    id: "experience",
    number: "03",
    label: { en: "Experience", "pt-BR": "Experiência" } satisfies LocalizedText,
  },
  {
    id: "stack",
    number: "04",
    label: { en: "Stack", "pt-BR": "Stack" } satisfies LocalizedText,
  },
  {
    id: "earlier-work",
    number: "05",
    label: { en: "Earlier work", "pt-BR": "Trabalho anterior" } satisfies LocalizedText,
  },
  {
    id: "contact",
    number: "06",
    label: { en: "Contact", "pt-BR": "Contato" } satisfies LocalizedText,
  },
] as const
