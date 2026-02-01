"use client";

import { HintLevel, HINT_LEVELS } from "@/lib/feedback/hints";

interface HintButtonProps {
  currentLevel: HintLevel | null;
  hintsExhausted: boolean;
  onRequestHint: () => void;
  disabled?: boolean;
}

export function HintButton({
  currentLevel,
  hintsExhausted,
  onRequestHint,
  disabled = false,
}: HintButtonProps) {
  if (hintsExhausted) {
    return null;
  }

  const hintsRemaining = currentLevel === null ? HINT_LEVELS : HINT_LEVELS - currentLevel;
  const buttonText =
    currentLevel === null
      ? "Need a hint?"
      : `Another hint? (${hintsRemaining} left)`;

  return (
    <button
      onClick={onRequestHint}
      disabled={disabled}
      className={`
        px-6 py-3 min-h-[48px] rounded-lg font-medium transition-all
        border border-gray-300 bg-gray-50 text-gray-600
        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100 hover:border-gray-400"
        }
      `}
    >
      {buttonText}
    </button>
  );
}
