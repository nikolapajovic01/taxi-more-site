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
  metadataBase: new URL("https://taximore.me"),
  title: "Taxi More 19730 - Električni taksi | Herceg Novi",
  description:
    "Tišina je nova energija grada. 80 električnih BYD vozila, 24/7. Pozovite 19730. Sestrinski brend DAJMI grupe.",
  keywords: [
    "taxi Herceg Novi",
    "Taxi More",
    "19730",
    "električni taksi",
    "aerodromski transfer",
  ],
  openGraph: {
    title: "Taxi More 19730 - Električni taksi Herceg Novi",
    description: "Tišina je nova energija grada. Pozovite 19730.",
    locale: "sr_Latn",
    type: "website",
    url: "https://taximore.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn" className={`${outfit.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
