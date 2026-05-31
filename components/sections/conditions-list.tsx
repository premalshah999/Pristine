import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  conditionsByCategory,
  type ConditionCategory,
} from "@/lib/conditions";

const categoryOrder: ConditionCategory[] = [
  "Metabolic",
  "Hormonal",
  "Neurological",
  "Mental Health",
  "Gut",
  "Immune",
  "Bone Health",
  "Neurodevelopmental",
];

const maxCategoryRows = Math.max(
  ...categoryOrder.map((category) => conditionsByCategory[category].length)
);

export function ConditionsList() {
  return (
    <section
      id="conditions"
      className="py-20 md:py-28 border-t"
      style={{ borderColor: "var(--color-line)", background: "var(--color-canvas)" }}
    >
      <div className="mx-auto w-full max-w-[1500px] px-6">
        <div className="grid grid-cols-12 gap-y-8 gap-x-0 md:gap-x-10 mb-12">
          <Reveal className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-5">Common concerns, mapped at the root</p>
            <h2 className="display max-w-[15ch]">
              A compact index for <em className="italic-serif">messy</em> symptoms.
            </h2>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7 md:pt-2" delay={100}>
            <p className="lede max-w-[58ch]">
              Scan across clinical categories, then open any condition for the
              high-level root-cause overview. The layout is built like a
              working reference index, not a loose marketing grid.
            </p>
            <Link
              href="/conditions"
              className="inline-flex items-center gap-1.5 mt-4 text-[0.92rem] underline-offset-4 underline decoration-[var(--color-line-strong)] hover:decoration-[var(--color-ink)]"
            >
              View all conditions
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <div className="grid gap-4 lg:hidden">
            {categoryOrder.map((category) => (
              <section
                key={category}
                className="overflow-hidden border bg-[var(--color-paper)]"
                style={{ borderColor: "var(--color-line-strong)" }}
              >
                <div
                  className="border-b px-4 py-3"
                  style={{
                    borderColor: "var(--color-line)",
                    background: "var(--color-canvas)",
                  }}
                >
                  <h3 className="font-serif text-[1.35rem] leading-tight">
                    {category}
                  </h3>
                </div>
                <ul
                  className="divide-y"
                  style={{ borderColor: "var(--color-line)" }}
                >
                  {conditionsByCategory[category].map((condition) => (
                    <li key={condition.slug}>
                      <Link
                        href={`/conditions/${condition.slug}`}
                        className="group grid grid-cols-[1fr_auto] gap-4 px-4 py-4 transition-colors hover:bg-[var(--color-canvas)]"
                      >
                        <span className="min-w-0">
                          <span className="block font-serif text-[1.16rem] leading-tight transition-colors group-hover:text-[var(--color-forest)]">
                            {condition.shortName ?? condition.name}
                          </span>
                          <span className="mt-2 block text-[0.86rem] leading-relaxed text-[var(--color-ink-soft)]">
                            {condition.tagline}
                          </span>
                        </span>
                        <ArrowUpRight
                          size={15}
                          className="mt-1 text-[var(--color-ink-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-ink)]"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div
            className="hidden overflow-hidden border bg-[var(--color-paper)] lg:block"
            style={{ borderColor: "var(--color-line-strong)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1360px] border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="w-[72px] border-r border-b px-4 py-4 text-left font-mono text-[0.68rem] uppercase text-[var(--color-ink-muted)]"
                      style={{ borderColor: "var(--color-line-strong)" }}
                    >
                      Row
                    </th>
                    {categoryOrder.map((category) => (
                      <th
                        key={category}
                        scope="col"
                        className="border-r border-b px-4 py-4 text-left last:border-r-0"
                        style={{ borderColor: "var(--color-line-strong)" }}
                      >
                        <span className="block font-serif text-[1.1rem] leading-tight text-[var(--color-ink)]">
                          {category}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: maxCategoryRows }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                      <th
                        scope="row"
                        className="border-r border-b px-4 py-4 text-left align-top font-mono text-[0.72rem] text-[var(--color-ink-muted)] last:border-b-0"
                        style={{ borderColor: "var(--color-line-strong)" }}
                      >
                        {String(rowIndex + 1).padStart(2, "0")}
                      </th>
                      {categoryOrder.map((category) => {
                        const condition = conditionsByCategory[category][rowIndex];

                        return (
                          <td
                            key={category}
                            className="border-r border-b align-top last:border-r-0"
                            style={{ borderColor: "var(--color-line-strong)" }}
                          >
                            {condition ? (
                              <Link
                                href={`/conditions/${condition.slug}`}
                                className="group flex min-h-[142px] flex-col justify-between px-4 py-4 transition-colors hover:bg-[var(--color-canvas)]"
                              >
                                <span>
                                  <span className="block font-serif text-[1.16rem] leading-tight transition-colors group-hover:text-[var(--color-forest)]">
                                    {condition.shortName ?? condition.name}
                                  </span>
                                  <span className="mt-3 block text-[0.82rem] leading-relaxed text-[var(--color-ink-soft)]">
                                    {condition.tagline}
                                  </span>
                                </span>
                                <ArrowUpRight
                                  size={15}
                                  className="mt-4 self-end text-[var(--color-ink-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-ink)]"
                                />
                              </Link>
                            ) : (
                              <span className="block min-h-[142px] bg-[var(--color-canvas)] opacity-35" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
