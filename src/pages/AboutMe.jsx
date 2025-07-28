import React from "react";
// eslint-disable-next-line no-unused-vars
import myImage from "/images/grad-pic.png";
import { LogoOrigami } from "./../components/myComponents/LogoOrigami";
import InfiniteSwipe from "./../components/myComponents/SwipingCards";
import { UniRevealLink } from "./../components/myComponents/UniRevealLink";
import Technologies from "./Technologies";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="text-zinc-200 lg:h-screen pt-28 px-3 md:px-5 "
    >
      <div className="lg:h-full flex flex-col justify-center items-center">
        <h2 className="font-bold text-3xl w-full">MORE ABOUT ME</h2>

        <div className="flex flex-wrap items-center w-full">
          <div className="w-full lg:w-1/2 h-full flex flex-col gap-5 text-lg">
            <div className="self-start font-bold mt-2 text-4xl lg:text-4xl xl:text-5xl">
              {/* <h2 className="">I'm Ben Ryan, a</h2>

              <h2>
                <UniRevealLink text="Tech-savvy builder" location={"#about"} />
              </h2> */}
            </div>
            <p className="pt-2 pl-1">
              I'm Ben Ryan Rinconada, a full-stack developer passionate about
              building dynamic web experiences with React, Next.js, and
              Node.js.. I thrive on solving complex problems with clean,
              efficient code and a drive to keep learning
            </p>
            <p className="pt-2 pl-1">
              Beyond work, I'm endlessly curious and believe in living life with
              purpose and balance.
            </p>
            <div className="w-full ">
              <Technologies />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-start items-end">
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
