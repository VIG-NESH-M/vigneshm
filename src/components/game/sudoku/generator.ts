// ============================================================
// SUDOKU GENERATOR - Pure functions for puzzle generation
// ============================================================

import type { Grid } from "./types";

/** Fisher-Yates shuffle */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Check if placing num at (r,c) is valid */
function isValid(grid: Grid, r: number, c: number, num: number): boolean {
  for (let i = 0; i < 9; i++) {
    if (grid[r][i] === num || grid[i][c] === num) return false;
  }
  const br = ((r / 3) | 0) * 3;
  const bc = ((c / 3) | 0) * 3;
  for (let i = br; i < br + 3; i++) {
    for (let j = bc; j < bc + 3; j++) {
      if (grid[i][j] === num) return false;
    }
  }
  return true;
}

/** Recursively fill the grid to create a valid solution */
function fill(grid: Grid): boolean {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (grid[r][c] === 0) {
        const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (const n of nums) {
          if (isValid(grid, r, c, n)) {
            grid[r][c] = n;
            if (fill(grid)) return true;
            grid[r][c] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

/** Generate a complete valid Sudoku solution */
export function generateSolution(): Grid {
  const grid: Grid = Array.from({ length: 9 }, () => Array(9).fill(0));
  fill(grid);
  return grid;
}

/** Remove cells from solution to create a puzzle */
export function generatePuzzle(sol: Grid, clueCount: number): Grid {
  const p = sol.map((row) => [...row]);
  const cells: [number, number][] = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      cells.push([r, c]);
    }
  }
  const shuffled = shuffle(cells);
  let removed = 0;
  const toRemove = 81 - clueCount;
  for (const [r, c] of shuffled) {
    if (removed >= toRemove) break;
    p[r][c] = 0;
    removed++;
  }
  return p;
}

/** Create an empty notes grid */
export function createNotesGrid(): Set<number>[][] {
  return Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => new Set<number>()),
  );
}

/** Deep clone a notes grid */
export function cloneNotesGrid(notes: Set<number>[][]): Set<number>[][] {
  return notes.map((row) => row.map((s) => new Set(s)));
}

/** Format seconds to MM:SS */
export function formatTime(secs: number): string {
  const m = String((secs / 60) | 0).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return `${m}:${s}`;
}

/** Count how many times a number appears correctly on the board */
export function countNumber(board: Grid, num: number): number {
  let count = 0;
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === num) count++;
    }
  }
  return count;
}

/** Count correctly filled cells */
export function countFilledCorrect(board: Grid, solution: Grid): number {
  let filled = 0;
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] !== 0 && board[r][c] === solution[r][c]) filled++;
    }
  }
  return filled;
}
