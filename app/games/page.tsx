'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import { FaShoppingCart } from 'react-icons/fa';

// Funkcija za generisanje proizvoda (video igre i konzole)
const generateConsoleItems = () => {
  return [
    {
      id: 1,
      title: "Video Games",
      imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://amzn.to/4k7pRTZ"
    },
    {
      id: 2,
      title: "Consoles",
      imageUrl: "https://images.pexels.com/photos/4523001/pexels-photo-4523001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://amzn.to/4ibTMIK"
    },
  ];
};

// Komponenta za stranicu sa igricama
const Games = () => {
  const consoleItems = generateConsoleItems();

  // Promeni title nakon mounta (nije neophodno ako koristiš <Head>)
  useEffect(() => {
    document.title = "Gaming | My Game Store";
  }, []);

  return (
    <>
      <Head>
        <title>Gaming</title>
        <meta name="description" content="Explore the latest in video games and consoles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/games" />
        <meta property="og:title" content="Gaming | My Game Store" />
        <meta property="og:description" content="Discover top video games and consoles available now." />
        <meta property="og:image" content="https://yourdomain.com/images/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://yourdomain.com/games" />
        <meta name="twitter:title" content="Gaming | My Game Store" />
        <meta name="twitter:description" content="Discover top video games and consoles available now." />
        <meta name="twitter:image" content="https://yourdomain.com/images/og-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id='games' className='w-full min-h-screen bg-white pt-[1px]'>
        <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-8'>Gaming</h1>

          {/* Grid za proizvode */}
          <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7'>
            {consoleItems.map(item => (
              <div key={item.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
                <div className='relative overflow-hidden bg-gray-200 h-48'>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className='object-contain w-full h-full group-hover:scale-105 transition duration-300'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-xl font-bold group-hover:text-blue-600 transition duration-300'>{item.title}</h3>
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300'>
                    Visit <FaShoppingCart className='inline-block ml-2' />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Tekst sekcije */}
          <section className='mb-8 mt-10'>
            <h2 className='text-2xl sm:text-4xl font-bold text-[#020617] mb-4'>
              Soccer Video Games
            </h2>
            <p className='text-lg text-[#020617] mb-4'>
              Explore greatest soccer video games! From fast-paced matches to realistic simulations, there's a game for every football fan. Check out our collection and take your soccer experience to the next level today!
            </p>
          </section>

          <section className='mb-8 mt-10'>
            <h2 className='text-2xl sm:text-4xl font-bold text-[#020617] mb-4'>
              Consoles for Gaming
            </h2>
            <p className='text-lg text-[#020617] mb-4'>
              Find the perfect console for your gaming needs. Whether you're a PlayStation enthusiast or an Xbox fan, we’ve got the top consoles in the market. Shop now and get ready to play!
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Games;

