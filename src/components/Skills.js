import React from 'react';
import { motion } from 'framer-motion';
// import "../styles/Skills.css";

// Import all icons directly
import flutterIcon from '../assets/icons/flutter.png';
import javaIcon from '../assets/icons/java.png';
import dartIcon from '../assets/icons/dart.png';
import androidStudioIcon from '../assets/icons/android-studio.png';
import vscodeIcon from '../assets/icons/vscode.png';
import awsIcon from '../assets/icons/aws.png';
import dockerIcon from '../assets/icons/docker.png';
import kubernetesIcon from '../assets/icons/kubernetes.png';
import jenkinsIcon from '../assets/icons/jenkins.png';
import mysqlIcon from '../assets/icons/mysql.png';
import linuxIcon from '../assets/icons/linux.png';
import firebaseIcon from '../assets/icons/firebase.png';
import githubIcon from '../assets/icons/github.png';
import reactIcon from '../assets/icons/react.png';

const SkillCard = ({ icon, name, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative group"
    >
      {/* Outer glow effect */}
      <div className="absolute -inset-0.5 bg-[#6c63ff] rounded-lg blur opacity-0 group-hover:opacity-75 transition-shadow duration-300" />
      
      {/* Card content */}
      <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg h-full">
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <img
              src={icon}
              alt={name}
              className="w-15 h-15 object-contain"
            />
          </div>
          <p className="text-sm text-black dark:text-gray-50 font-medium">{name}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { icon: flutterIcon, name: "Flutter" },
    { icon: javaIcon, name: "Java" },
    { icon: dartIcon, name: "Dart" },
    { icon: androidStudioIcon, name: "Android Studio" },
    { icon: vscodeIcon, name: "VS Code" },
    { icon: awsIcon, name: "AWS" },
    { icon: dockerIcon, name: "Docker" },
    { icon: kubernetesIcon, name: "Kubernetes" },
    { icon: jenkinsIcon, name: "Jenkins" },
    { icon: mysqlIcon, name: "MySQL" },
    { icon: linuxIcon, name: "Linux" },
    { icon: firebaseIcon, name: "Firebase" },
    { icon: githubIcon, name: "GitHub" },
    { icon: reactIcon, name: "React" },
  ];

  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-800 py-16 px-4 scroll-mt-16 pt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;