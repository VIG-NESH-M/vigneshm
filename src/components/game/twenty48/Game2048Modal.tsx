// ============================================================
// 2048 GAME MODAL
// ============================================================

import { motion } from "framer-motion";

interface Game2048ModalProps {
  open: boolean;
  won: boolean;
  score: number;
  onClose: () => void;
  onNewGame: () => void;
}

export default function Game2048Modal({
  open,
  won,
  score,
  onClose,
  onNewGame,
}: Game2048ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-2xl p-6 w-[90%] max-w-[360px] text-center shadow-xl"
      >
        <h2
          className={`text-2xl font-bold ${won ? "text-green-500" : "text-red-500"}`}
        >
          {won ? "You Win!" : "Game Over"}
        </h2>
        <p className="text-gray-500 dark:text-neutral-400 mt-1 text-sm">
          Score: {score}
        </p>

        <div className="mt-5 flex items-center justify-center gap-2">
          {won && (
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all"
            >
              Keep Playing
            </button>
          )}
          <button
            onClick={onNewGame}
            className="px-4 py-2 rounded-xl text-sm font-semibold bg-[#8f7a66] text-white hover:bg-[#7c6a58] transition-all"
          >
            New Game
          </button>
        </div>
      </motion.div>
    </div>
  );
}
