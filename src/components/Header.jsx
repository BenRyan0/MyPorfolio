import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import logo from "/images/BR-white.png";
import { Menu } from 'lucide-react';
import NavBar from './NavBar';
import { IoMdClose } from "react-icons/io";


const Header = () => {
    // const [navOpen, setNavOpen] = useState(false)


  return (
   <header className="fixed top-3 left-0 right-0 w-full h-20 flex items-center z-40 container mx-auto px-5">
    <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:grid md:grid-cols-3 ">
      <h1>
        <Link to="/">
        <img
          className="h-[50px] transition-transform duration-300 hover:scale-120 hover:rotate-9"
          src={logo}
          alt="Logo"
        />
      </Link>
      </h1>


      <div className="relative md:justify-self-center text-white">
        {/* <button className="menu-btn md:hidden w-10 h-10 grid place-items-center bg-zinc-50/10 rounded-xl ring-inset ring-1 ring-zinc-50/[0.02] backdrop-blur-2xl hover:bg-zinc-50/15 transition-[transform, background-color] active:scale-95" 
        onClick={()=>setNavOpen((prev) => !prev)}>
          <span className="text-white">
            {
                navOpen ?  <IoMdClose size={25} /> : <Menu /> 
            }

          </span>
          
        </button> */}
        <NavBar/>

        
      </div>
        <div className="text-slate-100 ">
        <ul className="flex justify-end items-center gap-2 text-2xl">
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
              href="https://www.linkedin.com/in/ben-ryan-rinconada-323b25369"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className="transition-transform duration-300 hover:scale-130 hover:-rotate-9">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="X"
              href="https://www.linkedin.com/in/ben-ryan-rinconada-323b25369"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </a>
          </li>
        </ul>
        <Tooltip id="my-tooltip" />
      </div>
      
    </div>

   </header>
  );
};

export default Header;
