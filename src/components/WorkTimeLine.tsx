'use client'
import React, { useState } from 'react';
import { FaFlask, FaMicroscope, FaAtom, FaDna, FaLaptopCode } from 'react-icons/fa';

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string;
  icon: React.ElementType;
}

const experiences: WorkExperience[] = [
  {
    company: "IISC",
    position: "Research Intern",
    duration: "Aug 2024 - Present",
    description: "Working in the Machine Learning team at NMCAD lab of IISC as part of Project Urdhyuth to design eVTOL aircrafts.",
    icon: FaAtom
  },
  {
    company: "Wells Fargo",
    position: "SDE Intern",
    duration: "May 2024 - July 2024",
    description: "Delivering solutions as part of the Process Transformation and Intelligent Automation team to automate manual processes by leveraging various RPA tools.",
    icon: FaLaptopCode
  },
  {
    company: "IIT Delhi",
    position: "Research Intern",
    duration: "Nov 2023 - Dec 2023",
    description: "Worked on a Non Alcoholic Fatty Liver Disease (NAFLD) prediction model using machine learning.",
    icon: FaMicroscope
  },
  {
    company: "NITK",
    position: "Web Developer",
    duration: "Nov 2023 - Dec 2023",
    description: " Front-End Developer contributing in designing and coding of the official website of the IEEE ASSETS conference.",
    icon: FaLaptopCode
  },
  // Add more experiences as needed
];

const WorkTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full py-8 relative h-fit">
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-purple-500 absolute top-12 flex justify-center"></div>
      <div className="flex justify-between items-center relative">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <div 
              className="w-8 h-8 rounded-full bg-gradient-to-br flex justify-center items-center from-cyan-500 to-purple-500 p-0.5 mb-2 cursor-pointer z-10"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <exp.icon className="text-cyan-300 text-sm" />
              </div>
            </div>
            <div className={`md:text-sm text-xs w-40 items-center justify-center text-center text-cyan-300 absolute ${index % 2 === 0 ? 'top-10' : 'bottom-10'} md:px-4`} >{exp.company} <div className="text-xs text-purple-300">{exp.position}</div>
            <div className="hidden md:block text-xs text-purple-300">{exp.duration}</div></div>
            {activeIndex === index && (
              <div className={`absolute ${index % 2 === 0 ? 'top-20' : 'bottom-20'} bg-black bg-opacity-80 rounded-lg p-3 backdrop-blur-sm border border-cyan-500/30 w-48 z-20`}>
                {/* <h3 className="text-sm font-semibold text-cyan-300 mb-0.5">{exp.position}</h3> */}
                <h4 className="text-xs text-purple-300 mb-0.5">{exp.company}</h4>
                <p className="text-xs text-white">{exp.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkTimeline;