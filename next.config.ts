import type { NextConfig } from "next";

// GitHub Pages only serves static files, so the site is exported to plain HTML.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
