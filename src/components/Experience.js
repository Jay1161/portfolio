import React from "react";
// import "../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "NavPad Infotech",
      date: "May 2021 - June 2021"
    },
    {
      title: "Mobile App Developer Intern",
      company: "Amnex Infotechnologies",
      date: "May 2023 - June 2023"
    },
  ];

  return (
    <section id="experience" className="p-8 text-center scroll-mt-16 pt-16">
      <h2 className="text-4xl mb-8">Experience</h2>
      <p className="mb-8">
        Worked with leading tech companies, building efficient and scalable applications.
      </p>
      
      <div className="relative max-w-3xl mx-auto pt-8">
        {/* Vertical line */}
        <div 
          className="absolute top-0 left-1/2 w-0.5 h-full transform -translate-x-1/2"
          style={{ backgroundColor: '#6c63ff' }}
        />
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center mb-12 w-full">
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div 
                className="w-3 h-3 rounded-full border-2 bg-white hover:bg-custom-purple transition-colors duration-200 z-10 relative"
                style={{ 
                  borderColor: '#6c63ff',
                  hover: {
                    backgroundColor: '#6c63ff'
                  }
                }}
              />
            </div>
            
            {/* Content box */}
            <div className={`w-5/12 ${
              index % 2 === 0 
                ? 'mr-auto text-right pr-8' 
                : 'ml-auto text-left pl-8'
            }`}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">{exp.title}</h3>
                {/* Company name */}
                <h4 className="mb-2" style={{ color: '#6c63ff' }}>{exp.company}</h4>
                <p className="text-gray-600">{exp.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;