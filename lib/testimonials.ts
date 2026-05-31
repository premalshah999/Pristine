export type TestimonialStory = {
  name: string;
  detail: string;
  condition: string;
  hook: string;
  quote: string;
  href: string;
  markers: string[];
  outcome: string;
  accent: "mint" | "tan" | "sage" | "paper";
};

export const testimonialStories: TestimonialStory[] = [
  {
    name: "Anika R.",
    detail: "34 · Hashimoto's, fatigue, brain fog",
    condition: "Thyroid",
    hook: "Her labs were called normal, but her day still started exhausted.",
    quote:
      "I had been told to wait because my TSH was technically in range. Megha looked at antibodies, ferritin, stress load, protein intake, and my actual symptoms together. The plan finally explained why mornings felt impossible.",
    href: "/conditions/thyroid",
    markers: ["Antibody pattern", "Ferritin", "Stress load"],
    outcome: "Energy became steadier and she had a clearer thyroid roadmap.",
    accent: "mint",
  },
  {
    name: "Nadia K.",
    detail: "42 · functional weight loss, perimenopause",
    condition: "Functional weight loss",
    hook: "She was eating less, walking more, and gaining around the middle.",
    quote:
      "The first thing Megha did was stop making this about willpower. We mapped sleep, cycle changes, protein, insulin clues, and late-day cravings. I stopped skipping meals and started seeing my weight trend make sense again.",
    href: "/conditions/functional-weight-loss",
    markers: ["Insulin clues", "Protein timing", "Perimenopause"],
    outcome: "Less reactive eating, better strength, and a sustainable fat-loss rhythm.",
    accent: "tan",
  },
  {
    name: "Marcus J.",
    detail: "39 · weight resistance, blood sugar swings",
    condition: "Functional weight loss",
    hook: "His workouts were consistent. His recovery and glucose were not.",
    quote:
      "I thought I needed a harder plan. Megha showed me that my post-dinner glucose, sleep debt, and under-eating during the day were driving the night cravings. The changes were boring in the best way: repeatable.",
    href: "/conditions/functional-weight-loss",
    markers: ["CGM review", "Meal rhythm", "Recovery"],
    outcome: "Cravings dropped and training stopped feeling like punishment.",
    accent: "paper",
  },
  {
    name: "Priya S.",
    detail: "41 · migraines, histamine sensitivity",
    condition: "Neurological",
    hook: "Her migraines stopped looking random once the pattern was mapped.",
    quote:
      "I had medications, but no explanation. Megha tracked my cycle, histamine load, minerals, sleep, and neck tension. Once we saw the pattern, I knew what to adjust before a flare built momentum.",
    href: "/conditions/migraines",
    markers: ["Cycle timing", "Histamine load", "Minerals"],
    outcome: "Fewer surprise flares and a calmer prevention strategy.",
    accent: "sage",
  },
  {
    name: "Elena P.",
    detail: "48 · PCOS history, weight regain",
    condition: "Hormones",
    hook: "The scale moved only after the plan stopped fighting her hormones.",
    quote:
      "I had done every reset. This was the first plan that connected old PCOS patterns, cortisol, digestion, and how I felt after meals. I was not handed a food list. I was taught what my body was responding to.",
    href: "/conditions/female-hormones",
    markers: ["Cortisol rhythm", "PCOS history", "Digestion"],
    outcome: "More predictable appetite and a plan she could keep during travel.",
    accent: "mint",
  },
  {
    name: "Leah M.",
    detail: "36 · bloating, constipation, fatigue",
    condition: "Gut health",
    hook: "Her digestive symptoms were treated like a nuisance until they were mapped.",
    quote:
      "I used to plan my clothes around bloating. Megha connected constipation, low stomach acid signs, stress, and food timing. We changed the order of things instead of adding ten supplements at once.",
    href: "/conditions/gut-health",
    markers: ["Motility", "Meal timing", "Stress response"],
    outcome: "Less bloating volatility and a simpler digestive routine.",
    accent: "tan",
  },
  {
    name: "Omar N.",
    detail: "55 · neuropathy, metabolic health",
    condition: "Neuropathy",
    hook: "His tingling became a clue, not a dead end.",
    quote:
      "I was told the tingling was something to live with. Megha asked about blood sugar history, B vitamins, movement, sleep, and inflammation. I finally had a plan that matched the whole picture.",
    href: "/conditions/neuropathy",
    markers: ["B vitamins", "Glucose history", "Movement"],
    outcome: "Better tracking, fewer guesses, and clearer conversations with his medical team.",
    accent: "sage",
  },
  {
    name: "Rachel T.",
    detail: "31 · anxiety, fatigue, irregular meals",
    condition: "Mental health",
    hook: "Her anxiety care got better when her body stopped running on fumes.",
    quote:
      "I kept thinking I was failing at stress management. Megha helped me see the blood sugar dips, caffeine timing, low protein, and poor sleep that were amplifying everything. It made therapy easier to use.",
    href: "/conditions/anxiety",
    markers: ["Blood sugar", "Caffeine timing", "Sleep"],
    outcome: "More stable mornings and less panic around food and energy.",
    accent: "paper",
  },
];
