// ============================================================
// MEMORY GAME - Main Component
// ============================================================

import { useMemory } from "./useMemory";
import { formatTime } from "./logic";
import type { Difficulty } from "./types";
import MemoryBoard from "./MemoryBoard";
import MemoryModal from "./MemoryModal";
import MemoryConfetti from "./MemoryConfetti";

const difficulties: { label: string; value: Difficulty }[] = [
  { label: "4×4", value: "4x4" },
  { label: "4×6", value: "4x6" },
  { label: "6×6", value: "6x6" },
];

export default function MemoryGame() {
  const {
    state,
    stars,
    progress,
    flipCard,
    newGame,
    setDifficulty,
    toggleSound,
  } = useMemory();

  return (
    <div className="w-full max-w-[520px] mx-auto select-none">
      {/* Title */}
      <h2
        className="text-center font-bold mb-2 text-transparent bg-clip-text bg-linear-to-br from-blue-400 to-purple-400"
        style={{
          fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
          letterSpacing: "-0.5px",
        }}
      >
        Memory Match
      </h2>

      {/* Top Bar */}
      <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
        <div className="flex gap-3 items-center text-sm text-gray-500 dark:text-neutral-400">
          <span className="flex items-center gap-1">
            ⏱ {formatTime(state.seconds)}
          </span>
          <span className="flex items-center gap-1">🎯 {state.moves}</span>
          <span className="flex items-center gap-1">💰 {state.score}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm">
          {[1, 2, 3].map((s) => (
            <span key={s} className="text-base">
              {s <= stars ? "⭐" : "☆"}
            </span>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="w-full h-1 bg-gray-200 dark:bg-neutral-800 rounded overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-blue-500 to-purple-400 rounded transition-all duration-400"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-right text-[0.7rem] text-gray-400 dark:text-neutral-500 mt-0.5">
          {state.matched.size / 2} / {state.cards.length / 2} pairs
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
        <div className="flex items-center gap-1.5">
          <select
            value={state.difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
            className="px-3 py-1.5 rounded-lg text-sm bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-neutral-700 cursor-pointer outline-none focus:border-blue-500 transition-colors"
          >
            {difficulties.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => newGame()}
            className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.97] transition-all"
          >
            New Game
          </button>
        </div>
        <div className="flex items-center gap-2">
          {state.bestTime !== null && (
            <span className="text-[11px] text-gray-400 dark:text-neutral-500">
              Best: {formatTime(state.bestTime)}
            </span>
          )}
          <button
            onClick={toggleSound}
            className="p-1.5 rounded-lg text-sm bg-gray-200 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 hover:bg-gray-300 dark:hover:bg-neutral-700 transition-colors"
            title={state.soundEnabled ? "Mute sounds" : "Enable sounds"}
          >
            {state.soundEnabled ? "🔊" : "🔇"}
          </button>
        </div>
      </div>

      {/* Combo indicator */}
      {state.combo >= 2 && (
        <div className="text-center mb-2 text-sm font-semibold text-purple-500 dark:text-purple-400 animate-scaleIn">
          🔥 {state.combo}x Combo!
        </div>
      )}

      {/* Board */}
      <MemoryBoard
        cards={state.cards}
        flipped={state.flipped}
        matched={state.matched}
        difficulty={state.difficulty}
        onCardClick={flipCard}
      />

      {/* Modal */}
      <MemoryModal
        open={state.gameOver}
        score={state.score}
        moves={state.moves}
        seconds={state.seconds}
        bestTime={state.bestTime}
        stars={stars}
        onNewGame={() => newGame()}
      />

      {/* Confetti */}
      <MemoryConfetti active={state.gameOver} />
    </div>
  );
}
