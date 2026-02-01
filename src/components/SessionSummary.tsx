"use client";

interface SessionSummaryProps {
  problems: number;
  correct: number;
  streak: number;
  onContinue: () => void;
  onExit: () => void;
}

function getEncouragingMessage(percentCorrect: number): string {
  if (percentCorrect >= 90) return "Amazing work!";
  if (percentCorrect >= 70) return "Great job!";
  if (percentCorrect >= 50) return "Good effort!";
  return "Keep practicing!";
}

export function SessionSummary({
  problems,
  correct,
  streak,
  onContinue,
  onExit,
}: SessionSummaryProps) {
  const percentCorrect = problems > 0 ? Math.round((correct / problems) * 100) : 0;

  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-2xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Session Complete!</h2>

      <p className="text-xl text-blue-600 font-medium">
        {getEncouragingMessage(percentCorrect)}
      </p>

      <div className="grid grid-cols-3 gap-6 w-full text-center">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-gray-800">{problems}</span>
          <span className="text-sm text-gray-500">Problems</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-green-600">{correct}</span>
          <span className="text-sm text-gray-500">Correct</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-blue-600">{streak}</span>
          <span className="text-sm text-gray-500">Best Streak</span>
        </div>
      </div>

      <div className="text-lg text-gray-600">
        {percentCorrect}% accuracy
      </div>

      <div className="flex gap-4 w-full">
        <button
          onClick={onContinue}
          className="flex-1 py-4 px-6 min-h-[56px] bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-colors"
        >
          Continue Practicing
        </button>
        <button
          onClick={onExit}
          className="flex-1 py-4 px-6 min-h-[56px] bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
}
