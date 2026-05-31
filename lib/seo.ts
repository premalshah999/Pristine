import type { Metadata } from "next";

export const siteUrl = "https://pristinefunctionalhealth.com";
export const siteName = "Pristine Functional Health";
export const siteDescription =
  "Virtual functional health consultations, functional nutrition counseling, and root-cause wellness coaching with Megha Shah, PT, CFNC.";
export const siteEmail = "contact@pristinefunctionalhealth.com";
export const sitePhone = "+1-240-676-3079";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  email: siteEmail,
  telephone: sitePhone,
  logo: absoluteUrl("/pristine-logo-mark.png"),
  image: absoluteUrl("/pristine-logo-mark.png"),
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  founder: {
    "@type": "Person",
    name: "Megha Shah",
    jobTitle: "Physical Therapist and Certified Functional Nutritional Counsellor",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: sitePhone,
    email: siteEmail,
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en-US",
};
