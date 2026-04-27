import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function CtaBand({
  eyebrow = "Ready when you are",
  title = "Your body has been telling the truth all along.",
  subtitle = "Book your free 20-minute call. We'll listen, we'll be honest, and you'll leave with a clearer next step than you've had in years.",
  cta = "Book your free call",
  href = "/book",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section
      className="py-24 md:py-36 border-t"
      style={{ borderColor: "var(--color-line)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6 text-center">
        <Reveal>
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h2 className="display max-w-[24ch] mx-auto">{title}</h2>
          <p className="lede mt-7 max-w-[58ch] mx-auto">{subtitle}</p>
          <div className="mt-9 flex justify-center">
            <Link href={href} className="btn btn-primary btn-glow">
              {cta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
