import { useEffect, useState } from "react";
import { executeCommand } from '../lib/executeCommand'

type HistoryItem = {
  type: "input" | "output";
  value: string;
};

export function useTerminalInput(enabled: boolean) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key === "Enter") {
        const result = executeCommand(input);

        if (result.clear) {
          setHistory([]);
          setInput("");
          return;
        }

        setHistory((prev) => [
          ...prev,
          { type: "input" as const, value: `> ${input}` },
          ...result.output.map((line) => ({
            type: "output" as const,
            value: line,
          })),
        ]);

        setInput("");
      } else if (e.key.length === 1) {
        setInput((prev) => prev + e.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, input]);

  return { input, history };
}