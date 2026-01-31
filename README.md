# Fraction Comparison Trainer

A practice app for P3 students learning to compare fractions, designed with ADHD-friendly UX.

**Live:** https://p3-fractions.vercel.app

## Tutor Guide

### Modes

| Mode | When to Use | What It Tests |
|------|-------------|---------------|
| **Same Denominator** | Start here | Bigger numerator = bigger fraction (3/5 vs 2/5) |
| **Same Numerator** | After denominator mastery | Smaller denominator = bigger fraction (2/3 vs 2/5) |
| **Different Both** | When both above are solid | Benchmark strategy using 1/2 (3/8 vs 5/6) |
| **Mixed** | Final practice | All three types randomly |

### Build First Mode

**Toggle this ON for new learners.** Forces the student to shade each fraction bar before comparing.

Why it helps:
- Prevents shortcut of just comparing bar lengths visually
- Builds understanding of what 2/3 or 3/4 actually means
- Student must engage with numerator/denominator relationship

Flow: Build A → Build B → Compare

Turn OFF once student demonstrates solid fraction understanding.

### Difficulty Levels

| Level | Denominators | When to Use |
|-------|--------------|-------------|
| **Easy** | 2, 3, 4 | Starting out |
| **Medium** | 2, 3, 4, 5, 6 | Building confidence |
| **Hard** | 2, 3, 4, 5, 6, 8 | Challenge mode |

### Session Flow

- 10 problems per session
- Streak counter rewards consecutive correct answers
- Pause anytime (session saves automatically)
- Resume prompt appears on return

### When Student Struggles

**Wrong answer on comparison:**
1. First wrong → hint appears automatically
2. Second wrong → more detailed hint
3. Third wrong → shows correct answer, moves on

**Wrong shading in Build First:**
- Immediate feedback: "You shaded 2 parts, but only need 1"
- Student can tap to unshade and try again

### Recommended Progression

1. Same Denominator + Easy + Build First ON
2. Same Denominator + Medium + Build First ON
3. Same Numerator + Easy + Build First ON
4. Same Numerator + Medium + Build First OFF
5. Different Both + Easy + Build First ON (introduce benchmark)
6. Mixed + Medium + Build First OFF

Adjust based on student's pace. No timers or pressure.

---

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

```bash
vercel --prod
```
