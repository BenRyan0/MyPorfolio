import React from "react";
import InfiniteSwipe from "./../components/myComponents/SwipingCards";
import Technologies from "./Technologies";
import { UniRevealLink } from "./../components/myComponents/UniRevealLink";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="text-zinc-200 lg:h-screen pt-28 md:pt-40 bg-red md:px-5 relative w-full "
    >
      {/* <div class="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}
      <div className="md:h-full flex flex-col justify-center items-center ">
        {/* <h2 className="font-bold text-2xl w-full Syntha-Nova">{"<"}MORE ABOUT ME{"/>"}</h2> */}
        <div className="flex items-start w-full text-2xl 2xl:text-3xl">
          <UniRevealLink text={"<MORE ABOUT ME/>"} location={"/#about"} />
        </div>

        <div className="flex  flex-wrap items-center w-full">
          <div className="w-full lg:w-7/12 h-full flex flex-col gap-3 text-base">
            <p className="pt-2 pl-1  ">
              I'm Ben Ryan Rinconada, a full-stack developer passionate about
              building dynamic web experiences with React, TailwindCss, Node.js, and MongoDB.
              I thrive on solving complex problems with clean, efficient code
              and a drive to keep learning
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
            <div className="">
              <InfiniteSwipe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
