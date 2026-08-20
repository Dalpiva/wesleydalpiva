import type { LocalizedText } from "./types"

export const site = {
  name: "Wesley Dalpiva",
  url: "https://wesleydalpiva.com",
  defaultLocale: "en" as const,
  contentLastUpdated: "2026-08-19",
  professionalExperienceStartDate: "2022-08-01",
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
      en: "Backend systems / architecture to production",
      "pt-BR": "Sistemas backend / da arquitetura à produção",
    } satisfies LocalizedText,
    title: {
      en: "Backend Software Engineer",
      "pt-BR": "Engenheiro de Software Backend",
    } satisfies LocalizedText,
    summary: {
      en: "I build and own backend systems from architecture through production. {years} years working across healthcare, sports, smart cities and enterprise software.",
      "pt-BR": "Construo e assumo a responsabilidade por sistemas backend, da arquitetura à produção. {years} anos trabalhando com saúde, esportes, cidades inteligentes e software corporativo.",
    } satisfies LocalizedText,
    keywords: ["PYTHON", "APIs", "DATABASES", "CLOUD"],
  },
  sections: {
    experience: {
      title: {
        en: "Ownership is the through-line.",
        "pt-BR": "Responsabilidade é o fio condutor.",
      } satisfies LocalizedText,
      intro: {
        en: "From requirements and architecture to deployment and maintenance, the work stays close to the system's full lifecycle.",
        "pt-BR": "De requisitos e arquitetura até deploy e manutenção, o trabalho acompanha todo o ciclo de vida do sistema.",
      } satisfies LocalizedText,
    },
    systems: {
      title: {
        en: "Systems by domain and impact.",
        "pt-BR": "Sistemas por domínio e impacto.",
      } satisfies LocalizedText,
      intro: {
        en: "Selected production projects presented through the problem, domain and technical responsibility while preserving confidential information.",
        "pt-BR": "Projetos selecionados em produção, apresentados pelo problema, domínio e responsabilidade técnica, preservando informações confidenciais.",
      } satisfies LocalizedText,
    },
    stack: {
      title: {
        en: "The tools follow the problem.",
        "pt-BR": "As ferramentas seguem o problema.",
      } satisfies LocalizedText,
      intro: {
        en: "Backend engineering is the center of gravity. The rest supports the systems around it.",
        "pt-BR": "Engenharia backend é o centro de gravidade. O restante dá suporte aos sistemas ao redor.",
      } satisfies LocalizedText,
    },
    contact: {
      title: {
        en: "Have a system to build?",
        "pt-BR": "Tem um sistema para construir?",
      } satisfies LocalizedText,
      intro: {
        en: "For backend engineering, architecture, production systems or a good technical conversation:",
        "pt-BR": "Para engenharia backend, arquitetura, sistemas de produção ou uma boa conversa técnica:",
      } satisfies LocalizedText,
    },
  },
} as const
