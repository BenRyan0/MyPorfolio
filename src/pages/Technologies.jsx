import React, { useEffect, useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiTailwindcss, SiSocketdotio } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

const icons = [
  {
    icon: <IoLogoHtml5 />,
    hover:
      "group-hover:text-[#DD4B25] hover:border-[#DD4B25] from-[#DD4B25]/15 hover:from-[#DD4B25]/20",
    label: "HTML",
    active: "text-[#DD4B25] border-[#DD4B25] from-[#DD4B25]/20 scale-105",
  },
  {
    icon: <IoLogoCss3 />,
    hover:
      "group-hover:text-[#0396DE] hover:border-[#0396DE] from-[#0396DE]/15 hover:from-[#0396DE]/20",
    label: "CSS",
    active: "text-[#0396DE] border-[#0396DE] from-[#0396DE]/20 scale-105",
  },
  {
    icon: <FaJs />,
    hover:
      "group-hover:text-[#EBDA1C] hover:border-[#EBDA1C] from-[#EBDA1C]/15 hover:from-[#EBDA1C]/20",
    label: "JavaScript",
    active: "text-[#EBDA1C] border-[#EBDA1C] from-[#EBDA1C]/20 scale-105",
  },
  {
    icon: <RiReactjsLine />,
    hover:
      "group-hover:text-[#61DAFB] hover:border-[#61DAFB] from-[#61DAFB]/15 hover:from-[#61DAFB]/20",
    label: "React.js",
    active: "text-[#61DAFB] border-[#61DAFB] from-[#61DAFB]/20 scale-105",
  },
  {
    icon: <IoLogoNodejs />,
    hover:
      "group-hover:text-[#569134] hover:border-[#569134] from-[#569134]/15 hover:from-[#569134]/20",
    label: "Node.js",
    active: "text-[#569134] border-[#569134] from-[#569134]/20 scale-105",
  },
  {
    icon: <SiMongodb />,
    hover:
      "group-hover:text-[#69A746] hover:border-[#69A746] from-[#69A746]/15 hover:from-[#69A746]/20",
    label: "MongoDB",
    active: "text-[#69A746] border-[#69A746] from-[#69A746]/20 scale-105",
  },
  {
    icon: <SiTailwindcss />,
    hover:
      "group-hover:text-[#1AACB3] hover:border-[#1AACB3] from-[#1AACB3]/15 hover:from-[#1AACB3]/20",
    label: "TailwindCSS",
    active: "text-[#1AACB3] border-[#1AACB3] from-[#1AACB3]/20 scale-105",
  },
  {
    icon: <FaBootstrap />,
    hover:
      "group-hover:text-[#6432AD] hover:border-[#6432AD] from-[#6432AD]/15 hover:from-[#6432AD]/20",
    label: "Bootstrap",
    active: "text-[#6432AD] border-[#6432AD] from-[#6432AD]/20 scale-105",
  },
  {
    icon: <SiSocketdotio />,
    hover:
      "group-hover:text-white hover:border-white from-white/15 hover:from-white/20 ",
    label: "Socket.io",
    active: "text-white border-white from-white/20 scale-105 ",
  },
  {
    icon: <VscVscode />,
    hover:
      "group-hover:text-[#24A4EA] hover:border-[#24A4EA] from-[#24A4EA]/15 hover:from-[#24A4EA]/20",
    label: "VS Code",
    active: "text-[#24A4EA] border-[#24A4EA] from-[#24A4EA]/20 scale-105",
  },
  {
    icon: <FaGithub />,
    hover:
      "group-hover:text-white hover:border-white from-white/15 hover:from-white/20  ",
    label: "GitHub",
    active: "text-white border-white from-white/20 scale-105 ",
  },
  {
    icon: <FaGitAlt />,
    hover:
      "group-hover:text-[#E84D31] hover:border-[#E84D31] from-[#E84D31]/15 hover:from-[#E84D31]/20",
    label: "git",
    active: "text-[#E84D31] border-[#E84D31] from-[#E84D31]/20 scale-105",
  },
];

const Technologies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % icons.length);
    }, 1500); // change every 1.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:h-fit">
      <div className="text-base transition-transform duration-300  grid grid-cols-2 md:grid-cols-4 gap-1 md:w-11/12">
        {icons.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              className={`border-none flex px-2 py-2 justify-start items-center gap-2 group transition-all duration-500  hover:scale-110 ease-in-out 
              ${item.hover} ${isActive ? item.active : " border-neutral-300"}`}
            >
              <span
                className={` transition-transform duration-500 group-hover:scale-110 
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

export default Technologies;
