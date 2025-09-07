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
import { cn } from "../lib/utils";

import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs, IoLogoCss3 } from "react-icons/io";
import { SiMongodb, SiTailwindcss, SiSocketdotio } from "react-icons/si";
import { FaHtml5, FaChevronRight } from "react-icons/fa";
import { UniRevealLink } from "./../components/myComponents/UniRevealLink";

import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

const Projects = () => {
  const content = [
    {
      title: "Harvestify",
      description:
        "Harvestify is a web and mobile agri-marketplace that empowers local farmers in Davao Oriental by connecting them directly with traders, enabling fair pricing, improved market access, and sustainable agricultural trade through a secure, user-friendly platform",
      FrontendRepo: "https://github.com/BenRyan0/harvestify",
      BackendRepo: "https://github.com/BenRyan0/Harvestify_api",
      SecondFrontendRepo: "https://github.com/BenRyan0/Harvestify-dashboard",
      PreviewLink: "https://harvestifytrader.vercel.app",
      keyFeatures: [
        { label: "Real-Time Messaging", content: "Socket.io" },
        { label: "Security Stack", content: "2FA with Passport & Speakeasy" },
        {
          label: "Visual & Analytical Dashboards",
          content: "Chart.js and ApexCharts",
        },
        { label: "Multilingual Accessibility", content: "via i18next" },
      ],
      technologies: [
        {
          hover: "hover:text-[#DD4B25] hover:border-[#DD4B25]",
          label: "HTML",
        },
        {
          hover: "hover:text-[#205FAA] hover:border-[#205FAA]",
          label: "CSS",
        },
        {
          hover: "hover:text-[#61DAFB] hover:border-[#61DAFB]",
          label: "React.js",
        },
        {
          hover: "hover:text-[#569134] hover:border-[#569134]",
          label: "Node.js",
        },
        {
          hover: "hover:text-[#69A746] hover:border-[#69A746]",
          label: "MongoDB",
        },
        {
          hover: "hover:text-[#1AACB3] hover:border-[#1AACB3]",
          label: "TailwindCSS",
        },
        {
          hover: "hover:text-zinc-400 hover:border-zinc-400",
          label: "Socket.io",
        },
      ],
      content: (
        <div className="flex h-full w-full items-center justify-center  relative group">
          <a
            href="https://harvestifytrader.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold flex-col"
          >
            <h2 className="flex gap-1 text-white">Click to view preview</h2>
            <p className="text-xs">Harvestify</p>
          </a>
        </div>
      ),
    },
    {
      title: "FarmFuture",
      description:
        "FarmFuture is a web-based platform that equips farmers in Mati, Davao Oriental with real-time market data and price trend analytics. By offering intuitive dashboards, historical pricing charts, and alert systems, FarmFuture empowers local farmers to make informed decisions, optimize profits, and promote sustainable agriculture.",
      FrontendRepo: "https://github.com/BenRyan0/farm-future-client",
      BackendRepo: "https://github.com/BenRyan0/farm-future-api",
      SecondFrontendRepo:
        "https://github.com/BenRyan0/farm-future-admin-seller",
      PreviewLink: "https://farm-future-consumer.vercel.app",
      technologies: [
        {
          hover: "hover:text-[#DD4B25] hover:border-[#DD4B25]",
          label: "HTML",
        },
        {
          hover: "hover:text-[#205FAA] hover:border-[#205FAA]",
          label: "CSS",
        },
        {
          hover: "hover:text-[#61DAFB] hover:border-[#61DAFB]",
          label: "React.js",
        },
        {
          hover: "hover:text-[#569134] hover:border-[#569134]",
          label: "Node.js",
        },
        {
          hover: "hover:text-[#69A746] hover:border-[#69A746]",
          label: "MongoDB",
        },
        {
          hover: "hover:text-[#1AACB3] hover:border-[#1AACB3]",
          label: "TailwindCSS",
        },
        {
          hover: "group-hover:text-white hover:border-white",
          label: "Socket.io",
        },
      ],
      keyFeatures: [
        { label: "Real-Time Messaging", content: "Socket.io" },
        { label: "Security Stack", content: "2FA with Passport & Speakeasy" },
        {
          label: "Visual & Analytical Dashboards",
          content: "Chart.js and ApexCharts",
        },
        { label: "Multilingual Accessibility", content: "via i18next" },
      ],
      content: (
        <div className="flex h-full w-full items-center justify-center  relative group">
          <a
            href="https://farm-future-consumer.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold flex-col"
          >
            <h2 className="flex gap-1 text-white">Click to view preview</h2>
            <p className="text-xs">FarmFuture</p>
          </a>
        </div>
      ),
    },
  ];

  return (
    <div
      id="works"
      className="text-zinc-200 h-full mt-[200px] pt-[100px] lg:pt-6 md:px-5 pb-20 md:border-b-2 border-slate-700 "
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#ffff_1px,transparent_1px),linear-gradient(to_bottom,#ffff_1px,transparent_1px)] opacity-10 z-0"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] bg-black/55 backdrop-blur-3xl "></div>
      <div className="w-full h-screen py-4 flex justify-center items-center z-50 flex-col">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Projects;
