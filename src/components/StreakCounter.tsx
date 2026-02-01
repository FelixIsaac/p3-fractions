"use client";

interface StreakCounterProps {
  currentStreak: number;
  bestStreak: number;
}

export function StreakCounter({ currentStreak, bestStreak }: StreakCounterProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold text-blue-600 transition-transform duration-150 ease-out">
        {currentStreak}
      </div>
      <div className="text-xs text-gray-500">
        Best: {bestStreak}
      </div>
    </div>
  );
}
