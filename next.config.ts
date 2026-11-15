import type { NextConfig } from "next";

// Static export for Cloudflare Workers static assets.
// Security headers live in public/_headers (headers() is unsupported with output: "export").
const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
