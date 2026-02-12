// ============================================================
// SUDOKU NUMBER PAD
// ============================================================

import { memo } from "react";
import type { Grid, CellPosition } from "./types";
import { countNumber } from "./generator";

interface NumPadProps {
  board: Grid;
  selectedCell: CellPosition | null;
  onNumberClick: (num: number) => void;
}

const SudokuNumPad = memo(function SudokuNumPad({
  board,
  selectedCell,
  onNumberClick,
}: NumPadProps) {
  const selVal = selectedCell ? board[selectedCell.r][selectedCell.c] : 0;

  return (
    <div className="grid grid-cols-9 gap-1">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
        const count = countNumber(board, n);
        const depleted = count >= 9;
        const isActive = selVal === n && selVal !== 0;

        return (
          <button
            key={n}
            disabled={depleted}
            onClick={() => onNumberClick(n)}
            className={[
              "relative aspect-square flex items-center justify-center rounded-lg font-bold transition-all duration-150",
              "text-gray-800 dark:text-gray-100",
              depleted
                ? "opacity-25 pointer-events-none bg-gray-200 dark:bg-neutral-800"
                : isActive
                  ? "bg-blue-100 dark:bg-blue-500/20 shadow-[inset_0_0_0_2px_#3b82f6]"
                  : "bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 active:scale-[0.93]",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{ fontSize: "clamp(1rem, 3vw, 1.3rem)" }}
          >
            {n}
            <span
              className="absolute top-0.5 right-1 text-gray-400 dark:text-neutral-500 font-normal leading-none"
              style={{ fontSize: "clamp(0.4rem, 1vw, 0.55rem)" }}
            >
              {9 - count}
            </span>
          </button>
        );
      })}
    </div>
  );
});

export default SudokuNumPad;
