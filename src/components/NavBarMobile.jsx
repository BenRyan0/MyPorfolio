import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { House, SquareUserRound, Folder, FileText,Contact } from "lucide-react";

const NavBarMobile = ({ navOpen,setDrawerOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;
    const link = lastActiveLink.current;
    activeBox.current.style.top = link.offsetTop + "px";
    activeBox.current.style.left = link.offsetLeft + "px";
    activeBox.current.style.width = link.offsetWidth + "px";
    activeBox.current.style.height = link.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);

  const activeCurrentLink = (e) => {
    const link = e.currentTarget;

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
      icon: <House size={20} />,
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      icon: <SquareUserRound size={20} />,
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      icon: <Folder size={20} />,
      label: "Works",
      link: "#projects",
      className: "nav-link",
    },
    {
      icon: <FileText size={20} />,
      label: "Resume",
      link: "#resume",
      className: "nav-link",
    },
    {
      icon: <Contact  size={20} />,
      label: "Connect",
      link: "#Home",
      className: "nav-link",
      triggerDrawer: true,
    },
  ];

  return (
    <nav className={`navbarMobile  ${navOpen ? " active" : " opacity-0"}`}>
    {/* // <nav className={"navbarMobile active w-full flex justify-between items-center"}> */}
    {/* <nav className={"navbar" + (navOpen ? " active" : " opacity-0")}> */}
     {navItems.map(({ link, className, ref, icon, label, triggerDrawer }, key) => (
        <a
          key={key}
          href={link}
          ref={ref}
           onClick={(e) => {
              activeCurrentLink(e);
              if (triggerDrawer) {
                setDrawerOpen(true); // Only for "Connect"
              }
            }}
          className={`group relative flex flex-col items-center justify-center w-16 h-16 transition-all duration-300 ${className}`}
        >
          {/* ICON */}
          <span
            className="transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0"
          >
            {icon}
          </span>

          {/* LABEL */}
          <span
            className="absolute opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 text-sm font-medium"
          >
            {label}
          </span>
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

NavBarMobile.PropTypes = {
  navOpen: PropTypes.bool.isRequired,
};
export default NavBarMobile;
