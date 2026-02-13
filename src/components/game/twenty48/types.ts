// ============================================================
// 2048 GAME TYPES
// ============================================================

export type Direction = "up" | "down" | "left" | "right";

export interface Tile {
    id: number;
    value: number;
}

export type Cell = Tile | null;
export type Board = Cell[][];

export interface MoveResult {
    board: Board;
    scoreGain: number;
    moved: boolean;
    mergedIds: Set<number>;
    won: boolean;
}

export interface UndoState {
    board: Board;
    score: number;
    gameOver: boolean;
    won: boolean;
}
