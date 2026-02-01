"use client";

import { Difficulty } from "@/types/fraction";

interface DifficultySelectorProps {
  selectedDifficulty: Difficulty | null;
  onDifficultySelect: (difficulty: Difficulty) => void;
}

const DIFFICULTIES: { value: Difficulty; label: string; description: string }[] = [
  { value: "easy", label: "Easy", description: "Small numbers" },
  { value: "medium", label: "Medium", description: "Moderate challenge" },
  { value: "hard", label: "Hard", description: "Complex fractions" },
];

export function DifficultySelector({
  selectedDifficulty,
  onDifficultySelect,
}: DifficultySelectorProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      {DIFFICULTIES.map(({ value, label, description }) => {
        const isSelected = selectedDifficulty === value;
        return (
          <button
            key={value}
            onClick={() => onDifficultySelect(value)}
            className={`
              rounded-xl py-5 px-8 min-h-[64px] min-w-[200px] font-medium text-lg
              transition-colors border-2 flex flex-col items-center
              ${
                isSelected
                  ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                  : "bg-white text-gray-800 border-gray-400 hover:bg-gray-50 hover:border-gray-500"
              }
            `}
          >
            <span>{label}</span>
            <span className={`text-sm ${isSelected ? "text-blue-100" : "text-gray-500"}`}>
              {description}
            </span>
          </button>
        );
      })}
    </div>
  );
}
