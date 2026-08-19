import type { System } from "./types"

export const systems = [
  {
    id: "training-management",
    number: "01",
    name: {
      en: "Training Management Platform",
      "pt-BR": "Plataforma de Gestão de Treinos",
    },
    domain: {
      en: "SPORTS / TRAINING",
      "pt-BR": "ESPORTES / TREINAMENTO",
    },
    description: {
      en: "Backend platform supporting coaches and athletes through training planning, progress tracking and automated communication.",
      "pt-BR": "Plataforma backend que apoia treinadores e atletas com planejamento de treinos, acompanhamento de evolução e comunicação automatizada.",
    },
    scale: [
      { value: "2", label: { en: "coaches", "pt-BR": "treinadores" } },
      { value: "70", label: { en: "athletes", "pt-BR": "atletas" } },
      { value: "70+", label: { en: "weekly training plans", "pt-BR": "planos semanais" } },
      { value: "245", label: { en: "training sessions", "pt-BR": "sessões de treino" } },
      { value: "140", label: { en: "automated weekly messages", "pt-BR": "mensagens semanais automatizadas" } },
      { value: "~22", label: { en: "daily uploads", "pt-BR": "uploads diários" } },
    ],
    role: {
      en: "Backend Engineer / Sole developer",
      "pt-BR": "Engenheiro Backend / Desenvolvedor único",
    },
    stack: ["Python", "Flask", "Firebase", "GCP"],
    responsibilities: [
      { en: "Backend architecture and REST APIs", "pt-BR": "Arquitetura backend e APIs REST" },
      { en: "Authentication and automated messaging workflows", "pt-BR": "Autenticação e fluxos de mensagens automatizadas" },
      { en: "CI/CD and cloud deployment", "pt-BR": "CI/CD e deploy em cloud" },
    ],
  },
  {
    id: "icu-monitoring",
    number: "02",
    name: {
      en: "ICU Monitoring System",
      "pt-BR": "Sistema de Monitoramento de UTI",
    },
    domain: {
      en: "HEALTHCARE / COMPUTER VISION",
      "pt-BR": "SAÚDE / VISÃO COMPUTACIONAL",
    },
    description: {
      en: "Healthcare monitoring system composed of three Flutter applications and shared Python services for ICU workflows.",
      "pt-BR": "Sistema de monitoramento em saúde composto por três aplicações Flutter e serviços Python compartilhados para fluxos de UTI.",
    },
    scale: [
      { value: "12", label: { en: "hospital beds", "pt-BR": "leitos hospitalares" } },
      { value: "10", label: { en: "healthcare professionals", "pt-BR": "profissionais de saúde" } },
      { value: "3", label: { en: "developers led", "pt-BR": "desenvolvedores liderados" } },
    ],
    role: {
      en: "Backend Engineer / Technical lead",
      "pt-BR": "Engenheiro Backend / Líder técnico",
    },
    stack: ["Python", "Flask", "OCR", "Computer Vision"],
    responsibilities: [
      { en: "Backend architecture and shared services", "pt-BR": "Arquitetura backend e serviços compartilhados" },
      { en: "Team leadership across three developers", "pt-BR": "Liderança técnica de três desenvolvedores" },
      { en: "Computer vision and OCR integration for medical monitor data", "pt-BR": "Integração de visão computacional e OCR para dados de monitores médicos" },
    ],
  },
  {
    id: "enterprise-management",
    number: "03",
    name: {
      en: "Enterprise Management Platform",
      "pt-BR": "Plataforma de Gestão Corporativa",
    },
    domain: {
      en: "ENTERPRISE",
      "pt-BR": "CORPORATIVO",
    },
    description: {
      en: "Enterprise management platform composed of 12 business modules and used by approximately 1,500 users.",
      "pt-BR": "Plataforma de gestão corporativa composta por 12 módulos de negócio e utilizada por aproximadamente 1.500 usuários.",
    },
    scale: [
      { value: "12", label: { en: "business modules", "pt-BR": "módulos de negócio" } },
      { value: "~1,500", label: { en: "users", "pt-BR": "usuários" } },
    ],
    role: {
      en: "Software Engineer / Contributor",
      "pt-BR": "Engenheiro de Software / Contribuidor",
    },
    stack: ["Java", "React"],
    responsibilities: [
      { en: "Contribution to enterprise workflows and modules", "pt-BR": "Contribuição para fluxos e módulos corporativos" },
      { en: "Backend and application development within a larger team", "pt-BR": "Desenvolvimento backend e de aplicações em uma equipe maior" },
    ],
  },
] as const satisfies readonly System[]
