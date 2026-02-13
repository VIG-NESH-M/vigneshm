// ============================================================
// 2048 GAME - Main Component
// ============================================================

import { useCallback, useEffect, useRef } from "react";
import { use2048 } from "./use2048";
import Board from "./Board";
import ScorePanel from "./ScorePanel";
import Controls from "./Controls";
import Game2048Modal from "./Game2048Modal";
import type { Direction } from "./types";

const keyMap: Record<string, Direction> = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
  w: "up",
  a: "left",
  s: "down",
  d: "right",
  W: "up",
  A: "left",
  S: "down",
  D: "right",
};

export default function Game2048() {
  const { state, move, newGame, undo, closeWinModal } = use2048();
  const startRef = useRef<{ x: number; y: number } | null>(null);

  const handleMove = useCallback(
    (dir: Direction) => {
      move(dir);
    },
    [move],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      const dir = keyMap[e.key];
      if (!dir) return;
      e.preventDefault();
      handleMove(dir);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleMove]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    startRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!startRef.current) return;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - startRef.current.x;
      const dy = touch.clientY - startRef.current.y;
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);
      const threshold = 24;

      if (Math.max(absX, absY) < threshold) return;

      if (absX > absY) {
        handleMove(dx > 0 ? "right" : "left");
      } else {
        handleMove(dy > 0 ? "down" : "up");
      }
    },
    [handleMove],
  );

  return (
    <div className="w-full max-w-[520px] mx-auto select-none">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <div>
          <h2 className="text-3xl font-black text-[#776e65] dark:text-gray-100">
            2048
          </h2>
          <p className="text-xs text-gray-500 dark:text-neutral-400">
            Join the tiles, get to 2048.
          </p>
        </div>
        <ScorePanel score={state.score} bestScore={state.bestScore} />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-3 gap-3 flex-wrap">
        <Controls onNewGame={newGame} onUndo={undo} canUndo={state.canUndo} />
        <div className="text-[11px] text-gray-500 dark:text-neutral-400">
          Use arrow keys / WASD or swipe
        </div>
      </div>

      {/* Board */}
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="touch-pan-y"
      >
        <Board board={state.board} mergedIds={state.mergedIds} />
      </div>

      <Game2048Modal
        open={state.gameOver || state.won}
        won={state.won}
        score={state.score}
        onClose={closeWinModal}
        onNewGame={newGame}
      />
    </div>
  );
}
