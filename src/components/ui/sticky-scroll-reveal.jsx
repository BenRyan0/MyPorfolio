"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { GoDotFill } from "react-icons/go";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu"; // adjust the path as needed

import NumLabel from "../../components/myComponents/NumberLabel";

import {
  DatabaseZap,
  Globe,
  MonitorSmartphone,
} from "lucide-react";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs, IoLogoCss3 } from "react-icons/io";
import { SiMongodb, SiTailwindcss, SiSocketdotio } from "react-icons/si";
import { FaHtml5} from "react-icons/fa";

import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: ref, // for full page scroll
    container: ref, // for container-based scroll
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Replace gradients with image URLs
  const images = [
    "/projects/project-1.jpg",
    "/projects/project-2.jpg",
  ];

  const [backgroundImage, setBackgroundImage] = useState(`url(${images[0]})`);

  useEffect(() => {
    setBackgroundImage(`url(${images[activeCard % images.length]})`);
  }, [activeCard]);

  const renderKeyFeatures = (keyFeature) =>
    keyFeature.map((feature, i) => {
      return (
        <div
          key={i}
          className={`flex flex-row items-center transition-colors duration-200 px-3 pt-1 gap-2 text-sm`}
        >
          <div className="flex justify-center items-center gap-1">
            <span>
              <GoDotFill />
            </span>
            <h2 className="text-sm">
              {feature.label} <span className="pl-1">({feature.content})</span>{" "}
            </h2>
          </div>
        </div>
      );
    });

  const iconMap = {
    HTML: FaHtml5,
    CSS: IoLogoCss3,
    "React.js": RiReactjsLine,
    "Node.js": IoLogoNodejs,
    MongoDB: SiMongodb,
    TailwindCSS: SiTailwindcss,
    "Socket.io": SiSocketdotio,
  };

  const renderTechnologies = (techList) =>
    techList.map((tech, i) => {
      const IconComponent = iconMap[tech.label];
      return (
        <div
          key={i}
          className={`flex flex-row items-center font-semibold transition-colors duration-200 px-3 py-2 gap-2 text-base ${tech.hover}`}
        >
          <span className="text-lg font-bold">
            {IconComponent ? <IconComponent /> : ""}
          </span>
          {tech.label}
        </div>
      );
    });

  return (
    <motion.div
      className="relative flex lg:h-[30rem] h-[50rem] w-full justify-center lg:space-x-10 overflow-y-scroll overflow-x-hidden rounded-md md:p-10 p-2 my-scroll-container"
      ref={ref}
    >
      <div className="div relative flex flex-col items-start px-4">
        <div className="max-w-4xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.1 }}
              >
                <div
                  style={{
                    backgroundImage: backgroundImage,
                    backgroundSize: "contain", // <-- fit the whole image
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat", // prevent tiling
                  }}
                  className={cn(
                    " w-full  aspect-[16/9] overflow-hidden rounded-md bg-white lg:hidden block mb-2",
                    contentClassName
                  )}
                >
                  {content[activeCard].content ?? null}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.1 }}
                className="flex justify-between items-center"
              >
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100 iBrand"
                >
                  {item.title}
                </motion.h2>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-sm bg-purple-600 px-2 rounded-xs text-slate-200 relative z-30 font-semibold group ">
                        Project Links{" "}
                        <Globe className="pl-2 group-hover:scale-125 transition-all duration-300 ease-in-out" />
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                          <li>
                            <NavigationMenuLink asChild>
                              {item.PreviewLink && (
                                <a
                                  href={item.PreviewLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex flex-row items-center gap-2"
                                >
                                  <MonitorSmartphone />
                                  Preview
                                </a>
                              )}
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              {item.BackendRepo && (
                                <a
                                  href={item.BackendRepo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex flex-row items-center gap-2"
                                >
                                  <DatabaseZap />
                                  Backend Repo
                                </a>
                              )}
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              {item.FrontendRepo && (
                                <a
                                  href={item.FrontendRepo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex flex-row items-center gap-2"
                                >
                                  <Globe />
                                  Frontend Repo
                                  {item.SecondFrontendRepo && (
                                    <NumLabel itemNum={1} />
                                  )}
                                </a>
                              )}
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              {item.SecondFrontendRepo && (
                                <a
                                  href={item.SecondFrontendRepo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex flex-row items-center gap-2"
                                >
                                  <Globe />
                                  Frontend Repo
                                  {item.SecondFrontendRepo && (
                                    <NumLabel itemNum={2} />
                                  )}
                                </a>
                              )}
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </motion.div>

              <div className=""></div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-sm mt-6 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.1 }}
              >
                <div className="w-full mt-3">
                  <h2 className="font-bold text-base">Key Features: </h2>
                  <div className="flex flex-col text-sm">
                    {renderKeyFeatures(item.keyFeatures)}
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.1 }}
                className="block lg:hidden mt-10 w-full "
              >
                <h2 className="font-bold text-base">Technologies Used:</h2>
                <div className="lg:flex lg:flex-row grid grid-cols-2 justify-center gap-4 pt-1">
                  {renderTechnologies(item.technologies)}
                </div>
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <div className="lg:flex flex-col justify-between w-[350px] md:w-[400px] sticky top-10 bottom-0 h-fit hidden">
        <div
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: "contain", // <-- fit the whole image
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", // prevent tiling
          }}
          className={cn(
            "sticky top-10 w-full aspect-[16/9] overflow-hidden rounded-md bg-white lg:block",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
        <div className="">
          <InfiniteMovingCards
            items={content[activeCard]?.technologies || []}
            direction="right"
            speed="slow"
            className={""}
          />
        </div>
      </div>
    </motion.div>
  );
};
