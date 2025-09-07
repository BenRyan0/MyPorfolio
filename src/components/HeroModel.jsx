import React from "react";
import { RiMessage3Fill } from "react-icons/ri";
import { TiChevronRight } from "react-icons/ti";
import { ContactMe } from "@/components/ContactMeDrawer";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { LogoOrigami } from "./myComponents/LogoOrigami";
import { cn } from "../lib/utils";

const HeroModel = ({ drawerOpen, setDrawerOpen }) => {
  return (
    <div id="home" className="text-zinc-50 pb-2 h-screen">
      <div className="relative h-full flex flex-wrap justify-center items-center  overflow-hidden flex-col-reverse md:flex-row">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#ffff_1px,transparent_1px),linear-gradient(to_bottom,#ffff_1px,transparent_1px)] opacity-10 "
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)] bg-main backdrop-blur-3xl"></div>
        <div className="w-full h-full flex justify-start items-center z-20 pb-20 md:pb-0 md:px-10">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-start text-start gap-1 z-30"
          >
            <motion.h2
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: .6, ease: "easeOut" }}
              className="font-semibold text-xl pl-1"
            >
              G'day, I'm
            </motion.h2>
            <h2 className="font-bold text-5xl lg:text-7xl">Ben Ryan Rinconada</h2>
            <div className="flex justify-center items-center gap-1 text-center">
              <h2
                className="font-bold pl-1 text-2xl text-gray-400
            "
              >
                Front End Developer
              </h2>
              <LogoOrigami />
            </div>
            <div className="md:w-7/12 pl-1 text-sm text-zinc-400 ">
              <p>
                I'm a recent graduate with a solid background in JavaScript, and
                I'm currently focused on mastering the MERN stack to develop
                full-stack web applications.
              </p>
            </div>

            <div className="flex justify-center items-start xs:items-center gap-3 mt-6 flex-row text-sm pl-1">
              <button
                onClick={() => setDrawerOpen(true)}
                className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md bg-gradient-to-tr from-indigo-600 to-purple-500 px-3 font-medium text-zinc-50 duration-500 active:scale-95"
              >
                <div className="relative inline-flex -translate-x-0 items-center transition group-hover:translate-x-6">
                  {/* Left icon + text */}
                  <div className="absolute flex items-center gap-1 -translate-x-2 opacity-0 transition group-hover:-translate-x-6 group-hover:opacity-100">
                    <RiMessage3Fill size={20} />
                    <span className="pl-2 font-semibold ">What's up?</span>
                  </div>
                  <span className="pr-7 pl-1 font-semibold translate-x-0 opacity-100 transition group-hover:translate-x-4 group-hover:opacity-0">
                    Let's Connect
                  </span>

                  <div className="absolute right-0 translate-x-0 opacity-100 transition group-hover:translate-x-4 group-hover:opacity-0">
                    <TiChevronRight size={20} />
                  </div>
                </div>
              </button>

              <a
                href="/pdf/Ben-Ryan-Rinconada-WebDeveloper.pdf"
                className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md px-10 font-medium text-zinc-50 active:scale-85 border-accent border-2 transition-all duration-500 bg-transparent bg-gradient-to-t to-transparent hover:scale-105 ease-in-out from-accent/20 hover:from-accent/30 "
              >
                <div className="relative inline-flex -translate-x-0 items-center transition ">
                  <span className="font-semibold">Resume</span>
                </div>
              </a>
            </div>
            <ContactMe open={drawerOpen} setOpen={setDrawerOpen} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroModel;
