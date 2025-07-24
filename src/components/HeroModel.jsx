import React, { useState } from "react";
import LaptopCanvas from "./3d/Laptop";
import { ArrowRight } from "lucide-react";
import { ContactMe } from "@/components/ContactMeDrawer";
// import myImage from "/images/grad-pic-x.png";

// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const HeroModel = () => {
  // const HeroModel = ({ scrollContainer }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      });

      controls.start({
        y: [0, -10, 0],
        transition: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      });
    };

    sequence();
  }, [controls]);

  return (
    <div id="home" className="border-b border-slate-900 text-slate-100 pb-32">
      <div className="relative h-screen flex flex-wrap justify-center items-center border-b-2 border-slate-700 overflow-hidden flex-col-reverse md:flex-row">
        <div className="z-10 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="w-full h-full flex justify-center items-center text-center z-20 ">
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col justify-center items-center"
          >
            <h2 className="font-semibold text-2xl">G'day, I'm</h2>
            <h2 className="font-semibold md:text-8xl text-4xl">Ben Ryan Rinconada</h2>
            <h2
              className="mt-2 font-bold pl-1 text-2xl text-[#353334] bg-clip-text tracking-tight
            "
            >
              Full Stack Developer
            </h2>
            <button className="mt-2" onClick={() => setDrawerOpen(true)}>
              <div className="bg-purple-500 px-4 py-2 rounded-4xl flex items-center gap-2 group transition-all hover:bg-white hover:text-purple-500 font-semibold duration-500">
                Let's Connect
                <span className="relative z-10 p-1 rounded-full bg-white text-purple-500 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight />
                  <span className="absolute inset-0 z-0 rounded-full bg-white opacity-0 scale-0 transition-all duration-500 group-hover:opacity-30 group-hover:scale-150" />
                </span>
              </div>
            </button>

            {/* Drawer */}
            <ContactMe open={drawerOpen} setOpen={setDrawerOpen} />
            {/* <p className="pt-3 pl-1 text-base pr-0 sm:pr-[60px] text-wrap w-4/6">
           Open to job opportunities worldwide. Passionate about building polished,intuitive,and thoughtful digital experiences that leave a mark.
            </p> */}
          </motion.div>
        </div>

        <ContactMe />
        {/* <motion.div
          transition={{ duration: 1, ease: "easeOut" }}
          animate={controls}
          className="w-full absolute inset-0 flex justify-center items-end z-10 bg-red "
        >
          <LaptopCanvas scrollContainer={scrollContainer} />
        </motion.div> */}

        {/* <div className=" absolute inset-0 ">asd</div> */}
      </div>
    </div>
  );
};

export default HeroModel;
