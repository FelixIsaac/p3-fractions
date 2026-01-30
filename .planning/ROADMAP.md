# Roadmap: Fraction Comparison Trainer

**Created:** 2026-01-31
**Milestone:** v1.0
**Phases:** 6
**Requirements:** 33 mapped

## Phase Overview

| # | Name | Goal | Requirements | Success Criteria |
|---|------|------|--------------|------------------|
| 1 | Visual Foundation | Student can see and interact with fraction bars | VIS-01 to VIS-05, DEV-01 to DEV-03 | 4 |
| 2 | Problem Generation | System generates appropriate fraction pairs | PROB-01 to PROB-05 | 3 |
| 3 | Core Practice Modes | Student can practice each method separately | MODE-01 to MODE-05 | 4 |
| 4 | Advanced Visuals | Student sees animated comparisons and 1/2 benchmark | VIS-06, VIS-07 | 3 |
| 5 | Feedback System | Student gets guided help on wrong answers | FEED-01 to FEED-05 | 4 |
| 6 | Engagement & Polish | Progress persists and interface optimized | ENG-01 to ENG-04, UX-01 to UX-06 | 5 |

## Phase 1: Visual Foundation

**Goal:** Student can see and interact with horizontal fraction bars on laptop and tablet

**Requirements:**
- VIS-01: Display horizontal bar models matching Singapore Math textbook style
- VIS-02: Show complete whole bar with fraction part shaded
- VIS-03: Display equal partitions with visually obvious same-size segments
- VIS-04: Show side-by-side comparison bars for "which is bigger?" problems
- VIS-05: Student can interactively shade bar segments (click/drag)
- DEV-01: Responsive design working on laptop and tablet
- DEV-02: Touch interaction support (tap, drag)
- DEV-03: Mouse interaction support (click, drag)

**Success Criteria:**
1. Student can view two fraction bars side-by-side with clear equal partitions
2. Student can click/tap bar segments to shade them on both laptop and tablet
3. Student can drag to shade multiple segments in one motion
4. Bars display correctly on 10" tablet (minimum) and 13" laptop screen

**Depends on:** None

---

## Phase 2: Problem Generation

**Goal:** System generates age-appropriate fraction comparison problems for each method

**Requirements:**
- PROB-01: Generate fraction pairs appropriate for each method
- PROB-02: Limit denominators to P3 Singapore Math set (2, 3, 4, 5, 6, 8)
- PROB-03: Easy level uses simpler fractions (halves, thirds, quarters)
- PROB-04: Hard level uses closer-value fractions requiring careful comparison
- PROB-05: Ensure visual distinctness (no identical fractions)

**Success Criteria:**
1. System generates same-numerator pairs (e.g., 2/3 vs 2/5)
2. System generates same-denominator pairs (e.g., 3/8 vs 5/8)
3. System generates different-both pairs appropriate for 1/2 benchmark (e.g., 2/5 vs 3/4)
4. Easy difficulty uses fractions with denominators 2-4 only
5. Hard difficulty generates fractions requiring careful visual comparison

**Depends on:** Phase 1

---

## Phase 3: Core Practice Modes

**Goal:** Student can practice each comparison method in isolation with difficulty selection

**Requirements:**
- MODE-01: Same numerator practice mode (Method 1: compare denominators)
- MODE-02: Same denominator practice mode (Method 2: compare numerators)
- MODE-03: Different both practice mode (Method 3: equivalent fractions OR 1/2 benchmark)
- MODE-04: Mixed practice mode (all 3 methods combined randomly)
- MODE-05: Manual difficulty selection (Easy/Medium/Hard) per mode

**Success Criteria:**
1. Student can select "Same Numerator" mode and solve comparison problems
2. Student can select "Same Denominator" mode and solve comparison problems
3. Student can select "Different Both" mode and solve comparison problems
4. Student can select "Mixed" mode and encounter all 3 methods randomly
5. Student can choose Easy/Medium/Hard before starting any mode

**Depends on:** Phase 2

---

## Phase 4: Advanced Visuals

**Goal:** Student sees 1/2 benchmark reference and animated equivalent fraction conversions

**Requirements:**
- VIS-06: Display 1/2 benchmark reference bar alongside two fractions (Method 3)
- VIS-07: Animate equivalent fraction conversion (bars subdividing to common denominator)

**Success Criteria:**
1. Student sees three bars side-by-side in Method 3: 1/2 reference + both fractions
2. Student can trigger animation showing bar subdividing from 2/3 to 4/6
3. Animation clearly shows equal partitions being created by subdivision

**Depends on:** Phase 3

---

## Phase 5: Feedback System

**Goal:** Student receives immediate, graduated, encouraging feedback on all interactions

**Requirements:**
- FEED-01: Immediate correctness indicator (<0.5 sec visual/audio cue)
- FEED-02: Graduated hint system (3 levels before revealing answer)
- FEED-03: Visual explanation showing animated bar comparison when hints exhausted
- FEED-04: Encouraging messages with positive framing ("You're learning!")
- FEED-05: No point deductions or harsh corrections for wrong answers

**Success Criteria:**
1. Student sees green checkmark within 0.5 seconds of correct answer
2. Student sees "Try again" hint (not "Wrong") on incorrect answer
3. Student can request up to 3 hints before seeing animated explanation
4. Student sees encouraging message after both correct and corrected answers
5. Student never sees negative language or point deductions

**Depends on:** Phase 4

---

## Phase 6: Engagement & Polish

**Goal:** Progress persists between sessions and interface optimized for ADHD learner

**Requirements:**
- ENG-01: Streak counter showing consecutive correct answers
- ENG-02: Progress bar showing completion within current level
- ENG-03: Session summary displaying results at end of session
- ENG-04: Persistent progress saved between sessions (localStorage)
- UX-01: Single-focus interface (one problem per screen)
- UX-02: Minimal visual clutter (no decorative animations)
- UX-03: No performance timers or countdown clocks
- UX-04: Large, well-spaced touch targets for tablet use
- UX-05: Clean, high-contrast design
- UX-06: Pause/resume capability without losing progress

**Success Criteria:**
1. Student sees streak counter increase with each correct answer and reset on wrong answer
2. Student sees progress bar fill as they complete problems
3. Student can close browser, reopen next day, and see their progress restored
4. Student can pause mid-session and resume from exact same problem
5. Student sees only one problem at a time with no distracting elements

**Depends on:** Phase 5

---

## Coverage Validation

- Total v1 requirements: 33
- Mapped to phases: 33
- Coverage: 100% ✓

### Mapping Detail

| Phase | Requirements | Count |
|-------|--------------|-------|
| 1 | VIS-01, VIS-02, VIS-03, VIS-04, VIS-05, DEV-01, DEV-02, DEV-03 | 8 |
| 2 | PROB-01, PROB-02, PROB-03, PROB-04, PROB-05 | 5 |
| 3 | MODE-01, MODE-02, MODE-03, MODE-04, MODE-05 | 5 |
| 4 | VIS-06, VIS-07 | 2 |
| 5 | FEED-01, FEED-02, FEED-03, FEED-04, FEED-05 | 5 |
| 6 | ENG-01, ENG-02, ENG-03, ENG-04, UX-01, UX-02, UX-03, UX-04, UX-05, UX-06 | 10 |

---

*Roadmap created: 2026-01-31*
