# 16.5 Sex Hormones in Humans and 16.6 Sexually Transmitted Infections — implementation plan

## Product scope
The website is a self-contained, static educational site built from the uploaded Word guide and the attached PowerPoints `16.5SexHormonesandReproduction.pptx` and `16.6Sexually-Transmitted-Infections.pptx`. It uses the exact name `16.5 Sex Hormones in Humans and 16.6 Sexually Transmitted Infections`, keeps the guide's order, presents concise explanations, and uses the supplied PowerPoint diagrams as the primary teaching visuals.

## Design direction

### Considered styles
- **Quiet editorial lab (0.07):** warm paper surfaces, ink typography, and measured annotation-like accents.
- **Neon developer dashboard (0.06):** dark canvas, electric highlights, dense utility controls.
- **Field notebook / chosen (0.05):** off-white study canvas, deep ink-blue rails, lime learning markers, and coral assessment signals.

### Chosen design system
- **Design movement:** editorial field-notebook meets modern science handout.
- **Core principles:** teach in the source sequence; make exam distinctions visible; separate essential from Extended content; keep sensitive sexual-health content factual and non-stigmatising.
- **Color philosophy:** ink blue anchors navigation and trust, warm parchment keeps long-form reading calm, citrus green marks CORE action, and coral flags assessment or attention.
- **Layout paradigm:** a narrow sticky chapter rail paired with a single article column; the hero and content share one max-width editorial measure, while practice cards break out slightly for emphasis.
- **Signature elements:** numbered chapter waypoints, CORE / EXTENDED capsules, and contextual visual placeholders with a faint blueprint grid.
- **Interaction philosophy:** every question gives immediate feedback and an explanation; completion, score, and reflection controls keep the learner oriented without requiring an account.
- **Animation:** short lift/fade for content transitions; progress bar fills smoothly; respect `prefers-reduced-motion`.
- **Typography:** `DM Sans` for interface/body copy and `Space Grotesk` for display headings and chapter numbers, with system fallbacks.
- **Brand essence:** a guided, respectful biology studio for learners who want to understand mechanisms rather than memorise disconnected facts; calm, precise, encouraging.
- **Brand voice:** direct, warm, and exam-aware. Example lines: “Follow the signal. Name the site.” “Write the mechanism, not just the method.”
- **Wordmark/logo:** a simple “LL” wayfinder mark made from two offset vertical strokes and a connecting route line.
- **Signature brand color:** `#C8F169` citrus-lime, used for progress and essential learning cues.

## Information architecture
- `index.html`: semantic shell, biology hero/header, sticky chapter rail, eight session sections, and footer.
- `styles.css`: responsive editorial system, CORE/EXTENDED badges, contextual visual cards, feedback states, focus styles, and reduced-motion rules.
- `script.js`: source-grounded session data, chapter navigation, question grading, score counter, progress tracking, mobile nav drawer, and session-scoped reflection state.
- `public/manus-routes.json`: static route manifest for the root page.
- `public/ppt-images/` and `public/ppt-sti-images/`: extracted slide and diagram visuals from both attached PowerPoints, used as the hero and large in-context lesson images.

## Chronological curriculum
1. Puberty and secondary sexual characteristics (Core).
2. The menstrual cycle: ovarian and uterine changes (Core).
3. Hormonal control and feedback mechanisms (Extended).
4. Hormones in pregnancy and sites of production (Extended).
5. Sexually transmitted infections, HIV, and AIDS (Core from included 16.6 section).
6. Confirmed HIV transmission routes and myths (Core).
7. Controlling the spread of STIs (Core).
8. Syllabus coverage and common exam pitfalls (integrated Core + Extended revision).

Every session includes the requested WWH objectives, starter activity, detailed content, one or more contextual placeholders for the source document's visuals, three interactive questions with instant feedback, and a plenary checklist plus exit ticket.

## Serving and delivery
This is a static project with no database or server-side application state. The app listens on port 3000, exposes `/manus-routes.json`, and is served by a minimal Node static server for Preview. The build declaration outputs a clean `dist` directory via `npm run build`; publication remains separate from checkpointing. Visible text is set to a minimum 20px reading scale, and source pictures are enlarged responsively within the article width.
