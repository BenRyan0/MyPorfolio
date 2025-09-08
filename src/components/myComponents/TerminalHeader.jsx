import React from "react";
import { MdWindow } from "react-icons/md";
import { PiGitBranch } from "react-icons/pi";

import { BsFillPersonFill } from "react-icons/bs";

const today = new Date();

// Force PH timezone (Asia/Manila)
const options = { timeZone: "Asia/Manila" };

// Get short month (e.g., "Sep")
const month = today.toLocaleString("en-US", { month: "short", ...options });

// Get day with leading zero
const day = today.toLocaleString("en-US", { day: "2-digit", ...options });

// Get last two digits of year
const year = today.toLocaleString("en-US", { year: "2-digit", ...options });

// Time in 12-hour format with seconds
const timeString = today.toLocaleString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
//   second: "2-digit",
  hour12: true,
  ...options,
});

const TerminalHeader = ({ err }) => {
  return (
    <div className="w-full mt-1 flex gap-1 justify-between text-[13px] font-mono h-[20px]">
      <div className="flex bg-red relative">
        <div
          className="relative flex items-center justify-center px-1 py-2 h-full bg-[#222128]  border-0 shadow-md z-[3]
          after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2
          after:left-full after:border-y-10 after:border-l-10 after:border-y-transparent
          after:border-l-[#222128] text-white"
        >
          <MdWindow size={16} />
        </div>

        <div
          className="relative flex items-center justify-center px-2 bg-green-600 border-0 shadow-md text-white z-[2]
          after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2
          after:left-full after:border-y-10 after:border-l-10 after:border-y-transparent
          after:border-l-green-600 gap-1 pl-3"
        >
          <BsFillPersonFill />
          <p className="text-xs">BenRyan</p>
        </div>

        {/* Purple segment */}
        <div
          className="relative flex items-center justify-center gap-0.5 px-2 pl-3 bg-purple-600 border-0 shadow-md text-white z-[1]
          after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2
          after:left-full after:border-y-10 after:border-l-10 after:border-y-transparent
          after:border-l-purple-600"
        >
          <PiGitBranch />
          main
        </div>
        {/* <div
          className={`${
            err ? "block" : "hidden"
          } relative flex items-center justify-center gap-0.5 pl-3  bg-red-600 border-0 shadow-md text-white
  after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2
  after:left-full after:border-y-10 after:border-l-11 after:border-y-transparent
  after:border-l-red-600`}
        >
          !err
        </div> */}
      </div>

      {/* Right-side info */}
      <div className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-lg shadow-md">
        <span className="text-green-400">{err ? "❌" : "✔"}</span>
        <span className="ml-1">{month}</span>
        <span className="ml-1">{day}</span>
        <span className="ml-1">{year}</span>
        <span className="ml-1">{timeString}</span>
      </div>
    </div>
  );
};

export default TerminalHeader;
