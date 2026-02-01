import { describe, it, expect } from "vitest";
import {
  generateSameNumeratorPair,
  generateSameDenominatorPair,
  generateDifferentBothPair,
  generateProblem,
} from "./generators";
import { P3_DENOMINATORS, EASY_DENOMINATORS } from "./constants";
import { areEqual } from "./utils";

describe("generateSameNumeratorPair", () => {
  it("returns two fractions with identical numerators", () => {
    const [a, b] = generateSameNumeratorPair("medium");
    expect(a.numerator).toBe(b.numerator);
  });

  it("returns fractions with different denominators", () => {
    const [a, b] = generateSameNumeratorPair("medium");
    expect(a.denominator).not.toBe(b.denominator);
  });

  it("uses only P3 denominators", () => {
    for (let i = 0; i < 20; i++) {
      const [a, b] = generateSameNumeratorPair("medium");
      expect(P3_DENOMINATORS).toContain(a.denominator);
      expect(P3_DENOMINATORS).toContain(b.denominator);
    }
  });

  it("easy difficulty uses only 2,3,4 denominators", () => {
    for (let i = 0; i < 20; i++) {
      const [a, b] = generateSameNumeratorPair("easy");
      expect(EASY_DENOMINATORS).toContain(a.denominator);
      expect(EASY_DENOMINATORS).toContain(b.denominator);
    }
  });

  it("numerator is valid for both denominators", () => {
    for (let i = 0; i < 20; i++) {
      const [a, b] = generateSameNumeratorPair("medium");
      expect(a.numerator).toBeLessThanOrEqual(a.denominator);
      expect(b.numerator).toBeLessThanOrEqual(b.denominator);
    }
  });
});

describe("generateSameDenominatorPair", () => {
  it("returns two fractions with identical denominators", () => {
    const [a, b] = generateSameDenominatorPair("medium");
    expect(a.denominator).toBe(b.denominator);
  });

  it("returns fractions with different numerators", () => {
    const [a, b] = generateSameDenominatorPair("medium");
    expect(a.numerator).not.toBe(b.numerator);
  });

  it("numerators are within valid range (1 to denominator)", () => {
    for (let i = 0; i < 20; i++) {
      const [a, b] = generateSameDenominatorPair("medium");
      expect(a.numerator).toBeGreaterThanOrEqual(1);
      expect(a.numerator).toBeLessThanOrEqual(a.denominator);
      expect(b.numerator).toBeGreaterThanOrEqual(1);
      expect(b.numerator).toBeLessThanOrEqual(b.denominator);
    }
  });

  it("easy difficulty uses only 2,3,4 denominators", () => {
    for (let i = 0; i < 20; i++) {
      const [a, b] = generateSameDenominatorPair("easy");
      expect(EASY_DENOMINATORS).toContain(a.denominator);
    }
  });
});

describe("generateDifferentBothPair", () => {
  it("returns fractions with different numerators AND denominators", () => {
    for (let i = 0; i < 20; i++) {
      const [a, b] = generateDifferentBothPair("medium");
      expect(a.numerator === b.numerator && a.denominator === b.denominator).toBe(false);
    }
  });

  it("one fraction < 1/2, one fraction > 1/2 (benchmark method)", () => {
    for (let i = 0; i < 20; i++) {
      const [a, b] = generateDifferentBothPair("medium");
      const aVal = a.numerator / a.denominator;
      const bVal = b.numerator / b.denominator;
      const lessThanHalf = [aVal, bVal].filter((v) => v < 0.5).length;
      const greaterThanHalf = [aVal, bVal].filter((v) => v > 0.5).length;
      expect(lessThanHalf).toBe(1);
      expect(greaterThanHalf).toBe(1);
    }
  });

  it("hard difficulty generates close-value pairs", () => {
    for (let i = 0; i < 10; i++) {
      const [a, b] = generateDifferentBothPair("hard");
      const diff = Math.abs(a.numerator / a.denominator - b.numerator / b.denominator);
      expect(diff).toBeLessThan(0.25);
    }
  });

  it("never returns identical fractions (PROB-05)", () => {
    for (let i = 0; i < 50; i++) {
      const [a, b] = generateDifferentBothPair("medium");
      expect(areEqual(a, b)).toBe(false);
    }
  });
});

describe("generateProblem", () => {
  it("returns valid ComparisonProblem with all fields", () => {
    const problem = generateProblem("same-numerator", "easy");
    expect(problem.id).toBeDefined();
    expect(problem.type).toBe("same-numerator");
    expect(problem.difficulty).toBe("easy");
    expect(problem.fractionA).toBeDefined();
    expect(problem.fractionB).toBeDefined();
    expect(["A", "B", "equal"]).toContain(problem.correctAnswer);
  });

  it("correctly identifies larger fraction", () => {
    for (let i = 0; i < 20; i++) {
      const problem = generateProblem("same-denominator", "medium");
      const aVal = problem.fractionA.numerator / problem.fractionA.denominator;
      const bVal = problem.fractionB.numerator / problem.fractionB.denominator;
      if (aVal > bVal) expect(problem.correctAnswer).toBe("A");
      else if (bVal > aVal) expect(problem.correctAnswer).toBe("B");
      else expect(problem.correctAnswer).toBe("equal");
    }
  });

  it("generates unique IDs", () => {
    const ids = new Set<string>();
    for (let i = 0; i < 100; i++) {
      const problem = generateProblem("same-numerator", "easy");
      ids.add(problem.id);
    }
    expect(ids.size).toBe(100);
  });

  it("works for all problem types", () => {
    const types = ["same-numerator", "same-denominator", "different-both"] as const;
    for (const type of types) {
      const problem = generateProblem(type, "medium");
      expect(problem.type).toBe(type);
    }
  });
});
