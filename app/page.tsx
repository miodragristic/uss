'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

// --- DATA ---
const players = [
  { name: 'Lionel Messi', image: 'https://en.nogomania.com/GetFile.ashx?id=271175', link: '/teams/inter-miami/messi' },
  { name: 'Marco Reus', image: 'https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148', link: '/teams/la-galaxy/reus' },
  { name: 'Olivier Giroud', image: 'https://www.parismatch.com/lmnr/r/375,250,000000,forcex,center-middle/img/var/pm/public/media/image/2024/09/26/11/resize_gettyimages-2174568974.jpg', link: '/teams/lafc/giroud' },
  { name: 'Luis Suarez', image: 'https://en.nogomania.com/GetFile.ashx?id=259742', link: '/teams/inter-miami/suarez' },
];

const slides = [
  {
    url: 'https://www.mlsstore.com/content/ws/all/0ed240d5-a432-451e-98f9-e7c0dee0e81a__1600X600.jpg',
    title: '2024 MLS Cup Champions',
    link: 'https://mlsstore.i8h2.net/09PxkL'
  },
  {
    url: 'https://www.mlsstore.com/content/ws/all/ebab9ab3-8f51-451b-a8c4-457f93f1ecf5__1600X492.png',
    title: 'All Jerseys',
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

// --- COMPONENTS ---

const TrendingPlayers = () => (
  <section className="max-w-6xl mx-auto py-16 px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-center text-[#020617] mb-10">Trending Players</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {players.map((player) => (
        <Link key={player.name} href={player.link} className="group bg-white rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105 overflow-hidden">
          <div className="relative w-full h-64">
            <Image
              src={player.image}
              alt={player.name}
              fill
              className="object-cover rounded-t-lg"
              style={{ objectPosition: 'center 2%' }}
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-[#020617]">{player.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

// --- MAIN PAGE ---
const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1686168523188-8949907234a5?q=80&w=1974&auto=format&fit=crop)' }}
      >
        <div className="bg-white/70 max-w-3xl px-6 py-10 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-4">Welcome to US11</h1>
          <p className="text-lg text-black font-medium mb-6">
            We bring you the latest MLS news, updates, and shop deals.
          </p>
          <Link
            href="/teams"
            className="inline-block px-6 py-3 bg-[#020617] text-white rounded-lg hover:bg-transparent hover:text-[#020617] hover:border-[#020617] border-2 transition duration-300"
          >
            Browse Teams
          </Link>
        </div>
      </section>

      {/* SLIDER */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-500 py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 items-center gap-8">
          <div className="md:col-span-2 text-white">
            <h2 className="text-3xl font-bold">{slides[currentIndex].title}</h2>
            <p className="mt-4 text-gray-200">Discover the latest from the MLS Store.</p>
            <a
              href={slides[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-slate-100 font-medium transition"
            >
              Shop Now
            </a>
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src={slides[currentIndex].url}
              alt={slides[currentIndex].title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Arrows */}
        <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
          <BsChevronCompactLeft size={30} />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white">
          <BsChevronCompactRight size={30} />
        </button>
      </section>

      <TrendingPlayers />

      {/* Ostale Sekcije (Blog, Amazon Banner itd.) bi mogle ići u svoje komponente za čistoću */}
    </main>
  );
};

export default HomePage;
