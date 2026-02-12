// ============================================================
// SUDOKU GAME HOOK - Full game state & logic
// ============================================================

import { useState, useCallback, useEffect, useRef } from "react";
import type {
  Difficulty,
  SudokuState,
  CellPosition,
  HistoryAction,
  RemovedPeerNote,
} from "./types";
import { CLUES, MAX_MISTAKES } from "./types";
import {
  generateSolution,
  generatePuzzle,
  createNotesGrid,
} from "./generator";

function createInitialState(difficulty: Difficulty): SudokuState {
  const solution = generateSolution();
  const puzzle = generatePuzzle(solution, CLUES[difficulty]);
  const board = puzzle.map((row) => [...row]);
  const given = puzzle.map((row) => row.map((v) => v !== 0));
  const originalGiven = given.map((row) => [...row]);

  return {
    solution,
    board,
    given,
    originalGiven,
    notes: createNotesGrid(),
    selectedCell: null,
    notesMode: false,
    mistakes: 0,
    hintsUsed: 0,
    history: [],
    seconds: 0,
    gameOver: false,
    paused: false,
    difficulty,
    won: false,
  };
}

export function useSudoku() {
  const [state, setState] = useState<SudokuState>(() =>
    createInitialState("medium"),
  );
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer management
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!state.gameOver && !state.paused) {
      timerRef.current = setInterval(() => {
        setState((prev) => {
          if (prev.gameOver || prev.paused) return prev;
          return { ...prev, seconds: prev.seconds + 1 };
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [state.gameOver, state.paused]);

  const newGame = useCallback((difficulty?: Difficulty) => {
    setState((prev) => createInitialState(difficulty ?? prev.difficulty));
  }, []);

  const selectCell = useCallback((r: number, c: number) => {
    setState((prev) => {
      if (prev.gameOver || prev.paused) return prev;
      return { ...prev, selectedCell: { r, c } };
    });
  }, []);

  const togglePause = useCallback(() => {
    setState((prev) => {
      if (prev.gameOver) return prev;
      return { ...prev, paused: !prev.paused };
    });
  }, []);

  const toggleNotes = useCallback(() => {
    setState((prev) => {
      if (prev.gameOver || prev.paused) return prev;
      return { ...prev, notesMode: !prev.notesMode };
    });
  }, []);

  const removePeerNotes = useCallback(
    (
      notes: Set<number>[][],
      r: number,
      c: number,
      num: number,
    ): RemovedPeerNote[] => {
      const removed: RemovedPeerNote[] = [];
      const seen = new Set<number>();

      const tryRemove = (pr: number, pc: number) => {
        const key = pr * 9 + pc;
        if (seen.has(key)) return;
        seen.add(key);
        if (notes[pr][pc].has(num)) {
          notes[pr][pc].delete(num);
          removed.push({ r: pr, c: pc, num });
        }
      };

      for (let i = 0; i < 9; i++) {
        tryRemove(r, i);
        tryRemove(i, c);
      }
      const br = ((r / 3) | 0) * 3;
      const bc = ((c / 3) | 0) * 3;
      for (let ii = br; ii < br + 3; ii++) {
        for (let jj = bc; jj < bc + 3; jj++) {
          tryRemove(ii, jj);
        }
      }
      return removed;
    },
    [],
  );

  const placeNumber = useCallback(
    (num: number) => {
      setState((prev) => {
        if (prev.gameOver || prev.paused || !prev.selectedCell) return prev;
        const { r, c } = prev.selectedCell;
        if (prev.given[r][c]) return prev;

        const newNotes = prev.notes.map((row) => row.map((s) => new Set(s)));
        const newBoard = prev.board.map((row) => [...row]);
        const newHistory: HistoryAction[] = [...prev.history];

        if (prev.notesMode) {
          if (newBoard[r][c] !== 0) return prev;
          const prevNotes = new Set(prev.notes[r][c]);
          if (newNotes[r][c].has(num)) {
            newNotes[r][c].delete(num);
          } else {
            newNotes[r][c].add(num);
          }
          newHistory.push({
            type: "note",
            r,
            c,
            prev: prevNotes,
            val: newBoard[r][c],
          });
          return { ...prev, notes: newNotes, history: newHistory };
        }

        if (newBoard[r][c] === num) return prev;

        const prevVal = newBoard[r][c];
        const prevNotes = new Set(prev.notes[r][c]);

        newBoard[r][c] = num;
        newNotes[r][c].clear();
        const removedPeers = removePeerNotes(newNotes, r, c, num);

        const wasWrong = num !== prev.solution[r][c];
        let newMistakes = prev.mistakes;
        if (wasWrong) newMistakes++;

        newHistory.push({
          type: "place",
          r,
          c,
          prevVal,
          prevNotes,
          removedPeerNotes: removedPeers,
          wasWrong,
        });

        if (newMistakes >= MAX_MISTAKES) {
          return {
            ...prev,
            board: newBoard,
            notes: newNotes,
            mistakes: newMistakes,
            history: newHistory,
            gameOver: true,
            won: false,
          };
        }

        // Check win
        let allCorrect = true;
        for (let rr = 0; rr < 9; rr++) {
          for (let cc = 0; cc < 9; cc++) {
            if (newBoard[rr][cc] !== prev.solution[rr][cc]) {
              allCorrect = false;
              break;
            }
          }
          if (!allCorrect) break;
        }

        return {
          ...prev,
          board: newBoard,
          notes: newNotes,
          mistakes: newMistakes,
          history: newHistory,
          gameOver: allCorrect,
          won: allCorrect,
        };
      });
    },
    [removePeerNotes],
  );

  const erase = useCallback(() => {
    setState((prev) => {
      if (prev.gameOver || prev.paused || !prev.selectedCell) return prev;
      const { r, c } = prev.selectedCell;
      if (prev.given[r][c]) return prev;
      if (prev.board[r][c] === 0 && prev.notes[r][c].size === 0) return prev;

      const prevVal = prev.board[r][c];
      const prevNotes = new Set(prev.notes[r][c]);

      const newBoard = prev.board.map((row) => [...row]);
      const newNotes = prev.notes.map((row) => row.map((s) => new Set(s)));
      newBoard[r][c] = 0;
      newNotes[r][c].clear();

      const newHistory: HistoryAction[] = [
        ...prev.history,
        { type: "erase", r, c, prevVal, prevNotes },
      ];

      return { ...prev, board: newBoard, notes: newNotes, history: newHistory };
    });
  }, []);

  const undo = useCallback(() => {
    setState((prev) => {
      if (prev.gameOver || prev.paused || prev.history.length === 0)
        return prev;
      const newHistory = [...prev.history];
      const action = newHistory.pop()!;
      const { r, c } = action;

      const newBoard = prev.board.map((row) => [...row]);
      const newNotes = prev.notes.map((row) => row.map((s) => new Set(s)));
      const newGiven = prev.given.map((row) => [...row]);
      let newMistakes = prev.mistakes;
      let newHints = prev.hintsUsed;

      if (action.type === "place") {
        newBoard[r][c] = action.prevVal;
        newNotes[r][c] = new Set(action.prevNotes);
        if (action.wasWrong) newMistakes = Math.max(0, newMistakes - 1);
        for (const pn of action.removedPeerNotes) {
          newNotes[pn.r][pn.c].add(pn.num);
        }
      } else if (action.type === "erase") {
        newBoard[r][c] = action.prevVal;
        newNotes[r][c] = new Set(action.prevNotes);
      } else if (action.type === "note") {
        newNotes[r][c] = new Set(action.prev);
        newBoard[r][c] = action.val;
      } else if (action.type === "hint") {
        newBoard[r][c] = action.prevVal;
        newNotes[r][c] = new Set(action.prevNotes);
        newGiven[r][c] = action.wasGivenBefore;
        newHints = Math.max(0, newHints - 1);
        for (const pn of action.removedPeerNotes) {
          newNotes[pn.r][pn.c].add(pn.num);
        }
      }

      return {
        ...prev,
        board: newBoard,
        notes: newNotes,
        given: newGiven,
        mistakes: newMistakes,
        hintsUsed: newHints,
        history: newHistory,
      };
    });
  }, []);

  const giveHint = useCallback(() => {
    setState((prev) => {
      if (prev.gameOver || prev.paused) return prev;

      const empties: CellPosition[] = [];
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (prev.board[r][c] !== prev.solution[r][c]) {
            empties.push({ r, c });
          }
        }
      }
      if (empties.length === 0) return prev;

      const pick = empties[(Math.random() * empties.length) | 0];
      const { r, c } = pick;
      const num = prev.solution[r][c];

      const prevVal = prev.board[r][c];
      const prevNotes = new Set(prev.notes[r][c]);

      const newBoard = prev.board.map((row) => [...row]);
      const newNotes = prev.notes.map((row) => row.map((s) => new Set(s)));
      const newGiven = prev.given.map((row) => [...row]);

      newBoard[r][c] = num;
      newNotes[r][c].clear();

      const removedPeers = removePeerNotes(newNotes, r, c, num);
      const wasGivenBefore = prev.originalGiven[r][c];
      newGiven[r][c] = true;

      const newHistory: HistoryAction[] = [
        ...prev.history,
        {
          type: "hint",
          r,
          c,
          prevVal,
          prevNotes,
          removedPeerNotes: removedPeers,
          wasGivenBefore,
        },
      ];

      // Check win
      let allCorrect = true;
      for (let rr = 0; rr < 9; rr++) {
        for (let cc = 0; cc < 9; cc++) {
          if (newBoard[rr][cc] !== prev.solution[rr][cc]) {
            allCorrect = false;
            break;
          }
        }
        if (!allCorrect) break;
      }

      return {
        ...prev,
        board: newBoard,
        notes: newNotes,
        given: newGiven,
        hintsUsed: prev.hintsUsed + 1,
        history: newHistory,
        selectedCell: pick,
        gameOver: allCorrect,
        won: allCorrect,
      };
    });
  }, [removePeerNotes]);

  const setDifficulty = useCallback((diff: Difficulty) => {
    setState(createInitialState(diff));
  }, []);

  return {
    state,
    newGame,
    selectCell,
    placeNumber,
    erase,
    undo,
    giveHint,
    toggleNotes,
    togglePause,
    setDifficulty,
  };
}
