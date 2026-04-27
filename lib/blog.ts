export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date string
  readingTime: number; // minutes
  category: string;
  tags: string[];
  author: { name: string; credentials: string };
  heroAlt: string;
  body: BlogSection[];
}

export interface BlogSection {
  type: "heading" | "subheading" | "paragraph" | "list" | "callout" | "divider";
  content?: string;
  items?: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "5-root-causes-doctors-miss",
    title: "The 5 Root Causes Most Doctors Miss (And How Functional Medicine Finds Them)",
    description:
      "Why are millions of people with real symptoms being told their labs are normal? Here are the five upstream causes conventional medicine routinely overlooks — and what functional testing actually reveals.",
    publishedAt: "2025-04-10",
    readingTime: 9,
    category: "Functional Medicine",
    tags: ["root cause", "functional medicine", "chronic illness", "gut health", "hormones"],
    author: { name: "Dr. Megha Shah", credentials: "PT, CFNC" },
    heroAlt: "A calm clinical desk with a glass of water, a notebook, and a stethoscope",
    body: [
      {
        type: "paragraph",
        content:
          "You've seen three specialists. You've had the standard blood panel drawn twice. And every single time, someone hands you a printout that says the same thing: everything is within normal range. But you feel exhausted before 10 a.m. You gain weight no matter what you eat. Your brain is so foggy you can't finish sentences. Normal range is not the same as thriving — and the gap between those two things is where chronic illness lives.",
      },
      {
        type: "paragraph",
        content:
          "Functional medicine exists to close that gap. Rather than asking 'does this person have a diagnosable disease?', it asks 'why is this system not working properly?' The question sounds simple. The answer is almost always one of five upstream causes — or a combination of them.",
      },
      {
        type: "heading",
        content: "1. Gut Dysfunction and Intestinal Permeability",
      },
      {
        type: "paragraph",
        content:
          "The gut is not just a digestion organ. It houses 70–80% of the immune system, produces most of the body's serotonin, and maintains a barrier between the outside world and your bloodstream. When that barrier becomes compromised — a condition often called leaky gut, or intestinal permeability — partially digested food particles, bacterial fragments, and toxins cross into circulation. The immune system responds to these foreign substances with systemic inflammation.",
      },
      {
        type: "paragraph",
        content:
          "This chronic, low-grade inflammation is the upstream cause of a remarkable number of conditions: autoimmune diseases, food sensitivities, migraines, joint pain, brain fog, skin disorders, and mood dysregulation. Conventional medicine does not screen for intestinal permeability. A standard stool test does not assess tight junction proteins. Functional testing — specifically GI-MAP stool analysis, zonulin markers, and comprehensive digestive evaluation — does.",
      },
      {
        type: "callout",
        content:
          "Signs your gut may be a root cause: bloating, irregular bowel movements, food sensitivities that seem to change, skin rashes, fatigue after eating, anxiety, or autoimmune diagnosis.",
      },
      {
        type: "heading",
        content: "2. Hormonal Imbalances Beyond What Basic Labs Show",
      },
      {
        type: "paragraph",
        content:
          "When a patient complains of fatigue, weight gain, hair loss, irregular cycles, low libido, or mood instability, the standard response is a TSH and maybe an estrogen/testosterone level. These are useful markers — but they miss most of what actually matters.",
      },
      {
        type: "paragraph",
        content:
          "A TSH in the 'normal' range of 0.5–4.5 can still be functionally suboptimal. Most people with hypothyroid symptoms do best with a TSH between 1.0–2.0. A standard estrogen panel doesn't show how estrogen is being metabolized — whether it's being converted into protective or harmful metabolites. Cortisol drawn at a single morning blood draw tells you almost nothing about the full cortisol curve across the day.",
      },
      {
        type: "paragraph",
        content:
          "Functional testing uses dried urine (DUTCH test) to map sex hormones, cortisol, melatonin, and their metabolic pathways across an entire day. The difference in clinical information is enormous. Patients who have been told their hormones are 'fine' frequently discover they have cortisol dysregulation, estrogen dominance, or progesterone deficiency that explains years of symptoms.",
      },
      {
        type: "heading",
        content: "3. Nutrient Deficiencies That Don't Show on Standard Panels",
      },
      {
        type: "paragraph",
        content:
          "Standard labs check serum B12, serum vitamin D, and occasionally ferritin. These are useful but profoundly incomplete. Serum B12 can look normal even when cellular B12 — the amount actually available for use inside your cells — is critically low. Methylmalonic acid and homocysteine are far better markers of functional B12 status, and almost no primary care physician orders them.",
      },
      {
        type: "list",
        items: [
          "Magnesium — 68% of Americans are deficient, but serum magnesium is one of the last places the body shows a deficit. RBC magnesium is the appropriate test.",
          "Zinc — essential for immune function, thyroid hormone conversion, wound healing, and reproductive health. Commonly depleted by chronic stress, proton pump inhibitors, and a plant-heavy diet without attention to phytates.",
          "Vitamin D — the functional optimal range is 60–80 ng/mL. Most conventional labs flag anything above 30 as normal. Below 50 is associated with significantly higher rates of autoimmune disease.",
          "Iron (full panel) — ferritin below 50 causes fatigue, hair loss, and impaired thyroid function in many patients, even when hemoglobin is 'normal'.",
          "B-vitamin complex — methylation pathway deficiencies (MTHFR, for example) affect how the body processes folate and B12, impacting everything from mood to cardiovascular risk.",
        ],
      },
      {
        type: "heading",
        content: "4. Chronic Inflammation Without an Obvious Cause",
      },
      {
        type: "paragraph",
        content:
          "Inflammation is not inherently a problem — it's the body's repair mechanism. The problem is when it becomes chronic and systemic. And the problem with how conventional medicine measures inflammation is that the tools used — CRP and ESR — are late-stage markers. They're positive when inflammation has become severe. A high-sensitivity CRP (hs-CRP), on the other hand, detects low-level systemic inflammation years before it becomes a diagnosable condition.",
      },
      {
        type: "paragraph",
        content:
          "What drives chronic inflammation? Diet (specifically ultra-processed foods, refined carbohydrates, vegetable oils high in omega-6), sleep deprivation, chronic psychological stress, environmental toxin exposure, untreated infections, and — circling back — gut dysfunction. Functional medicine assesses all of these simultaneously rather than treating each in isolation.",
      },
      {
        type: "heading",
        content: "5. Toxic Load and Environmental Exposures",
      },
      {
        type: "paragraph",
        content:
          "The human body is exposed to an estimated 80,000+ chemicals in the modern environment. Most of them have not been adequately tested for long-term health effects. Heavy metals (mercury, lead, arsenic, cadmium) accumulate in tissue over years and are associated with neurological symptoms, fatigue, hormonal disruption, and immune dysregulation. Mycotoxins from mold exposure — one of the most underdiagnosed contributors to chronic illness — affect approximately 25% of people who've lived in a water-damaged building.",
      },
      {
        type: "paragraph",
        content:
          "Conventional medicine does not routinely test for heavy metals, mycotoxins, or environmental chemical burden. Functional practitioners use urine metals panels, urinary mycotoxin testing (OAT or RealTime Labs), and environmental exposure history to identify these contributors.",
      },
      {
        type: "divider",
      },
      {
        type: "subheading",
        content: "Why Conventional Medicine Misses These",
      },
      {
        type: "paragraph",
        content:
          "This is not a failure of individual physicians — it is a structural limitation of a system designed around disease treatment rather than health optimization. A 7-minute primary care appointment cannot address upstream causes. Insurance reimbursement is tied to diagnosis codes, not investigative process. Medical education dedicates very little time to nutrition, environmental medicine, or the gut-immune-brain connection.",
      },
      {
        type: "paragraph",
        content:
          "Functional medicine fills this gap by taking a comprehensive intake (often 60–90 minutes), ordering advanced testing, and treating the whole system rather than isolated symptoms. It does not replace conventional medicine — it works alongside it, adding the depth of investigation that the standard model cannot provide.",
      },
      {
        type: "callout",
        content:
          "At Pristine Functional Health, every patient starts with a free 20-minute discovery call with Dr. Megha Shah. We'll be honest about whether functional medicine is right for your situation — and if it is, we'll tell you exactly where we'd start.",
      },
    ],
  },
  {
    slug: "labs-normal-still-feel-terrible",
    title: "Why Your Labs Look 'Normal' But You Still Feel Terrible",
    description:
      "If a doctor has ever told you your bloodwork is normal while you feel anything but, this is for you. The gap between 'not diseased' and 'actually healthy' is measurable — and here's how to measure it.",
    publishedAt: "2025-04-22",
    readingTime: 8,
    category: "Lab Testing",
    tags: ["lab testing", "thyroid", "functional ranges", "fatigue", "optimal health"],
    author: { name: "Dr. Megha Shah", credentials: "PT, CFNC" },
    heroAlt: "Lab report printout with a pen beside it on a wooden surface",
    body: [
      {
        type: "paragraph",
        content:
          "It is one of the most common experiences in modern medicine, and one of the most demoralizing: you have real symptoms. You've had the blood work. You've waited for the results. And you've been told — sometimes with a kind tone, sometimes with a dismissive one — that everything looks normal. Go home. Come back if it gets worse.",
      },
      {
        type: "paragraph",
        content:
          "But it doesn't get better. The fatigue deepens. The brain fog doesn't lift. The weight won't move. The hair keeps falling out. You start wondering if it's in your head, because that's what 'normal labs' implies.",
      },
      {
        type: "paragraph",
        content:
          "Here is the thing your doctor may not have told you: conventional laboratory reference ranges were not designed to define health. They were designed to identify pathology. The range for 'normal' TSH, for example, is derived from the average value in a population that includes people who are unwell but not yet diagnosed. Normal is not optimal. And the difference matters enormously.",
      },
      {
        type: "heading",
        content: "The Problem With Reference Ranges",
      },
      {
        type: "paragraph",
        content:
          "Reference ranges in standard lab work are typically set as the 95th percentile range of values in a tested population. If a lab runs TSH on 10,000 patients and 95% fall between 0.5 and 4.5, that becomes the normal range. The problem is that this population includes people with undiagnosed thyroid disease, people with significant metabolic dysfunction, people on medications that alter their results, and people who are simply not well.",
      },
      {
        type: "paragraph",
        content:
          "You are being compared to a sick population and told you're fine because you're average within it.",
      },
      {
        type: "heading",
        content: "Key Markers and Their Functional Ranges",
      },
      {
        type: "paragraph",
        content:
          "What follows are some of the most commonly misinterpreted markers in standard blood work — and the functional ranges that correlate with patients actually feeling well.",
      },
      {
        type: "subheading",
        content: "Thyroid (TSH, Free T3, Free T4, Reverse T3)",
      },
      {
        type: "list",
        items: [
          "Standard TSH range: 0.5–4.5 mIU/L. Functional optimal: 1.0–2.0 mIU/L.",
          "Free T3 is the active thyroid hormone. Many labs don't order it without a convincing argument. Low-normal Free T3 (even with normal TSH) is associated with all classic hypothyroid symptoms.",
          "Reverse T3 is the inactive form of T3 that competes for receptor binding. It rises with chronic stress, illness, dieting, and inflammation — essentially blocking thyroid function even when TSH and Free T4 look 'normal'.",
          "Thyroid antibodies (TPO and thyroglobulin) can be elevated for years before TSH shifts. Hashimoto's disease — the most common autoimmune condition in the US — is frequently missed because TSH is still 'normal' in the early phases.",
        ],
      },
      {
        type: "subheading",
        content: "Iron (Ferritin, Serum Iron, TIBC, Transferrin Saturation)",
      },
      {
        type: "paragraph",
        content:
          "Ferritin is a storage protein for iron. The conventional lower limit of normal is often 12 ng/mL. But research consistently shows that symptoms of iron deficiency — fatigue, hair loss, impaired cognitive function, restless legs, and impaired thyroid hormone conversion — appear at ferritin levels below 50 ng/mL. Many patients with ferritin of 15 ng/mL are told they're 'not anemic' and sent home.",
      },
      {
        type: "callout",
        content:
          "A ferritin between 12 and 50 ng/mL is technically 'normal' but clinically suboptimal for many patients, especially women, who frequently experience significant hair loss in this range.",
      },
      {
        type: "subheading",
        content: "Vitamin D",
      },
      {
        type: "paragraph",
        content:
          "The conventional lower limit for vitamin D (25-OH) is typically 30 ng/mL. Research on immune function, autoimmune risk, bone density, mood regulation, and cardiovascular health suggests the optimal range is 60–80 ng/mL. Levels below 50 are associated with significantly elevated risk for autoimmune disease, depression, and infectious illness. A patient at 32 ng/mL will be told they're fine.",
      },
      {
        type: "subheading",
        content: "Fasting Glucose and Fasting Insulin",
      },
      {
        type: "paragraph",
        content:
          "Conventional medicine checks fasting glucose. Functional medicine checks both fasting glucose and fasting insulin. Here is why this matters: insulin resistance — the metabolic dysfunction that precedes type 2 diabetes by 10–20 years — causes elevated fasting insulin, not elevated fasting glucose. A person can have a fasting glucose of 82 mg/dL (perfectly 'normal') and a fasting insulin of 22 µIU/mL (indicating significant insulin resistance).",
      },
      {
        type: "paragraph",
        content:
          "A HOMA-IR score (calculated from glucose and insulin) above 1.5 indicates early insulin resistance. Above 2.0 is a meaningful clinical signal. These patients are not pre-diabetic on paper — but they are on a metabolic trajectory that will eventually make them so. Catching this early changes outcomes dramatically.",
      },
      {
        type: "subheading",
        content: "Homocysteine and hs-CRP",
      },
      {
        type: "list",
        items: [
          "Homocysteine above 7 µmol/L indicates impaired methylation — a metabolic process critical for DNA repair, neurotransmitter production, and detoxification. Standard labs flag it only above 15.",
          "High-sensitivity CRP (hs-CRP) above 1.0 mg/L indicates chronic low-grade inflammation. Conventional medicine often ignores this result unless it's dramatically elevated. Functional medicine treats it as an early signal worth investigating.",
        ],
      },
      {
        type: "heading",
        content: "What to Do With This Information",
      },
      {
        type: "paragraph",
        content:
          "The goal of this article is not to make you distrust your doctor or over-interpret your own lab results. It is to help you understand that 'normal' is a statistical construct, not a clinical standard — and that feeling well requires optimization, not just the absence of disease.",
      },
      {
        type: "paragraph",
        content:
          "If you have real symptoms and have been told your labs are normal, here is what we recommend:",
      },
      {
        type: "list",
        items: [
          "Ask for the actual numbers, not just the interpretation. A result of 4.4 on a TSH scale of 0.5–4.5 is very different from a result of 1.2 — even though both are 'normal'.",
          "Request tests that conventional medicine often skips: Free T3, Reverse T3, thyroid antibodies, fasting insulin, HOMA-IR, RBC magnesium, ferritin (full iron panel), hs-CRP, homocysteine, and a comprehensive vitamin D level.",
          "Find a practitioner who interprets results through a functional lens — asking not just 'is this in range?' but 'is this optimal for this person?'",
        ],
      },
      {
        type: "divider",
      },
      {
        type: "paragraph",
        content:
          "At Pristine Functional Health, we run comprehensive functional panels on every patient and interpret them against optimal ranges — not just disease thresholds. We'll tell you what we find, what it means, and what we'd do about it. If your labs have been called 'normal' but you don't feel normal, that is a solvable problem.",
      },
      {
        type: "callout",
        content:
          "Your first conversation with Dr. Megha Shah is free. Schedule a 20-minute discovery call to discuss what you've tried, what your labs have shown, and whether functional medicine is the right next step for you.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
