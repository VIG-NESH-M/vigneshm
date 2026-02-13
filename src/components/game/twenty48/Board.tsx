// ============================================================
// 2048 BOARD
// ============================================================

import { memo, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import type { Board as BoardType } from "./types";
import Tile from "./Tile";

interface BoardProps {
  board: BoardType;
  mergedIds: Set<number>;
}

const Board = memo(function Board({ board, mergedIds }: BoardProps) {
  const tiles = useMemo(() => {
    const list: Array<{ r: number; c: number; id: number; value: number }> = [];
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const cell = board[r][c];
        if (cell) list.push({ r, c, id: cell.id, value: cell.value });
      }
    }
    return list;
  }, [board]);

  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-square rounded-2xl bg-[#bbada0] p-3 shadow-inner">
      {/* Background grid */}
      <div className="grid grid-cols-4 grid-rows-4 gap-3 w-full h-full">
        {Array.from({ length: 16 }).map((_, idx) => (
          <div key={idx} className="rounded-xl bg-[#cdc1b4]" />
        ))}
      </div>

      {/* Tiles layer */}
      <div className="absolute inset-3">
        <AnimatePresence>
          {tiles.map((t) => (
            <Tile
              key={t.id}
              tile={{ id: t.id, value: t.value }}
              row={t.r}
              col={t.c}
              merged={mergedIds.has(t.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
});

export default Board;
