"use client";

import { useState, useEffect } from "react";
import { Fraction } from "@/types/fraction";

interface AnimatedFractionBarProps {
  fraction: Fraction;
  targetDenominator?: number;
  isAnimating: boolean;
  onAnimationComplete?: () => void;
  width?: number;
  height?: number;
}

export function AnimatedFractionBar({
  fraction,
  targetDenominator,
  isAnimating,
  onAnimationComplete,
  width = 500,
  height = 64,
}: AnimatedFractionBarProps) {
  const [showSubdivisions, setShowSubdivisions] = useState(false);

  useEffect(() => {
    if (isAnimating && targetDenominator) {
      const timer = setTimeout(() => {
        setShowSubdivisions(true);
      }, 50);

      const completeTimer = setTimeout(() => {
        onAnimationComplete?.();
      }, 650);

      return () => {
        clearTimeout(timer);
        clearTimeout(completeTimer);
      };
    } else if (!isAnimating) {
      setShowSubdivisions(false);
    }
  }, [isAnimating, targetDenominator, onAnimationComplete]);

  const segmentWidth = width / fraction.denominator;
  const multiplier = targetDenominator ? targetDenominator / fraction.denominator : 1;

  const getShadedSegmentsForTarget = (): number[] => {
    if (!targetDenominator || !showSubdivisions) {
      return Array.from({ length: fraction.numerator }, (_, i) => i);
    }
    const newNumerator = fraction.numerator * multiplier;
    return Array.from({ length: newNumerator }, (_, i) => i);
  };

  const renderSubdivisionLines = () => {
    if (!targetDenominator || !isAnimating) return null;

    const lines: React.ReactElement[] = [];
    const subSegmentWidth = width / targetDenominator;

    for (let i = 1; i < targetDenominator; i++) {
      const x = i * subSegmentWidth;
      const isOriginalLine = i % multiplier === 0;

      if (!isOriginalLine) {
        lines.push(
          <line
            key={`sub-${i}`}
            x1={x}
            y1={2}
            x2={x}
            y2={height - 2}
            stroke="#666"
            strokeWidth={1.5}
            strokeDasharray="4 2"
            style={{
              opacity: showSubdivisions ? 1 : 0,
              transition: "opacity 600ms ease-out",
            }}
          />
        );
      }
    }

    return lines;
  };

  const displayDenominator = showSubdivisions && targetDenominator ? targetDenominator : fraction.denominator;
  const displayNumerator = showSubdivisions && targetDenominator
    ? fraction.numerator * multiplier
    : fraction.numerator;

  const shadedSegments = getShadedSegmentsForTarget();
  const currentSegmentWidth = width / displayDenominator;

  return (
    <div className="flex flex-col items-center gap-1">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        className="select-none max-w-full"
      >
        {Array.from({ length: displayDenominator }).map((_, index) => {
          const isShaded = shadedSegments.includes(index);
          return (
            <rect
              key={index}
              x={index * currentSegmentWidth + 1}
              y={1}
              width={currentSegmentWidth - 2}
              height={height - 2}
              fill={isShaded ? "#3b82f6" : "#f5f5f5"}
              stroke="#333"
              strokeWidth={2}
              rx={2}
              style={{
                transition: showSubdivisions ? "all 600ms ease-out" : "none",
              }}
            />
          );
        })}

        {renderSubdivisionLines()}

        <rect
          x={1}
          y={1}
          width={width - 2}
          height={height - 2}
          fill="none"
          stroke="#333"
          strokeWidth={2}
          rx={4}
          pointerEvents="none"
        />
      </svg>

      <p
        className="text-lg font-medium text-gray-700 tabular-nums transition-all duration-300"
        style={{ opacity: showSubdivisions ? 1 : 0.7 }}
      >
        {displayNumerator}/{displayDenominator}
        {showSubdivisions && targetDenominator && (
          <span className="text-sm text-gray-500 ml-2">
            (= {fraction.numerator}/{fraction.denominator})
          </span>
        )}
      </p>
    </div>
  );
}
