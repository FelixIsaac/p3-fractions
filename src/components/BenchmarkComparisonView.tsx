"use client";

import { useState } from "react";
import { Fraction } from "@/types/fraction";
import { FractionBar } from "./FractionBar";
import { AnimatedFractionBar } from "./AnimatedFractionBar";

interface BenchmarkComparisonViewProps {
  fractionA: Fraction;
  fractionB: Fraction;
  width?: number;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

export function BenchmarkComparisonView({
  fractionA,
  fractionB,
}: BenchmarkComparisonViewProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showConverted, setShowConverted] = useState(false);

  const benchmarkFraction: Fraction = { numerator: 1, denominator: 2 };
  const commonDenominator = lcm(fractionA.denominator, fractionB.denominator);

  const handleShowEquivalent = () => {
    if (showConverted) {
      setShowConverted(false);
      setIsAnimating(false);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setShowConverted(true);
      }, 600);
    }
  };

  const buttonText = showConverted
    ? "Reset"
    : isAnimating
    ? "Converting..."
    : "Show Equivalent Fractions";

  return (
    <div className="flex flex-col gap-4 w-full max-w-[550px]">
      <div className="flex items-center gap-4 w-full">
        <span className="text-lg text-gray-500 w-12 text-right">1/2</span>
        <div className="flex-1">
          <FractionBar
            fraction={benchmarkFraction}
            shadedSegments={[0]}
            interactive={false}
          />
        </div>
        <span className="w-20 text-sm text-gray-500">(reference)</span>
      </div>

      <div className="flex items-center gap-4 w-full">
        <span className="text-2xl font-bold text-gray-800 w-12 text-right">A</span>
        <div className="flex-1">
          <AnimatedFractionBar
            fraction={fractionA}
            targetDenominator={commonDenominator}
            isAnimating={isAnimating}
          />
        </div>
        <span className="w-20"></span>
      </div>

      <div className="flex items-center gap-4 w-full">
        <span className="text-2xl font-bold text-gray-800 w-12 text-right">B</span>
        <div className="flex-1">
          <AnimatedFractionBar
            fraction={fractionB}
            targetDenominator={commonDenominator}
            isAnimating={isAnimating}
          />
        </div>
        <span className="w-20"></span>
      </div>

      <div className="flex justify-center mt-2">
        <button
          onClick={handleShowEquivalent}
          disabled={isAnimating && !showConverted}
          className={`
            px-6 py-3 min-h-12 rounded-lg font-medium transition-all
            ${
              isAnimating && !showConverted
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
            }
          `}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
