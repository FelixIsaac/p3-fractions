import { Fraction, Difficulty, ProblemType, ComparisonProblem } from "@/types/fraction";
import { P3_DENOMINATORS, EASY_DENOMINATORS, MEDIUM_DENOMINATORS, HARD_DENOMINATORS } from "./constants";
import { compareFractions, areEqual, toDecimal } from "./utils";

function getDenominatorSet(difficulty: Difficulty): readonly number[] {
  switch (difficulty) {
    case "easy":
      return EASY_DENOMINATORS;
    case "medium":
      return MEDIUM_DENOMINATORS;
    case "hard":
      return HARD_DENOMINATORS;
  }
}

function randomElement<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function generateSameNumeratorPair(difficulty: Difficulty): [Fraction, Fraction] {
  const denominators = getDenominatorSet(difficulty);
  const maxNumerator = Math.min(...denominators);
  const numerator = Math.floor(Math.random() * maxNumerator) + 1;

  const validDenominators = denominators.filter((d) => d >= numerator);
  const shuffled = shuffle([...validDenominators]);

  const denomA = shuffled[0];
  const denomB = shuffled.find((d) => d !== denomA) ?? shuffled[1];

  return [
    { numerator, denominator: denomA },
    { numerator, denominator: denomB },
  ];
}

export function generateSameDenominatorPair(difficulty: Difficulty): [Fraction, Fraction] {
  const denominators = getDenominatorSet(difficulty);
  const denominator = randomElement(denominators);

  const possibleNumerators = Array.from({ length: denominator }, (_, i) => i + 1);
  const shuffled = shuffle(possibleNumerators);

  const numA = shuffled[0];
  const numB = shuffled.find((n) => n !== numA) ?? shuffled[1];

  return [
    { numerator: numA, denominator },
    { numerator: numB, denominator },
  ];
}

export function generateDifferentBothPair(difficulty: Difficulty): [Fraction, Fraction] {
  const denominators = getDenominatorSet(difficulty);

  const lessThanHalf: Fraction[] = [];
  const greaterThanHalf: Fraction[] = [];

  for (const d of denominators) {
    for (let n = 1; n < d; n++) {
      const value = n / d;
      if (value < 0.5) {
        lessThanHalf.push({ numerator: n, denominator: d });
      } else if (value > 0.5) {
        greaterThanHalf.push({ numerator: n, denominator: d });
      }
    }
  }

  let candidates: [Fraction, Fraction][] = [];
  for (const less of lessThanHalf) {
    for (const greater of greaterThanHalf) {
      if (less.numerator !== greater.numerator && less.denominator !== greater.denominator) {
        if (!areEqual(less, greater)) {
          candidates.push([less, greater]);
        }
      }
    }
  }

  if (difficulty === "hard") {
    candidates = candidates.filter(([a, b]) => {
      const diff = Math.abs(toDecimal(a) - toDecimal(b));
      return diff < 0.25;
    });
  }

  if (candidates.length === 0) {
    return [
      { numerator: 1, denominator: 3 },
      { numerator: 2, denominator: 3 },
    ];
  }

  const [a, b] = randomElement(candidates);
  return Math.random() < 0.5 ? [a, b] : [b, a];
}

export function generateProblem(type: ProblemType, difficulty: Difficulty): ComparisonProblem {
  let fractionA: Fraction;
  let fractionB: Fraction;

  switch (type) {
    case "same-numerator":
      [fractionA, fractionB] = generateSameNumeratorPair(difficulty);
      break;
    case "same-denominator":
      [fractionA, fractionB] = generateSameDenominatorPair(difficulty);
      break;
    case "different-both":
      [fractionA, fractionB] = generateDifferentBothPair(difficulty);
      break;
  }

  const comparison = compareFractions(fractionA, fractionB);
  let correctAnswer: "A" | "B" | "equal";
  if (comparison > 0) {
    correctAnswer = "A";
  } else if (comparison < 0) {
    correctAnswer = "B";
  } else {
    correctAnswer = "equal";
  }

  return {
    id: crypto.randomUUID(),
    type,
    difficulty,
    fractionA,
    fractionB,
    correctAnswer,
  };
}
