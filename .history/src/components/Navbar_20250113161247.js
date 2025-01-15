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

import { Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Set initial theme based on system preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // Refresh the page on logo click
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
              <span className="text-[#ff6b6b]">{'</>'}</span>
              Jay Vaja
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff6b6b] transition-all duration-300"></span>
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* Toggle Theme Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isDark
                    ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
              <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                }`}
              >
                {isDark ? '🌞' : '🌙'}
              </button>
            </div>

            {/* Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 dark:text-white hover:text-gray-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-center items-center m-0 p-0 list-none">
              {['Home', 'Experience', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
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

        {/* Mobile Menu */}
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