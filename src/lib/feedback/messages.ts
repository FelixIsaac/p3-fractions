const ENCOURAGING_MESSAGES = [
  "Great job!",
  "You got it!",
  "Excellent work!",
  "That's right!",
  "Well done!",
  "Perfect!",
  "You're getting good at this!",
  "Nice thinking!",
];

const CORRECTION_MESSAGES = [
  "Now you've got it!",
  "You're learning!",
  "That makes sense now, right?",
  "Good effort - now you know!",
  "Learning takes practice!",
  "You'll remember this next time!",
];

function randomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getEncouragingMessage(): string {
  return randomElement(ENCOURAGING_MESSAGES);
}

export function getCorrectionMessage(): string {
  return randomElement(CORRECTION_MESSAGES);
}
