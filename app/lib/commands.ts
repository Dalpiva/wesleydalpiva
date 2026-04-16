type OutputItem =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string };

export type CommandResult = {
  output: OutputItem[];
};

type CommandFn = (args: string[]) => CommandResult;

const help: CommandFn = () => ({
  output: [
    { type: "text", value: "# available commands:"},
    { type: "text", value: "- help       : lista comandos"},
    { type: "text", value: "- about      : sobre mim"},
    { type: "text", value: "- stack      : tecnologias que trabalho"},
    { type: "text", value: "- work       : experiência profissional"},
    { type: "text", value: "- education  : nivel de escolaridade"},
    { type: "text", value: "- socials    : redes sociais"},
    { type: "text", value: "- clear      : limpa terminal"},
  ],
});

const about: CommandFn = () => ({
  output: [
    { type: "text", value: "# ola, me chamo wesley vinicius dalpiva!"},
    { type: "text", value: "- desenvolvedor focado em resolver problemas"},
    { type: "text", value: "- mestre de d&d e call of cthulhu nas horas vagas"},
  ],
});

const stack: CommandFn = () => ({
  output: [
    { type: "text", value: "# stack princial:"},
    { type: "text", value: "- python"},
    { type: "text", value: "- next.js"},
    { type: "text", value: "# stack secundaria:"},
    { type: "text", value: "- flutter (Dart)"},
    { type: "text", value: "- c/c++"},
    { type: "text", value: "- 'easy_eda'"},
  ],
});

const work: CommandFn = () => ({
  output: [
    { type: "text", value: "- Desenvolvedor FullStack - QuatroIn (set/2023 - )"},
    { type: "text", value: "- Pesquisador acadêmico - STEAM for ALL - UNOESC (ago/2021 - dec/2023)"},
  ],
});

const education: CommandFn = () => ({
  output: [
    { type: "text", value: "- mestrado em inteligencia artificial e visao computacional - UTFPR (2026 - )"},
    { type: "text", value: "- engenharia de computacao - UNOESC (2020 - 2025)"},
  ],
});

const socials: CommandFn = () => ({
  output: [
    {
      type: "link",
      label: "linkedin",
      href: "https://linkedin.com/in/wesley-dalpiva",
    },
    {
      type: "link",
      label: "github",
      href: "https://github.com/Dalpiva",
    },
    {
      type: "link",
      label: "instagram",
      href: "http://instagram.com/w_dalpiva",
    },
  ],
});

export const commands: Record<string, CommandFn> = {
  help,
  about,
  stack,
  work,
  education,
  socials
};