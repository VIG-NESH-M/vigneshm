// ============================================================
// 2048 SCORE PANEL
// ============================================================

import { memo } from "react";

interface ScorePanelProps {
  score: number;
  bestScore: number;
}

const ScorePanel = memo(function ScorePanel({
  score,
  bestScore,
}: ScorePanelProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-xl bg-[#8f7a66] text-white px-3 py-2 text-center min-w-[90px] shadow-sm">
        <div className="text-[10px] uppercase tracking-wider opacity-80">
          Score
        </div>
        <div className="text-lg font-bold leading-tight">{score}</div>
      </div>
      <div className="rounded-xl bg-[#8f7a66] text-white px-3 py-2 text-center min-w-[90px] shadow-sm">
        <div className="text-[10px] uppercase tracking-wider opacity-80">
          Best
        </div>
        <div className="text-lg font-bold leading-tight">{bestScore}</div>
      </div>
    </div>
  );
});

export default ScorePanel;
