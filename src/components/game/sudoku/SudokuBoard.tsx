// ============================================================
// SUDOKU BOARD COMPONENT
// ============================================================

import { memo } from "react";
import SudokuCell from "./SudokuCell";
import type { Grid, GivenGrid, NotesGrid, CellPosition } from "./types";

interface BoardProps {
  board: Grid;
  solution: Grid;
  given: GivenGrid;
  notes: NotesGrid;
  selectedCell: CellPosition | null;
  onCellClick: (r: number, c: number) => void;
}

const SudokuBoard = memo(function SudokuBoard({
  board,
  solution,
  given,
  notes,
  selectedCell,
  onCellClick,
}: BoardProps) {
  const selVal = selectedCell ? board[selectedCell.r][selectedCell.c] : 0;

  return (
    <div className="w-full aspect-square">
      <div className="grid grid-cols-9 grid-rows-9 w-full h-full border-2 border-blue-400 dark:border-blue-500 rounded-xl overflow-hidden">
        {Array.from({ length: 9 }, (_, r) =>
          Array.from({ length: 9 }, (_, c) => {
            const val = board[r][c];
            const isGiven = given[r][c];
            const isSelected =
              selectedCell !== null &&
              selectedCell.r === r &&
              selectedCell.c === c;
            const isHighlight =
              selectedCell !== null &&
              (selectedCell.r === r ||
                selectedCell.c === c ||
                (((selectedCell.r / 3) | 0) === ((r / 3) | 0) &&
                  ((selectedCell.c / 3) | 0) === ((c / 3) | 0)));
            const isSameNum =
              selectedCell !== null &&
              val !== 0 &&
              selVal === val &&
              !isSelected;
            const isError = val !== 0 && !isGiven && val !== solution[r][c];

            return (
              <SudokuCell
                key={r * 9 + c}
                row={r}
                col={c}
                value={val}
                isGiven={isGiven}
                isSelected={isSelected}
                isHighlight={isHighlight}
                isSameNum={isSameNum}
                isError={isError}
                notes={notes[r][c]}
                onClick={() => onCellClick(r, c)}
              />
            );
          }),
        )}
      </div>
    </div>
  );
});

export default SudokuBoard;
