// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   const navItems = ["Home", "Work"];
//   return (
//     <div className="flex flex-col items-center  h-screen bg-black">
//       {/* <nav className="flex flex-row items-center justify-center w-1/4 h-12  border-2 text-white border-white  bg-white rounded-full mt-10 opacity-50 bg-opacity-0 ">
//         <div className="flex flex-row items-center justify-center w-full h-full"> {navItems.map((item, index) => (
//           <div key={index} className="flex flex-row items-center justify-center h-full p-4">
//           <Link key={index} href={`/${item.toLowerCase()}`}>
//             {item}
//           </Link>
//           </div>
//         ))}</div>
        
//       </nav> */}
//       <nav className="flex flex-row items-center justify-center w-1/4 h-12 mt-10 relative group">
//   {/* Gradient border background */}
//   <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-indigo-700 to-purple-800 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
  
//   {/* Inner content with glass effect */}
//   <div className="relative flex flex-row items-center justify-center w-full h-full bg-indigo-900 bg-opacity-30 rounded-full backdrop-blur-sm">
//     {navItems.map((item, index) => (
//       <div key={index} className="flex flex-row items-center justify-center h-full p-4">
//         <Link
//           href={`/${item.toLowerCase()}`}
//           className="text-cyan-100 hover:text-purple-300 transition-colors duration-300 font-semibold"
//         >
//           {item}
//         </Link>
//       </div>
//     ))}
//   </div>
// </nav>
//     </div>
//   );
// }
import { MdOutlineFileDownload } from 'react-icons/md'
import Navbar from "@/components/Footer";
import ProjectCarousel from "@/components/ProjectCarousel";

import { FaJs, FaPython, FaReact, FaStar } from "react-icons/fa";
import { SiNextdotjs, SiPytorch, SiTailwindcss } from "react-icons/si";
import TopBar from "@/components/TopBar";
import WorkTimeline from "@/components/WorkTimeLine";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from '@/components/Footer';

const techIcons = [
  { Icon: FaJs, name: 'JavaScript' },
  { Icon: FaReact, name: 'React' },
  { Icon: SiTailwindcss, name: 'Tailwind CSS' },
  { Icon: SiNextdotjs, name: 'Next.js' },
  { Icon: FaPython, name: 'Python' },
  { Icon: SiPytorch, name: 'PyTorch' },

];

const skills = [
  "Machine Learning",
  "Quantum ML",
  "Deep Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Data Analysis",
  // Add more skills as needed
];


export default function Home() {
  
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-black via-[#043636] to-[#015e5e] animate-gradient-shift overflow-x-hidden">
    <TopBar />
      
      <main className="flex flex-col items-center w-full mt-24 px-4">
      <div className="flex flex-col items-center w-full ">
        <Footer />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:grid-rows-2 ">
          {/* About Me Box */}
          
          <div className="bg-black bg-opacity-30 p-4 rounded-3xl backdrop-blur-sm border border-[#433d8b] hover:border-[#c8acd6] transition-colors duration-300 lg:col-span-2 md:col-span-2 sm:col-span-1 ">
    <div className="flex flex-row items-center justify-between mb-4">
    <h2 className="text-xl md:text-3xl font-semibold text-[#89d6eb]">Hello Muggles!</h2>
    <span className="text-white hover:text-white transition-all duration-300 text-sm flex flex-row 
     transform hover:scale-105 w-fit justify-center items-center
     bg-gradient-to-br from-cyan/30 to-cyan/10
     bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
     p-2 rounded-full 
     shadow-lg hover:shadow-xl
     border border-transparent hover:border-cyan-300/40"> Grab my CV<span className="text-white pl-2 hidden md:block"> <Link href="/Aakash_CV.pdf" target="_blank"><MdOutlineFileDownload size={20} /></Link></span></span>
    </div>
    <p className="text-white text-sm">
    I am a passionate researcher, aspiring developer, and contemplative writer from India. My primary ambition is to delve deep into the theoretical foundations of AI and Computer Vision while also exploring the realm of power-efficient AI.  <br></br><br></br>
    My interests span a broad spectrum, including machine learning, mathematics, astronomy, economics, literature, anime, manga, and manhwa. I thoroughly enjoy a insightful conversation on any topic... be it on the narrative depth of <span className="text-cyan-300 text-pretty">Attack on Titan</span> or on the philosophical underpinnings of the universe.<br></br><br></br>
              Currently I am pursuing my B.Tech in Electronics and Electronics Engineering from National Institute of Technology Karnataka, Surathkal and I have interned at muiltiple organizations including IISC, Wells Fargo, IIT Delhi among others. With a knack for interdisciplinary projects, I enjoy solving puzzles that address
              real-world scenarios and needs. <br></br> <br></br>
              At the moment I am learning more about Web3 and hoping to contribute to the space.
            </p>
            
          </div>
                      {/* <div className="relative bg-black bg-opacity-30 rounded-3xl backdrop-blur-sm 
            lg:col-span-2 md:col-span-2 sm:col-span-1 
            overflow-hidden group">
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500 
              opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500 
              opacity-75 group-hover:opacity-100 transition-opacity duration-300
              animate-border-flow"></div>
  <div className="relative z-10 bg-black bg-opacity-90 rounded-3xl m-[2px] p-6 transition-all duration-300
              group-hover:bg-opacity-80">
    <h2 className="text-3xl font-semibold text-[#89d6eb] mb-4">Hello There!!! Aakash here!!!</h2>
    <p className="text-white text-sm mb-4">
      I'm a final year EEE student, passionate researcher, budding developer, and a musing writer from India. I delve in a lot of things, namely machine learning, mathematics, astronomy, economics, and the list goes on. I am a firm proponent of the idea that Icarus wasn't wrong.
    </p>
    <div className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 text-sm flex items-center
         bg-gradient-to-br from-cyan-500/30 to-cyan-500/10
         bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
         px-4 py-2 rounded-full 
         shadow-lg hover:shadow-xl
         border border-transparent hover:border-cyan-300/40
         w-fit cursor-pointer">
      Grab my resume 
      <MdOutlineFileDownload size={20} className="ml-2" />
    </div>
  </div>
</div> */}


<div className="bg-black bg-opacity-30 rounded-2xl backdrop-blur-sm border border-[#433d8b] hover:border-[#bbb4bf] transition-colors duration-300 overflow-hidden p-4 lg:pb-3 h-80 lg:h-full">
  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Side Projects</h2>
  <div className="flex items-center justify-center h-5/6">
  <ProjectCarousel />
  </div>
</div>



          {/* Skills Box */}
          <div className="bg-black bg-opacity-30 p-4 rounded-3xl backdrop-blur-sm border border-[#433d8b] hover:border-[#c8acd6] transition-colors duration-300 lg:mb-10">
  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">My Tech Stack</h2>
  <div> 
    <h2 className="text-white text-sm mb-4"> I use a variety of tools that cater to my interdisciplinary interests.  The primary ones for dev/machine learning projects are : </h2>
  </div>
  <div className="flex flex-wrap items-center justify-center gap-3">
    {techIcons.map(({ Icon, name }, index) => (
      <React.Fragment key={name}>
        {index > 0 && <span className="text-cyan-500/50">•</span>}
        <div className="group relative bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 flex items-center justify-center
                        p-1 rounded-full backdrop-filter backdrop-blur-sm
                        border border-cyan-500/30 hover:border-cyan-300/50 
                        transition-all duration-300 hover:scale-110">
          <Icon 
            className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300 
                       filter drop-shadow-glow" 
            size={20} 
          />
         
        </div>
      </React.Fragment>
    ))}
  </div>
  <h2  className="text-white text-sm mt-4">
    Along with these I have also worked with Verilog, C, C++, and Assembly.
  </h2>
  {/* <div>
    <div className="flex flex-wrap items-center gap-2 py-4">
      {skills.map((skill, index) => (
        <React.Fragment key={skill}>
          {index > 0 && <FaStar className="text-cyan-500/50 text-xs" />}
          <span className="text-white text-sm hover:text-cyan-300 transition-colors duration-300">
            {skill}
          </span>
        </React.Fragment>
      ))}
    </div>
  </div> */}
</div>
          


<div className="bg-black bg-opacity-30 p-4 rounded-3xl backdrop-blur-sm border border-[#433d8b] hover:border-[#c8acd6] transition-colors duration-300 mb-10 md:col-span-2 ">
  <h2 className="text-xl md:text-2xl  font-semibold text-[#89d6eb] pb-0">Work Experience</h2>
  <div className="flex items-center justify-center  h-3/4 py-12 px-4 md:px-8">
  <WorkTimeline />
  </div>
</div>
</div>
      </main>
      
      
    </div>
  );
}