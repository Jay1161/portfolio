// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     // Check system preference initially
//     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//     document.documentElement.classList.toggle('dark');
//   };

//   const handleLogoClick = () => {
//     window.location.reload();
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 shadow-md z-50 px-4 md:px-8 py-4 font-poppins transition-colors duration-300">
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center">
//           <div className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
//             <a href="#" onClick={handleLogoClick} className="relative group">
//               <span className="text-[#ff6b6b]">{'</>'}</span> 
//               Jay Vaja
//               <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff6b6b] transition-all duration-300"></span>
//             </a>
//           </div>
//           <div className="flex items-center gap-4">
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//               aria-label="Toggle theme"
//             >
//               {isDark ? (
//                 <span className="text-yellow-400">🌞</span>
//               ) : (
//                 <span>🌙</span>
//               )}
//             </button>
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden text-gray-700 dark:text-white hover:text-gray-500 focus:outline-none"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//             <ul className="hidden md:flex justify-center items-center m-0 p-0 list-none">
//               {['Home', 'Experience', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
//                 <li key={item} className="mx-4 group relative">
//                   <a
//                     href={`#${item.toLowerCase()}`}
//                     className="text-gray-700 dark:text-gray-200 no-underline text-lg group-hover:text-[#ff6b6b] dark:group-hover:text-[#00bfff] transition-colors duration-300 relative"
//                   >
//                     {item}
//                     {/* <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff6b6b] dark:bg-[#00bfffcd] group-hover:w-full transition-all duration-300"></span> */}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         {isOpen && (
//           <div className="md:hidden">
//             <ul className="pt-4 pb-3">
//               {['Home', 'Experience', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
//                 <li key={item} className="mb-4 group relative">
//                   <a
//                     href={`#${item.toLowerCase()}`}
//                     onClick={() => setIsOpen(false)}
//                     className="block text-gray-700 dark:text-gray-200 no-underline text-lg group-hover:text-[#ff6b6b] dark:group-hover:text-[#00bfff] transition-colors duration-300 relative"
//                   >
//                     {item}
//                     {/* <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff6b6b] group-hover:w-full transition-all duration-300"></span> */}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = (e) => {
    e.preventDefault();
    if (isAnimating) return;

    setIsAnimating(true);
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
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
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff6b6b] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <div className="relative w-12 h-8">
              <button
                onClick={toggleTheme}
                className="w-full h-full bg-transparent border-none cursor-pointer relative z-10 outline-none"
                aria-label="Toggle theme"
              >
                <div className="w-7 h-10 overflow-hidden absolute left-2.5 -top-1.5 rounded-b-lg">
                  {/* Sun */}
                  <svg
                    className={`w-6 h-6 absolute left-0.5 top-1.5 transition-all duration-300 ease-in-out
                      ${
                        isDark
                          ? "translate-y-16 opacity-0"
                          : "translate-y-0 opacity-100"
                      }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#f0c644"
                    strokeWidth="2"
                  >
                    <g className="animate-spin-slow origin-center">
                      <line x1="1" y1="12" x2="2" y2="12" />
                      <line x1="4.2" y1="4.2" x2="4.9" y2="4.9" />
                      <line x1="12" y1="1" x2="12" y2="2" />
                      <line x1="19.8" y1="4.2" x2="19.1" y2="4.9" />
                      <line x1="23" y1="12" x2="22" y2="12" />
                      <line x1="19.8" y1="19.8" x2="19.1" y2="19.1" />
                      <line x1="12" y1="23" x2="12" y2="22" />
                      <line x1="4.2" y1="19.8" x2="4.9" y2="19.1" />
                    </g>
                    <circle cx="12" cy="12" r="6" />
                  </svg>

                  {/* Moon */}
                  <svg
                    className={`w-6 h-6 absolute left-0.5 top-1.5 scale-75 transition-all duration-300 ease-in-out
                      ${
                        isDark
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-16 opacity-0"
                      }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#fdd47e"
                    strokeWidth="2"
                  >
                    <path d="M18,16C12.5,16,8,11.5,8,6 c0-0.9,0.1-1.8,0.4-2.6C4.1,4.5,1,8.4,1,13c0,5.5,4.5,10,10,10c4.6,0,8.5-3.1,9.6-7.4C19.8,15.9,18.9,16,18,16z" />
                    <g className="animate-twinkle1 origin-[15px_3px]">
                      <line
                        x1="15"
                        y1="1"
                        x2="15"
                        y2="5"
                        className="stroke-[#ddeafb]"
                      />
                      <line
                        x1="13"
                        y1="3"
                        x2="17"
                        y2="3"
                        className="stroke-[#ddeafb]"
                      />
                    </g>
                    <g className="animate-twinkle-2 origin-[21px_9px]">
                      <line
                        x1="21"
                        y1="7"
                        x2="21"
                        y2="11"
                        className="stroke-[#ddeafb]"
                      />
                      <line
                        x1="19"
                        y1="9"
                        x2="23"
                        y2="9"
                        className="stroke-[#ddeafb]"
                      />
                    </g>
                  </svg>
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
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
                    className="text-gray-700 dark:text-gray-200 no-underline text-lg group-hover:text-[#ff6b6b] dark:group-hover:text-[#00bfff] transition-colors duration-300"
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
                <li key={item} className="mb-4 group">
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 dark:text-gray-200 no-underline text-lg group-hover:text-[#ff6b6b] dark:group-hover:text-[#00bfff] transition-colors duration-300"
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