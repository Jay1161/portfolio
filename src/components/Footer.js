import React from 'react';
import { Linkedin, Github, Twitter, Heart, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/jay-vaja-b84237229/",
      label: "LinkedIn",
    },
    {
      icon: <Github size={24} />,
      url: "https://github.com/Jay1161",
      label: "GitHub",
    },
    {
      icon: <Twitter size={24} />,
      url: "https://x.com/jayvaja_11",
      label: "Twitter",
    },
    {
      icon: <Mail size={24} />,
      url: "mailto:jayvaja56@gmail.com",
      label: "Mail",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 font-poppins">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-800 dark:text-gray-200 font-medium">
            © {new Date().getFullYear()} Jay Vaja. All Rights Reserved.
          </p>

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
        </div>
      </div>
    </footer>
  );
};

export default Footer;