import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const UniRevealLink = ({text, location}) => {
  return (
    <section className="flex justify-start md:justify-center gap-x-4 gap-y-2 py-2 text-zinc-200 Syntha-Nova">
        <FlipLink href={location}>{text}</FlipLink>
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
      className="relative block overflow-hidden text-wrap md:whitespace-nowrap  font-black uppercase  "
      style={{
        lineHeight: 0.95,
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