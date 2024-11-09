import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
// import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-4 md:px-8 py-4 font-poppins">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo or Brand Name - Add if needed */}
          <div className="text-xl font-bold text-gray-800">
            Jay's Portfolio
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-gray-500 focus:outline-none"
          >
            {isOpen ? (
              <X size={24} /> // X icon when menu is open
            ) : (
              <Menu size={24} /> // Hamburger icon when menu is closed
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center items-center m-0 p-0 list-none">
            <li className="mx-4">
              <a 
                href="#home" 
                className="text-gray-700 no-underline text-lg hover:text-gray-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li className="mx-4">
              <a 
                href="#experience" 
                className="text-gray-700 no-underline text-lg hover:text-gray-500 transition-colors duration-300"
              >
                Experience
              </a>
            </li>
            <li className="mx-4">
              <a 
                href="#skills" 
                className="text-gray-700 no-underline text-lg hover:text-gray-500 transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li className="mx-4">
              <a 
                href="#projects" 
                className="text-gray-700 no-underline text-lg hover:text-gray-500 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li className="mx-4">
              <a 
                href="#contact" 
                className="text-gray-700 no-underline text-lg hover:text-gray-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Only visible when hamburger is clicked */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="pt-4 pb-3">
              <li className="mb-4">
                <a 
                  href="#home"
                  onClick={toggleMenu} 
                  className="block text-gray-700 no-underline text-lg hover:text-gray-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a 
                  href="#experience"
                  onClick={toggleMenu}
                  className="block text-gray-700 no-underline text-lg hover:text-gray-500 transition-colors duration-300"
                >
                  Experience
                </a>
              </li>
              <li className="mb-4">
                <a 
                  href="#skills"
                  onClick={toggleMenu}
                  className="block text-gray-700 no-underline text-lg hover:text-gray-500 transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li className="mb-4">
                <a 
                  href="#projects"
                  onClick={toggleMenu}
                  className="block text-gray-700 no-underline text-lg hover:text-gray-500 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li className="mb-4">
                <a 
                  href="#contact"
                  onClick={toggleMenu}
                  className="block text-gray-700 no-underline text-lg hover:text-gray-500 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;