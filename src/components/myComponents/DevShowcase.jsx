import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiTailwindcss, SiSocketdotio, SiGithub } from "react-icons/si";

// ================== COMBINED COMPONENT ==================
export const DevShowcase = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-6">
      {/* Left side: Typewriter Text */}
      <div className="flex items-center justify-center bg-green-500 px-6 py-2 rounded-xl w-[320px] md:w-[500px]">
        <Typewrite
          examples={[
            "Full Stack Developer",
            "MERN Stack Developer",
            "Backend with Node.js & Express",
            "Frontend with React & Tailwind",
            "MongoDB & Database Management",
            "API Development & Integration",
            "Responsive Web Design",
            "Problem Solver & Debugger",
          ]}
        />
      </div>

      {/* Right side: Logo Rolodex */}
      <LogoRolodex
        items={[
          <LogoItem key={1} className="text-zinc-50 bg-[#61DAFB]">
            <RiReactjsLine />
          </LogoItem>,
          <LogoItem key={2} className="text-zinc-50 bg-[#569134]">
            <IoLogoNodejs />
          </LogoItem>,
          <LogoItem key={3} className="text-zinc-50 bg-[#69A746]">
            <SiMongodb />
          </LogoItem>,
          <LogoItem key={4} className="text-zinc-50 bg-[#1AACB3]">
            <SiTailwindcss />
          </LogoItem>,
          <LogoItem key={5} className="text-zinc-50 bg-black">
            <SiSocketdotio />
          </LogoItem>,
          <LogoItem key={6} className="text-zinc-50 bg-black">
            <SiGithub />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

// ================== TYPEWRITER TEXT ==================
const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);
    return () => clearInterval(intervalId);
  }, [examples.length]);

  return (
    <p className="font-bold uppercase text-lg md:text-xl text-white text-center">
      <span>
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            key={`${exampleIndex}-${i}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * LETTER_DELAY, duration: 0 }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-white"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};

// ================== LOGO ROLODEX ==================
const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  return (
    <div
      style={{ transform: "rotateY(-20deg)", transformStyle: "preserve-3d" }}
      className="relative z-0 h-12 w-20 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          transition={{ duration: TRANSITION_DURATION_IN_SECS, ease: "easeInOut" }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>

        <motion.div
          key={(index + 1) * 2}
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{ duration: TRANSITION_DURATION_IN_SECS, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{ transform: "translateZ(1px)" }}
        className="absolute left-0 right-0 top-1/2 z-[999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({ children, className }) => (
  <div
    className={twMerge(
      "grid h-10 w-16 place-content-center rounded-lg text-2xl text-neutral-50",
      className
    )}
  >
    {children}
  </div>
);
