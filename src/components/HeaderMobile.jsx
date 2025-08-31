import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { Tooltip } from "react-tooltip";

import { Menu } from "lucide-react";
import NavBarMobile from "./NavBarMobile";
import { IoMdClose } from "react-icons/io";

const HeaderMobile = ({ setDrawerOpen, activeSection }) => {
  // const [navOpen, setNavOpen] = useState(false)

  return (
    <header className="fixed bottom-0 left-0 right-0 w-full h-19 flex items-center z-50 pt-1 ">
      <div className="w-full flex justify-end items-end h-full">
        <NavBarMobile setDrawerOpen={setDrawerOpen} activeSection={activeSection} />
      </div>
    </header>
  );
};

export default HeaderMobile;
