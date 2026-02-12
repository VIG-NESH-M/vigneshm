// ============================================================
// SUDOKU CONFETTI EFFECT
// ============================================================

import { useEffect, useRef } from "react";

interface ConfettiProps {
  active: boolean;
}

const COLORS = [
  "#60a5fa",
  "#a78bfa",
  "#34d399",
  "#fbbf24",
  "#f87171",
  "#fb923c",
  "#e879f9",
];

export default function Confetti({ active }: ConfettiProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = "";

    for (let i = 0; i < 80; i++) {
      const piece = document.createElement("div");
      piece.style.position = "absolute";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.top = `${-10 - Math.random() * 20}%`;
      piece.style.background = COLORS[(Math.random() * COLORS.length) | 0];
      piece.style.width = `${5 + Math.random() * 8}px`;
      piece.style.height = `${5 + Math.random() * 8}px`;
      piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      piece.style.animation = `confettiFall ${1.5 + Math.random() * 2}s linear ${Math.random() * 0.8}s forwards`;
      container.appendChild(piece);
    }

    const timer = setTimeout(() => {
      container.innerHTML = "";
    }, 4500);

    return () => {
      clearTimeout(timer);
      container.innerHTML = "";
    };
  }, [active]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[200] overflow-hidden"
    />
  );
}
