import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { House, SquareUserRound, Folder, FileText } from "lucide-react";
// import { Tooltip } from "react-tooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const NavBar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };
  useEffect(initActiveBox, []);
  const activeCurrentLink = (e) => {
    const link = e.currentTarget; // always the <a> element

    lastActiveLink.current?.classList.remove("active");
    link.classList.add("active");
    lastActiveLink.current = link;

    activeBox.current.style.top = link.offsetTop + "px";
    activeBox.current.style.left = link.offsetLeft + "px";
    activeBox.current.style.width = link.offsetWidth + "px";
    activeBox.current.style.height = link.offsetHeight + "px";
  };

  const navItems = [
    {
      icon: <House />,
      label: "Home",
      link: "#home",
      className: "nav-link",
      ref: lastActiveLink,
    },
    {
      icon: <SquareUserRound />,
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      icon: <Folder />,
      label: "Works",
      link: "#projects",
      className: "nav-link",
    },
    {
      icon: <FileText />,
      label: "Resume",
      link: "#resume",
      className: "nav-link",
    },
  ];

  return (
    <nav className={"navbar" + (navOpen ? " active" : " opacity-0")}>
      {navItems.map(({ link, className, ref, icon, label }, key) => (
        <a
          className={className}
          href={link}
          ref={ref}
          key={key}
          onClick={activeCurrentLink}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              {/* Only one direct child element here */}
              <span className="icon-wrapper">{icon}</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>{`${label}`}</p>
            </TooltipContent>
          </Tooltip>
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

NavBar.PropTypes = {
  navOpen: PropTypes.bool.isRequired,
};
export default NavBar;
