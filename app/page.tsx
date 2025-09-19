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
    "id": 63,
    "title": "US Players in the Champions League 2025/26: Rising Stars to Watch",
    "author": "US11 FC",
    "date": "September 19, 2025",
    "excerpt": "Discover the top American players competing in the Champions League 2025/26 – from Weston McKennie to Cole Campbell. Profiles, clubs, positions, and key stats.",
    "imageUrl": 'https://assets.goal.com/images/v3/getty-2217021422/crop/MM5DGOJSGA5DEMRQGU5G433XMU5DIMJUHI4DG===/GettyImages-2217021422.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    "link": "blog/us-champions-league-2025"
  },    
  {
    "id": 62,
    "title": "Sounders FC Back in MLS Action: Ferreira Breaks Records in 2-2 Draw with LA Galaxy",
    "author": "US11 FC",
    "date": "September 14, 2025",
    "excerpt": "Seattle Sounders FC returned to MLS play with a 2-2 draw against LA Galaxy. Jesús Ferreira breaks MLS records, Danny Musovski shines, and returning stars Rusnák and Morris impact the game.",
    "imageUrl": "https://assets.goal.com/images/v3/getty-2202323865/crop/MM5DGOBZHE5DEMJZGM5G433XMU5DAORSGAZQ====/GettyImages-2202323865.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    "link": "blog/sounders-galaxy"
  },    
  {
    "id": 61,
    "title": "Müller Brings Munich Mentality to Vancouver: Birthday Hat Trick Seals 7-0 Rout",
    "author": "Mio Ristić",
    "date": "September 14, 2025",
    "excerpt": "On his 36th birthday, Thomas Müller dominated Philadelphia Union, scoring two penalties, a header, and providing a brilliant assist in Vancouver Whitecaps’ 7-0 MLS rout.",
    "imageUrl": "https://assets.goal.com/images/v3/blt61efb9f3489abfbe/crop/MM5DENBZGY5DCNBQGQ5G433XMU5DCMJRHI3TG===/GettyImages-2235288255.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    "link": "blog/muller-vancouver"
  },
  {
    "id": 60,
    "title": "USMNT 2–0 Japan: Pochettino’s First Step Toward Stability?",
    "author": "Mio Ristić",
    "date": "September 10, 2025",
    "excerpt": "USMNT ended their seven-game winless streak with a 2-0 victory over Japan in Columbus. Zendejas and Balogun scored, Pulisic shined, and Freese impressed in goal. Could this be Pochettino’s springboard for consistency?",
    "imageUrl": "https://assets.goal.com/images/v3/getty-2234598796/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2234598796.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    "link": "blog/usmnt-japan"
  },    
  {
    "id": 59,
    "title": "MLS Third Kit 2025: Retro Jerseys You Need in Your Collection",
    "author": "Mio Ristić",
    "date": "September 9, 2025",
    "excerpt": "Discover the best MLS third kits of 2025 – retro-inspired jerseys from Inter Miami, Seattle Sounders, LAFC, Columbus Crew, and more. Perfect for fans and collectors.",
    "imageUrl": "https://www.mlsstore.com/content/ws/all/0c171420-bd12-42f9-9806-1480b7ee4367__548X893.jpg?w=548",
    "link": "blog/mls-third-kit-2025"
  },
  {
    "id": 58,
    "title": "USMNT Warning: Defeat to South Korea Exposes Serious Problems Ahead of 2026 World Cup",
    "author": "Mio Ristic",
    "date": "September 7, 2025",
    "excerpt": "Son Heung-Min led South Korea to a 2-0 victory over the USMNT in New Jersey, raising fresh concerns about Mauricio Pochettino’s squad ahead of the 2026 World Cup.",
    "imageUrl": "https://s.yimg.com/os/creatr-uploaded-images/2025-09/976007e0-8b6b-11f0-bfbb-b88058d464f7",
    "link": "blog/us-korea"
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
    href="https://mlsstore.i8h2.net/aOzQ2o"
    target="_blank"
    rel="noopener noreferrer"
  >
   <Image
  src="https://www.mlsstore.com/content/ws/all/46d82f1b-9a12-4135-bf5d-5eec640f61ab__548X893.jpg?w=548"
  alt="MLS Finals"
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
        <Link href="https://mlsstore.i8h2.net/aOzQ2o">
          <Image
            src="https://www.mlsstore.com/content/ws/all/46d82f1b-9a12-4135-bf5d-5eec640f61ab__548X893.jpg?w=548"
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

     
      
    </>
  );
}
