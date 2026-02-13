// ============================================================
// MEMORY BOARD
// ============================================================

import { memo, useMemo } from "react";
import type { Card, Difficulty } from "./types";
import { DIFFICULTY_CONFIG } from "./types";
import MemoryCard from "./MemoryCard";

interface MemoryBoardProps {
  cards: Card[];
  flipped: Set<number>;
  matched: Set<number>;
  difficulty: Difficulty;
  onCardClick: (id: number) => void;
}

const MemoryBoard = memo(function MemoryBoard({
  cards,
  flipped,
  matched,
  difficulty,
  onCardClick,
}: MemoryBoardProps) {
  const cols = DIFFICULTY_CONFIG[difficulty].cols;

  const gridClass = useMemo(() => {
    const colMap: Record<number, string> = {
      4: "grid-cols-4",
      6: "grid-cols-6",
    };
    return colMap[cols] ?? "grid-cols-4";
  }, [cols]);

  return (
    <div
      className={`grid ${gridClass} gap-2 sm:gap-3 w-full max-w-[480px] mx-auto`}
      role="grid"
      aria-label="Memory card grid"
    >
      {cards.map((card) => (
        <MemoryCard
          key={card.id}
          card={card}
          isFlipped={flipped.has(card.id)}
          isMatched={matched.has(card.id)}
          onClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
});

export default MemoryBoard;
