import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import StarryBackground from "./StarryBackground";
import { Download, Eye } from "lucide-react";
import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
import { SiX, SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  const typedStrings = [
    "Software Developer",
    "DevOps Enthusiast",
    "Mobile App Developer",
  ];

  // Custom X.com icon component
  const XIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  //const resumePath = process.env.PUBLIC_URL + "/documents/resume.pdf";

  const resumePath = "https://drive.google.com/file/d/1Wg53elmH95uLCRuJ3m0dQ6nfSKikOhOi/view?usp=sharing";

  const handleDownload = () => {
    // Create a temporary link with the correct path
    const link = document.createElement("a");
    link.href = resumePath;
    link.setAttribute("download", "Jay_Vaja_Resume.pdf");
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Open PDF in new tab
    const newWindow = window.open(resumePath, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

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

        {/* Solar System
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 dark:block hidden">
          <SolarSystem />
        </div> */}

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
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              A driven technology enthusiast with a keen eye for innovation. I
              am actively developing impactful projects and exploring
              cutting-edge technologies. I find joy in contributing to
              communities and creating seamless, user-focused digital
              experiences.
            </p>
            {/* <h1 className="text-5xl font-bold mb-4 leading-tight">
              Hi!, I'm Jay Vaja
            </h1>
            <h2 className="text-2xl mb-6">
              I'm a{" "}
              <span className="text-black dark:text-white font-bold">
                <ReactTyped
                  strings={typedStrings}
                  typeSpeed={70}
                  backDelay={1000}
                  backSpeed={70}
                  loop
                />
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              A driven technology enthusiast with a keen eye for innovation. I
              am actively developing impactful projects and exploring
              cutting-edge technologies. I find joy in contributing to
              communities and creating seamless, user-focused digital
              experiences.
            </p> */}

            {/* <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
             A tech enthusiast. I'm currently working on exciting projects and
             passionate about emerging technologies. I also enjoy open-source
             contributions and crafting delightful user experiences.
          </p> */}

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              {[
                {
                  icon: SiLinkedin,
                  href: "https://www.linkedin.com/in/jay-vaja-b84237229/",
                },
                { icon: SiGithub, href: "https://github.com/Jay1161" },
                { icon: SiX, href: "https://x.com/jayvaja_11" },
                { icon: SiEn, href: "mailto:jayvaja56@gmail.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  //className="text-black dark:text-white hover:text-opacity-80 transition-colors"
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
                //className="inline-flex items-center gap-3 text-black dark:text-white hover:opacity-80 transition-all group"
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
                    cy="10"
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

            {/* Resume Action Buttons */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={handleView}
                className="bg-orange-500 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 dark:hover:bg-blue-600 transition-colors inline-flex items-center gap-2 group"
              >
                <span>View Resume</span>
                <Eye className="w-5 h-5 transition-transform group-hover:scale-110" />
              </button>

              <button
                onClick={handleDownload}
                className="bg-gray-700 dark:bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors inline-flex items-center gap-2 group"
              >
                <span>Download</span>
                <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
              </button>
              {/* <button
                onClick={handleView}
                className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg border border-black dark:border-white hover:opacity-90 transition-colors inline-flex items-center gap-2 group"
              >
                <span>View Resume</span>
                <Eye className="w-5 h-5 transition-transform group-hover:scale-110" />
              </button>

              <button
                onClick={handleDownload}
                className="bg-white dark:bg-black text-black dark:text-white px-6 py-3 rounded-lg border border-black dark:border-white hover:opacity-90 transition-colors inline-flex items-center gap-2 group"
              >
                <span>Download</span>
                <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
              </button> */}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* <img
                src={photo}
                alt="Jay"
                className="w-full h-auto rounded-full p-4 transition-colors duration-300"
                //className="w-full h-auto rounded-full p-4 ring-4 ring-orange-200 dark:ring-blue-900 transition-colors duration-300"
              /> */}
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}

export default Home;
