"use client";

import { useState, useCallback } from "react";
import { Fraction } from "@/types/fraction";
import { FractionBar } from "./FractionBar";

interface FractionBuilderProps {
  fraction: Fraction;
  label: string;
  onComplete: () => void;
}

export function FractionBuilder({ fraction, label, onComplete }: FractionBuilderProps) {
  const [shadedSegments, setShadedSegments] = useState<number[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [hintMessage, setHintMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSegmentChange = useCallback((newShaded: number[]) => {
    setShadedSegments(newShaded);
    setShowHint(false);
  }, []);

  const handleCheck = () => {
    const correctCount = fraction.numerator;
    const actualCount = shadedSegments.length;

    if (actualCount === correctCount) {
      setIsCorrect(true);
      setShowHint(false);
      // Brief delay to show success before moving on
      setTimeout(() => {
        onComplete();
      }, 800);
    } else {
      setShowHint(true);
      if (actualCount === 0) {
        setHintMessage(`Tap the bar to shade ${correctCount} parts`);
      } else if (actualCount < correctCount) {
        setHintMessage(`You shaded ${actualCount} parts. ${fraction.numerator}/${fraction.denominator} means ${correctCount} parts.`);
      } else {
        setHintMessage(`You shaded ${actualCount} parts, but only need ${correctCount}. Tap shaded parts to unshade.`);
      }
    }
  };

  const fractionText = `${fraction.numerator}/${fraction.denominator}`;

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-[550px]">
      <div className="text-center">
        <p className="text-lg text-gray-600 mb-2">Build fraction {label}</p>
        <p className="text-3xl font-bold text-gray-800">{fractionText}</p>
      </div>

      <div className="w-full">
        <div className="flex items-center gap-4 w-full">
          <span className="text-2xl font-bold text-gray-800 w-8">{label}</span>
          <div className="flex-1">
            <FractionBar
              fraction={fraction}
              shadedSegments={shadedSegments}
              interactive={!isCorrect}
              onSegmentChange={handleSegmentChange}
            />
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          Tap to shade {fraction.numerator} out of {fraction.denominator} parts
        </p>
      </div>

      {showHint && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800 text-center">
          {hintMessage}
        </div>
      )}

      {isCorrect && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-800 text-center">
          Correct! That&apos;s {fractionText}
        </div>
      )}

      {!isCorrect && (
        <button
          onClick={handleCheck}
          className="py-4 px-8 min-h-[56px] min-w-[160px] bg-blue-500 text-white font-medium text-lg rounded-xl hover:bg-blue-600 transition-colors"
        >
          Check
        </button>
      )}
    </div>
  );
}
