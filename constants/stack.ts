import type { StackGroup } from "./types"

export const stackGroups = [
  {
    id: "backend-core",
    label: { en: "Backend foundation", "pt-BR": "Fundação backend" },
    description: {
      en: "The technologies closest to my day-to-day engineering work.",
      "pt-BR": "As tecnologias mais próximas do meu trabalho diário de engenharia.",
    },
    priority: "primary",
    items: ["Python", "REST APIs", "Databases", "Docker", "Cloud", "Git/GitHub"],
  },
  {
    id: "backend-technologies",
    label: { en: "Backend technologies", "pt-BR": "Tecnologias backend" },
    description: {
      en: "Frameworks, data stores and architectural patterns used in production systems.",
      "pt-BR": "Frameworks, tecnologias de dados e padrões arquiteturais usados em sistemas de produção.",
    },
    priority: "primary",
    items: ["Python", "Flask", "SQL", "MySQL", "Firebase", "Microservices"],
  },
  {
    id: "cloud-delivery",
    label: { en: "Cloud / delivery", "pt-BR": "Cloud / entrega" },
    description: {
      en: "Infrastructure and delivery practices that take software into production.",
      "pt-BR": "Infraestrutura e práticas de entrega que levam software para a produção.",
    },
    priority: "primary",
    items: ["Google Cloud Platform", "Docker", "CI/CD", "Git/GitHub"],
  },
  {
    id: "supporting",
    label: { en: "Supporting technologies", "pt-BR": "Tecnologias de apoio" },
    description: {
      en: "Additional tools from product, mobile, frontend and embedded work.",
      "pt-BR": "Tecnologias adicionais de produto, mobile, frontend e sistemas embarcados.",
    },
    priority: "secondary",
    items: ["Next.js", "TypeScript", "JavaScript", "Flutter", "React", "Java", "C/C++"],
  },
] as const satisfies readonly StackGroup[]
