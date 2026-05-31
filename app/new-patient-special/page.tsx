import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Online functional health coaching programs",
  description:
    "Compare Pristine Functional Health's three-tier virtual coaching programs and apply for the level of support that fits your wellness goals.",
  path: "/new-patient-special",
  keywords: ["online functional health coaching program", "Pristine Metabolic Reset", "new patient special"],
});

const programs = [
  {
    name: "Tier 1: The Foundation",
    access: "Book a free call for this program",
    bestFor: "Self-starters needing a clear roadmap and expert course correction.",
    duration: "3 Months",
    consultations: "1 Deep-Dive Intake + 2 Monthly Follow-ups",
    support: "Email support",
    resources: "Personalized Nutrition Blueprint",
    cta: "Apply Now",
    href: "/book-appointment",
  },
  {
    name: "Tier 2: The Transformation",
    badge: "Most Popular",
    access: "Book a free call for this program",
    bestFor: "Individuals ready to address chronic symptoms with high accountability.",
    duration: "3 Months",
    consultations: "1 Deep-Dive Intake + Bi-weekly Follow-ups",
    support: "Priority Chat Support",
    resources: "Personalized Blueprint + Lab Review + Supplement Guidance When Appropriate",
    cta: "Apply Now",
    href: "/book-appointment",
  },
  {
    name: "Tier 3: The VIP Elite",
    renamed: "Pristine Metabolic Reset™",
    access: "Book a free call for this program",
    bestFor: "Deeply complex cases, including neuropathy plus autoimmune patterns, requiring high-touch access.",
    duration: "6 Months",
    consultations: "1 Deep-Dive Intake + Weekly Private Coaching",
    support: "Priority Chat Support",
    resources: "Full Concierge Planning + Personalized Movement/Nerve Gliding Guidance",
    cta: "Apply Now",
    href: "/book-appointment",
  },
];

const rows = [
  ["Best For", "bestFor"],
  ["Duration", "duration"],
  ["Consultations", "consultations"],
  ["Support", "support"],
  ["Resources", "resources"],
] as const;

export default function NewPatientSpecial() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-14">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal className="max-w-[980px]">
            <p className="eyebrow mb-5">New patient special</p>
            <h1 className="display-xl max-w-[18ch]">
              The three-tier coaching program.
            </h1>
            <p className="lede mt-7 max-w-[62ch]">
              Choose the level of support that matches your complexity, pace,
              and need for accountability. Every tier starts with a clear
              roadmap and a practitioner who understands the whole story.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#programs" className="btn btn-primary">
                Compare programs
                <ArrowRight size={16} />
              </Link>
              <Link href="/book-appointment" className="btn btn-ghost">
                Book a free call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="programs"
        className="py-20 md:py-28 border-t"
        style={{ borderColor: "var(--color-line)", background: "var(--color-bone-2)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <div className="mb-10 grid grid-cols-12 gap-y-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-5">
                <p className="eyebrow mb-5">Our programs</p>
                <h2 className="display max-w-[15ch]">
                  Pick the container that matches the work.
                </h2>
              </div>
              <p className="lede col-span-12 max-w-[58ch] md:col-span-7">
                The goal is self-selection without confusion: light-touch
                roadmap, higher-accountability transformation, or high-touch
                metabolic reset for complex cases.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div
              className="hidden overflow-hidden border bg-[var(--color-paper)] lg:block"
              style={{ borderColor: "var(--color-line-strong)" }}
            >
              <table className="w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="w-[168px] border-r border-b px-5 py-5 text-left font-mono text-[0.7rem] uppercase text-[var(--color-ink-muted)]"
                      style={{ borderColor: "var(--color-line-strong)" }}
                    >
                      Feature
                    </th>
                    {programs.map((program) => (
                      <th
                        key={program.name}
                        scope="col"
                        className="border-r border-b px-5 py-5 text-left align-top last:border-r-0"
                        style={{ borderColor: "var(--color-line-strong)" }}
                      >
                        <span className="mb-3 flex flex-wrap items-center gap-2">
                          {program.badge && (
                            <span className="rounded-full bg-[var(--color-forest)] px-3 py-1 font-mono text-[0.64rem] uppercase text-[var(--color-linen)]">
                              {program.badge}
                            </span>
                          )}
                        </span>
                        <span className="block font-serif text-[1.45rem] leading-tight">
                          {program.name}
                        </span>
                        {program.renamed && (
                          <span className="mt-2 block font-serif text-[1.12rem] leading-tight text-[var(--color-forest)]">
                            {program.renamed}
                          </span>
                        )}
                        <span className="mt-3 block text-[0.86rem] leading-snug text-[var(--color-ink-muted)]">
                          {program.access}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([label, key]) => (
                    <tr key={label}>
                      <th
                        scope="row"
                        className="border-r border-b px-5 py-5 text-left align-top font-mono text-[0.72rem] uppercase text-[var(--color-ink-muted)]"
                        style={{ borderColor: "var(--color-line-strong)" }}
                      >
                        {label}
                      </th>
                      {programs.map((program) => (
                        <td
                          key={program.name}
                          className="border-r border-b px-5 py-5 align-top text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)] last:border-r-0"
                          style={{ borderColor: "var(--color-line-strong)" }}
                        >
                          {program[key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <th
                      scope="row"
                      className="border-r px-5 py-5 text-left align-top font-mono text-[0.72rem] uppercase text-[var(--color-ink-muted)]"
                      style={{ borderColor: "var(--color-line-strong)" }}
                    >
                      CTA
                    </th>
                    {programs.map((program) => (
                      <td
                        key={program.name}
                        className="border-r px-5 py-5 align-top last:border-r-0"
                        style={{ borderColor: "var(--color-line-strong)" }}
                      >
                        <Link href={program.href} className="btn btn-primary">
                          {program.cta}
                          <ArrowRight size={15} />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-[82ch] text-[0.84rem] leading-relaxed text-[var(--color-ink-muted)]">
              Program details describe the intended level of support. Exact
              recommendations, lab review, supplement guidance, resources, and
              communication cadence are individualized after intake and may
              vary based on fit, safety, goals, and clinical need.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 lg:hidden">
            {programs.map((program, index) => (
              <Reveal key={program.name} delay={index * 70}>
                <article
                  className="border bg-[var(--color-paper)] p-5"
                  style={{ borderColor: "var(--color-line-strong)" }}
                >
                  {program.badge && (
                    <p className="mb-3 inline-flex rounded-full bg-[var(--color-forest)] px-3 py-1 font-mono text-[0.64rem] uppercase text-[var(--color-linen)]">
                      {program.badge}
                    </p>
                  )}
                  <h3 className="font-serif text-[1.55rem] leading-tight">
                    {program.name}
                  </h3>
                  {program.renamed && (
                    <p className="mt-1 font-serif text-[1.15rem] text-[var(--color-forest)]">
                      {program.renamed}
                    </p>
                  )}
                  <p className="mt-2 text-[0.84rem] text-[var(--color-ink-muted)]">
                    {program.access}
                  </p>
                  <dl className="mt-5 space-y-4">
                    {rows.map(([label, key]) => (
                      <div key={label} className="border-t pt-4" style={{ borderColor: "var(--color-line)" }}>
                        <dt className="eyebrow mb-2">{label}</dt>
                        <dd className="text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)]">
                          {program[key]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <Link href={program.href} className="btn btn-primary mt-6">
                    {program.cta}
                    <ArrowRight size={15} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-28 border-t"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-10">
              <div className="col-span-12 md:col-span-5">
                <p className="eyebrow mb-5">Shop</p>
                <h2 className="display max-w-[12ch]">
                  Coming soon.
                </h2>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="lede max-w-[58ch]">
                  A carefully curated shop is coming for patients who want the
                  same standard of quality outside appointments: premium
                  supplements, food sensitivity kits, and practical premium
                  courses that support the foundations we teach.
                </p>
                <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    "Premium quality supplements",
                    "Food sensitivity kit",
                    "Premium courses",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-t pt-4 text-[0.95rem]"
                      style={{ borderColor: "var(--color-line)" }}
                    >
                      <ShoppingBag
                        size={16}
                        className="mt-0.5 shrink-0 text-[var(--color-forest)]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Start with clarity"
        title="Not sure which program fits? Book the free call."
        subtitle="We'll help you choose the right level of support before you commit."
        cta="Book the free call"
      />
    </>
  );
}
