// =============================================================
// Services — five-pillar functional medicine offering
// =============================================================

export interface Service {
  slug: string;
  number: string;
  name: string;
  shortName?: string;
  tagline: string;
  summary: string;
  hero: { eyebrow: string; title: string; subtitle: string };
  whatItIs: string[];
  included: { title: string; description: string }[];
  why: string[];
  process: string[];
  pricing?: string;
}

export interface PublicServiceDetails {
  overview: string[];
  focusAreas: { title: string; description: string }[];
  why: string[];
  process: string[];
  note?: string;
}

export const services: Service[] = [
  {
    slug: "advanced-functional-testing",
    number: "01",
    name: "Advanced Functional Testing",
    tagline: "The labs your conventional doctor never ran.",
    summary:
      "Conventional medicine often uses a narrow lab set in primary care. When appropriate, we review a broader picture — not just whether you have a disease, but how your physiology is functioning.",
    hero: {
      eyebrow: "Service · 01",
      title: "Advanced functional testing",
      subtitle:
        "The difference between 'your labs are normal' and 'your labs are optimal' is often the difference between feeling sick and feeling like yourself.",
    },
    whatItIs: [
      "Standard lab work is built around catching disease — not measuring function. A 'normal' TSH may be off by enough to make you exhausted. A fasting glucose can look fine while your insulin has been elevated for a decade. A B12 may be in range while you're functionally deficient.",
      "Functional testing measures physiology with greater resolution and better reference ranges. We're not looking for 'is this person sick?' — we're looking for 'is this system working at the level this person needs to thrive?'",
      "When appropriate, we may recommend clinical-grade testing through accredited labs (LabCorp, Quest, Genova, Vibrant America, Real Time Laboratories, DUTCH, Diagnostic Solutions GI-MAP, Cyrex). All testing is interpreted within a comprehensive picture — not in isolation.",
    ],
    included: [
      {
        title: "Comprehensive blood chemistry",
        description:
          "Full metabolic, fasting insulin, HOMA-IR, advanced lipids (ApoB, particle size), inflammation (hs-CRP, ferritin, homocysteine), full thyroid (TSH, FT3, FT4, RT3, antibodies), nutrient panel (B12, folate, vitamin D, magnesium RBC, zinc, ferritin).",
      },
      {
        title: "Hormone panels",
        description:
          "DUTCH dried urine for cycle-mapped sex hormones, estrogen metabolism, cortisol curve, melatonin, organic acids — far beyond what blood draws can show.",
      },
      {
        title: "Gut testing",
        description:
          "GI-MAP comprehensive stool: microbiome composition, pathogens (parasites, H. pylori, C. difficile), digestive markers, intestinal inflammation, immune function. SIBO breath testing where indicated.",
      },
      {
        title: "Food sensitivity & autoimmunity",
        description:
          "IgG food sensitivity panels, gluten cross-reactivity (Cyrex Array 3/4), autoimmune predictive antibodies, intestinal permeability testing.",
      },
      {
        title: "Toxic burden testing",
        description:
          "Urine mycotoxin panels (Real Time Labs, Vibrant), heavy metal panels, environmental chemical screens — when symptoms warrant.",
      },
      {
        title: "Genetic & methylation",
        description:
          "MTHFR, MTRR, COMT, CBS, VDR, and other clinically meaningful SNPs interpreted for nutrition and supplementation guidance.",
      },
    ],
    why: [
      "You stop guessing. You start knowing.",
      "Decisions about supplementation, diet, and lifestyle can become more precise instead of generic.",
      "When appropriate, re-testing at 8–12 weeks can show whether the plan is working — and identify what to adjust.",
    ],
    process: [
      "Megha selects testing based on your initial intake and presenting symptoms — never a one-size-fits-all panel.",
      "Many tests are at-home (blood draw, urine collection, stool kit). Some use a local LabCorp/Quest draw site.",
      "Results return in 7–21 days depending on the panel.",
      "Megha reviews and synthesizes results before your follow-up, so the conversation focuses on action — not numbers.",
    ],
    pricing:
      "Testing is billed at lab cost when recommended. Initial testing can range from roughly $500–$1,800 depending on case complexity, but not everyone needs extensive testing. We choose the smallest panel that will answer the questions; we never order tests for the sake of ordering.",
  },
  {
    slug: "root-cause-analysis",
    number: "02",
    name: "Root-Cause Analysis",
    tagline: "Connecting your labs, history, and timeline into one clear map.",
    summary:
      "The labs are a snapshot. Your story is the timeline. Putting them together is where everything begins to make sense.",
    hero: {
      eyebrow: "Service · 02",
      title: "Root-cause analysis",
      subtitle:
        "Functional medicine's superpower isn't ordering more tests. It's the ability to connect what we find in those tests to the actual life and body of the person sitting in front of us.",
    },
    whatItIs: [
      "Most chronic illness is a downstream symptom of upstream causes that have been accumulating for years — sometimes decades. A migraine in your 40s may begin with a head injury at 14, antibiotics at 22, mold exposure at 31, and a thyroid shift at 38.",
      "Root-cause analysis is the process of building a coherent timeline: when did things change? what was happening then? what tests reveal? what patterns connect the symptoms?",
      "It is also where the practice of functional medicine becomes truly individualized. Two patients with the same diagnosis often have different root causes — and therefore different care priorities.",
    ],
    included: [
      {
        title: "Comprehensive intake",
        description:
          "60–90 minute deep history covering medical timeline, family history, environmental exposures, life stressors, prior treatments, and current daily life. The kind of conversation conventional appointments rarely allow.",
      },
      {
        title: "Functional medicine timeline",
        description:
          "We build a visual timeline of your health from birth to present, mapping triggers, mediators, and turning points. Most patients have never had this done — and it's where their own story finally becomes legible.",
      },
      {
        title: "ATM framework analysis",
        description:
          "Antecedents (genetic and developmental predisposition), Triggers (events that initiated dysfunction), and Mediators (factors maintaining it) — the IFM framework that turns symptoms into a working hypothesis.",
      },
      {
        title: "Lab synthesis",
        description:
          "All testing reviewed together, against your story, looking for patterns rather than isolated abnormalities.",
      },
      {
        title: "Working diagnosis & priorities",
        description:
          "A clear, written summary of what we believe is happening, what we'd like to address first, and why — in plain language you can take to your other providers.",
      },
    ],
    why: [
      "Confusion turns into clarity. Most patients describe their root-cause review as the first time their symptoms have ever made sense as a whole.",
      "Treatment becomes precise: we know what to address first, what's likely downstream, and what to leave alone.",
      "You become an active participant in your own care — because for the first time, you understand the map.",
    ],
    process: [
      "Initial 90-minute intake (virtual)",
      "All testing reviewed and integrated",
      "60-minute synthesis appointment with written timeline and prioritized plan",
      "All documents delivered to your secure patient portal for reference",
    ],
  },
  {
    slug: "nutrition-counseling",
    number: "03",
    name: "Nutrition Counseling",
    tagline: "No food rules. No moralizing. Just biochemistry that fits your life.",
    summary:
      "Most nutrition advice fails because it ignores who you are. We build nutrition plans around your labs when available, your culture, your schedule, and what you actually like.",
    hero: {
      eyebrow: "Service · 03",
      title: "Nutrition counseling",
      subtitle:
        "Food is medicine — but only when it's the right food, in the right context, for the right person. Generic doesn't work.",
    },
    whatItIs: [
      "Megha is a Certified Functional Nutritional Counsellor with 20+ years of clinical experience. Her approach is rooted in functional biochemistry, not the latest trend.",
      "Every nutrition plan is built around four anchors: your lab biomarkers, your specific health goals, your cultural and family food context, and your real-life schedule and preferences.",
      "We don't sell meal plans. We teach you the principles, design the framework, and adjust as your body responds.",
    ],
    included: [
      {
        title: "Personalized food framework",
        description:
          "Based on your history and testing when appropriate: macronutrient ratios, food categories to add, food categories to time around your physiology, and any temporary therapeutic eliminations.",
      },
      {
        title: "Cultural integration",
        description:
          "Indian, Mediterranean, East Asian, Latin American, plant-forward — your nutrition plan is built into the food you grew up with, not against it.",
      },
      {
        title: "Practical implementation",
        description:
          "Grocery guidance, batch-cooking strategies, restaurant survival, travel protocols, family-friendly approaches that work with picky eaters or partners.",
      },
      {
        title: "Therapeutic nutrition frameworks",
        description:
          "AIP, low-FODMAP, low-histamine, anti-inflammatory, blood-sugar-stabilizing, ketogenic — only when warranted, always time-limited, with a clear plan for reintroduction.",
      },
      {
        title: "Supplement strategy",
        description:
          "Supplement guidance may be considered when food intake, symptoms, medications, labs, and safety history support it — using third-party-tested professional brands when appropriate.",
      },
    ],
    why: [
      "Food becomes medicine, not stress.",
      "You learn to eat in a way you can actually sustain — not for a 6-week reset, but for life.",
      "When supplements fit, they are selected thoughtfully instead of speculatively.",
    ],
    process: [
      "Initial 60-minute nutrition appointment after your lab review",
      "Written nutrition framework and supplement guidance when appropriate delivered to your portal",
      "Bi-weekly check-ins to refine and troubleshoot",
      "Re-evaluation at 8–12 weeks based on lab follow-up",
    ],
  },
  {
    slug: "personal-coaching",
    number: "04",
    name: "Personal Coaching",
    tagline: "Knowing what to do is half. Doing it is the other half.",
    summary:
      "Behavior change is the hardest part of healing. You aren't doing this alone — that's the point.",
    hero: {
      eyebrow: "Service · 04",
      title: "Personal coaching",
      subtitle:
        "Most patients don't fail because they don't know what to do. They fail because real life — work, kids, travel, stress, relationships — gets in the way. Coaching is how we keep going.",
    },
    whatItIs: [
      "Coaching is not therapy and it is not 'accountability.' It's a working relationship with someone who knows your plan, your labs when available, your story, and your life — and who is in your corner when the wheels come off.",
      "Megha does her own coaching — there is no junior coach you get handed off to. The same clinician who designed your plan is the one who walks it with you.",
      "We meet at a cadence that matches what you need: weekly during the early phase, biweekly or monthly once you've found your stride.",
    ],
    included: [
      {
        title: "Direct messaging access",
        description:
          "Secure portal messaging for between-session questions, troubleshooting, lab follow-ups, and check-ins. Typical response within one business day.",
      },
      {
        title: "Scheduled coaching sessions",
        description:
          "30–45 minute focused conversations, virtual, on a cadence that works for you. Agendas built around what's hard right now.",
      },
      {
        title: "Protocol adjustments",
        description:
          "Real-time tweaks based on what's working, what's not, and what's changed in your life.",
      },
      {
        title: "Encouragement and accountability",
        description:
          "Sometimes you need a clinician. Sometimes you need someone who remembers what you said three months ago and reminds you how far you've come.",
      },
    ],
    why: [
      "Knowing turns into doing.",
      "Setbacks become information instead of failure.",
      "The plan adapts to your life instead of demanding your life adapt to the plan.",
    ],
    process: [
      "Coaching cadence is set based on your case complexity and goals",
      "Sessions held virtually via secure video",
      "Notes and updated recommendations are sent after each session",
      "All communication centralized in your patient portal",
    ],
  },
  {
    slug: "lifestyle-optimization",
    number: "05",
    name: "Lifestyle Optimization",
    tagline: "Sleep, light, movement, stress — the levers most clinics ignore.",
    summary:
      "Lifestyle isn't garnish. It's medicine. We optimize the foundations most clinical care treats as someone else's problem.",
    hero: {
      eyebrow: "Service · 05",
      title: "Lifestyle optimization",
      subtitle:
        "You can take the best supplements in the world. If you're sleeping six hours, sitting all day, and chronically stressed, you'll get a fraction of the result. Lifestyle is the multiplier.",
    },
    whatItIs: [
      "Sleep architecture, circadian rhythm, movement patterns, stress regulation, sun exposure, social connection, and environmental quality (air, water, EMF, indoor air) all shape the body more than most patients realize.",
      "These factors are usually treated as 'self-care' rather than medicine. In functional medicine, they are central — often more impactful than the most carefully chosen supplement.",
      "Our work here is precise and practical: not 'try to sleep more,' but a plan you can run, with the why behind it.",
    ],
    included: [
      {
        title: "Sleep architecture",
        description:
          "Wind-down protocol, light hygiene, temperature, supplementation if needed, sleep apnea screening, daytime habits that affect nighttime sleep.",
      },
      {
        title: "Circadian alignment",
        description:
          "Morning light exposure, meal timing, evening light reduction. The single most underrated lever for energy, mood, and metabolic health.",
      },
      {
        title: "Movement programming",
        description:
          "Strength training, zone 2 cardio, mobility, walking — built around your fitness level, schedule, and goals. Not gym-shamed, not 'just walk more.'",
      },
      {
        title: "Stress regulation",
        description:
          "Vagal tone work, breathwork, parasympathetic activation, structured downtime. We teach the practice and assign the dosage.",
      },
      {
        title: "Environmental load reduction",
        description:
          "Water filtration, air quality, personal care products, plastic exposure, indoor environment audits where indicated.",
      },
      {
        title: "Recovery & restoration",
        description:
          "Sauna, cold exposure, contrast therapy, breathwork, time in nature — not as wellness theater, but as evidence-based physiological practice.",
      },
    ],
    why: [
      "Doing turns into becoming.",
      "Foundation work makes every other intervention more effective.",
      "You build a body and a life that supports itself.",
    ],
    process: [
      "Lifestyle audit during your intake",
      "Prioritized recommendations integrated into your plan",
      "Specific habit work in coaching sessions",
      "Tracked outcomes (sleep score, HRV, glucose stability) where useful",
    ],
  },
];

const publicServiceDetails: Record<string, PublicServiceDetails> = {
  "advanced-functional-testing": {
    overview: [
      "Testing is used only when it answers a real question. We start with your history, symptoms, and any recent labs before deciding whether additional information is worth pursuing.",
      "The goal is not to run the biggest panel. The goal is to understand patterns clearly enough to choose the next best step.",
      "When testing is appropriate, recommendations are explained in context so you understand why it matters and how it may shape your plan.",
    ],
    focusAreas: [
      {
        title: "Existing lab review",
        description:
          "We review recent results through a functional wellness lens and look for meaningful patterns that may have been missed.",
      },
      {
        title: "Targeted next steps",
        description:
          "Additional testing may be discussed when it would clarify nutrition, metabolism, hormones, digestion, inflammation, or fatigue patterns.",
      },
      {
        title: "Pattern interpretation",
        description:
          "Results are interpreted alongside your symptoms, timeline, lifestyle, goals, and current medical care.",
      },
      {
        title: "Avoiding excess",
        description:
          "We avoid unnecessary testing and focus on the smallest useful set of information for your situation.",
      },
    ],
    why: [
      "You get a clearer picture without being handed a generic checklist.",
      "Testing decisions stay connected to your goals, safety, and budget.",
      "Numbers become context for action instead of another source of confusion.",
    ],
    process: [
      "We begin with your story, symptoms, goals, and any recent records you already have.",
      "If more information would be useful, we discuss options and why they may or may not fit.",
      "Results are reviewed before your follow-up so the visit can focus on practical decisions.",
      "Your plan is adjusted based on the full picture, not on any single result.",
    ],
    note:
      "Testing recommendations are individualized. Specific tests, panels, timing, vendors, and costs are discussed privately only when they are relevant to your case.",
  },
  "root-cause-analysis": {
    overview: [
      "Root-cause work begins by turning scattered symptoms, history, habits, stressors, and available labs into a coherent map.",
      "Two people can carry the same diagnosis and need completely different priorities. This service is where we identify what should come first.",
      "The outcome is a practical working hypothesis, not a one-size-fits-all protocol.",
    ],
    focusAreas: [
      {
        title: "Deep health timeline",
        description:
          "We look at when symptoms began, what changed around that time, and what patterns have repeated since.",
      },
      {
        title: "Systems mapping",
        description:
          "We connect digestion, metabolism, hormones, immune stress, sleep, nutrition, movement, and environment where relevant.",
      },
      {
        title: "Priority setting",
        description:
          "We separate what is urgent, what is downstream, and what can wait so the plan feels usable.",
      },
      {
        title: "Clear explanation",
        description:
          "You leave with plain-language context you can understand and share with your broader care team.",
      },
    ],
    why: [
      "The story starts to make sense as a whole.",
      "Your plan becomes more focused because it has a clear order of operations.",
      "You understand the why behind each next step.",
    ],
    process: [
      "We begin with a detailed intake and timeline.",
      "Available records and patterns are reviewed together.",
      "We identify the most likely drivers and the safest starting priorities.",
      "You receive a clear plan that can evolve as your body responds.",
    ],
  },
  "nutrition-counseling": {
    overview: [
      "Nutrition support is built around your physiology, preferences, culture, schedule, and real life.",
      "We do not hand out generic food rules. We build a flexible framework and adjust it as your body responds.",
      "Supplement guidance may be discussed privately when appropriate, but the public page stays focused on the process rather than a shopping list.",
    ],
    focusAreas: [
      {
        title: "Personal food framework",
        description:
          "We shape meals around energy, blood sugar, digestion, hormones, weight goals, and sustainability.",
      },
      {
        title: "Culture and schedule",
        description:
          "Your plan is designed around the foods, family routines, travel, restaurants, and constraints you actually live with.",
      },
      {
        title: "Therapeutic flexibility",
        description:
          "Temporary food strategies may be considered when useful, always with a plan to keep nutrition practical.",
      },
      {
        title: "Ongoing refinement",
        description:
          "We adjust based on symptoms, preferences, progress, and any relevant clinical context.",
      },
    ],
    why: [
      "Food becomes a tool instead of a source of stress.",
      "You learn principles you can use anywhere.",
      "The plan can adapt instead of collapsing when life gets complicated.",
    ],
    process: [
      "We review your symptoms, routines, preferences, and current food patterns.",
      "We build a nutrition framework that fits your goals and daily life.",
      "You practice the plan, then we refine based on what your body shows us.",
      "Any add-ons are considered privately and only when they make sense for you.",
    ],
  },
  "personal-coaching": {
    overview: [
      "Coaching helps translate a plan into daily decisions, especially when life is busy, stressful, or unpredictable.",
      "The same practitioner who understands your case helps you troubleshoot what is working, what is not, and what needs to change.",
      "The work is collaborative and practical rather than motivational noise.",
    ],
    focusAreas: [
      {
        title: "Implementation support",
        description:
          "We help turn recommendations into realistic weekly actions.",
      },
      {
        title: "Troubleshooting",
        description:
          "When symptoms shift or the plan feels hard, we adjust rather than blaming willpower.",
      },
      {
        title: "Accountability with context",
        description:
          "Support is grounded in your actual case, history, goals, and capacity.",
      },
      {
        title: "Private follow-through",
        description:
          "Communication and check-ins are handled through appropriate patient channels.",
      },
    ],
    why: [
      "Knowing what to do becomes easier to actually do.",
      "Setbacks become useful information.",
      "The plan can change with your life instead of breaking under pressure.",
    ],
    process: [
      "We choose a support cadence that fits your complexity and goals.",
      "Sessions focus on the next practical decisions.",
      "Recommendations are refined as your body and schedule respond.",
      "Communication stays organized through appropriate care channels.",
    ],
  },
  "lifestyle-optimization": {
    overview: [
      "Lifestyle optimization focuses on the foundations that shape physiology every day: sleep, rhythm, movement, stress, recovery, and environment.",
      "The work is not vague self-care. It is a prioritized plan built around what is most likely to move the needle for you.",
      "We avoid overwhelming you with everything at once and start where the return is highest.",
    ],
    focusAreas: [
      {
        title: "Sleep and rhythm",
        description:
          "We look at daily timing, routines, rest quality, and the habits that shape energy.",
      },
      {
        title: "Movement and recovery",
        description:
          "Movement is matched to your capacity, goals, symptoms, and recovery needs.",
      },
      {
        title: "Stress physiology",
        description:
          "We build tools that support regulation without pretending stress is solved by willpower.",
      },
      {
        title: "Environment and routines",
        description:
          "When relevant, we look at the everyday exposures and routines that may affect wellness.",
      },
    ],
    why: [
      "The foundations make every other part of the plan work better.",
      "You get practical changes instead of a long list of ideals.",
      "Health becomes supported by your daily rhythm, not dependent on perfection.",
    ],
    process: [
      "We review your current routines and highest-friction areas.",
      "We choose a small number of changes with the strongest likely impact.",
      "Progress is tracked through symptoms, energy, sleep, and daily usability.",
      "The plan is refined as your capacity improves.",
    ],
  },
};

export function getPublicServiceDetails(slug: string): PublicServiceDetails {
  return publicServiceDetails[slug] ?? {
    overview: [
      "This service is personalized to your history, goals, current care, and readiness for change.",
      "Public examples are intentionally broad. Specific recommendations are discussed only after intake.",
    ],
    focusAreas: [
      {
        title: "Personalized assessment",
        description: "We begin with your story and the patterns that matter most.",
      },
      {
        title: "Clear next steps",
        description: "You leave with a practical direction rather than a generic checklist.",
      },
    ],
    why: ["The work becomes more focused, safer, and easier to use."],
    process: [
      "We listen first.",
      "We identify priorities.",
      "We build a plan that fits.",
      "We adjust as your body responds.",
    ],
  };
}

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
