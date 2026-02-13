// ============================================================
// MEMORY CARD COMPONENT - 3D Flip Animation
// ============================================================

import { memo } from "react";
import { motion } from "framer-motion";
import type { Card } from "./types";

interface MemoryCardProps {
  card: Card;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

const MemoryCard = memo(function MemoryCard({
  card,
  isFlipped,
  isMatched,
  onClick,
}: MemoryCardProps) {
  const showFace = isFlipped || isMatched;

  return (
    <button
      onClick={onClick}
      disabled={isMatched}
      aria-label={
        isMatched
          ? `Matched: ${card.emoji}`
          : isFlipped
            ? `Flipped: ${card.emoji}`
            : "Hidden card"
      }
      aria-pressed={showFace}
      className="relative w-full aspect-square cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-xl disabled:cursor-default"
      style={{ perspective: "600px" }}
    >
      <motion.div
        animate={{ rotateY: showFace ? 180 : 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Back (hidden state) */}
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-md flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-white/30 text-2xl font-bold select-none">
            ?
          </span>
        </div>

        {/* Front (revealed state) */}
        <div
          className={`absolute inset-0 rounded-xl shadow-md flex items-center justify-center transition-colors duration-300 ${
            isMatched
              ? "bg-green-100 dark:bg-green-900/40 ring-2 ring-green-400/50"
              : "bg-white dark:bg-neutral-800"
          }`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <motion.span
            initial={false}
            animate={isMatched ? { scale: [1, 1.3, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            className="select-none"
            style={{ fontSize: "clamp(1.2rem, 4vw, 2.2rem)" }}
          >
            {card.emoji}
          </motion.span>
        </div>
      </motion.div>
    </button>
  );
});

export default MemoryCard;
