// ============================================================
// SUDOKU CELL COMPONENT
// ============================================================

import { memo } from "react";

interface CellProps {
  row: number;
  col: number;
  value: number;
  isGiven: boolean;
  isSelected: boolean;
  isHighlight: boolean;
  isSameNum: boolean;
  isError: boolean;
  notes: Set<number>;
  onClick: () => void;
}

const SudokuCell = memo(function SudokuCell({
  row,
  col,
  value,
  isGiven,
  isSelected,
  isHighlight,
  isSameNum,
  isError,
  notes,
  onClick,
}: CellProps) {
  // Build thick-border classes for 3×3 box boundaries
  const thickRight = col === 2 || col === 5;
  const thickBottom = row === 2 || row === 5;

  const cellClasses = [
    "relative flex items-center justify-center aspect-square cursor-pointer transition-all duration-100",
    "border border-gray-200 dark:border-neutral-700",
    // bg states
    isSelected
      ? "bg-blue-600 dark:bg-blue-600 z-[1] shadow-[inset_0_0_0_2px_#3b82f6] dark:shadow-[inset_0_0_0_2px_#3b82f6]"
      : isSameNum
        ? "bg-blue-100/60 dark:bg-blue-500/20"
        : isHighlight
          ? "bg-blue-50/60 dark:bg-blue-500/10"
          : "bg-white dark:bg-neutral-900",
    // text color
    isError
      ? "text-red-500 dark:text-red-400 animate-shake"
      : isGiven
        ? "text-gray-800 dark:text-gray-100"
        : "text-blue-600 dark:text-blue-400",
    // thick borders
    thickRight ? "!border-r-2 !border-r-blue-400 dark:!border-r-blue-500" : "",
    thickBottom ? "!border-b-2 !border-b-blue-400 dark:!border-b-blue-500" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cellClasses}
      style={{ fontSize: "clamp(1rem, 3.5vw, 1.6rem)", fontWeight: 600 }}
      onClick={onClick}
    >
      {value !== 0 ? (
        value
      ) : notes.size > 0 ? (
        <div className="absolute inset-[2px] grid grid-cols-3 grid-rows-3 pointer-events-none">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <span
              key={n}
              className="flex items-center justify-center text-gray-400 dark:text-neutral-500 leading-none font-medium"
              style={{ fontSize: "clamp(0.38rem, 1.2vw, 0.6rem)" }}
            >
              {notes.has(n) ? n : ""}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
});

export default SudokuCell;
