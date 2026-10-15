import type { NextConfig } from "next";

// O site roda na raiz do domínio próprio (bonirepresentacoes.com.br).
// Para voltar a publicar em nathanfantini.github.io/boni-representacoes,
// defina NEXT_PUBLIC_BASE_PATH="/boni-representacoes" no build.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
