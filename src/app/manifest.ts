import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Taxi More - Električni taksi Herceg Novi",
    short_name: "Taxi More",
    description:
      "Električni taksi prevoz u Herceg Novom i Igalu. Pozovite 19730.",
    start_url: "/",
    display: "standalone",
    background_color: "#050a14",
    theme_color: "#050a14",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
