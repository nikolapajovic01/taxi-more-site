export const site = {
  name: "Taxi More",
  tagline: "Vaša vožnja. Naš standard.",
  location: "Igalo, Crna Gora",
  address: "Jadranski put 63",
  hours: "24/7",
  mapEmbed:
    "https://maps.google.com/maps?q=Jadranski+put+63,+Igalo,+Montenegro&z=16&output=embed",
  mapLink: "https://maps.google.com/?q=Jadranski+put+63,+Igalo",
  dajmi: "https://dajmi.me",
  instagram: "https://www.instagram.com/taximore19730/",
  facebook: "https://www.facebook.com/taximore19730",
  appStore: "https://apps.apple.com/me/app/taxi-more/id1566328910",
  playStore:
    "https://play.google.com/store/apps/details?id=com.autocab.taxibooker.taximore19730.hercegnovi1",
};

export const shortNumber = {
  label: "19730",
  tel: "19730",
};

export const phones = [
  { label: "+382 67 019730", tel: "+38267019730", wa: "38267019730" },
  { label: "+382 68 019730", tel: "+38268019730", wa: "38268019730" },
  { label: "+382 69 019730", tel: "+38269019730", wa: "38269019730" },
];

export const extras = [
  { label: "Zapošljavanje", value: "+382 67 247738", tel: "+38267247738" },
  { label: "Servis", value: "031 670 244", tel: "+38231670244" },
  { label: "Tehnički pregled", value: "+382 69 343 069", tel: "+38269343069" },
];

export const nav = [
  { label: "Usluge", href: "#usluge" },
  { label: "Flota", href: "#flota" },
  { label: "Rezervacija", href: "#rezervacija" },
  { label: "Galerija", href: "#galerija" },
];

export type GallerySpan = "feature" | "wide" | "tall";

export const photos = {
  hero: "/fleet/taxi-more/AQ5A9311.webp",
  eco: "/fleet/taxi-more/AQ5A9233.webp",
  ecoSide: "/fleet/taxi-more/AQ5A8880.webp",
  gallery: [
    {
      src: "/fleet/taxi-more/AQ5A9233.webp",
      alt: "Noćna flota Taxi More na električnom punjenju",
      span: "feature" as const,
    },
    {
      src: "/fleet/taxi-more/AQ5A8978.webp",
      alt: "Krovni znak Taxi More na BYD vozilu",
      span: "tall" as const,
    },
    {
      src: "/fleet/taxi-more/AQ5A9288.webp",
      alt: "Taxi More krovni znakovi noću na punjenju",
      span: "tall" as const,
    },
    {
      src: "/fleet/taxi-more/AQ5A9022.webp",
      alt: "Red električnih BYD taksija pod solarim nadstrešnicom",
      span: "wide" as const,
    },
    {
      src: "/fleet/taxi-more/AQ5A9129.webp",
      alt: "Taxi More BYD i Schneider punjač",
    },
    {
      src: "/fleet/taxi-more/AQ5A8901.webp",
      alt: "BYD Taxi More priključeno na punjač",
    },
    {
      src: "/fleet/taxi-more/AQ5A9080.webp",
      alt: "Schneider EV punjači i flota sa TX tablicama",
      span: "wide" as const,
    },
    {
      src: "/fleet/taxi-more/AQ5A9264.webp",
      alt: "Enterijer električnog BYD vozila Taxi More",
      span: "tall" as const,
    },
    {
      src: "/fleet/taxi-more/AQ5A9061.webp",
      alt: "Flota Taxi More i planina iznad Herceg Novog",
      span: "tall" as const,
    },
    {
      src: "/fleet/taxi-more/AQ5A8880.webp",
      alt: "BYD Taxi More na dnevnom punjenju",
    },
    {
      src: "/fleet/taxi-more/AQ5A8892.webp",
      alt: "Tri BYD taksija na punjenju ispred žutog zida",
    },
    {
      src: "/fleet/taxi-more/AQ5A8969.webp",
      alt: "Baza Taxi More sa brojem 19730",
    },
    {
      src: "/fleet/taxi-more/AQ5A9311.webp",
      alt: "Noćna flota Taxi More pod zelenim EV svjetlom",
      span: "wide" as const,
    },
  ],
};

export const services = [
  {
    title: "Gradska i međugradska vožnja",
    text: "Svakodnevne vožnje kroz Herceg Novi i dalje - tiho, čisto i na vrijeme.",
  },
  {
    title: "Aerodromski transfer",
    text: "Tivat i Podgorica. Udoban prevoz sa prostorom za prtljag.",
  },
  {
    title: "Poslovna putovanja",
    text: "Diskretan prevoz za sastanke, hotele i ugovore - na poziv 19730.",
  },
  {
    title: "Kurirske usluge do 20 kg",
    text: "Pošiljka u gradu: javite se, šaljemo vozilo da preuzme i dostavi paket.",
  },
];
