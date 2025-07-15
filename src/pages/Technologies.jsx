import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiTailwindcss, SiSocketdotio } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const icons = [
  {
    icon: <RiReactjsLine />,
    hover: "hover:text-[#61DAFB] hover:border-[#61DAFB]",
  },
  {
    icon: <IoLogoNodejs />,
    hover: "hover:text-[#569134] hover:border-[#569134]",
  },
  {
    icon: <SiMongodb />,
    hover: "hover:text-[#69A746] hover:border-[#69A746]",
  },
  {
    icon: <SiTailwindcss />,
    hover: "hover:text-[#1AACB3] hover:border-[#1AACB3]",
  },
  {
    icon: <SiSocketdotio />,
    hover: "hover:text-white hover:border-white",
  },
];

const iconBaseClass =
  "border-2 border-neutral-500 rounded-full mt-3 p-1.5 text-neutral-500 transition-transform duration-300 hover:scale-120 hover:rotate-10";

const Technologies = () => {
  return (
    <div className="relative border-b border-slate-800 pb-20 mt-10">
      <h2 className="font-bold text-slate-200 text-3xl text-center">
        Technologies
      </h2>

      <div className="flex justify-center items-center gap-4 text-3xl transition-transform duration-300 mt-5">
        {icons.map((item, i) => (
          <motion.div
            key={i}
            className={`${iconBaseClass} ${item.hover}`}
            animate={{ y: [0, i % 2 === 0 ? -15 : 15, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
