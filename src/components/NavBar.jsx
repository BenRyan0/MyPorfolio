import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import logo from "/images/BR-white.png";



const NavBar = () => {
  return (
    <div className="fixed top-2 left-0 right-0 flex justify-between mx-auto container pt-5 items-center px-8 z-50">
      <Link to="/">
        <img
          className="h-[50px] transition-transform duration-300 hover:scale-120 hover:rotate-9"
          src={logo}
          alt="Logo"
        />
      </Link>

      <div className="text-slate-100">
        <ul className="flex justify-center gap-2 text-2xl">
          <li className="transition-transform duration-300 hover:scale-130 hover:rotate-10">
            <a 
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Linkedin"
              href="https://www.linkedin.com/in/ben-ryan-rinconada-323b25369"
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
              data-tooltip-content="Instagram"
              href="https://www.linkedin.com/in/ben-ryan-rinconada-323b25369"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
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
  );
};

export default NavBar;
