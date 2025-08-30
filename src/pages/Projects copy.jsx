import React from "react";
import { PROJECTS } from "@/constants";
import { GoDotFill } from "react-icons/go";
import {
  DatabaseZap,
  Globe,
  MonitorSmartphone,
  MonitorCheck,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu"; // adjust the path as needed

import NumLabel from "../components/myComponents/NumberLabel";

import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs, IoLogoCss3 } from "react-icons/io";
import { SiMongodb, SiTailwindcss, SiSocketdotio } from "react-icons/si";
import { FaHtml5, FaChevronRight } from "react-icons/fa";
import { UniRevealLink } from "./../components/myComponents/UniRevealLink";

const Projects = () => {
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

  const renderKeyFeatures = (keyFeature) =>
    keyFeature.map((feature, i) => {
      return (
        <div
          key={i}
          className={`flex flex-row items-center font-semibold transition-colors duration-200 px-3 pt-1 gap-2 text-sm`}
        >
          <p className="flex justify-center items-center gap-1">
            <span>
              <GoDotFill />
            </span>
            <h2 className="text-sm font-bold">
              {feature.label} <span className="pl-1">({feature.content})</span>{" "}
            </h2>
            {/* {feature.content} */}
          </p>
        </div>
      );
    });

  return (
    <div
      id="works"
      className="text-zinc-200 h-full pt-6  md:px-5 pb-20 md:border-b-2 border-slate-700 "
    >
      <div className="text-slate-300 container mx-auto lg:px-7 flex justify-center flex-col items-center gap-5 h-full pt-22">
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* <h2 className="font-black text-slate-200 text-2xl lg:text-2xl pb-2 Syntha-Nova">
            {"<"}SELECTED WORKS{"/>"}
          </h2> */}
          <div className="flex items-start text-2xl md:text-3xl">
            <UniRevealLink text={"<SELECTED WORKS/>"} location={"/#about"} />
          </div>
          {PROJECTS.map((prj, index) => {
            return (
              <div
                className="w-full flex flex-col mt-10 justify-center items-center pb-2 border-b border-zinc-700/35"
                key={index}
              >
                <div className="flex justify-center gap-8 lg:w-11/12 flex-col lg:flex-row md:bg-red ">
                  <div className="relative lg:w-fit group h-fit">
                    <a
                      href={prj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        className="lg:w-[400px] w-full mb-2"
                        src={prj.image}
                        alt={`Preview of ${prj.title}`}
                      />
                    </a>
                    <a
                      href={prj.PreviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold flex-col"
                    >
                      <h2 className="flex gap-1 text-white">
                        Click to view preview <MonitorCheck />
                      </h2>
                      <p className="text-xs">{prj.title}</p>
                    </a>
                  </div>

                  <div className="lg:w-6/12 ">
                    <h2 className="font-bold flex items-center gap-3 text-xl">
                      {prj.title}
                      <div className="">
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
                                      {prj.PreviewLink && (
                                        <a
                                          href={prj.PreviewLink}
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
                                      {prj.BackendRepo && (
                                        <a
                                          href={prj.BackendRepo}
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
                                      {prj.FrontendRepo && (
                                        <a
                                          href={prj.FrontendRepo}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex flex-row items-center gap-2"
                                        >
                                          <Globe />
                                          Frontend Repo
                                          {prj.SecondFrontendRepo && (
                                            <NumLabel itemNum={1} />
                                          )}
                                        </a>
                                      )}
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                      {prj.SecondFrontendRepo && (
                                        <a
                                          href={prj.SecondFrontendRepo}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex flex-row items-center gap-2"
                                        >
                                          <Globe />
                                          Frontend Repo
                                          {prj.SecondFrontendRepo && (
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
                      </div>
                    </h2>
                    <p className="pt-2 text-sm">{prj.description}</p>
                    <div className="w-full mt-3">
                      {/* <div className="flex items-start w-full text-sm 2xl:text-base">
                        <UniRevealLink
                          text={"Key Features: "}
                          location={"/#works"}
                        />
                      </div> */}
                      <h2 className="font-bold text-base">Key Features: </h2>
                      <div className="flex flex-col">
                        {renderKeyFeatures(prj.keyFeatures)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-11/12 lg:px-3 2xl:w-9/12 mt-3 w-full">
               
                  <h2 className="font-bold text-base">Technologies Used:</h2>
                  <div className="lg:flex lg:flex-row grid grid-cols-2 justify-center gap-4 pt-1">
                    {renderTechnologies(prj.technologies)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
