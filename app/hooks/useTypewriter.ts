import { useEffect, useState } from "react";

export function useTypewriter(
  text: string,
  speed = 10,
  start = true,
  onDone?: () => void
) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!start) return;

    let i = 0;

    const interval = setInterval(() => {
      setOutput(text.slice(0, i));
      i++;

      if (i > text.length) {
        clearInterval(interval);
        onDone?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, start]);

  return output;
}