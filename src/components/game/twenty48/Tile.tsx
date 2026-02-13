// ============================================================
// 2048 TILE
// ============================================================

import { memo } from "react";
import { motion } from "framer-motion";
import type { Tile as TileType } from "./types";

const tileColors: Record<number, string> = {
  2: "bg-[#eee4da] text-[#776e65]",
  4: "bg-[#ede0c8] text-[#776e65]",
  8: "bg-[#f2b179] text-white",
  16: "bg-[#f59563] text-white",
  32: "bg-[#f67c5f] text-white",
  64: "bg-[#f65e3b] text-white",
  128: "bg-[#edcf72] text-white",
  256: "bg-[#edcc61] text-white",
  512: "bg-[#edc850] text-white",
  1024: "bg-[#edc53f] text-white",
  2048: "bg-[#edc22e] text-white",
};

const tileTextSize: Record<number, string> = {
  2: "text-3xl",
  4: "text-3xl",
  8: "text-3xl",
  16: "text-3xl",
  32: "text-3xl",
  64: "text-3xl",
  128: "text-2xl",
  256: "text-2xl",
  512: "text-2xl",
  1024: "text-xl",
  2048: "text-xl",
};

interface TileProps {
  tile: TileType;
  row: number;
  col: number;
  merged: boolean;
}

const Tile = memo(function Tile({ tile, row, col, merged }: TileProps) {
  const baseColor = tileColors[tile.value] ?? "bg-[#3c3a32] text-white";
  const textSize = tileTextSize[tile.value] ?? "text-xl";

  return (
    <motion.div
      layout
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: merged ? 1.08 : 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 420, damping: 30 }}
      className={`absolute flex items-center justify-center rounded-xl shadow-md ${baseColor} ${textSize} font-bold select-none`}
      style={{
        top: `calc(${row} * (25% + 3px))`,
        left: `calc(${col} * (25% + 3px))`,
        width: "calc(25% - 9px)",
        height: "calc(25% - 9px)",
      }}
    >
      {tile.value}
    </motion.div>
  );
});

export default Tile;
