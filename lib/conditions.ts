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
  functional: { intro: string; testing: string[]; approach: string[] };
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
      testing: [
        "Comprehensive metabolic panel + fasting insulin + HOMA-IR + HbA1c",
        "Full thyroid: TSH, Free T3, Free T4, Reverse T3, TPO and TG antibodies",
        "DUTCH or 4-point salivary cortisol curve",
        "hs-CRP, ferritin, homocysteine (inflammation markers)",
        "Sex hormone panel (estradiol, progesterone, testosterone, SHBG, DHEA-S)",
        "Vitamin D, B12, magnesium RBC, zinc",
        "Optional: continuous glucose monitor (CGM), GI-MAP stool, food sensitivity",
      ],
      approach: [
        "Protein-forward, blood-sugar-stabilizing nutrition tailored to your biomarkers",
        "Strategic carbohydrate placement — not deprivation",
        "Strength training programmed for metabolic adaptation, not punishment",
        "Sleep, circadian, and nervous-system regulation as first-line metabolic medicine",
        "Targeted supplementation: berberine, magnesium, chromium, omega-3, inositol, adaptogens — only what your labs justify",
        "Gut healing if dysbiosis or inflammation is contributing",
      ],
    },
    whatToExpect: [
      "In the first 30 days, most patients see steadier energy, fewer cravings, and better sleep — often before the scale moves. That's a feature, not a bug: we're rebuilding the signal first.",
      "Within 60–90 days, weight typically begins to release in a sustainable rhythm — usually 1–2 lbs per week — and the changes hold because the underlying drivers have been addressed.",
      "By 6 months, most patients have achieved meaningful, durable change and a new baseline they understand and can maintain without obsessing over food.",
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
        a: "We can co-manage if a GLP-1 is appropriate, but our default is to repair the underlying insulin signaling first. Most patients don't need it once we do.",
      },
    ],
  },
  {
    slug: "type-2-diabetes",
    name: "Type 2 Diabetes & Insulin Resistance",
    shortName: "Type 2 Diabetes",
    category: "Metabolic",
    tagline: "A diagnosis you can often reverse — not just manage.",
    summary:
      "Pre-diabetes and Type 2 are not life sentences. They're communication: your body is asking for a different conversation about food, movement, and stress.",
    hero: {
      eyebrow: "Metabolic Care",
      title: "Type 2 Diabetes & Insulin Resistance",
      subtitle:
        "Insulin resistance starts 10–15 years before diabetes shows up on a lab. We catch it early, reverse it where possible, and rebuild the metabolism underneath.",
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
      testing: [
        "Fasting insulin, fasting glucose, HbA1c, HOMA-IR",
        "Advanced lipids: ApoB, LDL particle number, triglyceride/HDL ratio",
        "Liver panel + GGT (often the first sign of fatty liver)",
        "hs-CRP, fibrinogen (inflammation)",
        "CGM (continuous glucose monitor) for 2–4 weeks of real-life data",
        "Vitamin D, magnesium RBC, zinc, B12",
        "Sleep study if apnea is suspected",
      ],
      approach: [
        "Personalized low-glycemic, protein-forward nutrition with carb timing",
        "Resistance training + zone 2 cardio: the most powerful insulin-sensitizing combination known",
        "Sleep optimization (often the hidden lever)",
        "Stress regulation (cortisol drives gluconeogenesis)",
        "Targeted supplementation: berberine, alpha-lipoic acid, chromium, magnesium glycinate, inositol",
        "Co-management with your PCP/endocrinologist on medication tapering as appropriate",
      ],
    },
    whatToExpect: [
      "Most patients see meaningful CGM improvements in 2–3 weeks. HbA1c reflects 3 months of blood sugar — so the real number tells the story by month 3 or 4.",
      "By month 6, many of our pre-diabetic and early Type 2 patients have moved out of the diabetic range entirely. Some come off metformin (with their PCP's coordination). Some achieve full remission.",
      "Long-standing or insulin-dependent diabetes is more complex but still very responsive. Even when full reversal isn't possible, we can dramatically reduce complications, fatigue, and medication burden.",
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
      testing: [
        "Full thyroid: TSH, Free T3, Free T4, Reverse T3, TPO antibodies, TG antibodies",
        "Cofactors: ferritin, vitamin D, B12, selenium, zinc, magnesium RBC",
        "If autoimmune: gut testing (GI-MAP), gluten cross-reactivity, EBV titers",
        "Sex hormones (estrogen dominance affects thyroid binding)",
        "Cortisol curve (chronic stress lowers conversion of T4 to T3)",
      ],
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
      "If autoimmune: antibodies typically begin to drop in 3–6 months when the trigger is identified and removed. Some patients see them normalize entirely.",
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
      testing: [
        "DUTCH (Dried Urine Test for Comprehensive Hormones) — gold-standard for cycle-mapped hormones and estrogen metabolism",
        "Full thyroid, fasting insulin, HOMA-IR (especially for PCOS)",
        "Cortisol curve — adrenal-ovarian axis",
        "SHBG, DHEA-S, free testosterone",
        "Vitamin D, magnesium, B12, ferritin",
        "Gut testing if estrogen recirculation is suspected (estrobolome)",
      ],
      approach: [
        "Cycle-syncing nutrition (different macros and foods in follicular vs. luteal phases)",
        "Liver and gut support to clear estrogen properly",
        "PCOS-specific protocols: insulin sensitization (inositol, berberine), inflammation control",
        "Targeted supplementation: DIM, calcium-d-glucarate, B-complex, magnesium, adaptogens",
        "Stress regulation — cortisol steals from progesterone (the 'pregnenolone steal')",
        "When appropriate, bioidentical hormone support in coordination with your provider",
      ],
    },
    whatToExpect: [
      "Cycle changes are visible within 1–3 cycles. Most patients see softer PMS, less pain, and more predictable cycles within 90 days.",
      "PCOS markers (insulin, androgens) typically improve within 3–6 months with consistent work, often dramatically.",
      "Perimenopausal symptoms can ease within weeks once cortisol, blood sugar, and nutrient status are stabilized — and bioidentical support, when warranted, accelerates the change.",
    ],
    testimonial: {
      name: "Priya S.",
      detail: "41 · PCOS & cycle migraines",
      quote:
        "I was put on birth control at 16 for acne. I was 38 before someone actually tested my hormones in a meaningful way. Six months with Kiwi and I have regular cycles for the first time in my life.",
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
      testing: [
        "Total + free testosterone, SHBG, estradiol (sensitive), DHT, DHEA-S, LH, FSH, prolactin",
        "Fasting insulin, HOMA-IR, full lipid panel with ApoB",
        "Full thyroid panel",
        "Cortisol curve (DUTCH)",
        "Vitamin D, zinc, magnesium RBC, B12, ferritin",
        "Sleep study if apnea is suspected",
      ],
      approach: [
        "Resistance training as primary metabolic and hormonal medicine",
        "Sleep optimization — non-negotiable, often the biggest single lever",
        "Insulin-sensitizing nutrition: protein-forward, blood-sugar-aware",
        "Reduce environmental load: water filtration, plastic exposure, personal care products",
        "Targeted supplementation: zinc, magnesium, vitamin D, ashwagandha, boron, omega-3 — based on what your labs show",
        "If TRT is appropriate after foundation is built, co-manage carefully with proper monitoring",
      ],
    },
    whatToExpect: [
      "Most men feel meaningfully different within 4–8 weeks: better energy, better sleep, sharper focus, body composition shifts.",
      "Hormonal labs typically improve within 3–6 months when foundation work is consistent.",
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
      testing: [
        "RBC magnesium, vitamin D, B12, methylation panel",
        "Full thyroid, sex hormones (DUTCH, mapped to cycle)",
        "Food sensitivity (IgG) panel as a guide; elimination + reintroduction as the test",
        "Detailed migraine journal (food, sleep, cycle, stress, weather)",
        "Gut testing if histamine or estrogen recirculation is suspected",
      ],
      approach: [
        "High-dose magnesium glycinate or threonate — well-tolerated, often dramatic",
        "Riboflavin (B2) 400 mg, CoQ10 100–300 mg — both with strong RCT evidence",
        "Hormone balancing for menstrual migraines",
        "Targeted elimination of identified food triggers (often histamine-rich, tyramine, alcohol)",
        "Blood sugar stability — often the simplest, most overlooked lever",
        "Stress and sleep regulation, vagal tone work",
      ],
    },
    whatToExpect: [
      "Most patients see frequency drop within 6–8 weeks of beginning the protocol — often by 50% or more.",
      "By month 3, many patients have gone from 8–15 migraines per month to 1–3.",
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
      testing: [
        "Fasting glucose, insulin, HOMA-IR, HbA1c, CGM if appropriate",
        "B12, methylmalonic acid, homocysteine, folate (functional B12 status)",
        "Full thyroid panel including antibodies",
        "ANA, autoimmune small-fiber neuropathy panel if indicated",
        "Heavy metal and mycotoxin testing where exposure is suspected",
        "Methylation panel (MTHFR, MTRR)",
      ],
      approach: [
        "Address the upstream cause aggressively (most often blood sugar or B12)",
        "Methylcobalamin B12, methylated folate (5-MTHF) where appropriate",
        "Alpha-lipoic acid (often dramatic for diabetic neuropathy), benfotiamine, acetyl-L-carnitine, omega-3",
        "If autoimmune: immune modulation and AIP-style nutrition",
        "If toxic: gentle, staged detox with proper drainage",
        "Movement, vibration therapy, infrared sauna where tolerated",
      ],
    },
    whatToExpect: [
      "When the cause is B12 or blood sugar, improvement can begin within weeks. Long-standing nerve damage takes longer — often 4–9 months — but typically does respond.",
      "Pain often improves before numbness. Some sensation loss may be permanent if damage is advanced; quality of life almost always improves dramatically.",
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
      testing: [
        "Methylation panel (MTHFR, MTRR, CBS)",
        "Organic acids test (neurotransmitter and mitochondrial markers)",
        "Full thyroid + antibodies",
        "Cortisol curve (DUTCH)",
        "RBC magnesium, B12, methylmalonic acid, folate, vitamin D, ferritin",
        "Gut testing (GI-MAP) if dysbiosis is suspected",
      ],
      approach: [
        "Blood sugar stabilization (often dramatic for panic-prone patients)",
        "Magnesium glycinate, taurine, L-theanine for GABA support",
        "Methylated B-vitamins where indicated",
        "Gut healing — often a major lever",
        "Adaptogens (ashwagandha, rhodiola) to recalibrate the stress response",
        "Vagal tone work, breathwork, sleep regulation",
        "Co-care with your therapist or psychiatrist",
      ],
    },
    whatToExpect: [
      "Many patients feel meaningfully calmer within 2–4 weeks once blood sugar and minerals are stabilized.",
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
      testing: [
        "Ferritin, B12, methylmalonic acid, folate, vitamin D, magnesium RBC, zinc",
        "Methylation panel (MTHFR, MTRR, COMT)",
        "Full thyroid panel",
        "Omega-3 index",
        "Organic acids (neurotransmitter precursors)",
        "Food sensitivity panel as a guide",
      ],
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
        "Almost every chronic condition has a gut chapter. We use clinical-grade testing to find yours, and a structured 5R protocol to rebuild what's broken.",
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
        "We use the 5R protocol — a structured, sequential framework that has been the backbone of functional gut care for 20+ years.",
      testing: [
        "GI-MAP or Genova GI Effects (microbiome, pathogens, digestion, inflammation)",
        "SIBO breath test (lactulose or glucose)",
        "Lactulose-mannitol or zonulin (intestinal permeability)",
        "Organic acids (bacterial and yeast markers)",
        "Food sensitivity (IgG) panel",
      ],
      approach: [
        "Remove: pathogens, food triggers, irritants",
        "Replace: digestive enzymes, HCl support if needed, bile support",
        "Reinoculate: targeted probiotics, prebiotics matched to your microbiome",
        "Repair: L-glutamine, zinc carnosine, slippery elm, marshmallow root, vitamin A",
        "Rebalance: stress regulation, sleep, mindful eating, vagal tone",
      ],
    },
    whatToExpect: [
      "Most patients feel better within 2–4 weeks of starting the protocol — bloating, energy, and mood are often the first to shift.",
      "A complete gut-rebuild typically takes 3–6 months. SIBO and complex dysbiosis can take longer.",
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
        "We use testing as a guide and elimination/reintroduction as the gold standard. The work is precise and time-limited — not lifelong restriction.",
      testing: [
        "IgG food sensitivity panel (Vibrant or Cyrex)",
        "Celiac and gluten cross-reactivity",
        "Lactulose-mannitol or zonulin (intestinal permeability)",
        "GI-MAP for underlying gut dysfunction",
        "Histamine and DAO if histamine intolerance is suspected",
      ],
      approach: [
        "30–60 day strategic elimination based on testing + history",
        "Systematic reintroduction (one food every 3 days) to identify true reactors",
        "Gut barrier repair to reduce future sensitivities",
        "Digestive support (HCl, enzymes, bile)",
        "Stress and vagal tone work — digestion runs on the parasympathetic nervous system",
      ],
    },
    whatToExpect: [
      "Most patients feel dramatically better within 2 weeks of strategic elimination.",
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
      "Autoimmune conditions involve a confused immune system attacking healthy tissue. The 'autoimmune triad' (Dr. Datis Kharrazian, Dr. Tom O'Bryan) describes three components present in nearly every case: genetic predisposition, an environmental trigger, and intestinal permeability (leaky gut).",
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
      testing: [
        "Comprehensive autoimmune panel (ANA, RF, CCP, specific antibodies)",
        "Wheat-Zoomer or Cyrex Array 3/4 (gluten and cross-reactivity)",
        "GI-MAP, intestinal permeability, organic acids",
        "EBV, H. pylori, Lyme (if suspected)",
        "Mycotoxin panel (Real Time Labs or Vibrant)",
        "Heavy metal urine challenge if exposure suspected",
        "Vitamin D, omega-3 index, methylation",
      ],
      approach: [
        "Autoimmune Protocol (AIP) — a structured 30–60 day elimination",
        "Gut barrier repair (5R protocol)",
        "Address infections and toxic load systematically",
        "Stress regulation — chronic stress is one of the most reliable flare triggers",
        "Targeted supplementation: vitamin D, omega-3, glutathione precursors, curcumin, resveratrol",
        "Co-care with your rheumatologist or specialty provider",
      ],
    },
    whatToExpect: [
      "Most patients see fewer, milder, shorter flares within 90 days.",
      "Antibody levels often drop measurably within 3–6 months when triggers are identified and removed.",
      "Some patients reduce or come off biologics under medical supervision; others stay on them but live far better. The win is a life that isn't centered on your disease.",
    ],
    testimonial: {
      name: "Dr. R. Patel",
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
      "Environmental toxins are one of the most under-investigated causes of chronic illness. We test, we drain, and we detox carefully — never aggressively.",
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
        "We follow a strict order of operations: identify the source, support drainage, then carefully reduce body burden. Detox before drainage is malpractice.",
      testing: [
        "Urine mycotoxin panel",
        "HERTSMI-2 / ERMI for indoor environment",
        "Provoked or unprovoked urine heavy metal panel",
        "MARCoNS, VIP, MSH, TGF-beta if CIRS is suspected",
        "Genova or Doctor's Data toxic element panels",
        "Glutathione, methylation, organic acids (detox capacity)",
      ],
      approach: [
        "Source identification and removal — the most important step (often involves remediation or moving)",
        "Drainage support: bowel, bile, lymph, kidneys, skin",
        "Binders: charcoal, bentonite clay, chlorella, cholestyramine (RX)",
        "Glutathione, NAC, sulforaphane to support detox phase II",
        "Sauna, dry brushing, hydration, gentle movement",
        "Antifungals (natural or RX) if mold is identified, in proper sequence",
      ],
    },
    whatToExpect: [
      "Initial improvements often appear within 4–8 weeks once drainage is supported and the source is removed.",
      "Full mold or heavy metal protocols typically take 6–18 months. Going faster than the body can handle is the most common mistake.",
      "The goal is a measurable reduction in body burden plus restored function — not 'clean labs' as an end in itself.",
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
      testing: [
        "Comprehensive stool testing (GI-MAP)",
        "Organic acids (mitochondrial, neurotransmitter, yeast, oxalate markers)",
        "Methylation panel and folate metabolism",
        "Zinc, copper, RBC magnesium, B12, vitamin D, omega-3 index",
        "Food sensitivity testing as a guide",
        "Heavy metals if exposure history warrants",
      ],
      approach: [
        "Gut healing — often produces the most dramatic quality-of-life change",
        "Targeted nutrition aligned with sensory needs (we work with what the child will eat)",
        "Mineral repletion: magnesium, zinc, vitamin D",
        "Methylation support where warranted, dosed gently",
        "Antioxidant support (NAC, glutathione precursors, omega-3)",
        "Gentle, slow protocols — never aggressive detoxes for kids",
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
