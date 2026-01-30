# Feature Landscape: Fraction Comparison Learning Tools

**Domain:** Primary school fraction comparison learning (P3/Grade 3)
**Researched:** 2026-01-31
**Confidence:** HIGH (based on 2025-2026 research, Singapore MOE curriculum documents, educational psychology studies)

## Executive Summary

Fraction comparison learning tools for primary students center on visual representations, immediate corrective feedback, and adaptive difficulty. For ADHD learners in 1-on-1 tutoring, distraction-free design and short focused sessions are critical. Singapore Math curriculum emphasizes bar models, unit fraction comparison, and equivalent fractions with strong visual support.

---

## Table Stakes

Features users expect. Missing = learning suffers.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| **Visual fraction representations** | Core to conceptual understanding; fractions are abstract without visuals | Medium | Bar models (horizontal/vertical), number lines, area models required |
| **Multiple representation types** | Different learners connect with different visuals; research shows multiple reps build flexible thinking | Medium | Min 2-3 types (bar, number line, area model) |
| **Immediate corrective feedback** | 93% of studies show positive effect; prevents reinforcing misconceptions | Low | Must explain WHY answer is wrong, not just mark incorrect |
| **Unit fraction foundation** | Singapore P3 curriculum starts here; building block for all comparison | Low | 1/2, 1/3, 1/4, etc. before mixed fractions |
| **Like vs unlike fraction comparison** | P3 curriculum expectation: same denominator, same numerator, different both | Medium | Three distinct comparison strategies |
| **Benchmark fraction (1/2)** | Universal teaching strategy for fraction magnitude; P3 curriculum includes | Low | Compare to 1/2 as reference point |
| **CRA progression support** | Research shows 0.9965 effect size; essential for deep understanding | Medium | Concrete → Representational → Abstract within same activity |
| **Progress persistence** | Students expect to continue where they left off | Low | Save state between sessions |

---

## Differentiators

Features that make tools especially effective for P3 fraction learning + ADHD context.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Adaptive difficulty adjustment** | Maintains optimal challenge; prevents frustration/boredom; 52.7% YoY market growth in adaptive learning | High | Item Response Theory for small datasets; adjust in real-time based on performance |
| **ADHD-optimized design** | Reduces cognitive load for suspected ADHD; increases focus and retention | Medium | No timers, minimal UI, no distractions, short focused sessions |
| **Singapore Math bar model fidelity** | Matches student's textbook approach; reduces cognitive load of translating between systems | Medium | Horizontal bar models with equal-part segmentation |
| **Equivalent fraction visualization** | Makes "hidden sameness" visible; addresses major conceptual stumbling block | High | Animated transitions showing bars subdividing into equivalent fractions |
| **Tutor dashboard/insights** | 1-on-1 context needs session-by-session progress; identify misconception patterns | Medium | Problem-specific analytics, not just overall score |
| **Mistake pattern recognition** | Surfaces systematic errors (e.g., "bigger denominator = bigger fraction") | High | Track error types, surface to tutor |
| **Mastery-based progression** | Students advance based on demonstrated understanding, not time spent | Medium | Define mastery criteria per skill (e.g., 3 consecutive correct) |
| **Minimal gamification** | Light rewards without pressure; ADHD research shows heavy gamification can distract | Low | Progress indicators, simple affirmation, no complex point systems |
| **Pause/resume flexibility** | ADHD learners need breaks; tutoring sessions have interruptions | Low | Save mid-problem state |

---

## Anti-Features

Features to explicitly NOT build. Common mistakes in this domain.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| **Timed drills** | Cause math anxiety; research shows 1/3 of students develop anxiety from timed testing; counterproductive for ADHD | Untimed practice with optional pacing feedback |
| **Complex gamification** | Distracts from learning objective; increases cognitive load; ADHD students lose focus on math | Simple progress bars, minimal rewards |
| **Circular/pizza models only** | Research recommends rectangles over circles; circles harder to partition accurately | Bar models primary, circles supplementary |
| **Drill without conceptual support** | "Drill and kill" causes 1/3 to develop math anxiety; doesn't build understanding | CRA approach, visual models always available |
| **Animations/sounds unrelated to learning** | Cognitive load research: extraneous elements impair learning (Hedges' g = −0.65 for distractions) | Only use animations that show mathematical transformation |
| **Multiple navigation paths** | Cluttered interfaces increase extraneous cognitive load, especially for neurodivergent learners | Linear progression within session; tutor controls session selection |
| **Social/competitive features** | Inappropriate for 1-on-1 tutoring; adds pressure that harms ADHD learners | Focus on personal mastery |
| **Delayed feedback** | Students reinforce misconceptions with repeated errors before correction | Immediate trial-by-trial feedback |
| **Achievement unlocks/collectibles** | Shifts focus from learning to collection; ADHD learners hyperfocus on wrong thing | Simple completion indicators only |

---

## Feature Categories by Learning Phase

### Foundation Phase (Unit Fractions)
**Must have:**
- Visual comparison of unit fractions (1/2, 1/3, 1/4, 1/5, 1/6, 1/8, 1/10)
- "Smaller denominator = bigger piece" conceptual model
- Bar model representation
- Number line representation
- Benchmark against 1/2

### Same Denominator Phase
**Must have:**
- Visual comparison showing equal-sized pieces
- "More pieces = bigger total" reasoning
- Problems limited to same denominator pairs

### Same Numerator Phase
**Must have:**
- Visual comparison showing same number of pieces
- "Bigger pieces = bigger total" reasoning
- Problems limited to same numerator pairs

### Mixed Strategy Phase (equivalent fractions)
**Must have:**
- Animated conversion to equivalent fractions
- Visual subdivision of bars to find common denominator
- Choice of strategy (equivalent fractions OR 1/2 benchmark)
- Mixed problem types

---

## ADHD-Friendly Design Principles

Based on research from Monster Math, cognitive load studies, and ADHD accessibility frameworks:

### DO Include:
- **Distraction-free interface**: No banners, ads, irrelevant animations
- **Predictable structure**: Same layout/flow each session
- **Short focused bursts**: 5-10 minute sessions max
- **Visual clarity**: High contrast, large touch targets, minimal text
- **Immediate feedback**: Right/wrong indication within 0.5 seconds
- **No time pressure**: No countdown timers, no rushing
- **CRA integration**: Manipulative-like interactions (dragging bars to compare)
- **Pause capability**: Can pause mid-session without losing progress

### DO NOT Include:
- Timers or countdown clocks
- Complex reward systems
- Multiple simultaneous tasks
- Cluttered navigation
- Background music (unless tutor-controlled)
- Notifications/interruptions
- Dense text instructions

---

## Singapore Math Curriculum Alignment (P3)

Based on MOE 2021 Primary Mathematics Syllabus (applying to P3 in 2025-2026):

**Required Learning Objectives:**
1. Understand fractional notation (numerator/denominator)
2. Recognize that common fractions are composed of unit fractions
3. Compare unit fractions
4. Compare like fractions (same denominator)
5. Understand equivalence of fractions
6. Identify equivalent fractions using visual models
7. Compare fractions with different numerators and denominators

**Visual Model Requirements:**
- Bar models (horizontal) are standard Singapore Math approach
- Number lines for fraction as number concept
- Area models for part-whole understanding

**Assessment Note:**
"Comparing, ordering, or identifying equivalent fractions requires deep conceptual understanding and strong visual support through models and pictorial representations." (MOE guidance)

---

## Feedback Mechanism Design

Based on 2025 research on immediate vs delayed feedback in primary mathematics:

### Feedback Timing:
- **Immediate** (within 0.5 sec of answer submission)
- Trial-by-trial correction to prevent misconception reinforcement
- Research: 8-11 year olds learn better with immediate vs delayed feedback

### Feedback Content:
- **Not sufficient**: "Incorrect" or red X
- **Required**: Explanation of why answer is wrong
- **Best practice**: Show visual comparison that reveals correct relationship

### Feedback Levels:
1. **Task-specific**: "3/4 is actually larger than 2/3"
2. **Process-oriented**: "When denominators are different, we need to make them the same"
3. **Self-regulation**: "What strategy could help compare these fractions?"

### Adaptive Feedback:
- First error: Gentle hint with visual
- Repeated error on same concept: More explicit explanation
- Pattern of errors: Flag for tutor review

---

## Progress Tracking Approaches

### For Student:
- **Visual mastery indicators**: Simple checkmarks or progress bars per skill
- **Session completion**: "Today you practiced comparing fractions with same denominators"
- **Streak tracking**: Days in a row (low-key, not pressured)

### For Tutor:
- **Skill-level mastery dashboard**: Which of 3 comparison methods student has mastered
- **Error pattern analysis**: "Student consistently thinks bigger denominator = bigger fraction"
- **Time-on-task analytics**: Which problems take longest (cognitive load indicator)
- **Problem history**: Review specific problems attempted with answers
- **Conceptual gaps**: Flag areas needing intervention

### Mastery Criteria:
Research-based thresholds:
- **Emerging**: <70% correct
- **Developing**: 70-85% correct
- **Proficient**: 85-95% correct, demonstrates multiple strategies
- **Mastery**: 95%+ correct, can explain reasoning, transfers to new contexts

---

## Interaction Patterns

### Touch Interactions:
- **Drag to compare**: Physically drag fraction bars next to each other
- **Tap to subdivide**: Tap bar to show equivalent fractions (animation)
- **Swipe to align**: Align bars on number line for visual comparison

### Visual Feedback:
- **Highlighting**: When comparing, highlight the larger fraction
- **Animation**: Show bars subdividing into equivalent fractions (not decorative)
- **Color coding**: Minimal; only for distinguishing fractions being compared

### Scaffolding:
- **Level 1**: Visual models shown automatically
- **Level 2**: Student chooses which visual model to use
- **Level 3**: Student solves symbolically, can request visual support
- **Level 4**: Pure symbolic with visual available on demand

---

## MVP Recommendation

For initial 1-on-1 tutoring use with P4 student (suspected ADHD) learning P3 content:

### Phase 1 MVP:
1. **Horizontal bar model visualization** (Singapore Math standard)
2. **Three comparison types**: Same denominator, same numerator, benchmark to 1/2
3. **Immediate corrective feedback** with visual explanation
4. **Distraction-free interface** (no timers, minimal UI)
5. **Simple progress tracking** (problems attempted/correct per session)
6. **Problem generator** for each comparison type
7. **Tutor dashboard** showing session results and error patterns

### Defer to Post-MVP:
- **Number line representation**: Add after bar model mastery
- **Equivalent fractions (general method)**: Add after benchmark method works
- **Area/circle models**: Supplementary, not core
- **Adaptive difficulty**: Start with tutor-selected difficulty, add adaptation later
- **Mistake pattern recognition**: Manual tutor observation first, automate later
- **Mastery-based progression**: Initial version is tutor-directed
- **Multiple problem formats**: Start with "which is larger" only

---

## Research Quality Note

**Confidence Level: HIGH**

Sources include:
- 2025 meta-analysis on CRA approach (30 studies, Tau-BC = 0.9965)
- 2025 research on immediate vs delayed feedback in mathematics
- 2025 meta-analysis on digital distractions (Hedges' g = −0.65)
- Singapore MOE Primary Mathematics Syllabus (2021, updated Dec 2024)
- Monster Math ADHD design principles (2025-2026)
- Educational psychology research on fraction learning difficulties
- Virtual manipulatives effectiveness studies (IES, 2025)

---

## Sources

### Visual Representations:
- [Using virtual manipulatives as a tool to support students in learning fractions](https://ies.ed.gov/learn/blog/using-virtual-manipulatives-tool-support-students-learning-fractions)
- [Visual Resources for Teaching Fractions](https://learningmole.com/visual-resources-for-teaching-fractions/)
- [Comparing Fractions: Visual Tools and Practical Strategies](https://deled.institute/teaching-mathematics/comparing-fractions-visual-tools-strategies/)
- [Fractions App by The Math Learning Center](https://www.mathlearningcenter.org/apps/fractions)

### Singapore Math & Bar Models:
- [Bar Modelling - Singapore Maths Method](https://mathsnoproblem.com/en/approach/bar-modelling)
- [The Bar Model: How To Teach it in KS1 and KS2](https://thirdspacelearning.com/blog/teach-bar-model-method-arithmetic-maths-word-problems-ks1-ks2/)
- [Singapore Math Learning Center](https://singaporemathlearningcenter.com/singapore-math/drawing-bar-models-singapore-math)

### ADHD-Friendly Design:
- [5 Amazing Math Games To Transform Your ADHD Child's Math Skills](https://www.monstermath.app/blog/5-amazing-math-games-to-transform-your-adhd-childs-math-skills-cm7307xty004xr1l23wr6zbk6)
- [25 Amazing Learning Games for Kids with ADHD](https://www.monstermath.app/blog/25-amazing-learning-games-for-kids-with-adhd)
- [Accessibility Barriers in K–12 Digital Learning Platforms for Students with ADHD](https://pressbooks.pub/alttexts2025/chapter/accessibility-barriers-in-k-12-digital-learning-platforms-for-students-with-adhd/)

### Feedback Mechanisms:
- [Math Problem Supports: Immediate Feedback Effect](https://www.tandfonline.com/doi/full/10.1080/19345747.2025.2534377)
- [Effect of Immediate Feedback on Math Achievement](https://pmc.ncbi.nlm.nih.gov/articles/PMC7334720/)
- [Developmental Perspective on Feedback in Math](https://pmc.ncbi.nlm.nih.gov/articles/PMC10373990/)
- [Purpose and Level of Feedback in Exploratory Learning Environment for Fractions](https://link.springer.com/content/pdf/10.1007/978-3-319-19773-9_76.pdf)

### Progress Tracking:
- [Track Math Learning Through Effective Progress Monitoring](https://reflex.explorelearning.com/resources/insights/student-progress-monitoring-math)
- [Mastery-Based Assessment: Smarter Progress Tracking](https://soraschools.com/blog/mastery-based-assessment-a-smarter-way-to-measure-student-progress)
- [MasteryTrack - Dashboards for Mastery Learning](https://masterytrack.org/)

### Gamification Research:
- [Gamification and Mathematics (ERIC)](https://files.eric.ed.gov/fulltext/ED608250.pdf)
- [Game-Based Learning in Primary Mathematics Education](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1331312/full)
- [Gamification in Math and Its Impact on Fluency](https://www.bluestreakmath.com/blog/gamification-in-math)
- [Are Drill and Practice Strategies Effective in 2025 Education?](https://teacheducator.com/drill-and-practice-strategies-effective-in-2025-education/)

### CRA Approach:
- [Meta-Analytic Review of the Concrete-Representational-Abstract Math Approach](https://journals.sagepub.com/doi/10.1177/09388982241292299)
- [Using the CRA Framework in Elementary Math](https://www.edutopia.org/article/using-cra-framework-elementary-math/)
- [Concrete Representational Abstract: What It Is And How To Use It](https://thirdspacelearning.com/us/blog/concrete-representational-abstract-math-cpa/)

### Singapore Curriculum:
- [MOE Mathematics Syllabus Primary One to Six](https://www.moe.gov.sg/-/media/files/primary/mathematics_syllabus_primary_1_to_6.pdf)
- [Primary 3 Math Syllabus Overview (2026)](https://jimmymaths.com/p3-math-syllabus/)
- [MOE Math Syllabus 2025 Guide](https://tutify.com.sg/moe-math-syllabus-2025/)

### Cognitive Load & Distractions:
- [Digital Distractions in Education: A Systematic Review](https://link.springer.com/article/10.1007/s11423-025-10550-6)
- [Cognitive Load and Neurodiversity in Online Education](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1437673/full)
- [Impact of Digital Technologies on Students' Learning (OECD 2025)](https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/09/the-impact-of-digital-technologies-on-students-learning_14095366/9997e7b3-en.pdf)

### Adaptive Learning:
- [7 Best Adaptive Learning Platforms in 2026](https://whatfix.com/blog/adaptive-learning-platforms/)
- [How Adaptive Learning Platforms Revolutionize L&D in 2025](https://disprz.ai/blog/adaptive-learning-platform-overview)
- [AI-driven Adaptive Learning for Sustainable Educational Transformation](https://onlinelibrary.wiley.com/doi/10.1002/sd.3221)
