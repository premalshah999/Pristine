import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Pristine Functional Health collects, uses, and protects your personal information.",
  path: "/privacy",
});

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
    body: `Health information you share during consultations, intake forms, uploaded lab documents, or secure care communications may be treated as Protected Health Information (PHI). PHI is stored on secure platforms with encryption, access controls, and administrative safeguards. It is accessed only by Megha Shah and necessary administrative support directly involved in scheduling, payment, documentation, or care coordination. PHI is not sold, rented, or used for advertising retargeting. It is not shared with third parties without your written authorization except as permitted or required by law.`,
  },
  {
    title: "Cookies and Analytics",
    body: `Our website uses cookies to remember your preferences and provide a consistent experience. We use privacy-respecting analytics (such as aggregate traffic data) to understand how our site is used. We do not use invasive tracking technologies. You can disable cookies in your browser settings without affecting the core functionality of our site.`,
  },
  {
    title: "Third-Party Services",
    body: `We use trusted third-party tools for appointment scheduling, payment processing, forms, secure document exchange, and video consultations. When a tool may handle PHI, we choose vendors intended for healthcare or privacy-sensitive workflows, use business-associate safeguards when applicable, and share only the minimum information necessary for them to provide their services. These providers maintain their own privacy and security practices. We do not use social media pixels or ad-retargeting technologies.`,
  },
  {
    title: "Data Security",
    body: `We use reasonable administrative, technical, and physical safeguards including SSL encryption, secure systems, role-based access, and careful data handling practices. No method of electronic transmission or storage is 100% secure. Standard email and text messaging may not be appropriate for sensitive health details, so we encourage you to use secure channels whenever available.`,
  },
  {
    title: "Security Incidents",
    body: `If we become aware of a privacy or security incident involving your information, we will review the facts promptly, take reasonable steps to contain the issue, and provide notices required by applicable law. We also encourage clients to contact us immediately if they believe information was sent to the wrong place or accessed by an unauthorized person.`,
  },
  {
    title: "Data Retention",
    body: `We retain client records in accordance with applicable law and professional standards — typically a minimum of seven (7) years for health records, or as required by state regulations. When retention is no longer required, data is securely deleted or anonymized.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to request access to your records, request corrections or amendments, ask for an accounting of certain disclosures, request limits on some uses or disclosures, and request confidential communications through a preferred method when feasible. Some records must be retained under applicable law and professional standards, so deletion requests may be limited. To exercise any privacy rights, contact us in writing at contact@pristinefunctionalhealth.com. We will respond as promptly as possible and within applicable legal timelines.`,
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
    body: `For questions about this Privacy Policy or to exercise your data rights, contact Megha Shah at contact@pristinefunctionalhealth.com or 240-676-3079. For HIPAA-specific inquiries, you may also contact the U.S. Department of Health and Human Services Office for Civil Rights.`,
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
              Last updated: May 2026
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
                  <a href="mailto:contact@pristinefunctionalhealth.com" style={{ color: "var(--color-forest)" }}>contact@pristinefunctionalhealth.com</a>
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
