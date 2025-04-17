/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // should be an object, not a boolean
  },
  serverExternalPackages: ['mongoose'], // moved out of experimental
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
};

module.exports = nextConfig;
