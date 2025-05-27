// app/blog/rivalry-on-the-edge/layout.js

export const metadata = {
  title: "Chaos in California: LA Galaxy vs San Diego FC Turns Violent",
  description:
    "Tensions explode as a brawl erupts between fans during LA Galaxy vs San Diego FC, raising questions about safety and rivalry culture in MLS.",
  openGraph: {
    title: "Chaos in California: LA Galaxy vs San Diego FC Turns Violent",
    description:
      "Tensions explode as a brawl erupts between fans during LA Galaxy vs San Diego FC, raising questions about safety and rivalry culture in MLS.",
    url: "https://www.us11fc.com/blog/rivalry-on-the-edge",
    siteName: "US11FC",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2212164120/crop/MM5DIOBWGU5DENZTG45G433XMU5DAORSGUZQ====/GettyImages-2212164120.jpg?auto=webp&format=pjpg&width=1200&quality=80",
        width: 1200,
        height: 800,
        alt: "LA Galaxy vs San Diego FC Brawl",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaos in California: LA Galaxy vs San Diego FC Turns Violent",
    description:
      "Tensions explode as a brawl erupts between fans during LA Galaxy vs San Diego FC, raising questions about safety and rivalry culture in MLS.",
    images: [
      "https://assets.goal.com/images/v3/getty-2212164120/crop/MM5DIOBWGU5DENZTG45G433XMU5DAORSGUZQ====/GettyImages-2212164120.jpg?auto=webp&format=pjpg&width=1200&quality=80",
    ],
    creator: "@us11fc", // Promeni ako koristiš drugi Twitter handle
  },
};

export default function RivalryLayout({ children }) {
  return <>{children}</>;
}

  
