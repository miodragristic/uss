'use client';

import React, { useEffect, useRef} from 'react';
import Image from 'next/image';
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
 
 




const blogPosts = [
  {
  "id": 83,
  "title": "MLS Moves to Global Calendar: Summer-to-Spring Season Starts in 2027",
  "author": "Mio Ristić",
  "date": "November 14, 2025",
  "excerpt": "Major League Soccer (MLS) shifts to a July–May season starting in 2027, aligning with top leagues worldwide, boosting transfers, player development, and fan engagement.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2240501357/crop/MM5DINRYGQ5DENRTGU5G433XMU5DAORSGQ2A====/GettyImages-2240501357.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "link": "blog/mls-new-format"
},
  {
  "id": 82,
  "title": "Major League Soccer Coming to Apple TV in 2026",
  "author": "Mio Ristić",
  "date": "November 14, 2025",
  "excerpt": "Starting in 2026, all MLS matches will stream on Apple TV at no additional cost, giving fans a single platform for every match, including playoffs and the All-Star Game.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2201986577/crop/MM5DEMRVGA5DCMRWGY5G433XMU5DAORRGE3Q====/GettyImages-2201986577.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "link": "blog/apple-tv"
}
,
  {
  "id": 81,
  "title": "Timmy Tillman Called Up to USMNT as Pochettino Adjusts Roster",
  "author": "Mio Ristić",
  "date": "November 12, 2025",
  "excerpt": "LAFC midfielder Timmy Tillman joins the USMNT as Mauricio Pochettino updates his roster ahead of friendlies against Paraguay and Uruguay.",
  "imageUrl": "https://assets.goal.com/images/v3/bltf367b68cbbc7f98e/poch2.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "link": "blog/timmy-tillman-usmnt-call-up"
},
  {
  "id": 80,
  "title": "MLS Playoffs Format: Is It Time for a Change?",
  "author": "Mio Ristić",
  "date": "November 10, 2025",
  "excerpt": "A critical analysis of the MLS Playoffs format, exploring current issues, main criticisms, and possible solutions for a more competitive postseason.",
  "imageUrl": "https://images.squarespace-cdn.com/content/v1/5c9a73454d87117017c01508/1686249453251-OXCODUQ3QUF79G4L38GW/525050.jpg",
  "link": "blog/mls-playoffs-format"
},
  {
  "id": 79,
  "title": "MLS Playoffs 2025: The Final Eight — Drama, Stars, and Glory Await",
  "author": "Mio Ristić",
  "date": "November 10, 2025",
  "excerpt": "Full preview of the 2025 MLS Cup Playoffs — key matchups, players, and predictions for Inter Miami, Philadelphia Union, LAFC, and others.",
  "imageUrl": "https://www.365scores.com/es/news/wp-content/uploads/2025/07/GettyImages-1892797976-1024x694.jpg",
  "link": "blog/mls-playoffs-2025-preview"
},
  {
  "id": 78,
  "title": "MLS Cup Playoffs 2025 – Second Leg Recap: Inter Miami, Philadelphia, San Diego & More",
  "author": "Mio Ristić",
  "date": "November 2, 2025",
  "excerpt": "Full recap of the second leg of the 2025 MLS Cup Playoffs, including highlights, scores, and standout performances from Inter Miami, Philadelphia Union, San Diego FC, and others.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-1469812350/crop/MM5DIMBUHA5DEMRXG45G433XMU5DENJQHIZDKNY=/GettyImages-1469812350.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "link": "blog/mls-cup-playoffs-2025-second-leg"
},


 
    
    
    
];

export default function HomePage() {
   
 



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

        
        {/* <div className="hidden md:flex md:flex-col md:items-center mr-20  md:ml-8 mt-[-60px]">
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
</div> */}

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
      {/* <div className="flex flex-col items-center ml-8 sm:hidden">
        <Link href="/giveaway">
          <Image
            src="https://i.postimg.cc/Z5J9BRBT/www-us11fc-com.png"
            alt="MLS Finals"
            width={340}
            height={500}
            className="mr-20 mt-20"
          />
        </Link>
        
      </div> */}

      {/* Football Shirts Section */}
<div className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-5xl font-bold text-[#020617] mb-12 text-center">
      Staff Picks
    </h2>

    <div className="overflow-x-auto pb-4 flex space-x-6">
      {[
        {
          name: "Lionel Messi Inter Miami CF adidas Youth 2025 The Fortitude Kit Replica Player Jersey - Black",
          price: "$109.99",
          image: "https://fanatics.frgimages.com/inter-miami-cf/youth-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-201604870+pv-1+u-mgihjk9ywffxfwjtkbrl+v-5p4ohbnddixdv7gyxn48.jpg?_hv=2&w=1018",
          link: "https://fanatics.93n6tx.net/Qj7Dya",
        },
        {
          name: "Lionel Messi Inter Miami CF adidas Originals Youth 2025 Third Replica Player Jersey - Blue",
          price: "$109.99",
          image: "https://fanatics.frgimages.com/inter-miami-cf/youth-adidas-originals-lionel-messi-blue-inter-miami-cf-2025-third-replica-player-jersey_ss5_p-202462095+pv-1+u-ynteuvrrspb5ek9qkbrx+v-klfcxvmjcrzrekd0j9ue.jpg?_hv=2&w=1018",
          link: "https://www.fanatics.com/mls/inter-miami-cf/lionel-messi-inter-miami-cf-adidas-originals-youth-2025-third-replica-player-jersey-blue/o-3555+t-21474441+p-2422463797239+z-9-3173708973?_ref=p-XLP:m-LD:pi-SOCCER_XLP_CAROUSEL:i-r0c2:po-2",
        },
        {
          name: "Christian Pulisic AC Milan Puma 2025/26 Home Replica Player Jersey - Red",
          price: "$134.99",
          image: "https://fanatics.frgimages.com/ac-milan/mens-puma-christian-pulisic-red-ac-milan-2025/26-home-replica-player-jersey_ss5_p-203151178+pv-1+u-er1btbt7mp3rzbnzbc8c+v-roiui1cm4q80cwatqrz9.jpg?_hv=2&w=1018",
          link: "https://fanatics.93n6tx.net/4G4WLZ",
        },
        {
          name: "Lamine Yamal Barcelona Nike 2025/26 Replica Player Jersey - Blue",
          price: "$129.99",
          image: "https://fanatics.frgimages.com/barcelona/mens-nike-lamine-yamal-blue-barcelona-2025/26-replica-player-jersey_ss5_p-203284529+pv-1+u-egcn4pkk9yugwdxafypr+v-9yopybyijyh7ysmfxoob.jpg?_hv=2&w=1018",
          link: "https://fanatics.93n6tx.net/4GX9G0",
        },
        {
          name: "Lamine Yamal Barcelona Nike Youth 2025/26 Away Stadium Replica Jersey - Gold",
          price: "$114.99",
          image: "https://fanatics.frgimages.com/barcelona/youth-nike-lamine-yamal-gold-barcelona-2025/26-away-stadium-replica-jersey_ss5_p-203336005+pv-1+u-5ha2rhncky9c4bvfgydm+v-umguisys7a3vzdlecyg8.jpg?_hv=2&w=1018",
          link: "https://fanatics.93n6tx.net/K07b07",
        },
        {
          name: "Jude Bellingham Real Madrid adidas 2025/26 Home Replica Jersey - White",
          price: "$134.99",
          image: "https://fanatics.frgimages.com/real-madrid/mens-adidas-jude-bellingham-white-real-madrid-2025/26-home-replica-jersey_ss5_p-203133325+pv-1+u-8y839qsuhqg7lfvmfaes+v-lnvrnkzo9datsjzfrvja.jpg?_hv=2&w=1018",
          link: "https://fanatics.93n6tx.net/EE4ZG4",
        },
        {
          name: "adidas 2026 FIFA World Cup Pro Soccer Ball",
          price: "$169.99",
          image: "https://fanatics.frgimages.com/fifa-world-cup-gear/adidas-2026-fifa-world-cup-pro-soccer-ball_ss5_p-202753932+pv-1+u-uioraphtnaputjyep8cm+v-5vubzbfxseqln05alds1.jpg?_hv=2&w=1018",
          link: "https://fanatics.93n6tx.net/qzYMzb",
        },
        {
          name: "USMNT Nike 2025 Away Replica Jersey - Navy",
          price: "$104.99",
          image: "https://fanatics.frgimages.com/usmnt/mens-nike-navy-usmnt-2025-away-replica-jersey_ss5_p-202297013+pv-1+u-f9wal9lduvhdzyrsu8xw+v-p6kn5elckajdhcsojmpr.jpg?_hv=2&w=1018",
          link: "https://fanatics.93n6tx.net/9L0kL4",
        },
      ].map((shirt) => (
        <a
          key={shirt.name}
          href={shirt.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:scale-105"
        >
          <img
            src={shirt.image}
            alt={shirt.name}
            className="rounded-t-2xl h-72 w-full object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-[#020617] mb-2">
              {shirt.name}
            </h3>
            <p className="text-blue-600 font-bold text-xl">{shirt.price}</p>
          </div>
        </a>
      ))}
    </div>

    <div className="flex justify-center mt-10">
      <a
        href="https://fanatics.93n6tx.net/Vx7PO6"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#020617] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#020617] hover:border-[#020617] border-2 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        View All Shirts
      </a>
    </div>
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
