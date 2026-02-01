export interface SessionProgress {
  mode: string;
  difficulty: string;
  problemsAttempted: number;
  problemsCorrect: number;
  currentStreak: number;
  bestStreak: number;
  currentProblemIndex: number;
  state: SessionState;
}

export interface StoredProgress {
  version: 1;
  lastUpdated: string;
  sessions: Record<string, SessionProgress>;
  globalStats: {
    totalProblems: number;
    totalCorrect: number;
    allTimeBestStreak: number;
  };
}

export type SessionState = "active" | "paused" | "completed";
