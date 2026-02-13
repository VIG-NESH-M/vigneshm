// ============================================================
// 2048 CONTROLS
// ============================================================

import { memo } from "react";

interface ControlsProps {
  onNewGame: () => void;
  onUndo: () => void;
  canUndo: boolean;
}

const Controls = memo(function Controls({
  onNewGame,
  onUndo,
  canUndo,
}: ControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onUndo}
        disabled={!canUndo}
        className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#bbada0] text-white hover:bg-[#a69688] active:scale-[0.98] transition-all disabled:opacity-40 disabled:pointer-events-none"
      >
        Undo
      </button>
      <button
        onClick={onNewGame}
        className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#8f7a66] text-white hover:bg-[#7c6a58] active:scale-[0.98] transition-all"
      >
        New Game
      </button>
    </div>
  );
});

export default Controls;
