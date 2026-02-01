let audioContext: AudioContext | null = null;
let isMutedValue = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;

  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    } catch {
      return null;
    }
  }
  return audioContext;
}

function loadMutePreference(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("feedback-audio-muted") === "true";
}

export function setMuted(muted: boolean): void {
  isMutedValue = muted;
  if (typeof window !== "undefined") {
    localStorage.setItem("feedback-audio-muted", String(muted));
  }
}

export function isMuted(): boolean {
  if (typeof window !== "undefined" && !isMutedValue) {
    isMutedValue = loadMutePreference();
  }
  return isMutedValue;
}

function playTone(frequencies: number[], duration: number): void {
  if (isMuted()) return;

  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    ctx.resume();
  }

  const now = ctx.currentTime;
  const segmentDuration = duration / frequencies.length;

  frequencies.forEach((freq, i) => {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = "sine";
    oscillator.frequency.value = freq;

    gainNode.gain.setValueAtTime(0.3, now + i * segmentDuration);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + (i + 1) * segmentDuration);

    oscillator.start(now + i * segmentDuration);
    oscillator.stop(now + (i + 1) * segmentDuration);
  });
}

export function playCorrectSound(): void {
  playTone([523.25, 659.25], 0.15);
}

export function playHintSound(): void {
  playTone([392], 0.1);
}
