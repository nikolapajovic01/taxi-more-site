import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taximore.me"),
  title: "Taxi More — Premium električni taksi prevoz | Herceg Novi",
  description:
    "Tiha, udobna i potpuno električna vožnja kroz Herceg Novi. Premium EV flota, aerodromski transferi po fiksnoj cijeni, dostupni 24/7. Pozovi 19730.",
  keywords: [
    "taxi Herceg Novi",
    "električni taksi",
    "aerodromski transfer Tivat",
    "transfer Dubrovnik",
    "Taxi More",
  ],
  openGraph: {
    title: "Taxi More — Premium električni taksi prevoz",
    description:
      "Tiha, udobna i potpuno električna vožnja kroz Herceg Novi — 24/7.",
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
    <html lang="sr-Latn" className={sora.variable}>
      <body>{children}</body>
    </html>
  );
}
