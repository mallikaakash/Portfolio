// "use client"
// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// interface Project {
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// const projects: Project[] = [
//   {
//     title: "Project 1",
//     image: "/path/to/image1.jpg",
//     description: "This is a description of project 1",
//     link: "https://project1.com"
//   },
//   {
//     title: "Project 2",
//     image: "/path/to/image2.jpg",
//     description: "This is a description of project 2",
//     link: "https://project2.com"
//   },
//   // Add more projects here
// ];

// const ProjectCarousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => 
//         prevIndex === projects.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   const project = projects[currentIndex];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === projects.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? projects.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="w-11/12 flex items-center justify-center">
//       <div className="w-full max-w-3xl mx-auto relative ">
//         <div className="bg-black bg-opacity-30 rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-300 ">
//           {/* <div className="relative h-16 md:h-24">
//             <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//           </div> */}
//           <div className="p-4 md:p-6 flex flex-row items-center justify-between">
//             <h3 className="text-lg md:text-xl font-semibold text-cyan-300 mb-2">{project.title}</h3>

//             <Link
//               href={project.link} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="text-white hover:text-white transition-all duration-300 text-sm flex flex-row 
//      transform hover:scale-105 w-fit justify-center items-center
//      bg-gradient-to-br from-cyan/30 to-cyan/10
//      bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
//      p-2 rounded-full 
//      shadow-lg hover:shadow-xl
//      border border-transparent hover:border-cyan-300/40"
//             >
//               View Project
//             </Link>
//           </div>
//           <div className="px-4">  
//             <p className="text-white text-xs md:text-sm mb-4">{project.description}</p>
//           </div>
//         </div>
//         <button 
//           onClick={prevSlide} 
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
//         >
//           <FaChevronLeft />
//         </button>
//         <button 
//           onClick={nextSlide} 
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
//         >
//           <FaChevronRight />
//         </button>
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {projects.map((_, index) => (
//             <button
//               key={index}
//               className={`w-2 h-2 rounded-full ${
//                 index === currentIndex ? 'bg-cyan-300' : 'bg-cyan-500/30'
//               }`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCarousel;

"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
}


const projects: Project[] = [
    {
        title: "PaliGemma",
        description: " Implemented Paligemma- a Multimodal Vision Language model and the  Sigmoid Loss for Language Image Pre-Training (SIGLip) from scratch using Python and PyTorch.",
        link: "https://project2.com",
        type: "Machine Learning"
      },
  {
    title: " QGAPHEnsemble",
    description: "A novel architecture combining Hybrid QLSTM Network Ensemble via Adaptive Weighting for Short Term Weather Forecasting achieving SOTA results: MAPE BO-QEnsemble-0.91 & GenHybQLSTM-0.92.",
    link: "https://project1.com",
    type: "Machine Learning"
  },
  {
    title: "DPViz",
    description: "A web based visualizer in order to learn andunderstand various dynamic programming algorithms by means of a visual aid.",
    link: "https://project2.com",
    type: "Web Dev"
  },
  
  // Add more projects here
];

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const project = projects[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="w-full  mx-auto relative h-full px-0 sm:px-12"> {/* Added horizontal padding */}
        <div className="bg-black bg-opacity-30 rounded-3xl h-full overflow-hidden backdrop-blur-sm transition-all duration-300 p-4 pl-12 sm:p-6 ">
          <div className="flex flex-row items-center justify-between space-x-4"> {/* Added space between items */}
            <h3 className="text-sm md:text-xl font-semibold text-cyan-300 truncate flex-1">{project.title}</h3> {/* Added truncate and flex-1 */}
            {/* <Link
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-cyan-300 transition-all duration-300 text-xs
                         bg-gradient-to-br from-cyan-500/30 to-cyan-500/10
                         px-4 py-2 rounded-full whitespace-nowrap
                         border border-transparent hover:border-cyan-300/40
                         shadow-lg hover:shadow-xl hover:scale-105"
            >
              View 
            </Link> */}
          </div>
          <p className="text-purple-300 text-xs mb-4">{project.type}</p>
          <p className="text-white text-sm">{project.description}</p>
        </div>
        <button 
          onClick={prevSlide} 
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-l-full hover:bg-black/70 transition-colors duration-300"
        >
          <FaChevronLeft />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-r-full hover:bg-black/70 transition-colors duration-300"
        >
          <FaChevronRight />
        </button>
        <div className="absolute -bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-2 flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-cyan-300' : 'bg-cyan-500/30'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;