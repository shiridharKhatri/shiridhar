/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
  images: {
    domains: ["img.icons8.com", "localhost:5000", "calm-lime-caiman-hem.cyclic.app"],
    unoptimized: true,
  },
  // basePath: '/github-pages',n
  
};

module.exports = nextConfig;
