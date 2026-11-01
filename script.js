const heroImage = "/manus-storage/async-images/9syQmkMYkQMp8V48G2cIq8/image-1.webp";

const sessions = [
  {
    id: 1, title: "Trace the web request", deck: "Before you write code, learn what the browser is doing — and where your work fits.",
    what: "The browser, server, URL, request, response, and the three-layer model of HTML, CSS, and JavaScript.",
    why: "When something breaks, a mental model lets you locate the problem instead of changing random code. This is the difference between guessing and debugging.",
    how: "You will trace a page request from a typed URL to painted pixels, annotate the journey, and use a simple vocabulary map to explain each hand-off.",
    starter: "A friend says, “The internet is the website.” Do you agree? Sketch what you think happens between pressing Enter and seeing a page. Keep your sketch; you will revise it after the session.",
    core: [
      "A website is a collection of resources delivered over a network, not a single object sitting inside the browser. The browser is a client: it asks for resources. A server responds with files or generated data. The network moves those messages between them.",
      "A URL gives the browser a target. The scheme tells it how to communicate (usually HTTPS); the domain identifies the server; the path names a resource; the query string carries optional parameters. The browser resolves the domain, opens a connection, sends an HTTP request, and receives an HTTP response with a status, headers, and body.",
      "The response body may be HTML. The browser parses HTML into a DOM tree, parses CSS into rules, combines structure and style into a render tree, calculates layout, paints pixels, and composites layers. JavaScript can then read or change the DOM and ask the browser to paint again.",
      "The three learning layers are intentionally separate: HTML describes meaning and structure; CSS describes presentation and layout; JavaScript describes behavior and change. Keeping those jobs distinct makes an interface easier to reason about and maintain."
    ],
    extended: "HTTP status codes are clues, not diagnoses: 2xx usually means success, 3xx means redirection, 4xx points to a client/request problem, and 5xx points to a server-side failure. In developer tools, the Network panel shows the request URL, method, status, timing, and response so you can test the mental model against evidence.",
    visuals: ["Request journey: URL → DNS → server → HTTP response → DOM/CSSOM → layout → paint", "Three-layer stack: semantic structure / visual system / interaction layer"],
    questions: [
      { type: "mc", prompt: "Which layer is primarily responsible for the meaning and structure of a page?", options: ["HTML", "CSS", "JavaScript", "HTTP"], answer: 0, explain: "HTML gives content its structure and meaning. CSS and JavaScript build on that structure." },
      { type: "mc", prompt: "A browser asks a server for `/about`. What is that message called?", options: ["A render tree", "An HTTP request", "A CSS rule", "A DOM event"], answer: 1, explain: "The browser sends an HTTP request; the server answers with an HTTP response." },
      { type: "short", prompt: "Complete the sentence: the browser parses HTML into a ____ tree.", answers: ["dom"], explain: "DOM stands for Document Object Model: the browser's structured representation of the document." }
    ],
    plenary: ["I can name the client and the server in a page load.", "I can explain the jobs of HTML, CSS, and JavaScript without blending them.", "I can use the Network panel as evidence when a resource fails."],
    exit: "What is one point in the request journey you want to inspect next time a page feels broken?"
  },
  {
    id: 2, title: "Build the document", deck: "Turn content into a valid, meaningful HTML document that browsers and people can navigate.",
    what: "HTML syntax, document structure, nesting, attributes, headings, landmarks, links, images, and semantic elements.",
    why: "Good structure improves accessibility, search understanding, maintainability, and the reliability of every later CSS and JavaScript decision.",
    how: "You will start from a blank file, layer structure from the outside in, and choose elements by meaning before considering how they look.",
    starter: "Look at a news article. Without seeing its source, list the pieces that must exist: a page title, navigation, a heading, text, perhaps an image, and related links. Which pieces need a relationship, not just visual styling?",
    core: [
      "An HTML document begins with `<!doctype html>` so the browser uses standards mode. The root `html` element contains `head` metadata and `body` content. The `head` can define the document title, character encoding, viewport behavior, and linked resources; the `body` holds what the visitor reads and interacts with.",
      "Elements describe roles. Use `h1` for the page's main heading and then descend in logical order; use `p` for paragraphs, `ul`/`ol` for lists, `a` for navigation, and `button` for actions. A `div` has no meaning by itself, so it is a layout wrapper, not a universal replacement for semantic elements.",
      "Nesting creates relationships. A `nav` contains navigation links; a `main` contains the unique primary content; an `article` can stand on its own; a `section` groups a named theme. Close elements correctly and keep child content inside its parent so the DOM matches the mental structure of the page.",
      "Attributes add information or behavior to an element. `href` gives a link its destination, `src` gives an image its source, `alt` communicates the image's purpose, and `class` offers a styling hook. Attribute values belong in quotes. An image's alternative text should describe its purpose, not announce “image”."
    ],
    extended: "HTML has built-in interaction primitives. A real `button` can receive focus, be triggered with Enter or Space, and expose a role to assistive technology. A styled `div` does not inherit those behaviors. Prefer native elements first; add ARIA only when native HTML cannot express the needed pattern.",
    visuals: ["Semantic page anatomy: header → nav → main → article/section → footer", "DOM nesting tree showing parent-child relationships and heading levels"],
    questions: [
      { type: "mc", prompt: "Which element is the best default for an action that changes something on the current page?", options: ["`div`", "`a`", "`button`", "`span`"], answer: 2, explain: "Buttons represent actions. Links represent navigation to a destination." },
      { type: "mc", prompt: "What is the main job of meaningful `alt` text on an image?", options: ["Make the file load faster", "Describe the image's purpose for people who cannot see it", "Change its aspect ratio", "Add a CSS class"], answer: 1, explain: "Alternative text communicates purpose or essential content when the image cannot be perceived." },
      { type: "short", prompt: "What is the name of the browser's structured representation of HTML?", answers: ["dom", "document object model", "document object model (dom)"], explain: "The DOM (Document Object Model) is the tree the browser creates from HTML." }
    ],
    plenary: ["I can build the outer structure of a valid HTML document.", "I can choose a semantic element before reaching for a generic wrapper.", "I can explain what an attribute contributes to an element."],
    exit: "Which element choice in your next page should communicate more meaning than its current visual treatment?"
  },
  {
    id: 3, title: "Control the cascade", deck: "Make the page look intentional by understanding selectors, the box model, and layout.",
    what: "CSS rules, selectors, inheritance, the cascade, specificity, the box model, positioning, Flexbox, and Grid.",
    why: "A visual bug is rarely “just styling.” Knowing which rule wins and which box is taking space turns CSS from trial-and-error into a predictable system.",
    how: "You will read a rule from selector to declaration, calculate an element's box, then choose a layout tool based on the relationship you are designing.",
    starter: "Two rules target the same heading: one is `h2 { color: navy; }`, the other is `.warning { color: coral; }`. The heading has `class=warning`. Which color should win, and what evidence would you check if it did not?",
    core: [
      "A CSS rule has a selector and a declaration block. Selectors identify elements; declarations pair properties with values. Selectors can target elements, classes, IDs, attributes, states, or relationships. Classes are usually the best reusable styling hook because they describe a role without over-coupling to document position.",
      "The cascade decides which declarations apply. The browser weighs origin, importance, specificity, and source order. A class selector generally outranks an element selector; if otherwise equal, the later rule wins. Inherited properties pass values from parent to child, but not every property inherits. DevTools shows crossed-out declarations and the winning rule.",
      "Every element participates in the box model: content, padding, border, and margin. With `box-sizing: border-box`, declared width and height include padding and border, which makes sizing easier to predict. Margin creates space outside the border; padding creates space inside it.",
      "Flexbox arranges items along one primary axis and is useful for toolbars, rows, columns, and distributing space. Grid manages two dimensions and is useful when rows and columns are part of the design. Positioning is for taking an element out of normal flow or pinning it relative to a containing block; it is not a replacement for layout."
    ],
    extended: "Specificity is best treated as a budget. Prefer a low-specificity class and a clear component boundary rather than escalating to IDs, long descendant chains, or `!important`. CSS custom properties can centralize design tokens such as color, spacing, and radius so a visual change has one source of truth.",
    visuals: ["Cascade ladder: user agent → author rules → specificity → source order", "Box model cutaway: content / padding / border / margin", "Layout chooser: Flexbox for one axis; Grid for two dimensions"],
    questions: [
      { type: "mc", prompt: "Which box-model layer sits between content and the border?", options: ["Margin", "Padding", "Outline", "Grid"], answer: 1, explain: "Padding is the internal breathing room between content and border." },
      { type: "mc", prompt: "Which layout tool is designed for two-dimensional rows and columns?", options: ["Grid", "Flexbox", "z-index", "Float"], answer: 0, explain: "CSS Grid explicitly manages two dimensions; Flexbox focuses on one primary axis." },
      { type: "short", prompt: "What word describes the system that decides which CSS declaration wins?", answers: ["cascade", "the cascade"], explain: "The cascade combines priority, specificity, and source order to decide the winning declaration." }
    ],
    plenary: ["I can explain why a CSS rule wins or loses.", "I can calculate an element's content, padding, border, and margin.", "I can choose Flexbox or Grid from the relationship I need to create."],
    exit: "What CSS problem will you solve by inspecting the cascade or box model instead of adding another random rule?"
  },
  {
    id: 4, title: "Design for every screen", deck: "Responsive design and accessibility are not polish; they are how the interface keeps its promise.",
    what: "Responsive constraints, fluid sizing, media queries, mobile-first thinking, keyboard access, focus, contrast, and accessible names.",
    why: "People use different screens, input methods, vision abilities, and reading preferences. A robust interface adapts instead of asking every person to compensate.",
    how: "You will design from content constraints, test a small set of viewport and input conditions, and add accessibility at the element and interaction level.",
    starter: "Imagine a navigation bar that fits on a wide screen but not a phone. What should change: the content, the order, the spacing, or the layout? Which choice preserves the task?",
    core: [
      "Responsive design starts with the content's constraints, not a list of device names. Use fluid widths, flexible gaps, readable line lengths, and images that can shrink within their container. A media query is a conditional layer for when the current layout no longer serves the content.",
      "Mobile-first CSS defines a readable baseline, then enhances at larger widths. This often keeps the default rules simpler and makes progressive enhancement explicit. Breakpoints should respond to layout failure — wrapped navigation, cramped controls, or unreadable measure — rather than to a specific brand of phone.",
      "Keyboard users need a visible focus indicator and a logical focus order. A link should go somewhere; a button should do something; form controls need labels. Never remove `outline` without replacing it with an equally clear focus style. Color should not be the only way to communicate state.",
      "Accessible interfaces have understandable names, sufficient contrast, clear error messages, and targets that can be activated without precision pointing. Test with keyboard-only navigation, browser zoom, reduced motion, and a screen reader or accessibility tree when possible."
    ],
    extended: "The viewport meta tag lets a mobile browser use the device width rather than pretending it has a wide desktop canvas. Modern CSS functions such as `clamp()` and container queries can express fluid type and component behavior without multiplying breakpoints. `prefers-reduced-motion` lets motion respond to a user's system preference.",
    visuals: ["Responsive continuum: fluid content → constraint failure → layout shift → new arrangement", "Keyboard focus route through header, navigation, main content, and form controls"],
    questions: [
      { type: "mc", prompt: "What should a breakpoint respond to?", options: ["A specific phone model", "The point where the content layout stops working", "A designer's favorite number", "Only the browser's brand"], answer: 1, explain: "Breakpoints should be content-driven: add one when the current arrangement no longer supports the task." },
      { type: "mc", prompt: "Which practice supports keyboard users?", options: ["Hide all focus outlines", "Use only hover states", "Keep a visible focus indicator", "Make every action a div"], answer: 2, explain: "Visible focus shows where keyboard input will go next." },
      { type: "short", prompt: "Name the CSS media feature that detects a user's reduced-motion preference.", answers: ["prefers-reduced-motion", "prefers reduced motion"], explain: "`prefers-reduced-motion` lets you reduce or remove non-essential motion." }
    ],
    plenary: ["I can explain why a layout needs to change, not just that it needs to change.", "I can move through my interface with a keyboard and see focus.", "I can name at least one test for zoom, contrast, motion, or assistive technology."],
    exit: "Which interaction in your project should be tested with something other than a mouse?"
  },
  {
    id: 5, title: "Make the page respond", deck: "Use JavaScript to connect events, data, and the DOM without losing the structure you built.",
    what: "Values, variables, functions, conditionals, arrays, objects, events, the DOM, and render/update loops.",
    why: "Interactivity is a sequence of state changes. Modeling that sequence clearly keeps behavior understandable and prevents a page from becoming a pile of disconnected click handlers.",
    how: "You will name a piece of state, listen for an event, update the state, and render the smallest necessary DOM change.",
    starter: "A button says “Add one.” What must the browser remember between clicks? Write the smallest possible state model before you write the handler.",
    core: [
      "JavaScript values include strings, numbers, booleans, arrays, objects, and `null`/`undefined`. Variables give meaningful names to values. Prefer `const` when a binding will not be reassigned and `let` when it will. A name should tell a future reader what the value represents.",
      "Functions package a repeatable operation. Parameters let a function accept data; a return value gives data back. Conditionals choose a path; loops repeat work over a collection. Keep each function responsible for one transformation or decision so the behavior can be tested in isolation.",
      "The DOM API lets JavaScript select nodes, read and set content or attributes, create elements, and change classes. Events are browser messages such as `click`, `input`, and `submit`. An event listener connects an event target to a function. Use `textContent` for text and treat `innerHTML` as a deliberate boundary because unsanitized HTML can create injection risk.",
      "A reliable interaction has a loop: read the current state, handle the event, update the state, then render the interface. This can be tiny — a boolean for a menu, a number for a score, or an array for items — but naming the state prevents the UI from becoming the only source of truth."
    ],
    extended: "Event delegation attaches one listener to a stable ancestor and uses `event.target` or `closest()` to identify the changed child. It is useful for dynamic lists. Avoid unnecessary global listeners and clean up listeners when components are removed. Use browser APIs as contracts: inspect the event object rather than relying on assumptions about where a click originated.",
    visuals: ["Event loop for a score button: event → handler → state → render", "DOM before/after showing one class change instead of duplicated markup"],
    questions: [
      { type: "mc", prompt: "What is the cleanest order for a small interactive update?", options: ["Style → guess → click", "Read state → handle event → update state → render", "Render → delete state → listen", "Create a server for every click"], answer: 1, explain: "An explicit state/update/render loop makes behavior traceable." },
      { type: "mc", prompt: "Which property is the safer default for inserting user-provided text?", options: ["textContent", "innerHTML", "document.write", "outerHTML"], answer: 0, explain: "`textContent` inserts text rather than interpreting it as HTML markup." },
      { type: "short", prompt: "What browser message can a listener respond to, such as `click` or `input`?", answers: ["event", "an event", "dom event"], explain: "An event is a message that something happened, such as a click or input change." }
    ],
    plenary: ["I can name the state that an interaction needs to remember.", "I can connect an event to a small, focused handler.", "I can explain what changes in the DOM after an interaction."],
    exit: "What is the smallest piece of state your next interface needs, and where should it be updated?"
  },
  {
    id: 6, title: "Collect and validate input", deck: "Design forms as conversations: ask clearly, validate kindly, and keep the user's work visible.",
    what: "Form semantics, labels, input types, submit events, client-side validation, error states, and lightweight client-side state.",
    why: "Forms are where a user's intent becomes data. Clear questions and precise feedback prevent frustration and reduce invalid work moving through the system.",
    how: "You will map each field to a label and data type, validate at the right moment, and represent success or error as accessible interface state.",
    starter: "A form asks for “date.” What does the interface need to know: the label, the acceptable format, whether it is required, and what should happen when the value is wrong?",
    core: [
      "A form is a group of controls with a submission action. Each control needs a visible or programmatically associated label. Choose input types that match the data: email can unlock useful mobile keyboards and basic browser validation; date can communicate a date value; checkbox expresses an independent yes/no choice.",
      "Listen for the form's `submit` event, prevent the default navigation only when your interface is handling the submission, then read values from the form. Do not rely on placeholders as labels: placeholders disappear, have contrast issues, and do not reliably identify the control after typing.",
      "Validation answers two questions: is the value present and is it acceptable for the task? Browser constraints such as `required`, `minlength`, `type`, `min`, and `max` provide a baseline. Custom validation should identify the field, describe the problem in plain language, and say how to fix it.",
      "Keep user-entered values when validation fails. Associate an error message with the relevant input using `aria-describedby` when needed, expose an invalid state with `aria-invalid`, and avoid making the user hunt for the first error. Success feedback should also be specific: say what happened next."
    ],
    extended: "Client-side validation improves the experience but cannot establish trust on its own because browser code is under the user's control. A real application validates again on the server. Constraint validation APIs such as `checkValidity()` and `setCustomValidity()` can coordinate native browser behavior with custom messages.",
    visuals: ["Form anatomy: label → control → hint → error/success message", "Validation decision path: empty? → format? → task rules? → submit or explain"],
    questions: [
      { type: "mc", prompt: "Why should a placeholder not replace a label?", options: ["It makes input faster", "It disappears when the user types and is not a reliable name", "It validates the form", "It creates a server"], answer: 1, explain: "A label remains available and gives the control a stable, accessible name." },
      { type: "mc", prompt: "What should happen to a user's valid fields when another field fails validation?", options: ["Erase everything", "Keep the values and identify the problem", "Reload the page silently", "Disable the keyboard"], answer: 1, explain: "Preserving work and giving focused guidance respects the user's effort." },
      { type: "short", prompt: "What event should a form usually handle for a complete submission action?", answers: ["submit", "form submit", "the submit event"], explain: "Handle the form's `submit` event so keyboard and button submissions follow the same path." }
    ],
    plenary: ["I can pair every form control with a label.", "I can distinguish missing input from invalid input.", "I can explain where the user will see feedback and what to do next."],
    exit: "Which form error in your project could be rewritten to tell the user exactly how to recover?"
  },
  {
    id: 7, title: "Debug, test, improve", deck: "Move from “it feels wrong” to a repeatable loop of observation, hypothesis, change, and verification.",
    what: "Debugging evidence, browser developer tools, console and network clues, test cases, performance basics, and progressive improvement.",
    why: "Every real project contains defects and slow paths. A deliberate process saves time, protects user trust, and turns mistakes into reusable knowledge.",
    how: "You will reproduce a problem, write a hypothesis, inspect the smallest relevant evidence, change one thing, and test the original behavior again.",
    starter: "A button does nothing. List three different hypotheses before touching the code: is the event not attached, is the handler failing, or is the visual state hiding a successful change?",
    core: [
      "Debugging starts with a reproducible problem statement: what did you do, what did you expect, and what happened instead? Reproduction narrows the search space. Capture the smallest useful example and change one variable at a time so the evidence stays interpretable.",
      "Use the right tool for the clue. The Elements panel reveals DOM and computed styles; the Console shows JavaScript errors and logs; the Network panel reveals missing resources, status codes, and slow requests; the Performance panel can reveal long tasks and layout work. A tool is useful when it tests a hypothesis.",
      "Testing is a set of questions with inputs and expected outcomes. Include the happy path, empty state, invalid input, keyboard path, narrow viewport, wide viewport, and any content that might wrap. A manual checklist is still a test when it is explicit and repeatable.",
      "Performance begins with less unnecessary work: appropriately sized images, efficient selectors and event handlers, readable layout, and deferred non-critical work. Improve measured bottlenecks rather than applying optimizations by folklore. Keep the interface correct and accessible while you make it faster."
    ],
    extended: "Core Web Vitals connect performance to user experience: loading, responsiveness, and visual stability. Lazy-loading below-the-fold images, reserving image dimensions, reducing layout shifts, and splitting expensive JavaScript are useful when evidence shows they matter. Record what changed and what metric moved.",
    visuals: ["Debug loop: reproduce → observe → hypothesize → change one thing → verify", "Testing matrix crossing states, devices, input methods, and content"],
    questions: [
      { type: "mc", prompt: "What should you write before changing code to fix a bug?", options: ["A random new rule", "A reproducible problem and a hypothesis", "A final celebration", "A new framework"], answer: 1, explain: "A problem statement and hypothesis make the next inspection purposeful." },
      { type: "mc", prompt: "Which panel is most useful for a missing CSS file?", options: ["Network", "Elements only", "Color picker", "History"], answer: 0, explain: "Network can show the request URL, status, and whether the file loaded." },
      { type: "short", prompt: "What should a test include besides the input?", answers: ["expected outcome", "expected result", "an expected outcome", "expected"], explain: "A test needs an expected outcome so you can compare behavior with a clear criterion." }
    ],
    plenary: ["I can describe a bug so another person can reproduce it.", "I can choose a developer-tool panel from the evidence I need.", "I can test a happy path, a failure state, and an alternate input method."],
    exit: "What is one test case your current project is missing? Write it as an input and expected outcome."
  },
  {
    id: 8, title: "Ship the small site", deck: "Bring the layers together: plan a focused page, build it, review it, and publish with confidence.",
    what: "A capstone workflow: brief, content model, semantic structure, visual system, interaction, review, and publishing.",
    why: "A finished site is more than code that runs. It is a small promise kept for a real audience across real constraints.",
    how: "You will define one audience and task, sequence the work from structure to polish, run a review pass, and publish a version you can explain.",
    starter: "Choose a tiny site: a workshop, a local event, a portfolio piece, or a recipe. In one sentence, name the audience and the one action you want them to take.",
    core: [
      "Begin with a brief: audience, user task, essential content, success signal, and constraints. A narrow brief is a feature, not a limitation. Decide what the page must do before choosing colors or components. Create a content outline that can become headings, sections, lists, links, and forms.",
      "Build in dependency order. Start with semantic HTML and real content; add CSS tokens, type, spacing, and layout; add JavaScript only for behavior the task needs; then test the completed flow. This order produces a usable baseline at every stage and keeps styling from hiding structural problems.",
      "Review the result as a visitor and as a maintainer. Can a person understand the page without the hero image? Can they use every action with a keyboard? Does the layout survive a narrow width and large text? Are names, links, states, errors, and focus visible? Can another developer find the source of a spacing or color decision?",
      "Publishing is a hand-off. Confirm the production path, assets, metadata, and error behavior. Record the version and the next improvement rather than pretending the site is finished forever. A small, understood release is stronger than a large, unexplained one."
    ],
    extended: "A useful capstone review can be organized into four passes: content (is the message true and complete?), structure (is the HTML meaningful?), interaction (does every state work?), and resilience (does it adapt to screen, input, and network conditions?). You can turn the review into a lightweight pull-request template for future projects.",
    visuals: ["Capstone pipeline: brief → content → HTML → CSS → JS → review → publish", "Release checklist with content, structure, interaction, resilience, and next step"],
    questions: [
      { type: "mc", prompt: "What should come first in the capstone build order?", options: ["Decorative animation", "Semantic HTML and real content", "A complex state library", "Performance folklore"], answer: 1, explain: "Structure and content give every later layer something meaningful to build on." },
      { type: "mc", prompt: "Which review question tests resilience?", options: ["Does the gradient look trendy?", "Does it work with a keyboard and large text?", "Did I use enough classes?", "Is the file name short?"], answer: 1, explain: "Resilience asks whether the site continues to serve people under different constraints." },
      { type: "short", prompt: "Name the document that defines audience, task, content, success signal, and constraints.", answers: ["brief", "project brief", "creative brief"], explain: "A brief turns a vague idea into a shared, testable direction." }
    ],
    plenary: ["I can state the audience and primary task of my capstone.", "I can review the result for content, structure, interaction, and resilience.", "I can name one improvement that belongs in the next version rather than this one."],
    exit: "Write the one-sentence promise your capstone site makes to its audience."
  }
];

const state = { score: 0, answered: new Set(), completed: new Set(), reflections: JSON.parse(sessionStorage.getItem("learnlane-reflections") || "{}") };
const sessionsEl = document.querySelector("#sessions");
const chapterListEl = document.querySelector("#chapter-list");

function escapeHTML(value) { return value.replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[char])); }
function paragraphize(items) { return items.map(item => `<p>${item}</p>`).join(""); }
function renderVisuals(items) { return items.map((item, index) => `<div class="visual-placeholder"><div class="placeholder-inner"><div class="placeholder-icon" aria-hidden="true">${index % 2 ? "◫" : "⌁"}</div><div><span class="mini-label">Syllabus visual ${index + 1}</span><h4>${item}</h4><p>Diagram / picture placeholder — place the source document's visual here at this point in the explanation.</p></div></div></div>`).join(""); }
function renderQuestions(questions, sessionId) { return questions.map((q, index) => {
  const qid = `s${sessionId}q${index}`;
  if (q.type === "short") return `<article class="question-card" data-question="${qid}" data-answer="${q.answers.join("|")}"><span class="question-label">Check ${index + 1} · short answer</span><p class="question-prompt">${q.prompt}</p><div class="short-answer"><input aria-label="Answer for check ${index + 1}" data-input="${qid}" /><button type="button" data-submit="${qid}">Check</button></div><div class="feedback" data-feedback="${qid}" role="status"></div></article>`;
  return `<article class="question-card" data-question="${qid}"><span class="question-label">Check ${index + 1} · choose one</span><p class="question-prompt">${q.prompt}</p><div class="options">${q.options.map((option, optionIndex) => `<button type="button" class="option" data-question="${qid}" data-option="${optionIndex}">${option}</button>`).join("")}</div><div class="feedback" data-feedback="${qid}" role="status"></div></article>`;
}).join(""); }
function renderSession(session) {
  return `<section class="session" id="session-${session.id}" data-session="${session.id}">
    <div class="session-heading"><div class="session-number">0${session.id}</div><div><div class="eyebrow">Session ${session.id} · ${session.id === 8 ? "capstone" : "chapter"}</div><h2 class="session-title">${session.title}</h2><p class="session-deck">${session.deck}</p></div><div class="session-status"><button class="complete-toggle" type="button" data-complete="${session.id}" aria-pressed="false"><span class="checkmark">✓</span><span>Mark complete</span></button></div></div>
    <div class="objectives"><article class="objective what"><span class="objective-label">What</span><h3>The concept</h3><p>${session.what}</p></article><article class="objective why"><span class="objective-label">Why</span><h3>The reason</h3><p>${session.why}</p></article><article class="objective how"><span class="objective-label">How</span><h3>The process</h3><p>${session.how}</p></article></div>
    <div class="starter"><span class="mini-label">Starter activity</span><h3>Activate what you already know.</h3><p>${session.starter}</p></div>
    <div class="content-block core-block"><div class="block-heading"><h3>Detailed content</h3><span class="badge badge-core">CORE</span></div><div class="rich-copy">${paragraphize(session.core)}</div>${session.id === 2 ? '<pre class="code-block"><span class="tag">&lt;main&gt;</span>\n  <span class="tag">&lt;h1&gt;</span><span class="value">A meaningful page title</span><span class="tag">&lt;/h1&gt;</span>\n  <span class="tag">&lt;p&gt;</span><span class="value">Structure gives styles something to work with.</span><span class="tag">&lt;/p&gt;</span>\n<span class="tag">&lt;/main&gt;</span></pre>' : ''}</div>
    <div class="content-block extended-block"><div class="block-heading"><h3>Stretch the model</h3><span class="badge badge-extended">EXTENDED</span></div><div class="rich-copy"><p>${session.extended}</p></div></div>
    ${renderVisuals(session.visuals)}
    <div class="practice"><div class="practice-heading"><div><span class="section-kicker">Retrieval practice</span><h3>Make the idea do some work.</h3></div><span class="practice-score" data-session-score="${session.id}">0 / ${session.questions.length} correct</span></div><div class="question-list">${renderQuestions(session.questions, session.id)}</div></div>
    <div class="plenary"><span class="mini-label">Plenary · session ${session.id}</span><h3>Close the loop.</h3><p>Check the statements you can now defend. Then leave yourself one useful note.</p><div class="plenary-list">${session.plenary.map((item, index) => `<label class="check-row"><input type="checkbox" data-reflection="${session.id}-${index}" /> <span>${item}</span></label>`).join("")}<textarea class="exit-ticket" data-exit="${session.id}" placeholder="${session.exit}"></textarea></div></div>
  </section>`;
}

function renderNav() { chapterListEl.innerHTML = sessions.map(session => `<a class="chapter-link" href="#session-${session.id}" data-nav="${session.id}"><span class="chapter-num">${session.id}</span><span>${session.title}</span></a>`).join(""); }
function updateScore() { document.querySelector("#score-value").textContent = state.score; document.querySelector("#score-total").textContent = sessions.reduce((sum, session) => sum + session.questions.length, 0); sessions.forEach(session => { const correct = [...state.answered].filter(id => id.startsWith(`s${session.id}q`) && id.endsWith(":correct")).length; const scoreEl = document.querySelector(`[data-session-score="${session.id}"]`); if (scoreEl) scoreEl.textContent = `${correct} / ${session.questions.length} correct`; }); }
function updateProgress() { const completeCount = state.completed.size; document.querySelector("#progress-label").textContent = `${completeCount} / ${sessions.length} complete`; document.querySelector("#progress-bar").style.width = `${(completeCount / sessions.length) * 100}%`; sessions.forEach(session => { const link = document.querySelector(`[data-nav="${session.id}"]`); if (link) link.classList.toggle("complete", state.completed.has(session.id)); }); }
function saveReflection(key, value) { state.reflections[key] = value; sessionStorage.setItem("learnlane-reflections", JSON.stringify(state.reflections)); }
function gradeQuestion(card, correct, explanation, chosenButton) { const qid = card.dataset.question; if (state.answered.has(`${qid}:correct`) || state.answered.has(`${qid}:wrong`)) return; state.answered.add(`${qid}:${correct ? "correct" : "wrong"}`); if (correct) state.score += 1; card.classList.add(correct ? "is-correct" : "is-wrong"); const feedback = card.querySelector("[data-feedback]"); feedback.className = `feedback show ${correct ? "correct" : "wrong"}`; feedback.textContent = `${correct ? "Correct." : "Not quite."} ${explanation}`; if (chosenButton) chosenButton.classList.add(correct ? "selected-correct" : "selected-wrong"); updateScore(); }

sessionsEl.innerHTML = sessions.map(renderSession).join(""); renderNav(); updateProgress(); updateScore();

sessionsEl.addEventListener("click", event => {
  const option = event.target.closest(".option");
  if (option) {
    const card = option.closest(".question-card"); const sessionId = Number(card.closest(".session").dataset.session); const questionIndex = Number(card.dataset.question.slice(card.dataset.question.indexOf("q") + 1)); const question = sessions.find(s => s.id === sessionId).questions[questionIndex]; gradeQuestion(card, Number(option.dataset.option) === question.answer, question.explain, option); card.querySelectorAll(".option").forEach(button => { button.disabled = true; if (Number(button.dataset.option) === question.answer && Number(option.dataset.option) !== question.answer) button.classList.add("revealed-correct"); }); return;
  }
  const submit = event.target.closest("[data-submit]");
  if (submit) { const card = submit.closest(".question-card"); const sessionId = Number(card.closest(".session").dataset.session); const questionIndex = Number(card.dataset.question.slice(card.dataset.question.indexOf("q") + 1)); const question = sessions.find(s => s.id === sessionId).questions[questionIndex]; const value = card.querySelector("input").value.trim().toLowerCase().replace(/[.,!?]/g, ""); const correct = question.answers.some(answer => value === answer || value.includes(answer)); gradeQuestion(card, correct, question.explain, null); card.querySelector("input").disabled = true; submit.disabled = true; }
  const complete = event.target.closest("[data-complete]");
  if (complete) { const id = Number(complete.dataset.complete); if (state.completed.has(id)) state.completed.delete(id); else state.completed.add(id); complete.setAttribute("aria-pressed", String(state.completed.has(id))); complete.querySelector("span:last-child").textContent = state.completed.has(id) ? "Completed" : "Mark complete"; updateProgress(); }
});

sessionsEl.addEventListener("change", event => { const check = event.target.closest("[data-reflection]"); if (check) saveReflection(check.dataset.reflection, check.checked); });
sessionsEl.addEventListener("input", event => { const exit = event.target.closest("[data-exit]"); if (exit) saveReflection(`exit-${exit.dataset.exit}`, exit.value); });
Object.entries(state.reflections).forEach(([key, value]) => { const checkbox = document.querySelector(`[data-reflection="${key}"]`); if (checkbox) checkbox.checked = value === true || value === "true"; const exit = key.startsWith("exit-") ? document.querySelector(`[data-exit="${key.replace("exit-", "")}"]`) : null; if (exit) exit.value = value; });

document.querySelector(".menu-toggle").addEventListener("click", event => { const open = document.body.classList.toggle("nav-open"); document.querySelector(".course-rail").classList.toggle("is-open", open); event.currentTarget.setAttribute("aria-expanded", String(open)); });
document.querySelector(".course-rail").addEventListener("click", event => { if (event.target.closest(".chapter-link")) { document.body.classList.remove("nav-open"); document.querySelector(".course-rail").classList.remove("is-open"); document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false"); } });
const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { document.querySelectorAll(".chapter-link").forEach(link => link.classList.toggle("active", link.dataset.nav === entry.target.dataset.session)); } }); }, { rootMargin: "-18% 0px -72% 0px", threshold: 0 });
document.querySelectorAll(".session").forEach(session => observer.observe(session));
