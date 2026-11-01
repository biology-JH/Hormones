# LearnLane implementation plan

## Product scope
LearnLane is a self-contained, static educational website for a chronological Web Development Foundations course. It translates the requested session structure into eight non-overlapping chapters. The site has no backend requirement: all learning progress, question feedback, score totals, navigation, and reflection state run in the browser.

## Design direction

### Considered styles
- **Quiet editorial lab (0.07):** warm paper surfaces, ink typography, and measured annotation-like accents.
- **Neon developer dashboard (0.06):** dark canvas, electric highlights, dense utility controls.
- **Field notebook / chosen (0.05):** off-white study canvas, deep ink-blue rails, lime learning markers, and coral assessment signals.

### Chosen design system
- **Design movement:** editorial field-notebook meets modern documentation UI.
- **Core principles:** teach in sequence; make progress visible; separate essential from stretch work; use generous reading rhythm.
- **Color philosophy:** ink blue anchors navigation and trust, warm parchment keeps long-form reading calm, citrus green marks “CORE” action, and coral flags assessment or attention without making the interface feel punitive.
- **Layout paradigm:** a narrow sticky chapter rail paired with a single article column; the hero and content share one max-width editorial measure, while practice cards break out slightly for emphasis.
- **Signature elements:** numbered chapter waypoints, small uppercase “CORE / EXTENDED” capsule labels, and diagram placeholders with a faint blueprint grid.
- **Interaction philosophy:** every action answers “what happens next?”; feedback is immediate and specific, not just a score.
- **Animation:** short lift/fade for content transitions; progress bar fills smoothly; respect `prefers-reduced-motion`.
- **Typography:** `DM Sans` for interface/body copy and `Space Grotesk` for display headings and chapter numbers, with system fallbacks.
- **Brand essence:** a guided web-development studio for independent learners who want to understand the web by building it; calm, precise, encouraging.
- **Brand voice:** direct, warm, and coach-like. Example lines: “Make the browser your laboratory.” “You do not need to memorize the web; you need to trace it.”
- **Wordmark/logo:** a simple “LL” wayfinder mark made from two offset vertical strokes and a connecting route line.
- **Signature brand color:** `#C8F169` citrus-lime, used only for progress and essential learning cues.

## Information architecture
- `index.html`: semantic shell, header/hero, sticky chapter rail, eight session sections, diagram/picture placeholders, question cards, and plenary checklists.
- `styles.css`: responsive layout, visual system, cards, badges, feedback states, focus styles, and reduced-motion rules.
- `script.js`: session data binding, chapter navigation, question grading, score counter, progress tracking, reflection persistence, and mobile nav drawer.
- `public/learnlane-hero.jpg`: one wide generated header picture, used once at the article width.
- `public/manus-routes.json`: static route manifest for the root page.

## Chronological curriculum
1. Trace the web request and form a developer mindset.
2. Build a valid HTML document and use semantic structure.
3. Control visual presentation through selectors, cascade, box model, and layout.
4. Make interfaces responsive and accessible.
5. Add behavior with JavaScript and the DOM.
6. Collect, validate, and represent user input with forms and client-side state.
7. Debug deliberately, test outcomes, and improve performance.
8. Complete a small accessible responsive site and review/publish it.

Each session uses the same visible teaching rhythm: WWH objectives → starter → detailed core → optional extension → contextual visual placeholder → interactive practice → plenary.

## Serving and delivery
This is a static project with no database or server dependency. The app listens on port 3000, exposes `/manus-routes.json`, and is served by a minimal Node static server for Preview. A `build` config will be added for the committed static output when the project is checkpointed.
