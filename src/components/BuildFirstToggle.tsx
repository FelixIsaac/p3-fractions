"use client";

interface BuildFirstToggleProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

export function BuildFirstToggle({ enabled, onToggle }: BuildFirstToggleProps) {
  return (
    <button
      onClick={() => onToggle(!enabled)}
      className={`
        flex items-center gap-3 px-6 py-4 min-h-[56px] rounded-xl border-2 transition-colors
        ${enabled
          ? "bg-blue-50 border-blue-500 text-blue-700"
          : "bg-white border-gray-300 text-gray-600 hover:border-gray-400"
        }
      `}
    >
      <div
        className={`
          w-6 h-6 rounded border-2 flex items-center justify-center transition-colors
          ${enabled ? "bg-blue-500 border-blue-500" : "border-gray-400"}
        `}
      >
        {enabled && (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <div className="text-left">
        <p className="font-medium">Build First</p>
        <p className="text-sm opacity-75">Shade the fractions yourself before comparing</p>
      </div>
    </button>
  );
}
