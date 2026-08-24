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
      en: "SPORTS / AUTOMATION",
      "pt-BR": "ESPORTES / AUTOMAÇÃO",
    },
    description: {
      en: "Full-stack coaching platform that turns weekly prescriptions into scheduled messages, athlete uploads and structured training data.",
      "pt-BR":
        "Plataforma full-stack de treinamento que transforma prescrições semanais em mensagens agendadas, uploads dos atletas e dados estruturados de treino.",
    },
    scale: [
      { value: "2", label: { en: "coaches", "pt-BR": "treinadores" } },
      { value: "~70", label: { en: "athletes", "pt-BR": "atletas" } },
      {
        value: "49%",
        label: {
          en: " growth of active runners in 3 months",
          "pt-BR": "crescimento de corredores ativos em 3 meses",
        },
      },
      {
        value: "70+",
        label: { en: "weekly plans", "pt-BR": "planos semanais" },
      },
      {
        value: "140",
        label: {
          en: "automated weekly messages",
          "pt-BR": "mensagens semanais automatizadas",
        },
      },
      {
        value: "~22",
        label: { en: "daily uploads", "pt-BR": "uploads diários" },
      },
    ],
    role: {
      en: "Backend Engineer / Full-stack owner",
      "pt-BR": "Engenheiro Backend / Responsável full-stack",
    },
    stack: ["Python", "Flask", "Firestore", "GCP", "Next.js", "TypeScript"],
    responsibilities: [
      {
        en: "Backend architecture and REST APIs",
        "pt-BR": "Arquitetura backend e APIs REST",
      },
      {
        en: "Training scheduling, automated messaging and delivery reporting",
        "pt-BR":
          "Agendamento de treinos, mensagens automatizadas e relatórios de entrega",
      },
      {
        en: "Authentication, async jobs, testing, migrations and CI/CD",
        "pt-BR": "Autenticação, jobs assíncronos, testes, migrations e CI/CD",
      },
      {
        en: "Next.js and TypeScript product frontend",
        "pt-BR": "Frontend do produto em Next.js e TypeScript",
      },
    ],
  },
  {
    id: "healthcare-monitoring",
    number: "02",
    name: {
      en: "Hospital Monitoring Systems",
      "pt-BR": "Sistemas de Monitoramento Hospitalar",
    },
    domain: {
      en: "HEALTHCARE / COMPUTER VISION",
      "pt-BR": "SAÚDE / VISÃO COMPUTACIONAL",
    },
    description: {
      en: "Separate healthcare products with Flutter applications and shared Python services supporting hospital monitoring workflows, presented without confidential product names.",
      "pt-BR":
        "Produtos independentes de saúde com aplicações Flutter e serviços Python compartilhados para fluxos de monitoramento hospitalar, apresentados sem nomes confidenciais.",
    },
    scale: [
      {
        value: "12",
        label: { en: "hospital beds", "pt-BR": "leitos hospitalares" },
      },
      {
        value: "10",
        label: {
          en: "healthcare professionals",
          "pt-BR": "profissionais de saúde",
        },
      },
      {
        value: "3",
        label: { en: "developers led", "pt-BR": "desenvolvedores liderados" },
      },
      {
        value: "1",
        label: { en: "hospital pilot", "pt-BR": "piloto hospitalar" },
      },
    ],
    role: {
      en: "Backend Engineer / Technical lead",
      "pt-BR": "Engenheiro Backend / Líder técnico",
    },
    stack: ["Python", "Flask", "Flutter", "OCR", "Computer Vision", "GCP"],
    responsibilities: [
      {
        en: "Shared Python services and API design",
        "pt-BR": "Serviços Python compartilhados e design de APIs",
      },
      {
        en: "Architecture, code review and delivery leadership",
        "pt-BR": "Arquitetura, revisão de código e liderança de entregas",
      },
      {
        en: "OCR integration for medical monitor data",
        "pt-BR": "Integração de OCR para dados de monitores médicos",
      },
      {
        en: "Client-facing requirements and technical decisions",
        "pt-BR": "Requisitos junto ao cliente e decisões técnicas",
      },
    ],
  },
  {
    id: "enterprise-management",
    number: "03",
    name: {
      en: "Enterprise Questionnaire & Analytics Platform",
      "pt-BR": "Plataforma Corporativa de Questionários e Analytics",
    },
    domain: {
      en: "ENTERPRISE / GREENFIELD",
      "pt-BR": "CORPORATIVO / GREENFIELD",
    },
    description: {
      en: "Internal platform built from scratch to replace Google Forms with managed questionnaires and first-party analytics.",
      "pt-BR":
        "Plataforma interna construída do zero para substituir o Google Forms por questionários gerenciados e analytics próprio.",
    },
    scale: [
      {
        value: "12",
        label: { en: "business modules", "pt-BR": "módulos de negócio" },
      },
      { value: "~1,500", label: { en: "users", "pt-BR": "usuários" } },
      { value: "100,000+", label: { en: "responses", "pt-BR": "respostas" } },
    ],
    role: {
      en: "Software Engineer / Client-facing contributor",
      "pt-BR": "Engenheiro de Software / Contribuidor junto ao cliente",
    },
    stack: ["React", "Java", "REST APIs"],
    responsibilities: [
      {
        en: "React screen implementation",
        "pt-BR": "Implementação de telas React",
      },
      {
        en: "Client communication and requirements gathering",
        "pt-BR": "Comunicação com clientes e levantamento de requisitos",
      },
      {
        en: "Technical decisions in a greenfield system",
        "pt-BR": "Decisões técnicas na construção de um novo sistema",
      },
    ],
  },
] as const satisfies readonly System[]
