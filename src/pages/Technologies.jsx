import React, { useEffect, useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiTailwindcss, SiSocketdotio } from "react-icons/si";
import { FaJs } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { UniRevealLink } from "./../components/myComponents/UniRevealLink";

const icons = [
  {
    icon: <FaJs />,
    hover:
      "group-hover:text-[#EBDA1C] hover:border-[#EBDA1C] from-[#EBDA1C]/15 hover:from-[#EBDA1C]/20",
    label: "JavaScript",
    active: "text-[#EBDA1C] border-[#EBDA1C] from-[#EBDA1C]/20 scale-105 rotate-2",
  },
  {
    icon: <RiReactjsLine />,
    hover:
      "group-hover:text-[#61DAFB] hover:border-[#61DAFB] from-[#61DAFB]/15 hover:from-[#61DAFB]/20",
    label: "React.js",
    active: "text-[#61DAFB] border-[#61DAFB] from-[#61DAFB]/20 scale-105 rotate-2",
  },
  {
    icon: <IoLogoNodejs />,
    hover:
      "group-hover:text-[#569134] hover:border-[#569134] from-[#569134]/15 hover:from-[#569134]/20",
    label: "Node.js",
    active: "text-[#569134] border-[#569134] from-[#569134]/20 scale-105 rotate-2",
  },
  {
    icon: <SiMongodb />,
    hover:
      "group-hover:text-[#69A746] hover:border-[#69A746] from-[#69A746]/15 hover:from-[#69A746]/20",
    label: "MongoDB",
    active: "text-[#69A746] border-[#69A746] from-[#69A746]/20 scale-105 rotate-2",
  },
  {
    icon: <SiTailwindcss />,
    hover:
      "group-hover:text-[#1AACB3] hover:border-[#1AACB3] from-[#1AACB3]/15 hover:from-[#1AACB3]/20",
    label: "TailwindCSS",
    active: "text-[#1AACB3] border-[#1AACB3] from-[#1AACB3]/20 scale-105 rotate-2",
  },
  {
    icon: <SiSocketdotio />,
    hover:
      "group-hover:text-white hover:border-white from-white/15 hover:from-white/20 ",
    label: "Socket.io",
    active: "text-white border-white from-white/20 scale-105 rotate-2",
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
    <div className="relative md:h-fit mt-4">
      <div className="flex items-start text-2xl 2xl:text-3xl">
        <UniRevealLink text={"<Tech stack/>"} location={"/#about"} />
      </div>

      <p className="text-start text-sm">
        Some technologies and tools I use on daily basis.
      </p>

      <div className="text-2xl transition-transform duration-300 mt-5 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 md:w-8/12">
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
              <h2 className={`text-sm ${item.hover} ${isActive ? item.active : ""}`}>
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
