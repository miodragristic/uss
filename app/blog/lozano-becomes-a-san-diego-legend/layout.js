export const metadata = {
  title: 'Chucky Lozano: San Diego’s Last-Minute Hero Against LA Galaxy',
  description:
    'Hirving “Chucky” Lozano scores a dramatic 95th-minute winner to give San Diego FC a thrilling victory over reigning MLS champions LA Galaxy.',
  openGraph: {
    title: 'Chucky Lozano: San Diego’s Last-Minute Hero Against LA Galaxy',
    description:
      'Lozano scores in the 95th minute to lift San Diego FC over LA Galaxy. The city erupts. A moment to remember.',
    url: 'https://www.us11fc.com/blog/lozano-becomes-a-san-diego-legend', // tačan URL tvoje stranice
    siteName: 'US11 FC',
    images: [
      {
        url: 'https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60',
        width: 1200,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chucky Lozano: San Diego’s Last-Minute Hero Against LA Galaxy',
    description:
      '95th-minute winner! Lozano lifts San Diego FC past LA Galaxy in dramatic style.',
    images: [
      'https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    ],
    creator: '@us11fc', // stavi svoj Twitter handle ako imaš
  },
};

export default function LozanoLayout({ children }) {
  return <>{children}</>;
}
