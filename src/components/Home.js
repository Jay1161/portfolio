import React from "react";
import { ReactTyped } from "react-typed";
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';
import photo from "../assets/images/image-1.png";

function Home() {
  const typedStrings = [
    "Software Developer",
    "DevOps Enthusiast",
    "Mobile App Developer",
  ];

  return (
    <section
      id="home"
      className="flex justify-center items-center min-h-screen pt-20 bg-white font-poppins"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center px-4">
        {/* Text Content */}
        <div className="text-gray-800">
          <h1 className="text-5xl font-bold mb-2 leading-tight">
            Hi!, I'm Jay Vaja
          </h1>
          <h2 className="text-2xl mb-4">
            I'm a{" "}
            <span className="text-[#6c63ff]">
              <ReactTyped
                strings={typedStrings}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </span>
          </h2>
          {/* <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
            A tech enthusiast. I'm currently working on exciting projects and
            passionate about emerging technologies. I also enjoy open-source
            contributions and crafting delightful user experiences.
          </p> */}

          <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
            A driven technology enthusiast with a keen eye for innovation. 
            I am actively developing impactful projects and exploring cutting-edge 
            technologies. I find joy in contributing to communities and 
            creating seamless, user-focused digital experiences.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/jay-vaja-b84237229/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6c63ff] hover:text-opacity-80 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Jay1161"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6c63ff] hover:text-opacity-80 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://x.com/jayvaja_11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6c63ff] hover:text-opacity-80 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:jayvaja56@gmail.com"
              className="text-[#6c63ff] hover:text-opacity-80 transition-colors"
              aria-label="Send email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          {/* Scroll Down Button */}
          <div className="mt-12">
            <a
              href="#experience"
              className="inline-flex items-center gap-3 text-[#6c63ff] hover:opacity-80 transition-all group"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5"
                  y="1"
                  width="14"
                  height="22"
                  rx="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  className="animate-bounce"
                  cx="12"
                  cy="7"
                  r="2"
                  fill="currentColor"
                />
              </svg>
              <span className="text-ml font-bold">
                Scroll down
                <span className="inline-block ml-1 transform group-hover:translate-y-1 transition-transform">
                  ↓
                </span>
              </span>
            </a>

            {/* Download Resume Button */}
          </div>
          <div className="mt-8">
            <a
              href="documents/resume.pdf"
              className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition-colors inline-flex items-center gap-2"
              target="_blank"
              download
            >
              Download Resume
              <i className="uil uil-file-copy-alt"></i>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <img
              src={photo}
              alt="Jay"
              className="w-full h-auto rounded-full p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;