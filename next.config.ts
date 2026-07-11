import type { NextConfig } from "next";

const repoName = "Portfolio_AryaRizal";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: false, // Ubah ke false atau hapus
};

export default nextConfig;