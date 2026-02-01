"use client";

import { useState, useCallback, useMemo } from "react";
import { Fraction, ProblemType } from "@/types/fraction";
import { getHint, HintLevel, HINT_LEVELS } from "@/lib/feedback/hints";

interface UseHintsReturn {
  currentLevel: HintLevel | null;
  hintsExhausted: boolean;
  currentHint: string | null;
  requestHint: () => void;
  resetHints: () => void;
}

export function useHints(
  problemType: ProblemType,
  fractionA: Fraction,
  fractionB: Fraction
): UseHintsReturn {
  const [currentLevel, setCurrentLevel] = useState<HintLevel | null>(null);

  const hintsExhausted = currentLevel === HINT_LEVELS;

  const currentHint = useMemo(() => {
    if (currentLevel === null) return null;
    return getHint(problemType, currentLevel, fractionA, fractionB);
  }, [currentLevel, problemType, fractionA, fractionB]);

  const requestHint = useCallback(() => {
    if (hintsExhausted) return;

    setCurrentLevel((prev) => {
      if (prev === null) return 1;
      if (prev < HINT_LEVELS) return (prev + 1) as HintLevel;
      return prev;
    });
  }, [hintsExhausted]);

  const resetHints = useCallback(() => {
    setCurrentLevel(null);
  }, []);

  return {
    currentLevel,
    hintsExhausted,
    currentHint,
    requestHint,
    resetHints,
  };
}
