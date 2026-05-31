// =============================================================
// Conditions — researched, root-cause-framed clinical content
// =============================================================
// Sources synthesized from: IFM (Institute for Functional Medicine),
// Datis Kharrazian on thyroid/autoimmunity, Mark Hyman on metabolic
// health, Chris Kresser on functional protocols, peer-reviewed
// literature on gut–brain axis, mitochondrial dysfunction, and
// environmental toxin load. Educational content only.
// =============================================================

export type ConditionCategory =
  | "Metabolic"
  | "Hormonal"
  | "Neurological"
  | "Gut"
  | "Mental Health"
  | "Immune"
  | "Bone Health"
  | "Neurodevelopmental";

export interface Condition {
  slug: string;
  name: string;
  shortName?: string;
  category: ConditionCategory;
  tagline: string;
  summary: string;
  hero: { eyebrow: string; title: string; subtitle: string };
  whatItIs: string[];
  symptoms: string[];
  conventional: { intro: string; misses: string[] };
  functional: { intro: string; approach: string[] };
  whatToExpect: string[];
  testimonial?: { name: string; detail: string; quote: string };
  faqs?: { q: string; a: string }[];
}

export const conditions: Condition[] = [
  // ────────────────────────────────────────── METABOLIC
  {
    slug: "functional-weight-loss",
    name: "Functional Weight Loss",
    category: "Metabolic",
    tagline: "Stop counting calories. Start fixing what's broken underneath.",
    summary:
      "When weight won't move, willpower isn't the problem — physiology is. We map the metabolic levers your body is actually responding to.",
    hero: {
      eyebrow: "Metabolic Care",
      title: "Functional weight loss",
      subtitle:
        "If you're eating less, moving more, and your body still won't change — your metabolism isn't broken. It's protected. We find out from what.",
    },
    whatItIs: [
      "Sustained, unexplained weight gain (or weight that won't release) is rarely about calories. It's a signal that one or more upstream systems — insulin, cortisol, thyroid, sex hormones, gut, sleep, or inflammation — is out of rhythm.",
      "Modern weight loss culture treats the body like a furnace. Functional medicine treats it like a thermostat: the body is constantly making decisions about what to store, what to burn, and what to repair, based on signals it's receiving from your environment, food, and stress.",
      "When you fix the signal, the weight follows. Not the other way around.",
    ],
    symptoms: [
      "Weight gain despite eating well and moving regularly",
      "Stubborn belly fat that doesn't respond to diet",
      "Energy crashes 2–3 hours after meals",
      "Intense cravings for sugar or carbs",
      "Difficulty losing weight after 35 (especially women)",
      "Weight regained quickly after restrictive diets",
      "Bloating, fatigue after meals",
      "Sleep disruption, especially 2–4 a.m. wake-ups",
    ],
    conventional: {
      intro:
        "Conventional care still treats weight as an arithmetic problem — calories in, calories out — and quietly blames the patient when the math doesn't work.",
      misses: [
        "Fasting insulin is almost never measured. You can have 'normal' glucose and severely elevated insulin for 5–10 years before it shows up.",
        "Thyroid is screened with TSH alone — Free T3, Reverse T3, and antibodies that drive most real-world thyroid dysfunction are skipped.",
        "Cortisol patterns and HPA-axis dysregulation aren't tested, even though chronic stress is one of the most powerful weight-storage signals in the body.",
        "Gut health, food sensitivities, and inflammation are rarely connected to metabolic stuckness — though research links them all directly.",
        "Sleep architecture, mineral status (magnesium, zinc), and environmental endocrine disruptors are almost never on the table.",
      ],
    },
    functional: {
      intro:
        "We start by looking at what's actually happening in your body. Then we build a plan around your biology — not someone else's diet.",
      approach: [
        "Protein-forward, blood-sugar-stabilizing nutrition tailored to your biomarkers",
        "Strategic carbohydrate placement — not deprivation",
        "Strength training programmed for metabolic adaptation, not punishment",
        "Sleep, circadian, and nervous-system regulation as first-line metabolic medicine",
        "Supplement options that may be considered when labs and history support them: berberine, magnesium, chromium, omega-3, inositol, adaptogens",
        "Gut healing if dysbiosis or inflammation is contributing",
      ],
    },
    whatToExpect: [
      "In the first 30 days, most patients see steadier energy, fewer cravings, and better sleep — often before the scale moves. That's a feature, not a bug: we're rebuilding the signal first.",
      "Within 60–90 days, some patients begin to see a more sustainable rhythm of weight change, though pace varies widely by history, medications, hormones, sleep, stress, and consistency.",
      "By 6 months, many patients have a clearer baseline they understand and can maintain without obsessing over food.",
    ],
    testimonial: {
      name: "Maya L.",
      detail: "33 · PCOS & Insulin Resistance",
      quote:
        "I had been doing 'all the right things' for years and gaining anyway. Megha looked at my fasting insulin — which nobody had ever ordered — and we started there. Six months in, my cycles are regular and I'm down 22 pounds without forcing it.",
    },
    faqs: [
      {
        q: "Will I have to follow a restrictive diet?",
        a: "No. Restriction without root-cause work almost always backfires. We focus on adding what's missing (protein, minerals, fiber, sleep, light) before we ever talk about removing anything.",
      },
      {
        q: "Do you prescribe GLP-1 medications?",
        a: "We can co-manage if a GLP-1 is appropriate through your prescribing provider, but our default is to support the underlying insulin signaling first. Medication decisions are individualized.",
      },
    ],
  },
  {
    slug: "type-2-diabetes",
    name: "Type 2 Diabetes & Insulin Resistance",
    shortName: "Type 2 Diabetes",
    category: "Metabolic",
    tagline: "A diagnosis you can often improve — not just manage.",
    summary:
      "Pre-diabetes and Type 2 are not life sentences. They're communication: your body is asking for a different conversation about food, movement, and stress.",
    hero: {
      eyebrow: "Metabolic Care",
      title: "Type 2 Diabetes & Insulin Resistance",
      subtitle:
        "Insulin resistance can start years before diabetes shows up on a lab. We look for the pattern early, improve it where possible, and rebuild the metabolism underneath.",
    },
    whatItIs: [
      "Type 2 diabetes is the late stage of a metabolic conversation that started years earlier — often in your 20s or 30s — when your cells slowly stopped responding to insulin's signal to absorb glucose.",
      "Pre-diabetes is the same disease, just earlier. Calling it 'pre' is a polite way of saying 'still reversible.'",
      "Modern lifestyle (chronic carbohydrate exposure, fragmented sleep, sedentary work, persistent stress, inflammatory food, environmental toxins) drives the entire spectrum. Your genes load the gun; your environment pulls the trigger.",
    ],
    symptoms: [
      "Fasting glucose creeping up year over year",
      "Energy crashes after meals, brain fog, mid-afternoon slumps",
      "Strong sugar or carb cravings",
      "Stubborn weight gain — especially around the midsection",
      "Skin tags, dark velvety patches on neck/armpits (acanthosis nigricans)",
      "Slow-healing cuts, frequent infections",
      "Tingling or numbness in hands or feet",
      "Frequent urination, especially at night",
    ],
    conventional: {
      intro:
        "The standard playbook is metformin → more meds → eventually insulin. Patients are told to 'manage' diabetes, with the unspoken assumption that progression is inevitable. It isn't.",
      misses: [
        "Fasting insulin and HOMA-IR are rarely measured — so insulin resistance can be missed for a decade.",
        "Continuous glucose monitoring is only offered after diagnosis, when it's most powerful for prevention.",
        "Standard 'diabetic diet' guidance is often outdated and doesn't account for metabolic individuality.",
        "Liver function (ALT, GGT) and visceral fat — both directly tied to insulin resistance — are frequently overlooked.",
        "Sleep apnea, a major driver of insulin resistance, is rarely screened.",
      ],
    },
    functional: {
      intro:
        "We work with you the way a coach and a clinician would together — not just running labs but helping you actually change the pattern.",
      approach: [
        "Personalized low-glycemic, protein-forward nutrition with carb timing",
        "Resistance training + zone 2 cardio: the most powerful insulin-sensitizing combination known",
        "Sleep optimization (often the hidden lever)",
        "Stress regulation (cortisol drives gluconeogenesis)",
        "Supplement options such as berberine, alpha-lipoic acid, chromium, magnesium glycinate, or inositol when clinically appropriate",
        "Co-management with your PCP/endocrinologist on medication tapering as appropriate",
      ],
    },
    whatToExpect: [
      "Many patients see CGM patterns improve before HbA1c changes. HbA1c reflects roughly 3 months of blood sugar, so longer trends matter.",
      "By month 6, some pre-diabetic and early Type 2 patients see major improvement. Medication changes or remission decisions must happen with the prescribing clinician.",
      "Long-standing or insulin-dependent diabetes is more complex. The focus is safer blood sugar patterns, better energy, lower risk, and coordinated medical care.",
    ],
    testimonial: {
      name: "David M.",
      detail: "52 · Pre-diabetes for 6 years",
      quote:
        "My doctor said 'wait until you need metformin.' Megha showed me my insulin numbers — which nobody had ever ordered — and we built a real plan. My A1C went from 6.1 to 5.3. I'm not on a single medication.",
    },
  },

  // ────────────────────────────────────────── HORMONAL
  {
    slug: "thyroid",
    name: "Thyroid Issues",
    category: "Hormonal",
    tagline: "Brain fog, weight, fatigue — even when 'TSH is normal.'",
    summary:
      "90% of hypothyroidism in the U.S. is autoimmune (Hashimoto's). Standard care runs one number. We run nine — and treat the cause, not just the prescription.",
    hero: {
      eyebrow: "Hormonal Care",
      title: "Thyroid issues",
      subtitle:
        "If you're tired, gaining weight, losing hair, or fogged in — and you've been told your thyroid is fine — there's almost certainly more to the story.",
    },
    whatItIs: [
      "Your thyroid is a tiny gland that touches almost every cell in your body. It governs energy production, body temperature, metabolism, mood, hair, skin, digestion, and cognition.",
      "When something is off, the symptoms aren't subtle: brain fog, weight gain, hair thinning, cold hands and feet, exhaustion that sleep doesn't fix, low mood, dry skin, constipation, irregular cycles.",
      "Yet most patients with these symptoms are sent home with a 'normal' TSH and no further investigation. The reality is that TSH alone is one of the worst single screens for real thyroid dysfunction.",
    ],
    symptoms: [
      "Fatigue that sleep doesn't resolve",
      "Brain fog, slow recall, depression",
      "Weight gain or inability to lose weight",
      "Hair thinning (especially the outer third of eyebrows)",
      "Cold hands, cold feet, low body temperature",
      "Dry skin, brittle nails",
      "Constipation",
      "Heavy or irregular periods",
      "Puffy face, especially in the morning",
      "Joint or muscle aches without injury",
    ],
    conventional: {
      intro:
        "Conventional thyroid care is a textbook case of testing-too-narrow and treating-too-late. Most patients suffer for years before being taken seriously.",
      misses: [
        "TSH alone is run — but TSH can lag months behind real thyroid function.",
        "Free T3 (the active hormone) is rarely measured. You can have plenty of T4 and not be converting it.",
        "Reverse T3 (a brake on metabolism) is virtually never tested in conventional care.",
        "TPO and TG antibodies are not screened — so Hashimoto's, the cause of 90%+ of hypothyroid cases in the U.S., goes unidentified.",
        "Cofactors required for thyroid hormone production and conversion (selenium, zinc, iron/ferritin, vitamin D, iodine) are not assessed.",
        "Gut health — where 20%+ of T4 → T3 conversion happens — is treated as unrelated.",
      ],
    },
    functional: {
      intro:
        "We treat the thyroid the way it actually works in your body: as part of a system, not a single number.",
      approach: [
        "Where appropriate, optimize medication (T4 only, T4/T3 combo, or natural desiccated thyroid) in coordination with your prescribing provider",
        "Address the autoimmune trigger: gluten elimination trial, gut healing, infection load, environmental toxins (fluoride, bromide, mold)",
        "Replete the cofactors your thyroid needs to make and convert hormone",
        "Calm the nervous system — chronic stress is one of the biggest thyroid suppressors",
        "Re-test at 8 and 12 weeks to confirm we're moving the right markers",
      ],
    },
    whatToExpect: [
      "Many patients feel meaningfully better within 4–6 weeks once cofactors are repleted and gut/stress are addressed — even before any medication change.",
      "If autoimmune patterns are involved, antibodies may begin to change over several months when triggers are identified and addressed. Response varies and should be monitored with your medical team.",
      "Long-term, the goal isn't just 'normal labs' — it's normal energy, weight, mood, hair, and cycle. Lab numbers should match how you feel.",
    ],
    testimonial: {
      name: "Anika R.",
      detail: "34 · Hashimoto's Thyroiditis",
      quote:
        "Three doctors said my thyroid was fine. Megha was the first person to actually look at the patterns. Three weeks in, I had answers. Three months in, I could think clearly again for the first time in years.",
    },
  },
  {
    slug: "female-hormones",
    name: "Female Hormones",
    category: "Hormonal",
    tagline: "PMS, PCOS, perimenopause, infertility — there's a fix beyond birth control.",
    summary:
      "Your hormones are the most exquisitely tuned communication system in your body. When they go out, the answer isn't to silence them — it's to listen.",
    hero: {
      eyebrow: "Hormonal Care",
      title: "Female hormones",
      subtitle:
        "Cycle issues, PMS, PCOS, infertility, perimenopause symptoms — these are all conversations your body is trying to have. We learn the language together.",
    },
    whatItIs: [
      "Female hormones don't act alone. Estrogen and progesterone are deeply influenced by cortisol, insulin, thyroid, gut microbiome, liver detoxification, and even how well you metabolize estrogen through specific liver pathways (the 2-OH, 4-OH, 16-OH pathways measurable on a DUTCH test).",
      "Hormonal symptoms — irregular cycles, painful periods, PMS, infertility, weight that won't move, perimenopausal mood swings, hot flashes — are the downstream signal of upstream imbalances.",
      "Birth control can mask the signal. It rarely fixes the source.",
    ],
    symptoms: [
      "Irregular, missing, or extremely heavy periods",
      "Painful periods, severe PMS",
      "PCOS: irregular cycles, acne, facial hair, weight gain",
      "Difficulty conceiving or recurrent miscarriage",
      "Perimenopausal hot flashes, sleep loss, mood shifts",
      "Migraines tied to your cycle",
      "Mid-cycle spotting, breast tenderness",
      "Persistent fatigue, brain fog, low libido",
    ],
    conventional: {
      intro:
        "The default treatment for almost every female hormonal complaint — from acne at 14 to perimenopausal fatigue at 45 — is the birth control pill. It's a tool, not an answer.",
      misses: [
        "Hormones are tested at random points in the cycle, not mapped against the cycle phase.",
        "Estrogen metabolism — the actual question of how your body is processing estrogen — is rarely investigated.",
        "PCOS is treated as a 'lifestyle' diagnosis without testing the metabolic and inflammatory drivers.",
        "Cortisol, insulin, and thyroid — all of which dramatically affect sex hormones — are usually treated as separate problems.",
        "Perimenopause is dismissed as 'normal aging' even when it's destroying quality of life.",
      ],
    },
    functional: {
      intro:
        "We map your hormones to your cycle, look at how you metabolize them, and treat the system — not just the symptom.",
      approach: [
        "Cycle-syncing nutrition (different macros and foods in follicular vs. luteal phases)",
        "Liver and gut support to clear estrogen properly",
        "PCOS-specific strategies that may include insulin sensitization and inflammation support",
        "Supplement options such as DIM, calcium-d-glucarate, B-complex, magnesium, or adaptogens when appropriate",
        "Stress regulation — cortisol steals from progesterone (the 'pregnenolone steal')",
        "When appropriate, bioidentical hormone support in coordination with your provider",
      ],
    },
    whatToExpect: [
      "Cycle changes may become visible within 1–3 cycles. Some patients see softer PMS, less pain, or more predictable cycles within 90 days.",
      "PCOS markers such as insulin and androgens may improve within 3–6 months with consistent work, though response varies.",
      "Perimenopausal symptoms may ease once cortisol, blood sugar, and nutrient status are stabilized — and hormone support, when warranted, should be coordinated with the prescribing provider.",
    ],
    testimonial: {
      name: "Priya S.",
      detail: "41 · PCOS & cycle migraines",
      quote:
        "I was put on birth control at 16 for acne. I was 38 before someone actually tested my hormones in a meaningful way. Six months with Pristine Functional Health and I have regular cycles for the first time in my life.",
    },
  },
  {
    slug: "male-hormones",
    name: "Male Hormones",
    category: "Hormonal",
    tagline: "Low energy, low drive, soft middle — testosterone is rarely the first domino.",
    summary:
      "Most men with low T have a fixable upstream problem: insulin resistance, sleep apnea, chronic stress, or nutrient depletion. We rebuild the foundation before we ever consider TRT.",
    hero: {
      eyebrow: "Hormonal Care",
      title: "Male hormones",
      subtitle:
        "Energy, drive, body composition, focus, mood — these are tied to a hormonal system that's far more responsive to lifestyle than most men have been told.",
    },
    whatItIs: [
      "Testosterone in men has dropped roughly 1% per year for the last several decades — not because of genes, but because of a shift in how we live: more body fat, more sedentary work, more chronic stress, more environmental endocrine disruptors, less sleep, less sunlight.",
      "Low T is a downstream symptom in most men. The upstream drivers — insulin resistance, cortisol dysregulation, sleep apnea, micronutrient depletion (zinc, magnesium, vitamin D) — are highly reversible.",
      "We're not against TRT. We're against TRT as the first conversation when the foundation hasn't been built.",
    ],
    symptoms: [
      "Persistent low energy, especially in the afternoon",
      "Low libido, erectile changes",
      "Loss of morning erections",
      "Stubborn belly fat, loss of muscle mass",
      "Brain fog, irritability, low motivation",
      "Poor recovery from workouts",
      "Disrupted sleep, especially with snoring",
      "Mood flatness or low-grade depression",
    ],
    conventional: {
      intro:
        "Conventional care for men is split: most PCPs minimize symptoms ('you're getting older'), or testosterone clinics jump straight to TRT without addressing the cause.",
      misses: [
        "Free testosterone, SHBG, estradiol, DHT, and LH/FSH are often skipped in favor of just total T.",
        "Insulin resistance, the single biggest driver of low T in men under 50, is rarely tested for.",
        "Sleep apnea — devastating to testosterone — goes undiagnosed for years.",
        "Micronutrient panels (zinc, magnesium, vitamin D) are not run.",
        "Environmental endocrine disruptors (BPA, phthalates, atrazine) are not on most clinicians' radar.",
      ],
    },
    functional: {
      intro:
        "We start with a comprehensive picture of your hormonal and metabolic system, then build the foundation. TRT, if needed, becomes far more effective on a body that's been prepared for it.",
      approach: [
        "Resistance training as primary metabolic and hormonal medicine",
        "Sleep optimization — non-negotiable, often the biggest single lever",
        "Insulin-sensitizing nutrition: protein-forward, blood-sugar-aware",
        "Reduce environmental load: water filtration, plastic exposure, personal care products",
        "Supplement options such as zinc, magnesium, vitamin D, ashwagandha, boron, or omega-3 based on labs, safety, and goals",
        "If TRT is appropriate after foundation is built, co-manage carefully with proper monitoring",
      ],
    },
    whatToExpect: [
      "Some men feel meaningfully different within 4–8 weeks: better energy, better sleep, sharper focus, or body composition shifts.",
      "Hormonal labs may improve within 3–6 months when foundation work is consistent.",
      "If TRT is the right tool, the body responds far better when it's been prepared. We don't push it; we don't refuse it. We do what your labs and your goals justify.",
    ],
  },

  // ────────────────────────────────────────── NEUROLOGICAL
  {
    slug: "migraines",
    name: "Migraines",
    category: "Neurological",
    tagline: "A migraine is a question your body is asking. Loudly.",
    summary:
      "Migraines are mitochondrial events with a long list of possible triggers. We map yours specifically — and prevention becomes dramatically more effective.",
    hero: {
      eyebrow: "Neurological Care",
      title: "Migraines",
      subtitle:
        "If you're stuck in the cycle of triptans and prevention drugs that almost-but-not-quite work, the missing piece is usually identifying what your migraine is actually responding to.",
    },
    whatItIs: [
      "Migraines aren't just 'bad headaches.' They're a complex neurological event involving mitochondrial energy failure, neurotransmitter shifts, inflammation, and vascular reactivity.",
      "Triggers vary dramatically person to person — hormones, blood sugar dips, food sensitivities (tyramine, MSG, aged cheeses, alcohol, artificial sweeteners), histamine, dehydration, sleep disruption, weather, magnesium status, and chronic stress can all play.",
      "Once you know your trigger pattern, prevention becomes precise instead of pharmaceutical guesswork.",
    ],
    symptoms: [
      "Throbbing, often one-sided headache",
      "Nausea, vomiting, light and sound sensitivity",
      "Visual aura (flashing lights, zigzag lines)",
      "Pre-migraine fatigue, food cravings, mood changes",
      "Post-migraine 'hangover' lasting 24+ hours",
      "Cyclical pattern (often around menses)",
      "Triggered by specific foods, smells, or weather",
    ],
    conventional: {
      intro:
        "The standard migraine playbook is acute relief (triptans), prevention drugs (topiramate, beta-blockers, CGRP inhibitors), and Botox. All useful tools — none of which address why your nervous system is reactive in the first place.",
      misses: [
        "Magnesium, riboflavin, and CoQ10 status — all directly tied to migraine — are not measured.",
        "Hormone-cycle correlation is not mapped.",
        "Food sensitivity testing or systematic elimination is rarely offered.",
        "Histamine intolerance and DAO deficiency aren't on most clinicians' radar.",
        "Mitochondrial function is treated as a black box.",
      ],
    },
    functional: {
      intro:
        "We treat migraines as a multi-trigger condition with a clear root-cause logic. Mapping your specific pattern is the work.",
      approach: [
        "Magnesium forms may be considered when appropriate",
        "Riboflavin (B2) and CoQ10 may be considered based on history, medications, and safety",
        "Hormone balancing for menstrual migraines",
        "Targeted elimination of identified food triggers (often histamine-rich, tyramine, alcohol)",
        "Blood sugar stability — often the simplest, most overlooked lever",
        "Stress and sleep regulation, vagal tone work",
      ],
    },
    whatToExpect: [
      "Some patients see migraine frequency change within 6–8 weeks once the right triggers are addressed.",
      "By month 3, many patients have a clearer trigger map and a more useful prevention strategy.",
      "The goal is not perfection — it's a life that isn't built around the next migraine.",
    ],
    testimonial: {
      name: "Priya S.",
      detail: "41 · Chronic migraines",
      quote:
        "Four to five migraines a week for almost a decade. I had tried every prescription. Megha tested for things nobody had — magnesium, histamine, hormones — and we mapped my triggers. I haven't had a migraine in 11 weeks. I cried writing this.",
    },
  },
  {
    slug: "neuropathy",
    name: "Neuropathy",
    category: "Neurological",
    tagline: "Numbness and burning aren't 'something to live with.'",
    summary:
      "Neuropathy has a cause. Diabetes, B12 deficiency, autoimmunity, toxins, mitochondrial dysfunction — finding it is the difference between symptom suppression and actual repair.",
    hero: {
      eyebrow: "Neurological Care",
      title: "Neuropathy",
      subtitle:
        "Numbness, burning, tingling, electric pain — peripheral nerve dysfunction is repairable far more often than you've been told. The work begins by identifying the cause.",
    },
    whatItIs: [
      "Peripheral neuropathy is damage or dysfunction of the small nerves that carry sensation from your hands and feet to your brain. It can be painful, numb, or both.",
      "The most common drivers are diabetes/insulin resistance, B12 deficiency, autoimmunity (small-fiber neuropathy), chemotherapy exposure, alcohol, hypothyroidism, heavy metals, mold/mycotoxin exposure, and chronic viral burden.",
      "Most cases respond to identifying and treating the upstream cause — even ones that have been there for years.",
    ],
    symptoms: [
      "Numbness or tingling in hands or feet",
      "Burning, electric, or stabbing sensations",
      "Loss of balance, sense of walking on clouds",
      "Sensitivity to cold or heat",
      "Worsening at night",
      "Muscle weakness in the affected area",
    ],
    conventional: {
      intro:
        "Conventional neuropathy care is dominated by symptom-suppression medications (gabapentin, pregabalin, duloxetine) — useful in the short term, but they don't address the underlying nerve damage.",
      misses: [
        "Methylmalonic acid (a more sensitive B12 test) is rarely run — serum B12 can look normal while you're functionally deficient.",
        "Glucose tolerance and fasting insulin are skipped despite diabetes being the most common cause.",
        "Autoimmune small-fiber neuropathy is rarely investigated.",
        "Heavy metal and mycotoxin testing is virtually never on the table.",
        "Mitochondrial nutrients (alpha-lipoic acid, acetyl-L-carnitine, benfotiamine) are rarely prescribed despite excellent evidence.",
      ],
    },
    functional: {
      intro:
        "We work backwards from the nerve to the cause. Protecting and repairing the nerve while we identify what's damaging it is a parallel process.",
      approach: [
        "Address the upstream cause aggressively (most often blood sugar or B12)",
        "Methylcobalamin B12 or methylated folate (5-MTHF) where appropriate",
        "Nerve-supportive nutrients such as alpha-lipoic acid, benfotiamine, acetyl-L-carnitine, or omega-3 when appropriate",
        "If autoimmune: immune modulation and AIP-style nutrition",
        "If toxic: gentle, staged detox with proper drainage",
        "Movement, vibration therapy, infrared sauna where tolerated",
      ],
    },
    whatToExpect: [
      "When the cause is B12 or blood sugar, improvement may begin within weeks. Long-standing nerve damage takes longer — often months — and response varies.",
      "Pain may improve before numbness. Some sensation loss may be permanent if damage is advanced; quality-of-life goals are individualized.",
      "Patients with chemotherapy-induced neuropathy often see meaningful relief with mitochondrial support, even years after treatment.",
    ],
  },

  // ────────────────────────────────────────── MENTAL HEALTH
  {
    slug: "anxiety",
    name: "Anxiety",
    category: "Mental Health",
    tagline: "Sometimes anxiety is psychological. Often, it's biochemical.",
    summary:
      "Treating only the mind misses half of you. Blood sugar, gut, methylation, cortisol, thyroid — all directly drive anxiety. We address both halves.",
    hero: {
      eyebrow: "Mental Health",
      title: "Anxiety",
      subtitle:
        "Therapy still matters. So does whether your nervous system is being chronically inflamed by your gut, your blood sugar, or a methylation pathway that isn't working.",
    },
    whatItIs: [
      "Anxiety has a psychological component, a physiological component, and almost always both. The biochemistry is real — and it's far more addressable than most people have been told.",
      "Common biochemical drivers: blood sugar swings (hypoglycemia is one of the fastest paths to a panic response), gut dysbiosis (90% of serotonin is made in the gut), methylation pathway dysfunction (especially MTHFR and MTRR), magnesium and B-vitamin depletion, chronic cortisol dysregulation, thyroid dysfunction, and chronic inflammation.",
      "When physiology is calm, the mind has more room to do its work in therapy. Both matter.",
    ],
    symptoms: [
      "Persistent worry that feels disproportionate",
      "Panic attacks or near-panic states",
      "Racing thoughts, especially at 2–4 a.m.",
      "Physical tension: chest tightness, jaw clenching, shoulders",
      "Digestive upset tied to stress",
      "Feeling 'tired but wired'",
      "Sensitivity to caffeine or stimulants",
      "Irritability, low frustration tolerance",
    ],
    conventional: {
      intro:
        "SSRIs and benzodiazepines are useful for many people. They are also frequently prescribed without any investigation of the biochemical drivers that may be lighting the fire underneath.",
      misses: [
        "Blood sugar testing is not connected to mood symptoms.",
        "Methylation testing is rarely offered.",
        "Gut dysbiosis is not investigated as a cause of anxiety.",
        "Magnesium, B6, B12, folate status — all directly tied to GABA and serotonin production — are skipped.",
        "Thyroid antibodies, cortisol patterns — not on most psychiatric workups.",
      ],
    },
    functional: {
      intro:
        "We work alongside your therapist or psychiatrist — never against. The goal is to make their work more effective by calming the body underneath.",
      approach: [
        "Blood sugar stabilization (often dramatic for panic-prone patients)",
        "Magnesium glycinate, taurine, or L-theanine may be considered for nervous-system support",
        "Methylated B-vitamins where indicated and tolerated",
        "Gut healing — often a major lever",
        "Adaptogens (ashwagandha, rhodiola) to recalibrate the stress response",
        "Vagal tone work, breathwork, sleep regulation",
        "Co-care with your therapist or psychiatrist",
      ],
    },
    whatToExpect: [
      "Some patients feel meaningfully calmer within 2–4 weeks once blood sugar and minerals are stabilized.",
      "Deeper work (methylation, gut, hormones) takes 3–6 months but often produces a profound sense of 'my body finally feels safe.'",
      "Goal: reducing reliance on rescue medications, deepening therapy work, and feeling like yourself again.",
    ],
    testimonial: {
      name: "Jordan K.",
      detail: "29 · Anxiety & gut symptoms",
      quote:
        "I was told my anxiety was just life. What it actually was: blood sugar swings, gut inflammation, and a B-vitamin pathway that wasn't working. I still go to therapy — but my body finally feels safe. That changed everything.",
    },
  },
  {
    slug: "adhd",
    name: "ADHD",
    category: "Mental Health",
    tagline: "Focus and motivation are deeply biochemical — not just dopamine.",
    summary:
      "Blood sugar, iron, omega-3s, methylation, gut — all directly affect attention and impulse control. We build the biological foundation that makes everything else (medication, behavior, environment) work better.",
    hero: {
      eyebrow: "Mental Health",
      title: "ADHD",
      subtitle:
        "Whether you're medicated or not, the underlying biology of attention is highly addressable — and most people have never had it looked at.",
    },
    whatItIs: [
      "ADHD has clear neurobiological roots. But day-to-day function is also profoundly affected by blood sugar regulation, iron status (ferritin <30 is associated with worse ADHD symptoms), omega-3 status, methylation pathways, food sensitivities (especially gluten, dairy, artificial dyes for some), and gut microbiome health.",
      "Functional medicine doesn't replace ADHD medication or treatment. It builds the biological foundation that makes whatever you choose to do — meds, behavioral strategies, environmental design — more effective.",
      "Many adults discover that with the foundation in place, their medication works better at lower doses, or that they feel functional on bad days when they previously didn't.",
    ],
    symptoms: [
      "Difficulty sustaining attention on non-preferred tasks",
      "Restlessness, hyperfocus on novelty",
      "Time blindness, chronic lateness",
      "Emotional reactivity, rejection sensitivity",
      "Sleep onset difficulty (racing brain at bedtime)",
      "Sugar/carb cravings (often used for dopamine)",
      "Strong response to caffeine or stimulants",
      "History of injury, impulsivity, executive dysfunction",
    ],
    conventional: {
      intro:
        "Stimulant medication (Adderall, Vyvanse, Concerta) and non-stimulants (Strattera, Wellbutrin) can be life-changing tools. They also rarely come with a discussion of the biological factors that affect how well they work.",
      misses: [
        "Ferritin is rarely measured despite a clear link to ADHD symptoms.",
        "Methylation testing (MTHFR/MTRR) — not on standard workups.",
        "Omega-3 index — almost never run.",
        "Food sensitivity work — generally dismissed.",
        "Gut microbiome — treated as unrelated.",
      ],
    },
    functional: {
      intro:
        "We map the biology under your ADHD and address the parts that respond. We do not replace treatment with your psychiatrist — we partner with it.",
      approach: [
        "Protein-forward breakfast (often the biggest single lever for adult ADHD)",
        "Omega-3 (high EPA), magnesium glycinate, methylated B-vitamins where indicated",
        "Iron repletion if ferritin is low",
        "Gut healing if dysbiosis is contributing",
        "Sleep optimization — often the secret weapon",
        "Co-management with your prescribing provider on medication tuning",
      ],
    },
    whatToExpect: [
      "Many adults notice clearer focus and steadier mood within 2–4 weeks once basics (protein, omega-3, sleep, mineral status) are addressed.",
      "Deeper changes (methylation, gut) take 3–6 months and often produce a different baseline — patients describe feeling like themselves with the volume turned down on the chaos.",
      "Goal: not curing ADHD, but creating a body that supports the brain you have.",
    ],
  },
  {
    slug: "depression",
    name: "Depression",
    category: "Mental Health",
    tagline: "Low mood can be mental, metabolic, inflammatory, hormonal — and often all of it.",
    summary:
      "Depression is real mental health care territory. We support the physiology underneath mood: blood sugar, thyroid, inflammation, sleep, nutrients, gut health, hormones, and stress biology.",
    hero: {
      eyebrow: "Mental Health",
      title: "Depression support",
      subtitle:
        "When mood, motivation, sleep, appetite, and energy are all affected, the body deserves to be part of the conversation too.",
    },
    whatItIs: [
      "Depression is not a character flaw or a lack of discipline. It is a serious mood condition that can affect emotion, motivation, sleep, appetite, cognition, libido, pain sensitivity, and the ability to function in daily life.",
      "Functional health support does not replace therapy, psychiatry, medication, or urgent mental health care. It asks a complementary question: what body systems may be making depression harder to recover from?",
      "Common physiological contributors include thyroid dysfunction, blood sugar instability, chronic inflammation, gut dysbiosis, nutrient depletion, low iron or B12, vitamin D insufficiency, hormonal shifts, poor sleep architecture, alcohol use, chronic stress, and medication side effects.",
    ],
    symptoms: [
      "Persistent low mood, emptiness, or emotional numbness",
      "Loss of interest or pleasure in things that used to matter",
      "Low motivation, slowed thinking, or difficulty making decisions",
      "Sleep changes: insomnia, early waking, or sleeping too much",
      "Appetite or weight changes",
      "Fatigue that feels heavier than ordinary tiredness",
      "Irritability, withdrawal, guilt, or hopelessness",
      "Body symptoms: headaches, digestive issues, pain, or low libido",
    ],
    conventional: {
      intro:
        "Therapy and medication can be essential and life-changing. The gap is that many people receive mood support without anyone asking why their body feels inflamed, depleted, exhausted, or metabolically unstable.",
      misses: [
        "Thyroid patterns, iron status, B12, folate, vitamin D, magnesium, and omega-3 status are often underexplored.",
        "Blood sugar swings can look like anxiety, irritability, fatigue, and low motivation but rarely get connected to mood.",
        "Gut inflammation and microbiome disruption are treated as unrelated to mental health symptoms.",
        "Hormonal transitions — postpartum, perimenopause, menopause, and low testosterone — may be minimized.",
        "Sleep apnea, circadian disruption, alcohol use, and medication side effects may not be investigated deeply enough.",
      ],
    },
    functional: {
      intro:
        "We work alongside your therapist, psychiatrist, or prescribing provider. Our role is to help remove physiological drag so mental health treatment has a stronger foundation.",
      approach: [
        "Stabilize blood sugar with protein-forward meals, strategic carbohydrates, and meal timing",
        "Support sleep rhythm, morning light exposure, evening wind-down, and consistent wake times",
        "Replete common mood-linked nutrients when indicated and safe: magnesium, B vitamins, omega-3s, iron, vitamin D, zinc",
        "Address thyroid, hormone, and cortisol patterns that can mimic or worsen depression",
        "Reduce inflammatory load through gut repair, food sensitivity work, and anti-inflammatory nutrition",
        "Coordinate with mental health professionals and never advise medication changes outside their care",
      ],
    },
    whatToExpect: [
      "Many patients first notice more stable energy, fewer crashes, better sleep, or a little more capacity before mood fully shifts.",
      "Nutrient, gut, thyroid, and hormone work may take 8–16 weeks to show meaningful patterns, with deeper rebuilding over 3–6 months.",
      "If depression is severe, includes suicidal thoughts, or interferes with safety, urgent mental health care comes first. Call 911 or 988 in the United States if you feel unsafe.",
    ],
    faqs: [
      {
        q: "Do you replace therapy or medication?",
        a: "No. We support the physiology that can influence mood, but depression care should include a licensed mental health professional when symptoms are persistent, severe, or unsafe.",
      },
      {
        q: "Can nutrition really affect depression?",
        a: "Nutrition cannot replace mental health care, but blood sugar, nutrients, inflammation, sleep, gut health, and hormones all influence mood biology. We address those levers carefully.",
      },
    ],
  },

  // ────────────────────────────────────────── GUT
  {
    slug: "gut-dysfunction",
    name: "Gut Dysfunction",
    category: "Gut",
    tagline: "If we don't fix the gut, we don't fix much else.",
    summary:
      "IBS, SIBO, bloating, reflux, constipation, leaky gut — and the long shadow they cast over mood, skin, hormones, and immunity. We test, we don't guess.",
    hero: {
      eyebrow: "Gut Care",
      title: "Gut dysfunction",
      subtitle:
        "Almost every chronic condition has a gut chapter. When appropriate, we use clinical-grade testing and a structured 5R framework to understand and support yours.",
    },
    whatItIs: [
      "Your gut is more than a tube. It contains 70% of your immune system, makes 90% of your serotonin, regulates hormonal signaling, and forms the barrier between the outside world and your bloodstream.",
      "When the gut is dysregulated, the symptoms are rarely confined to digestion. Skin, mood, hormones, autoimmunity, weight, and energy can all carry the signal.",
      "Common gut presentations include: SIBO (small intestinal bacterial overgrowth), dysbiosis, leaky gut (intestinal hyperpermeability), low stomach acid, biliary dysfunction, candida overgrowth, parasites, and IBD.",
    ],
    symptoms: [
      "Bloating after meals",
      "Gas, belching, reflux",
      "Constipation or diarrhea (or alternating)",
      "Food reactions you can't pin down",
      "Brain fog, especially after meals",
      "Skin issues: acne, eczema, rosacea",
      "Recurring sinus or yeast infections",
      "Joint pain without injury",
    ],
    conventional: {
      intro:
        "GI care is often a tour through symptom suppression: PPIs for reflux, antispasmodics for IBS, fiber for constipation. The actual gut ecology is rarely investigated.",
      misses: [
        "Stool testing in conventional care looks for infection only — not microbiome composition, digestive markers, or inflammation.",
        "SIBO breath tests are not standard.",
        "Stomach acid is often suppressed when low acid is more common than high acid.",
        "Food sensitivity work, intestinal permeability, and the gut-immune-brain connections are not addressed.",
      ],
    },
    functional: {
      intro:
        "We may use the 5R framework — a structured, sequential model that has been part of functional gut care for 20+ years.",
      approach: [
        "Remove: possible pathogens, food triggers, or irritants when identified",
        "Replace: digestive enzymes, HCl support if needed, or bile support when appropriate",
        "Reinoculate: targeted probiotics or prebiotics matched to your microbiome when useful",
        "Repair: gut-supportive nutrients or botanicals when appropriate",
        "Rebalance: stress regulation, sleep, mindful eating, vagal tone",
      ],
    },
    whatToExpect: [
      "Some patients feel better within 2–4 weeks of starting the right plan — bloating, energy, and mood are often the first to shift.",
      "A complete gut-rebuild may take 3–6 months. SIBO and complex dysbiosis can take longer.",
      "The goal isn't a perfect gut — it's a resilient one that handles real life without flaring.",
    ],
  },
  {
    slug: "food-sensitivities",
    name: "Food Sensitivities",
    category: "Gut",
    tagline: "Your food is talking to you. We help you finally hear it.",
    summary:
      "Food sensitivities aren't allergies — they're delayed, often cumulative reactions that drive bloating, brain fog, joint pain, skin issues, and fatigue. We give you a clear map.",
    hero: {
      eyebrow: "Gut Care",
      title: "Food sensitivities",
      subtitle:
        "Endless elimination diets are exhausting and rarely work. A structured, testing-informed approach finds your true triggers in weeks — not years.",
    },
    whatItIs: [
      "Food sensitivities are different from IgE-mediated allergies (which cause hives, anaphylaxis). Sensitivities tend to be IgG-mediated, delayed (24–72 hours), and cumulative.",
      "Common categories: gluten / non-celiac gluten sensitivity, dairy, eggs, soy, corn, nightshades, histamine intolerance, salicylate sensitivity, oxalates, and FODMAPs.",
      "Many sensitivities are downstream of leaky gut, so simply eliminating foods without healing the gut barrier creates a moving target. We address both.",
    ],
    symptoms: [
      "Bloating, gas, fullness after meals",
      "Brain fog or fatigue 2–24 hours after eating",
      "Headaches or migraines tied to food",
      "Skin: acne, eczema, hives, rosacea",
      "Joint or muscle pain without injury",
      "Mood shifts (irritability, anxiety) post-meal",
      "Sinus congestion, post-nasal drip",
      "Dark circles, puffiness in the morning",
    ],
    conventional: {
      intro:
        "Conventional medicine generally only recognizes IgE allergies and celiac disease — leaving most food-sensitivity sufferers told that 'food can't do that.' It can.",
      misses: [
        "IgG and delayed-reaction testing is dismissed without nuance.",
        "Histamine intolerance, DAO enzyme deficiency — rarely on the table.",
        "Intestinal permeability isn't tested, so the upstream cause stays in place.",
        "FODMAP and fermentable-carbohydrate frameworks are underused.",
      ],
    },
    functional: {
      intro:
        "We may use testing as a guide and elimination/reintroduction as a practical confirmation tool. The work should be precise and time-limited — not lifelong restriction.",
      approach: [
        "30–60 day strategic elimination based on testing and history when appropriate",
        "Systematic reintroduction (one food every 3 days) to identify true reactors",
        "Gut barrier repair to reduce future sensitivities",
        "Digestive support (HCl, enzymes, bile)",
        "Stress and vagal tone work — digestion runs on the parasympathetic nervous system",
      ],
    },
    whatToExpect: [
      "Some patients feel dramatically better within 2 weeks of strategic elimination, while others need deeper gut or immune work.",
      "Reintroduction takes another 4–8 weeks but produces a clear, personal map.",
      "Goal: the smallest possible long-term elimination, not the biggest. Most people end up with a short list of true reactors and a far wider tolerable diet than they expected.",
    ],
  },

  // ────────────────────────────────────────── IMMUNE
  {
    slug: "autoimmune",
    name: "Autoimmune Conditions",
    category: "Immune",
    tagline: "Your immune system isn't broken. It's confused.",
    summary:
      "Hashimoto's, RA, psoriasis, lupus, MS, IBD — different labels, similar triad of triggers. We work the triggers, calm the system, and reduce flares at the source.",
    hero: {
      eyebrow: "Immune Care",
      title: "Autoimmune conditions",
      subtitle:
        "1 in 5 Americans has an autoimmune diagnosis. Conventional care manages the fire. Functional medicine works on what keeps lighting it.",
    },
    whatItIs: [
      "Autoimmune conditions involve a confused immune system attacking healthy tissue. The 'autoimmune triad' (Datis Kharrazian and Tom O'Bryan) describes three components present in nearly every case: genetic predisposition, an environmental trigger, and intestinal permeability (leaky gut).",
      "You can't change your genes. You can change the trigger and you can heal the gut.",
      "Common triggers: gluten, dairy, persistent infections (EBV, H. pylori, Lyme, mold), heavy metals, environmental toxins, chronic stress, and disrupted sleep.",
    ],
    symptoms: [
      "Fatigue out of proportion to activity",
      "Joint pain, stiffness (often migratory)",
      "Skin: rashes, psoriasis, eczema",
      "Hair loss",
      "Cognitive symptoms: brain fog, memory issues",
      "Cyclical flares triggered by stress, food, illness",
      "Multiple seemingly unrelated diagnoses",
      "Family history of autoimmunity",
    ],
    conventional: {
      intro:
        "Conventional rheumatology and specialty care are essential and lifesaving for many — particularly with biologics. They are also generally focused on suppressing the immune response rather than calming what's provoking it.",
      misses: [
        "Triggers (food, infections, toxins) are rarely systematically investigated.",
        "Intestinal permeability is not tested.",
        "Gluten cross-reactivity panels — almost never run.",
        "Mold/mycotoxin and heavy metal exposures — rarely on the workup.",
        "Co-care between rheumatology and lifestyle/nutrition is uncommon.",
      ],
    },
    functional: {
      intro:
        "We work alongside your rheumatologist or specialty care team. Our job is to address the triggers and the terrain — not replace specialty medication, but make it less necessary.",
      approach: [
        "Autoimmune Protocol (AIP) or another structured elimination when appropriate",
        "Gut barrier support using a 5R-style framework when appropriate",
        "Address infections and toxic load systematically",
        "Stress regulation — chronic stress is one of the most reliable flare triggers",
        "Supplement options such as vitamin D, omega-3, glutathione precursors, curcumin, or resveratrol when appropriate",
        "Co-care with your rheumatologist or specialty provider",
      ],
    },
    whatToExpect: [
      "Some patients see fewer, milder, shorter flares within 90 days.",
      "Antibody levels may drop measurably within 3–6 months when triggers are identified and addressed.",
      "Some patients reduce medications only under medical supervision; others stay on them but feel better supported. The win is a life that is less centered on your disease.",
    ],
    testimonial: {
      name: "Rina P.",
      detail: "47 · Multiple autoimmune conditions",
      quote:
        "I'm a physician myself. I knew the system wasn't going to find what was wrong with me — I'd been trained in it. Working with Megha was the first time someone treated me like a whole human. I send patients to her now.",
    },
  },
  {
    slug: "toxicity",
    name: "Toxicity & Heavy Metals",
    shortName: "Toxicity",
    category: "Immune",
    tagline: "Mold, metals, plastics — quiet drivers of fatigue, autoimmunity, and brain symptoms.",
    summary:
      "Environmental toxins can be an under-investigated contributor to chronic symptoms. When appropriate, we evaluate exposure patterns and support elimination carefully — never aggressively.",
    hero: {
      eyebrow: "Immune Care",
      title: "Toxicity & heavy metals",
      subtitle:
        "Mold biotoxin illness (CIRS), heavy metal burden, and environmental load drive symptoms that mimic chronic fatigue, autoimmunity, neurological disease, and unexplained anxiety.",
    },
    whatItIs: [
      "Modern bodies carry an environmental load that previous generations did not: indoor mold and mycotoxins from water-damaged buildings, heavy metals (mercury, lead, cadmium, arsenic), plasticizers (BPA, phthalates), pesticides (glyphosate, atrazine), flame retardants, and forever chemicals (PFAS).",
      "For some people, the load is the dominant driver of unexplained chronic symptoms — particularly fatigue, brain fog, anxiety, neuropathy, weight gain, and autoimmune presentations.",
      "Detoxification is a real, measurable physiological process — and it can be supported. It must also be approached carefully: aggressive detox in a body whose drainage pathways are clogged makes everything worse.",
    ],
    symptoms: [
      "Unexplained fatigue (often chronic and refractory)",
      "Brain fog, memory issues, word-finding difficulty",
      "Anxiety with no clear psychological driver",
      "Weight gain or weight loss resistance",
      "Sinus issues, recurring infections",
      "Tingling, neuropathy, tremor",
      "Histamine reactions: hives, flushing, food intolerance",
      "Worsening symptoms in specific buildings or after specific exposures",
    ],
    conventional: {
      intro:
        "Conventional medicine generally does not test for environmental toxin load unless there has been an acute, identifiable poisoning event. For chronic low-grade exposure, the conversation often doesn't happen at all.",
      misses: [
        "Urine mycotoxin testing (Real Time Labs, Vibrant) is virtually unknown in conventional care.",
        "Indoor environment investigation (HERTSMI-2, ERMI) — not part of any standard workup.",
        "Heavy metal urine challenge testing — controversial in conventional care, standard in functional.",
        "Drainage pathway support before detox — not on the radar.",
        "MARCoNS, VIP, MSH, and other CIRS markers — rarely tested.",
      ],
    },
    functional: {
      intro:
        "We follow a careful order of operations: identify likely sources, support elimination pathways, then consider body-burden reduction only when appropriate.",
      approach: [
        "Source identification and reduction where possible",
        "Elimination-pathway support: bowel, bile, lymph, kidneys, skin",
        "Binders or prescription options only when clinically appropriate and properly supervised",
        "Glutathione, NAC, sulforaphane, or other phase II support when appropriate",
        "Sauna, dry brushing, hydration, or gentle movement where tolerated",
        "Antifungals or other therapies only if clinically indicated and properly sequenced",
      ],
    },
    whatToExpect: [
      "Initial improvements may appear within 4–8 weeks once elimination pathways are supported and likely sources are reduced.",
      "Full mold or heavy metal support can take 6–18 months when appropriate. Going faster than the body can handle is the most common mistake.",
      "The goal is a measurable reduction in body burden plus restored function — not 'clean labs' as an end in itself.",
    ],
  },

  // ────────────────────────────────────────── BONE HEALTH
  {
    slug: "osteoporosis",
    name: "Osteoporosis",
    category: "Bone Health",
    tagline: "Fragile bones are not just a calcium problem.",
    summary:
      "Osteoporosis means bone density and bone quality have dropped enough to raise fracture risk. We look at minerals, hormones, inflammation, digestion, strength, balance, and medication history.",
    hero: {
      eyebrow: "Bone Health",
      title: "Osteoporosis",
      subtitle:
        "Bone loss is a whole-body signal. The goal is not only a better scan — it is fewer falls, stronger muscle, better mineral status, and a lower fracture risk.",
    },
    whatItIs: [
      "Osteoporosis develops when bone mineral density, bone mass, or bone structure declines enough to weaken the skeleton. Many people do not know it is happening until a DEXA scan or a fracture reveals it.",
      "The most common story is postmenopausal bone loss, but osteoporosis also affects men, people with thyroid or parathyroid issues, chronic digestive problems, inflammatory disease, eating disorders, low body weight, steroid exposure, smoking history, heavy alcohol use, or long-term medication patterns that affect bone.",
      "Functional bone care is about the full terrain: calcium and vitamin D, yes — but also protein, magnesium, vitamin K2, sex hormones, cortisol, digestion, inflammation, muscle strength, balance, and fall prevention.",
    ],
    symptoms: [
      "Low bone density or osteoporosis on DEXA scan",
      "History of low-trauma fracture",
      "Height loss or posture changes",
      "Back pain or concern for vertebral compression",
      "Small frame, low body weight, or unintended weight loss",
      "Early menopause, irregular cycles, or low sex hormones",
      "Long-term steroid, PPI, SSRI, seizure medication, or aromatase inhibitor use",
      "Fear of falling, weakness, or declining balance",
    ],
    conventional: {
      intro:
        "Conventional osteoporosis care often starts with a DEXA score, calcium, vitamin D, and medication discussion. That matters, but it may not explain why bone loss accelerated in the first place.",
      misses: [
        "Protein intake, digestion, mineral absorption, and stomach acid are often overlooked.",
        "Thyroid, parathyroid, cortisol, estrogen, progesterone, and testosterone patterns may not be connected to bone loss.",
        "Inflammation, autoimmune disease, celiac risk, and gut health can quietly affect bone remodeling.",
        "Strength, balance, fall risk, and safe progressive loading are under-prescribed.",
        "Medication history is not always reviewed through a bone-health lens.",
      ],
    },
    functional: {
      intro:
        "We build a bone-strength plan around the reason your bones are losing density, not just the score on the scan.",
      approach: [
        "Protein-forward nutrition with calcium-rich foods and mineral sufficiency",
        "Vitamin D, magnesium, vitamin K2, boron, zinc, and omega-3 support when appropriate",
        "Progressive resistance training, weight-bearing movement, posture work, and balance training",
        "Digestive support to improve mineral and protein absorption",
        "Hormone, thyroid, stress, and inflammation patterns addressed in coordination with your care team",
        "Medication and supplement review so bone-supportive choices can be discussed in the context of your full health picture",
      ],
    },
    whatToExpect: [
      "In the first month, the focus is usually nutrition, fall-risk reduction, strength basics, and making sure your plan is safe for your current fracture risk.",
      "Bone remodeling is slow. Meaningful DEXA changes often take 12–24 months, but strength, balance, confidence, and nutrient status may improve much sooner.",
      "Patients with osteoporosis should remain connected to their licensed medical provider for DEXA monitoring, fracture evaluation, and medication decisions.",
    ],
  },
  {
    slug: "osteopenia",
    name: "Osteopenia",
    category: "Bone Health",
    tagline: "The warning light before osteoporosis deserves a real plan.",
    summary:
      "Osteopenia means bone density is below expected range but not yet osteoporosis. It is the ideal window to act on nutrition, hormones, digestion, strength, balance, and inflammation.",
    hero: {
      eyebrow: "Bone Health",
      title: "Osteopenia",
      subtitle:
        "Osteopenia is not a reason to panic. It is a reason to stop guessing and build the habits and biology that protect bone over time.",
    },
    whatItIs: [
      "Osteopenia is lower-than-normal bone density that has not crossed the threshold for osteoporosis. It can be stable for years, improve, or progress depending on the signals your bones receive.",
      "The key question is trajectory: are you losing bone quickly, holding steady, or rebuilding? That depends on hormones, protein intake, mineral status, vitamin D, gut absorption, inflammation, medications, activity, and fall risk.",
      "Functional support aims to catch the pattern early — before the first fracture, before fear takes over, and before bone loss becomes harder to reverse.",
    ],
    symptoms: [
      "Osteopenia on DEXA scan",
      "Family history of osteoporosis or hip fracture",
      "Perimenopause, menopause, or cycle changes",
      "Low protein intake, dieting history, or low appetite",
      "Digestive issues that may affect nutrient absorption",
      "Low vitamin D or low mineral intake",
      "Sedentary routine or fear of strength training",
      "History of falls, poor balance, or low muscle mass",
    ],
    conventional: {
      intro:
        "Osteopenia is often handled with 'take calcium and vitamin D, then recheck later.' That advice can be useful, but it is rarely enough for a person losing bone for multiple reasons.",
      misses: [
        "The rate of bone loss and full fracture-risk picture may not be explained clearly.",
        "Muscle mass, balance, gait, and progressive loading are often treated as optional instead of central.",
        "Protein and mineral absorption are rarely assessed.",
        "Perimenopause and menopause hormone shifts may be discussed too late.",
        "Inflammation, gut issues, thyroid patterns, and medication history may not be connected.",
      ],
    },
    functional: {
      intro:
        "We use osteopenia as a prevention window: strengthen the terrain now so osteoporosis is not the assumed next chapter.",
      approach: [
        "Nutrition blueprint focused on protein, calcium-rich foods, minerals, and blood-sugar stability",
        "Vitamin D and mineral strategy individualized to your intake, labs, and history",
        "Progressive strength training and impact or weight-bearing work scaled to your current ability",
        "Balance, posture, and fall-prevention practices built into weekly routines",
        "Digestive and inflammatory drivers addressed when nutrient absorption looks compromised",
        "Co-care with your medical provider for DEXA timing and medication conversations if risk changes",
      ],
    },
    whatToExpect: [
      "Most people feel stronger and more confident before a scan changes. That is still meaningful because falls and frailty drive fracture risk.",
      "Osteopenia work is usually a 6–12 month foundation project, with DEXA trends monitored over a longer timeline.",
      "The goal is to turn osteopenia into a clear, sustainable prevention plan — not a vague or automatic supplement routine.",
    ],
  },
  {
    slug: "arthritis",
    name: "Arthritis",
    category: "Bone Health",
    tagline: "Joint pain is a signal. The type of signal matters.",
    summary:
      "Arthritis is an umbrella term for joint pain and inflammation, from osteoarthritis to autoimmune arthritis. We focus on inflammation, metabolic health, muscle support, gut triggers, and movement tolerance.",
    hero: {
      eyebrow: "Bone Health",
      title: "Arthritis",
      subtitle:
        "Stiff, swollen, painful joints can come from wear-and-tear, immune activation, old injuries, metabolic inflammation, or all of the above. We help sort the pattern.",
    },
    whatItIs: [
      "Arthritis is not one condition. Osteoarthritis, rheumatoid arthritis, psoriatic arthritis, gout, lupus-related joint pain, and post-injury joint degeneration all need different medical evaluation and different support strategies.",
      "Functional care does not replace rheumatology, imaging, or medication when needed. It addresses the terrain that can make joints more inflamed: blood sugar, weight load, gut health, food reactions, nutrient status, sleep, stress, toxin exposure, and movement patterns.",
      "The goal is less pain, better mobility, fewer flares, stronger surrounding muscle, and a clearer understanding of what your joints are reacting to.",
    ],
    symptoms: [
      "Joint pain, aching, swelling, or warmth",
      "Morning stiffness or stiffness after sitting",
      "Reduced range of motion",
      "Flares that follow stress, food, alcohol, illness, or poor sleep",
      "Knee, hip, hand, foot, spine, or shoulder pain",
      "History of joint injury or repetitive strain",
      "Family history of autoimmune or inflammatory arthritis",
      "Fatigue, brain fog, skin symptoms, or gut symptoms alongside joint pain",
    ],
    conventional: {
      intro:
        "Standard arthritis care often focuses on pain control, anti-inflammatory medications, injections, imaging, or rheumatology medication. Those tools can be important, but they do not always explain why inflammation keeps returning.",
      misses: [
        "Metabolic inflammation, insulin resistance, and weight distribution are often addressed too generally.",
        "Gut health, food sensitivities, and intestinal permeability are rarely connected to joint flares.",
        "Vitamin D, omega-3 status, magnesium, and protein sufficiency may not be optimized.",
        "Sleep quality, stress chemistry, and recovery capacity are under-discussed.",
        "Movement plans may be either too aggressive or too vague for painful joints.",
      ],
    },
    functional: {
      intro:
        "We personalize joint support based on the arthritis pattern and stay in co-care with your medical team when autoimmune disease or structural damage is present.",
      approach: [
        "Anti-inflammatory nutrition that still supports protein, muscle, and metabolic health",
        "Blood sugar and weight-load strategy without crash dieting",
        "Gut repair and food-trigger investigation when flares suggest immune activation",
        "Omega-3s, vitamin D, magnesium, curcumin, collagen peptides, or joint nutrients when appropriate and safe",
        "Joint-friendly strength training, mobility, gait, posture, and recovery work",
        "Referral or co-care for imaging, rheumatology evaluation, or medication decisions when red flags appear",
      ],
    },
    whatToExpect: [
      "Pain and stiffness may respond first to nutrition, sleep, blood sugar stability, and smarter movement pacing.",
      "Inflammatory or autoimmune arthritis usually requires longer terrain work and medical co-management; the goal is fewer flares and better function, not ignoring needed medication.",
      "If joints are hot, red, rapidly swelling, severely painful, or paired with fever or sudden weakness, seek medical care promptly.",
    ],
  },

  // ────────────────────────────────────────── NEURODEVELOPMENTAL
  {
    slug: "autism",
    name: "Autism Support",
    shortName: "Autism",
    category: "Neurodevelopmental",
    tagline: "Reducing the medical load, respecting the person.",
    summary:
      "Many autistic kids and adults carry an invisible medical load — gut issues, mineral imbalances, oxidative stress — that affects daily function. We address those, gently, alongside the care your family already trusts.",
    hero: {
      eyebrow: "Neurodevelopmental Support",
      title: "Autism support",
      subtitle:
        "Our work isn't to change who someone is. It's to reduce the medical and physiological load they're carrying — so they can show up more comfortably in the world they belong in.",
    },
    whatItIs: [
      "Autism is a neurotype, not a disease. Functional medicine doesn't aim to 'cure' autism — that framing would be both inaccurate and disrespectful.",
      "What we do address: the high prevalence of comorbid medical conditions in autistic individuals — gut dysfunction (constipation, diarrhea, reflux, gas), food sensitivities, mineral imbalances (zinc/copper, magnesium), methylation differences, oxidative stress, mitochondrial dysfunction, sleep issues, and anxiety.",
      "When these are addressed, many families notice meaningful improvements in mood, behavior regulation, communication, and quality of daily life — without changing who their child or family member is.",
    ],
    symptoms: [
      "Persistent GI symptoms (constipation, diarrhea, gas, reflux)",
      "Restricted diet driven by sensory needs and food intolerance",
      "Sleep disruption",
      "Anxiety, agitation, self-regulation difficulty",
      "Food sensitivities and selective eating",
      "Frequent infections, immune dysregulation",
      "Repetitive behaviors that escalate with physical discomfort",
    ],
    conventional: {
      intro:
        "ABA, OT, speech, and educational support are pillars. Medical comorbidities — even when they significantly impact daily life — are often addressed in narrow, symptom-suppressive ways or not at all.",
      misses: [
        "GI testing is rarely done despite GI issues being one of the most common comorbidities.",
        "Mineral and methylation status — not on standard pediatric workups.",
        "Food sensitivity work — generally dismissed.",
        "Mitochondrial function, oxidative stress markers — not part of standard care.",
      ],
    },
    functional: {
      intro:
        "We work as a quiet medical layer alongside your existing therapy team. We coordinate with your developmental pediatrician, neurologist, and therapists — never replacing them.",
      approach: [
        "Gut healing — often produces the most dramatic quality-of-life change",
        "Targeted nutrition aligned with sensory needs (we work with what the child will eat)",
        "Mineral repletion such as magnesium, zinc, or vitamin D when indicated",
        "Methylation support where warranted and tolerated, dosed gently",
        "Antioxidant support options when appropriate",
        "Gentle, slow plans — never aggressive detoxes for kids",
        "Family-centered: we work with parents, never around them",
      ],
    },
    whatToExpect: [
      "Many families notice changes within 4–8 weeks: better sleep, calmer mornings, more regulated digestion.",
      "Deeper changes (mood regulation, eye contact, language) happen on a longer timeline (3–9 months) and vary widely.",
      "We move at the pace your child can tolerate. We celebrate small wins. We do not promise things we cannot deliver.",
    ],
  },
];

// =============================================================
// Helpers
// =============================================================

export const conditionsByCategory = (() => {
  const groups: Record<ConditionCategory, Condition[]> = {
    Metabolic: [],
    Hormonal: [],
    Neurological: [],
    Gut: [],
    "Mental Health": [],
    Immune: [],
    "Bone Health": [],
    Neurodevelopmental: [],
  };
  for (const c of conditions) groups[c.category].push(c);
  return groups;
})();

export function getCondition(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}

export function getConditionSlugs(): string[] {
  return conditions.map((c) => c.slug);
}
