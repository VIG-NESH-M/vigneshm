// ============================================================
// SUDOKU GAME TYPES
// ============================================================

export type Difficulty = "easy" | "medium" | "hard" | "expert";

export type Grid = number[][];
export type GivenGrid = boolean[][];
export type NotesGrid = Set<number>[][];

export interface CellPosition {
  r: number;
  c: number;
}

export interface RemovedPeerNote {
  r: number;
  c: number;
  num: number;
}

export interface PlaceAction {
  type: "place";
  r: number;
  c: number;
  prevVal: number;
  prevNotes: Set<number>;
  removedPeerNotes: RemovedPeerNote[];
  wasWrong: boolean;
}

export interface EraseAction {
  type: "erase";
  r: number;
  c: number;
  prevVal: number;
  prevNotes: Set<number>;
}

export interface NoteAction {
  type: "note";
  r: number;
  c: number;
  prev: Set<number>;
  val: number;
}

export interface HintAction {
  type: "hint";
  r: number;
  c: number;
  prevVal: number;
  prevNotes: Set<number>;
  removedPeerNotes: RemovedPeerNote[];
  wasGivenBefore: boolean;
}

export type HistoryAction = PlaceAction | EraseAction | NoteAction | HintAction;

export interface SudokuState {
  solution: Grid;
  board: Grid;
  given: GivenGrid;
  originalGiven: GivenGrid;
  notes: NotesGrid;
  selectedCell: CellPosition | null;
  notesMode: boolean;
  mistakes: number;
  hintsUsed: number;
  history: HistoryAction[];
  seconds: number;
  gameOver: boolean;
  paused: boolean;
  difficulty: Difficulty;
  won: boolean;
}

export const CLUES: Record<Difficulty, number> = {
  easy: 45,
  medium: 35,
  hard: 27,
  expert: 22,
};

export const MAX_MISTAKES = 3;
