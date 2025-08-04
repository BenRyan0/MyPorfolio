import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const UniRevealLink = ({ text, location }) => {
  return (
    <section className="flex justify-start md:justify-center gap-x-4 gap-y-2 py-2 text-zinc-200 Syntha-Nova">
      <FlipLink href={location}>{text}</FlipLink>
    </section>
  );
};

const DURATION = 0.4;
const STAGGER = 0.04;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden font-black uppercase tracking-wide"
      style={{ lineHeight: 0.99 }}
    >
      {/* Top Layer: Slide Out */}
      <div>
        {Array.from(children).map((char, i) => (
          <motion.span
            key={`top-${i}`}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* Bottom Layer: Slide In */}
      <div className="absolute inset-0">
        {Array.from(children).map((char, i) => (
          <motion.span
            key={`bottom-${i}`}
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
