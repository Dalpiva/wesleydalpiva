export type CommandResult = {
  output: string[];
};

type CommandFn = (args: string[]) => CommandResult;

const help: CommandFn = () => ({
  output: [
    "available commands:",
    "help - lista comandos",
    "about - sobre mim",
    "stack - tecnologias",
    "work - experiência atual",
    "clear - limpa terminal",
  ],
});

const about: CommandFn = () => ({
  output: [
    "Wesley Dalpiva",
    "Desenvolvedor focado em resolver problemas",
  ],
});

const stack: CommandFn = () => ({
  output: [
    "Python",
    "Flutter (Dart)",
    "Next.js",
    "C/C++",
    "EasyEDA",
  ],
});

const work: CommandFn = () => ({
  output: [
    "Desenvolvedor FullStack na QuatroIn",
    "https://quatroin.com.br",
  ],
});

export const commands: Record<string, CommandFn> = {
  help,
  about,
  stack,
  work,
};