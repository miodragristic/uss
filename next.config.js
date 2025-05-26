/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supersport.com',
      },
      {
        protocol: 'https',
        hostname: '**.goal.com',
      },
      {
        protocol: 'https',
        hostname: '**.hu',
      },
      {
        protocol: 'https',
        hostname: '**.sempreinter.com',
      },
      {
        protocol: 'https',
        hostname: '**.nogomania.com',
      },
      {
        protocol: 'https',
        hostname: '**.spox.com',
      },
      {
        protocol: 'https',
        hostname: '**.parismatch.com',
      },
      {
        protocol: 'https',
        hostname: '**.topps.com',
      },
      {
        protocol: 'https',
        hostname: '**.mlsstore.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.mlssoccer.com',
      },
      {
        protocol: 'https',
        hostname: '**.unidadeditorial.es',
      },
      {
        protocol: 'https',
        hostname: '**.bundesliga.com',
      },
      {
        protocol: 'https',
        hostname: '**.telegram.hr',
      },
      {
        protocol: 'https',
        hostname: '**.amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'drop-assets.ea.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'the18.com',
      },
    ],
  },
  env: {
    PRERENDER_TOKEN: process.env.PRERENDER_TOKEN || '',
  },
};

module.exports = nextConfig;



