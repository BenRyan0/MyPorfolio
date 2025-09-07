import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
} from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import NavBar from './NavBar';



const Header = ({ setDrawerOpen , activeSection}) => {
  return (
   <header className="fixed top-2 left-0 right-0 py-3 w-full h-20 flex items-center z-40 container mx-auto md:px-13 lg:px-28 sm:px-6 px-2 backdrop-blur-sm lg:backdrop-blur-lg">
    <div className="bg-transparent max-w-screen-2xl w-full mx-auto flex justify-between items-center md:grid md:grid-cols-3 px-5 py-2 rounded-md  ">
      <h1>
        <Link to="/">
         <h2 className="text-slate-100 text-3xl Syntha-Nova font-bold pt-1 w-fit hover:scale-105 transition-all duration-300 hover:text-accent">
            RINCO
          </h2>
      </Link>
      </h1>


      <div className="relative md:justify-self-center text-white">
        <NavBar setDrawerOpen={setDrawerOpen}  activeSection={activeSection}/>

        
      </div>
        <div className="text-slate-100 ">
        <ul className="flex justify-end items-center gap-3 text-3xl md:text-2xl">
          <li className="transition-transform duration-300 hover:scale-130 hover:rotate-10 hover:text-blue-500 hover:bg-white p-0 outline-0 rounded">
            <a 
              data-tooltip-id="my-tooltip"
            //   data-tooltip-content="Linkedin"
              href="https://www.linkedin.com/in/ben-ryan-rinconada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin/>
            </a>
          </li>
          <li className="transition-transform duration-300 hover:scale-130 hover:-rotate-9 hover:text-black hover:bg-white outline-0 rounded-full p-[1px]">
            <a
              data-tooltip-id="my-tooltip"
            //   data-tooltip-content="GitHub"
              href="https://github.com/BenRyan0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>

          <li className="transition-transform duration-300 hover:scale-130 hover:rotate-9 hover:text-[#007CF7] hover:bg-white p-0 outline-0 rounded">
            <a
              data-tooltip-id="my-tooltip"
            //   data-tooltip-content="Facebook"
              href="https://www.facebook.com/benRyan369"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
          </li>

        </ul>
        {/* <Tooltip id="my-tooltip" /> */}
      </div>
      
    </div>

   </header>
  );
};

export default Header;
