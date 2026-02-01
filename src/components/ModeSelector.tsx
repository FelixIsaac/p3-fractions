"use client";

import { ProblemType } from "@/types/fraction";

type Mode = ProblemType | "mixed";

interface ModeSelectorProps {
  selectedMode: Mode | null;
  onModeSelect: (mode: Mode) => void;
}

const MODES: { value: Mode; label: string }[] = [
  { value: "same-numerator", label: "Same Numerator" },
  { value: "same-denominator", label: "Same Denominator" },
  { value: "different-both", label: "Different Both" },
  { value: "mixed", label: "Mixed" },
];

export function ModeSelector({ selectedMode, onModeSelect }: ModeSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
      {MODES.map(({ value, label }) => {
        const isSelected = selectedMode === value;
        return (
          <button
            key={value}
            onClick={() => onModeSelect(value)}
            className={`
              rounded-xl py-5 px-8 min-h-[64px] min-w-[200px] font-medium text-lg
              transition-colors border-2
              ${
                isSelected
                  ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                  : "bg-white text-gray-800 border-gray-400 hover:bg-gray-50 hover:border-gray-500"
              }
            `}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
