import type { Locale, Localized } from "./types"

export const defaultLocale: Locale = "en"

export const supportedLocales = ["en", "pt-BR"] as const

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  "pt-BR": "PT",
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  "pt-BR": "Português",
}

export const uiCopy = {
  en: {
    skipToContent: "Skip to content",
    navigation: "Main navigation",
    menu: "Menu",
    close: "Close",
    language: "Language",
    openToOpportunities: "Open to opportunities",
    current: "Current",
    domain: "Domain",
    scale: "Scale",
    role: "Role",
    stack: "Stack",
    responsibilities: "Responsibilities",
    primaryFocus: "Primary focus",
    supportingSkills: "Supporting skills",
    sendEmail: "Send an email",
    downloadResume: "Download resume",
    commandEyebrow: "CTRL K / NAVIGATE",
    commandTitle: "Navigate the profile",
    commandPlaceholder: "Search a section",
    noResults: "No sections found",
    closeCommandPalette: "Close command palette",
    technicalFocus: "Technical focus",
    profileImageAlt: "Wesley Dalpiva, Backend Software Engineer",
    profileImageCaption: "Wesley Dalpiva / Backend Software Engineer",
    footerNote: "From ambiguous requirements to production.",
    years: "years",
    year: "year",
    present: "Present",
  },
  "pt-BR": {
    skipToContent: "Ir para o conteúdo",
    navigation: "Navegação principal",
    menu: "Menu",
    close: "Fechar",
    language: "Idioma",
    openToOpportunities: "Aberto a oportunidades",
    current: "Atual",
    domain: "Domínio",
    scale: "Escala",
    role: "Papel",
    stack: "Stack",
    responsibilities: "Responsabilidades",
    primaryFocus: "Foco principal",
    supportingSkills: "Tecnologias de apoio",
    sendEmail: "Enviar um email",
    downloadResume: "Baixar currículo",
    commandEyebrow: "CTRL K / NAVEGAR",
    commandTitle: "Navegar pelo perfil",
    commandPlaceholder: "Buscar uma seção",
    noResults: "Nenhuma seção encontrada",
    closeCommandPalette: "Fechar paleta de comandos",
    technicalFocus: "Foco técnico",
    profileImageAlt: "Wesley Dalpiva, Engenheiro de Software Backend",
    profileImageCaption: "Wesley Dalpiva / Engenheiro de Software Backend",
    footerNote: "De requisitos ambíguos à produção.",
    years: "anos",
    year: "ano",
    present: "Presente",
  },
} as const satisfies Record<Locale, Record<string, string>>

export function translate<T>(value: Localized<T>, locale: Locale): T {
  return value[locale]
}
