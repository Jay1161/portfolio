import React from "react";
import { Code2, Database, Cloud, Smartphone, Infinity } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const Services = () => {
  const services = [
    {
      title: "DevOps Enginnering",
      description:
        "Implementing CI/CD pipelines and automating deployment processes for efficient software delivery.",
      icon: Infinity,
      skills: ["Docker", "Jenkins", "Kubernetes", "Git"],
    },
    {
      title: "Cloud Solutions",
      description:
        "Deploying scalable and secure cloud infrastructure for seamless application hosting and management.",
      icon: Cloud,
      skills: ["AWS", "Google Cloud"],
    },
    {
      title: "Mobile Development",
      description:
        "Building cross-platform mobile applications with native performance and user experience.",
      icon: Smartphone,
      skills: ["Flutter", "Android"],
    },
    {
      title: "Web Development",
      description:
        "Building responsive and dynamic web applications using modern frameworks and technologies.",
      icon: Code2,
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-20 scroll-mt-16 font-poppins"
    >
      <ScrollAnimationWrapper>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-gray-800 dark:text-white">
            My Expert Services
          </h2>
          <p className="mb-8 md:mb-12 text-center text-gray-600 dark:text-gray-300 text-base md:text-lg px-4">
            Crafting innovative, high-quality software solutions that elevate
            user experiences and drive results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4 text-center">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100 dark:border-blue-900 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-blue-900/50 flex items-center justify-center mb-4 group-hover:bg-orange-500 dark:group-hover:bg-blue-500 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-orange-500 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs rounded-full bg-orange-100 dark:bg-blue-900/50 text-orange-600 dark:text-blue-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default Services;
