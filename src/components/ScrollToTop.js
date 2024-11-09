import React from 'react';
import { ChevronUp } from 'lucide-react';
// import "../styles/ScrollToTop.css";

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 flex items-center justify-center w-10 h-10 
                 rounded-full bg-gray-700 text-white opacity-80 hover:bg-gray-600 
                 transition-colors duration-300 shadow-lg"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
}

export default ScrollToTop;