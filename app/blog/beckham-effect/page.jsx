// import React from 'react'; 
// import { Link } from 'react-router-dom'; // Dodaj import za Link
// import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'; 
// import InterLogo from '../Blog/Interlogo.png'; 

// const Imga = () => {
//     return (
//         <div className='w-full min-h-screen bg-white'>
//             {/* Navbar */}
//             <nav className='bg-gray-800 py-4'>
//                 <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
//                     <div className='relative flex items-center justify-between h-16'>
//                         <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
//                             {/* Mobile menu button */}
//                             <button
//                                 type='button'
//                                 className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
//                                 aria-controls='mobile-menu'
//                                 aria-expanded='false'
//                             >
//                                 <span className='sr-only'>Open main menu</span>
//                             </button>
//                         </div>
//                         <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
//                             {/* Logo */}
//                             <div className='flex-shrink-0'>
//                                 <img className='block lg:hidden h-8 w-auto' src={InterLogo} alt='Inter Miami' />
//                                 <img className='hidden lg:block h-8 w-auto' src={InterLogo} alt='Inter Miami' />
//                             </div>
//                             {/* Navigation links */}
//                             <div className='hidden sm:block sm:ml-6'>
//                                 <div className='flex space-x-4'>
//                                     <a href='/' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
//                                         Home
//                                     </a>
//                                     <a href='/shop' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
//                                         Shop
//                                     </a>
//                                     <a href='/about' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
//                                         About
//                                     </a>
//                                     <a href='/contact' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
//                                         Contact
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Blog Content */}
//             <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
//                 <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-8 mt-16 lg:mt-10'>
//                     Inter Miami: The David Beckham Effect
//                 </h1>
//                 <div className='mb-4'>
//                     <img 
//                         src={InterLogo}
//                         alt='Inter' 
//                         className='w-full h-[400px] object-cover rounded-lg shadow-md' 
//                         style={{ maxHeight: '400px', objectFit: 'cover' }} 
//                     />
//                     {/* Author and Date */}
//                     <div className="mt-2 text-sm text-gray-600">
//                         <span>By Mio Ristic | Dec 24, 2024</span>
//                     </div>
//                     <div className='mt-4 text-center'>
//                         <Link to="/Inter">
//                             <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
//                                 Visit Inter Miami
//                             </button>
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Blog Article */}
//                 <p className='mb-4'>
//                     Inter Miami CF, a club that began its journey in 2020, has become one of the most talked-about teams in Major League Soccer (MLS). A significant part of its allure is attributed to its co-owner, the global football icon, David Beckham. This blog explores the "David Beckham Effect" on Inter Miami, examining his influence on the club’s branding, player recruitment, and its rise in global football culture.
//                 </p>
//                 <h2 className='text-3xl font-semibold text-[#020617] mb-4'>The Beckham Factor in Branding</h2>
//                 <p className='mb-4'>
//                     David Beckham is not just a football legend; he is a global brand. His involvement with Inter Miami brought instant credibility to the club, attracting attention from fans, sponsors, and media worldwide. The sleek and modern logo, the vibrant pink color scheme, and the club’s emphasis on Miami’s cultural diversity all reflect Beckham’s vision of creating a team that stands out both on and off the pitch.
//                 </p>
//                 <h2 className='text-3xl font-semibold text-[#020617] mb-4'>Transformative Player Recruitment</h2>
//                 <p className='mb-4'>
//                     The "Beckham Effect" extends to player recruitment. His stature in the football world has made Inter Miami an attractive destination for top players. The signing of Lionel Messi in 2023, one of the most significant events in MLS history, can be partially credited to Beckham’s influence.
//                 </p>
//                 <h2 className='text-3xl font-semibold text-[#020617] mb-4'>Global Football Culture Impact</h2>
//                 <p className='mb-4'>
//                     Beckham’s vision isn’t just about creating a competitive team; it’s about establishing Inter Miami as a cultural phenomenon. From celebrity-filled stands to partnerships with global brands, the club embodies a lifestyle as much as a sporting endeavor.
//                 </p>
//                 <h2 className='text-3xl font-semibold text-[#020617] mb-4'>Challenges and Future Prospects</h2>
//                 <p className='mb-4'>
//                     While the "David Beckham Effect" has undoubtedly propelled Inter Miami into the spotlight, challenges remain. Consistent on-field performance and long-term financial sustainability are crucial for the club’s growth.
//                 </p>
//                 <p className='mb-4'>
//                     David Beckham’s influence on Inter Miami is undeniable. From elevating the club’s status to reshaping perceptions of MLS globally, the "Beckham Effect" continues to redefine what’s possible for football in North America.
//                 </p>
//             </div>

//             {/* Social icons */}
//             <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
//                 <ul>
//                     <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
//                         <a className='flex justify-between items-center w-full text-gray-300' href='/'>
//                             YouTube <FaYoutube size={30} />
//                         </a>
//                     </li>
//                     <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
//                         <a className='flex justify-between items-center w-full text-gray-300' href='/'>
//                             Instagram <FaInstagram size={30} />
//                         </a>
//                     </li>
//                     <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
//                         <a className='flex justify-between items-center w-full text-gray-300' href='/'>
//                             Facebook <FaFacebook size={30} />
//                         </a>
//                     </li>
//                     <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
//                         <a className='flex justify-between items-center w-full text-gray-300' href='/'>
//                             TikTok <FaTiktok size={30} />
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Imga;

