import { Fraction, ProblemType } from "@/types/fraction";

export const HINT_LEVELS = 3;

export type HintLevel = 1 | 2 | 3;

const HINTS: Record<ProblemType, Record<HintLevel, string | ((a: Fraction, b: Fraction) => string)>> = {
  "same-numerator": {
    1: "Both fractions have the same numerator. Look at the denominators.",
    2: "When numerators are equal, the fraction with the smaller denominator is bigger. Why? Each piece is larger!",
    3: (a, b) =>
      `Compare ${a.denominator} and ${b.denominator}. Smaller denominator = bigger pieces = bigger fraction.`,
  },
  "same-denominator": {
    1: "Both fractions have the same denominator. Look at the numerators.",
    2: "When denominators are equal, just compare numerators like regular numbers!",
    3: (a, b) =>
      `Which is more: ${a.numerator} pieces or ${b.numerator} pieces of the same size?`,
  },
  "different-both": {
    1: "The fractions have different numerators AND denominators. Try comparing each to 1/2.",
    2: (a, b) =>
      `Is ${a.numerator}/${a.denominator} more or less than half? Is ${b.numerator}/${b.denominator} more or less than half?`,
    3: "Look at the benchmark bar. Which fraction's shaded part is closer to the 1/2 line?",
  },
};

export function getHint(
  problemType: ProblemType,
  level: HintLevel,
  fractionA: Fraction,
  fractionB: Fraction
): string {
  const hint = HINTS[problemType][level];
  if (typeof hint === "function") {
    return hint(fractionA, fractionB);
  }
  return hint;
}
