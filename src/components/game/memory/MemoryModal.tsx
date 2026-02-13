// ============================================================
// MEMORY GAME MODAL - Win Screen
// ============================================================

import { motion } from "framer-motion";
import { formatTime } from "./logic";

interface MemoryModalProps {
  open: boolean;
  score: number;
  moves: number;
  seconds: number;
  bestTime: number | null;
  stars: number;
  onNewGame: () => void;
}

export default function MemoryModal({
  open,
  score,
  moves,
  seconds,
  bestTime,
  stars,
  onNewGame,
}: MemoryModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-2xl p-6 w-[90%] max-w-[360px] text-center shadow-xl"
      >
        <h2 className="text-2xl font-bold text-green-500">🎉 You Win!</h2>

        {/* Stars */}
        <div className="flex justify-center gap-1 mt-2 text-2xl">
          {[1, 2, 3].map((s) => (
            <motion.span
              key={s}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: s * 0.15, type: "spring", stiffness: 300 }}
            >
              {s <= stars ? "⭐" : "☆"}
            </motion.span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-5 mt-4 mb-4">
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {score}
            </div>
            <div className="text-[0.7rem] text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
              Score
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {moves}
            </div>
            <div className="text-[0.7rem] text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
              Moves
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {formatTime(seconds)}
            </div>
            <div className="text-[0.7rem] text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
              Time
            </div>
          </div>
        </div>

        {bestTime !== null && (
          <p className="text-xs text-gray-400 dark:text-neutral-500 mb-4">
            Best time: {formatTime(bestTime)}
          </p>
        )}

        <button
          onClick={onNewGame}
          className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 active:scale-[0.97] transition-all"
        >
          Play Again
        </button>
      </motion.div>
    </div>
  );
}
