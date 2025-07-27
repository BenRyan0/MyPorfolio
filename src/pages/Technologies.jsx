import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiTailwindcss, SiSocketdotio } from "react-icons/si";

import { FaJs } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const icons = [
  {
    icon: <FaJs />,
    hover: "group-hover:text-[#EBDA1C] hover:border-[#EBDA1C]",
    label: "JavaScript",
  },
  {
    icon: <RiReactjsLine />,
    hover: "group-hover:text-[#61DAFB] hover:border-[#61DAFB]",
    label: "React.js",
  },
  {
    icon: <IoLogoNodejs />,
    hover: "group-hover:text-[#569134] hover:border-[#569134]",
    label: "Node.js",
  },
  {
    icon: <SiMongodb />,
    hover: "group-hover:text-[#69A746] hover:border-[#69A746]",
     label : "MongoDB"
  },
  {
    icon: <SiTailwindcss />,
    hover: "group-hover:text-[#1AACB3] hover:border-[#1AACB3]",
    label : "TailwindCSS"
  },
  {
    icon: <SiSocketdotio />,
    hover: "group-hover:text-white hover:border-white",
    label : "Socket.io"
  },
];


// const iconBaseClass =
//   "border-2 border-neutral-500 rounded-full mt-3 p-1.5 text-neutral-500 transition-transform duration-300 hover:scale-120 hover:rotate-10";

const Technologies = () => {
  return (
    <div className="relative h-[200px] mt-4">
      <h2 className="font-bold text-slate-200 text-3xl text-start">
        Tech stack
      </h2>
      <p className="text-start text-sm">
        Some technologies and tools I use on daily basis.
      </p>

      <div className="text-2xl transition-transform duration-300 mt-5 grid grid-cols-3 gap-2 w-10/12">
        {icons.map((item, i) => (
          <div
            key={i}
            className={ `${item.hover} border-zinc-700 border-2 rounded-md flex px-3 py-3 justify-start items-center gap-2 group transition-all duration-300`}
          >
            <span className={` ${item.hover} text-neutral-500 transition-transform duration-300 group-hover:scale-120 hover:rotate-10`}>
              {item.icon}
            </span>
            <h2 className={`text-sm ${item.hover} `}>
              {item.label}
            </h2>
          </div>
     
        ))}
      </div>
    </div>
  );
};

export default Technologies;
