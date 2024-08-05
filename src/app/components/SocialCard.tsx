// components/SocialCard.tsx

import Image, { StaticImageData } from "next/image";
import React from "react";

interface SocialCardProps {
  icon: string | StaticImageData; // URL of the icon image
  link: string; // URL of the social media or external link
  alt: string; // Alt text for the icon image
  platform: string; // Platform name
}

const SocialCard: React.FC<SocialCardProps> = ({
  icon,
  link,
  alt,
  platform,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center p-6 bg-white bg-opacity-80 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
    >
      <Image
        src={icon}
        alt={alt}
        width={64}
        height={64}
        className="mb-4"
        unoptimized // Disable Next.js optimization for external URLs
      />
      <h2 className="text-lg font-semibold text-gray-800">{platform}</h2>
    </a>
  );
};

export default SocialCard;
