

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SanDiegoLogo from '../../public/logos/San_Diego_FC_logo.svg.png';
import Us11 from '../../public/11.png';
 

const Blog = () => {
  const blogPosts = [
    {
      id: 24,
      title: 'Why Mauricio Pochettino Is Facing Major Backlash Ahead of the 2025 Gold Cup',
      author: 'Mio Ristic',
      date: 'May 27, 2025',
      excerpt: 'The upcoming 2025 CONCACAF Gold Cup is stirring up excitement on and off the pitch, especially among U.S. soccer fans.',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2193742272/crop/MM5DCOBQHA5DCMBRG45G433XMU5DKOBZHI3DI===/GettyImages-2193742272.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      slug: 'why-mauricio-pochettino-is-facing',
    },
    {
      id: 23,
      title: 'Chaos in California: LA Galaxy vs San Diego FC Turns Violent',
      author: 'Mio Ristic',
      date: 'May 26, 2025',
      excerpt: 'After the final whistle blew in a tense showdown between LA Galaxy and new rivals San Diego FC',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2212164120/crop/MM5DIOBWGU5DENZTG45G433XMU5DAORSGUZQ====/GettyImages-2212164120.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      slug: 'rivalry-on-the-edge',
    },
    {
      id: 21,
      title: 'Chucky Lozano: San Diego’s Last-Minute Hero',
      author: 'Mio Ristic',
      date: 'May 25, 2025',
      excerpt: 'Hirving "Chucky" Lozano scored a dramatic 95th-minute winner to secure a thrilling victory for San Diego FC against LA Galaxy.',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      slug: 'lozano-becomes-a-san-diego-legend',
    },
    {
      id: 20,
      title: 'Walker Zimmerman Is Back',
      author: 'Mio Ristic',
      date: 'May 25, 2025',
      excerpt: 'After a period sidelined by injury, Walker Zimmerman returns to strengthen Nashville SC’s defense.',
      imageUrl: 'https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/20220429-The18-Image-Walker-Zimmerman-GettyImages-1316150108.jpeg?itok=dewBb8Ju',
      slug: 'zimmerman-is-back',
    },
    {
      id: 19,
      title: 'Top 10 MLS Jerseys of 2024',
      author: 'Mio Ristic',
      date: 'April 23, 2025',
      excerpt: 'Style, Passion & a Bit of Magic',
      imageUrl: 'https://images.supersport.com/media/0adn4b1p/lionel-messi-24-12-g-1200.jpg?width=1920&quality=90&format=webp',
      slug: 'top-mls-jersey2024',
    },
    {
      id: 18,
      title: 'Vancouver Whitecaps: A Club for Sale, Currently First in the West',
      author: 'Mio Ristic',
      date: 'April 20, 2025',
      excerpt: 'A Club for Sale, Currently First in the West',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2209348788/crop/MM5DINZZGU5DENRZG45G433XMU5DAORSGUYA====/GettyImages-2209348788.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      slug: 'vancouver-whitecaps-for-sale',
    },
    {
      id: 17,
      title: 'Inter Miami Extends Unbeaten Streak with 1–0 Away Win Over Columbus Crew',
      author: 'Mio Ristic',
      date: 'April 19, 2025',
      excerpt: 'Inter Miami extended their unbeaten streak in the 2025 MLS season',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2211040242/crop/MM5DGMBVGY5DCNZRHE5G433XMU5DSMBTHIYTCNQ=/GettyImages-2211040242.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      slug: 'columbuscrewvsintermiamiresult',
    },
    {
      id: 16,
      title: 'Columbus Crew vs. Inter Miami',
      author: 'Mio Ristic',
      date: 'April 17, 2025',
      excerpt: 'MLS’s Last Unbeatens Go Head-to-Head',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2208819749/crop/MM5DEMBUHA5DCMJVGI5G433XMU5DENZTHI3TA===/GettyImages-2208819749.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      slug: 'columbusvsmiamimlsblog',
    },
    {
      id: 15,
      title: 'Peter Vermes Bids Farewell to Sporting KC',
      author: 'Mio Ristic',
      date: 'April 16, 2025',
      excerpt: 'A Storied Legacy and Logical Parting.',
      imageUrl: 'https://nb1.hu/wp-content/uploads/2023/10/GettyImages-1257216781-scaled-e1743504066347.jpg',
      slug: 'petervermesblog',
    },
    {
      id: 14,
      title: 'Chicago Fire Makes Ambitious Move for Kevin De Bruyne',
      author: 'Mio Ristic',
      date: 'April 16, 2025',
      excerpt: 'What We Know So Far.',
      imageUrl: 'https://icdn.sempreinter.com/wp-content/uploads/2023/05/Kevin-De-Bruyne-8.jpg',
      slug: 'kevindb',
    },
    {
      id: 13,
      title: 'Thomas Müller to MLS? The End of an Era, the Start of a New One',
      author: 'Mio Ristic',
      date: 'April 15, 2025',
      excerpt: 'Thomas Müller, a name synonymous with Bayern Munich and the German national team.',
      imageUrl: 'https://assets.bundesliga.com/tachyon/sites/2/2021/05/GettyImages-859182146.jpg?crop=284px,0px,1352px,1080px&fit=540,540',
      slug: 'thomasmullermlsblog',
    },
    {
      id: 11,
      title: 'One PlanetKit Blog',
      author: 'Mio Ristic',
      date: 'April 15, 2025',
      excerpt: 'The world of football was shaken on April 16, 2025.',
      imageUrl: 'https://www.mlsstore.com/content/ws/all/2735eeb9-6378-4ba7-b6d8-5552f898cc0d__1600X732.jpg?w=3200',
      slug: 'oneplanetkit',
    },
    {
      id: 10,
      title: 'The Legacy of Aaron Boupendza in MLS',
      author: 'Mio Ristic',
      date: 'April 15, 2025',
      excerpt: 'A Tribute to a Star Gone Too Soon',
      imageUrl: 'https://www.telegram.hr/wp-content/uploads/2025/04/aaron-boupendza.jpg',
      slug: 'boupendza',
    },
    {
      id: 9,
      title: 'San Diego FC Makes History with First MLS Win',
      author: 'Mio Ristic',
      date: 'February 25, 2025',
      excerpt: 'San Diego FC secures a dramatic victory in their inaugural MLS match.',
      imageUrl: SanDiegoLogo,
      slug: 'san-diego-first-win',
    },
    {
      id: 7,
      title: 'MLS in FC25',
      author: 'Mio Ristic',
      date: 'July 1, 2024',
      excerpt: 'FC25 – Overview, MLS Clubs, and U.S. National Team.',
      imageUrl: 'https://drop-assets.ea.com/images/1BY2V24NDqyjYKlDV8mJrx/ff63d00bb5bf24ad0c1b87adcd0e2771/EA_FC25_Standard_KeyArt_16-9_3840x2160.jpg?im=AspectCrop=(16,9),xPosition=0.5384114583333334,yPosition=0.538425925925926&q=85&w=1280',
      slug: 'fc25',
    },
    {
      id: 6,
      title: 'San Diego: A New MLS Team Ready for Big Challenges',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: 'Hirving Lozano, Coach and Rooster',
      imageUrl: SanDiegoLogo,
      slug: 'san-diego-news',
    },
    {
      id: 5,
      title: 'MLS: Past, Present, and Future',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: "An in-depth analysis of soccer's journey in America.",
      imageUrl: 'https://images.unsplash.com/photo-1653014741491-ff4c23be99be?q=80&w=1974&auto=format&fit=crop',
      slug: 'mls-past',
    },
    {
      id: 4,
      title: 'Top Supplements for Soccer Players',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: 'A countdown of the most memorable moments in the league.',
      imageUrl: 'https://images.unsplash.com/photo-1662695086526-112d7959fab4?q=80&w=1974&auto=format&fit=crop',
      slug: 'supplements-in-soccer',
    },
    {
      id: 2,
      title: 'Women in Soccer: Breaking Barriers',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: 'The role of women in the soccer world.',
      imageUrl: 'https://images.unsplash.com/photo-1532290278496-3d29b25b691a?q=80&w=2070&auto=format&fit=crop',
      slug: 'women-in-soccer',
    },
    {
      id: 1,
      title: 'Welcome to US11',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: 'Nurturing the next generation of soccer stars.',
      imageUrl: Us11,
      slug: 'us11',
    },
  ];

  const [visiblePosts, setVisiblePosts] = useState(blogPosts.slice(0, 6));

  const loadMorePosts = () => {
    const nextPosts = blogPosts.slice(visiblePosts.length, visiblePosts.length + 6);
    setVisiblePosts((prev) => [...prev, ...nextPosts]);
  };

  return (
    <>
      

      <div className="w-full min-h-screen bg-white">
        <div className="max-w-6xl mx-auto py-12 px-4">
          <h1 className="text-5xl font-bold text-[#020617] mb-12">Blog</h1>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition duration-300"
                    unoptimized={typeof post.imageUrl === 'string' && post.imageUrl.startsWith('http')}
                    priority={post.id === 19}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold group-hover:text-blue-600 transition duration-300">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-1">{post.author} | {post.date}</p>
                  <p className="text-gray-700">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          {visiblePosts.length < blogPosts.length && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={loadMorePosts}
                className="cursor-pointer text-white bg-[#020617] px-6 py-3 rounded-lg hover:bg-transparent hover:text-[#020617] border-2 border-transparent hover:border-[#020617] transition duration-500"
              >
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
