import type { NextConfig } from "next";

// No GitHub Pages o site fica em /boni-representacoes.
// Se for para um domínio próprio, defina NEXT_PUBLIC_BASE_PATH="" no build.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/boni-representacoes";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
