import { useEffect, useState } from "react";
import { executeCommand, OutputItem } from "../lib/executeCommand";

type HistoryItem =
  | { type: "input"; value: string }
  | OutputItem;

export function useTerminalInput(enabled: boolean) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // evitar conflito com input mobile
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === "Backspace") {
        e.preventDefault();
        setInput((prev) => prev.slice(0, -1));
      } 
      
      else if (e.key === "Enter") {
        e.preventDefault();

        const trimmed = input.trim();
        if (!trimmed) return;

        const result = executeCommand(trimmed);

        if (result.clear) {
          setHistory([]);
          setInput("");
          return;
        }

        setHistory((prev) => [
          ...prev,
          { type: "input", value: `> ${trimmed}` },
          ...result.output.map<HistoryItem>((item) => {
            if (item.type === "text") {
              return { type: "text", value: item.value };
            }

            return {
              type: "link",
              label: item.label,
              href: item.href,
            };
          }),
        ]);

        setInput("");
      } 
      
      else if (e.key.length === 1) {
        setInput((prev) => prev + e.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, input]);

  return { input, setInput, history };
}