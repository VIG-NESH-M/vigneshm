// ============================================================
// MEMORY CARD MATCH - TYPES
// ============================================================

export type Difficulty = "4x4" | "4x6" | "6x6";

export interface Card {
    id: number;
    emoji: string;
    pairId: number;
}

export interface MemoryState {
    cards: Card[];
    flipped: Set<number>;
    matched: Set<number>;
    moves: number;
    score: number;
    combo: number;
    seconds: number;
    bestTime: number | null;
    gameOver: boolean;
    started: boolean;
    difficulty: Difficulty;
    soundEnabled: boolean;
}

export const DIFFICULTY_CONFIG: Record<Difficulty, { cols: number; rows: number; pairs: number }> = {
    "4x4": { cols: 4, rows: 4, pairs: 8 },
    "4x6": { cols: 4, rows: 6, pairs: 12 },
    "6x6": { cols: 6, rows: 6, pairs: 18 },
};

export const EMOJIS = [
    "🚀", "🎯", "🔥", "⚡", "🎨", "🎵", "🌟", "💎",
    "🦊", "🐼", "🦁", "🐯", "🦋", "🌺", "🍀", "🌈",
    "🎭", "🎪",
];

export const STAR_THRESHOLDS: Record<Difficulty, [number, number]> = {
    "4x4": [12, 18],
    "4x6": [20, 30],
    "6x6": [30, 45],
};
