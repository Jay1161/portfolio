import amnex from "../assets/company/amnex.jpeg";
import navpad from "../assets/company/navpad.jpg";
import iTech from "../assets/company/iTechOpslogo.jpg";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { Code2, Smartphone, MapPin, Cloud } from "lucide-react";
import React, { useState } from "react";


const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "NavPad Infotech",
      location: "Vadodara, Gujarat",
      date: "Sept 2021 - Oct 2021",
      description:
        "Led software design, implementation, and testing using Microsoft.NET, C#, jQuery, and MSSQL Server. Delivered high-performance solutions on time, exceeding expectations with a proactive, results-driven approach.",
      icon: Code2,
      logoUrl: navpad,
      website: "http://new.navpadinfotech.com",
    },
    {
      title: "Mobile App Developer Intern",
      company: "Amnex Infotechnologies",
      location: "Ahmedabad, Gujarat",
      date: "May 2023 - June 2023",
      description:
        "Built a high-performance parking app using Firebase and Material UI, elevating user experience and refining app efficiency with modern development practices.",
      icon: Smartphone,
      logoUrl: amnex,
      website: "https://www.amnex.com",
    },
    {
      title: "DevOps Intern",
      company: "iTechOps Cloud",
      location: "Ahmedabad, Gujarat",
      date: "January 2025 - Present",
      description:
        "Collaborated with a team of developers to deploy and maintain cloud infrastructure, ensuring optimal performance and security.",
      icon: Cloud,
      logoUrl: iTech,
      website: "https://www.itechops.com",
    },
    // {
    //   title: "Mobile App Developer Intern",
    //   company: "Ekaantik Software Solutions",
    //   location: "Ahmedabad, Gujarat",
    //   date: "January 2025 - Present",
    //   description:
    //     "Developed a high-performance mobile app using Flutter, Firebase, and Material UI, elevating user experience and refining app efficiency with modern development practices.",
    //   icon: Smartphone,
    //   logoUrl: ekaantik,
    //   website: "https://ekaantik.com",
    // },
  ];

  const [expandedIds, setExpandedIds] = useState(new Set());

  const toggleExpand = (index) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-20 scroll-mt-16 font-poppins"
    >
      <ScrollAnimationWrapper>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 md:mb-8 text-gray-800 dark:text-white">
            My Professional Experience
          </h2>
          <p className="mb-8 md:mb-12 text-center text-gray-600 dark:text-gray-300 text-base md:text-lg px-4">
            Collaborated with top tech companies, driving the development of
            scalable, innovative applications.
          </p>

          <div className="relative max-w-4xl mx-auto pt-8">
            {/* Timeline line centered with dots */}
            <div className="absolute top-0 md:left-1/2 left-[19px] w-0.5 h-full transform md:-translate-x-1/2 bg-gradient-to-b from-orange-200 to-orange-300 dark:from-blue-700 dark:to-blue-600" />

            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              const isLast = index === experiences.length - 1;

              return (
                <div
                  key={index}
                  className="relative flex items-center mb-8 md:mb-16 w-full group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-orange-500 dark:border-blue-400 bg-white dark:bg-gray-900 group-hover:bg-orange-500 dark:group-hover:bg-blue-500 transition-all duration-300 flex items-center justify-center">
                      <Icon className="w-4 h-4 md:w-6 md:h-6 text-orange-500 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  <div
                    className={`w-full md:w-5/12 ${
                      isEven
                        ? "md:mr-auto md:text-right md:pr-16 pl-16 md:pl-0"
                        : "md:ml-auto md:text-left md:pl-16 pl-16"
                    }`}
                  >
                    <div className="relative bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100 dark:border-blue-900">
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`absolute cursor-pointer ${
                          isEven
                            ? "md:-right-3 -left-3 md:left-auto"
                            : "-left-3"
                        } -top-3 w-10 md:w-12 h-10 md:h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-orange-500 dark:border-blue-400 shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300`}
                      >
                        <img
                          src={exp.logoUrl}
                          alt={`${exp.company} logo`}
                          className="w-6 md:w-10 h-6 md:h-10 rounded-full object-cover"
                        />
                      </a>

                      <div
                        className={`flex flex-col ${
                          isEven ? "md:items-end items-start" : "items-start"
                        } mt-2 md:mt-4`}
                      >
                        <h3 className="font-bold text-lg md:text-xl mb-1 text-gray-800 dark:text-white">
                          {exp.title}
                        </h3>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base md:text-lg mb-1 text-orange-500 dark:text-blue-400 font-medium hover:text-orange-600 dark:hover:text-blue-300 transition-colors"
                        >
                          {exp.company}
                        </a>
                        <div
                          className={`flex items-center gap-1 mb-2 ${
                            isEven ? "md:flex-row-reverse" : "flex-row"
                          }`}
                        >
                          <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {exp.location}
                          </span>
                        </div>
                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-4">
                          {exp.date}
                        </p>
                      </div>

                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          expandedIds.has(index) ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <p
                          className={`text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 ${
                            isEven ? "md:text-right text-left" : "text-left"
                          }`}
                        >
                          {exp.description}
                        </p>
                      </div>

                      <div
                        className={`flex ${
                          isEven
                            ? "md:justify-end justify-start"
                            : "justify-start"
                        }`}
                      >
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-orange-500 dark:text-blue-400 hover:text-orange-600 dark:hover:text-blue-500 text-sm font-medium focus:outline-none transition-colors duration-300"
                        >
                          {expandedIds.has(index)
                            ? "Read Less ↑"
                            : "Read More ↓"}
                        </button>
                      </div>
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

export default Experience;