import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaFacebookSquare } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import NavBar from "./NavBar";

const Header = ({ setDrawerOpen, activeSection }) => {
  return (
    <header className="fixed top-2 left-0 right-0 py-3 w-full h-20 flex items-center z-40 container mx-auto md:px-13 lg:px-28 sm:px-6 px-2">
      <div className=" max-w-screen-2xl w-full mx-auto flex justify-between items-center md:grid md:grid-cols-3 px-5 py-2 rounded-md backdrop-blur-2xl">
        <div className="text-slate-100 text-5xl md:text-4xl font-bold w-[50px] h-[50px] flex justify-center items-center text-center transition-all duration-600 hover:text-black hover:bg-white pt-3 hover:pt-5 relative group overflow-hidden">
          <a href="/#home" className="iBrand">br</a>

          {/* Numbers cycling in the same spot */}
          <div className="absolute top-[3px] right-[15px] text-[11px] text-black font-semibold">
            <span className="block opacity-0 group-hover:opacity-100 animate-cycle">
              03
            </span>
            <span className="block opacity-0 group-hover:opacity-100 animate-cycle delay-1">
              06
            </span>
            <span className="block opacity-0 group-hover:opacity-100 animate-cycle delay-2">
              09
            </span>
          </div>
        </div>

        {/* <a
          href="/#home"
          className="text-slate-100 text-3xl font-bold w-[40px] h-[50px] flex justify-center items-center text-center transition-all duration-300 hover:text-black hover:bg-white iBrand"
        >
          br
        </a> */}

        <div className="relative md:justify-self-center text-white">
          <NavBar setDrawerOpen={setDrawerOpen} activeSection={activeSection} />
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
                <FaLinkedin />
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
