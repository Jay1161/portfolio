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

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 shadow-md z-50 px-4 md:px-8 py-4 font-poppins transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
             Jay's Portfolio
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
              {['Home', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item} className="mx-4">
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-200 no-underline text-lg hover:text-orange-500 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <ul className="pt-4 pb-3">
              {['Home', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item} className="mb-4">
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 dark:text-gray-200 no-underline text-lg hover:text-orange-500 dark:hover:text-blue-400 transition-colors duration-300"
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