"use client";

import { useState, useEffect, useCallback } from "react";
import { SessionProgress, StoredProgress, SessionState } from "@/types/progress";
import {
  saveProgress,
  loadProgress,
  getSessionKey,
  getDefaultProgress,
} from "@/lib/progress/storage";

interface SessionSummary {
  problemsAttempted: number;
  problemsCorrect: number;
  bestStreak: number;
  percentCorrect: number;
}

interface UseProgressReturn {
  session: SessionProgress;
  recordAnswer: (correct: boolean) => void;
  pauseSession: () => void;
  resumeSession: () => void;
  endSession: () => SessionSummary;
  resetSession: () => void;
  globalStats: StoredProgress["globalStats"];
}

function getDefaultSession(mode: string, difficulty: string): SessionProgress {
  return {
    mode,
    difficulty,
    problemsAttempted: 0,
    problemsCorrect: 0,
    currentStreak: 0,
    bestStreak: 0,
    currentProblemIndex: 0,
    state: "active",
  };
}

export function useProgress(mode: string, difficulty: string): UseProgressReturn {
  const [storedProgress, setStoredProgress] = useState<StoredProgress>(getDefaultProgress);
  const [session, setSession] = useState<SessionProgress>(() =>
    getDefaultSession(mode, difficulty)
  );
  const [isLoaded, setIsLoaded] = useState(false);

  const sessionKey = getSessionKey(mode, difficulty);

  // Load on mount
  useEffect(() => {
    const loaded = loadProgress();
    setStoredProgress(loaded);

    const existingSession = loaded.sessions[sessionKey];
    if (existingSession && existingSession.state !== "completed") {
      setSession(existingSession);
    } else {
      setSession(getDefaultSession(mode, difficulty));
    }
    setIsLoaded(true);
  }, [sessionKey, mode, difficulty]);

  // Save on changes (only after initial load)
  useEffect(() => {
    if (!isLoaded) return;

    const updated: StoredProgress = {
      ...storedProgress,
      sessions: {
        ...storedProgress.sessions,
        [sessionKey]: session,
      },
    };
    saveProgress(updated);
    setStoredProgress(updated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, isLoaded]);

  const recordAnswer = useCallback((correct: boolean) => {
    setSession((prev) => {
      const newStreak = correct ? prev.currentStreak + 1 : 0;
      const newBestStreak = Math.max(prev.bestStreak, newStreak);

      // Update global stats
      setStoredProgress((prevStored) => ({
        ...prevStored,
        globalStats: {
          totalProblems: prevStored.globalStats.totalProblems + 1,
          totalCorrect: prevStored.globalStats.totalCorrect + (correct ? 1 : 0),
          allTimeBestStreak: Math.max(
            prevStored.globalStats.allTimeBestStreak,
            newBestStreak
          ),
        },
      }));

      return {
        ...prev,
        problemsAttempted: prev.problemsAttempted + 1,
        problemsCorrect: prev.problemsCorrect + (correct ? 1 : 0),
        currentStreak: newStreak,
        bestStreak: newBestStreak,
        currentProblemIndex: prev.currentProblemIndex + 1,
      };
    });
  }, []);

  const pauseSession = useCallback(() => {
    setSession((prev) => ({ ...prev, state: "paused" as SessionState }));
  }, []);

  const resumeSession = useCallback(() => {
    setSession((prev) => ({ ...prev, state: "active" as SessionState }));
  }, []);

  const endSession = useCallback((): SessionSummary => {
    const summary: SessionSummary = {
      problemsAttempted: session.problemsAttempted,
      problemsCorrect: session.problemsCorrect,
      bestStreak: session.bestStreak,
      percentCorrect:
        session.problemsAttempted > 0
          ? Math.round((session.problemsCorrect / session.problemsAttempted) * 100)
          : 0,
    };

    setSession((prev) => ({ ...prev, state: "completed" as SessionState }));
    return summary;
  }, [session]);

  const resetSession = useCallback(() => {
    setSession(getDefaultSession(mode, difficulty));
  }, [mode, difficulty]);

  return {
    session,
    recordAnswer,
    pauseSession,
    resumeSession,
    endSession,
    resetSession,
    globalStats: storedProgress.globalStats,
  };
}
