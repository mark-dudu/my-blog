"use client";

import { useEffect, useState } from "react";

const text = "你好，我是 Mark。";

export default function TypewriterTitle() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setDisplayedText(text);
      setIsTyping(false);
      return;
    }

    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(timer);

        window.setTimeout(() => {
          setIsTyping(false);
        }, 700);
      }
    }, 140);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <h1
      className="mt-4 min-h-[1.2em] text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl"
      aria-label={text}
    >
      <span aria-hidden="true">{displayedText}</span>

      {isTyping && (
        <span
          aria-hidden="true"
          className="ml-1 inline-block animate-pulse font-normal text-zinc-500"
        >
          |
        </span>
      )}
    </h1>
  );
}