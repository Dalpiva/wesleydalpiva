import type { StackGroup } from "./types"

export const stackGroups = [
  {
    id: "backend-core",
    marker: "A",
    label: { en: "Backend", "pt-BR": "Backend" },
    description: {
      en: "The technologies closest to my day-to-day engineering work.",
      "pt-BR": "As tecnologias mais próximas do meu trabalho diário de engenharia.",
    },
    priority: "primary",
    items: ["Python", "REST APIs", "SQL", "Architecture", "Microservices"],
  },
  {
    id: "backend-technologies",
    marker: "B",
    label: { en: "Backend Engineering", "pt-BR": "Engenharia backend" },
    description: {
      en: "Frameworks, data stores and architectural patterns used in production systems.",
      "pt-BR": "Frameworks, tecnologias de dados e padrões arquiteturais usados em sistemas de produção.",
    },
    priority: "primary",
    items: ["Flask", "FastAPI", "SQLAlchemy", "MySQL", "Firebase", "API Design"],
  },
  {
    id: "cloud-delivery",
    marker: "C",
    label: { en: "Cloud & DevOps", "pt-BR": "Cloud & DevOps" },
    description: {
      en: "Infrastructure and delivery practices that take software into production.",
      "pt-BR": "Infraestrutura e práticas de entrega que levam software para a produção.",
    },
    priority: "primary",
    items: ["GCP", "Docker", "CI/CD", "Git/GitHub"],
  },
  {
    id: "supporting",
    marker: "D",
    label: { en: "Supporting technologies", "pt-BR": "Tecnologias de apoio" },
    description: {
      en: "Additional tools from product, mobile, frontend and embedded work.",
      "pt-BR": "Tecnologias adicionais de produto, mobile, frontend e sistemas embarcados.",
    },
    priority: "secondary",
    items: ["Next.js", "TypeScript", "JavaScript", "Flutter", "React", "Java", "C/C++"],
  },
] as const satisfies readonly StackGroup[]