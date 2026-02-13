// ============================================================
// 2048 GAME LOGIC - Pure functions
// ============================================================

import type { Board, Cell, Direction, MoveResult, Tile } from "./types";

export const BOARD_SIZE = 4;
export const WIN_VALUE = 2048;

export function createEmptyBoard(): Board {
    return Array.from({ length: BOARD_SIZE }, () =>
        Array.from({ length: BOARD_SIZE }, () => null),
    );
}

export function getEmptyCells(board: Board): Array<{ r: number; c: number }> {
    const cells: Array<{ r: number; c: number }> = [];
    for (let r = 0; r < BOARD_SIZE; r++) {
        for (let c = 0; c < BOARD_SIZE; c++) {
            if (!board[r][c]) cells.push({ r, c });
        }
    }
    return cells;
}

export function addRandomTile(
    board: Board,
    nextId: () => number,
): Board {
    const empties = getEmptyCells(board);
    if (empties.length === 0) return board;
    const pick = empties[(Math.random() * empties.length) | 0];
    const value = Math.random() < 0.9 ? 2 : 4;
    const newBoard = cloneBoard(board);
    newBoard[pick.r][pick.c] = { id: nextId(), value };
    return newBoard;
}

export function createInitialBoard(nextId: () => number): Board {
    let board = createEmptyBoard();
    board = addRandomTile(board, nextId);
    board = addRandomTile(board, nextId);
    return board;
}

export function cloneBoard(board: Board): Board {
    return board.map((row) => row.map((cell) => (cell ? { ...cell } : null)));
}

function compressAndMerge(
    line: Cell[],
    nextId: () => number,
): { line: Cell[]; scoreGain: number; mergedIds: Set<number> } {
    const tiles = line.filter(Boolean) as Tile[];
    const result: Cell[] = [];
    const mergedIds = new Set<number>();
    let scoreGain = 0;

    for (let i = 0; i < tiles.length; i++) {
        const current = tiles[i];
        const next = tiles[i + 1];

        if (next && current.value === next.value) {
            const mergedValue = current.value * 2;
            const mergedTile: Tile = { id: nextId(), value: mergedValue };
            result.push(mergedTile);
            mergedIds.add(mergedTile.id);
            scoreGain += mergedValue;
            i++; // skip next
        } else {
            result.push({ ...current });
        }
    }

    while (result.length < BOARD_SIZE) {
        result.push(null);
    }

    return { line: result, scoreGain, mergedIds };
}

function lineEquals(a: Cell[], b: Cell[]): boolean {
    for (let i = 0; i < BOARD_SIZE; i++) {
        const ca = a[i];
        const cb = b[i];
        if (!ca && !cb) continue;
        if (!ca || !cb) return false;
        if (ca.value !== cb.value || ca.id !== cb.id) return false;
    }
    return true;
}

export function moveBoard(
    board: Board,
    direction: Direction,
    nextId: () => number,
): MoveResult {
    let moved = false;
    let scoreGain = 0;
    const mergedIds = new Set<number>();

    const newBoard = createEmptyBoard();

    const applyLine = (line: Cell[], r: number, c: number, dir: Direction) => {
        const { line: mergedLine, scoreGain: sg, mergedIds: mids } =
            compressAndMerge(line, nextId);
        scoreGain += sg;
        mids.forEach((id) => mergedIds.add(id));

        if (!lineEquals(line, mergedLine)) moved = true;

        for (let i = 0; i < BOARD_SIZE; i++) {
            if (dir === "left") newBoard[r][i] = mergedLine[i];
            if (dir === "right") newBoard[r][BOARD_SIZE - 1 - i] = mergedLine[i];
            if (dir === "up") newBoard[i][c] = mergedLine[i];
            if (dir === "down") newBoard[BOARD_SIZE - 1 - i][c] = mergedLine[i];
        }
    };

    if (direction === "left" || direction === "right") {
        for (let r = 0; r < BOARD_SIZE; r++) {
            const row = [...board[r]];
            const line = direction === "right" ? row.reverse() : row;
            applyLine(line, r, 0, direction);
        }
    } else {
        for (let c = 0; c < BOARD_SIZE; c++) {
            const col: Cell[] = [];
            for (let r = 0; r < BOARD_SIZE; r++) col.push(board[r][c]);
            const line = direction === "down" ? col.reverse() : col;
            applyLine(line, 0, c, direction);
        }
    }

    let won = false;
    for (let r = 0; r < BOARD_SIZE; r++) {
        for (let c = 0; c < BOARD_SIZE; c++) {
            const cell = newBoard[r][c];
            if (cell && cell.value >= WIN_VALUE) {
                won = true;
                break;
            }
        }
        if (won) break;
    }

    return { board: newBoard, scoreGain, moved, mergedIds, won };
}

export function canMove(board: Board): boolean {
    if (getEmptyCells(board).length > 0) return true;

    for (let r = 0; r < BOARD_SIZE; r++) {
        for (let c = 0; c < BOARD_SIZE; c++) {
            const cell = board[r][c];
            if (!cell) continue;
            const right = c + 1 < BOARD_SIZE ? board[r][c + 1] : null;
            const down = r + 1 < BOARD_SIZE ? board[r + 1][c] : null;
            if (right && right.value === cell.value) return true;
            if (down && down.value === cell.value) return true;
        }
    }

    return false;
}
