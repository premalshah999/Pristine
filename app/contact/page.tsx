import { Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = {
  title: "Contact",
  description:
    "Reach Pristine Functional Health by phone, email, or book a free 20-minute call.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-16">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-5">— Contact</p>
            <h1 className="display-xl max-w-[16ch]">
              We're <em className="italic-serif">here.</em> And we read everything.
            </h1>
            <p className="lede mt-7 max-w-[58ch]">
              Phone, email, or a free discovery call — whichever feels easiest.
              Megha personally reads incoming inquiries and responds within one
              business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="py-16 md:py-24 border-t"
        style={{
          borderColor: "var(--color-line)",
          background: "var(--color-bone-2)",
        }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {[
              {
                icon: <Phone size={18} />,
                eyebrow: "Phone",
                title: "240-676-3079",
                href: "tel:+12406763079",
                copy: "Leave a voicemail if we don't pick up — we always call back.",
              },
              {
                icon: <Mail size={18} />,
                eyebrow: "Email",
                title: "drmjshah19@gmail.com",
                href: "mailto:drmjshah19@gmail.com",
                copy: "For new patient inquiries, press, or partnership questions.",
              },
              {
                icon: <Clock size={18} />,
                eyebrow: "Hours",
                title: "Mon — Fri, 9 AM – 5 PM ET",
                href: undefined,
                copy: "Patient communications via portal are available 24/7.",
              },
            ].map((row, i) => (
              <Reveal key={row.eyebrow} delay={i * 60}>
                <article
                  className="card-edit p-7 md:p-8 h-full"
                  style={{ background: "var(--color-paper)" }}
                >
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full mb-5"
                    style={{ background: "var(--color-lavender)" }}
                  >
                    {row.icon}
                  </span>
                  <p className="eyebrow mb-2">{row.eyebrow}</p>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="block font-serif text-[1.4rem] leading-tight hover:text-[var(--color-lavender-deep)] transition-colors break-words"
                    >
                      {row.title}
                    </a>
                  ) : (
                    <p className="font-serif text-[1.4rem] leading-tight">{row.title}</p>
                  )}
                  <p className="mt-3 text-[0.92rem] text-[var(--color-ink-soft)] leading-relaxed">
                    {row.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="The fastest way to start"
        title="Just book the call."
        subtitle="20 minutes, virtual, free. The most efficient way to find out if we can help — and the lowest possible barrier to getting your real questions answered."
      />
    </>
  );
}
