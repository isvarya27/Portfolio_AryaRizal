import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "Portfolio_AryaRizal";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true, // wajib diaktifkan untuk GitHub Pages
  },
  trailingSlash: true, // tambahan ini opsional tapi direkomendasikan
};

export default nextConfig;
