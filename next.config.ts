import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.taximore.com" }],
        destination: "https://taximore.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
