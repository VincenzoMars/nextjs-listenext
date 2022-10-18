/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.deezer.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
