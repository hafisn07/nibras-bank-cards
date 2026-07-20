import type { NextConfig } from "next";

const HOST_URL = process.env.HOST_URL ?? "http://localhost:3000";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Multi-Zones: prefix this zone's assets. The shell proxies /cards-static/*.
  assetPrefix: "/cards-static",
  experimental: {
    serverActions: { allowedOrigins: [new URL(HOST_URL).host] },
  },
};

export default nextConfig;
