import type { LocalizedText } from "./types"

export const contact = {
  email: "wesleydalpiva@gmail.com",
  links: [
    {
      id: "linkedin",
      label: { en: "LinkedIn", "pt-BR": "LinkedIn" } satisfies LocalizedText,
      href: "https://www.linkedin.com/in/wesley-dalpiva",
    },
    {
      id: "github",
      label: { en: "GitHub", "pt-BR": "GitHub" } satisfies LocalizedText,
      href: "https://github.com/Dalpiva",
    },
  ],
  resume: {
    label: { en: "Resume", "pt-BR": "Currículo" } satisfies LocalizedText,
    href: "/cv_wesley_dalpiva.pdf",
    downloadName: "cv_wesley_dalpiva.pdf",
  },
} as const
