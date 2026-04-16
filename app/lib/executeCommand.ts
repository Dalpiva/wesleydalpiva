import { commands } from "./commands";

export type OutputItem =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string };

export type CommandResult = {
  output: OutputItem[];
  clear?: boolean;
};

export function executeCommand(input: string): CommandResult {
  const [cmd, ...args] = input.trim().split(" ");

  if (cmd === "clear") {
    return { clear: true, output: [] };
  }

  const command = commands[cmd];

  if (!command) {
    return {
      output: [
        {
          type: "text",
          value: `command '${cmd}' not found, use 'help'`,
        },
      ],
    };
  }

  return command(args);
}