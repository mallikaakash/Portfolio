// 'use client'
// import { useState } from 'react';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { HiMenu, HiX } from 'react-icons/hi';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="bg-black bg-opacity-30 p-4 md:p-6 rounded-3xl backdrop-blur-sm hover:border-[#c8acd6] transition-colors duration-300 w-full mb-4">
//       <div className="flex flex-row items-center justify-between h-full">
//         <div className="flex items-center">
//           {/* Hamburger menu for small screens */}
//           <button 
//             className="text-[#c8acd6] md:hidden focus:outline-none"
//             onClick={toggleMenu}
//           >
//             {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//           </button>
          
//           {/* Social links for larger screens */}
//           <div className="hidden md:flex space-x-4">
//             <a href="#" className="text-[#c8acd6] hover:text-white"><FaGithub size={24} /></a>
//             <a href="#" className="text-[#c8acd6] hover:text-white"><FaLinkedin size={24} /></a>
//             <a href="#" className="text-[#c8acd6] hover:text-white"><FaTwitter size={24} /></a>
//           </div>
//         </div>
        
//         {/* Name/Initials */}
//         <h2 className="text-xl md:text-2xl font-semibold text-[#c8acd6]">
//           <span className="md:hidden">AM</span>
//           <span className="hidden md:inline">Aakash Mallik</span>
//         </h2>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="flex flex-col space-y-2 bg-black bg-opacity-50 rounded-lg p-4">
//           <a href="#" className="text-[#c8acd6] hover:text-white flex items-center">
//             <FaGithub size={20} className="mr-2" /> GitHub
//           </a>
//           <a href="#" className="text-[#c8acd6] hover:text-white flex items-center">
//             <FaLinkedin size={20} className="mr-2" /> LinkedIn
//           </a>
//           <a href="#" className="text-[#c8acd6] hover:text-white flex items-center">
//             <FaTwitter size={20} className="mr-2" /> Twitter
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client'

import Link from 'next/link';
import { useState } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { SiLeetcode } from 'react-icons/si';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" bg-black bg-opacity-50 p-4 md:p-6 h-20 rounded-3xl backdrop-blur-sm hover:border-[#c8acd6] transition-colors duration-300 w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-colitems-center justify-between h-full">
        <div className="flex flex-row items-center justify-center">
        <div className='bg-gray-400 rounded h-12 w-12 mr-2'> </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-[#c8acd6]">
          {/* <span className="sm:hidden">AM</span> */}
          <div className="flex-row inline">
            <div>Aakash Mallik</div> <div className="text-sm text-white">{`{Researcher, Developer, Writer}`}</div>
          </div>
        </h2>
        </div>
        <div className="flex items-center">
          {/* Hamburger menu for small screens */}
          {/* <button 
            className="text-[#c8acd6] md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button> */}
          
          {/* Social links for larger screens */}
          <div className="hidden md:flex space-x-4">

            <Link href="https://github.com/mallikaakash" className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 
             transform hover:scale-110 hover:rotate-3
             bg-gradient-to-br from-cyan/30 to-cyan/10
             bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
             p-2 rounded-full 
             shadow-lg hover:shadow-xl
             border border-transparent hover:border-cyan-300/40"><FaGithub size={24} /></Link>
            <Link href="https://www.linkedin.com/in/aakash-mallik-82b99423b" className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 
             transform hover:scale-110 hover:rotate-3
             bg-gradient-to-br from-cyan/30 to-cyan/10
             bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
             p-2 rounded-full 
             shadow-lg hover:shadow-xl
             border border-transparent hover:border-cyan-300/40"><FaLinkedin size={24} /></Link>
            <Link href="https://x.com/AakashMallik9" className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 
             transform hover:scale-110 hover:rotate-3
             bg-gradient-to-br from-cyan/30 to-cyan/10
             bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
             p-2 rounded-full 
             shadow-lg hover:shadow-xl
             border border-transparent hover:border-cyan-300/40"><BsTwitterX size={24} /></Link>
             <Link href="mailto:aakashmallik7777@gmail.com" className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 
             transform hover:scale-110 hover:rotate-3
             bg-gradient-to-br from-cyan/30 to-cyan/10
             bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
             p-2 rounded-full 
             shadow-lg hover:shadow-xl
             border border-transparent hover:border-cyan-300/40"><FaEnvelope size={24} /></Link>
            <Link href="https://leetcode.com/u/AakashMallik/" className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 
             transform hover:scale-110 hover:rotate-3
             bg-gradient-to-br from-cyan/30 to-cyan/10
             bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
             p-2 rounded-full 
             shadow-lg hover:shadow-xl
             border border-transparent hover:border-cyan-300/40"><SiLeetcode size={24} /></Link>
          </div>
        </div>
      </div>
    
    </div>
  );
}