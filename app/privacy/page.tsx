import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = {
  title: "Privacy Policy",
  description: "How Pristine Functional Health collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: `We collect information you voluntarily provide when booking appointments, submitting forms, or contacting us — including your name, email address, phone number, and health history. We also collect limited technical data (IP address, browser type, pages visited) through standard analytics tools to improve our website. We do not sell your data to third parties.`,
  },
  {
    title: "How We Use Your Information",
    body: `Your information is used solely to provide and improve our services: scheduling appointments, communicating with you about your care, sending appointment reminders, and responding to inquiries. With your consent, we may send educational content related to functional health. You may opt out of marketing communications at any time.`,
  },
  {
    title: "Protected Health Information (PHI)",
    body: `Health information you share during consultations or intake forms is treated as Protected Health Information (PHI) under HIPAA. PHI is stored on HIPAA-compliant, encrypted platforms. It is accessed only by Dr. Megha Shah and necessary administrative staff directly involved in your care. PHI is never shared with third parties without your written authorization, except as required by law.`,
  },
  {
    title: "Cookies and Analytics",
    body: `Our website uses cookies to remember your preferences and provide a consistent experience. We use privacy-respecting analytics (such as aggregate traffic data) to understand how our site is used. We do not use invasive tracking technologies. You can disable cookies in your browser settings without affecting the core functionality of our site.`,
  },
  {
    title: "Third-Party Services",
    body: `We use trusted third-party tools for appointment scheduling (Cal.com), payment processing (Stripe or equivalent), and video consultations (a HIPAA-compliant telehealth platform). These providers have their own privacy policies and we only share the minimum information necessary for them to provide their services. We do not use social media pixels or ad-retargeting technologies.`,
  },
  {
    title: "Data Security",
    body: `We use industry-standard security measures including SSL encryption, secure servers, and access controls to protect your information. While we take all reasonable precautions, no method of electronic transmission is 100% secure. We encourage you not to share sensitive health information via unsecured channels such as standard email.`,
  },
  {
    title: "Data Retention",
    body: `We retain client records in accordance with applicable law and professional standards — typically a minimum of seven (7) years for health records, or as required by state regulations. When retention is no longer required, data is securely deleted or anonymized.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to access, correct, or request deletion of your personal information at any time. For health records governed by HIPAA, you have the right to request copies of your records, request amendments, and receive an accounting of disclosures. To exercise any of these rights, contact us in writing at drmjshah19@gmail.com. We will respond within 30 days.`,
  },
  {
    title: "Children's Privacy",
    body: `Our services are intended for adults aged 18 and older. We do not knowingly collect personal information from minors. If you believe a child has submitted information through our site, please contact us immediately and we will promptly delete it.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The most current version will always be available on this page with the date of last revision. Continued use of our website following any updates constitutes acceptance of the revised policy.`,
  },
  {
    title: "Contact Us",
    body: `For questions about this Privacy Policy or to exercise your data rights, contact Dr. Megha Shah at drmjshah19@gmail.com or 240-676-3079. For HIPAA-specific inquiries, you may also contact the U.S. Department of Health and Human Services Office for Civil Rights.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-5">— Legal</p>
            <h1 className="display-xl max-w-[16ch]">
              Privacy <em className="italic-serif">Policy.</em>
            </h1>
            <p className="lede mt-6 max-w-[56ch]">
              Your privacy matters. Here is exactly what we collect, why we
              collect it, and how we protect it — in plain language.
            </p>
            <p className="mt-4 text-[0.84rem]" style={{ color: "var(--color-ink-muted)" }}>
              Last updated: April 2025
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="max-w-[820px]">
            <div className="divide-y" style={{ borderColor: "var(--color-line)" }}>
              {sections.map((s, i) => (
                <Reveal key={s.title} delay={i * 30} className="py-8">
                  <h2
                    className="font-serif text-[1.45rem] leading-snug mb-4 tracking-tight"
                    style={{ color: "var(--color-ink)" }}
                  >
                    <span
                      className="font-mono text-[0.72rem] tracking-widest mr-3"
                      style={{ color: "var(--color-sage)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </h2>
                  <p className="text-[0.96rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                    {s.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10">
              <div
                className="rounded-2xl border px-7 py-6"
                style={{ borderColor: "var(--color-line)", background: "var(--color-canvas)" }}
              >
                <p className="eyebrow mb-3" style={{ color: "var(--color-sage)" }}>Your data, your rights</p>
                <p className="text-[0.94rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                  If you have any questions about how your information is handled, or want to request access, correction, or deletion of your data, reach out directly. We take these requests seriously.
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-[0.9rem]">
                  <a href="tel:+12406763079" style={{ color: "var(--color-forest)" }}>240-676-3079</a>
                  <a href="mailto:drmjshah19@gmail.com" style={{ color: "var(--color-forest)" }}>drmjshah19@gmail.com</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
