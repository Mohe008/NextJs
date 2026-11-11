import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  allowedDevOrigins: [
    'local-origin.dev',          // Match an exact custom local domain
    '*.local-origin.dev',        // Match direct subdomains (e.g., app.local-origin.dev)
    '**.tunnel.example.com',     // Match deep nested subdomains for remote tunnels
    '192.168.0.3',               // Match a specific local network IP (e.g., testing on a phone)
  ],
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
