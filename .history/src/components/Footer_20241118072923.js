import React from 'react';
import { Heart } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";


// Custom X.com icon component
  const XIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn size={24} />,
      url: "https://www.linkedin.com/in/jay-vaja-b84237229/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/Jay1161",
      label: "GitHub",
    },
    {
      icon: <XIcon size={24} />,
      url: "https://x.com/jayvaja_11",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope size={24} />,
      url: "mailto:jayvaja56@gmail.com",
      label: "Mail",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 font-poppins">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">

          <div className="flex items-center gap-2 mt-2 ">
            <span className="text-gray-600 dark:text-gray-300 font-medium">Made by</span>
            <span className="text-orange-500 dark:text-blue-400 font-bold ">Jay Vaja</span>
            <span className="inline-flex items-center animate-pulse">
              <Heart
                size={20}
                className="text-red-500 fill-red-500 animate-bounce"
              />
            </span>
          </div>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 dark:text-blue-400 hover:text-orange-600 dark:hover:text-blue-500 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          

          <p className="text-gray-800 dark:text-gray-200 font-medium">
            © {new Date().getFullYear()} Jay Vaja. All Rights Reserved.
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;