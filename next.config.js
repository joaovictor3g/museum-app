/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.metmuseum.org"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
