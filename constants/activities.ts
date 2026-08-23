import type { Activity } from "./types"

export const activities = [
  {
    id: "rcx-2024",
    title: {
      en: "RCX 2024 Robotics Competition",
      "pt-BR": "Competição de Robótica RCX 2024",
    },
    result: {
      en: "8th place / 76 robots",
      "pt-BR": "8º lugar / 76 robôs",
    },
    description: {
      en: "Competed with an autonomous line-following robot and ranked eighth among 76 entries.",
      "pt-BR": "Competição com um robô autônomo seguidor de linha, alcançando o oitavo lugar entre 76 participantes.",
    },
  },
  {
    id: "obr",
    title: {
      en: "Brazilian Robotics Olympiad",
      "pt-BR": "Olimpíada Brasileira de Robótica",
    },
    result: {
      en: "Volunteer",
      "pt-BR": "Voluntário",
    },
    description: {
      en: "Supported the organization of a national robotics education initiative as a volunteer.",
      "pt-BR": "Atuação voluntária no apoio à organização de uma iniciativa nacional de educação em robótica.",
    },
  },
] as const satisfies readonly Activity[]
