import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
} from "react-icons/fa";
import { Tooltip } from "react-tooltip";
// import logo from "/images/BR-logo-white.png";
import NavBar from './NavBar';



const Header = ({ setDrawerOpen , activeSection}) => {
  return (
   <header className="fixed top-0 left-0 right-0 py-3 w-full h-20 flex items-center z-40 container mx-auto md:px-13 lg:px-28 px-6 backdrop-blur-sm lg:backdrop-blur-none">
    <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center md:grid md:grid-cols-3">
      <h1>
        <Link to="/">
        {/* <img
          className="h-[55px] md:h-[57px] transition-transform duration-300 hover:scale-120 hover:rotate-9"
          src={logo}
          alt="Logo"
        /> */}
         <h2 className="text-slate-100 text-3xl Syntha-Nova font-bold pt-1">
            RINCO
          </h2>
      </Link>
      </h1>


      <div className="relative md:justify-self-center text-white">
        <NavBar setDrawerOpen={setDrawerOpen}  activeSection={activeSection}/>

        
      </div>
        <div className="text-slate-100 ">
        <ul className="flex justify-end items-center gap-2 text-3xl md:text-2xl">
          <li className="transition-transform duration-300 hover:scale-130 hover:rotate-10">
            <a 
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Linkedin"
              href="https://www.linkedin.com/in/ben-ryan-rinconada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="transition-transform duration-300 hover:scale-130 hover:-rotate-9">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="GitHub"
              href="https://github.com/BenRyan0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>

          <li className="transition-transform duration-300 hover:scale-130 hover:rotate-9">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Facebook"
              href="https://web.facebook.com/nebnyar69"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
          </li>
          {/* <li className="transition-transform duration-300 hover:scale-130 hover:-rotate-9">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="X"
              href="https://www.linkedin.com/in/ben-ryan-rinconada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </a>
          </li> */}
        </ul>
        <Tooltip id="my-tooltip" />
      </div>
      
    </div>

   </header>
  );
};

export default Header;
