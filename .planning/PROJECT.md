# Fraction Comparison Trainer

## What This Is

Interactive learning website for a P4 student (doing P3 content) to practice comparing fractions. Used as a teaching aid during 1-on-1 tutoring sessions where the tutor explains concepts while the student manipulates visual fraction bars. Designed for a learner with suspected ADHD/ADD who responds well to hands-on interaction, direct questions, variety, and encouragement.

## Core Value

Student can visually compare fractions using the 3 Singapore Math methods — same numerator, same denominator, and different-both (with 1/2 benchmark) — through hands-on bar manipulation.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Horizontal fraction bar visuals matching textbook style
- [ ] Interactive manipulation (click/drag to shade bar segments)
- [ ] Method 1 practice: same numerator comparison
- [ ] Method 2 practice: same denominator comparison
- [ ] Method 3 practice: different both with choice of approach (equivalent fractions OR 1/2 benchmark)
- [ ] Mixed mode combining all 3 methods
- [ ] Manual difficulty levels (Easy/Medium/Hard) per mode
- [ ] Guided hints on wrong answers
- [ ] Visual explanation (animated bars) when hints don't help
- [ ] Streak counter for consecutive correct answers
- [ ] Progress bar showing completion within current level
- [ ] Persistent progress saved between sessions
- [ ] Touch-friendly for tablet use
- [ ] Mouse-friendly for laptop use

### Out of Scope

- User accounts/login — localStorage sufficient for single student
- Multiple students/profiles — this is for one specific tutee
- Other fraction operations (addition, subtraction, etc.) — focus on comparison only
- Timed challenges — pressure counterproductive for this learner
- Leaderboards/competition — not appropriate for 1-on-1 tutoring context

## Context

**Learner profile:**
- P4 student in Singapore working on P3 math content (behind grade level)
- Suspected ADHD/ADD: zones out, fidgety
- Re-engages with: direct questions, hands-on activity, change of pace, encouragement
- Currently uses Singapore Math textbook with horizontal bar fraction diagrams

**The 3 comparison methods (from textbook):**
1. Same numerator → smaller denominator = bigger fraction
2. Same denominator → compare numerators like normal numbers
3. Different both → either make equivalent fractions (same denominator) OR use 1/2 benchmark comparison

**1/2 benchmark method:**
- Draw 3 bars side by side: 1/2 reference bar + both fractions
- Compare shaded areas visually
- Especially useful when one fraction < 1/2 and other > 1/2

**Usage context:**
- Used during tutoring sessions, tutor explains while student interacts
- Both demonstration (show concept) and practice (solve problems)
- Scaffolded learning: practice each method separately, then mix

## Constraints

- **Hosting**: Free tier (Vercel, GitHub Pages, Netlify)
- **Persistence**: localStorage only, no backend
- **Devices**: Must work on both laptop (mouse) and tablet (touch)
- **Visuals**: Horizontal bars only (matches textbook, not circles/pies)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Horizontal bars only | Matches textbook student already uses | — Pending |
| localStorage for progress | Single user, no need for accounts/backend | — Pending |
| Manual difficulty levels | Tutor controls pace, not auto-progression | — Pending |
| Guided retry before answer reveal | Builds understanding, not just answer-getting | — Pending |
| Streaks + progress bar | Motivation without competitive pressure | — Pending |

---
*Last updated: 2025-01-31 after initialization*
