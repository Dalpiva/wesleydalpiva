import { useEffect, useState } from "react";

export function useTerminalInput(enabled: boolean) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key === "Enter") {
        setHistory((prev) => [...prev, input]);
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