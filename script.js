const sessions = [
  {
    id: 1, title: "Puberty and secondary sexual characteristics", deck: "Begin with the steroid hormones that make sexual reproduction possible and bring about visible changes at puberty.",
    what: "Puberty as a developmental stage, the roles of testosterone and oestrogen, their sites of production, secondary sexual characteristics, and primary biological functions.",
    why: "Exam questions often ask you to link a hormone to both where it is made and what it does. Separating a characteristic from a primary reproductive function prevents vague answers.",
    how: "You will build a hormone-to-site-to-effect map, compare testosterone with oestrogen, and practise precise IGCSE terminology.",
    starter: "Two students make a list of changes at puberty. One list says “deeper voice” and “breast development”; another says “sperm production” and “menstrual cycle.” Which list is describing secondary sexual characteristics, and which is describing primary biological functions?",
    core: [
      "<strong>Puberty</strong> is the developmental stage during which secondary sexual characteristics develop and sexual reproduction becomes possible. It is controlled by the steroid sex hormones <strong>testosterone</strong> in males and <strong>oestrogen</strong> in females. The word “controlled” means these hormones coordinate changes; it does not mean every change is caused by only one hormone.",
      "<strong>Testosterone</strong> is produced in the <strong>testes</strong>, specifically by interstitial cells. Its secondary sexual characteristics include a deepening voice as the larynx enlarges, growth of facial, axillary, and pubic hair, increased muscle mass and bone density, and broadening of the shoulders.",
      "Testosterone also has primary biological functions: it stimulates the production of sperm and the growth and development of the male reproductive organs, including the testes and penis. In an exam answer, keep these reproductive functions distinct from the visible changes used to identify puberty.",
      "<strong>Oestrogen</strong> is produced by the <strong>ovaries</strong>, specifically by developing follicles. Its secondary sexual characteristics include development of the breasts or mammary glands, widening of the pelvis and hips, growth of axillary and pubic hair, and deposition of fat around the hips and thighs.",
      "Oestrogen's primary biological functions are to initiate the menstrual cycle, stimulate repair of the uterine lining or <strong>endometrium</strong>, and promote development of the female genitalia. The same hormone can therefore be associated with both puberty and later cycle control."
    ],
    extended: "The source guide presents testosterone and oestrogen as steroid sex hormones. For this section, the high-value distinction is not to memorise a long list without structure: identify the hormone, state its production site, then separate secondary sexual characteristics from primary reproductive functions.",
    visuals: ["table: hormone → site of production → secondary sexual characteristics → primary biological functions (Guide page 1).", "picture: puberty comparison illustration showing example male and female secondary sexual characteristics (Guide page 2)."],
    questions: [
      { type: "mc", prompt: "Where is testosterone produced according to the guide?", options: ["Developing follicles in the ovaries", "Interstitial cells in the testes", "The anterior pituitary gland", "The placenta"], answer: 1, explain: "The guide identifies the testes, specifically interstitial cells, as the production site for testosterone." },
      { type: "mc", prompt: "Which is a primary biological function of oestrogen?", options: ["Broadening of the shoulders", "Growth of facial hair", "Repair of the endometrium", "Increased bone density only"], answer: 2, explain: "Oestrogen initiates the menstrual cycle and stimulates repair of the uterine lining." },
      { type: "short", prompt: "Name the developmental stage during which secondary sexual characteristics develop.", answers: ["puberty"], explain: "Puberty is the developmental stage in which secondary sexual characteristics develop and sexual reproduction becomes possible." }
    ],
    plenary: ["I can define puberty using the source guide's wording.", "I can name the production site of testosterone and oestrogen.", "I can separate secondary sexual characteristics from primary biological functions."],
    exit: "Write one precise sentence that links a hormone, its production site, and one function."
  },
  {
    id: 2, title: "The menstrual cycle: ovarian and uterine changes", deck: "Track what happens in the ovary and the endometrium across an approximately 28-day cycle.",
    what: "The four phases of the human menstrual cycle, ovarian events, uterine lining changes, and the key anatomical locations involved.",
    why: "The cycle is a coordinated sequence. Full-mark answers often need both sides: what is happening in the ovary and what is happening in the endometrium at the same time.",
    how: "You will use a day-by-day timeline, match each phase to ovarian and uterine events, and interpret the source cycle graph.",
    starter: "If a cycle is approximately 28 days and ovulation is around the midpoint, which day would you predict first? What evidence would you need before calling the prediction exact?",
    core: [
      "The human menstrual cycle lasts approximately <strong>28 days</strong>. It involves coordinated changes in both the <strong>ovaries</strong> and the uterine lining, called the <strong>endometrium</strong>. A cycle is a sequence, not four unrelated facts.",
      "The ovaries are the site of egg or ovum maturation inside follicles, release of the ovum at ovulation, and formation of the corpus luteum. The endometrium is a highly vascular, glandular layer that sheds, thickens, and prepares to receive a blastocyst for implantation. The cervix and vagina form the path through which menstrual fluid is discharged when pregnancy does not occur.",
      "During <strong>menstruation, days 1–5</strong>, several primary follicles begin to develop in the ovary but there is no mature egg yet. In the uterus, the functional layer of the endometrium breaks down and is shed with blood as menstrual flow.",
      "During the <strong>proliferative phase, days 6–13</strong>, one dominant Graafian follicle matures and the oocyte nears completion of maturation. The endometrium repairs, thickens, and develops new blood vessels and mucus glands.",
      "At <strong>ovulation, around day 14</strong>, the mature Graafian follicle ruptures and releases the secondary oocyte into the oviduct. The endometrium remains thick and receptive to receive a fertilised egg.",
      "During the <strong>secretory or luteal phase, days 15–28</strong>, the ruptured follicle transforms into the corpus luteum or yellow body. It degenerates by day 28 if fertilisation does not occur. The endometrium becomes spongy, richly vascularised, and secretes glycogen; if implantation does not occur, the lining degenerates."
    ],
    extended: "The source diagram shows the endometrium as thin immediately after menstruation, then repairing and thickening toward mid-cycle and the luteal phase. Read a graph by describing the pattern first, then attach the named phase and day range rather than guessing from the shape alone.",
    visuals: ["graph: endometrium thickness across days 1–28, labelled menstruation, proliferative phase, ovulation, and secretory phase (Guide page 3).", "anatomy panel: ovaries, endometrium, cervix, and vagina with their roles in the cycle (Guide page 3).", "phase table: approximate days, ovarian events, and uterine events (Guide page 3)."],
    questions: [
      { type: "mc", prompt: "What happens around day 14?", options: ["The endometrium is first shed", "A mature follicle ruptures and releases a secondary oocyte", "The corpus luteum always degenerates", "The cervix produces the ovum"], answer: 1, explain: "Ovulation occurs around day 14 when the mature Graafian follicle ruptures and releases the secondary oocyte into the oviduct." },
      { type: "mc", prompt: "What happens to the endometrium during the proliferative phase?", options: ["It breaks down and is shed", "It repairs, thickens, and develops blood vessels and mucus glands", "It becomes absent", "It releases FSH"], answer: 1, explain: "Days 6–13 are the repair and thickening phase for the uterine lining." },
      { type: "short", prompt: "What structure forms from the ruptured follicle after ovulation?", answers: ["corpus luteum", "yellow body"], explain: "The ruptured follicle transforms into the corpus luteum, also called the yellow body." }
    ],
    plenary: ["I can place menstruation, proliferative phase, ovulation, and luteal phase in order.", "I can describe an ovarian event and a uterine event for the same phase.", "I can explain what happens to the lining if implantation does not occur."],
    exit: "Choose one phase and write a two-part answer: “In the ovary…; in the uterus…”"
  },
  {
    id: 3, title: "Hormonal control and feedback", deck: "Follow FSH, LH, oestrogen, and progesterone through the cascade that coordinates the cycle.",
    what: "The four main cycle hormones, their endocrine glands or tissues, target organs, direct actions, and negative or positive feedback effects.",
    why: "This is the Extended mechanism behind the timeline. It explains why the follicle develops, why ovulation happens at mid-cycle, and why menstruation follows a fall in progesterone.",
    how: "You will annotate the hormone table, trace the seven-step cascade, and distinguish negative feedback from the high-oestrogen LH surge.",
    starter: "Put these events in a likely order: LH surge, follicle growth, progesterone secretion, ovulation, FSH secretion. Explain the link between each neighbouring pair.",
    core: [
      "The Extended guide identifies four main hormones. <strong>FSH</strong> and <strong>LH</strong> are pituitary gonadotropins released by the anterior pituitary gland. <strong>Oestrogen</strong> and <strong>progesterone</strong> are ovarian steroids produced by ovarian tissues during the cycle.",
      "FSH targets the ovaries and stimulates the growth and maturation of egg follicles. It also stimulates follicle cells to secrete oestrogen. As the developing follicle produces oestrogen, oestrogen helps repair and thicken the endometrium.",
      "At low or moderate levels, oestrogen inhibits FSH by negative feedback. Around days 13–14, a peak level of oestrogen triggers a sudden surge in LH by positive feedback. This is the key change from inhibition to stimulation in the source cascade.",
      "LH triggers ovulation on day 14 and stimulates the empty follicle to form the corpus luteum. The corpus luteum produces progesterone, which maintains the vascularised uterine lining in a thick, glandular state for implantation.",
      "Progesterone inhibits both FSH and LH secretion by negative feedback, preventing the development of further follicles. If fertilisation does not occur, the corpus luteum degenerates and progesterone levels fall steeply. The fall causes the endometrium to break down; reduced inhibition allows FSH to rise and start the next cycle.",
      "The source guide's seven-step cascade is therefore: FSH stimulates follicle development; the follicle secretes oestrogen; peak oestrogen triggers the LH surge; LH triggers ovulation; the corpus luteum secretes progesterone; without fertilisation it degenerates; the progesterone fall causes menstruation and allows FSH to rise."
    ],
    extended: "The high-value feedback distinction is precise: low or moderate oestrogen inhibits FSH, while peak oestrogen triggers the LH surge. Progesterone maintains the endometrium and inhibits FSH and LH; it does not repair the lining. Oestrogen is the hormone the guide associates with repair and thickening.",
    visuals: ["hormone table: FSH, oestrogen, LH, and progesterone with gland, target, direct action, and feedback effect (Guide pages 3–5).", "step-by-step hormonal cascade box (Guide page 5).", "feedback diagram: pituitary gland, follicle, ovulation, corpus luteum, progesterone, and menstruation (Guide page 5)."],
    questions: [
      { type: "mc", prompt: "Which hormone surge triggers ovulation?", options: ["FSH", "Oestrogen at a low level", "LH", "Progesterone"], answer: 2, explain: "The LH surge triggers ovulation around day 14." },
      { type: "mc", prompt: "What is the direct trigger for menstruation in the guide?", options: ["A steep fall in progesterone", "A rise in progesterone", "A rise in LH after day 28", "The formation of a new placenta"], answer: 0, explain: "When the corpus luteum degenerates, progesterone falls steeply and the endometrium breaks down." },
      { type: "short", prompt: "Which hormone stimulates follicle growth and maturation?", answers: ["fsh", "follicle stimulating hormone", "follicle-stimulating hormone"], explain: "FSH, follicle-stimulating hormone, stimulates the growth and maturation of ovarian follicles." }
    ],
    plenary: ["I can state the source and target of FSH and LH.", "I can explain why peak oestrogen causes an LH surge.", "I can trace how corpus luteum degeneration leads to menstruation."],
    exit: "Explain in one chain how a fall in progesterone can lead to a rise in FSH."
  },
  {
    id: 4, title: "Hormones in pregnancy", deck: "See how hormone production shifts from the corpus luteum to the placenta to maintain gestation.",
    what: "Hormone production during the cycle, early pregnancy, and later pregnancy; the roles of progesterone and oestrogen in sustaining gestation.",
    why: "The site of production changes during pregnancy. This is a common Extended exam distinction: early pregnancy is supported by the corpus luteum; from about week 12, the placenta becomes the main source.",
    how: "You will compare three time periods, follow the production-site shift, and separate the roles of progesterone from the roles of oestrogen.",
    starter: "If implantation has occurred, what must not happen next: endometrium breakdown, another ovulation, or continued progesterone secretion? Choose all that protect the embryo and justify them.",
    core: [
      "If fertilisation occurs in the oviduct, the developing embryo implants into the endometrium. Hormonal regulation shifts to sustain gestation and prevent menstruation. The guide compares the normal menstrual cycle with early and later pregnancy.",
      "During the menstrual cycle, oestrogen comes from the developing follicle and progesterone comes from the corpus luteum. Together, they prepare the endometrium for potential implantation and regulate cyclic release of the pituitary gonadotropins FSH and LH.",
      "In <strong>early pregnancy, approximately weeks 1–12</strong>, the corpus luteum continues secreting high levels of progesterone and oestrogen before the placenta becomes the main source. These hormones prevent menstruation so the implanted embryo is retained and keep FSH and LH suppressed so no further ovulation can occur.",
      "In <strong>later pregnancy, from approximately week 12 to birth</strong>, the placenta takes over production of both progesterone and oestrogen. High progesterone keeps the uterine lining intact and inhibits uterine wall or myometrium contractions; high oestrogen promotes growth of the uterus and prepares mammary glands for lactation.",
      "Progesterone maintains the endometrium, prevents breakdown and shedding of the placenta, inhibits myometrium contractions, forms a cervical mucus plug that protects against ascending bacterial infections, and suppresses FSH and LH. Oestrogen stimulates uterine growth, promotes mammary gland development and milk ducts with prolactin, and blocks pituitary FSH release throughout pregnancy."
    ],
    extended: "For site-of-production questions, use a timeline: developing follicle and corpus luteum during the cycle; corpus luteum in early pregnancy; placenta from about week 12 onward. For function questions, use “progesterone maintains and relaxes” versus “oestrogen grows and develops,” while remembering both suppress gonadotropin activity during pregnancy.",
    visuals: ["timeline image: corpus luteum in early pregnancy versus placenta in later pregnancy, showing progesterone and oestrogen production (Guide page 6).", "production table: menstrual cycle, early pregnancy, and later pregnancy (Guide pages 6–7).", "role boxes: progesterone and oestrogen functions in pregnancy (Guide page 8)."],
    questions: [
      { type: "mc", prompt: "What is the main source of progesterone in early pregnancy before the placenta takes over?", options: ["The anterior pituitary", "The corpus luteum", "The cervix", "The oviduct"], answer: 1, explain: "The corpus luteum produces progesterone and oestrogen in early pregnancy." },
      { type: "mc", prompt: "Which statement best describes progesterone in pregnancy?", options: ["It breaks down the endometrium", "It maintains the lining and inhibits myometrium contractions", "It triggers the LH surge", "It stimulates a new follicle to mature"], answer: 1, explain: "Progesterone keeps the uterine lining intact and helps keep the uterine smooth muscle relaxed." },
      { type: "short", prompt: "From approximately which week does the placenta become the main source of progesterone and oestrogen?", answers: ["12", "week 12", "12 weeks"], explain: "The guide states that the placenta takes over from approximately week 12 onward." }
    ],
    plenary: ["I can distinguish early-pregnancy and later-pregnancy hormone sources.", "I can give two roles of progesterone in maintaining pregnancy.", "I can give two roles of oestrogen in uterine or mammary development."],
    exit: "Complete this contrast: “Progesterone mainly maintains…, whereas oestrogen promotes…”"
  },
  {
    id: 5, title: "STIs, HIV, and AIDS", deck: "Use the definitions exactly: infection, pathogen, and syndrome are not interchangeable terms.",
    what: "The source guide's definitions of a sexually transmitted infection, HIV as a pathogen, and AIDS as a clinical syndrome.",
    why: "Definition questions reward precision. Calling AIDS a pathogen or HIV a syndrome loses the biological distinction the syllabus is testing.",
    how: "You will sort the key terms by category, connect HIV to lymphocytes and immune weakness, and practise short definition responses.",
    starter: "Three cards say “STI,” “HIV,” and “AIDS.” Which card describes a type of infection, which names a pathogen, and which names a condition that may develop after infection?",
    core: [
      "A <strong>sexually transmitted infection (STI)</strong> is an infection in which the causative pathogen is passed from an infected person to an uninfected person primarily through sexual contact, especially unprotected intercourse. STI describes the mode or category of infection; it is not the name of one specific pathogen.",
      "<strong>Human immunodeficiency virus (HIV)</strong> is the specific viral pathogen responsible for a major global STI. Once inside the body, the virus infects and destroys specific white blood cells called lymphocytes, severely weakening the host immune system.",
      "<strong>Acquired immune deficiency syndrome (AIDS)</strong> is not a pathogen. It is a clinical syndrome. An HIV infection may lead to AIDS when the immune system becomes so depleted that the body can no longer defend itself against secondary opportunistic infections.",
      "The source guide gives examples of opportunistic infections such as pneumonia or tuberculosis. These infections take advantage of the weakened immune system; they are consequences of severe immune deficiency rather than the definition of HIV itself.",
      "The Core syllabus statements are: describe an STI as an infection transmitted through sexual contact; state that HIV is a pathogen that causes an STI; and state that HIV infection may lead to AIDS. A strong answer uses “virus” or “pathogen” for HIV and “syndrome” or “clinical condition” for AIDS."
    ],
    extended: "When you write an exam definition, avoid adding an inaccurate causal chain. HIV is the viral pathogen; infection with HIV can lead to AIDS; AIDS describes a condition in which immune defence is severely depleted. Keeping those levels separate makes the answer both shorter and more accurate.",
    visuals: ["labelled HIV structure diagram: gp120, viral envelope, capsid, and RNA genome (Guide page 9).", "definition panel distinguishing STI, HIV, and AIDS (Guide page 9)."],
    questions: [
      { type: "mc", prompt: "What is HIV in the source guide?", options: ["A clinical syndrome", "A viral pathogen that causes an STI", "A type of white blood cell", "A hormone from the placenta"], answer: 1, explain: "HIV is the viral pathogen responsible for a major STI." },
      { type: "mc", prompt: "Which statement about AIDS is correct?", options: ["AIDS is the pathogen itself", "AIDS is a clinical syndrome that HIV infection may lead to", "AIDS is a hormone", "AIDS is transmitted by mosquito bites"], answer: 1, explain: "AIDS is a syndrome that may develop when HIV has severely depleted immune function." },
      { type: "short", prompt: "What type of blood cell does HIV infect and destroy, weakening immunity?", answers: ["lymphocytes", "lymphocyte", "white blood cells", "white blood cell"], explain: "The guide identifies specific white blood cells called lymphocytes as targets of HIV." }
    ],
    plenary: ["I can define an STI as an infection transmitted through sexual contact.", "I can state that HIV is a viral pathogen.", "I can explain that HIV infection may lead to AIDS, a clinical syndrome."],
    exit: "Write a three-line glossary: STI = …; HIV = …; AIDS = …"
  },
  {
    id: 6, title: "How HIV is transmitted", deck: "Separate confirmed transfer of infected body fluids from common myths about casual contact.",
    what: "The body fluids involved in HIV transmission, confirmed routes, and routes that do not transmit HIV according to the guide.",
    why: "Transmission questions require both a correct route and the reason it works. Myth correction is also public-health education: it prevents fear and stigma.",
    how: "You will classify route cards, trace direct fluid transfer, and explain why casual contact and insect bites are not transmission routes.",
    starter: "A class sorts “handshake,” “shared hypodermic needle,” “unscreened blood transfusion,” and “mother-to-child across the placenta.” Which belong in the confirmed column?",
    core: [
      "HIV is a fragile virus that cannot survive long outside body fluids. Transmission requires direct transfer of infected fluids, primarily <strong>blood, semen, vaginal secretions, or breast milk</strong>. The presence of a body-fluid route is the mechanism that links the contact to transmission.",
      "The guide lists confirmed routes: unprotected sexual intercourse involving vaginal, anal, or oral contact with body fluids; sharing hypodermic needles or syringes, including intravenous drug use; transfusions with unscreened blood or unsterilised medical instruments; and mother-to-child transmission across the placenta, during birth, or via breast milk.",
      "HIV is not transmitted by casual physical contact such as handshakes, hugging, or sitting together. It is not transmitted by saliva, tears, sweat, or coughing and sneezing; by sharing cups, cutlery, toilets, or swimming pools; or by insect and mosquito bites.",
      "A high-quality explanation does not merely list a myth. It states that these contacts do not provide the required direct transfer of infected body fluids, and therefore do not create the transmission route described in the guide.",
      "The distinction is about mechanism, not judgement. Public-health teaching should be precise and non-stigmatising: identify the fluid and route involved, avoid implying that ordinary contact is dangerous, and use the confirmed-route list rather than vague claims about “infection spreading.”"
    ],
    extended: "The source diagram places HIV at the centre of four confirmed routes: sexual contact, shared hypodermic needles, unscreened blood transfusions, and mother-to-child transmission. Use the diagram as a causal map: each arrow represents a different way infected fluid can move directly to another person.",
    visuals: ["confirmed-versus-myths table and route diagram: sexual contact, needles, blood transfusion, and mother-to-child transmission (Guide pages 10–11).", "HIV transmission illustration with HIV at the centre and arrows from the four confirmed routes (Guide page 10)."],
    questions: [
      { type: "mc", prompt: "Which is a confirmed HIV transmission route in the guide?", options: ["Sharing a swimming pool", "A handshake", "Sharing a hypodermic needle", "A mosquito bite"], answer: 2, explain: "Sharing hypodermic needles can transfer infected blood directly." },
      { type: "mc", prompt: "Why is HIV not transmitted by casual hugging?", options: ["HIV is a hormone", "Hugging does not provide the direct transfer of infected body fluids required", "HIV only affects plants", "Hugging destroys lymphocytes"], answer: 1, explain: "The guide states that transmission requires direct transfer of infected fluids; casual contact does not provide that route." },
      { type: "short", prompt: "Name one body fluid listed as a primary vehicle for HIV transmission.", answers: ["blood", "semen", "vaginal secretions", "breast milk"], explain: "The guide lists blood, semen, vaginal secretions, and breast milk." }
    ],
    plenary: ["I can name the four confirmed route categories in the guide.", "I can explain the body-fluid mechanism behind transmission.", "I can correct at least two myths without using stigmatising language."],
    exit: "Choose one myth and correct it in one sentence using the phrase “direct transfer of infected body fluids.”"
  },
  {
    id: 7, title: "Controlling the spread of STIs", deck: "Match each control strategy to the transmission route or disease outcome it interrupts.",
    what: "Barrier contraception, blood screening, needle-exchange schemes, public-health education, and antiretroviral therapy.",
    why: "Prevention is not one single action. The guide shows that different measures interrupt different points: sexual contact, medical transfer, needle sharing, community spread, and disease progression.",
    how: "You will read the control-strategy table, connect mechanism to targeted route, and evaluate a prevention plan without confusing contraception with STI protection.",
    starter: "A poster says “Use contraception to prevent all infections.” What is missing from the claim? Name the type of barrier and the fact that not every contraceptive method blocks STI transmission.",
    core: [
      "Effective control requires combining physical barriers, medical procedures, and targeted public-health education. The source guide frames each measure as a mechanism that interrupts a particular route or outcome.",
      "<strong>Barrier contraception, such as condoms</strong>, prevents direct contact between genital mucous membranes and blocks transfer of infected bodily fluids such as semen and vaginal fluids. It targets transmission through sexual intercourse. The examiner tip is precise: say barrier contraception or condoms, not simply “contraception,” because ordinary hormonal contraception does not block STI transmission.",
      "<strong>Blood screening</strong> tests donated blood and blood products for antibodies or viral markers before transfusion. It targets medical procedures and transfusions. <strong>Needle-exchange schemes</strong> provide sterile, disposable hypodermic needles to intravenous drug users so needles are not shared or reused; they target blood-to-blood contact via needle sharing.",
      "<strong>Public-health education</strong> teaches safe sex practices, symptoms of STIs, contact tracing, and the importance of regular sexual health checks. It targets unprotected intercourse and community spread by improving informed behaviour and follow-up.",
      "<strong>Antiretroviral therapy (ART)</strong> is medication that suppresses viral load in infected individuals, preventing disease progression to AIDS and reducing mother-to-baby transmission. It targets disease progression and vertical transmission; it is not described as a barrier that stops every route at the moment of contact."
    ],
    extended: "The source's annotated overview is a useful exam framework: write the strategy, state how it works, then identify the targeted transmission route or outcome. This mechanism–route pairing earns more credit than listing prevention methods without explaining them.",
    visuals: ["control-strategy table: method, mechanism, and targeted transmission route (Guide pages 11–12).", "annotated prevention infographic: sexual contact → condoms; shared needles → sterile single-use needles; blood transfusion → screened blood; parent-to-child → testing and treatment during pregnancy (Guide page 12).", "examiner tip panel on saying barrier contraception and distinguishing HIV from AIDS (Guide page 12)."],
    questions: [
      { type: "mc", prompt: "Which strategy blocks direct contact between genital mucous membranes and infected bodily fluids?", options: ["Blood screening", "Barrier contraception such as condoms", "ART only", "Contact tracing only"], answer: 1, explain: "Barrier contraception targets sexual-intercourse transmission by reducing direct fluid contact." },
      { type: "mc", prompt: "What is the purpose of a needle-exchange scheme?", options: ["To make mosquitoes avoid people", "To prevent needles being shared or reused", "To increase viral load", "To trigger ovulation"], answer: 1, explain: "Sterile, disposable needles reduce blood-to-blood contact via sharing or re-use." },
      { type: "short", prompt: "What does ART stand for?", answers: ["antiretroviral therapy", "antiretroviral treatment"], explain: "ART means antiretroviral therapy, which suppresses viral load and can prevent disease progression." }
    ],
    plenary: ["I can match a prevention strategy to its mechanism.", "I can identify the transmission route targeted by condoms, screened blood, and sterile needles.", "I can explain how ART affects disease progression or mother-to-baby transmission."],
    exit: "Complete the exam sentence: “This strategy reduces transmission because…”"
  },
  {
    id: 8, title: "Syllabus coverage and exam pitfalls", deck: "Consolidate the guide into the distinctions that examiners most often test.",
    what: "The source guide's coverage-at-a-glance statements, common exam pitfalls, precise terminology, and an integrated retrieval sequence across 16.5 and 16.6.",
    why: "Revision is strongest when it exposes confusions: pituitary versus ovary, repair versus maintenance, corpus luteum versus placenta, pathogen versus syndrome, and contraception versus barrier contraception.",
    how: "You will complete an integrated retrieval grid, correct common errors, and write concise exam-ready chains using site, hormone, action, and outcome.",
    starter: "Correct this deliberately flawed paragraph: “The ovaries release FSH, progesterone repairs the lining, and AIDS is the virus that is stopped by any contraception.” Identify every error before rewriting it.",
    core: [
      "The guide's Core coverage states that testosterone and oestrogen bring about development of secondary sexual characteristics. It also states that in the menstrual cycle a follicle develops and releases an egg at ovulation, the corpus luteum forms, and the uterine lining sheds, rebuilds and thickens before it is maintained or shed depending on whether pregnancy begins.",
      "The Extended coverage states that follicles produce oestrogen and the corpus luteum produces progesterone during the cycle; in early pregnancy the corpus luteum produces both; later the placenta becomes the main source of both. It also states that FSH stimulates follicle development, LH triggers ovulation, high oestrogen triggers the LH surge, and progesterone maintains the lining while pregnancy hormones suppress FSH and LH.",
      "The first major pitfall is <strong>pituitary versus ovaries</strong>: FSH and LH are released by the anterior pituitary gland; oestrogen and progesterone are released by the ovaries and later by the placenta. The second is <strong>endometrium state versus hormone level</strong>: a drop in progesterone is the direct trigger for menstruation; oestrogen repairs the lining, whereas progesterone maintains it.",
      "The third pitfall is the <strong>site-of-production shift during pregnancy</strong>: in early pregnancy the corpus luteum secretes progesterone, then by approximately weeks 10–12 the placenta assumes the primary role of secreting oestrogen and progesterone until birth.",
      "For the STI section, retain the same precision. HIV is a pathogen or virus; AIDS is the syndrome or condition that HIV infection may lead to. When asked about prevention, specify <strong>barrier contraception or condoms</strong> rather than saying only “contraception,” because normal methods such as the contraceptive pill do not prevent STI transmission."
    ],
    extended: "A reliable answer pattern for hormone questions is: <strong>site → hormone → target/action → consequence</strong>. For transmission questions use: <strong>strategy → mechanism → targeted route or outcome</strong>. These patterns are not substitutes for understanding; they are a way to keep every required link visible under exam pressure.",
    visuals: ["syllabus coverage panel summarising Core and Extended statements (Guide page 8).", "quick-revision panel of common exam pitfalls: pituitary vs ovaries, endometrium state vs hormone levels, and pregnancy production shift (Guide page 8).", "examiner revision tip panel: use precise terms for HIV, AIDS, and barrier contraception (Guide page 12)."],
    questions: [
      { type: "mc", prompt: "Which correction is accurate?", options: ["FSH is released by the ovaries", "Progesterone repairs the endometrium", "The placenta becomes the main hormone source from about week 12", "AIDS is the HIV pathogen"], answer: 2, explain: "The guide states that from approximately week 12 the placenta takes over production of progesterone and oestrogen." },
      { type: "mc", prompt: "Which phrase is most precise for preventing STI transmission during sexual intercourse?", options: ["Any contraception", "Barrier contraception such as condoms", "The contraceptive pill", "Avoiding all hormones"], answer: 1, explain: "The examiner tip specifically asks for barrier contraception or condoms because ordinary contraception does not block STI transmission." },
      { type: "short", prompt: "Complete the answer pattern: site → hormone → target or action → ____.", answers: ["consequence", "outcome", "effect"], explain: "The final link states the physiological consequence, such as ovulation, maintained endometrium, or suppressed gonadotropins." }
    ],
    plenary: ["I can correct the three hormone-production pitfalls from the source guide.", "I can keep HIV, AIDS, and barrier contraception conceptually separate.", "I can write an answer chain with site, hormone, action, and consequence."],
    exit: "Write the one distinction you are most likely to confuse, followed by the correction that will keep it straight."
  }
];

const state = { score: 0, answered: new Set(), completed: new Set(), reflections: JSON.parse(sessionStorage.getItem("learnlane-reflections") || "{}") };
const sessionsEl = document.querySelector("#sessions");
const chapterListEl = document.querySelector("#chapter-list");
function paragraphize(items) { return items.map(item => `<p>${item}</p>`).join(""); }
const sourceImages = {
  1: [],
  2: [{ src: "/images/menstrual-cycle.png", alt: "Ovarian follicle development, egg release, corpus luteum formation, and corresponding uterine-lining changes across the menstrual cycle.", caption: "Ovarian events and uterine-lining changes progress together through the cycle." }],
  3: [{ src: "/images/hormone-patterns-cycle.png", alt: "Graph of relative oestrogen, LH, FSH, and progesterone levels across follicular, ovulatory, and luteal phases.", caption: "Hormone levels shift across the cycle; timing varies between individuals." }],
  4: [{ src: "/images/placental-structure-exchange.png", alt: "Placental structure showing the fetus and umbilical cord, placental disc, chorionic villi, maternal blood vessels, and fetal exchange layers.", caption: "The first figure from the supplied PDF shows placental structure and the maternal–fetal exchange interface." }],
  5: [
    { src: "/images/hiv-particle-structure.png", alt: "HIV particle with its envelope, gp120 and gp41 spikes, matrix layer, conical capsid, RNA copies, and reverse transcriptase.", caption: "The PDF's labelled HIV particle identifies the envelope, genetic material, and key internal structures." },
    { src: "/images/sti-infant-outcomes.png", alt: "Table of selected STI pathogens and possible infant outcomes, including syphilis, HIV, hepatitis B, chlamydia, gonorrhoea, and genital herpes.", caption: "Possible infant outcomes differ by infection and are not inevitable." }
  ],
  6: [{ src: "/images/vertical-transmission-routes.png", alt: "Possible infection-specific routes to an infant during pregnancy, labour and birth, or after birth.", caption: "Routes vary by infection; not all STIs cross the placenta." }],
  7: [{ src: "/images/pregnancy-sti-prevention.png", alt: "Pregnancy STI prevention flowchart linking safer sex, screening, infection-specific care, partner testing, and treatment.", caption: "Prevention combines safer sex, screening, infection-specific care, partner testing, and treatment." }],
  8: []
};
function renderVisuals(items, sessionId) {
  return (sourceImages[sessionId] || []).map(({ src, alt, caption }) =>
    `<figure class="visual-placeholder">
      <img class="source-visual" src="${src}?v=pdf-figures-1" alt="${alt}" loading="lazy" decoding="async" />
      <figcaption class="source-visual-caption">${caption}</figcaption>
    </figure>`
  ).join("");
}
function renderQuestions(questions, sessionId) { return questions.map((q, index) => {
  const qid = `s${sessionId}q${index}`;
  if (q.type === "short") return `<article class="question-card" data-question="${qid}" data-answer="${q.answers.join("|")}"><span class="question-label">Check ${index + 1} · short answer</span><p class="question-prompt">${q.prompt}</p><div class="short-answer"><input aria-label="Answer for check ${index + 1}" data-input="${qid}" /><button type="button" data-submit="${qid}">Check</button></div><div class="feedback" data-feedback="${qid}" role="status"></div></article>`;
  return `<article class="question-card" data-question="${qid}"><span class="question-label">Check ${index + 1} · choose one</span><p class="question-prompt">${q.prompt}</p><div class="options">${q.options.map((option, optionIndex) => `<button type="button" class="option" data-question="${qid}" data-option="${optionIndex}">${option}</button>`).join("")}</div><div class="feedback" data-feedback="${qid}" role="status"></div></article>`;
}).join(""); }
function renderSession(session) {
  return `<section class="session" id="session-${session.id}" data-session="${session.id}">
    <div class="session-heading"><div class="session-number">0${session.id}</div><div><div class="eyebrow">Session ${session.id} · ${session.id <= 2 || session.id >= 5 ? "core" : "extended"}</div><h2 class="session-title">${session.title}</h2><p class="session-deck">${session.deck}</p></div><div class="session-status"><button class="complete-toggle" type="button" data-complete="${session.id}" aria-pressed="false"><span class="checkmark">✓</span><span>Mark complete</span></button></div></div>
    <div class="content-block core-block"><div class="block-heading"><h3>Core</h3><span class="badge badge-core">CORE</span></div><div class="rich-copy">${paragraphize(session.core.slice(0, 1))}</div></div>
    ${renderVisuals(session.visuals, session.id)}
    <div class="content-block extended-block"><div class="block-heading"><h3>Extended</h3><span class="badge badge-extended">EXTENDED</span></div><div class="rich-copy"><p>${session.extended}</p></div></div>
    <div class="practice"><div class="practice-heading"><div><span class="section-kicker">Retrieval practice</span><h3>Make the biology do some work.</h3></div><span class="practice-score" data-session-score="${session.id}">0 / ${session.questions.length} correct</span></div><div class="question-list">${renderQuestions(session.questions, session.id)}</div></div>
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

const finalPlenary = document.querySelector(".final-plenary");
finalPlenary.addEventListener("change", event => { const check = event.target.closest("[data-global-reflection]"); if (check) saveReflection(`global-${check.dataset.globalReflection}`, check.checked); });
finalPlenary.addEventListener("input", event => { const exit = event.target.closest("[data-global-exit]"); if (exit) saveReflection("global-exit", exit.value); });
Object.entries(state.reflections).forEach(([key, value]) => { const checkbox = document.querySelector(`[data-global-reflection="${key.replace("global-", "")}"]`); if (checkbox) checkbox.checked = value === true || value === "true"; if (key === "global-exit") { const exit = document.querySelector("[data-global-exit]"); if (exit) exit.value = value; } });

document.querySelector(".menu-toggle").addEventListener("click", event => { const open = document.body.classList.toggle("nav-open"); document.querySelector(".course-rail").classList.toggle("is-open", open); event.currentTarget.setAttribute("aria-expanded", String(open)); });
document.querySelector(".course-rail").addEventListener("click", event => { if (event.target.closest(".chapter-link")) { document.body.classList.remove("nav-open"); document.querySelector(".course-rail").classList.remove("is-open"); document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false"); } });
const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { document.querySelectorAll(".chapter-link").forEach(link => link.classList.toggle("active", link.dataset.nav === entry.target.dataset.session)); } }); }, { rootMargin: "-18% 0px -72% 0px", threshold: 0 });
document.querySelectorAll(".session").forEach(session => observer.observe(session));
