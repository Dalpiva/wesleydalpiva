import type { ExperienceEntry } from "./types"

export const experience = [
  {
    id: "quatroin",
    organization: { en: "QuatroIn", "pt-BR": "QuatroIn" },
    location: {
      en: "Joaçaba, Santa Catarina, Brazil",
      "pt-BR": "Joaçaba, Santa Catarina, Brasil",
    },
    roles: [
      {
        title: {
          en: "Software Engineer",
          "pt-BR": "Engenheiro de Software",
        },
        startDate: "2024-09-01",
        endDate: null,
        summary: {
          en: "Led the end-to-end development of five backend services and greenfield applications, owning architecture, database design, implementation, cloud deployment and long-term maintenance.",
          "pt-BR": "Liderei o desenvolvimento ponta a ponta de cinco serviços backend e aplicações greenfield, assumindo arquitetura, modelagem de banco, implementação, deploy em cloud e manutenção contínua.",
        },
        highlights: [
          {
            en: "Worked directly with clients to gather requirements, define technical solutions and deliver production-ready software.",
            "pt-BR": "Trabalhei diretamente com clientes para levantar requisitos, definir soluções técnicas e entregar software pronto para produção.",
          },
          {
            en: "Designed a complete backend architecture with Python Flask, Firebase and Google Cloud, including secure authentication, 100+ REST endpoints, automated messaging and CI/CD.",
            "pt-BR": "Projetei uma arquitetura backend completa com Python Flask, Firebase e Google Cloud, incluindo autenticação segura, mais de 100 endpoints REST, mensagens automatizadas e CI/CD.",
          },
          {
            en: "Led a team of three developers on an ICU monitoring solution and contributed to an enterprise Java/React platform.",
            "pt-BR": "Liderei uma equipe de três desenvolvedores em uma solução de monitoramento de UTI e contribuí para uma plataforma corporativa em Java/React.",
          },
        ],
        stack: ["Python", "Flask", "Firebase", "Google Cloud", "Docker", "Git/GitHub"],
      },
      {
        title: {
          en: "Software Engineer Intern",
          "pt-BR": "Estagiário de Engenharia de Software",
        },
        startDate: "2023-09-01",
        endDate: "2024-08-31",
        highlights: [
          {
            en: "Developed dashboards for distributed STM32 IoT device monitoring and improved embedded firmware reliability.",
            "pt-BR": "Desenvolvi dashboards para monitoramento de dispositivos IoT STM32 distribuídos e melhorei a confiabilidade do firmware embarcado.",
          },
          {
            en: "Collaborated on cloud deployments, production debugging, documentation and client-facing technical discussions.",
            "pt-BR": "Colaborei com deploys em cloud, debugging em produção, documentação e discussões técnicas com clientes.",
          },
        ],
        stack: ["Python", "Docker", "Google Cloud", "STM32", "C/C++"],
      },
    ],
  },
  {
    id: "unoesc",
    organization: {
      en: "University of Western Santa Catarina (UNOESC)",
      "pt-BR": "Universidade do Oeste de Santa Catarina (UNOESC)",
    },
    location: {
      en: "Joaçaba, Santa Catarina, Brazil",
      "pt-BR": "Joaçaba, Santa Catarina, Brasil",
    },
    roles: [
      {
        title: {
          en: "Software Engineer Intern",
          "pt-BR": "Estagiário de Engenharia de Software",
        },
        startDate: "2022-08-01",
        endDate: "2023-12-31",
        summary: {
          en: "Software engineering internship supporting biomedical rehabilitation research through real-time data acquisition and embedded hardware integration.",
          "pt-BR": "Estágio de engenharia de software apoiando pesquisas de reabilitação biomédica por meio de aquisição de dados em tempo real e integração com hardware embarcado.",
        },
        highlights: [
          {
            en: "Built Python software for real-time acquisition, visualization and storage of EMG and encoder signals.",
            "pt-BR": "Desenvolvi software em Python para aquisição, visualização e armazenamento em tempo real de sinais EMG e de encoder.",
          },
          {
            en: "Integrated embedded hardware with MySQL databases through serial communication for laboratory experiments.",
            "pt-BR": "Integrei hardware embarcado a bancos MySQL por comunicação serial para experimentos de laboratório.",
          },
        ],
        stack: ["Python", "MySQL", "C/C++", "Git/GitHub"],
      },
    ],
  },
] as const satisfies readonly ExperienceEntry[]
