import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { conditions } from "@/lib/conditions";
import { services } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer
      className="border-t mt-16"
      style={{ borderColor: "var(--color-line)", background: "var(--color-bone-2)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6 pt-16 md:pt-20 pb-0">

        {/* Main columns */}
        <div className="grid grid-cols-12 gap-y-10 gap-x-8">
          <div className="col-span-12 md:col-span-4">
            <Logo size={30} />
            <p className="text-[0.95rem] mt-4 max-w-[34ch] leading-relaxed font-medium" style={{ color: "var(--color-ink)" }}>
              Virtual functional medicine, rooted in real clinical experience.
              Calm, science-backed, deeply human.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <SocialIcon href="https://instagram.com" label="Instagram">
                <Instagram size={15} />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" label="LinkedIn">
                <Linkedin size={15} />
              </SocialIcon>
              <SocialIcon href="https://youtube.com" label="YouTube">
                <Youtube size={15} />
              </SocialIcon>
            </div>
          </div>

          <FooterCol title="Conditions">
            {conditions.slice(0, 7).map((c) => (
              <FooterLink key={c.slug} href={`/conditions/${c.slug}`}>
                {c.shortName ?? c.name}
              </FooterLink>
            ))}
            <li>
              <Link
                href="/conditions"
                className="text-[0.9rem] transition-colors"
                style={{ color: "var(--color-forest)" }}
              >
                All conditions →
              </Link>
            </li>
          </FooterCol>

          <FooterCol title="Services">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.shortName ?? s.name}
              </FooterLink>
            ))}
            <li>
              <Link
                href="/services"
                className="text-[0.9rem] transition-colors"
                style={{ color: "var(--color-forest)" }}
              >
                All services →
              </Link>
            </li>
          </FooterCol>

          <FooterCol title="Practice">
            <FooterLink href="/about">About Dr. Shah</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/new-patient-special">New patient special</FooterLink>
            <FooterLink href="/book-appointment">Book an appointment</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <li className="pt-3 mt-2 border-t" style={{ borderColor: "var(--color-line)" }}>
              <a
                href="tel:+12406763079"
                className="text-[0.9rem] transition-colors hover:text-[var(--color-forest)]"
                style={{ color: "var(--color-ink)" }}
              >
                240-676-3079
              </a>
            </li>
            <li>
              <a
                href="mailto:drmjshah19@gmail.com"
                className="text-[0.9rem] transition-colors break-all hover:text-[var(--color-forest)]"
                style={{ color: "var(--color-ink)" }}
              >
                drmjshah19@gmail.com
              </a>
            </li>
          </FooterCol>
        </div>

        {/* HIPAA + FDA disclaimers */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            className="rounded-xl border px-5 py-4"
            style={{ borderColor: "var(--color-line)", background: "var(--color-canvas)" }}
          >
            <p
              className="font-mono text-[0.7rem] tracking-[0.18em] font-semibold uppercase mb-2"
              style={{ color: "var(--color-forest)" }}
            >
              HIPAA Compliance
            </p>
            <p className="text-[0.88rem] leading-relaxed font-medium" style={{ color: "var(--color-ink)" }}>
              Pristine Functional Health is committed to protecting your health information in full
              compliance with HIPAA. All client records and communications are handled with strict
              confidentiality, stored securely, and never shared without your written consent.
            </p>
          </div>
          <div
            className="rounded-xl border px-5 py-4"
            style={{ borderColor: "var(--color-line)", background: "var(--color-canvas)" }}
          >
            <p
              className="font-mono text-[0.7rem] tracking-[0.18em] font-semibold uppercase mb-2"
              style={{ color: "var(--color-forest)" }}
            >
              FDA Disclaimer
            </p>
            <p className="text-[0.88rem] leading-relaxed font-medium" style={{ color: "var(--color-ink)" }}>
              These statements have not been evaluated by the Food and Drug Administration.
              Content on this site is not intended to diagnose, treat, cure, or prevent any disease.
              It is for educational purposes only. Consult a qualified healthcare provider before
              making any changes to your health regimen.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 pb-8 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4 flex-wrap"
          style={{ borderColor: "var(--color-line)" }}
        >
          <p className="text-[0.85rem] font-medium" style={{ color: "var(--color-ink-soft)" }}>
            © {new Date().getFullYear()} Pristine Functional Health. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms & Conditions" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[0.85rem] font-medium underline underline-offset-2 transition-colors hover:text-[var(--color-forest)]"
                style={{ color: "var(--color-ink-soft)" }}
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="text-[0.85rem] md:max-w-[34ch] leading-relaxed font-medium" style={{ color: "var(--color-ink-soft)" }}>
            Functional medicine is complementary care — not a substitute for emergency medical
            services. In an emergency, call 911.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all hover:-translate-y-0.5 hover:bg-[var(--color-forest)] hover:text-[var(--color-linen)] hover:border-[var(--color-forest)]"
      style={{
        borderColor: "var(--color-line-strong)",
        color: "var(--color-ink-soft)",
      }}
    >
      {children}
    </a>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="col-span-6 md:col-span-2 lg:col-span-2">
      <p className="eyebrow mb-4">{title}</p>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[0.9rem] transition-colors hover:text-[var(--color-ink)]"
        style={{ color: "var(--color-ink-soft)" }}
      >
        {children}
      </Link>
    </li>
  );
}
