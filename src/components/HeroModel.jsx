import React from "react";
import LaptopCanvas from "./3d/Laptop";
// import myImage from "/images/grad-pic-x.png";


// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const HeroModel = ({ scrollContainer }) => {
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
      <div className="relative lg:h-screen flex flex-wrap justify-center items-center border-b-2 border-slate-700 overflow-hidden flex-col-reverse md:flex-row">
        <div className="z-10 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="w-full lg:w-6/12 z-20">
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
            <p className="pt-3 pl-1 text-base pr-0 sm:pr-[60px] text-wrap">
             Fueled by curiosity and a love for building seamless digital experiences, I specialize in JavaScript, Node.js, and React.js. 
             I thrive in dynamic environments, enjoy collaborative problem-solving, and embrace challenges that push the boundaries of web development.
            </p>
          </motion.div>
        </div>
         <motion.div
          //  initial={{ x: 200, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
           animate={controls}
          className="w-full lg:w-6/12 flex justify-center items-end z-30 "
        >
         <LaptopCanvas scrollContainer={scrollContainer} />
        </motion.div>

        {/* <div className=" absolute inset-0 ">asd</div> */}
      </div>
    </div>
  );
};

export default HeroModel;
