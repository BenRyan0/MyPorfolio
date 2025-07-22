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
import NavBar from './NavBarMobile';
import { IoMdClose } from "react-icons/io";


const HeaderMobile = () => {
    // const [navOpen, setNavOpen] = useState(false)


  return (
   <header className="fixed bottom-0 left-0 right-0 w-full h-20 flex items-center z-40 px-5">
    <div className=" w-full flex justify-center items-center  ">
        <NavBar/>    
    </div>

   </header>
  );
};

export default HeaderMobile;
