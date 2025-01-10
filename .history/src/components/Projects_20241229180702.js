import React from 'react';
import portfolio from '../assets/images/projects/portfolio.png';
import cicd from '../assets/images/projects/cicd.png';
import healthCare from '../assets/images/projects/health-care.png';
import cart from '../assets/images/projects/cart.png';
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const ProjectCard = ({ title, description, tech, imageUrl, projectUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col h-full border border-gray-200 dark:border-gray-700 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
      <div className="p-6 flex-1 flex flex-col">
        <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-orange-100 dark:bg-blue-900/30 text-orange-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
        
        {/* Spacer to push the button to the bottom */}
        <div className="flex-grow"></div>
        
        {/* Learn More button */}
        <div className="flex justify-center">
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-orange-500 dark:bg-blue-500 hover:bg-orange-600 dark:hover:bg-blue-600 text-white font-medium mt-4 py-2 px-6 rounded-md shadow-lg hover:shadow-orange-500/30 dark:hover:shadow-blue-500/30 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};



const Projects = () => {
  const projects = [
    {
      title: "CareWise",
      description:
        "A health appointment booking app built with modern mobile frameworks and Firebase. It allows users to schedule appointments seamlessly with a responsive design and real-time data storage.",
      tech: ["Java", "Firebase", "Android Studio", "Material UI"],
      imageUrl: healthCare,
      projectUrl:
        "https://github.com/Jay1161/Health-Care-for-Senior-Citizen.git",
    },
    {
      title: "Farm",
      description:
        "A farmer-focused e-commerce app developed using modern mobile frameworks and Firebase. It connects farmers with buyers, supports a user-friendly interface, and ensures smooth transactions with real-time data management.",
      tech: ["Dart", "Flutter", "Firebase", "Material UI"],
      imageUrl: cart,
      projectUrl: "https://github.com/Jay1161/Farmer_E-Commerce.git",
    },
    {
      title: "CI/CD Project",
      description:
        "A project to explore Jenkins integration with the MERN stack and Docker, focusing on CI/CD automation and containerized deployment. This laid the groundwork for understanding seamless development and delivery workflows.",
      tech: ["DevOps", "Docker", "Jenkins"],
      imageUrl: cicd,
      projectUrl: "https://github.com/Jay1161/frontend-cicd.git",
    },
    {
      title: "Portfolio-Website",
      description:
        "A personal portfolio website built with React and Tailwind CSS. It showcases my projects, skills, and experience in a visually appealing and interactive manner.",
      tech: ["Javascript", "React", "Tailwind css", "Github Pages"],
      imageUrl: portfolio,
      projectUrl: "https://github.com/Jay1161/portfolio-website.git",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 scroll-mt-16 font-poppins"
    >
      <ScrollAnimationWrapper>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            My Creative Journey
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A glimpse into the projects that fuel my passion for innovation and
            problem-solving
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {/* See All Projects Button */}
          <div className="flex justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Jay1161?tab=repositories"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-orange-600 dark:from-blue-500 dark:to-blue-600 rounded-full hover:from-orange-600 hover:to-orange-700 dark:hover:from-blue-600 dark:hover:to-blue-700"
            >
              {/* Button glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-blue-500 dark:to-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

              <span className="relative flex items-center space-x-2">
                <span>See All Projects</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default Projects;