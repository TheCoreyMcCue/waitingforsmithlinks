// pages/index.tsx

import Image from "next/image";
import SocialCard from "../app/components/SocialCard";
import harry from "../../public/harry.png";
import instagramIcon from "../../public/instagram-splatter.png"; // Import the PNG icon
import webIcon from "../../public//web-icon.png"; // Import the PNG icon

// Define your social links in an array of objects
const socialLinks = [
  {
    icon: "https://cloudinary-cdn.ffm.to/s--e_GXTT_B--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_spotify.png",
    link: "https://open.spotify.com/artist/57oieIojgviKMyTtzG4kn2",
    alt: "Spotify",
    platform: "Spotify",
  },
  {
    icon: "https://cloudinary-cdn.ffm.to/s--LpZFcfe0--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_applemusic_listen.png",
    link: "https://music.apple.com/nl/artist/waiting-for-smith/1192026265",
    alt: "Apple Music",
    platform: "Apple Music",
  },
  {
    icon: "https://cloudinary-cdn.ffm.to/s--BuOsZiLg--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_deezer.png",
    link: "https://www.deezer.com/us/artist/11654939",
    alt: "Deezer",
    platform: "Deezer",
  },
  {
    icon: "https://cloudinary-cdn.ffm.to/s--uf3wpRWG--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_amazon.png",
    link: "https://music.amazon.com/artists/B01MS44PHF/waiting-for-smith",
    alt: "Amazon Music",
    platform: "Amazon Music",
  },
  {
    icon: "https://cloudinary-cdn.ffm.to/s--wJHSivtl--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_tidal.png",
    link: "https://tidal.com/browse/artist/8406140",
    alt: "Tidal",
    platform: "Tidal",
  },
  {
    icon: "https://cloudinary-cdn.ffm.to/s--abCrNs3k--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_pandora.png",
    link: "https://www.pandora.com/artist/waiting-for-smith/AR3qJ5rKfKqVwfZ",
    alt: "Pandora",
    platform: "Pandora",
  },
  {
    icon: instagramIcon, // Use the imported PNG icon
    link: "https://www.instagram.com/waitingforsmith/?hl=en",
    alt: "Instagram",
    platform: "Instagram",
  },
  {
    icon: webIcon, // Use the imported PNG icon
    link: "https://www.waitingforsmith.co.uk/",
    alt: "Website",
    platform: "Website",
  },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-400 via-red-400 to-red-500">
      {/* Hero Section */}
      <section className="w-full bg-transparent text-center py-8">
        <Image
          src={harry} // Hero image path
          alt="Waiting for Smith"
          width={200}
          height={200}
          className="mx-auto mb-4 rounded-full shadow-2xl border-4 border-white"
        />
        <h1 className="text-5xl font-bold text-white mb-2">
          Waiting for Smith
        </h1>
        <p className="text-lg text-white">
          Discover music that moves your soul
        </p>
      </section>

      {/* Social Links Grid */}
      <div className="container px-4 mb-4 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {socialLinks.map((social, index) => (
            <SocialCard key={index} {...social} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
