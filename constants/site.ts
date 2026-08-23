import type { LocalizedText } from "./types"

export const site = {
  name: "Wesley Dalpiva",
  url: "https://wesleydalpiva.com",
  defaultLocale: "en" as const,
  contentLastUpdated: "2026-08-21",
  professionalExperienceStartDate: "2021-08-01",
  profileImage: {
    src: "/perfil.png",
    width: 1254,
    height: 1254,
  },
  role: {
    en: "Backend Software Engineer",
    "pt-BR": "Engenheiro de Software Backend",
  } satisfies LocalizedText,
  hero: {
    eyebrow: {
      en: "Python backend / architecture to production",
      "pt-BR": "Backend Python / da arquitetura à produção",
    } satisfies LocalizedText,
    title: {
      en: "Backend Software Engineer",
      "pt-BR": "Engenheiro de Software Backend",
    } satisfies LocalizedText,
    summary: {
      en: "I build Python backend systems from architecture to production. {years} across healthcare, sports, smart cities and enterprise software, with 5 greenfield products delivered alongside clients.",
      "pt-BR":
        "Construo sistemas backend em Python da arquitetura à produção. {years} anos de experiência em saúde, esportes, cidades inteligentes e software corporativo. 5 produtos desenvolvidos do zero em parceria com clientes.",
    } satisfies LocalizedText,
    keywords: ["PYTHON", "FLASK", "APIs", "GCP"],
  },
  sections: {
    experience: {
      title: {
        en: "Backend ownership, measurable outcomes.",
        "pt-BR": "Responsabilidade backend, impacto mensurável.",
      } satisfies LocalizedText,
      intro: {
        en: "I take systems from ambiguous requirements to tested APIs, cloud deployment and long-term operation.",
        "pt-BR":
          "Levo sistemas de requisitos ambíguos a APIs testadas, deploy em cloud e operação contínua.",
      } satisfies LocalizedText,
    },
    systems: {
      title: {
        en: "Recent systems, real constraints.",
        "pt-BR": "Sistemas recentes, restrições reais.",
      } satisfies LocalizedText,
      intro: {
        en: "Three recent products presented through the problem, scale and technical responsibility while preserving confidential information.",
        "pt-BR":
          "Três produtos recentes apresentados pelo problema, escala e responsabilidade técnica, preservando informações confidenciais.",
      } satisfies LocalizedText,
    },
    stack: {
      title: {
        en: "The backend is the center of gravity.",
        "pt-BR": "Backend é o centro de gravidade.",
      } satisfies LocalizedText,
      intro: {
        en: "The stack reflects the work that takes Python services from API design to reliable production delivery.",
        "pt-BR":
          "A stack reflete o trabalho que leva serviços Python do design de APIs a uma entrega confiável em produção.",
      } satisfies LocalizedText,
    },
    additional: {
      title: {
        en: "Beyond the production backlog.",
        "pt-BR": "Além do backlog de produção.",
      } satisfies LocalizedText,
      intro: {
        en: "Hands-on engineering outside day-to-day product delivery.",
        "pt-BR": "Engenharia prática além da entrega diária de produtos.",
      } satisfies LocalizedText,
    },
    contact: {
      title: {
        en: "Open to backend opportunities.",
        "pt-BR": "Aberto a oportunidades backend.",
      } satisfies LocalizedText,
      intro: {
        en: "For Python backend engineering, APIs, architecture, production systems or a good technical conversation:",
        "pt-BR":
          "Para engenharia backend em Python, APIs, arquitetura, sistemas de produção ou uma boa conversa técnica:",
      } satisfies LocalizedText,
    },
  },
} as const
