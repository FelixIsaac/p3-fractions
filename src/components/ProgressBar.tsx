"use client";

interface ProgressBarProps {
  current: number;
  total?: number;
  label?: string;
}

export function ProgressBar({ current, total = 10, label }: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className="w-full">
      {label && (
        <div className="text-sm text-gray-600 mb-1">{label}</div>
      )}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-xs text-gray-500 mt-1 text-center">
        {current} of {total}
      </div>
    </div>
  );
}
