import type { EarlierWork } from "./types"

export const earlierWork = [
  {
    id: "biomedical-software",
    title: {
      en: "Biomedical Software Engineering",
      "pt-BR": "Engenharia de Software Biomédico",
    },
    startDate: "2022-08-01",
    endDate: "2023-12-31",
    description: {
      en: "Python software for real-time acquisition, visualization and storage of EMG and encoder signals in biomedical rehabilitation research.",
      "pt-BR": "Software em Python para aquisição, visualização e armazenamento em tempo real de sinais EMG e de encoder em pesquisa de reabilitação biomédica.",
    },
    highlights: [
      { en: "Python real-time acquisition", "pt-BR": "Aquisição em tempo real com Python" },
      { en: "EMG and encoder signals", "pt-BR": "Sinais EMG e de encoder" },
      { en: "MySQL and serial communication", "pt-BR": "MySQL e comunicação serial" },
    ],
    stack: ["Python", "MySQL", "C/C++", "Serial communication"],
  },
  {
    id: "firmware-development",
    title: {
      en: "Firmware Development",
      "pt-BR": "Desenvolvimento de Firmware",
    },
    startDate: "2021-08-01",
    endDate: "2022-08-31",
    description: {
      en: "Embedded firmware for biomedical rehabilitation equipment, with responsibilities spanning communication, PCB design and hardware validation.",
      "pt-BR": "Firmware embarcado para equipamentos de reabilitação biomédica, com atuação em comunicação, projeto de PCB e validação de hardware.",
    },
    highlights: [
      { en: "C/C++ embedded firmware", "pt-BR": "Firmware embarcado em C/C++" },
      { en: "Reliable serial communication", "pt-BR": "Comunicação serial confiável" },
      { en: "PCB design, validation and system testing", "pt-BR": "Projeto de PCB, validação e testes de sistema" },
    ],
    stack: ["C/C++", "Python", "EasyEDA", "Embedded systems"],
  },
] as const satisfies readonly EarlierWork[]
