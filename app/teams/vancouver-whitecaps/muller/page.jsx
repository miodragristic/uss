import React from 'react';

const ThomasMuller = () => {
  const items = [
    // { id: 1, title: "Thomas Müller Vancouver Whitecaps Jersey", imageUrl: 'https://example.com/muller-jersey.jpg', link: 'https://www.example.com/product/1', price: '$139.99' },
    // { id: 2, title: "Signed Thomas Müller Soccer Ball", imageUrl: 'https://example.com/muller-ball.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    // { id: 3, title: "Thomas Müller Poster", imageUrl: 'https://example.com/muller-poster.jpg', link: 'https://www.example.com/product/3', price: '$24.99' },
    // { id: 4, title: "Vancouver Whitecaps Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    // { id: 5, title: "Thomas Müller Autographed Photo", imageUrl: 'https://example.com/muller-photo.jpg', link: 'https://www.example.com/product/5', price: '$149.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Thomas Müller</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://assets.goal.com/images/v3/getty-2230148654/crop/MM5DIMRWGY5DENBQGA5G433XMU5DAORSGIZA====/GettyImages-2230148654.jpg?auto=webp&format=pjpg&width=1920&quality=60' 
            alt='Thomas Müller' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
            style={{ objectPosition: 'center 20%' }}   
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Source: Wikimedia Commons | License: Creative Commons</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> September 13, 1989 (Weilheim, West Germany)</li>
            <li><strong>Position:</strong> Attacking Midfielder / Forward</li>
            <li><strong>Height:</strong> 6 ft 1 in (1.85 m)</li>
            <li><strong>Current Team:</strong> Vancouver Whitecaps (2025–present)</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Bayern Munich (2008–2025): 756 appearances, 250 goals</li>
                <li>Vancouver Whitecaps (2025–present): new signing</li>
              </ul>
            </li>
            <li><strong>International Career:</strong>
              <ul className='list-disc list-inside ml-5'>
                <li>Germany Senior Team (2010–2025): 131 appearances, 45 goals</li>
                <li>2014 FIFA World Cup Champion</li>
                <li>2010 FIFA World Cup Golden Boot</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Thomas Müller</h2>
          <p>
            Thomas Müller is a German professional footballer, widely regarded as one of the most versatile and intelligent attacking players of his generation. After spending his entire club career at Bayern Munich—where he won 33 major trophies including multiple Bundesliga titles and two UEFA Champions League crowns—Müller joined Vancouver Whitecaps in 2025. Known for his vision, movement, and leadership, he arrives in Major League Soccer as one of the most decorated European players ever. With Germany, he earned 131 caps, scored 45 goals, and helped his country win the 2014 FIFA World Cup.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Thomas Müller Merchandise</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThomasMuller;
