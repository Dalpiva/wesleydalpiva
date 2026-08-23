import type { StackGroup } from "./types"

export const stackGroups = [
  {
    id: "backend-core",
    marker: "A",
    label: { en: "Backend Core", "pt-BR": "Núcleo Backend" },
    description: {
      en: "The technologies and practices closest to my day-to-day backend engineering work.",
      "pt-BR": "As tecnologias e práticas mais próximas do meu trabalho diário de engenharia backend.",
    },
    priority: "primary",
    items: [
      "Python",
      "Flask",
      "REST APIs",
      "API Design",
      "Authentication & Authorization",
      "Async Jobs",
      "pytest",
    ],
  },
  {
    id: "data",
    marker: "B",
    label: { en: "Data & Persistence", "pt-BR": "Dados e Persistência" },
    description: {
      en: "Data stores and delivery patterns used to build dependable product workflows.",
      "pt-BR": "Bancos de dados e padrões de entrega usados para construir fluxos de produto confiáveis.",
    },
    priority: "primary",
    items: ["Firestore", "MySQL", "Data Modeling", "Migrations", "Firebase Authentication"],
  },
  {
    id: "cloud-delivery",
    marker: "C",
    label: { en: "Cloud & Delivery", "pt-BR": "Cloud e Entrega" },
    description: {
      en: "Infrastructure and delivery practices that take software into production.",
      "pt-BR": "Infraestrutura e práticas de entrega que levam software para a produção.",
    },
    priority: "primary",
    items: ["GCP Cloud Run", "Artifact Registry", "Cloud Run Jobs", "Docker", "GitHub Actions", "Git/GitHub"],
  },
  {
    id: "supporting",
    marker: "D",
    label: { en: "Supporting Technologies", "pt-BR": "Tecnologias de Apoio" },
    description: {
      en: "Additional tools from product, mobile, frontend, enterprise and embedded work.",
      "pt-BR": "Tecnologias adicionais de produto, mobile, frontend, sistemas corporativos e embarcados.",
    },
    priority: "secondary",
    items: ["Next.js", "TypeScript", "JavaScript", "React", "Flutter", "Java", "C/C++", "Tago.io"],
  },
] as const satisfies readonly StackGroup[]
