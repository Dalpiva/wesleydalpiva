"use client";

import { useEffect, useState } from "react";

type Props = {
  blink?: boolean;
  interval?: number;
  maxBlinks?: number;
  onFinish?: () => void;
};

export default function Cursor({
  blink = true,
  interval = 500,
  maxBlinks,
  onFinish,
}: Props) {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!blink) return;

    const timer = setInterval(() => {
      setVisible((v) => !v);
      setCount((c) => c + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [blink]);

  useEffect(() => {
    if (!maxBlinks) return;

    if (count >= maxBlinks * 2) {
      onFinish?.();
    }
  }, [count, maxBlinks, onFinish]);

  return <span>{visible ? "_" : " "}</span>;
}