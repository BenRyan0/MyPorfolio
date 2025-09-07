import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { SiAmazon, SiGithub, SiGoogle, SiMeta, SiTwitch } from "react-icons/si";
import { twMerge } from "tailwind-merge";

import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiTailwindcss, SiSocketdotio } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";

export const LogoOrigami = () => {
  return (
    <section className="flex h-fit flex-col items-center justify-center gap-12 md:flex-row">
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
          <LogoItem key={5} className="text-black bg-black">
            <div className="bg-white rounded-full p-[2px]">
              <SiShadcnui size={10}/>
            </div>
          </LogoItem>,
          <LogoItem key={6} className="text-zinc-50 bg-black">
            <SiSocketdotio />
          </LogoItem>,
          <LogoItem key={7} className="text-zinc-50 bg-black">
            <SiGithub />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-7 w-12 shrink-0 rounded border border-neutral-700 bg-neutral-800/70"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-5 w-10 place-content-center rounded text-sm text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};
