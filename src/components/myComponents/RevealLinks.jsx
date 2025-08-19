import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section className="flex flex-wrap justify-start md:justify-center gap-x-4 gap-y-2 text-zinc-50 Syntha-Nova ">
      <div className="flex flex-row gap-4 w-full justify-start md:justify-center sm:w-auto sm:flex-row text-start ">
        {/* <FlipLink href="#home">{"<"}</FlipLink> */}
        <h2 className="hidden md:block  text-lg font-bold uppercase sm:text-lg md:text-5xl lg:text-6xl 2xl:text-7xl">{"<"}</h2>
        <FlipLink href="#home">BEN</FlipLink>
        <FlipLink href="#home">RYAN</FlipLink>
      </div>
      <div className="flex flex-row gap-4 w-full justify-start md:justify-center sm:w-auto sm:flex-row ">
        <FlipLink href="#home">RINCONADA</FlipLink>
      <h2 className="hidden md:block  text-lg font-bold uppercase sm:text-lg md:text-5xl lg:text-6xl 2xl:text-7xl">{"/>"}</h2>
        {/* <FlipLink className="hidden opacity-0" href="#home">{"/>"}</FlipLink> */}
      </div>
    </section>
  );
};



const DURATION = 0.40;
const STAGGER = 0.040;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden text-wrap md:whitespace-nowrap  font-bold uppercase text-4xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl"
      style={{
        lineHeight: .99,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};