/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/compteur_detox",
  assetPrefix: "/compteur_detox/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
