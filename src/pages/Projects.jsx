import React from "react";
import { PROJECTS } from "@/constants";
import { FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
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

const Projects = () => {
  return (
    <div className=" relative border-b border-slate-800 pb-20 pt-10 overflow-hidden">
      <Tooltip
        id="my-tooltip"
        className="z-50 !bg-purple-600 font-bold px-0 text-center"
      />

      <h2 className="font-bold text-slate-200 text-3xl text-center">
        Projects
      </h2>
      <div className="text-slate-300 container mx-auto lg:px-20 flex justify-center flex-col items-center gap-5 mt-10">
        {PROJECTS.map((prj, index) => {
          return (
            <div
              className="lg:w-5/6 flex flex-col lg:flex-row lg:justify-between mt-5"
              key={index}
            >
              <div className="relative">
                <h2 className="font-bold">
                  <a
                    href={prj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group block w-fit"
                  >
                    <img
                      className="lg:w-[300px] w-full mb-2"
                      src={prj.image}
                      alt="Project Preview"
                    />
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
                  </a>
                </h2>
              </div>
              <div className="lg:w-7/12 ">
                <h2 className="font-bold flex items-center gap-3">
                  {prj.title}
                  <div className="">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger className="text-sm bg-purple-600 px-2 rounded-xs text-slate-200 relative z-50 font-semibold group ">
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
                <div className="flex gap-3 mt-5">
                  {prj.technologies.map((tech, i) => {
                    return (
                      <h2 key={i} className="font-bold text-sm text-purple-600">
                        {tech}
                      </h2>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
