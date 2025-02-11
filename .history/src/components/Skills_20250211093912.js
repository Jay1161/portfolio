import androidStudioIcon from "../assets/icons/android-studio.png";
import awsIcon from "../assets/icons/aws.png";
import dartIcon from "../assets/icons/dart.png";
import dockerIcon from "../assets/icons/docker.png";
import firebaseIcon from "../assets/icons/firebase.png";
// Import icons
import flutterIcon from "../assets/icons/flutter.png";
import githubIcon from "../assets/icons/github.png";
import javaIcon from "../assets/icons/java.png";
import jenkinsIcon from "../assets/icons/jenkins.png";
import kubernetesIcon from "../assets/icons/kubernetes.png";
import terraformIcon from "../assets/icons/terraform.png";
import linuxIcon from "../assets/icons/linux.png";
import mysqlIcon from "../assets/icons/mysql.png";
import reactIcon from "../assets/icons/react.png";
import vscodeIcon from "../assets/icons/vscode.png";


import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { motion } from "framer-motion";
import React from "react";

const SkillCard = ({ icon, name }) => {
  return (
    <div className="relative group w-64">
      {/* Ambient glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-500 dark:from-blue-400 dark:to-blue-500 rounded-[50px] blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500" />

      {/* Card content */}
      <div className="relative flex items-center justify-center gap-4 px-6 h-16 bg-white dark:bg-gray-900 border-[3px] border-gray-200 dark:border-gray-700 rounded-[50px] transform group-hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
        <img
          src={icon}
          alt={name}
          className="w-6 h-6 object-contain relative z-10"
        />
        <span className="text-base font-medium text-gray-800 dark:text-gray-200 group-hover:text-orange-500 dark:group-hover:text-blue-400 transition-all duration-300">
          {name}
        </span>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { icon: awsIcon, name: "AWS" },
    { icon: azureIcon, name: "Azure" },
    { icon: dockerIcon, name: "Docker" },
    { icon: kubernetesIcon, name: "Kubernetes" },
    { icon: jenkinsIcon, name: "Jenkins" },
    { icon: terraformIcon, name: "Terraform" },
    { icon: linuxIcon, name: "Linux" },
    { icon: flutterIcon, name: "Flutter" },
    { icon: javaIcon, name: "Java" },
    { icon: dartIcon, name: "Dart" },
    { icon: androidStudioIcon, name: "Android Studio" },
    { icon: vscodeIcon, name: "VS Code" },
    { icon: mysqlIcon, name: "MySQL" },
    { icon: firebaseIcon, name: "Firebase" },
    { icon: githubIcon, name: "GitHub" },
    { icon: reactIcon, name: "React" },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-20 scroll-mt-16 font-poppins scroll-smooth"
    >
      <ScrollAnimationWrapper>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            My Skillset
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A curated list of the technologies and tools that fuel my
            development process
          </p>

          {/* Mobile Layout
          <div className="flex flex-col gap-4 lg:hidden">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <SkillCard icon={skill.icon} name={skill.name} />
              </motion.div>
            ))}
          </div> */}
          {/* Mobile Layout */}
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <SkillCard icon={skill.icon} name={skill.name} />
              </motion.div>
            ))}
          </div>

          {/* Desktop Layout with Offset Rows */}
          <div className="hidden lg:flex lg:flex-col items-center gap-6">
            {/* Split skills into chunks of 4 for rows */}
            {Array.from({ length: Math.ceil(skills.length / 4) }, (_, i) => (
              <div
                key={i}
                className={`flex justify-center gap-6 ${
                  i % 2 === 1 ? "ml-32" : ""
                }`}
              >
                {skills.slice(i * 4, (i + 1) * 4).map((skill, index) => (
                  <motion.div
                    key={i * 4 + index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      duration: 0.6,
                      delay: (i * 4 + index) * 0.1,
                    }}
                  >
                    <SkillCard icon={skill.icon} name={skill.name} />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default Skills;
