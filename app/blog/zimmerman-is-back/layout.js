export const metadata = {
    title: "Walker Zimmerman Is Back — And So Is Nashville’s Defensive Confidence",
    description:
      "Walker Zimmerman’s return brings leadership and tactical stability to Nashville SC as they push toward the playoffs.",
    openGraph: {
      title: "Walker Zimmerman Is Back — And So Is Nashville’s Defensive Confidence",
      description:
        "Walker Zimmerman’s return brings leadership and tactical stability to Nashville SC as they push toward the playoffs.",
      url: "https://www.us11fc.com/blog/zimmerman-is-back",
      siteName: "US11 FC",
      images: [
        {
          url: "https://example.com/images/zimmerman-hero.jpg", // zameni stvarnom slikom ako imaš
          width: 1200,
          height: 800,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Walker Zimmerman Is Back — And So Is Nashville’s Defensive Confidence",
      description:
        "Walker Zimmerman’s return brings leadership and tactical stability to Nashville SC as they push toward the playoffs.",
      images: ["https://example.com/images/zimmerman-hero.jpg"], // zameni stvarnom slikom
      creator: "@us11fc", // zameni svojim Twitter handleom
    },
  };
  
  export default function ZimmermanLayout({ children }) {
    return <>{children}</>;
  }
  