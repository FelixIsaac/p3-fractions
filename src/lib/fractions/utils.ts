import { Fraction } from "@/types/fraction";

export function toDecimal(f: Fraction): number {
  return f.numerator / f.denominator;
}

export function compareFractions(a: Fraction, b: Fraction): -1 | 0 | 1 {
  const aVal = toDecimal(a);
  const bVal = toDecimal(b);
  if (aVal < bVal) return -1;
  if (aVal > bVal) return 1;
  return 0;
}

export function areEqual(a: Fraction, b: Fraction): boolean {
  return compareFractions(a, b) === 0;
}

export function isValidFraction(f: Fraction): boolean {
  return (
    f.numerator >= 0 &&
    f.denominator > 0 &&
    f.numerator <= f.denominator
  );
}
