export const P3_DENOMINATORS = [2, 3, 4, 5, 6, 8] as const;
export const EASY_DENOMINATORS = [2, 3, 4] as const;
export const MEDIUM_DENOMINATORS = [2, 3, 4, 5, 6] as const;
export const HARD_DENOMINATORS = P3_DENOMINATORS;

export type P3Denominator = (typeof P3_DENOMINATORS)[number];
