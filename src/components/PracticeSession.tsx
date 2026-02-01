"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ProblemType, Difficulty, ComparisonProblem } from "@/types/fraction";
import { generateProblem } from "@/lib/fractions/generators";
import { FractionBar } from "./FractionBar";
import { BenchmarkComparisonView } from "./BenchmarkComparisonView";
import { AnswerButtons } from "./AnswerButtons";
import { FeedbackDisplay } from "./FeedbackDisplay";
import { HintButton } from "./HintButton";
import { StreakCounter } from "./StreakCounter";
import { ProgressBar } from "./ProgressBar";
import { SessionSummary } from "./SessionSummary";
import { FractionBuilder } from "./FractionBuilder";
import { useHints } from "@/hooks/useHints";
import { useProgress } from "@/hooks/useProgress";
import { getEncouragingMessage, getCorrectionMessage } from "@/lib/feedback/messages";

type Mode = ProblemType | "mixed";
type BuildPhase = "buildA" | "buildB" | "compare";

interface PracticeSessionProps {
  mode: Mode;
  difficulty: Difficulty;
  buildFirst?: boolean;
  onExit?: () => void;
  resumeFromIndex?: number;
}

const PROBLEM_TYPES: ProblemType[] = ["same-numerator", "same-denominator", "different-both"];
const PROBLEMS_PER_SESSION = 10;

function getModeLabel(mode: Mode): string {
  switch (mode) {
    case "same-numerator":
      return "Same Numerator";
    case "same-denominator":
      return "Same Denominator";
    case "different-both":
      return "Different Both";
    case "mixed":
      return "Mixed";
  }
}

function getDifficultyLabel(difficulty: Difficulty): string {
  return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
}

function formatFraction(numerator: number, denominator: number): string {
  return `${numerator}/${denominator}`;
}

export function PracticeSession({ mode, difficulty, buildFirst = false, onExit, resumeFromIndex }: PracticeSessionProps) {
  const [currentProblem, setCurrentProblem] = useState<ComparisonProblem | null>(null);
  const [feedbackResult, setFeedbackResult] = useState<"correct" | "incorrect" | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [buildPhase, setBuildPhase] = useState<BuildPhase>(buildFirst ? "buildA" : "compare");

  const hintsResetKey = useRef(0);
  const problemCountRef = useRef(0);

  const {
    session,
    recordAnswer,
    pauseSession,
    resumeSession,
    endSession,
    resetSession,
  } = useProgress(mode, difficulty);

  const generateNewProblem = useCallback(() => {
    const problemType: ProblemType =
      mode === "mixed"
        ? PROBLEM_TYPES[Math.floor(Math.random() * PROBLEM_TYPES.length)]
        : mode;

    const problem = generateProblem(problemType, difficulty);
    setCurrentProblem(problem);
    setFeedbackResult(null);
    setFeedbackMessage(null);
    setShowExplanation(false);
    setWrongAttempts(0);
    hintsResetKey.current += 1;
    // Reset to build phase if buildFirst is enabled
    if (buildFirst) {
      setBuildPhase("buildA");
    } else {
      setBuildPhase("compare");
    }
  }, [mode, difficulty, buildFirst]);

  useEffect(() => {
    generateNewProblem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    currentLevel,
    hintsExhausted,
    currentHint,
    requestHint,
    resetHints,
  } = useHints(
    currentProblem?.type ?? "same-numerator",
    currentProblem?.fractionA ?? { numerator: 1, denominator: 2 },
    currentProblem?.fractionB ?? { numerator: 1, denominator: 2 }
  );

  useEffect(() => {
    resetHints();
  }, [hintsResetKey.current, resetHints]);

  const handleBuildAComplete = () => {
    setBuildPhase("buildB");
  };

  const handleBuildBComplete = () => {
    setBuildPhase("compare");
  };

  const handleAnswer = (answer: "A" | "B" | "equal") => {
    if (!currentProblem || isWaiting) return;

    const isCorrect = answer === currentProblem.correctAnswer;
    recordAnswer(isCorrect);
    problemCountRef.current += 1;
    const newProblemCount = problemCountRef.current;

    if (isCorrect) {
      setFeedbackResult("correct");
      setFeedbackMessage(getEncouragingMessage());
      setIsWaiting(true);

      setTimeout(() => {
        setIsWaiting(false);
        // Check if session complete
        if (newProblemCount >= PROBLEMS_PER_SESSION) {
          setShowSummary(true);
        } else {
          generateNewProblem();
        }
      }, 1500);
    } else {
      setFeedbackResult("incorrect");
      setWrongAttempts((prev) => prev + 1);

      if (wrongAttempts === 0 && currentLevel === null) {
        requestHint();
      }

      if (hintsExhausted) {
        setShowExplanation(true);
        setIsWaiting(true);

        setTimeout(() => {
          setFeedbackMessage(getCorrectionMessage());
        }, 1000);

        setTimeout(() => {
          setIsWaiting(false);
          // Check if session complete
          if (newProblemCount >= PROBLEMS_PER_SESSION) {
            setShowSummary(true);
          } else {
            generateNewProblem();
          }
        }, 3000);
      }
    }
  };

  const handleRequestHint = () => {
    if (!isWaiting && !hintsExhausted) {
      requestHint();
    }
  };

  const handlePause = () => {
    pauseSession();
    setIsPaused(true);
  };

  const handleResume = () => {
    resumeSession();
    setIsPaused(false);
  };

  const handleContinuePracticing = () => {
    resetSession();
    problemCountRef.current = 0;
    setShowSummary(false);
    generateNewProblem();
  };

  const handleExit = () => {
    endSession();
    onExit?.();
  };

  if (showSummary) {
    return (
      <SessionSummary
        problems={session.problemsAttempted}
        correct={session.problemsCorrect}
        streak={session.bestStreak}
        onContinue={handleContinuePracticing}
        onExit={handleExit}
      />
    );
  }

  if (isPaused) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-8 min-h-[400px]">
        <h2 className="text-2xl font-bold text-gray-800">Session Paused</h2>
        <p className="text-gray-600">
          {session.problemsAttempted} of {PROBLEMS_PER_SESSION} problems completed
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleResume}
            className="py-4 px-8 min-h-[56px] min-w-[140px] bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-colors"
          >
            Resume
          </button>
          <button
            onClick={handleExit}
            className="py-4 px-8 min-h-[56px] min-w-[140px] bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
          >
            Exit
          </button>
        </div>
      </div>
    );
  }

  if (!currentProblem) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const isDifferentBoth = currentProblem.type === "different-both";
  const displayMessage = feedbackMessage || currentHint;

  // Build Phase A
  if (buildFirst && buildPhase === "buildA") {
    return (
      <div className="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <button
            onClick={handleExit}
            className="px-4 py-3 min-h-[48px] text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            ← Back
          </button>
          <p className="text-lg font-medium text-gray-700">
            {getModeLabel(mode)} - {getDifficultyLabel(difficulty)}
          </p>
          <div className="flex items-center gap-4">
            <StreakCounter
              currentStreak={session.currentStreak}
              bestStreak={session.bestStreak}
            />
            <button
              onClick={handlePause}
              className="px-4 py-3 min-h-[48px] text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Pause
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full">
          <ProgressBar
            current={session.problemsAttempted}
            total={PROBLEMS_PER_SESSION}
          />
        </div>

        {/* Build Phase Indicator */}
        <div className="text-sm text-gray-500">Step 1 of 3: Build fraction A</div>

        {/* Fraction Builder A */}
        <FractionBuilder
          fraction={currentProblem.fractionA}
          label="A"
          onComplete={handleBuildAComplete}
        />
      </div>
    );
  }

  // Build Phase B
  if (buildFirst && buildPhase === "buildB") {
    return (
      <div className="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <button
            onClick={handleExit}
            className="px-4 py-3 min-h-[48px] text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            ← Back
          </button>
          <p className="text-lg font-medium text-gray-700">
            {getModeLabel(mode)} - {getDifficultyLabel(difficulty)}
          </p>
          <div className="flex items-center gap-4">
            <StreakCounter
              currentStreak={session.currentStreak}
              bestStreak={session.bestStreak}
            />
            <button
              onClick={handlePause}
              className="px-4 py-3 min-h-[48px] text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Pause
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full">
          <ProgressBar
            current={session.problemsAttempted}
            total={PROBLEMS_PER_SESSION}
          />
        </div>

        {/* Build Phase Indicator */}
        <div className="text-sm text-gray-500">Step 2 of 3: Build fraction B</div>

        {/* Show completed A */}
        <div className="w-full max-w-[550px] opacity-60">
          <div className="flex items-center gap-4 w-full">
            <span className="text-xl font-bold text-gray-600 w-8">A</span>
            <div className="flex-1">
              <FractionBar
                fraction={currentProblem.fractionA}
                shadedSegments={Array.from(
                  { length: currentProblem.fractionA.numerator },
                  (_, i) => i
                )}
                interactive={false}
              />
            </div>
            <span className="text-lg text-gray-600">
              {formatFraction(currentProblem.fractionA.numerator, currentProblem.fractionA.denominator)}
            </span>
          </div>
        </div>

        {/* Fraction Builder B */}
        <FractionBuilder
          fraction={currentProblem.fractionB}
          label="B"
          onComplete={handleBuildBComplete}
        />
      </div>
    );
  }

  // Compare Phase (normal view)
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto px-4">
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <button
          onClick={handleExit}
          className="px-4 py-3 min-h-[48px] text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
        >
          ← Back
        </button>
        <p className="text-lg font-medium text-gray-700">
          {getModeLabel(mode)} - {getDifficultyLabel(difficulty)}
        </p>
        <div className="flex items-center gap-4">
          <StreakCounter
            currentStreak={session.currentStreak}
            bestStreak={session.bestStreak}
          />
          <button
            onClick={handlePause}
            className="px-4 py-3 min-h-[48px] text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Pause
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full">
        <ProgressBar
          current={session.problemsAttempted}
          total={PROBLEMS_PER_SESSION}
        />
      </div>

      {/* Build Phase Indicator (if coming from build mode) */}
      {buildFirst && <div className="text-sm text-gray-500">Step 3 of 3: Compare</div>}

      {/* Problem Display */}
      {isDifferentBoth ? (
        <BenchmarkComparisonView
          fractionA={currentProblem.fractionA}
          fractionB={currentProblem.fractionB}
        />
      ) : (
        <div className="w-full flex flex-col gap-6 max-w-[550px]">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4 w-full">
              <span className="text-2xl font-bold text-gray-800 w-8">A</span>
              <div className="flex-1">
                <FractionBar
                  fraction={currentProblem.fractionA}
                  shadedSegments={Array.from(
                    { length: currentProblem.fractionA.numerator },
                    (_, i) => i
                  )}
                  interactive={false}
                />
              </div>
            </div>
            <p className="text-xl font-medium text-gray-700">
              {formatFraction(
                currentProblem.fractionA.numerator,
                currentProblem.fractionA.denominator
              )}
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4 w-full">
              <span className="text-2xl font-bold text-gray-800 w-8">B</span>
              <div className="flex-1">
                <FractionBar
                  fraction={currentProblem.fractionB}
                  shadedSegments={Array.from(
                    { length: currentProblem.fractionB.numerator },
                    (_, i) => i
                  )}
                  interactive={false}
                />
              </div>
            </div>
            <p className="text-xl font-medium text-gray-700">
              {formatFraction(
                currentProblem.fractionB.numerator,
                currentProblem.fractionB.denominator
              )}
            </p>
          </div>
        </div>
      )}

      {/* Answer Section */}
      <div className="mt-2">
        <p className="text-center text-gray-600 mb-4">Which fraction is bigger?</p>
        <AnswerButtons onAnswer={handleAnswer} disabled={isWaiting} />
      </div>

      {/* Hint Button */}
      {feedbackResult !== "correct" && !hintsExhausted && wrongAttempts > 0 && (
        <HintButton
          currentLevel={currentLevel}
          hintsExhausted={hintsExhausted}
          onRequestHint={handleRequestHint}
          disabled={isWaiting}
        />
      )}

      {/* Feedback */}
      <FeedbackDisplay
        result={feedbackResult}
        message={displayMessage ?? undefined}
      />

      {/* Explanation */}
      {showExplanation && (
        <div className="text-center text-gray-600 text-sm mt-2">
          <p>
            {currentProblem.correctAnswer === "A"
              ? `${formatFraction(currentProblem.fractionA.numerator, currentProblem.fractionA.denominator)} is bigger`
              : currentProblem.correctAnswer === "B"
              ? `${formatFraction(currentProblem.fractionB.numerator, currentProblem.fractionB.denominator)} is bigger`
              : "They are equal"}
          </p>
        </div>
      )}
    </div>
  );
}
