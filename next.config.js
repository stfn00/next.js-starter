/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
    styledComponents: true,
  },
}

module.exports = nextConfig
