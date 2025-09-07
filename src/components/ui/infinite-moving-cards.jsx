"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

// ✅ Example iconMap (import your own icons here)
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs, IoLogoCss3 } from "react-icons/io";
import { SiMongodb, SiTailwindcss, SiSocketdotio } from "react-icons/si";
import { FaHtml5, FaChevronRight } from "react-icons/fa";

const iconMap = {
    HTML: FaHtml5,
    CSS: IoLogoCss3,
    "React.js": RiReactjsLine,
    "Node.js": IoLogoNodejs,
    MongoDB: SiMongodb,
    TailwindCSS: SiTailwindcss,
    "Socket.io": SiSocketdotio,
  };


export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "8s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // ✅ New rendering for technologies
  const renderTechnologies = (techList) =>
    techList.map((tech, i) => {
      const IconComponent = iconMap[tech.label];
      return (
        <div
          key={i}
          className={`flex flex-row items-center font-semibold transition-colors duration-200 px-3 py-2 gap-2 text-zinc-50  justify-center text-sm ${tech.hover}`}
        >
          <span className="text-sm font-bold">
            {IconComponent ? <IconComponent /> : ""}
          </span>
          {tech.label}
        </div>
      );
    });

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  overflow-hidden",
        className
      )}
    >
      <h2 className="mt-3 font-bold text-sm text-zinc-50 ">Tech Stack Used :</h2>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-2  text-main pt-3",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            className="relative w-fit shrink-0"
            key={index}
          >
            {renderTechnologies([item])}
          </li>
        ))}
      </ul>
    </div>
  );
};
