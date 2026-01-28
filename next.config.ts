import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "kestrelvillage.com" }],
        destination: "https://www.kestrelvillage.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
