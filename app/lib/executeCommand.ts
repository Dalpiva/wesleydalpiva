import { commands } from "./commands";

export function executeCommand(input: string) {
  const [cmd, ...args] = input.trim().split(" ");

  if (cmd === "clear") {
    return { clear: true, output: [] };
  }

  const command = commands[cmd];

  if (!command) {
    return {
      output: [`command '${cmd}' not found, you can use 'help'`],
    };
  }

  return command(args);
}