import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { asset } from "@/src/lib/asset";
import { SITE } from "@/src/lib/site";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const siteTitle = "Trilinha Bordados";
const siteDescription =
  "Bordado computadorizado em jalecos, polos e uniformes em Maringá–PR. Patches bordados (termocolante/velcro) com envio para todo o Brasil.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Trilinha Bordados | Bordado Computadorizado e Patches em Maringá",
    template: "%s | Trilinha Bordados",
  },
  description: siteDescription,
  alternates: { canonical: "/" },
  category: "Bordados e Personalização",
  applicationName: siteTitle,
  authors: [{ name: siteTitle, url: SITE.url }],
  creator: siteTitle,
  publisher: siteTitle,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: asset("/images/trilhinha_logo.svg"), type: "image/svg+xml" }],
    shortcut: [asset("/images/trilhinha_logo.svg")],
    apple: [{ url: asset("/images/logo.png"), sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 1024,
        alt: "Logo Trilinha Bordados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}/images/logo.png`,
    logo: `${SITE.url}/images/trilhinha_logo.svg`,
    telephone: `+55${SITE.whatsapp.slice(2)}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: `+55${SITE.whatsapp.slice(2)}`,
        availableLanguage: ["Portuguese"],
        areaServed: "BR",
      },
    ],
    areaServed: ["Maringá - PR", "Brasil"],
    sameAs: [SITE.socials.instagram, SITE.socials.facebook, SITE.socials.shopee],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "pt-BR",
  };

  return (
    <html lang="pt-BR">
      <body className={`${lexend.variable} min-h-screen`}>
        <JsonLd data={localBusiness} />
        <JsonLd data={webSite} />
        <Header />
        <div className="page-wrap pt-5 md:pt-6">
          <div className="glass-panel p-4 md:p-6">{children}</div>
        </div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
