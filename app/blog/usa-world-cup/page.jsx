'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';


export default function USMNTGroupD() {
const [currentUrl, setCurrentUrl] = useState('');

useEffect(() => {
if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
}, []);

const handleCopyLink = () => {
if (navigator?.clipboard) {
navigator.clipboard.writeText(currentUrl);
alert('✅ Link copied to clipboard!');
}
};

const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT in Group D: Analysis, Challenges, and Chances for World Cup 2026')}`;
const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

return ( <article className="w-full min-h-screen bg-white text-[#020617]"> <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
{/* HEADER */} <header className="mb-8"> <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
USMNT in Group D: Analysis, Challenges, and Chances for World Cup 2026 </h1> <div className="flex items-center gap-4 mt-2 text-sm text-gray-500"> <span>Mio Ristić</span> <span>•</span> <time dateTime="2025-12-05">December 5, 2025</time> </div>


      {/* SHARE BUTTONS */}
      <div className="flex items-center gap-4 mt-4">
        <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
        <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
        <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
        <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
      </div>
    </header>

    {/* FEATURE IMAGE */}

<figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
  <Image
  src="https://assets.goal.com/images/v3/blt72949e9c276641f4/crop/MM5DGOBYGE5DEMJYGM5G433XMU5DAORSGAZA====/GettyImages-2246882882.jpg?auto=webp&format=pjpg&width=3840&quality=60"
  alt="USMNT players in action during World Cup qualifiers"  // <- OBAVEZNO
  width={1018}
  height={420}
  className="w-full h-[420px] object-cover object-center"
  priority
/>

  <figcaption className="text-xs text-gray-400 px-3 py-2">
    Creator: John Dorton/ISI Photos/USSF 
    | 
    Credit: Getty Images
    Copyright: 2025 John Dorton/ISI Photos/USSF
  </figcaption>
</figure>


    {/* ARTICLE CONTENT */}
    <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
      <p>When the draw placed the United States in Group D, reactions were mixed. On paper, the group may seem manageable, but a deeper look reveals a tricky and tactically demanding environment, where every opponent can seriously challenge the Americans.</p>

      <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">Group D Teams</h2>
      <ul>
        <li>United States</li>
        <li>Paraguay</li>
        <li>Australia</li>
        <li>Winner of the European Playoff-C (Turkey / Romania / Slovakia / Kosovo)</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Paraguay — A Tough South American Enigma</h3>
      <p>Paraguay is traditionally a team that gives technically skilled sides a headache. Their strengths include disciplined defense, rapid counterattacks, and game tempo control. The USMNT will need to break through the bunker and withstand physical pressure.</p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Australia — Physical and Tactical Discipline</h3>
      <p>Australia may lack star power, but they are known for tactical precision, exceptional endurance, and the ability to neutralize opponents. One key moment could change the outcome.</p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">European Playoff-C Winner — A Tactical Challenge</h3>
      <p>The European playoff winner could be Turkey, Romania, Slovakia, or Kosovo, each presenting unique tactical difficulties for the USMNT.</p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Where the USMNT Stands</h3>
      <p>Home-field advantage, passionate fans, and logistical comfort are significant. But questions remain: Can young leaders like Reyna, Musah, and Balogun handle the pressure? Can the defense withstand physical teams? Does the team have a true “match-winner”?</p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Conclusion — A Group That Cannot Be Underestimated</h3>
      <p>On paper, the group might appear manageable. In practice, Paraguay is a physical challenge, Australia an organizational challenge, and the European playoff winner a tactical challenge. The United States may be favorites, but only on the pitch can they prove readiness for 2026.</p>
    </section>

    {/* FOOTER */}
    <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="text-sm text-gray-600">
        <p>Published: December 5, 2025</p>
        <p>Author: US11 FC</p>
      </div>
    </footer>
  </div>
</article>
);
}
