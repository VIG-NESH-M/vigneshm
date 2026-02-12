// ============================================================
// SUDOKU GAME MODAL
// ============================================================

import { formatTime } from "./generator";

interface ModalProps {
  show: boolean;
  won: boolean;
  seconds: number;
  mistakes: number;
  hintsUsed: number;
  difficulty: string;
  onNewGame: () => void;
  onClose: () => void;
}

export default function SudokuModal({
  show,
  won,
  seconds,
  mistakes,
  hintsUsed,
  difficulty,
  onNewGame,
  onClose,
}: ModalProps) {
  if (!show) return null;

  const diffLabel = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-2xl p-8 text-center max-w-[340px] w-[90%] animate-[pop_0.3s_ease]">
        <h2
          className={`text-2xl font-bold mb-2 ${won ? "text-green-500" : "text-red-500"}`}
        >
          {won ? "🎉 You Win!" : "😞 Game Over"}
        </h2>

        <div className="flex justify-center gap-6 mb-4">
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {formatTime(seconds)}
            </div>
            <div className="text-[0.72rem] text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
              Time
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {mistakes}
            </div>
            <div className="text-[0.72rem] text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
              Mistakes
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {hintsUsed}
            </div>
            <div className="text-[0.72rem] text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
              Hints
            </div>
          </div>
        </div>

        <p className="text-gray-500 dark:text-neutral-400 mb-5 text-sm">
          {won
            ? `${diffLabel} puzzle solved!`
            : "You made 3 mistakes. Better luck next time!"}
        </p>

        <button
          onClick={onNewGame}
          className="px-7 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 active:scale-[0.96] transition-all"
        >
          New Game
        </button>
      </div>
    </div>
  );
}
