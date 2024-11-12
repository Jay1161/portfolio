import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper, {
  staggerChildrenVariants,
  childVariants,
} from "./ScrollAnimationWrapper";

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

const SkillCard = ({ icon, name }) => {
  return (
    <div className="relative group flex-shrink-0 w-48 h-48">
      {/* Ambient glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-500 dark:from-blue-400 dark:to-blue-500 rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500" />
      
      {/* Card content */}
      <div className="relative h-full bg-white dark:bg-gray-900 p-6 rounded-xl transform group-hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
        <div className="h-full flex flex-col items-center justify-center space-y-4">
          <div className="relative w-20 h-20 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform duration-300">
            {/* Icon background glow */}
            <div className="absolute inset-0 bg-orange-500/10 dark:bg-blue-500/10 rounded-lg group-hover:bg-orange-500/20 dark:group-hover:bg-blue-500/20 transition-colors duration-300" />
            
            <img
              src={icon}
              alt={name}
              className="w-14 h-14 object-contain relative z-10 drop-shadow-lg"
            />
          </div>
          
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-orange-500 dark:group-hover:text-blue-400 transition-all duration-300">
            {name}
          </p>
        </div>
      </div>
    </div>
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

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (sliderRef.current && !isPaused) {
        sliderRef.current.scrollLeft += 1;
        
        // Reset to start when reached end
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    };

    autoScrollRef.current = setInterval(startAutoScroll, 30);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isPaused]);

  // Mouse and touch event handlers
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setIsPaused(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 scroll-mt-16 font-poppins"
    >
      <ScrollAnimationWrapper>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            My Skillset
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A curated list of the technologies and tools that fuel my
            development process
          </p>

          <div className="relative my-16">
            <div
              ref={sliderRef}
              className="overflow-x-hidden scroll-smooth"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              //onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsPaused(true)} // Added hover pause
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setTimeout(() => setIsPaused(false), 1000)}
            >
              <div className="flex space-x-8 px-8 py-8">
                {[...skills, ...skills].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      duration: 0.8,
                      delay: index * 0.1,
                    }}
                  >
                    <SkillCard icon={skill.icon} name={skill.name} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default Skills;