import React from "react";
import LaptopCanvas from "./3d/Laptop";


// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Hero = ({ scrollContainer }) => {
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
    <div className="border-b border-slate-900 text-slate-100 pb-32 bg-transparent">
      <div className="relative h-screen flex flex-wrap justify-center items-center border-b-2 border-slate-700 overflow-hidden ">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* <div className="w-full lg:w-6/12 z-30 pointer-events-none">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col lg:items-start"
          >
            <h2 className="font-thin text-6xl">Ben Ryan Rinconada</h2>
            <h2
              className="mt-4 font-bold pl-1 text-2xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent
            "
            >
              Full Stack Developer
            </h2>
            <p className="pt-3 pl-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </motion.div>
        </div> */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={controls}
          className="absolute inset-0 z-20 h-screen w-screen pointer-events-none bg-transparent"
        >
          <LaptopCanvas scrollContainer={scrollContainer} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
