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

export const services: Service[] = [
  {
    slug: "advanced-functional-testing",
    number: "01",
    name: "Advanced Functional Testing",
    tagline: "The labs your conventional doctor never ran.",
    summary:
      "Conventional medicine uses about 20 lab markers in primary care. We use upwards of 100 — testing not just whether you have a disease, but whether your physiology is functioning optimally.",
    hero: {
      eyebrow: "Service · 01",
      title: "Advanced functional testing",
      subtitle:
        "The difference between 'your labs are normal' and 'your labs are optimal' is often the difference between feeling sick and feeling like yourself.",
    },
    whatItIs: [
      "Standard lab work is built around catching disease — not measuring function. A 'normal' TSH may be off by enough to make you exhausted. A fasting glucose can look fine while your insulin has been elevated for a decade. A B12 may be in range while you're functionally deficient.",
      "Functional testing measures physiology with greater resolution and better reference ranges. We're not looking for 'is this person sick?' — we're looking for 'is this system working at the level this person needs to thrive?'",
      "We use clinical-grade testing through accredited labs (LabCorp, Quest, Genova, Vibrant America, Real Time Laboratories, DUTCH, Diagnostic Solutions GI-MAP, Cyrex). All testing is interpreted within a comprehensive picture — not in isolation.",
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
      "Decisions about supplementation, diet, and lifestyle become precise instead of generic.",
      "Re-testing at 8–12 weeks confirms the protocol is working — and identifies what to adjust.",
    ],
    process: [
      "Megha selects testing based on your initial intake and presenting symptoms — never a one-size-fits-all panel.",
      "Most testing is at-home (blood draw, urine collection, stool kit). Some uses a local LabCorp/Quest draw site.",
      "Results return in 7–21 days depending on the panel.",
      "Megha reviews and synthesizes results before your follow-up, so the conversation focuses on action — not numbers.",
    ],
    pricing:
      "Testing is billed at lab cost. Most patients invest $500–$1,800 in initial testing depending on case complexity. We choose the smallest panel that will answer the questions; we never order tests for the sake of ordering.",
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
      "It is also where the practice of functional medicine becomes truly individualized. Two patients with the same diagnosis often have different root causes — and therefore different protocols.",
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
      "Most nutrition advice fails because it ignores who you are. We build food protocols around your labs, your culture, your schedule, and what you actually like.",
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
          "Based on your testing: macronutrient ratios, food categories to add, food categories to time around your physiology, and any temporary therapeutic eliminations.",
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
        title: "Therapeutic protocols",
        description:
          "AIP, low-FODMAP, low-histamine, anti-inflammatory, blood-sugar-stabilizing, ketogenic — only when warranted, always time-limited, with a clear plan for reintroduction.",
      },
      {
        title: "Supplement strategy",
        description:
          "Targeted, evidence-based supplementation that fills the gaps your food can't — using only third-party-tested professional brands. We don't sell supplements; we recommend them.",
      },
    ],
    why: [
      "Food becomes medicine, not stress.",
      "You learn to eat in a way you can actually sustain — not for a 6-week reset, but for life.",
      "Supplements are precise instead of speculative.",
    ],
    process: [
      "Initial 60-minute nutrition appointment after your lab review",
      "Written nutrition framework and supplement protocol delivered to your portal",
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
      "Coaching is not therapy and it is not 'accountability.' It's a working relationship with someone who knows your protocol, your labs, your story, and your life — and who is in your corner when the wheels come off.",
      "Megha does her own coaching — there is no junior coach you get handed off to. The same clinician who designed your protocol is the one who walks it with you.",
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
      "Notes and updated protocols are sent after each session",
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
      "Our work here is precise and prescriptive: not 'try to sleep more,' but a protocol you can run, with the why behind it.",
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
      "Prioritized recommendations integrated into your protocol",
      "Specific habit work in coaching sessions",
      "Tracked outcomes (sleep score, HRV, glucose stability) where useful",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
