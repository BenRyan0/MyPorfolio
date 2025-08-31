import React, { useEffect, useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiTailwindcss, SiSocketdotio } from "react-icons/si";
import { FaJs } from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const icons = [
  {
    icon: <VscVscode />,
    hover:
      "group-hover:text-[#24A4EA] hover:border-[#24A4EA] from-[#24A4EA]/15 hover:from-[#24A4EA]/20",
    label: "VS Code",
    active:
      "text-[#24A4EA] border-[#24A4EA] from-[#24A4EA]/20 scale-105 rotate-2",
  },
  {
    icon: <FaGitAlt />,
    hover:
      "group-hover:text-[#E84D31] hover:border-[#E84D31] from-[#E84D31]/15 hover:from-[#E84D31]/20",
    label: "git",
    active:
      "text-[#E84D31] border-[#E84D31] from-[#E84D31]/20 scale-105 rotate-2",
  },
  {
    icon: <FaGithub />,
    hover:
      "group-hover:text-white hover:border-white from-white/15 hover:from-white/20  ",
    label: "GitHub",
    active: "text-white border-white from-white/20 scale-105 rotate-2",
  },


];

const MyTools = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % icons.length);
    }, 1500); // change every 1.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:h-fit mt-4">
      <p className="text-start text-sm"></p>

      <div className="text-2xl transition-transform duration-300 pt-5 mt-5 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 md:w-8/12 border-t-2 border-zinc-600 ">
        {icons.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              className={`border-2 rounded-md flex px-3 py-3 justify-center items-center gap-2 group transition-all duration-500 bg-transparent bg-gradient-to-t to-transparent hover:scale-105 ease-in-out 
              ${item.hover} ${isActive ? item.active : " border-neutral-300"}`}
            >
              <span
                className={` transition-transform duration-500 group-hover:scale-125 hover:rotate-6 
                ${item.hover} ${isActive ? item.active : "text-neutral-300"}`}
              >
                {item.icon}
              </span>
              <h2
                className={`text-sm ${item.hover} ${
                  isActive ? item.active : ""
                }`}
              >
                {item.label}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyTools;
