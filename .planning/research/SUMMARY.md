# Research Summary: Fraction Comparison Trainer

**Researched:** 2026-01-31
**Confidence:** HIGH

---

## Key Takeaways

### 1. ADHD-Friendly Design (Critical)

| Principle | Implementation |
|-----------|---------------|
| **3-5 min task blocks** | Short sessions, frequent breaks |
| **Immediate feedback** | <0.5 sec response on every interaction |
| **Single-focus interface** | One problem per screen, minimal decoration |
| **Hands-on manipulation** | Drag/click interactions, not passive watching |
| **No performance timers** | Session timers OK, countdown timers cause anxiety |
| **Mistake-friendly** | Celebrate attempts, guide toward understanding |

### 2. Singapore Math Alignment (P3)

**Required methods:**
1. Same numerator → smaller denominator = bigger fraction
2. Same denominator → compare numerators normally
3. Different both → equivalent fractions OR 1/2 benchmark

**Visual standard:** Horizontal bar models (not circles/pies)

**Denominators for P3:** 2, 3, 4, 5, 6, 8 (limited set)

### 3. Critical Pitfalls to Avoid

| Pitfall | Why Dangerous | Prevention |
|---------|---------------|------------|
| Performance timers | ADHD time blindness → anxiety/shutdown | Session timers only |
| Whole number bias | "1/4 > 1/2 because 4 > 2" | Visual bars show size directly |
| Visual clutter | Exhausts working memory | One problem per screen |
| Incomplete bars | Can't compare visually | Always show full whole + equal partitions |
| Harsh feedback | "I'm bad at math" belief cycle | Mistake-friendly, no point deductions |
| Abstract-first | Memorization without understanding | CRA progression (concrete → visual → abstract) |

### 4. Feedback System Design

**Levels (on wrong answer):**
1. Gentle hint ("Think about the size of each piece")
2. Conceptual hint ("Which fraction has bigger pieces?")
3. Visual explanation (animated bar comparison)

**Never:**
- "WRONG!" or red X alone
- Point deductions
- Disappointed responses

### 5. Bar Model Requirements

- Always show **complete whole bar**
- **Equal partitions** must be visually obvious
- Use **comparison bars** (side-by-side) for "which is bigger?"
- Student should **create partitions interactively**
- For 1/2 benchmark: show 3 bars (1/2 reference + both fractions)

---

## MVP Scope Recommendations

**Build first:**
1. Horizontal bar visualization (Singapore Math standard)
2. Three comparison methods practiced separately
3. Manual difficulty (Easy/Medium/Hard)
4. Immediate feedback + guided hints
5. Simple progress (streaks, completion bar)
6. Distraction-free, ADHD-optimized interface

**Defer:**
- Number line representation
- Adaptive difficulty algorithm
- Tutor analytics dashboard
- Multiple visual representation modes

---

## Research Files

| File | Contents |
|------|----------|
| `FEATURES.md` | Feature landscape, table stakes vs differentiators, anti-features |
| `PEDAGOGY.md` | ADHD-friendly design principles, attention span, feedback timing |
| `PITFALLS.md` | Common mistakes, fraction misconceptions, bar model errors |

---

*Research confidence: HIGH — based on 2025-2026 peer-reviewed studies, Singapore MOE curriculum, educational psychology literature*
