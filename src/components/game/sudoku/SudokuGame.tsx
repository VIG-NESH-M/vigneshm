// ============================================================
// SUDOKU GAME - Main Component
// ============================================================

import { useEffect, useCallback } from "react";
import { useSudoku } from "./useSudoku";
import { formatTime, countFilledCorrect } from "./generator";
import type { Difficulty } from "./types";
import { MAX_MISTAKES } from "./types";
import SudokuBoard from "./SudokuBoard";
import SudokuNumPad from "./SudokuNumPad";
import SudokuModal from "./SudokuModal";
import Confetti from "./Confetti";

export default function SudokuGame() {
  const {
    state,
    newGame,
    selectCell,
    placeNumber,
    erase,
    undo,
    giveHint,
    toggleNotes,
    togglePause,
    setDifficulty,
  } = useSudoku();

  const filled = countFilledCorrect(state.board, state.solution);
  const pct = ((filled / 81) * 100).toFixed(1);

  // Keyboard handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (state.gameOver) return;

      if (e.key === "p" || e.key === "P") {
        togglePause();
        return;
      }
      if (state.paused) return;

      const num = parseInt(e.key);
      if (num >= 1 && num <= 9) {
        placeNumber(num);
        return;
      }
      if (e.key === "Backspace" || e.key === "Delete") {
        erase();
        return;
      }
      if (e.key === "n" || e.key === "N") {
        toggleNotes();
        return;
      }
      if (e.key === "h" || e.key === "H") {
        giveHint();
        return;
      }
      if ((e.key === "z" || e.key === "Z") && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        undo();
        return;
      }
      if (e.key.startsWith("Arrow")) {
        e.preventDefault();
        if (!state.selectedCell) {
          selectCell(0, 0);
          return;
        }
        let sr = state.selectedCell.r;
        let sc = state.selectedCell.c;
        if (e.key === "ArrowUp") sr = Math.max(0, sr - 1);
        else if (e.key === "ArrowDown") sr = Math.min(8, sr + 1);
        else if (e.key === "ArrowLeft") sc = Math.max(0, sc - 1);
        else if (e.key === "ArrowRight") sc = Math.min(8, sc + 1);
        selectCell(sr, sc);
      }
    },
    [
      state.gameOver,
      state.paused,
      state.selectedCell,
      togglePause,
      placeNumber,
      erase,
      toggleNotes,
      giveHint,
      undo,
      selectCell,
    ],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value as Difficulty);
  };

  const handleNewGame = () => {
    newGame();
  };

  return (
    <div className="w-full max-w-[450px] mx-auto select-none">
      {/* Title */}
      <h2 className="text-center font-bold mb-2 text-transparent bg-clip-text bg-linear-to-br from-blue-400 to-purple-400"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", letterSpacing: "-0.5px" }}
      >
        Sudoku
      </h2>

      {/* Top Bar */}
      <div className="flex items-center justify-between mb-3 gap-3 flex-wrap">
        <div className="flex gap-4 items-center text-sm text-gray-500 dark:text-neutral-400">
          <span className="flex items-center gap-1">
            ⏱ {formatTime(state.seconds)}
          </span>
          <span className="flex items-center gap-1">
            ❌ {state.mistakes}/{MAX_MISTAKES}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={togglePause}
            className="px-2.5 py-1.5 rounded-lg text-sm bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-700 transition-colors"
          >
            {state.paused ? "▶" : "⏸"}
          </button>
          <select
            value={state.difficulty}
            onChange={handleDifficultyChange}
            className="px-3 py-1.5 rounded-lg text-sm bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-neutral-700 cursor-pointer outline-none focus:border-blue-500 transition-colors"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="expert">Expert</option>
          </select>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-2">
        <div className="w-full h-1 bg-gray-200 dark:bg-neutral-800 rounded overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-blue-500 to-purple-400 rounded transition-all duration-400"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="text-right text-[0.7rem] text-gray-400 dark:text-neutral-500 mt-0.5">
          {filled} / 81
        </div>
      </div>

      {/* Board */}
      <div className="relative">
        <SudokuBoard
          board={state.board}
          solution={state.solution}
          given={state.given}
          notes={state.notes}
          selectedCell={state.selectedCell}
          onCellClick={selectCell}
        />

        {/* Pause Overlay */}
        {state.paused && (
          <div
            className="absolute inset-0 bg-gray-900/95 dark:bg-neutral-950/95 rounded-xl z-10 flex flex-col items-center justify-center gap-3 cursor-pointer"
            onClick={togglePause}
          >
            <span className="text-5xl">⏸</span>
            <p className="text-gray-400 dark:text-neutral-500 text-sm">
              Game Paused — click to resume
            </p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="mt-3.5 flex flex-col gap-2.5">
        {/* Action buttons */}
        <div className="flex gap-1.5">
          <button
            onClick={undo}
            disabled={state.history.length === 0}
            className="flex-1 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-neutral-700 active:scale-[0.96] transition-all disabled:opacity-35 disabled:pointer-events-none"
            style={{ fontSize: "clamp(0.72rem, 2vw, 0.88rem)" }}
          >
            ↩ Undo
          </button>
          <button
            onClick={erase}
            className="flex-1 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-neutral-700 active:scale-[0.96] transition-all"
            style={{ fontSize: "clamp(0.72rem, 2vw, 0.88rem)" }}
          >
            ⌫ Erase
          </button>
          <button
            onClick={toggleNotes}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 active:scale-[0.96] transition-all ${
              state.notesMode
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-neutral-700"
            }`}
            style={{ fontSize: "clamp(0.72rem, 2vw, 0.88rem)" }}
          >
            ✏ Notes
          </button>
          <button
            onClick={giveHint}
            className="flex-1 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-neutral-700 active:scale-[0.96] transition-all"
            style={{ fontSize: "clamp(0.72rem, 2vw, 0.88rem)" }}
          >
            💡 Hint
          </button>
          <button
            onClick={handleNewGame}
            className="flex-1 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.96] transition-all"
            style={{ fontSize: "clamp(0.72rem, 2vw, 0.88rem)" }}
          >
            ▶ New
          </button>
        </div>

        {/* Number Pad */}
        <SudokuNumPad
          board={state.board}
          selectedCell={state.selectedCell}
          onNumberClick={placeNumber}
        />
      </div>

      {/* Modal */}
      <SudokuModal
        show={state.gameOver}
        won={state.won}
        seconds={state.seconds}
        mistakes={state.mistakes}
        hintsUsed={state.hintsUsed}
        difficulty={state.difficulty}
        onNewGame={handleNewGame}
        onClose={() => {}}
      />

      {/* Confetti */}
      <Confetti active={state.won} />
    </div>
  );
}
