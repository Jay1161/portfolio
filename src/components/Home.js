import React from "react";
import { ReactTyped } from "react-typed";
import { Linkedin, Github, Twitter, Mail, Scroll } from "lucide-react";
import photo from "../assets/images/personal/image-1.png";
import SolarSystem from "./SolarSystem";
import StarryBackground from "./StarryBackground";
import ScrollAnimationWrapper, {
  staggerChildrenVariants,
  childVariants,
} from "./ScrollAnimationWrapper";


function Home() {
  const typedStrings = [
    "Software Developer",
    "DevOps Enthusiast",
    "Mobile App Developer",
  ];

  return (
    <section
      id="home"
      className="relative flex justify-center items-center min-h-screen pt-20 bg-gradient-to-b from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 font-poppins transition-colors duration-300"
    >
      <ScrollAnimationWrapper>
      {/* Stars background */}
      <div className="dark:block hidden">
        <StarryBackground />
      </div>

      {/* Solar System */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 dark:block hidden">
        <SolarSystem />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center px-4 z-10">
        <div className="text-gray-800 dark:text-white">
          <h1 className="text-5xl font-bold mb-2 leading-tight">
            Hi!, I'm Jay Vaja
          </h1>
          <h2 className="text-2xl mb-4">
            I'm a{" "}
            <span className="text-orange-500 dark:text-blue-400">
              <ReactTyped
                strings={typedStrings}
                typeSpeed={70}
                backDelay={1000}
                backSpeed={70}
                loop
              />
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 text-justify">
            A driven technology enthusiast with a keen eye for innovation. I am
            actively developing impactful projects and exploring cutting-edge
            technologies. I find joy in contributing to communities and creating
            seamless, user-focused digital experiences.
          </p>

          {/* <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
             A tech enthusiast. I'm currently working on exciting projects and
             passionate about emerging technologies. I also enjoy open-source
             contributions and crafting delightful user experiences.
          </p> */}

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/jay-vaja-b84237229/",
              },
              { icon: Github, href: "https://github.com/Jay1161" },
              { icon: Twitter, href: "https://x.com/jayvaja_11" },
              { icon: Mail, href: "mailto:jayvaja56@gmail.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 dark:text-blue-400 hover:text-opacity-80 transition-colors"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Scroll Down Button */}
          <div className="mt-12">
            <a
              href="#experience"
              className="inline-flex items-center gap-3 text-orange-500 dark:text-blue-400 hover:opacity-80 transition-all group"
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
          </div>

          {/* Download Resume Button */}
          <div className="mt-8">
            <a
              href="documents/resume.pdf"
              className="bg-orange-500 dark:bg-blue-500 text-white px-6 py-3 rounded hover:bg-orange-600 dark:hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
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
              className="w-full h-auto rounded-full p-4 transition-colors duration-300"
              //className="w-full h-auto rounded-full p-4 ring-4 ring-orange-200 dark:ring-blue-900 transition-colors duration-300"
            />
          </div>
        </div>
      </div>
      </ScrollAnimationWrapper>
    </section>
  );
}

export default Home;