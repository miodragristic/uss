export const metadata = {
    title: 'Gaming',
    description: 'Explore games and consoles!',
    openGraph: {
      title: 'Gaming',
      description: 'Explore games and consoles!',
      url: 'https://tvoj-sajt.com/games', // zameni sa pravom URL adresom
      siteName: 'My Game Store',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8', // primer slike
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Gaming',
      description: 'Explore games and consoles!',
      images: ['https://images.unsplash.com/photo-1493711662062-fa541adb3fc8'], // isto kao openGraph
      creator: '@tvojTwitterHandle', // stavi svoj twitter username
    },
  };
  
  export default function GamesLayout({ children }) {
    return <>{children}</>;
  }
  
  