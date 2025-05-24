import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'portland-timbers' }) => {
  const players = [
    // { name: 'Antony', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-por/lz1h9xkmvhmqdhkd9lnx.jpg', link: './DiegoValeri' },
    { name: 'Kamal Miller', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OBTzPwXJxDw2RoBTT0Dar4Hkhlwac4hafA&s', slug: './kamal' },
    // { name: 'Felipe Mora', image: 'https://images.squarespace-cdn.com/content/v1/5262da93e4b068320e3e3494/1632710776237-Z8UPMDW3BSKVDP5UYYSD/2021-09-10+Marcos+de+Oliveira+and+Felipe+Mora+Goal+Reaction+%28Ranko+Veselinovi%C4%87+Own+Goal%29.jpg', link: './FelipeMora' },
    { name: 'Diego Chará', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvPs48qADU-UwzRq223yrcFLu4lA2db6cfQ&s', slug: './chara' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/portland-timbers/${player.slug}`}
            className="group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={player.image}
              alt={player.name}
              className="h-64 w-full object-cover mb-4 rounded-lg"
              style={{ objectPosition: 'center 2%' }}
            />
            <h3 className="text-lg font-semibold text-center text-[#020617]">{player.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

const PortlandTimbers = () => {
  const items = [
    {
      "title": "Men's Portland Timbers adidas Green 2025 Forever Green & Gold Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "Most Popular in Men Jerseys",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/mens-adidas-green-portland-timbers-2025-forever-green-and-gold-authentic-jersey_ss5_p-202644592+pv-1+u-ppgdcqni2qlx97sqnjnj+v-95zckjcpmjsrqud7wdp2.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQGzv"
    },
    {
      "title": "Men's Portland Timbers adidas Green 2025 Forever Green & Gold Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/mens-adidas-green-portland-timbers-2025-forever-green-and-gold-replica-jersey_ss5_p-202644710+pv-1+u-mpl34bviazrw9rfyr0ck+v-zpa0tlhj3s8yhcjol1wc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOj95b"
    },
    {
      "title": "Youth Portland Timbers adidas Green 2025 Forever Green & Gold Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Youth Jerseys",
      "shipping": "",
      "availability": "Most Popular in Jerseys",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/youth-adidas-green-portland-timbers-2025-forever-green-and-gold-replica-jersey_ss5_p-202649406+pv-1+u-qniggus6tpu78gocl8td+v-yhdcbdhyc59njzt2j2vy.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKO4nr"
    },
    {
      "title": "Women's Portland Timbers adidas Green 2025 Forever Green & Gold Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Women's Jerseys",
      "shipping": "",
      "availability": "Most Popular in Women Jerseys",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/womens-adidas-green-portland-timbers-2025-forever-green-and-gold-replica-jersey_ss5_p-202649349+pv-1+u-gflt5rdmfg0dufnbc9s8+v-qlhlia2fqn9wljzwu85g.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/JKOvLr"
    },
    {
      "title": "Men's Portland Timbers adidas Green 2025 Forever Green & Gold Authentic Custom Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/mens-adidas-green-portland-timbers-2025-forever-green-and-gold-authentic-custom-jersey_ss5_p-202698427+pv-1+u-hhr81tgdcninpm6sapkd+v-i33m485usauhucrvvdch.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/XmGvL4"
    },
    {
      "title": "Men's Portland Timbers Fanatics Green Fundamentals T-Shirt",
      "price": "$19.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "Most Popular in Men T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/mens-fanatics-green-portland-timbers-fundamentals-t-shirt_ss5_p-201167507+pv-1+u-m33f74jcvf5gyzd6flao+v-pwzvsfse3fidjvbutvfw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45gXn"
    },
    {
      "title": "Men's Portland Timbers Fanatics Black Stealth Flex Hat",
      "price": "$22.99",
      "originalPrice": "$29.99",
      "category": "Hats",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/mens-fanatics-black-portland-timbers-stealth-flex-hat_ss5_p-200211797+pv-1+u-ztzrbwuazytefluwweji+v-icb8xkig8vtxapfcj07l.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyAv6G"
    },
    {
      "title": "Portland Timbers Fanatics Scarf",
      "price": "$19.99",
      "originalPrice": "$29.99",
      "category": "Accessories",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/fanatics-portland-timbers-scarf_ss5_p-200374258+pv-1+u-znnc5d0dxqqnllfhymmh+v-rz5on8y8mtw5qsfyjhll.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/OeOv9z"
    },
    {
      "title": "Men's Portland Timbers Green Hometown Collection PDX Tri-Blend T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "Most Popular in Men T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/mens-green-portland-timbers-hometown-collection-pdx-tri-blend-t-shirt_ss5_p-3560564+pv-1+u-gym4yintzlrq9hltnubo+v-1cu3nqgy2xrbz3n2j8tv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKOyxL"
    },
    {
      "title": "Men's Portland Timbers Sport Design Sweden Khaki Everyday Relaxed T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/mens-sport-design-sweden-khaki-portland-timbers-everyday-relaxed-t-shirt_ss5_p-202666801+pv-1+u-xtmlnvrnqneacajrx43v+v-6gazenmw1xz0w5tzyo8f.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9LnjM0"
    },
    {
      "title": "Portland Timbers Green 2025 Jersey Hook Scarf",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Accessories",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/green-portland-timbers-2025-jersey-hook-scarf_ss5_p-202840851+u-qc41fzntzekxs3w5xq4r+v-tflypxhmpdcebobygo58.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/PORvrX"
    },
    {
      "title": "Men's Portland Timbers 500 Level Black Timber Joey Pullover Sweatshirt",
      "price": "$59.99",
      "originalPrice": "$59.99",
      "category": "Men's Sweatshirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/mens-500-level-black-portland-timbers-timber-joey-pullover-sweatshirt_ss5_p-201462913+u-iytirri0wfk5loa6jq6e+v-i7m3jtmrmyudpr2148lj.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrj2A"
    },
    {
      "title": "Women's Portland Timbers adidas Green 2023 Portland Plaid Kit Replica Jersey",
      "price": "$49.99",
      "originalPrice": "$99.99",
      "category": "Women's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/womens-adidas-green-portland-timbers-2023-portland-plaid-kit-replica-jersey_ss5_p-5273089+pv-1+u-uyrxwckclxqcild7rzgi+v-v73jfixcnvc6pls4hr8u.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjAv6P"
    },
    {
      "title": "Men's Portland Timbers 500 Level Heather Gray Timber Joey Pullover Sweatshirt",
      "price": "$59.99",
      "originalPrice": "$59.99",
      "category": "Men's Sweatshirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/mens-500-level-heather-gray-portland-timbers-timber-joey-pullover-sweatshirt_ss5_p-201462912+u-s5ysssujradywbciny4x+v-xeyqgjcm8az4gletrts4.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19yMWR"
    },
    {
      "title": "Men's Portland Timbers adidas Green 2023 Portland Plaid Kit Authentic Custom Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/mens-adidas-green-portland-timbers-2023-portland-plaid-kit-authentic-custom-jersey_pi5281000_altimages_ff_5281662-f4f75f8bf1e47d5e73b9alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/XmGvXo"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
       <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Portland Timbers</h1>
        <div className='mb-6'>
          <img
            src='/Portland.png'
            alt='Portland' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/9LnXMY"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            BUY TICKET
          </a>
          <a 
            href="https://example.com/find-hotel" 
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            HOTELS NEAR THE STADIUM
          </a>
        </div>

      {/* Club Information */}
      <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Club Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Portland Timbers</li>
            <li><strong>Nickname(s):</strong> The Timbers</li>
            <li><strong>Founded:</strong> 2009</li>
            <li><strong>Stadium:</strong> Providence Park, Portland, Oregon</li>
            <li><strong>Capacity:</strong> 25,218</li>
            <li><strong>Owner:</strong> Merritt Paulson</li>
            <li><strong>Head Coach:</strong> Phil Neville</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Passion and Tradition</h2>
          <p>
            The Portland Timbers are one of the most passionate teams in Major League Soccer, with a loyal fanbase known as the "Timber Army." Since joining the league in 2009, the Timbers have made a name for themselves as one of the most successful and exciting teams in MLS.
          </p>
          <p>
            Playing at Providence Park, the team thrives in an electric atmosphere where fans support their team with unmatched energy. With standout players like Diego Valeri, Sebastián Blanco, and Felipe Mora, the Timbers are perennial contenders in the Western Conference and have claimed an MLS Cup in 2015.
          </p>
          <p>
            Known for their attacking style of play, the Timbers have become a symbol of pride for the city of Portland and a force to be reckoned with in Major League Soccer.
          </p>
        </div>

        <TrendingPlayers />

        <h2 className='text-4xl sm:text-6xl font-bold text-[#020617] mt-16 mb-4'>Shop</h2>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map((item) => (
          <div key={item.title} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
                >
                  Buy Now <FaShoppingCart className='inline ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortlandTimbers;
