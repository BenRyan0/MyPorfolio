import React from "react";
import InfiniteSwipe from "./../components/myComponents/SwipingCards";
import Technologies from "./Technologies";
import { cn } from "../lib/utils";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="text-zinc-200 lg:h-screen pt-28 md:pt-20 bg-red md:px-5 relative w-full"
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#ffff_1px,transparent_1px),linear-gradient(to_bottom,#ffff_1px,transparent_1px)] opacity-10 "
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)] bg-main backdrop-blur-3xl"></div>
      <div className="md:h-full flex flex-col justify-center items-center relative z-20 pl-7">
        <div className="flex  items-center flex-col-reverse lg:flex-row w-full">
          <div className="w-full lg:w-7/12 h-full flex flex-col gap-3 text-base">
            <h2 className="font-bold text-2xl ">More About Me</h2>
            <p className="pt-2 pl-1  ">
              I'm Ben Ryan Rinconada, a full-stack developer passionate about
              building dynamic web experiences with React, TailwindCss, Node.js,
              and MongoDB. I thrive on solving complex problems with clean,
              efficient code and a drive to keep learning
            </p>
            <p className="pl-1">
              Beyond work, I'm endlessly curious and believe in living life with
              purpose and balance.
            </p>
            <div className="w-full ">
              <Technologies />
            </div>
          </div>
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end items-end lg:pl-10">
              <InfiniteSwipe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
