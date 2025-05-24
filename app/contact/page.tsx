import Image from 'next/image';
import ProfileImage from '../../public/Mio.png';

export const metadata = {
  title: "Contact",
  description: "Contact Miodrag Ristic Mikaso, a passionate sports writer and blogger. Reach out for inquiries or collaboration.",
  openGraph: {
    title: "Contact MIKASO",
    description: "Contact Miodrag Ristic Mikaso, a passionate sports writer and blogger.",
    images: ["/Mio.png"],
    type: "website",
  },
};

export default function Contact() {
  return (
    <div id="contact" className="w-full min-h-screen bg-white pt-[1px]">
      <div className="max-w-[1000px] mx-auto px-8 py-8 pt-8 flex flex-col justify-center h-full font-sans">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#020617] mb-4">
          Contact MIKASO
        </h1>
        <h2 className="text-2xl sm:text-4xl text-[#020617] mb-8">
          Sports Writer & Blogger
        </h2>
        <p className="text-[#020617] max-w-[700px] mb-8">
          I am Mio Ristic Mikaso, a passionate sports writer and blogger dedicated to bringing you
          the latest insights and updates in the world of sports. Feel free to reach out to me for
          any inquiries or collaboration opportunities.
        </p>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gray-200 mb-8 md:mb-0 md:mr-8 relative">
            <Image src={ProfileImage} alt="Miodrag Ristic" fill style={{objectFit: 'cover'}} />
          </div>

          <div className="text-[#020617]">
            <p className="text-2xl font-bold mb-4">Email</p>
            <a
              href="mailto:us11footballclub@gmail.com"
              className="text-xl text-blue-500 hover:text-blue-600"
            >
              us11footballclub@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
