import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Taxi More - Električni taksi Herceg Novi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/fleet/taxi-more/taxi-more-clean-alpha.png"),
    "base64"
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
          background:
            "linear-gradient(135deg, #050a14 0%, #0c1730 55%, #050a14 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} height={110} alt="" />
        <div
          style={{
            marginTop: 44,
            fontSize: 68,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
          }}
        >
          Električni taksi
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#3b82f6",
            lineHeight: 1.1,
          }}
        >
          Herceg Novi
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          80 BYD vozila · 24/7 · Pozovite 19730
        </div>
      </div>
    ),
    { ...size }
  );
}
