/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.supersport.com',
      'assets.goal.com',
      'nb1.hu',
      'icdn.sempreinter.com',
      'en.nogomania.com',
      'assets.spox.com',
      'www.parismatch.com',
      'images.topps.com',
      'www.mlsstore.com',
      'i.pinimg.com',
      'images.unsplash.com',
      'www.mlssoccer.com',
      'phantom-marca.unidadeditorial.es',
      'assets.bundesliga.com',
      'www.telegram.hr',
      'www.amazon.com',
      'm.media-amazon.com',
      'drop-assets.ea.com',
      'images.pexels.com',
      'the18.com',
    ],
  },
  env: {
    PRERENDER_TOKEN: process.env.PRERENDER_TOKEN,
  },
};

module.exports = nextConfig;
