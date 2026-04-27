import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { ConditionsList } from "@/components/sections/conditions-list";
import { ServicesList } from "@/components/sections/services-list";
import { Testimonials } from "@/components/sections/testimonials";
import { AboutPreview } from "@/components/sections/about-preview";
import { Process } from "@/components/sections/process";
import { Special } from "@/components/sections/special";
import { Newsletter } from "@/components/sections/newsletter";
import { AiChatFeature } from "@/components/sections/ai-chat-feature";
import { CtaBand } from "@/components/sections/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <ConditionsList />
      <AboutPreview />
      <ServicesList />
      <Process />
      <Testimonials />
      <Special />
      <AiChatFeature />
      <Newsletter />
      <CtaBand />
    </>
  );
}
