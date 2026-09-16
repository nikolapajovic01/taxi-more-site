import type { Metadata } from "next";
import { Oswald, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taximore.com"),
  title: "Taxi More 19730 - Električni taksi | Herceg Novi",
  description:
    "Tišina je nova energija grada. 80 električnih BYD vozila, 24/7. Pozovite 19730. Sestrinski brend DAJMI grupe.",
  keywords: [
    "taxi Herceg Novi",
    "taxi Igalo",
    "Taxi More",
    "19730",
    "električni taksi",
    "aerodromski transfer",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Taxi More 19730 - Električni taksi Herceg Novi",
    description: "Tišina je nova energija grada. Pozovite 19730.",
    locale: "sr_Latn",
    type: "website",
    url: "https://taximore.com",
    siteName: "Taxi More",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi More 19730 - Električni taksi Herceg Novi",
    description: "Tišina je nova energija grada. Pozovite 19730.",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Taxi More",
  image: "https://taximore.com/opengraph-image",
  telephone: "+382 19730",
  priceRange: "€€",
  url: "https://taximore.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jadranski put 63",
    addressLocality: "Igalo",
    addressRegion: "Herceg Novi",
    postalCode: "85347",
    addressCountry: "ME",
  },
  areaServed: [
    { "@type": "City", name: "Herceg Novi" },
    { "@type": "City", name: "Igalo" },
    { "@type": "City", name: "Tivat" },
    { "@type": "City", name: "Podgorica" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.instagram.com/taximore19730/",
    "https://www.facebook.com/taximore19730",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn" className={`${outfit.variable} ${oswald.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
