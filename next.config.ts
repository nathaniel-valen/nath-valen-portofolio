import { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig = {
  // 🚫 Matikan Turbopack (penyebab error lightningcss)
  experimental: {
    turbo: false,
  },

  // 🚧 React Compiler masih experimental, jadi matikan dulu
  reactCompiler: false,

  reactStrictMode: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
