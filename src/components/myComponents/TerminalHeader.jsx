import React from "react";
import { MdWindow } from "react-icons/md";
import { PiGitBranch } from "react-icons/pi";

import { BsFillPersonFill } from "react-icons/bs";

const today = new Date();

// Get short month (e.g., "Sep")
const month = today.toLocaleString("en-US", { month: "short" });

// Get day with leading zero
const day = String(today.getDate()).padStart(2, "0");

// Get last two digits of year
const year = String(today.getFullYear()).slice(-2);
// Time parts
const hours = String(today.getHours()).padStart(2, "0");
const minutes = String(today.getMinutes()).padStart(2, "0");
const seconds = String(today.getSeconds()).padStart(2, "0");

const TerminalHeader = ({ err }) => {
  return (
    <div className="w-full mt-1 flex gap-1 justify-between text-[13px] font-mono h-[20px]">
      <div className="flex bg-red relative">
        <div
          className="relative flex items-center justify-center px-1 py-2 h-full bg-[#222128]  border-0 shadow-md z-[2]
          after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2
          after:left-full after:border-y-10 after:border-l-11 after:border-y-transparent
          after:border-l-[#222128] text-white"
        >
          <MdWindow size={16} />
        </div>

        <div
          className="relative flex items-center justify-center px-2 bg-green-600 border-0 shadow-md text-white
          after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2
          after:left-full after:border-y-8 after:border-l-8 after:border-y-transparent
          after:border-l-green-600 gap-1 pl-3"
        >
          <BsFillPersonFill />
          <p className="text-xs">BenRyan</p>
        </div>

        {/* Purple segment */}
        <div
          className="relative flex items-center justify-center gap-0.5 px-2 bg-purple-600 border-0 shadow-md text-white
          after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2
          after:left-full after:border-y-10 after:border-l-11 after:border-y-transparent
          after:border-l-purple-600"
        >
          <PiGitBranch />
          main
        </div>
        <div
          className={`${
            err ? "block" : "hidden"
          } relative flex items-center justify-center gap-0.5  bg-red-600 border-0 shadow-md text-white
  after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2
  after:left-full after:border-y-10 after:border-l-11 after:border-y-transparent
  after:border-l-red-600`}
        >
          !
        </div>
      </div>

      {/* Right-side info */}
      <div className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-lg shadow-md">
        <span className="text-green-400">{err ? "❌" : "✔"}</span>
        <span className="ml-1">{month}</span>
        <span className="ml-1">{day}</span>
        <span className="ml-1">{year}</span>
        <p>
          {" "}
          {hours}:{minutes}:{seconds}
        </p>
      </div>
    </div>
  );
};

export default TerminalHeader;
