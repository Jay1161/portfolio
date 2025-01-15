import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference initially
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 shadow-md z-50 px-4 md:px-8 py-4 font-poppins transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
            <a href="#" onClick={handleLogoClick} className="relative group">
              <span className="text-[#ff6b6b]">{'</>'}</span> 
              Jay Vaja
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff6b6b] transition-all duration-300"></span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <span className="text-yellow-400">🌞</span>
              ) : (
                <span>🌙</span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 dark:text-white hover:text-gray-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <ul className="hidden md:flex justify-center items-center m-0 p-0 list-none">
              {['Home', 'Experience', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item} className="mx-4 group relative">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-200 no-underline text-lg group-hover:text-[#ff6b6b] dark:group-hover:text-[#00bfff] transition-colors duration-300 relative"
                  >
                    {item}
                    {/* <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff6b6b] dark:bg-[#00bfffcd] group-hover:w-full transition-all duration-300"></span> */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <ul className="pt-4 pb-3">
              {['Home', 'Experience', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item} className="mb-4 group relative">
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 dark:text-gray-200 no-underline text-lg group-hover:text-[#ff6b6b] dark:group-hover:text-[#00bfff] transition-colors duration-300 relative"
                  >
                    {item}
                    {/* <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff6b6b] group-hover:w-full transition-all duration-300"></span> */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 shadow-md z-50 px-4 md:px-8 py-4 font-poppins transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
            <a href="#" onClick={handleLogoClick} className="relative group">
              <span className="text-[#ff6b6b]">{"</>"}</span>
              Jay Vaja
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff6b6b] transition-all duration-300"></span>
            </a>
          </div>

          {/* Navigation and Theme Toggle */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                // Sun Icon for Light Mode
                <svg
                  className="w-6 h-6 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="6" />
                </svg>
              ) : (
                // Moon Icon for Dark Mode
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18,16C12.5,16,8,11.5,8,6c0-0.9,0.1-1.8,0.4-2.6C4.1,4.5,1,8.4,1,13c0,5.5,4.5,10,10,10c4.6,0,8.5-3.1,9.6-7.4C19.8,15.9,18.9,16,18,16z" />
                </svg>
              )}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 dark:text-white hover:text-gray-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex justify-center items-center m-0 p-0 list-none">
              {[
                "Home",
                "Experience",
                "Skills",
                "Projects",
                "Services",
                "Contact",
              ].map((item) => (
                <li key={item} className="mx-4 group relative">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-200 no-underline text-lg group-hover:text-[#ff6b6b] dark:group-hover:text-[#00bfff] transition-colors duration-300 relative"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="pt-4 pb-3">
              {[
                "Home",
                "Experience",
                "Skills",
                "Projects",
                "Services",
                "Contact",
              ].map((item) => (
                <li key={item} className="mb-4 group relative">
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 dark:text-gray-200 no-underline text-lg group-hover:text-[#ff6b6b] dark:group-hover:text-[#00bfff] transition-colors duration-300 relative"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;