import { useEffect, useState } from "react";

export function useTerminalSequence() {
  const [phase, setPhase] = useState<"loading" | "typing" | "done">("loading");

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("typing");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return { phase, setPhase };
}