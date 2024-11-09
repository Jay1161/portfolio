import React from 'react';
import { Linkedin, Github, Twitter, Heart } from 'lucide-react';
//import '../styles/Footer.css';

function Footer() {
  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/jay-vaja-b84237229/',
      label: 'LinkedIn'
    },
    {
      icon: <Github size={24} />,
      url: 'https://github.com/Jay1161',
      label: 'GitHub'
    },
    {
      icon: <Twitter size={24} />,
      url: 'https://x.com/jayvaja_11',
      label: 'Twitter'
    }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-600 font-medium">
            © {new Date().getFullYear()} Jay Vaja. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-600 font-medium font-serif">Made by</span>
            <span className="text-gray-700 font-bold font-serif">Jay Vaja</span>
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
}

export default Footer;