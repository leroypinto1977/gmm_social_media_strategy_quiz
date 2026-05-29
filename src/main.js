import './style.css';

const Qs = [
  {
    id: "q1",
    step: "Question 1 of 5",
    title: "What's your primary goal with social media?",
    sub: "This shapes your entire strategy — pick the one that fits best.",
    opts: [
      { v: "ads", icon: "📢", label: "Earn from brand deals & platform payouts", desc: "Sponsorships, CPM ads, YouTube AdSense, platform monetisation" },
      { v: "convert", icon: "🛒", label: "Sell my own product or service", desc: "Use free content to convert viewers into paying customers" }
    ]
  },
  {
    id: "q2",
    step: "Question 2 of 5",
    title: "Does your buyer need to be educated on how your solution works?",
    sub: "Would a total stranger instantly understand the value of your product, or do you need to walk them through it?",
    opts: [
      { v: "no", icon: "⚡", label: "No — the value is self-explanatory", desc: "Like candy, clothing, or a camera app. People get it immediately." },
      { v: "yes", icon: "🎓", label: "Yes — I need to explain my approach", desc: "Like coaching, consulting, software, or a new framework / method." }
    ]
  },
  {
    id: "q3",
    step: "Question 3 of 5",
    title: "What type of business are you running?",
    sub: "Choose the closest match — this helps determine brand positioning.",
    opts: [
      { v: "service", icon: "🙋", label: "Service, coaching, or consulting", desc: "Clients buy you — your expertise and personal approach" },
      { v: "cpg", icon: "📦", label: "Physical product / CPG / retail", desc: "Products sold in stores or direct to consumer" },
      { v: "software", icon: "💻", label: "Software or app", desc: "A digital product users subscribe to or download" },
      { v: "agency", icon: "👥", label: "Agency or done-for-you service", desc: "Your team delivers results on behalf of clients" }
    ]
  },
  {
    id: "q4",
    step: "Question 4 of 5",
    title: "What does your content need to do to move someone toward buying?",
    sub: "Be honest about what actually converts a viewer into a buyer for your specific offer.",
    opts: [
      { v: "feel", icon: "❤️", label: "Make them feel something", desc: "Desire, FOMO, inspiration, or curiosity — emotion drives the sale" },
      { v: "learn", icon: "💡", label: "Teach them something", desc: "Understanding your method or results is what builds the trust to buy" }
    ]
  },
  {
    id: "q5",
    step: "Question 5 of 5",
    title: "Does the buyer need to trust YOU personally to make the purchase?",
    sub: "Or could a brand name / logo build that trust without your face attached?",
    opts: [
      { v: "yes", icon: "🪪", label: "Yes — they're buying me as much as the product", desc: "My face, story, and personality are central to the sale" },
      { v: "no", icon: "🏪", label: "Not really — brand recognition matters more", desc: "Think shelf recall or logo trust over a personal face" }
    ]
  }
];

const Results = {
  "personal-education": {
    theme: "theme-purple",
    eyebrow: "Personal brand · Education content",
    title: "You should build a personal brand and make education content",
    sub: "Your buyers need to understand your method before they trust you enough to buy. Your content is your sales pitch — it works by demonstrating your thinking, process, and results, not just grabbing attention.",
    tags: ["Coaching", "Consulting", "Agency", "Online courses", "SaaS with complex onboarding"],
    cards: [
      { label: "Account positioning", val: "Individual personal brand" },
      { label: "Content type", val: "Education — tactics, how-tos, frameworks" },
      { label: "Business game", val: "Conversion (sell your own offer)" },
      { label: "Trust builder", val: "Your expertise and track record" }
    ],
    examples: [
      "Break down your exact process or method step by step",
      "Expose the most common mistakes your ideal clients make",
      "Share real client case studies and results",
      "Answer the top objections buyers have before they hire you",
      "Compare your approach vs. the industry standard"
    ],
    cta: "Find 10–20 personal brand education accounts in your niche. Study what topics their top videos cover — that's your content roadmap."
  },
  "personal-entertainment": {
    theme: "theme-coral",
    eyebrow: "Personal brand · Entertainment content",
    title: "You should build a personal brand and make entertainment content",
    sub: "Your product is self-explanatory — people just need to discover you and feel something. Your content doesn't teach; it creates emotion, desire, and a sense of personality. Think vibes, story, and relatability over tutorials.",
    tags: ["Clothing brands", "Consumer goods", "Travel", "Lifestyle", "Fitness"],
    cards: [
      { label: "Account positioning", val: "Individual personal brand" },
      { label: "Content type", val: "Entertainment — emotion, story, humor, vibes" },
      { label: "Business game", val: "Advertising game or Conversion game" },
      { label: "Trust builder", val: "Your personality and aesthetic" }
    ],
    examples: [
      "Day-in-the-life or behind-the-scenes content",
      "Relatable humor or skits rooted in your niche",
      "Cinematic lifestyle or product showcase videos",
      "Trend-based or challenge content",
      "Authentic storytelling about your journey"
    ],
    cta: "Study entertainment creators in your niche. What hooks, formats, and emotions are their top-performing videos using?"
  },
  "brand-education": {
    theme: "theme-teal",
    eyebrow: "Traditional brand · Education content",
    title: "You should build a brand account and make education content",
    sub: "You're building around a brand name (not a single person) and your buyers need to understand your solution before committing. Free educational content is your trust builder — it lets buyers self-educate into your offer.",
    tags: ["SaaS companies", "B2B services", "Agencies", "Niche tools", "Platforms"],
    cards: [
      { label: "Account positioning", val: "Traditional brand (use real humans in content)" },
      { label: "Content type", val: "Education — how-tos, insights, problem-solving" },
      { label: "Business game", val: "Conversion (sell your own offer)" },
      { label: "Trust builder", val: "Brand authority and demonstrated expertise" }
    ],
    examples: [
      "Teach the core problem your product solves in depth",
      "Platform walkthroughs, tips, and hidden features",
      "Industry data, hot takes, and trend breakdowns",
      "Compare your category's solutions honestly",
      "Customer story content that shows outcomes"
    ],
    cta: "Find 10–20 brand education accounts in your space and analyse which topics consistently get the most views."
  },
  "brand-entertainment": {
    theme: "theme-amber",
    eyebrow: "Traditional brand · Entertainment content",
    title: "You should build a brand account and make entertainment content",
    sub: "You're building a recognisable brand name (especially important for retail / shelf placement) and your product speaks for itself. Content creates emotional desire and FOMO — people just need to want it and remember your name.",
    tags: ["CPG", "Retail products", "Consumer apps", "Luxury goods", "Food & beverage"],
    cards: [
      { label: "Account positioning", val: "Traditional brand (founders or characters on camera)" },
      { label: "Content type", val: "Entertainment — emotion, aesthetic, FOMO" },
      { label: "Business game", val: "Conversion or Advertising game" },
      { label: "Trust builder", val: "Brand recognition and emotional association" }
    ],
    examples: [
      "Show your product in aspirational, desirable contexts",
      "Behind-the-scenes at your company or production",
      "Founder-led skits that give the brand a personality",
      "Trend and community-driven content",
      "Emotional storytelling around your brand's origin"
    ],
    cta: "Study entertainment brand accounts in your category. What visual formats and emotional triggers do their best videos use?"
  }
};

let current = 0;
let answers = {};
let sel = null;

function startQuiz() {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  renderQ();
}

function renderQ() {
  const q = Qs[current];
  sel = answers[q.id] || null;
  const cols = q.opts.length === 2 ? "1fr 1fr" : "1fr 1fr";
  document.getElementById("question-block").innerHTML = `
    <div class="q-step">${q.step}</div>
    <div class="q-title">${q.title}</div>
    <div class="q-sub">${q.sub}</div>
    <div class="options" style="grid-template-columns:${cols}">
      ${q.opts.map(o => `
        <button class="opt${sel === o.v ? ' selected' : ''}" onclick="pick('${o.v}',this)">
          <div class="opt-icon">${o.icon}</div>
          <div class="opt-label">${o.label}</div>
          <div class="opt-desc">${o.desc}</div>
        </button>`).join("")}
    </div>`;
  document.getElementById("q-counter").textContent = `${current + 1} / ${Qs.length}`;
  document.getElementById("progress-fill").style.width = `${((current + 1) / Qs.length) * 100}%`;
  document.getElementById("btn-next").disabled = !sel;
  document.getElementById("btn-next").textContent = current === Qs.length - 1 ? "See my strategy →" : "Continue →";
  document.getElementById("btn-back").classList.toggle("hidden", current === 0);
  document.getElementById("question-block").style.animation = "none";
  requestAnimationFrame(() => { document.getElementById("question-block").style.animation = ""; });
}

function pick(v, el) {
  sel = v;
  document.querySelectorAll(".opt").forEach(b => b.classList.remove("selected"));
  el.classList.add("selected");
  document.getElementById("btn-next").disabled = false;
}

function goNext() {
  if (!sel) return;
  answers[Qs[current].id] = sel;
  if (current < Qs.length - 1) {
    current++;
    sel = null;
    renderQ();
  } else {
    showResult();
  }
}

function goBack() {
  if (current > 0) {
    current--;
    sel = answers[Qs[current].id] || null;
    renderQ();
  }
}

function calcResult() {
  const edu = (answers.q2 === "yes" || answers.q4 === "learn");
  const personal = (answers.q3 === "service" || answers.q3 === "agency" || answers.q5 === "yes");
  return (personal ? "personal" : "brand") + "-" + (edu ? "education" : "entertainment");
}

function showResult() {
  const key = calcResult();
  const r = Results[key];
  document.getElementById("quiz").classList.add("hidden");
  const rs = document.getElementById("result");
  rs.classList.remove("hidden");
  document.getElementById("result-content").className = `result-content ${r.theme}`;
  document.getElementById("result-content").innerHTML = `
    <div class="result-eyebrow">${r.eyebrow}</div>
    <h2 class="result-title">${r.title}</h2>
    <p class="result-sub">${r.sub}</p>
    <div class="tags">${r.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    <div class="result-grid">
      ${r.cards.map(c => `<div class="r-card"><div class="r-card-label">${c.label}</div><div class="r-card-val">${c.val}</div></div>`).join("")}
    </div>
    <div class="examples-block">
      <div class="examples-title">Content ideas to start with</div>
      <ul class="examples-list">
        ${r.examples.map(e => `<li><span class="check">✓</span>${e}</li>`).join("")}
      </ul>
    </div>
    <div class="cta-block">
      <div class="cta-text">
        <div class="cta-label">Your next step</div>
        <div class="cta-body">${r.cta}</div>
      </div>
    </div>
    <button class="retake-btn" onclick="retake()">← Retake the quiz</button>
  `;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function retake() {
  current = 0;
  answers = {};
  sel = null;
  document.getElementById("result").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  renderQ();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Bind to window to allow simple inline execution from index.html template elements
window.startQuiz = startQuiz;
window.pick = pick;
window.goNext = goNext;
window.goBack = goBack;
window.retake = retake;
