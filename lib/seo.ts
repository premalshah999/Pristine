import type { Metadata } from "next";
import { conditions } from "@/lib/conditions";
import { services } from "@/lib/services";

export const siteUrl = "https://pristinefunctionalhealth.com";
export const siteName = "Pristine Functional Health";
export const siteDescription =
  "Online functional health consultations, functional nutrition counseling, and root-cause wellness coaching for adults across the United States with Megha Shah, PT, CFNC.";
export const siteEmail = "contact@pristinefunctionalhealth.com";
export const sitePhone = "+1-240-676-3079";

export const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
] as const;

export const serviceAreaSchema = [
  { "@type": "Country", name: "United States" },
  { "@type": "AdministrativeArea", name: "Maryland" },
  { "@type": "AdministrativeArea", name: "Northeastern United States" },
  ...usStates.map((state) => ({ "@type": "AdministrativeArea", name: state })),
];

export const virtualServiceChannelJsonLd = {
  "@type": "ServiceChannel",
  serviceUrl: absoluteUrl("/book-appointment"),
  availableLanguage: "English",
  serviceLocation: {
    "@type": "VirtualLocation",
    url: absoluteUrl("/book-appointment"),
  },
};

export const adultWellnessAudienceJsonLd = {
  "@type": "PeopleAudience",
  suggestedMinAge: 18,
  geographicArea: serviceAreaSchema,
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = "/pristine-logo-mark.png",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: keywords?.length ? dedupe(keywords) : undefined,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 512,
          height: 512,
          alt: `${siteName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function dedupe<T>(items: T[]): T[] {
  return Array.from(new Set(items));
}

export function conditionKeywords(conditionName: string, category?: string) {
  return dedupe([
    conditionName,
    `${conditionName} support`,
    `${conditionName} functional health support`,
    `${conditionName} online consultation`,
    `${conditionName} virtual consultation`,
    category ?? "",
    "online functional health consultation",
    "virtual functional health consultation",
    "root cause wellness",
    "functional nutrition",
  ].filter(Boolean));
}

export function serviceKeywords(serviceName: string) {
  return dedupe([
    serviceName,
    `${serviceName} online`,
    `${serviceName} virtual consultation`,
    `${serviceName} functional health support`,
    "online functional health consultation",
    "virtual functional health consultation",
    "root cause wellness",
    "functional nutrition",
  ]);
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function itemListJsonLd({
  id,
  name,
  description,
  items,
}: {
  id: string;
  name: string;
  description: string;
  items: { name: string; url: string; description?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": id,
    name,
    description,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: item.url,
      name: item.name,
      description: item.description,
    })),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  email: siteEmail,
  telephone: sitePhone,
  logo: absoluteUrl("/pristine-logo-mark.png"),
  image: absoluteUrl("/pristine-logo-mark.png"),
  slogan: "Beyond symptoms. Into true healing.",
  description: siteDescription,
  areaServed: serviceAreaSchema,
  serviceType: [
    "Online functional health consultation",
    "Virtual functional health coaching",
    "Functional nutrition counseling",
    "Root-cause wellness coaching",
  ],
  knowsAbout: dedupe([
    "functional health",
    "functional nutrition",
    "root-cause wellness",
    "online functional health consultation",
    "gut health",
    "hormone health",
    "thyroid health",
    "fatigue",
    "metabolic health",
    "functional weight loss",
    ...services.map((service) => service.name),
    ...conditions.map((condition) => condition.name),
  ]),
  founder: {
    "@type": "Person",
    name: "Megha Shah",
    jobTitle: "Physical Therapist and Certified Functional Nutritional Counsellor",
    worksFor: { "@id": `${siteUrl}/#organization` },
    knowsAbout: [
      "functional nutrition",
      "root-cause wellness",
      "physical therapy",
      "online functional health consultation",
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: sitePhone,
    email: siteEmail,
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: absoluteUrl("/book-appointment"),
      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "Free virtual consultation",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Online functional health services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": absoluteUrl(`/services/${service.slug}#service`),
        name: service.name,
        description: service.summary,
        url: absoluteUrl(`/services/${service.slug}`),
        serviceType: service.name,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: serviceAreaSchema,
        availableChannel: virtualServiceChannelJsonLd,
      },
    })),
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
  about: { "@id": `${siteUrl}/#organization` },
};
