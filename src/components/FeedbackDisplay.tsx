"use client";

import { useEffect } from "react";
import { playCorrectSound, playHintSound } from "@/lib/feedback/sounds";

interface FeedbackDisplayProps {
  result: "correct" | "incorrect" | "hint" | null;
  message?: string;
  onAnimationEnd?: () => void;
}

export function FeedbackDisplay({ result, message, onAnimationEnd }: FeedbackDisplayProps) {
  useEffect(() => {
    if (result === "correct") {
      playCorrectSound();
    } else if (result === "incorrect" || result === "hint") {
      playHintSound();
    }

    if (result && onAnimationEnd) {
      const timer = setTimeout(onAnimationEnd, 500);
      return () => clearTimeout(timer);
    }
  }, [result, onAnimationEnd]);

  if (!result) {
    return <div className="h-16" />;
  }

  return (
    <div className="h-16 flex flex-col items-center justify-center gap-1">
      {result === "correct" ? (
        <svg
          className="w-10 h-10 text-green-500 animate-scale-in"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ) : (
        <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center animate-scale-in">
          <span className="text-xl font-bold text-amber-600">?</span>
        </div>
      )}

      {message && (
        <p
          className={`text-sm font-medium animate-fade-in ${
            result === "correct" ? "text-green-600" : "text-amber-600"
          }`}
        >
          {message}
        </p>
      )}

      <style jsx>{`
        @keyframes scale-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
