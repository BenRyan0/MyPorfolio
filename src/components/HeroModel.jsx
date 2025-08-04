import React from "react";
import { RiMessage3Fill } from "react-icons/ri";
import { FaChevronCircleRight } from "react-icons/fa";
import { ContactMe } from "@/components/ContactMeDrawer";

// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { RevealLinks } from "./myComponents/RevealLinks";
import { LogoOrigami } from "./myComponents/LogoOrigami";

const HeroModel = ({ drawerOpen, setDrawerOpen }) => {
  // const HeroModel = ({ scrollContainer }) => {
  // const [drawerOpen, setDrawerOpen] = useState(false);
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
    <div id="home" className="text-slate-100 pb-2 h-screen">
      <div className="relative h-full flex flex-wrap justify-center items-center  overflow-hidden flex-col-reverse md:flex-row">
        <div className="z-10 absolute bottom-0 left-0 right-0 -top-30 opacity-20 bg-[linear-gradient(to_right,#697bfd_1px,transparent_1px),linear-gradient(to_bottom,#b4b6ff_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="w-full h-full flex justify-center items-center text-center z-20 pb-20 md:pb-0 ">
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col justify-center items-start md:items-center gap-3"
          >
            <h2 className="font-semibold text-2xl pl-1                                                         ">
              G'day, I'm
            </h2>
            <RevealLinks />
            <div className="flex justify-center items-center gap-2 text-center">
              <h2
                className="font-bold pl-1 text-2xl text-[#353334] tracking-tight
            "
              >
                Full Stack Developer
              </h2>
              <LogoOrigami />
            </div>

            <button
              onClick={() => setDrawerOpen(true)}
              className="mt-2 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-3xl bg-purple-500 px-6 font-medium text-neutral-200 duration-500 active:scale-85"
            >
              <div className="relative inline-flex -translate-x-0 items-center transition group-hover:translate-x-6">
                <div className="absolute -translate-x-4 opacity-0 transition group-hover:-translate-x-6 group-hover:opacity-100 rotate-shake">
                  <RiMessage3Fill size={25} />
                </div>
                <span className="pr-8 pl-1 font-semibold"> Let's Connect</span>
                <div className="absolute right-0 translate-x-0 opacity-100 transition group-hover:translate-x-4 group-hover:opacity-0 ">
                  <FaChevronCircleRight size={25} />
                </div>
              </div>
            </button>

            {/* Drawer */}
            <ContactMe open={drawerOpen} setOpen={setDrawerOpen} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroModel;
