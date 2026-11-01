# LearnLane delivery outcomes

## 1. Chronological curriculum shell
- The website presents eight non-overlapping chapters in strict chronological order.
- A sticky sidebar or navigation menu shows chapter numbers, titles, and completion state.
- Chapter navigation scrolls to the correct session and supports keyboard focus.

## 2. Complete session structure
- Every session includes WWH Learning Objectives with WHAT, WHY, and HOW.
- Every session includes a starter activity, detailed content, contextual syllabus diagram/picture placeholder(s), interactive practice, and a plenary.
- Content is written as teaching material rather than short summaries; core and extended content are visibly distinct.

## 3. Visual system and header picture
- The UI is clean, modern, responsive, and readable on desktop, tablet, and mobile.
- One wide header picture spans the same editorial width as the blog/article content.
- CORE and EXTENDED content use distinct badges, colors, and card treatments.

## 4. Dynamic practice and progress
- Each session contains 3–4 interactive multiple-choice or short-answer questions.
- Selecting or submitting an answer displays immediate correct/incorrect feedback and an explanation.
- A live score counter totals correct answers across the site.
- Progress updates when a session is completed and is reflected in the rail and progress bar.
- Reflection checklists and exit-ticket fields work without a backend and persist for the current browser session.

## 5. Static delivery contract
- The site runs without a backend server or database.
- `GET /manus-routes.json` returns a valid route manifest for `/`.
- The project listens on port 3000 in Preview.
- The project can be built and served from committed files.
