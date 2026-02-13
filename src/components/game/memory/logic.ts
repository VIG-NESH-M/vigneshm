// ============================================================
// MEMORY CARD MATCH - PURE LOGIC
// ============================================================

import type { Card, Difficulty } from "./types";
import { DIFFICULTY_CONFIG, EMOJIS } from "./types";

function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export function generateCards(difficulty: Difficulty): Card[] {
    const { pairs } = DIFFICULTY_CONFIG[difficulty];
    const selected = shuffle([...EMOJIS]).slice(0, pairs);

    const cards: Card[] = [];
    let id = 0;
    for (let i = 0; i < selected.length; i++) {
        cards.push({ id: id++, emoji: selected[i], pairId: i });
        cards.push({ id: id++, emoji: selected[i], pairId: i });
    }

    return shuffle(cards);
}

export function formatTime(secs: number): string {
    const m = String((secs / 60) | 0).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${m}:${s}`;
}

export function getStars(moves: number, thresholds: [number, number]): number {
    if (moves <= thresholds[0]) return 3;
    if (moves <= thresholds[1]) return 2;
    return 1;
}

export function computeScore(
    combo: number,
    basePoints: number,
): number {
    return basePoints * Math.max(1, combo);
}

const BEST_TIME_PREFIX = "memoryBest_";

export function readBestTime(difficulty: Difficulty): number | null {
    if (typeof window === "undefined") return null;
    const raw = window.localStorage.getItem(BEST_TIME_PREFIX + difficulty);
    if (!raw) return null;
    const val = Number(raw);
    return Number.isFinite(val) ? val : null;
}

export function writeBestTime(difficulty: Difficulty, seconds: number): void {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(BEST_TIME_PREFIX + difficulty, String(seconds));
}
