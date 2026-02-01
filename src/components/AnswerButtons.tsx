"use client";

interface AnswerButtonsProps {
  onAnswer: (answer: "A" | "B" | "equal") => void;
  disabled?: boolean;
}

const ANSWERS: { value: "A" | "B" | "equal"; label: string }[] = [
  { value: "A", label: "A is bigger" },
  { value: "B", label: "B is bigger" },
  { value: "equal", label: "Equal" },
];

export function AnswerButtons({ onAnswer, disabled = false }: AnswerButtonsProps) {
  return (
    <div className="flex flex-row gap-6 justify-center flex-wrap">
      {ANSWERS.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onAnswer(value)}
          disabled={disabled}
          className={`
            px-8 py-5 text-lg font-semibold rounded-xl
            bg-white border-2 border-gray-400
            min-h-[56px] min-w-[140px]
            text-gray-800
            transition-colors
            ${
              disabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100"
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
