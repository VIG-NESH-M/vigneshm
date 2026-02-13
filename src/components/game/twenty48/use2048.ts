// ============================================================
// 2048 GAME HOOK - State + Logic Wiring
// ============================================================

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Board, Direction, UndoState } from "./types";
import {
    addRandomTile,
    canMove,
    createInitialBoard,
    moveBoard,
} from "./logic";

const BEST_SCORE_KEY = "bestScore2048";

function readBestScore(): number {
    if (typeof window === "undefined") return 0;
    const raw = window.localStorage.getItem(BEST_SCORE_KEY);
    const val = raw ? Number(raw) : 0;
    return Number.isFinite(val) ? val : 0;
}

function writeBestScore(score: number) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(BEST_SCORE_KEY, String(score));
}

function createAudio(): AudioContext | null {
    if (typeof window === "undefined") return null;
    const Ctx: typeof AudioContext | undefined = window.AudioContext ?? (window as never as Record<string, typeof AudioContext>).webkitAudioContext;
    if (!Ctx) return null;
    return new Ctx();
}

export function use2048() {
    const idRef = useRef(1);
    const audioRef = useRef<AudioContext | null>(null);
    const [board, setBoard] = useState<Board>(() => {
        let initId = 1;
        const b = createInitialBoard(() => initId++);
        idRef.current = initId;
        return b;
    });
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(() => readBestScore());
    const [gameOver, setGameOver] = useState(false);
    const [won, setWon] = useState(false);
    const [mergedIds, setMergedIds] = useState<Set<number>>(() => new Set());
    const [undoState, setUndoState] = useState<UndoState | null>(null);

    const mergedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (mergedTimeoutRef.current) clearTimeout(mergedTimeoutRef.current);
            if (audioRef.current) audioRef.current.close();
        };
    }, []);

    useEffect(() => {
        if (mergedIds.size === 0) return;
        if (mergedTimeoutRef.current) clearTimeout(mergedTimeoutRef.current);
        mergedTimeoutRef.current = setTimeout(() => {
            setMergedIds(new Set());
        }, 160);
    }, [mergedIds]);

    const playMergeSound = useCallback(() => {
        if (!audioRef.current) audioRef.current = createAudio();
        const ctx = audioRef.current;
        if (!ctx) return;
        if (ctx.state === "suspended") ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.value = 520;
        gain.gain.value = 0.06;

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
        osc.stop(ctx.currentTime + 0.08);
    }, []);

    const updateBest = useCallback(
        (nextScore: number) => {
            if (nextScore > bestScore) {
                setBestScore(nextScore);
                writeBestScore(nextScore);
            }
        },
        [bestScore],
    );

    const newGame = useCallback(() => {
        setBoard(createInitialBoard(() => idRef.current++));
        setScore(0);
        setGameOver(false);
        setWon(false);
        setMergedIds(new Set());
        setUndoState(null);
    }, []);

    const undo = useCallback(() => {
        if (!undoState) return;
        setBoard(undoState.board);
        setScore(undoState.score);
        setGameOver(undoState.gameOver);
        setWon(undoState.won);
        setUndoState(null);
        setMergedIds(new Set());
    }, [undoState]);

    const move = useCallback(
        (dir: Direction) => {
            if (gameOver) return;

            const { board: movedBoard, scoreGain, moved, mergedIds, won: didWin } =
                moveBoard(board, dir, () => idRef.current++);

            if (!moved) return;

            setUndoState({ board, score, gameOver, won });

            const nextBoard = addRandomTile(movedBoard, () => idRef.current++);
            setBoard(nextBoard);

            const nextScore = score + scoreGain;
            setScore(nextScore);
            updateBest(nextScore);

            if (mergedIds.size > 0) {
                setMergedIds(mergedIds);
                playMergeSound();
            }

            if (didWin) setWon(true);

            const stillCanMove = canMove(nextBoard);
            if (!stillCanMove) setGameOver(true);
        },
        [board, score, gameOver, won, updateBest, playMergeSound],
    );

    const closeWinModal = useCallback(() => {
        setWon(false);
    }, []);

    const state = useMemo(
        () => ({
            board,
            score,
            bestScore,
            gameOver,
            won,
            mergedIds,
            canUndo: Boolean(undoState),
        }),
        [board, score, bestScore, gameOver, won, mergedIds, undoState],
    );

    return {
        state,
        move,
        newGame,
        undo,
        closeWinModal,
    };
}
