'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
 


import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import Book from './../public/book.png';
 

const TrendingPlayers = () => {
  const players = [
    { name: 'Lionel Messi', image: 'https://en.nogomania.com/GetFile.ashx?id=271175', link: '/teams/inter-miami/messi' },
    { name: 'Marco Reus', image: 'https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148', link: '/teams/la-galaxy/reus' },
    { name: 'Olivier Giroud', image: 'https://www.parismatch.com/lmnr/r/375,250,000000,forcex,center-middle/img/var/pm/public/media/image/2024/09/26/11/resize_gettyimages-2174568974.jpg', link: '/teams/lafc/giroud' },
    { name: 'Luis Suarez', image: 'https://en.nogomania.com/GetFile.ashx?id=259742', link: '/teams/inter-miami/suarez' },
  ];

return (
    <div className='max-w-4xl mx-auto py-8'>
      <h2 className='text-6xl font-bold text-[#020617] mb-8 text-center'>Trending Players</h2>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {players.map((player) => (
          <Link
            key={player.name}
            href={player.link}
            className='group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl'
          >
            <img
              src={player.image}
              alt={player.name}
              className='h-64 w-full object-cover mb-4 rounded-lg'
              style={{ objectPosition: 'center 2%' }}
            />
            <h3 className='text-lg font-semibold text-center text-[#020617]'>{player.name}</h3>
          </Link>
        ))}  
      </div>
    </div>
  );
};

 
 

const slides = [
  {
    url: 'https://www.mlsstore.com/content/ws/all/0ed240d5-a432-451e-98f9-e7c0dee0e81a__1600X600.jpg',
    title: '2024 MLS Cup Champions',
    link: 'https://mlsstore.i8h2.net/09PxkL'
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
    id: 22,
    title: 'Chucky Lozano: San Diego’s Last-Minute Hero',
    author: 'Mio Ristic',
    date: 'May 25, 2025',
    excerpt: 'Hirving "Chucky" Lozano scored a dramatic 95th-minute winner to secure a thrilling victory for San Diego FC against LA Galaxy.',
    imageUrl: 'https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    link: '/blog/lozano-becomes-a-san-diego-legend',
  },
  {
    id: 20,
    title: 'Walker Zimmerman Is Back',
    author: 'Mio Ristic',
    date: 'May 26, 2025',
    excerpt: 'After a period sidelined by injury, Walker Zimmerman returns to strengthen Nashville SC’s defense.',
    imageUrl: 'https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/20220429-The18-Image-Walker-Zimmerman-GettyImages-1316150108.jpeg?itok=dewBb8Ju',
    link: '/blog/zimmerman-is-back',
   },
   {
      id: 19,
      title: ' Top 10 MLS Jerseys of 2024',
      author: 'Mio Ristic',
      date: 'April 23, 2025',
      excerpt: ' Style, Passion & a Bit of Magic',
      imageUrl: 'https://images.supersport.com/media/0adn4b1p/lionel-messi-24-12-g-1200.jpg?width=1920&quality=90&format=webp',
      link: '/blog/top-mls-jersey2024',
    },
    {
      id: 18,
      title: ' Vancouver Whitecaps: A Club for Sale, Currently First in the West',
      author: 'Mio Ristic',
      date: 'April 20, 2025',
      excerpt: ' A Club for Sale, Currently First in the West',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2209348788/crop/MM5DINZZGU5DENRZG45G433XMU5DAORSGUYA====/GettyImages-2209348788.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      link: '/blog/vancouver-whitecaps-for-sale',
    },
    {
      id: 17,
      title: 'Inter Miami Extends Unbeaten Streak with 1–0 Away Win Over Columbus Crew',
      author: 'Mio Ristic',
      date: 'April 19, 2025',
      excerpt: ' Inter Miami extended their unbeaten streak in the 2025 MLS season',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2211040242/crop/MM5DGMBVGY5DCNZRHE5G433XMU5DSMBTHIYTCNQ=/GettyImages-2211040242.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      link: '/blog/columbuscrewvsintermiamiresult',
    },
    {
      id: 16,
      title: 'Columbus Crew vs. Inter Miami',
      author: 'Mio Ristic',
      date: 'April 17, 2025',
      excerpt: ' MLS’s Last Unbeatens Go Head-to-Head',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2208819749/crop/MM5DEMBUHA5DCMJVGI5G433XMU5DENZTHI3TA===/GettyImages-2208819749.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      link: '/blog/columbusvsmiamimlsblog',
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

        
        <div className="hidden md:flex md:flex-col md:items-center md:ml-8 mt-[-290px]">
          <Link href="https://www.amazon.com/EA-SPORTS-FC-25-PlayStation-5/dp/B0D94PQMTX?_encoding=UTF8&pd_rd_w=fJRXR&content-id=amzn1.sym.c2cf8313-b86b-4327-9de4-9398adaa570b%3Aamzn1.symc.a68f4ca3-28dc-4388-a2cf-24672c480d8f&pf_rd_p=c2cf8313-b86b-4327-9de4-9398adaa570b&pf_rd_r=3NBE51DSWDXM3D9NGENZ&pd_rd_wg=kJret&pd_rd_r=bd18fd78-0ca7-4c0f-b9b6-78ce5d2a1724&th=1&linkCode=sl1&tag=us11fc-20&linkId=2301b3814b15a415f8b63db3690103aa&language=en_US&ref_=as_li_ss_tl">
           
            <Image
              src="https://m.media-amazon.com/images/I/81mm+VudgaL._AC_SX522_.jpg"
              alt="MLS Finals"
              
              width={340}
              height={500}
              className="mr-20 mt-20 lg:mt-40 xl:mt-48"
            />
          </Link>
          <a
  href="https://www.amazon.com/EA-SPORTS-FC-25-PlayStation-5/dp/B0D94PQMTX?_encoding=UTF8&pd_rd_w=fJRXR&content-id=amzn1.sym.c2cf8313-b86b-4327-9de4-9398adaa570b%3Aamzn1.symc.a68f4ca3-28dc-4388-a2cf-24672c480d8f&pf_rd_p=c2cf8313-b86b-4327-9de4-9398adaa570b&pf_rd_r=3NBE51DSWDXM3D9NGENZ&pd_rd_wg=kJret&pd_rd_r=bd18fd78-0ca7-4c0f-b9b6-78ce5d2a1724&th=1&linkCode=sl1&tag=us11fc-20&linkId=2301b3814b15a415f8b63db3690103aa&language=en_US&ref_=as_li_ss_tl"
  target="_blank"
  rel="noopener noreferrer"
  className="text-black bg-white group border-2 border-transparent px-4 sm:px-6 py-2 sm:py-3 my-2 flex items-center hover:bg-black hover:border-white hover:text-white rounded-lg transition duration-500 ease-in-out transform hover:scale-105 mr-10 cursor-pointer"
>
  BUY ON AMAZON
</a>
        </div>
      </div>

      {/* Mobile version */}
      <div className="flex flex-col items-center ml-8 sm:hidden">
        <Link href="https://www.amazon.com/EA-SPORTS-FC-25-PlayStation-5/dp/B0D94PQMTX?_encoding=UTF8&pd_rd_w=fJRXR&content-id=amzn1.sym.c2cf8313-b86b-4327-9de4-9398adaa570b%3Aamzn1.symc.a68f4ca3-28dc-4388-a2cf-24672c480d8f&pf_rd_p=c2cf8313-b86b-4327-9de4-9398adaa570b&pf_rd_r=3NBE51DSWDXM3D9NGENZ&pd_rd_wg=kJret&pd_rd_r=bd18fd78-0ca7-4c0f-b9b6-78ce5d2a1724&th=1&linkCode=sl1&tag=us11fc-20&linkId=2301b3814b15a415f8b63db3690103aa&language=en_US&ref_=as_li_ss_tl">
          <Image
            src="https://m.media-amazon.com/images/I/81mm+VudgaL._AC_SX522_.jpg"
            alt="MLS Finals"
            width={340}
            height={500}
            className="mr-20 mt-20"
          />
        </Link>
        <a 
  href="https://www.amazon.com/EA-SPORTS-FC-25-PlayStation-5/dp/B0D94PQMTX?_encoding=UTF8&pd_rd_w=fJRXR&content-id=amzn1.sym.c2cf8313-b86b-4327-9de4-9398adaa570b%3Aamzn1.symc.a68f4ca3-28dc-4388-a2cf-24672c480d8f&pf_rd_p=c2cf8313-b86b-4327-9de4-9398adaa570b&pf_rd_r=3NBE51DSWDXM3D9NGENZ&pd_rd_wg=kJret&pd_rd_r=bd18fd78-0ca7-4c0f-b9b6-78ce5d2a1724&th=1&linkCode=sl1&tag=us11fc-20&linkId=2301b3814b15a415f8b63db3690103aa&language=en_US&ref_=as_li_ss_tl"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white bg-black group border-2 border-transparent px-4 sm:px-6 py-2 sm:py-3 my-2 flex items-center hover:bg-black hover:border-white hover:text-white rounded-lg transition duration-500 ease-in-out transform hover:scale-105 ml-2 cursor-pointer"
>
  BUY ON AMAZON
</a>
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
