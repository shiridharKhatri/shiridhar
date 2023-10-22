/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["img.icons8.com"],
    unoptimized: true,
  },
  basePath: '/github-pages',
};

module.exports = nextConfig;
