// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar.js";
// import ScrollToTop from "./components/ScrollToTop";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Experience from "./pages/Experience";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       {
//         <Router>
//           <Navbar />
//           <ScrollToTop />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/experience" element={<Experience />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </Router>
//       }
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    // <div className="App">
    //   <Navbar />
    //   <Home />
    //   <Experience />
    //   <Skills />
    //   <Projects />
    //   <Contact />
    //   <Footer />
    //   {showScrollToTop && <ScrollToTop />}
    // </div>
    // </BrowserRouter>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="relative min-h-screen">
        {/* StarryBackground will only show in dark mode */}
        <div className="dark:block hidden">
          <StarryBackground />
        </div>
        
        <Navbar />
        <main className="relative">
          <Home />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        {showScrollToTop && <ScrollToTop />}
      </div>
    </BrowserRouter>
  );
}

export default App;
