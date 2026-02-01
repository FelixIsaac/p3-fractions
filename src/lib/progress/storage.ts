import { StoredProgress } from "@/types/progress";

const STORAGE_KEY = "fraction-trainer-progress";

export function getDefaultProgress(): StoredProgress {
  return {
    version: 1,
    lastUpdated: new Date().toISOString(),
    sessions: {},
    globalStats: {
      totalProblems: 0,
      totalCorrect: 0,
      allTimeBestStreak: 0,
    },
  };
}

export function saveProgress(progress: StoredProgress): void {
  if (typeof window === "undefined") return;
  try {
    progress.lastUpdated = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    console.warn("Failed to save progress to localStorage");
  }
}

export function loadProgress(): StoredProgress {
  if (typeof window === "undefined") return getDefaultProgress();
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return getDefaultProgress();
    const parsed = JSON.parse(stored);
    if (parsed.version !== 1) return getDefaultProgress();
    return parsed as StoredProgress;
  } catch {
    return getDefaultProgress();
  }
}

export function clearProgress(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    console.warn("Failed to clear progress from localStorage");
  }
}

export function getSessionKey(mode: string, difficulty: string): string {
  return `${mode}-${difficulty}`;
}
