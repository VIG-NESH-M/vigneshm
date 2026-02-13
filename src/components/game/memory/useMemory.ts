// ============================================================
// MEMORY CARD MATCH - GAME HOOK
// ============================================================

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Card, Difficulty, MemoryState } from "./types";
import { DIFFICULTY_CONFIG, STAR_THRESHOLDS } from "./types";
import {
    generateCards,
    getStars,
    computeScore,
    readBestTime,
    writeBestTime,
} from "./logic";

function createAudioCtx(): AudioContext | null {
    if (typeof window === "undefined") return null;
    const Ctx: typeof AudioContext | undefined =
        window.AudioContext ??
        (window as never as Record<string, typeof AudioContext>).webkitAudioContext;
    if (!Ctx) return null;
    return new Ctx();
}

function createInitialState(difficulty: Difficulty): MemoryState {
    return {
        cards: generateCards(difficulty),
        flipped: new Set(),
        matched: new Set(),
        moves: 0,
        score: 0,
        combo: 0,
        seconds: 0,
        bestTime: readBestTime(difficulty),
        gameOver: false,
        started: false,
        difficulty,
        soundEnabled: true,
    };
}

export function useMemory() {
    const [state, setState] = useState<MemoryState>(() =>
        createInitialState("4x4"),
    );
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const flipTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const lockRef = useRef(false);
    const audioRef = useRef<AudioContext | null>(null);

    // Cleanup
    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
            if (audioRef.current) audioRef.current.close();
        };
    }, []);

    // Timer
    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        if (state.started && !state.gameOver) {
            timerRef.current = setInterval(() => {
                setState((p) => {
                    if (p.gameOver || !p.started) return p;
                    return { ...p, seconds: p.seconds + 1 };
                });
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [state.started, state.gameOver]);

    const playSound = useCallback(
        (freq: number, dur: number) => {
            if (!state.soundEnabled) return;
            if (!audioRef.current) audioRef.current = createAudioCtx();
            const ctx = audioRef.current;
            if (!ctx) return;
            if (ctx.state === "suspended") ctx.resume();

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.value = freq;
            gain.gain.value = 0.05;
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
            osc.stop(ctx.currentTime + dur);
        },
        [state.soundEnabled],
    );

    const flipCard = useCallback(
        (cardId: number) => {
            if (lockRef.current) return;

            setState((prev) => {
                if (prev.gameOver) return prev;
                if (prev.flipped.has(cardId) || prev.matched.has(cardId)) return prev;
                if (prev.flipped.size >= 2) return prev;

                const started = prev.started || true;
                const newFlipped = new Set(prev.flipped);
                newFlipped.add(cardId);

                // First card flip
                if (newFlipped.size === 1) {
                    playSound(440, 0.06);
                    return { ...prev, flipped: newFlipped, started };
                }

                // Second card flip — check match
                const flippedCards: Card[] = [];
                for (const id of newFlipped) {
                    const card = prev.cards.find((c) => c.id === id);
                    if (card) flippedCards.push(card);
                }

                const isMatch =
                    flippedCards.length === 2 &&
                    flippedCards[0].pairId === flippedCards[1].pairId;

                if (isMatch) {
                    playSound(660, 0.1);
                    const newMatched = new Set(prev.matched);
                    for (const id of newFlipped) newMatched.add(id);
                    const newCombo = prev.combo + 1;
                    const scoreGain = computeScore(newCombo, 100);
                    const newScore = prev.score + scoreGain;
                    const newMoves = prev.moves + 1;

                    const totalPairs = DIFFICULTY_CONFIG[prev.difficulty].pairs;
                    const matchedPairs = newMatched.size / 2;
                    const isGameOver = matchedPairs >= totalPairs;

                    let bestTime = prev.bestTime;
                    if (isGameOver) {
                        const finalTime = prev.seconds;
                        if (bestTime === null || finalTime < bestTime) {
                            bestTime = finalTime;
                            writeBestTime(prev.difficulty, finalTime);
                        }
                    }

                    return {
                        ...prev,
                        flipped: new Set<number>(),
                        matched: newMatched,
                        moves: newMoves,
                        score: newScore,
                        combo: newCombo,
                        started,
                        gameOver: isGameOver,
                        bestTime,
                    };
                }

                // No match — lock and flip back after delay
                playSound(330, 0.06);
                lockRef.current = true;

                flipTimeoutRef.current = setTimeout(() => {
                    setState((p) => ({
                        ...p,
                        flipped: new Set<number>(),
                        combo: 0,
                    }));
                    lockRef.current = false;
                }, 700);

                return {
                    ...prev,
                    flipped: newFlipped,
                    moves: prev.moves + 1,
                    combo: 0,
                    started,
                };
            });
        },
        [playSound],
    );

    const newGame = useCallback((difficulty?: Difficulty) => {
        if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
        lockRef.current = false;
        setState((prev) => createInitialState(difficulty ?? prev.difficulty));
    }, []);

    const setDifficulty = useCallback((diff: Difficulty) => {
        if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
        lockRef.current = false;
        setState(createInitialState(diff));
    }, []);

    const toggleSound = useCallback(() => {
        setState((p) => ({ ...p, soundEnabled: !p.soundEnabled }));
    }, []);

    const stars = useMemo(
        () => getStars(state.moves, STAR_THRESHOLDS[state.difficulty]),
        [state.moves, state.difficulty],
    );

    const progress = useMemo(() => {
        const total = DIFFICULTY_CONFIG[state.difficulty].pairs;
        return total > 0 ? (state.matched.size / 2 / total) * 100 : 0;
    }, [state.matched.size, state.difficulty]);

    const result = useMemo(
        () => ({
            state,
            stars,
            progress,
            flipCard,
            newGame,
            setDifficulty,
            toggleSound,
        }),
        [state, stars, progress, flipCard, newGame, setDifficulty, toggleSound],
    );

    return result;
}
