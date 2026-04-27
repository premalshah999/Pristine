import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ChatFab } from "@/components/chat-fab";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pristinefunctionalhealth.com"),
  title: {
    default: "Pristine Functional Health — Root-cause functional medicine, virtually",
    template: "%s · Pristine Functional Health",
  },
  description:
    "Virtual functional medicine with Dr. Megha Shah, PT & Certified Functional Nutritional Counsellor. Find the real reason you don't feel like yourself — and rebuild from the root up.",
  keywords: [
    "functional medicine",
    "root cause medicine",
    "virtual functional medicine",
    "Hashimoto's",
    "thyroid",
    "PCOS",
    "gut health",
    "autoimmune",
    "Dr. Megha Shah",
    "Pristine Functional Health",
  ],
  openGraph: {
    title: "Pristine Functional Health — Root-cause functional medicine, virtually",
    description:
      "Find the real reason you don't feel like yourself — and rebuild from the root up.",
    siteName: "Pristine Functional Health",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='44' fill='%236E8164'/%3E%3Cellipse cx='50' cy='50' rx='28' ry='34' fill='%23F6F1E9'/%3E%3Cg fill='%231B1825'%3E%3Ccircle cx='50' cy='50' r='2.2'/%3E%3Ccircle cx='42' cy='40' r='1.6'/%3E%3Ccircle cx='58' cy='40' r='1.6'/%3E%3Ccircle cx='42' cy='60' r='1.6'/%3E%3Ccircle cx='58' cy='60' r='1.6'/%3E%3Ccircle cx='38' cy='50' r='1.6'/%3E%3Ccircle cx='62' cy='50' r='1.6'/%3E%3C/g%3E%3C/svg%3E"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var t = localStorage.getItem('pristine-theme');
                  if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  if (t === 'dark') document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <SiteNav />
          <main className="relative">{children}</main>
          <SiteFooter />
          <ChatFab />
        </ThemeProvider>
      </body>
    </html>
  );
}
