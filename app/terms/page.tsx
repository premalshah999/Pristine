import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Pristine Functional Health services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using this website and scheduling any appointment with Pristine Functional Health, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services. We reserve the right to update these terms at any time, and continued use of the site constitutes acceptance of any changes.`,
  },
  {
    title: "Nature of Services",
    body: `Pristine Functional Health provides virtual functional medicine consultations, nutritional counseling, and wellness coaching services. These services are educational and supportive in nature. They do not constitute the practice of conventional medicine, and they are not a substitute for emergency medical care. Dr. Megha Shah holds a Doctor of Physical Therapy degree and is a Certified Functional Nutritional Counsellor (CFNC). Services are provided within her scope of licensure and certification.`,
  },
  {
    title: "Not a Medical Emergency Service",
    body: `If you are experiencing a medical emergency, call 911 or go to your nearest emergency room immediately. Pristine Functional Health cannot respond to emergencies and is not designed for crisis or acute care situations. Our services are intended for chronic, complex, and lifestyle-related health concerns pursued in a non-emergency context.`,
  },
  {
    title: "FDA Disclaimer",
    body: `The information, protocols, supplements, and dietary recommendations discussed through Pristine Functional Health have not been evaluated by the Food and Drug Administration. Nothing on this website or communicated in sessions is intended to diagnose, treat, cure, or prevent any disease. All content is for educational purposes only. You should always consult with a qualified licensed physician or healthcare provider before beginning any new health program, supplement regimen, or dietary change.`,
  },
  {
    title: "HIPAA and Confidentiality",
    body: `Pristine Functional Health is committed to protecting your protected health information (PHI) in compliance with the Health Insurance Portability and Accountability Act (HIPAA). Your health information will not be shared with any third party without your explicit written authorization, except as required by law. All digital communications containing health information are conducted through HIPAA-compliant platforms.`,
  },
  {
    title: "Appointment Scheduling and Cancellation",
    body: `Appointments are scheduled through our online booking system. We ask that you provide at least 24 hours' notice if you need to cancel or reschedule a session. Late cancellations or no-shows may be subject to a cancellation fee as outlined at the time of booking. We reserve the right to refuse service to individuals who repeatedly cancel without adequate notice.`,
  },
  {
    title: "Payment and Refunds",
    body: `All fees are due at the time of service or as otherwise agreed in writing. Payments are processed through secure, PCI-compliant payment processors. Refunds are considered on a case-by-case basis. Because our consultations involve significant preparation time, partial refunds may apply. No refund will be issued after a session has been completed.`,
  },
  {
    title: "Telehealth Consent",
    body: `By booking a virtual session with Pristine Functional Health, you acknowledge that you understand the benefits and limitations of telehealth services, including potential technology-related disruptions. You consent to the use of video conferencing technology for your consultations. You understand that Dr. Shah may refer you to an in-person provider if telehealth is deemed clinically inadequate for your needs.`,
  },
  {
    title: "Intellectual Property",
    body: `All content on this website — including text, graphics, logos, images, and educational materials — is the intellectual property of Pristine Functional Health and is protected by copyright law. You may not reproduce, distribute, or use our content for commercial purposes without express written permission. Personal, non-commercial use for your own health education is permitted.`,
  },
  {
    title: "Limitation of Liability",
    body: `Pristine Functional Health, Dr. Megha Shah, and affiliated staff are not liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, our services or website. Our total liability to you for any claim arising out of or relating to these terms or our services is limited to the amount you paid for the specific service in question. We do not guarantee specific health outcomes.`,
  },
  {
    title: "Governing Law",
    body: `These Terms and Conditions are governed by and construed in accordance with the laws of the State of Maryland, United States. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Maryland.`,
  },
  {
    title: "Contact",
    body: `If you have questions about these Terms and Conditions, please contact us at drmjshah19@gmail.com or call 240-676-3079. We are happy to clarify anything before you book.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-5">— Legal</p>
            <h1 className="display-xl max-w-[18ch]">
              Terms &amp; <em className="italic-serif">Conditions.</em>
            </h1>
            <p className="lede mt-6 max-w-[56ch]">
              Please read these terms carefully before using our website or
              booking any services. By using Pristine Functional Health, you agree to
              be bound by these terms.
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
            <div
              className="divide-y"
              style={{ borderColor: "var(--color-line)" }}
            >
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
                  <p
                    className="text-[0.96rem] leading-relaxed"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {s.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10">
              <div
                className="rounded-2xl border px-7 py-6"
                style={{
                  borderColor: "var(--color-line)",
                  background: "var(--color-canvas)",
                }}
              >
                <p className="eyebrow mb-3" style={{ color: "var(--color-sage)" }}>Questions?</p>
                <p className="text-[0.94rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                  These terms are meant to be clear, not intimidating. If anything is unclear or you have concerns before booking, please reach out. We&apos;d rather talk it through than have you proceed with uncertainty.
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
