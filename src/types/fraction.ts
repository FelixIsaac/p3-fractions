export interface Fraction {
  numerator: number;
  denominator: number;
}

export interface FractionBarProps {
  fraction: Fraction;
  shadedSegments?: number[];
  width?: number;
  height?: number;
  interactive?: boolean;
  onSegmentChange?: (segments: number[]) => void;
}

export type Difficulty = "easy" | "medium" | "hard";

export type ProblemType = "same-numerator" | "same-denominator" | "different-both";

export interface ComparisonProblem {
  id: string;
  type: ProblemType;
  difficulty: Difficulty;
  fractionA: Fraction;
  fractionB: Fraction;
  correctAnswer: "A" | "B" | "equal";
}
