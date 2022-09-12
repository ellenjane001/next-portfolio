/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.icons8.com', 'gw.alipayobjects.com'],
  },
  // basePath: '/next-portfolio'
}

module.exports = nextConfig
