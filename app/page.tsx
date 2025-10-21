'use client';

import React, { useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Link from 'next/link';

// Ako koristiš TypeScript — obavezno tipiziraj ref:
const TrendingPlayers = () => {
  const players = [
    { name: 'Lionel Messi', image: 'https://en.nogomania.com/GetFile.ashx?id=271175', link: '/teams/inter-miami/messi' },
    { name: 'Marco Reus', image: 'https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148', link: '/teams/la-galaxy/reus' },
    { name: 'Thomas Muller', image: 'https://assets.goal.com/images/v3/getty-2230148654/crop/MM5DIMRWGY5DENBQGA5G433XMU5DAORSGIZA====/GettyImages-2230148654.jpg?auto=webp&format=pjpg&width=1920&quality=60', link: '/teams/vancouver-whitecaps/muller' },
    { name: 'Luis Suarez', image: 'https://en.nogomania.com/GetFile.ashx?id=259742', link: '/teams/inter-miami/suarez' },
    { name: 'Christian Pulisic', image: 'https://media.bleacherreport.com/image/upload/v1642803493/c6tcjkzmqnb1iphp4dik.jpg', link: '/teams/usa-national-team/pulisic' },
    { name: 'Heung-Min Son', image: 'https://assets.goal.com/images/v3/getty-2229316055/crop/MM5DGNBTHA5DCOJTGQ5G433XMU5DAORRG44Q====/GettyImages-2229316055.jpg?auto=webp&format=pjpg&width=1920&quality=60', link: '/teams/lafc/son' },
    { name: 'Jordan Morris', image: 'https://assets.goal.com/images/v3/getty-2090010997/crop/MM5DENBQGA5DCNRQGE5G433XMU5DKNRWHIYTAMA=/GettyImages-2090010997.jpg?auto=webp&format=pjpg&width=3840&quality=60', link: '/teams/seattle-sounders/morris' },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      {/* GRID za mobile i tablet */}
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
      {players.map((player) => (
        <Link
          key={player.name}
          href={player.link}
          className="group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <img
            src={player.image}
            alt={player.name}
            className="h-64 w-full object-cover mb-4 rounded-lg"
            style={{ objectPosition: 'center 2%' }}
          />
          <h3 className="text-lg font-semibold text-center text-[#020617]">
            {player.name}
          </h3>
        </Link>
      ))}
    </div>

      <div
        ref={scrollRef}
        className="hidden lg:flex overflow-x-auto space-x-6 pb-4"
      >
        {players.map((player) => (
          <Link
            key={player.name}
            href={player.link}
            className="flex-shrink-0 w-1/4 group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={player.image}
              alt={player.name}
              className="h-64 w-full object-cover mb-4 rounded-lg"
              style={{ objectPosition: 'center 2%' }}
            />
            <h3 className="text-lg font-semibold text-center text-[#020617]'">{player.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
 
 

const slides = [
  {
    url: 'https://www.mlsstore.com/content/ws/all/f9472ed3-8599-472f-96a2-6d2a240e179f__2400X1428.jpg?w=2400',
    title: '2024 MLS Cup Champions',
    link: 'https://mlsstore.i8h2.net/AP35Y1'
  },
  {
    url: 'https://www.mlsstore.com/content/ws/all/ebab9ab3-8f51-451b-a8c4-457f93f1ecf5__1600X492.png',
    title: 'All Jerseyes',
    link: 'http://mlsstore.i8h2.net/raX24B'
  },
  {
    url: 'https://images.topps.com/v3/assets/bltc7206971cb4b2bfc/blt55f6c57a80f8365d/660704c7e838c81f0a60c9e4/24-TOPPS.COM-ARCHIVE-GRAPHICS-NEW_-03.png',
    title: 'Topps Now',
    link: 'https://mlsstore.i8h2.net/197WeB'
  },
  {
    url: 'https://www.mlsstore.com/content/ws/all/2273fed5-bd79-4e51-aa30-645f9706e5b9__800X593.png',
    title: 'Looks For Her',
    link: 'https://mlsstore.i8h2.net/XmNXyM'
  },
  {
    url: 'https://i.pinimg.com/736x/96/04/9d/96049d79294a3eb76078b3a21a5d3ea6.jpg',
    title: 'MLS in FC25',
    link: '/blog/FC25'
  }
];


const blogPosts = [
  {
  "id": 70,
  "title": "Audi 2025 MLS Cup Playoffs: Wild Card & Round One Matchups Preview",
  "author": "Mio Ristić",
  "date": "October 20, 2025",
  "excerpt": "The Audi 2025 MLS Cup Playoffs are underway, featuring 18 teams, thrilling matchups, and top-tier talent. Explore the Wild Card showdowns, Round One series, and key players to watch.",
  "imageUrl": "https://www.365scores.com/news/wp-content/uploads/2024/10/GettyImages-2148556804-780x470.jpg",
  "link": "blog/mls-playoff-2025"
},
  {
  "id": 69,
  "title": "Capo FC and Los Angeles Force Secure Spots in NISA Pro Cup Final",
  "author": "Mio Ristić",
  "date": "October 19, 2025",
  "excerpt": "Capo FC and Los Angeles Force advanced to the 2025 NISA Pro Cup Championship Final after dominant semifinal performances, showcasing tactical discipline and key goals.",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6c/NISA_logo_black_2022.png",
  "link": "blog/nisa"
},
 
  {
  "id": 68,
  "title": "USMNT 2–1 Australia: Wright’s Brace, Pulisic’s Return, and a Fiery Colorado Atmosphere",
  "author": "Mio Ristić",
  "date": "October 15, 2025",
  "excerpt": "Haji Wright scored twice as the USMNT defeated Australia 2–1 in Colorado. Christian Pulisic returned to the pitch, and the packed stadium brought an unforgettable atmosphere.",
  "imageUrl": "https://assets.goal.com/images/v3/blt580bb7c6f26a8ef1/weah.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "link": "blog/usmnt-aus"
},
  {
  "id": 67,
  "title": "A New Era for the USMNT Under Pochettino: Bold Tactics, New Faces, and a Clear Direction",
  "author": "Mio Ristić",
  "date": "October 8, 2025",
  "excerpt": "The USMNT is entering a new chapter under Mauricio Pochettino with bold tactics, young players, and a clear vision for the future.",
  "imageUrl": "https://assets.goal.com/images/v3/blt024caa907a00f79e/balogun3.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "link": "blog/usmnt-ecuador"
  },
  {
  "id": 66,
  "title": "LaLiga 2025: Barcelona vs Villarreal Historic Match in Miami",
  "author": "Mio Ristic",
  "date": "October 9, 2025",
  "excerpt": "Barcelona will face Villarreal in a historic LaLiga fixture in Miami — the first regular-season match from a top European league played in the U.S. Discover why Miami was chosen and reactions from clubs, players, and fans.",
  "imageUrl": "https://www.japantimes.co.jp/japantimes/uploads/images/2025/05/28/471879.JPG",
  "link": "blog/la-liga-miami-blog"
}
,
  {
  "id": 65,
  "title": "MLS 2025: Qualified Teams for the Audi MLS Cup Playoffs",
  "author": "Mio Ristic",
  "date": "October 6, 2025",
  "excerpt": "Discover all teams qualified for the 2025 Audi MLS Cup Playoffs — including the full list by conference, playoff format, key dates, and Decision Day schedule.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2227050537/crop/MM5DGMZSHA5DCOBXGI5G433XMU5DEMJYHIZDEMY=/GettyImages-2227050537.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "link": "blog/mls-2025-playoffs-blog"
},

  



  

  

  
  
 
 
    
    
    
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
 

  const prevSlide = () => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % slides.length);

  return (
    
    <>
      {/* Background Image */}
      <div className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-6"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1686168523188-8949907234a5?q=80&w=1974&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 1.9
              }}
      >
{/* Left Content */}
        <div className="flex flex-col justify-center h-auto max-w-[800px] mx-auto p-4 sm:p-8 bg-white/60 rounded-lg shadow-md mt-[-200px]">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#020617] mb-2">
            Welcome to US11
          </h2>
          <p className="text-black font-bold py-4 max-w-[700px] text-base sm:text-lg leading-relaxed">
            At US11, we are passionate about bringing you the latest news, insights, and updates from
            the world of US soccer and Major League Soccer (MLS). Don't forget to visit our shop,
            where you can find high-quality jerseys at great prices. Show your support for your
            favorite teams with our official merchandise.
          </p>
          <div>
          <a
  href="/teams"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white bg-[#020617] group border-2 border-transparent px-4 sm:px-6 py-2 sm:py-3 my-2 items-center hover:bg-transparent hover:border-[#020617] hover:text-[#020617] rounded-lg transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer inline-block"
>
  BROWSE TEAMS
</a>
          </div>
        </div>

        
        <div className="hidden md:flex md:flex-col md:items-center mr-20  md:ml-8 mt-[-60px]">
  <a
    href="/giveaway"
    target="_blank"
    rel="noopener noreferrer"
  >
   <Image
  src="https://i.postimg.cc/Z5J9BRBT/www-us11fc-com.png"
  alt="FC 26"
  width={340}
  height={500}
  className="rounded-2xl shadow-xl border-4 border-white transition-transform duration-300 hover:scale-105 object-cover object-center"
/>
  </a>
</div>

  {/* <a
    href="https://www.amazon.com/EA-SPORTS-FC-25-PlayStation-5/dp/B0D94PQMTX?_encoding=UTF8&pd_rd_w=fJRXR&content-id=amzn1.sym.c2cf8313-b86b-4327-9de4-9398adaa570b%3Aamzn1.symc.a68f4ca3-28dc-4388-a2cf-24672c480d8f&pf_rd_p=c2cf8313-b86b-4327-9de4-9398adaa570b&pf_rd_r=3NBE51DSWDXM3D9NGENZ&pd_rd_wg=kJret&pd_rd_r=bd18fd78-0ca7-4c0f-b9b6-78ce5d2a1724&th=1&linkCode=sl1&tag=us11fc-20&linkId=2301b3814b15a415f8b63db3690103aa&language=en_US&ref_=as_li_ss_tl"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white bg-black px-6 py-3 rounded-2xl shadow-md hover:bg-white hover:text-black hover:border-black border-2 border-black transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    BUY ON MLS STORE
  </a> */}
</div>

       
      

      {/* Mobile version */}
      <div className="flex flex-col items-center ml-8 sm:hidden">
        <Link href="/giveaway">
          <Image
            src="https://i.postimg.cc/Z5J9BRBT/www-us11fc-com.png"
            alt="MLS Finals"
            width={340}
            height={500}
            className="mr-20 mt-20"
          />
        </Link>
        
      </div>

      {/* New Banner Style Slider */}
<div className="relative bg-gradient-to-r from-blue-700 to-blue-400 overflow-hidden py-8 px-4 md:px-16">
  <div className="grid md:grid-cols-3 gap-6 items-center min-h-[300px]">
    <div className="md:col-span-2 text-white">
      <h1 className="text-3xl md:text-4xl font-bold">{slides[currentIndex].title}</h1>
      <p className="text-base text-gray-200 mt-4">Discover the latest drop from MLS Store.</p>
      <a 
  href={slides[currentIndex].link} 
  target="_blank" 
  rel="noopener noreferrer"
  className="py-3 px-6 text-sm font-semibold bg-white text-blue-600 hover:bg-slate-100 rounded-md mt-8 cursor-pointer inline-block"
>
  Shop Now
</a>
    </div>

    {/* Image Section */}
    {/* Image Section */}
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg">
  {/* Background Image */}
  <img
    src={slides[currentIndex].url}
    alt={slides[currentIndex].title}
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

</div>
  </div>
  
  

  {/* Navigation Arrows */}
  <div className="absolute top-1/2 left-4 -translate-y-1/2 text-white cursor-pointer z-10">
    <BsChevronCompactLeft onClick={prevSlide} size={30} />
  </div>
  <div className="absolute top-1/2 right-4 -translate-y-1/2 text-white cursor-pointer z-10">
    <BsChevronCompactRight onClick={nextSlide} size={30} />
  </div>
</div>
    
  


       

      <TrendingPlayers />

      {/* Blog Section */}
<div className="bg-white py-16">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-5xl font-bold text-[#020617] mb-8 text-center">Blog</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <Link href={post.link} key={post.id} className="h-full">
          <div className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full">
            {/* Slika */}
            <div className="relative w-full h-48">
              <Image
                src={post.imageUrl}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            

            {/* Tekst */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition duration-300">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600">{post.author} | {post.date}</p>
              <p className="text-gray-700 mt-2 flex-grow">{post.excerpt}</p>
              {/* <span className="mt-4 text-blue-500 font-semibold hover:underline">Read more →</span> */}
            </div>
          </div>
        </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
<div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-16 text-center mt-16">
  <h2 className="text-4xl font-bold mb-4">Stay Updated with US11</h2>
  <p className="text-lg mb-8">Subscribe to our newsletter and never miss an MLS update</p>
  <Link
    href="/newsletter"
    className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out inline-block"
  >
    Subscribe to Newsletter
  </Link>
</div>


     
      
    </>
  );
}
