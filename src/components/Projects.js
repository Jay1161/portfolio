import React from 'react';
// import "../styles/Projects.css";


const ProjectCard = ({ title, description, tech, imageUrl, projectUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-white mb-4 text-justify">{description}</p>
        <div className="flex flex-wrap gap-2 mb-auto">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-950 text-gray-600 dark:text-white px-2 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-center">
          <a
            href={projectUrl}
            className="bg-blue-500 hover:bg-[#6c63ff] text-white font-medium mt-5 py-2 px-4 rounded-md shadow-lg hover:shadow-[0_0_15px_#6c63ff] transition-shadow duration-300"
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
      title: 'Health Care for Senior Citizen',
      description:
        'A health appointment booking app built with modern mobile frameworks and Firebase. It allows users to schedule appointments seamlessly with a responsive design and real-time data storage.',
      tech: ['Java', 'Firebase', 'Android Studio', 'Material UI'],
      imageUrl: 'https://via.placeholder.com/300x200',
      projectUrl: 'https://github.com/Jay1161/Health-Care-for-Senior-Citizen.git'
    },
    {
      title: 'Farmer E-Commerce',
      description:
        'A farmer-focused e-commerce app developed using modern mobile frameworks and Firebase. It connects farmers with buyers, supports a user-friendly interface, and ensures smooth transactions with real-time data management.',
      tech: ['Dart', 'Flutter', 'Firebase', 'Material UI'],
      imageUrl: 'https://via.placeholder.com/300x200',
      projectUrl: 'https://github.com/Jay1161/Farmer_E-Commerce.git'
    },
    {
      title: 'CI/CD Project',
      description:
        'A project to explore Jenkins integration with the MERN stack and Docker, focusing on CI/CD automation and containerized deployment. This laid the groundwork for understanding seamless development and delivery workflows.',
      tech: ['DevOps', 'Docker', 'Jenkins'],
      imageUrl: 'https://via.placeholder.com/300x200',
      projectUrl: 'https://github.com/Jay1161/frontend-cicd.git'
    },
    {
      title: 'Portfolio Website',
      description:
        'A project to explore Jenkins integration with the MERN stack and Docker, focusing on CI/CD automation and containerized deployment. This laid the groundwork for understanding seamless development and delivery workflows.',
      tech: ['React', 'Tailwind css', 'Github Pages'],
      imageUrl: 'https://via.placeholder.com/300x200',
      projectUrl: 'https://github.com/Jay1161/portfolio-website.git'
    },
  ];

  return (
    <section 
    id="projects" 
    className="bg-gray-100 dark:bg-gray-900 dark:text-white py-16 px-4 scroll-mt-16 pt-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-sans text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;