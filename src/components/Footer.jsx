import React from "react";
import { ContactMe } from "@/components/ContactMeDrawer";
import { RiMessage3Fill } from "react-icons/ri";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaFacebookSquare } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const Footer = ({ drawerOpen, setDrawerOpen }) => {
  return (
    <div className="h-fit mt-0 md:mt-22 mb-22 md:mb-2 static bottom-0 right-0 left-0  text-zinc-100 flex flex-col justify-center items-center">
      <div className="w-full text-center">
        <h2 className="font-black text-4xl bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="pt-2">
          Have a project in mind? Let's work together to bring your ideas to
          life!
        </p>
        <button
          onClick={() => setDrawerOpen(true)}
          className="mt-5 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-3xl bg-purple-500 px-6 font-medium text-neutral-200 duration-500 active:scale-85"
        >
          <div className="relative inline-flex -translate-x-0 items-center transition group-hover:translate-x-6">
            <div className="absolute -translate-x-4 opacity-0 transition group-hover:-translate-x-6 group-hover:opacity-100 rotate-shake">
              <RiMessage3Fill size={25} />
            </div>
            <span className="pr-8 pl-1 font-semibold "> Let's Connect</span>
            <div className="absolute right-0 translate-x-0 opacity-100 transition group-hover:translate-x-4 group-hover:opacity-0 ">
              <FaChevronCircleRight size={25} />
            </div>
          </div>
        </button>

        {/* Drawer */}
        <ContactMe open={drawerOpen} setOpen={setDrawerOpen} />

        <div className="text-slate-100 mt-10 py-4">
          <ul className="flex justify-center items-center gap-2 text-3xl md:text-3xl">
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
          </ul>
          <Tooltip id="my-tooltip" />
        </div>
      </div>
      <div className="mt-10">
        <p className="text-xs">
          © {new Date().getFullYear()} Ben Ryan Rinconada
        </p>
      </div>
    </div>
  );
};

export default Footer;
