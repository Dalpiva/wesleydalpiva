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
        startDate: "2024-08-01",
        endDate: null,
        summary: {
          en: "Own backend and full-stack product delivery from client discovery and architecture through deployment and long-term maintenance, with Python services at the center.",
          "pt-BR":
            "Assumo a entrega de produtos backend e full-stack, desde a descoberta com clientes e arquitetura até deploy e manutenção contínua, com serviços Python como núcleo.",
        },
        highlights: [
          {
            en: "Built and owned a coaching platform end to end, replacing a spreadsheet-to-WhatsApp workflow that took approximately five hours to prepare and send weekly plans for 50 runners; implemented a Python/Flask and Firestore backend with a Next.js/TypeScript frontend.",
            "pt-BR":
              "Desenvolvi e assumi ponta a ponta uma plataforma de treinamento, substituindo um fluxo de planilhas para WhatsApp que levava aproximadamente cinco horas para preparar e enviar os treinos semanais de 50 corredores; implementei o backend em Python/Flask e Firestore com frontend em Next.js/TypeScript.",
          },
          {
            en: "Cut training-plan authoring from approximately five minutes to 90 seconds per runner and automated weekly delivery in approximately 10 minutes, while providing per-recipient success and failure reporting within the messaging API's rate limits.",
            "pt-BR":
              "Reduzi a elaboração do plano de aproximadamente 5 minutos para 90 segundos por corredor e automatizei o envio semanal, concluído em aproximadamente 10 minutos dentro dos limites da API de mensagens, com relatórios de sucesso e falha por destinatário.",
          },
          {
            en: "Supported the client's growth of 49% within three months; the platform currently serves two coaches and approximately 70 athletes with 70+ weekly plans, 245 training sessions, 140 automated messages and approximately 22 daily uploads.",
            "pt-BR":
              "Apoiei o crescimento do cliente em 49% em três meses; atualmente, a plataforma atende dois treinadores e aproximadamente 70 atletas com mais de 70 planos semanais, 245 sessões de treino, 140 mensagens automatizadas e aproximadamente 22 uploads diários.",
          },
          {
            en: "Led up to three developers across separate healthcare products, making architecture decisions, reviewing code, planning delivery, unblocking the team and working directly with clients.",
            "pt-BR":
              "Liderei até três desenvolvedores em diferentes produtos de saúde, tomando decisões de arquitetura, revisando código, planejando entregas, desbloqueando o time e trabalhando diretamente com clientes.",
          },
          {
            en: "Designed shared Python/Flask services and worked across Flutter applications for a hospital pilot supporting 12 beds and 10 healthcare professionals; integrated OCR-based medical-monitor data extraction to reduce manual transcription.",
            "pt-BR":
              "Projetei serviços compartilhados em Python/Flask e trabalhei em aplicações Flutter para um piloto hospitalar que apoiava 12 leitos e 10 profissionais de saúde; integrei extração de dados de monitores médicos baseada em OCR para reduzir a transcrição manual.",
          },
          {
            en: "Helped build an internal questionnaire and analytics platform from scratch, replacing Google Forms and serving approximately 1,500 users with more than 100,000 responses across 12 business modules; contributed React screens and technical decisions with clients.",
            "pt-BR":
              "Ajudei a construir do zero uma plataforma interna de questionários e analytics, substituindo o Google Forms e atendendo aproximadamente 1.500 usuários com mais de 100.000 respostas em 12 módulos de negócio; contribuí com telas React e decisões técnicas junto aos clientes.",
          },
        ],
        stack: [
          "Python",
          "Flask",
          "Firestore",
          "Firebase Auth",
          "GCP Cloud Run",
          "Cloud Run Jobs",
          "Docker",
          "Next.js",
          "TypeScript",
          "React",
          "Pytest",
          "Git/GitHub",
          "GitHub Actions",
          "Microservices",
        ],
      },
      {
        title: {
          en: "Software Engineer Intern",
          "pt-BR": "Estagiário de Engenharia de Software",
        },
        startDate: "2023-09-01",
        endDate: "2024-08-31",
        summary: {
          en: "Built an IoT monitoring product from zero and contributed to cloud delivery, production debugging and client-facing engineering.",
          "pt-BR":
            "Desenvolvi do zero um produto de monitoramento IoT e contribuí com entregas em cloud, debugging em produção e engenharia junto aos clientes.",
        },
        highlights: [
          {
            en: "Built a Tago.io dashboard from zero to monitor four distributed STM32 devices, surfacing visual failure alerts and sending email notifications during validation.",
            "pt-BR":
              "Desenvolvi do zero um dashboard no Tago.io para monitorar quatro dispositivos STM32 distribuídos, exibindo alertas visuais de falhas e enviando notificações por email durante a validação.",
          },
          {
            en: "Contributed embedded firmware changes and collaborated on cloud deployments, production debugging, documentation and client-facing technical discussions.",
            "pt-BR":
              "Contribuí com alterações no firmware embarcado e colaborei em deploys cloud, debugging em produção, documentação e discussões técnicas com clientes.",
          },
        ],
        stack: [
          "Python",
          "JavaScript",
          "HTML/CSS",
          "Tago.io",
          "STM32",
          "C/C++",
          "Docker",
          "GCP",
          "Git/GitHub",
        ],
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
          en: "Academic Research, Biomedical Rehabilitation Systems",
          "pt-BR": "Pesquisa Acadêmica, Sistemas de Reabilitação Biomédica",
        },
        startDate: "2021-08-01",
        endDate: "2023-12-31",
        summary: {
          en: "Supported biomedical rehabilitation research through real-time signal acquisition, embedded firmware and hardware-software integration.",
          "pt-BR":
            "Apoiei pesquisas de reabilitação biomédica por meio de aquisição de sinais em tempo real, firmware embarcado e integração entre hardware e software.",
        },
        highlights: [
          {
            en: "Developed Python software for real-time acquisition and visualization of 12-channel EMG and encoder signals, storing experiment data in proprietary files and using MySQL to map data folders.",
            "pt-BR":
              "Desenvolvi software em Python para aquisição e visualização em tempo real de sinais EMG de 12 canais e encoder, armazenando os dados dos experimentos em arquivos proprietários e usando MySQL para mapear as pastas de dados.",
          },
          {
            en: "Implemented C/C++ firmware that digitized and synchronized analog signals and transmitted them to a computer over USART, supporting biomedical rehabilitation research.",
            "pt-BR":
              "Implementei firmware em C/C++ que digitalizava e sincronizava sinais analógicos e os transmitia ao computador via USART, apoiando pesquisas de reabilitação biomédica.",
          },
          {
            en: "Participated in PCB design, hardware validation and system testing throughout the research lifecycle.",
            "pt-BR":
              "Participei do projeto de PCBs, validação de hardware e testes do sistema durante todo o ciclo de pesquisa.",
          },
        ],
        stack: ["Python", "C/C++", "USART", "MySQL", "Git/GitHub"],
      },
    ],
  },
] as const satisfies readonly ExperienceEntry[]
