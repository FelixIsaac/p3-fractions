"use client";

import { useState, useEffect } from "react";
import { ProblemType, Difficulty } from "@/types/fraction";
import { ModeSelector } from "@/components/ModeSelector";
import { DifficultySelector } from "@/components/DifficultySelector";
import { BuildFirstToggle } from "@/components/BuildFirstToggle";
import { PracticeSession } from "@/components/PracticeSession";
import { loadProgress, clearProgress } from "@/lib/progress/storage";

type Mode = ProblemType | "mixed";

interface PausedSession {
  mode: Mode;
  difficulty: Difficulty;
  problemsCompleted: number;
  totalProblems: number;
}

export default function Home() {
  const [selectedMode, setSelectedMode] = useState<Mode | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [buildFirst, setBuildFirst] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [resumeIndex, setResumeIndex] = useState<number | undefined>(undefined);
  const [pausedSession, setPausedSession] = useState<PausedSession | null>(null);
  const [showResumePrompt, setShowResumePrompt] = useState(false);

  // Check for paused session on mount
  useEffect(() => {
    const progress = loadProgress();

    // Find any paused session
    for (const [key, session] of Object.entries(progress.sessions)) {
      if (session.state === "paused") {
        // Key format: "mode-difficulty" where mode can contain dashes (e.g., "same-numerator-easy")
        const lastDashIndex = key.lastIndexOf("-");
        const mode = key.slice(0, lastDashIndex) as Mode;
        const difficulty = key.slice(lastDashIndex + 1) as Difficulty;
        setPausedSession({
          mode,
          difficulty,
          problemsCompleted: session.problemsAttempted,
          totalProblems: 10,
        });
        setShowResumePrompt(true);
        break;
      }
    }
  }, []);

  const handleModeSelect = (mode: Mode) => {
    setSelectedMode(mode);
  };

  const handleDifficultySelect = (difficulty: Difficulty) => {
    setSelectedDifficulty(difficulty);
    setIsPlaying(true);
  };

  const handleBackToMode = () => {
    setSelectedMode(null);
    setSelectedDifficulty(null);
  };

  const handleExit = () => {
    setIsPlaying(false);
    setSelectedMode(null);
    setSelectedDifficulty(null);
    setResumeIndex(undefined);
  };

  const handleResume = () => {
    if (pausedSession) {
      setSelectedMode(pausedSession.mode);
      setSelectedDifficulty(pausedSession.difficulty);
      setResumeIndex(pausedSession.problemsCompleted);
      setIsPlaying(true);
      setShowResumePrompt(false);
      setPausedSession(null);
    }
  };

  const handleStartFresh = () => {
    clearProgress();
    setShowResumePrompt(false);
    setPausedSession(null);
  };

  // Resume prompt screen
  if (showResumePrompt && pausedSession) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
        <div className="w-full max-w-md flex flex-col items-center gap-6 p-8 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Resume Session?</h2>

          <div className="text-center text-gray-600">
            <p className="mb-2">You have a paused session:</p>
            <p className="font-medium text-gray-800">
              {pausedSession.mode === "same-numerator" && "Same Numerator"}
              {pausedSession.mode === "same-denominator" && "Same Denominator"}
              {pausedSession.mode === "different-both" && "Different Both"}
              {pausedSession.mode === "mixed" && "Mixed"}
              {" - "}
              {pausedSession.difficulty.charAt(0).toUpperCase() + pausedSession.difficulty.slice(1)}
            </p>
            <p className="text-sm mt-2">
              {pausedSession.problemsCompleted} of {pausedSession.totalProblems} problems completed
            </p>
          </div>

          <div className="flex gap-4 w-full">
            <button
              onClick={handleResume}
              className="flex-1 py-4 px-6 min-h-[56px] bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-colors"
            >
              Resume
            </button>
            <button
              onClick={handleStartFresh}
              className="flex-1 py-4 px-6 min-h-[56px] bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
            >
              Start Fresh
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (isPlaying && selectedMode && selectedDifficulty) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
        <PracticeSession
          mode={selectedMode}
          difficulty={selectedDifficulty}
          buildFirst={buildFirst}
          onExit={handleExit}
          resumeFromIndex={resumeIndex}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-2xl flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Fraction Comparison Trainer
          </h1>
          <p className="text-lg text-gray-600">
            {selectedMode ? "Choose difficulty" : "Choose a practice mode"}
          </p>
        </div>

        {!selectedMode ? (
          <ModeSelector
            selectedMode={selectedMode}
            onModeSelect={handleModeSelect}
          />
        ) : (
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
                {selectedMode === "same-numerator" && "Same Numerator"}
                {selectedMode === "same-denominator" && "Same Denominator"}
                {selectedMode === "different-both" && "Different Both"}
                {selectedMode === "mixed" && "Mixed"}
              </span>
            </div>

            <BuildFirstToggle enabled={buildFirst} onToggle={setBuildFirst} />

            <DifficultySelector
              selectedDifficulty={selectedDifficulty}
              onDifficultySelect={handleDifficultySelect}
            />

            <button
              onClick={handleBackToMode}
              className="mt-4 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back to modes
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
