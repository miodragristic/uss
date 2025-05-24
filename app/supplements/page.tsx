'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';

// Komponenta za dugme koje skroluje na vrh stranice
const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
  onClick={scrollToTop} 
  className='cursor-pointer text-white ml-100 bg-[#020617] group border-2 border-transparent px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-[#020617] hover:text-[#020617] rounded-lg transition duration-500 ease-in-out transform hover:scale-105'>
  Back to top
</button>

  );
};

// Generisanje liste stavki (suplementi i energetska pića)
const generateSupplementItems = () => {
  return [
    { 
      id: 1, 
      title: "Supplements", 
      imageUrl: "https://images.pexels.com/photos/3886066/pexels-photo-3886066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      link: "https://amzn.to/3XBDhy7"
    },
    { 
      id: 2, 
      title: "Energy Drinks", 
      imageUrl: "https://images.pexels.com/photos/5532676/pexels-photo-5532676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      link: "https://amzn.to/4i7Zb3G" 
    },
  ];
};

// Glavna komponenta stranice
const Supplements = () => {
  const items = generateSupplementItems();

  // Promena naslova taba na mount
  useEffect(() => {
    document.title = "Supplements & Energy Drinks";
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Supplements and energy drinks specially curated for footballers to boost performance and recovery." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/supplements" />
        <meta property="og:title" content="Supplements & Energy Drinks | My Game Store" />
        <meta property="og:description" content="Supplements and energy drinks specially curated for footballers to boost performance and recovery." />
        <meta property="og:image" content="https://yourdomain.com/images/supplements-og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://yourdomain.com/supplements" />
        <meta name="twitter:title" content="Supplements & Energy Drinks | My Game Store" />
        <meta name="twitter:description" content="Supplements and energy drinks specially curated for footballers to boost performance and recovery." />
        <meta name="twitter:image" content="https://yourdomain.com/images/supplements-og-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id='supplements' className='w-full min-h-screen bg-white pt-[1px]'>
        <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>
            Supplements and Energy Drinks for Footballers
          </h1>

          <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7'>
            {items.map(item => (
              <div key={item.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
                <div className='relative overflow-hidden bg-gray-200 h-48'>
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className='object-contain w-full h-full group-hover:scale-105 transition duration-300' 
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-xl font-bold group-hover:text-blue-600 transition duration-300'>
                    {item.title}
                  </h3>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel='noopener noreferrer' 
                    className='block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300'>
                    Visit
                  </a>
                </div>
              </div>
            ))}
          </div>

          <section className='mb-8 mt-10'>
            <h2 className='text-2xl sm:text-4xl font-bold text-[#020617] mb-4'>
              Supplements for Footballers
            </h2>
            <p className='text-lg text-[#020617] mb-4'>
              Supplements can play an important role in enhancing the performance, endurance, and recovery of footballers. While they should never replace a healthy diet, the right supplements can give athletes the edge they need to perform at their best. Popular supplements for footballers include pre-workout formulas and creatine.
            </p>

            <h3 className='text-xl font-semibold text-[#020617] mb-2'>Pre-Workout Supplements</h3>
            <p className='text-lg text-[#020617] mb-4'>
              Pre-workout supplements are designed to increase energy, endurance, and focus during physical activity. These often include ingredients like caffeine, beta-alanine, and creatine to help you push through intense training or match situations. A good pre-workout can help delay fatigue, boost energy, and improve focus, ensuring you're at your peak when you need it most.
            </p>

            <h3 className='text-xl font-semibold text-[#020617] mb-2'>Creatine: A Game Changer</h3>
            <p className='text-lg text-[#020617] mb-4'>
              Creatine is one of the most well-researched supplements in sports science. It helps increase the production of ATP, the body’s main source of energy for short bursts of activity. For footballers, this means more power for sprints, tackles, and explosive movements. Creatine can also help with recovery, reducing muscle damage and inflammation, making it an essential supplement for any footballer looking to improve their performance.
            </p>

            <h3 className='text-lg font-semibold text-[#020617] mb-2'>Consult with Professionals</h3>
            <p className='text-lg text-[#020617] mb-4'>
              Before incorporating supplements into your routine, it’s important to consult with a healthcare provider, coach, or nutritionist, especially if you're a young footballer. Supplements are not always necessary for athletes under 18, and it’s essential to ensure they align with your specific fitness goals and health needs.
            </p>
          </section>

          <section className='mb-8 mt-10'>
            <h2 className='text-2xl sm:text-4xl font-bold text-[#020617] mb-4'>
              Energy Drinks for Footballers
            </h2>
            <p className='text-lg text-[#020617] mb-4'>
              Energy drinks are often used by athletes to boost energy, focus, and performance during intense activities. However, while they can provide a quick lift in energy levels, it's important to consume them responsibly.
            </p>

            <h3 className='text-xl font-semibold text-[#020617] mb-2'>Benefits of Energy Drinks</h3>
            <ul className='list-disc pl-5 mb-4'>
              <li>Increase energy levels and alertness, especially during high-stakes training sessions or games.</li>
              <li>Improve focus and concentration, helping you stay mentally sharp during the game.</li>
              <li>Hydrate with added electrolytes, which can help maintain performance during physical exertion.</li>
            </ul>
          </section>

          {/* Dodaj ScrollToTopButton komponentu */}
          <ScrollToTopButton />
        </div>
      </div>
    </>
  );
};

export default Supplements;
