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
    facts: [
      {
        label: { en: "STATUS", "pt-BR": "STATUS" } satisfies LocalizedText,
        value: { en: "AVAILABLE", "pt-BR": "DISPONÍVEL" } satisfies LocalizedText,
      },
      {
        label: { en: "FOCUS", "pt-BR": "FOCO" } satisfies LocalizedText,
        value: { en: "BACKEND SYSTEMS", "pt-BR": "SISTEMAS BACKEND" } satisfies LocalizedText,
      },
      {
        label: { en: "LOCATION", "pt-BR": "LOCALIZAÇÃO" } satisfies LocalizedText,
        value: { en: "BRAZIL", "pt-BR": "BRASIL" } satisfies LocalizedText,
      },
    ],
  },
  progression: [
    { en: "Embedded", "pt-BR": "Embarcados" } satisfies LocalizedText,
    { en: "Biomedical systems", "pt-BR": "Sistemas biomédicos" } satisfies LocalizedText,
    { en: "Software engineering", "pt-BR": "Engenharia de software" } satisfies LocalizedText,
    { en: "Backend engineering", "pt-BR": "Engenharia backend" } satisfies LocalizedText,
  ],
  about: {
    title: {
      en: "Engineering with ownership at every layer.",
      "pt-BR": "Engenharia com responsabilidade em todas as camadas.",
    } satisfies LocalizedText,
    text: {
      en: "My background moves from firmware and biomedical research into production backend engineering. Today I work on architectures, APIs, data and cloud deployments that have to keep working after the launch.",
      "pt-BR": "Minha trajetória vai de firmware e pesquisa biomédica até a engenharia backend em produção. Hoje trabalho com arquiteturas, APIs, dados e deploys em cloud que precisam continuar funcionando depois do lançamento.",
    } satisfies LocalizedText,
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
        en: "Systems by function, not by client name.",
        "pt-BR": "Sistemas pela função, não pelo nome do cliente.",
      } satisfies LocalizedText,
      intro: {
        en: "Selected production work presented through domain, scale and technical responsibility without exposing confidential product names.",
        "pt-BR": "Trabalhos selecionados em produção apresentados por domínio, escala e responsabilidade técnica, sem expor nomes confidenciais.",
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
    earlierWork: {
      title: {
        en: "The path into backend engineering.",
        "pt-BR": "O caminho até a engenharia backend.",
      } satisfies LocalizedText,
      intro: {
        en: "Embedded and biomedical work still shapes how I think about reliability, data and systems at the edge.",
        "pt-BR": "O trabalho embarcado e biomédico ainda influencia como penso sobre confiabilidade, dados e sistemas na borda.",
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
