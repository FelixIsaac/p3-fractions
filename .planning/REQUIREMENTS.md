# Requirements: Fraction Comparison Trainer

**Defined:** 2026-01-31
**Core Value:** Student can visually compare fractions using Singapore Math methods through hands-on bar manipulation

## v1 Requirements

### Visual Representation

- [ ] **VIS-01**: Display horizontal bar models matching Singapore Math textbook style
- [ ] **VIS-02**: Show complete whole bar with fraction part shaded
- [ ] **VIS-03**: Display equal partitions with visually obvious same-size segments
- [ ] **VIS-04**: Show side-by-side comparison bars for "which is bigger?" problems
- [ ] **VIS-05**: Student can interactively shade bar segments (click/drag)
- [ ] **VIS-06**: Display 1/2 benchmark reference bar alongside two fractions (Method 3)
- [ ] **VIS-07**: Animate equivalent fraction conversion (bars subdividing to common denominator)

### Practice Modes

- [ ] **MODE-01**: Same numerator practice mode (Method 1: compare denominators)
- [ ] **MODE-02**: Same denominator practice mode (Method 2: compare numerators)
- [ ] **MODE-03**: Different both practice mode (Method 3: equivalent fractions OR 1/2 benchmark)
- [ ] **MODE-04**: Mixed practice mode (all 3 methods combined randomly)
- [ ] **MODE-05**: Manual difficulty selection (Easy/Medium/Hard) per mode

### Problem Generation

- [ ] **PROB-01**: Generate fraction pairs appropriate for each method
- [ ] **PROB-02**: Limit denominators to P3 Singapore Math set (2, 3, 4, 5, 6, 8)
- [ ] **PROB-03**: Easy level uses simpler fractions (halves, thirds, quarters)
- [ ] **PROB-04**: Hard level uses closer-value fractions requiring careful comparison
- [ ] **PROB-05**: Ensure visual distinctness (no identical fractions)

### Feedback System

- [ ] **FEED-01**: Immediate correctness indicator (<0.5 sec visual/audio cue)
- [ ] **FEED-02**: Graduated hint system (3 levels before revealing answer)
- [ ] **FEED-03**: Visual explanation showing animated bar comparison when hints exhausted
- [ ] **FEED-04**: Encouraging messages with positive framing ("You're learning!")
- [ ] **FEED-05**: No point deductions or harsh corrections for wrong answers

### Engagement & Progress

- [ ] **ENG-01**: Streak counter showing consecutive correct answers
- [ ] **ENG-02**: Progress bar showing completion within current level
- [ ] **ENG-03**: Session summary displaying results at end of session
- [ ] **ENG-04**: Persistent progress saved between sessions (localStorage)

### ADHD-Friendly UX

- [ ] **UX-01**: Single-focus interface (one problem per screen)
- [ ] **UX-02**: Minimal visual clutter (no decorative animations)
- [ ] **UX-03**: No performance timers or countdown clocks
- [ ] **UX-04**: Large, well-spaced touch targets for tablet use
- [ ] **UX-05**: Clean, high-contrast design
- [ ] **UX-06**: Pause/resume capability without losing progress

### Device Support

- [ ] **DEV-01**: Responsive design working on laptop and tablet
- [ ] **DEV-02**: Touch interaction support (tap, drag)
- [ ] **DEV-03**: Mouse interaction support (click, drag)

## v2 Requirements

Deferred to future release.

### Analytics

- **ANAL-01**: Tutor dashboard showing error patterns
- **ANAL-02**: Problem-specific analytics (which fractions cause trouble)
- **ANAL-03**: Mistake pattern recognition (e.g., "bigger denominator = bigger" bias)

### Additional Representations

- **REP-01**: Number line representation for fractions
- **REP-02**: Option to switch between bar and number line views

### Advanced Features

- **ADV-01**: Adaptive difficulty based on performance
- **ADV-02**: Mastery-based progression gates
- **ADV-03**: Movement break reminders

## Out of Scope

| Feature | Reason |
|---------|--------|
| User accounts/login | localStorage sufficient for single student |
| Multiple student profiles | Built for one specific tutee |
| Circular/pie fraction models | Research shows bars more effective; matches textbook |
| Timed challenges | Causes anxiety for ADHD learners |
| Leaderboards/competition | Not appropriate for 1-on-1 tutoring |
| Other fraction operations | Focus on comparison only |
| Complex gamification | Distracts from learning; ADHD anti-pattern |
| Background music/sounds | Can distract; tutor controls environment |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| VIS-01 | Phase 1 | Pending |
| VIS-02 | Phase 1 | Pending |
| VIS-03 | Phase 1 | Pending |
| VIS-04 | Phase 1 | Pending |
| VIS-05 | Phase 1 | Pending |
| VIS-06 | Phase 4 | Pending |
| VIS-07 | Phase 4 | Pending |
| MODE-01 | Phase 3 | Pending |
| MODE-02 | Phase 3 | Pending |
| MODE-03 | Phase 3 | Pending |
| MODE-04 | Phase 3 | Pending |
| MODE-05 | Phase 3 | Pending |
| PROB-01 | Phase 2 | Pending |
| PROB-02 | Phase 2 | Pending |
| PROB-03 | Phase 2 | Pending |
| PROB-04 | Phase 2 | Pending |
| PROB-05 | Phase 2 | Pending |
| FEED-01 | Phase 5 | Pending |
| FEED-02 | Phase 5 | Pending |
| FEED-03 | Phase 5 | Pending |
| FEED-04 | Phase 5 | Pending |
| FEED-05 | Phase 5 | Pending |
| ENG-01 | Phase 6 | Pending |
| ENG-02 | Phase 6 | Pending |
| ENG-03 | Phase 6 | Pending |
| ENG-04 | Phase 6 | Pending |
| UX-01 | Phase 6 | Pending |
| UX-02 | Phase 6 | Pending |
| UX-03 | Phase 6 | Pending |
| UX-04 | Phase 6 | Pending |
| UX-05 | Phase 6 | Pending |
| UX-06 | Phase 6 | Pending |
| DEV-01 | Phase 1 | Pending |
| DEV-02 | Phase 1 | Pending |
| DEV-03 | Phase 1 | Pending |

**Coverage:**
- v1 requirements: 33 total
- Mapped to phases: 33
- Unmapped: 0 ✓

---
*Requirements defined: 2026-01-31*
*Last updated: 2026-01-31 after roadmap creation*
