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

import { Menu } from 'lucide-react';
import NavBarMobile from './NavBarMobile';
import { IoMdClose } from "react-icons/io";


const HeaderMobile = ({ setDrawerOpen }) => {
    // const [navOpen, setNavOpen] = useState(false)


  return (
   <header className="fixed bottom-2 left-0 right-0 w-full h-20 flex items-center z-40">
    <div className=" w-full flex justify-center items-center mx-3">
        <NavBarMobile setDrawerOpen={setDrawerOpen}/>    
    </div>

   </header>
  );
};

export default HeaderMobile;
