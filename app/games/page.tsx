'use client';

import React from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';

const generateConsoleItems = () => [
  {
    id: 1,
    title: "Video Games",
    imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://amzn.to/4k7pRTZ",
  },
  {
    id: 2,
    title: "Consoles",
    imageUrl: "https://images.pexels.com/photos/4523001/pexels-photo-4523001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://amzn.to/4ibTMIK",
  },
];

const Games = () => {
  const consoleItems = generateConsoleItems();

  return (
    <div id="games" className="w-full min-h-screen bg-white pt-[1px]">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#020617] mb-8">Gaming</h1>

        <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7">
          {consoleItems.map((item) => (
            <div key={item.id} className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="relative overflow-hidden bg-gray-200 h-48">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition duration-300">{item.title}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Visit <FaShoppingCart className="inline-block ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-8 mt-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#020617] mb-4">Soccer Video Games</h2>
          <p className="text-lg text-[#020617] mb-4">
            Explore greatest soccer video games! From fast-paced matches to realistic simulations, there&apos;s a game for every football fan. Check out our collection and take your soccer experience to the next level today!
          </p>
        </section>

        <section className="mb-8 mt-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#020617] mb-4">Consoles for Gaming</h2>
          <p className="text-lg text-[#020617] mb-4">
            Find the perfect console for your gaming needs. Whether you&apos;re a PlayStation enthusiast or an Xbox fan, we’ve got the top consoles in the market. Shop now and get ready to play!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Games;
