import React from "react";
import InfiniteSwipe from "./../components/myComponents/SwipingCards";
import Technologies from "./Technologies";
import { cn } from "../lib/utils";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
};
const fadeDown = {
  hidden: { y: -100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
};

const fadeUp2 = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
};

const slideLeft = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 70 } },
};

const slideRight = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 70 } },
};

const AboutMe = () => {
  return (
    <div
      id="about"
      className="text-zinc-200 h-screen pt-28 md:pt-20 md:px-5 relative w-full"
    >
      {/* Background grid */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#ffff_1px,transparent_1px),linear-gradient(to_bottom,#ffff_1px,transparent_1px)] opacity-10 "
        )}
      />
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)] bg-main backdrop-blur-3xl"></div> */}

      {/* Content */}
      <motion.div
        className="md:h-full w-full flex flex-col justify-center items-center relative z-20 pl-7"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // triggers when 30% is visible
      >
        <div className="flex items-center flex-col-reverse lg:flex-row w-full">
          {/* Left Text Section */}
          <motion.div
            variants={fadeUp}
            className="w-full lg:w-7/12 h-full flex flex-col gap-3 text-base"
          >
            <motion.h2 variants={slideLeft} className="font-bold text-2xl iBrand">
              More About Me
            </motion.h2>

            <motion.p variants={slideRight} className="pt-2 pl-1 ">
              I'm Ben Ryan Rinconada, a full-stack developer passionate about
              building dynamic web experiences with React, TailwindCss, Node.js,
              and MongoDB. I thrive on solving complex problems with clean,
              efficient code and a drive to keep learning.
            </motion.p>

            <motion.p variants={slideRight} className="pl-1 text-sm ">
              Beyond work, I'm endlessly curious and believe in living life with
              purpose and balance.
            </motion.p>

            <motion.div variants={fadeUp} className="w-full">
              <h2 className="font-bold text-2xl iBrand">Tech Stack</h2>
              <p className="text-start text-sm">
                Some technologies and tools I use on daily basis.
              </p>
            </motion.div>
            <motion.div variants={fadeUp2} className="w-full">
              <Technologies />
            </motion.div>
          </motion.div>

          {/* Right Swiping Cards */}
          <motion.div
            variants={fadeDown}
            className="w-full lg:w-5/12 flex justify-center lg:justify-end items-end lg:pl-10"
          >
            <InfiniteSwipe />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
